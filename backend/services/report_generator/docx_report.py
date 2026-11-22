"""
Professional CA/Tax Practitioner DOCX Report Generator.
Generates Computation of Total Income matching standard Indian CA firm formats.
Branches layout by form_type:
  - ITR-4: Assessee details → Computation → 44AD Schedule → Bank → Balance Sheet
  - ITR-1/ITR-2: Assessee details → Computation with salary/CG breakdown → Bank → Signature
"""
from __future__ import annotations

import os
from typing import Any, Dict

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

from .base import ReportGenerator


def _fc(val) -> str:
    """Format as Indian-style currency string."""
    if val is None:
        return "0"
    v = int(round(float(val)))
    if v == 0:
        return "0"
    neg = v < 0
    v = abs(v)
    s = str(v)
    if len(s) <= 3:
        result = s
    else:
        result = s[-3:]
        s = s[:-3]
        while len(s) > 2:
            result = s[-2:] + "," + result
            s = s[:-2]
        if s:
            result = s + "," + result
    return f"({result})" if neg else result


def _set_cell_bg(cell, hex_color: str):
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shd)


def _add_heading(doc, text: str, size: float = 10.5, space_before: float = 10):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run(text)
    r.bold = True
    r.font.size = Pt(size)
    return p


def _add_comp_table(doc, rows):
    """Add a 2-column computation table (label | amount)."""
    t = doc.add_table(rows=len(rows), cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.LEFT
    for i, (label, amount, bold) in enumerate(rows):
        if not label and not amount:
            continue
        row = t.rows[i]
        for j, text in enumerate([label, str(amount)]):
            cell = row.cells[j]
            p = cell.paragraphs[0]
            p.paragraph_format.space_after = Pt(1)
            p.paragraph_format.space_before = Pt(1)
            p.alignment = WD_ALIGN_PARAGRAPH.RIGHT if j == 1 else WD_ALIGN_PARAGRAPH.LEFT
            r = p.add_run(text)
            r.bold = bold
            r.font.size = Pt(9.5)
    return t


def _add_grid_table(doc, header_row, data_rows, col_widths=None):
    """Add a grid table with shaded header."""
    t = doc.add_table(rows=1 + len(data_rows), cols=len(header_row))
    t.style = 'Table Grid'
    t.alignment = WD_TABLE_ALIGNMENT.LEFT
    for j, h in enumerate(header_row):
        c = t.rows[0].cells[j]
        _set_cell_bg(c, "E2E8F0")
        p = c.paragraphs[0]
        r = p.add_run(h)
        r.bold = True
        r.font.size = Pt(9.5)
    for i, row in enumerate(data_rows):
        for j, val in enumerate(row):
            p = t.rows[i + 1].cells[j].paragraphs[0]
            p.paragraph_format.space_after = Pt(1)
            p.paragraph_format.space_before = Pt(1)
            r = p.add_run(str(val))
            r.font.size = Pt(9)
    return t


class DocxReportGenerator(ReportGenerator):
    def generate(self, computation_data: Dict[str, Any], doc_metadata: Dict[str, Any], output_path: str) -> str:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        doc = Document()
        for section in doc.sections:
            section.top_margin    = Inches(0.5)
            section.bottom_margin = Inches(0.5)
            section.left_margin   = Inches(0.6)
            section.right_margin  = Inches(0.6)

        self._build(doc, computation_data, doc_metadata)
        doc.save(output_path)
        return output_path

    def _build(self, doc: Document, comp: Dict[str, Any], meta: Dict[str, Any]):
        # ── Resolve metadata ─────────────────────────────────────────────────────
        form_type = (meta.get("form_type") or "ITR-1").upper()
        is_itr4 = "4" in form_type

        name     = (meta.get("name") or "ASSESSEE").strip().upper()
        father   = (meta.get("father_name") or "").strip().upper()
        address  = (meta.get("address") or "").strip()
        email    = (meta.get("email") or "").strip()
        mobile   = (meta.get("mobile") or "").strip()
        status   = (meta.get("status") or "Individual").strip()
        pan      = (meta.get("pan") or "").strip().upper()
        dob      = (meta.get("dob") or "").strip()
        aadhaar  = (meta.get("aadhaar") or "").strip()
        nature   = (meta.get("nature_of_business") or "").strip()
        f_status = (meta.get("filing_status") or "Original - 139(1) On or before due date").strip()
        fdate    = (meta.get("filing_date") or "").strip()
        ack      = (meta.get("ack_no") or "").strip()
        bname    = (meta.get("bank_name") or "").strip()
        bacc     = (meta.get("bank_account") or "").strip()
        bifsc    = (meta.get("bank_ifsc") or "").strip()
        btype    = (meta.get("bank_type") or "Savings Account").strip()

        ay = comp.get("assessment_year") or meta.get("assessment_year") or "2026-27"
        if "-" in ay and len(ay) == 7:
            parts = ay.split("-")
            ay_display = f"{parts[0]}-20{parts[1]}"
        else:
            ay_display = ay

        fy_end = "31.3." + ay_display.split("-")[0]
        ret_filed_on = fdate + (f", Acknowledgement No.: {ack}" if ack else "")
        bank_str = bname + (f", A/C NO: {bacc}" if bacc else "") + (f", IFSC: {bifsc}" if bifsc else "")

        rec = comp.get("recommended_regime", "NEW").upper()

        # ── Title ────────────────────────────────────────────────────────────────
        p_title = doc.add_paragraph()
        p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_title.paragraph_format.space_after = Pt(10)
        rt = p_title.add_run("Computation of Total Income")
        rt.bold = True
        rt.font.size = Pt(14)

        # ── Assessee details ─────────────────────────────────────────────────────
        a_rows = [("Name of Assessee", name.title())]
        if father:   a_rows.append(("Father's Name", father))
        if address:  a_rows.append(("Address", address))
        if email:    a_rows.append(("E-Mail", email))
        a_rows.append(("Status", status))
        a_rows.append(("Assessment Year", ay_display))
        a_rows.append(("Year Ended", fy_end))
        if pan:      a_rows.append(("PAN", pan))
        if dob:      a_rows.append(("Date of Birth", dob))
        if aadhaar:  a_rows.append(("Aadhaar No", aadhaar))
        if mobile:   a_rows.append(("Mobile No", mobile))
        if is_itr4 and nature:
            a_rows.append(("Nature of Business", nature))
        a_rows.append(("Filing Status", f_status))
        if ret_filed_on:
            a_rows.append(("Return Filed On", ret_filed_on))
        if bank_str.strip():
            a_rows.append(("Bank Name", bank_str))

        t_a = doc.add_table(rows=len(a_rows), cols=2)
        t_a.alignment = WD_TABLE_ALIGNMENT.LEFT
        for i, (lbl, val) in enumerate(a_rows):
            row = t_a.rows[i]
            row.cells[0].width = Inches(2.0)
            row.cells[1].width = Inches(5.0)
            p0 = row.cells[0].paragraphs[0]
            p0.paragraph_format.space_after = Pt(1)
            p0.paragraph_format.space_before = Pt(1)
            r0 = p0.add_run(lbl)
            r0.bold = True
            r0.font.size = Pt(9.5)
            p1 = row.cells[1].paragraphs[0]
            p1.paragraph_format.space_after = Pt(1)
            p1.paragraph_format.space_before = Pt(1)
            r1 = p1.add_run(val)
            r1.font.size = Pt(9.5)

        # ── Computation section ───────────────────────────────────────────────────
        _add_heading(doc, f"Computation of Total Income [As per Section 115BAC ({rec} Tax Regime)]", size=10.5)

        new_reg = comp.get("new_regime", {})
        old_reg = comp.get("old_regime", {})
        use_reg = new_reg if rec == "NEW" else old_reg

        gti       = use_reg.get("gross_total_income", 0.0)
        tot_inc   = use_reg.get("taxable_income", 0.0)
        ded       = use_reg.get("deductions", 0.0)
        base_tax  = use_reg.get("base_tax", 0.0)
        sp_tax    = use_reg.get("special_rate_tax", 0.0)
        rebate    = use_reg.get("rebate_87a", 0.0)
        marg_rel  = use_reg.get("marginal_relief", 0.0)
        surcharge = use_reg.get("surcharge", 0.0)
        cess      = use_reg.get("cess", 0.0)
        total_tax = use_reg.get("total_tax", 0.0)
        tds       = use_reg.get("tds", 0.0) or float(meta.get("tds_total") or 0)
        tax_pay   = use_reg.get("tax_payable", total_tax - tds)

        if is_itr4:
            b_income = float(meta.get("presumptive_income_44ad") or meta.get("business_income") or 0)
            o_income = float(meta.get("other_income") or 0)
            comp_rows = [
                ("Income from Business (Presumptive u/s 44AD)", _fc(b_income), False),
                ("Income from Other Sources (Chapter IV F)",    _fc(o_income), False),
                ("Gross Total Income",                          _fc(gti),      True),
                ("Less: Deductions (Chapter VI-A)",             _fc(-ded),     False),
                ("Total Income",                                _fc(gti-ded),  True),
                ("Round off u/s 288A",                         _fc(tot_inc),  True),
                ("", "", False),
                ("Tax Due",                                     _fc(base_tax), False),
                ("Rebate u/s 87A",                              _fc(-rebate) if rebate else "0", False),
                ("Tax Payable After Rebate",                   _fc(base_tax - rebate), True),
                ("Surcharge",                                   _fc(surcharge),False),
                ("Health & Education Cess @ 4%",               _fc(cess),     False),
                ("Total Tax Liability",                         _fc(total_tax),True),
                ("Less: TDS / Taxes Paid",                     _fc(-tds),     False),
                ("Net Tax Payable / (Refund)",                  _fc(tax_pay),  True),
            ]
        else:
            gross_sal  = float(meta.get("gross_salary") or 0)
            std_ded    = 75000.0 if rec == "NEW" else 50000.0
            net_sal    = float(meta.get("net_salary") or max(0, gross_sal - std_ded))
            hp_income  = float(meta.get("house_property_income") or 0)
            stcg_111a  = float(meta.get("stcg_111a") or 0)
            ltcg_112a  = float(meta.get("ltcg_112a") or 0)
            other_stcg = float(meta.get("other_stcg") or 0)
            other_ltcg = float(meta.get("other_ltcg") or 0)
            vda_income = float(meta.get("vda_income") or 0)
            o_income   = float(meta.get("other_income") or 0)
            d80c   = float(meta.get("deduction_80c") or 0)
            d80d   = float(meta.get("deduction_80d") or 0)
            d80tta = float(meta.get("deduction_80tta") or 0)
            d_other = float(meta.get("other_deductions") or 0)
            total_cg = stcg_111a + ltcg_112a + other_stcg + other_ltcg + vda_income

            comp_rows = [
                ("Income from Salary / Pension (Chapter IV A)", _fc(gross_sal), False),
                ("  Less: Standard Deduction u/s 16(ia)",       _fc(-std_ded),  False),
                ("  Income from Salary (Net)",                   _fc(net_sal),   True),
            ]
            if hp_income != 0:
                comp_rows.append(("Income from House Property (Chapter IV B)", _fc(hp_income), False))

            if "2" in form_type and total_cg != 0:
                comp_rows.append(("Income from Capital Gains (Chapter IV E)", "", False))
                if stcg_111a:
                    comp_rows.append(("  STCG u/s 111A (Listed Equity @ 20%)",       _fc(stcg_111a),  False))
                if ltcg_112a:
                    comp_rows.append(("  LTCG u/s 112A (Listed Equity @ 12.5%)",     _fc(ltcg_112a),  False))
                if other_stcg:
                    comp_rows.append(("  Short Term Capital Gains (Other)",           _fc(other_stcg), False))
                if other_ltcg:
                    comp_rows.append(("  Long Term Capital Gains (Other)",            _fc(other_ltcg), False))
                if vda_income:
                    comp_rows.append(("  VDA / Crypto Income u/s 115BBH (@ 30%)",    _fc(vda_income), False))
                comp_rows.append(("  Total Capital Gains",                            _fc(total_cg),   True))

            comp_rows.append(("Income from Other Sources (Chapter IV F)", _fc(o_income), False))
            comp_rows.append(("Gross Total Income",                        _fc(gti),     True))

            if ded > 0:
                comp_rows.append(("Less: Deductions Chapter VI-A",         _fc(-ded),    False))
                if d80c:   comp_rows.append(("  80C (PPF/ELSS/LIC/EPF/Tuition)", _fc(d80c), False))
                if d80d:   comp_rows.append(("  80D (Health Insurance)",          _fc(d80d), False))
                if d80tta: comp_rows.append(("  80TTA (Savings Interest)",        _fc(d80tta), False))
                if d_other: comp_rows.append(("  Other Deductions",               _fc(d_other), False))
            else:
                comp_rows.append(("Less: Deductions Chapter VI-A", "0", False))

            comp_rows += [
                ("Total Income",             _fc(gti - ded), True),
                ("Round off u/s 288A",        _fc(tot_inc),   True),
                ("", "", False),
                ("Tax on Normal Income (Slab)", _fc(base_tax), False),
            ]
            if sp_tax:
                comp_rows.append(("Tax at Special Rates (CG / VDA)", _fc(sp_tax), False))
            comp_rows.append(("Total Tax before Rebate", _fc(base_tax + sp_tax), True))
            comp_rows.append(("Less: Rebate u/s 87A",    _fc(-rebate) if rebate else "0", False))
            if marg_rel:
                comp_rows.append(("Less: Marginal Relief u/s 87A", _fc(-marg_rel), False))
            comp_rows += [
                ("Tax After Rebate",               _fc(base_tax + sp_tax - rebate - marg_rel), True),
                ("Surcharge",                      _fc(surcharge), False),
                ("Health & Education Cess @ 4%",   _fc(cess),      False),
                ("Total Tax Liability",             _fc(total_tax), True),
                ("Less: TDS / Advance Tax",         _fc(-tds),      False),
                ("Net Tax Payable / (Refund)",       _fc(tax_pay),   True),
            ]

        _add_comp_table(doc, comp_rows)

        # ── Old regime comparison ─────────────────────────────────────────────────
        _add_heading(doc, "Comparison — Old Tax Regime", size=10.5)
        old_ti      = old_reg.get("taxable_income", 0.0)
        old_base    = old_reg.get("base_tax", 0.0)
        old_rebate  = old_reg.get("rebate_87a", 0.0)
        old_sur     = old_reg.get("surcharge", 0.0)
        old_cess    = old_reg.get("cess", 0.0)
        old_total   = old_reg.get("total_tax", 0.0)
        old_tax_pay = old_reg.get("tax_payable", 0.0)

        old_rows = [
            ("Taxable Income (Old Regime)",       _fc(old_ti),     True),
            ("Tax on Slab (Old Regime)",          _fc(old_base),   False),
            ("Less: Rebate u/s 87A",              _fc(-old_rebate) if old_rebate else "0", False),
            ("Surcharge",                          _fc(old_sur),    False),
            ("Health & Education Cess @ 4%",       _fc(old_cess),   False),
            ("Total Tax (Old Regime)",             _fc(old_total),  True),
            ("Less: TDS / Taxes Paid",             _fc(-tds),       False),
            ("Net Tax Payable / (Refund)",          _fc(old_tax_pay), True),
        ]
        _add_comp_table(doc, old_rows)

        p_rec = doc.add_paragraph()
        p_rec.paragraph_format.space_before = Pt(6)
        rr = p_rec.add_run(f"★  Recommended: {'NEW REGIME' if rec == 'NEW' else 'OLD REGIME'}")
        rr.bold = True
        rr.font.size = Pt(9.5)

        # ── ITR-4: 44AD Schedule ─────────────────────────────────────────────────
        if is_itr4:
            _add_heading(doc, "Income Declared u/s 44AD — Gross Receipt", size=10.5)
            to_tot   = float(meta.get("turnover_44ad") or 0)
            to_dig   = float(meta.get("turnover_44ad_digital") or 0)
            to_cash  = float(meta.get("turnover_44ad_cash") or 0)
            to_other = float(meta.get("turnover_44ad_other") or 0)
            prof_dig  = float(meta.get("deemed_profit_44ad_digital") or 0)
            prof_cash = float(meta.get("deemed_profit_44ad_cash") or 0)
            prof_tot  = float(meta.get("presumptive_income_44ad") or meta.get("business_income") or 0)
            pct_book  = round((prof_tot / to_tot * 100), 2) if to_tot else 0.0

            sch_rows = [
                ("Gross Receipts/Turnover (ECS/Cheque/DD)",   _fc(to_dig),   ""),
                ("Gross Receipts/Turnover (Cash)",            _fc(to_cash),  ""),
                ("Gross Receipts/Turnover (Other modes)",     _fc(to_other), ""),
                ("Gross Receipts/Turnover (Total)",           _fc(to_tot),   ""),
                ("Book Profit (Declared)",                    _fc(prof_tot), f"{pct_book:.2f} %"),
                ("Deemed Profit (Digital @ 6%)",              _fc(prof_dig), "6.00 %"),
                ("Deemed Profit (Cash/Other @ 8%)",           _fc(prof_cash),"8.00 %"),
                ("Net Profit Declared",                       _fc(prof_tot), f"{pct_book:.2f} %"),
            ]
            _add_grid_table(doc, ["Particulars", "Amount (Rs.)", "%"], sch_rows)

        # ── Bank Account Detail ───────────────────────────────────────────────────
        _add_heading(doc, "Bank Account Detail", size=10.5)
        _add_grid_table(doc,
            ["S.No.", "Bank Name", "Account No.", "IFSC Code", "Type"],
            [["1", bname or "—", bacc or "—", bifsc or "—", btype]]
        )

        # ── ITR-4: Balance Sheet (page 2) ────────────────────────────────────────
        if is_itr4:
            doc.add_page_break()
            _add_heading(doc, "Detail of Assets and Income — Balance Sheet", size=11)

            cred   = float(meta.get("sundry_creditors") or 0)
            inv    = float(meta.get("inventories") or 0)
            deb    = float(meta.get("sundry_debtors") or 0)
            cash_v = float(meta.get("cash_in_hand") or 0)
            tot_ast = float(meta.get("total_assets") or (inv + deb + cash_v))

            bs_data = [
                ("1", "Partner/Member capital", "0",         "1", "Fixed Assets",        "0"),
                ("2", "Secured Loans",          "0",         "2", "Investments",          "0"),
                ("3", "Unsecured Loans",        "0",         "3", "Inventories",          _fc(inv)),
                ("4", "Advances",               "0",         "4", "Sundry Debtors",       _fc(deb)),
                ("5", "Sundry Creditors",       _fc(cred),   "5", "Balance with Banks",   "0"),
                ("6", "Other Liabilities",      "0",         "6", "Cash in Hand",         _fc(cash_v)),
                ("",  "",                       "",          "7", "Loans and Advances",   "0"),
                ("",  "",                       "",          "8", "Other Assets",         "0"),
                ("",  "Total",                  _fc(cred),   "",  "Total",                _fc(tot_ast)),
            ]
            t_bs = doc.add_table(rows=1 + len(bs_data), cols=6)
            t_bs.style = 'Table Grid'
            for j, h in enumerate(["S.No", "Liabilities", "Amount", "S.No", "Assets", "Amount"]):
                c = t_bs.rows[0].cells[j]
                _set_cell_bg(c, "E2E8F0")
                p = c.paragraphs[0]
                p.alignment = WD_ALIGN_PARAGRAPH.RIGHT if "Amount" in h else WD_ALIGN_PARAGRAPH.LEFT
                rh = p.add_run(h); rh.bold = True; rh.font.size = Pt(9.5)
            for i, row in enumerate(bs_data):
                is_total = (i == len(bs_data) - 1)
                for j, val in enumerate(row):
                    p = t_bs.rows[i + 1].cells[j].paragraphs[0]
                    p.paragraph_format.space_after = Pt(1)
                    p.paragraph_format.space_before = Pt(1)
                    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT if j in (2, 5) else WD_ALIGN_PARAGRAPH.LEFT
                    rv = p.add_run(str(val)); rv.bold = is_total; rv.font.size = Pt(9)

        # ── Signature ────────────────────────────────────────────────────────────
        p_sig = doc.add_paragraph()
        p_sig.paragraph_format.space_before = Pt(40)
        rs1 = p_sig.add_run("Signature\n")
        rs1.font.size = Pt(9.5)
        rs2 = p_sig.add_run(f"({name.title()})")
        rs2.bold = True
        rs2.font.size = Pt(9.5)
