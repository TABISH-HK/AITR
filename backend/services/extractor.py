"""
LLM-based data extractor using the NVIDIA NIM API.
Sends the parsed document text to the configured model and returns
a validated JSON dict of financial fields.
"""
from __future__ import annotations

import json
import logging
import textwrap
import time
from typing import Any, Dict, Optional

import httpx

from services.parsers.base import ParsedDocument
from settings import settings

logger = logging.getLogger(__name__)

EXTRACTION_SCHEMA = {
    "form_type": "ITR-1 | ITR-2 | ITR-4",
    "assessment_year": "string e.g. 2026-27",
    "pan": "string or null",
    "name": "string or null",
    # --- Common Income Heads ---
    "gross_salary": "number or null",
    "exemptions_u10": "number or null (HRA, LTA, etc.)",
    "professional_tax": "number or null",
    "net_salary": "number or null",
    "house_property_income": "number or null (can be negative for loss)",
    "other_income": "number or null (interest, dividends, etc.)",
    # --- Deductions (Old Regime) ---
    "deduction_80c": "number or null",
    "deduction_80ccd1b": "number or null (NPS additional)",
    "deduction_80d": "number or null",
    "deduction_80tta": "number or null",
    "other_deductions": "number or null",
    # --- Capital Gains (ITR-2) ---
    "stcg_111a": "number or null (short-term listed equity u/s 111A)",
    "ltcg_112a": "number or null (long-term listed equity u/s 112A)",
    "other_stcg": "number or null",
    "other_ltcg": "number or null",
    # --- Presumptive Income (ITR-4) ---
    "turnover_44ad": "number or null",
    "receipts_44ada": "number or null",
    "vehicles_44ae": "number or null (count of vehicles)",
    "is_digital_receipts_44ad": "boolean or null",
    # --- TDS / Advance Tax / Total Income ---
    "total_income": "number or null (if listed directly as Total Income)",
    "tds_total": "number or null (total taxes paid or TDS)",
}

SYSTEM_PROMPT = textwrap.dedent("""\
    You are an expert Indian Income Tax Return (ITR) analysis assistant.
    Extract financial and tax figures from the provided ITR document or ITR Acknowledgement.

    CRITICAL RULES:
    1. Return ONLY a valid JSON object matching the schema. No markdown fences, no conversational prose.
    2. Identify the ITR form type ("ITR-1", "ITR-2", or "ITR-4").
    3. If the document is an ITR Acknowledgement or summary showing "Total Income" or "Gross Salary", map it appropriately.
    4. If "Total Income" is present but specific breakdown is unavailable, set "other_income" or "gross_salary" or "total_income" to that figure so tax liability is computable.
    5. Clean all monetary numbers into plain numeric integers/floats (e.g. 7,61,020 -> 761020, 44,644 -> 44644).
    6. Return null for fields truly absent from the document.
""")


def _build_user_prompt(document_text: str) -> str:
    schema_str = json.dumps(EXTRACTION_SCHEMA, indent=2)
    # Give the model up to 28,000 characters of high-signal text
    truncated = document_text[:28_000]
    return (
        f"Extract all applicable financial and tax figures from this Indian Income Tax Return document.\n"
        f"Return ONLY valid JSON matching this schema:\n{schema_str}\n\n"
        f"--- DOCUMENT CONTENT ---\n{truncated}\n--- END DOCUMENT ---"
    )


def extract_fallback_regex(text: str) -> Dict[str, Any]:
    """Deterministic regex extraction for standard Indian ITR forms and acknowledgements."""
    import re
    data: Dict[str, Any] = {
        "form_type": "ITR-1",
        "assessment_year": "2026-27",
        "pan": None,
        "name": None,
        "father_name": None,
        "address": None,
        "email": None,
        "mobile": None,
        "status": "Individual",
        "dob": None,
        "aadhaar": None,
        "filing_status": "Original - 139(1) On or before due date",
        "ack_no": None,
        "filing_date": None,
        "bank_name": None,
        "bank_account": None,
        "bank_ifsc": None,
        "bank_type": None,
        "nature_of_business": None,
        "gross_salary": None,
        "exemptions_u10": None,
        "professional_tax": None,
        "net_salary": None,
        "house_property_income": None,
        "other_income": None,
        "deduction_80c": None,
        "deduction_80ccd1b": None,
        "deduction_80d": None,
        "deduction_80tta": None,
        "other_deductions": None,
        "stcg_111a": None,
        "ltcg_112a": None,
        "other_stcg": None,
        "other_ltcg": None,
        "vda_income": None,
        "turnover_44ad": None,
        "turnover_44ad_digital": None,
        "turnover_44ad_cash": None,
        "turnover_44ad_other": None,
        "deemed_profit_44ad_digital": None,
        "deemed_profit_44ad_cash": None,
        "receipts_44ada": None,
        "vehicles_44ae": None,
        "is_digital_receipts_44ad": None,
        "total_income": None,
        "tds_total": None,
        "presumptive_income_44ad": None,
        "business_income": None,
        "sundry_creditors": None,
        "inventories": None,
        "sundry_debtors": None,
        "cash_in_hand": None,
        "total_assets": None,
    }

    # 1. Form Type: e.g. ITR-1, ITR-2, ITR-4, or ITR4 SUGAM
    m_form = re.search(r'\b(ITR-?[1234])\b', text, re.I)
    if m_form:
        raw_f = m_form.group(1).upper()
        if "4" in raw_f or "SUGAM" in text.upper():
            data["form_type"] = "ITR-4"
        elif "2" in raw_f:
            data["form_type"] = "ITR-2"
        else:
            data["form_type"] = "ITR-1"

    # 1b. Assessment Year — detect from PDF (e.g. "2025-26" or "2026-27")
    m_ay = re.search(r'Assessment\s+Year\s*\n?\s*(20\d{2}-\d{2})', text, re.I)
    if not m_ay:
        m_ay = re.search(r'AY\s*(20\d{2}-\d{2})', text, re.I)
    if m_ay:
        data["assessment_year"] = m_ay.group(1)

    # 2. PAN
    m_pan = re.search(r'\b([A-Z]{5}[0-9]{4}[A-Z])\b', text)
    if m_pan:
        data["pan"] = m_pan.group(1)

    # 3. Name — multiple strategies for ITR-1/ITR-2/ITR-4 layout variations
    # Strategy A: ITR-1/4 style "(A1) First Name ... (A3) Last Name ..."
    m_first_last = re.search(
        r'\(A1\)\s*First\s*Name\s*([A-Z][A-Z\s]*?)\s*(?:\(A2\)[^\n]*\n)?\s*\(A3\)\s*Last\s*Name\s*([A-Z][A-Z\s]*)',
        text, re.I
    )
    if m_first_last:
        data["name"] = f"{m_first_last.group(1).strip()} {m_first_last.group(2).strip()}".strip()

    # Strategy B: ITR-2 style — "NASEEM ALI AGEPA8338D" on same line after "(A3) Last Name"
    if not data["name"]:
        m_itr2_name = re.search(
            r'\(A1\)\s*First\s*Name\s*\n([A-Z][A-Z\s]+?)\s+[A-Z]{5}\d{4}[A-Z]\b',
            text, re.S
        )
        if m_itr2_name:
            data["name"] = m_itr2_name.group(1).strip()

    # Strategy C: Verification declaration "I, NASEEM ALI son/daughter of"
    if not data["name"]:
        m_decl = re.search(r'I,\s*([A-Za-z][A-Za-z\s]{2,40}?)\s+son/\s*daughter\s+of\s+', text, re.I)
        if m_decl:
            data["name"] = m_decl.group(1).strip()

    # Strategy D: Generic "Name <NAME>" line
    if not data["name"]:
        m_name = re.search(r'^Name\s+([A-Z\s]{3,35})(?:\s+Address|\s+PAN|\s+Status|\n|$)', text, re.M)
        if m_name:
            data["name"] = m_name.group(1).strip()

    # Assessee personal / filing metadata
    m_father = re.search(r'son/\s*daughter\s*of\s+([A-Z\s]+?)\s+solemnly', text, re.I)
    if m_father:
        data["father_name"] = m_father.group(1).strip()

    # DOB: Look for DD/MM/YYYY pattern after "Date of Birth"
    m_dob = re.search(r'Date\s+of\s+Birth[^\n]*\n[^\n]*?(\d{2}/\d{2}/\d{4})', text, re.I)
    if not m_dob:
        m_dob = re.search(r'Date\s+of\s+Birth\s*[\r\n]+\s*(\d{2}/\d{2}/\d{4})', text, re.I)
    if m_dob:
        data["dob"] = m_dob.group(1)

    # Aadhaar: extract 12-digit masked number (e.g. "7xxx xxxx 1485" or "1234 5678 9012")
    m_aadh_std = re.search(r'\b([0-9xX]{4}\s+[0-9xX]{4}\s+\d{4})\b', text)
    if m_aadh_std:
        data["aadhaar"] = m_aadh_std.group(1).strip()
    else:
        m_aadhaar = re.search(r'Aadhaar\s+(?:Number|No\.?)[^\n]*\n([^\n]{0,40})', text, re.I)
        if m_aadhaar:
            raw_aadh = m_aadhaar.group(1).strip()
            aadh_m = re.search(r'([0-9xX]{4}\s+[0-9xX]{4}\s+\d{4})', raw_aadh)
            if aadh_m:
                data["aadhaar"] = aadh_m.group(1).strip()
            else:
                candidate = re.sub(r'[^0-9xX\s]', '', raw_aadh).strip()
                if len(candidate) >= 12:
                    data["aadhaar"] = candidate[-14:].strip()

    # Mobile: "91 9219616445" pattern or "9219616445" directly
    m_mobile = re.search(r'Primary\s+Mobile\s+No\.?[^\n]*\n(?:[^\n]*\n)?\s*(?:91\s+)?([6-9]\d{9})', text, re.I)
    if not m_mobile:
        m_mobile = re.search(r'Mobile[^\n]*\n\s*(?:\+?91\s+)?([6-9]\d{9})', text, re.I)
    if m_mobile:
        data["mobile"] = m_mobile.group(1)

    # Email: look for Primary Email ID label first, else generic email pattern
    m_email = re.search(r'Primary\s+Email\s+ID[^\n]*\n\s*([\w\.\-]+@[\w\.\-]+\.[a-zA-Z]{2,})', text, re.I)
    if not m_email:
        m_email = re.search(r'([\w\.\-]+@[\w\.\-]+\.[a-zA-Z]{2,})', text)
    if m_email:
        data["email"] = m_email.group(1).strip()

    m_ack = re.search(r'Acknowledgement\s+(?:Number|No\.?)\s*:?\s*(\d+)', text, re.I)
    if m_ack:
        data["ack_no"] = m_ack.group(1)

    m_fdate = re.search(r'Date\s+of\s+Filing\s*:?\s*([\d\w\-]+)', text, re.I)
    if not m_fdate:
        m_fdate = re.search(r'Date\s*:\s*([\d\w\-]+)\s+Place\s*:', text, re.I)
    if m_fdate:
        data["filing_date"] = m_fdate.group(1).rstrip('*').strip()

    m_nature = re.search(r'SCHEDULE BP.*?COMPUTATION OF PRESUMPTIVE BUSINESS INCOME.*?1\s+(\w+)\s+([\d]{5})-([^\n]+)', text, re.S)
    if m_nature:
        data["nature_of_business"] = f"{m_nature.group(3).strip()} ({m_nature.group(2)}), Trade Name: {m_nature.group(1)}"
    else:
        m_nat2 = re.search(r'1\s+(\w+)\s+([\d]{5})-([^\n]+)', text)
        if m_nat2:
            data["nature_of_business"] = f"{m_nat2.group(3).strip()} ({m_nat2.group(2)}), Trade Name: {m_nat2.group(1)}"

    m_bank = re.search(r'([A-Z]{4}0[A-Z0-9]{6})\s+([A-Za-z\s]+?)\s+(\d{9,18})\s+(Savings\s+Account|Current\s+Account)', text)
    if m_bank:
        data["bank_ifsc"] = m_bank.group(1).strip()
        data["bank_name"] = m_bank.group(2).strip()
        data["bank_account"] = m_bank.group(3).strip()
        data["bank_type"] = m_bank.group(4).strip()

    m_addr = re.search(r'Flat/Door/Block No\..*?\n(.*?)\nIs the secondary', text, re.S)
    if m_addr:
        addr_clean = re.sub(r'\(A[0-9a-z]+\)[^\n]*', '', m_addr.group(1))
        addr_clean = re.sub(r'Premises/Building/Village', '', addr_clean)
        addr_clean = ' '.join(addr_clean.split())
        data["address"] = addr_clean

    # Balance Sheet Items
    m_cred = re.search(r'Sundry creditors\s+E15\s+([\d,]+)', text, re.I)
    if m_cred:
        data["sundry_creditors"] = float(m_cred.group(1).replace(",", ""))

    m_inv = re.search(r'Inventories\s+E19\s+([\d,]+)', text, re.I)
    if m_inv:
        data["inventories"] = float(m_inv.group(1).replace(",", ""))

    m_deb = re.search(r'Sundry debtors\s+E20\s+([\d,]+)', text, re.I)
    if m_deb:
        data["sundry_debtors"] = float(m_deb.group(1).replace(",", ""))

    m_cash = re.search(r'Cash-in-hand\s+E22\s+([\d,]+)', text, re.I)
    if m_cash:
        data["cash_in_hand"] = float(m_cash.group(1).replace(",", ""))

    m_tot_assets = re.search(r'Total assets[^\n\d]*E25\s+([\d,]+)', text, re.I)
    if m_tot_assets:
        data["total_assets"] = float(m_tot_assets.group(1).replace(",", ""))

    # 4. Presumptive Business (ITR-4 Section 44AD/ADA/AE):
    # E1 Gross Turnover / Receipts
    m_to = re.search(r'Gross\s+Turnover[^\n]*\n[^\n\d]*E1[^\n\d]*([\d,]+)', text, re.I)
    if m_to:
        data["turnover_44ad"] = float(m_to.group(1).replace(",", ""))
    else:
        m_to2 = re.search(r'Gross\s+Turnover[^\n\d]*(?:E1|i)?\s+([\d,]+)', text, re.I)
        if m_to2:
            data["turnover_44ad"] = float(m_to2.group(1).replace(",", ""))

    m_e1a = re.search(r'prescribed\s+electronic\s+modes[^\n]*\n[^\n\d]*E1a[^\n\d]*([\d,]+)', text, re.I) or re.search(r'E1a\s+([\d,]+)', text, re.I)
    if m_e1a:
        data["turnover_44ad_digital"] = float(m_e1a.group(1).replace(",", ""))
        data["is_digital_receipts_44ad"] = True

    m_e1b = re.search(r'Receipts\s+in\s+Cash[^\n]*E1b[^\n\d]*([\d,]+)', text, re.I)
    if m_e1b:
        data["turnover_44ad_cash"] = float(m_e1b.group(1).replace(",", ""))

    m_e1c = re.search(r'Any\s+mode\s+other\s+than\s+a\s+and\s+b[^\n]*E1c[^\n\d]*([\d,]+)', text, re.I)
    if m_e1c:
        data["turnover_44ad_other"] = float(m_e1c.group(1).replace(",", ""))

    m_e2a = re.search(r'6%\s+of\s+E1a[^\n]*E2a[^\n\d]*([\d,]+)', text, re.I)
    if m_e2a:
        data["deemed_profit_44ad_digital"] = float(m_e2a.group(1).replace(",", ""))

    m_e2b = re.search(r'8%\s+of\s+\(E1b\+E1c\)[^\n]*E2b[^\n\d]*([\d,]+)', text, re.I)
    if m_e2b:
        data["deemed_profit_44ad_cash"] = float(m_e2b.group(1).replace(",", ""))
    
    # Check digital vs cash breakdown: E1a (digital), E1b (cash)
    m_e1a = re.search(r'Through\s+a/c\s+payee[^\n\d]*E1a\s+([\d,]+)', text, re.I)
    m_e1b = re.search(r'Receipts\s+in\s+Cash[^\n\d]*E1b\s+([\d,]+)', text, re.I)
    if m_e1a:
        # If there are electronic receipts, mark digital receipts true
        data["is_digital_receipts_44ad"] = True

    # Presumptive Income u/s 44AD: E2c Total (a + b) 7,41,308 or B1 7,41,308
    m_pi_44ad = re.search(r'(?:Presumptive\s+Income\s+under\s+section\s+44AD[^\n]*\n[^\n\d]*E2c|Income\s+from\s+Business\s+&\s+Profession\s+B1)\s+([\d,]+)', text, re.I)
    if m_pi_44ad:
        val_pi = float(m_pi_44ad.group(1).replace(",", ""))
        data["presumptive_income_44ad"] = val_pi
        data["business_income"] = val_pi
        if not data["turnover_44ad"]:
            data["turnover_44ad"] = val_pi

    # Section 44ADA (Profession)
    m_44ada = re.search(r'Gross\s+Receipts\s+under\s+section\s+44ADA[^\n\d]*E3\s+([\d,]+)', text, re.I)
    if m_44ada:
        data["receipts_44ada"] = float(m_44ada.group(1).replace(",", ""))

    # 5. Gross Salary (ITR-1, ITR-2)
    m_sal = re.search(r'Gross\s+Salary[^\n\d]*1\s+([\d,]+)', text, re.I)
    if m_sal:
        data["gross_salary"] = float(m_sal.group(1).replace(",", ""))
    else:
        m_sal2 = re.search(r'Basic\s+Salary\s+([\d,]+)', text)
        if m_sal2:
            data["gross_salary"] = float(m_sal2.group(1).replace(",", ""))

    # 6. Exemptions u/s 10
    m_ex = re.search(r'allowances\s+to\s+the\s+extent\s+exempt\s+u/s\s+10[^\n]*\n[^\n\d]*3\s+3\s+([\d,]+)', text, re.I)
    if m_ex:
        data["exemptions_u10"] = float(m_ex.group(1).replace(",", ""))

    # 7. Professional Tax
    m_pt = re.search(r'Professional\s+tax\s+u/s\s+16\(iii\)[^\n\d]*5c\s+([\d,]+)', text, re.I)
    if m_pt:
        data["professional_tax"] = float(m_pt.group(1).replace(",", ""))

    # 8. Other Sources (Interest from Savings, etc.)
    m_os = re.search(r'(?:Income\s+from\s+Other\s+Sources\s+B4|Total\s+\(4a\s*\+\s*4b\s*\+\s*4c\)[^\n\d]*4d|Interest\s+from\s+Saving\s+Account[^\n\d]*)\s+([\d,]+)', text, re.I)
    if m_os:
        data["other_income"] = float(m_os.group(1).replace(",", ""))

    # 9. Capital Gains (ITR-2)
    m_cg = re.search(r'Total\s+Capital\s+Gains\s+\(3c\+3d\)[^\n\d]*3e\s+([\d,]+)', text, re.I)
    if m_cg:
        cg_val = float(m_cg.group(1).replace(",", ""))
        if cg_val > 0:
            data["other_stcg"] = cg_val

    # 10. Total Income / Taxable Total Income: C20 Taxable Total Income 7,42,380
    m_ti = re.search(r'(?:Taxable\s+Total\s+Income|Total\s+income\s*\(9\s*-\s*11\)[^\n\d]*12)[^\n\d]*([\d,]+)', text, re.I)
    if m_ti:
        data["total_income"] = float(m_ti.group(1).replace(",", ""))
    elif not data["gross_salary"] and not data["turnover_44ad"]:
        m_ti2 = re.search(r'Total\s+Income[^\n\d]*(?:1A|\b1\b)\s+([\d,]+)', text, re.I)
        if m_ti2:
            val = float(m_ti2.group(1).replace(",", ""))
            data["total_income"] = val
            data["gross_salary"] = val

    # 10b. VDA / Crypto Income (ITR-2, Sec 115BBH) — extract before TDS
    # ITR-2 format: "Capital gains chargeable @ 30 % u/s 115BBH (C2 of Schedule CG) 3d 1,809"
    m_vda = re.search(r'115BBH[^\n]*?3d\s+([\d,]+)', text, re.I)
    if not m_vda:
        m_vda = re.search(r'115BBH[^\n]*?\|\s*3d\s*\|\s*([\d,]+)', text, re.I)
    if not m_vda:
        m_vda = re.search(r'Virtual\s*Digital\s*Asset[^\n]*30%[^\n]*\n[^\n]*?([\d,]+)(?:\s|$)', text, re.I)
    if not m_vda:
        m_vda = re.search(r'(?:Income\s+from\s+transfer\s+of\s+virtual|Total\s+VDA\s+income)[^\n\d]*([\d,]+)', text, re.I)
    if m_vda:
        vda_val = float(m_vda.group(1).replace(",", ""))
        if vda_val > 0:
            data["vda_income"] = vda_val
            # If VDA was mis-captured as other_stcg, clear it there so it is not double-counted
            if data.get("other_stcg") == vda_val:
                data["other_stcg"] = None

    # 11. TDS / Taxes Paid — multiple patterns for ITR-1/2/4
    m_tds = re.search(r'\b15b\s+([\d,]+)', text, re.I)
    if m_tds:
        data["tds_total"] = float(m_tds.group(1).replace(",", ""))
    if not data["tds_total"]:
        m_tds2 = re.search(r'b\s+TDS[^\n\d]*15b\s+([\d,]+)', text, re.I)
        if m_tds2:
            data["tds_total"] = float(m_tds2.group(1).replace(",", ""))
    if not data["tds_total"]:
        m_tp = re.search(r'Total\s+Taxes\s+Paid[^\n\d]*(?:15e|18|D18)\s+([\d,]+)', text, re.I)
        if m_tp:
            data["tds_total"] = float(m_tp.group(1).replace(",", ""))
    if not data["tds_total"]:
        m_tp2 = re.search(r'Taxes\s+Paid[^\n\d]*(?:15e|18|D18|\b7\b)\s+([\d,]+)', text, re.I)
        if m_tp2:
            data["tds_total"] = float(m_tp2.group(1).replace(",", ""))
    # Sum TDS salary + TDS other if both are present and total wasn't found
    if not data["tds_total"]:
        m_tds_sal = re.search(r'Schedule\s+TDS1[^\n]*\n(?:[^\n]*\n){1,5}.*?([\d,]+)\s*$', text, re.I | re.M)
        m_tds_oth = re.search(r'Schedule\s+TDS2[^\n]*\n(?:[^\n]*\n){1,5}.*?([\d,]+)\s*$', text, re.I | re.M)
        sal_tds = float(m_tds_sal.group(1).replace(",", "")) if m_tds_sal else 0
        oth_tds = float(m_tds_oth.group(1).replace(",", "")) if m_tds_oth else 0
        if sal_tds + oth_tds > 0:
            data["tds_total"] = sal_tds + oth_tds

    return data


class LLMExtractor:
    """Calls the NVIDIA NIM API to extract structured data from document text."""

    BASE_URL = "https://integrate.api.nvidia.com/v1"
    MAX_RETRIES = 2

    def __init__(self):
        self.api_key = settings.NVIDIA_API_KEY
        self.model = settings.NVIDIA_MODEL

    def extract(self, parsed: ParsedDocument) -> Dict[str, Any]:
        """
        Extract financial fields from the parsed document.
        Retries up to MAX_RETRIES times on invalid JSON or transient errors.
        Falls back gracefully to deterministic rule-based regex if LLM times out or fails.
        """
        document_text = parsed.combined_text()
        user_prompt = _build_user_prompt(document_text)

        last_error: Optional[str] = None
        for attempt in range(1, self.MAX_RETRIES + 2):
            try:
                result = self._call_api(user_prompt)
                validated = self._validate(result)
                # If LLM returned all nulls or empty salary, cross-verify with regex fallback
                regex_data = extract_fallback_regex(document_text)
                for k in ["name", "pan", "gross_salary", "other_income", "tds_total", "total_income"]:
                    if validated.get(k) is None and regex_data.get(k) is not None:
                        validated[k] = regex_data[k]
                return validated
            except (ValueError, json.JSONDecodeError) as exc:
                last_error = str(exc)
                logger.warning("Extraction attempt %d failed: %s", attempt, exc)
                if attempt <= self.MAX_RETRIES:
                    time.sleep(1)
            except httpx.HTTPStatusError as exc:
                last_error = f"API HTTP {exc.response.status_code}"
                logger.warning("API error on attempt %d: %s", attempt, exc)
                if attempt <= self.MAX_RETRIES:
                    time.sleep(2)
            except Exception as exc:
                last_error = str(exc)
                logger.warning("Extraction error on attempt %d: %s", attempt, exc)
                if attempt <= self.MAX_RETRIES:
                    time.sleep(1)

        # Resilient fallback: return regex extracted data
        logger.info("Falling back to deterministic regex extraction after LLM failures.")
        return extract_fallback_regex(document_text)

    def _call_api(self, user_prompt: str) -> str:
        """Make one API call and return the raw response text."""
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            "temperature": 0.1,
            "max_tokens": 2048,
        }
        with httpx.Client(timeout=45) as client:
            resp = client.post(
                f"{self.BASE_URL}/chat/completions",
                headers=headers,
                json=payload,
            )
            resp.raise_for_status()
            data = resp.json()
            message = data["choices"][0]["message"]
            content = message.get("content")
            # Some reasoning models (like Nemotron-3.5 or DeepSeek-R1) put output in reasoning_content or return None content
            if not content:
                content = message.get("reasoning_content") or ""
            return content

    def _validate(self, raw: str) -> Dict[str, Any]:
        """Parse JSON and do basic schema validation."""
        if not raw:
            raise ValueError("LLM returned an empty response")

        clean = raw.strip()

        # If reasoning or chain-of-thought is present, extract the JSON block
        if "```json" in clean:
            clean = clean.split("```json", 1)[1].split("```", 1)[0].strip()
        elif "```" in clean:
            clean = clean.split("```", 1)[1].split("```", 1)[0].strip()
        elif "{" in clean and "}" in clean:
            # Fallback: extract substring between the first { and last }
            start = clean.find("{")
            end = clean.rfind("}")
            clean = clean[start : end + 1].strip()

        data = json.loads(clean)

        if not isinstance(data, dict):
            raise ValueError("LLM returned non-dict JSON")

        form_type = data.get("form_type")
        if form_type not in ("ITR-1", "ITR-2", "ITR-4"):
            # Default to ITR-1 if omitted or slight variation
            if form_type and "ITR-2" in str(form_type).upper():
                data["form_type"] = "ITR-2"
            elif form_type and "ITR-4" in str(form_type).upper():
                data["form_type"] = "ITR-4"
            else:
                data["form_type"] = "ITR-1"

        return data
