"""
Professional CA/Tax Practitioner PDF Report Generator.
Generates Computation of Total Income matching standard Indian CA firm format.
Branches layout by form_type:
  - ITR-4: Assessee details → Computation → 44AD Schedule → Bank → Balance Sheet
  - ITR-1/ITR-2: Assessee details → Computation with salary/CG breakdown → Bank → Signature
"""
from __future__ import annotations

import os
from typing import Any, Dict

from .base import ReportGenerator


def _fc(val) -> str:
    """Format as Indian currency integer string, e.g. 1234567 → '12,34,567'."""
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


class PdfReportGenerator(ReportGenerator):
    def generate(self, computation_data: Dict[str, Any], doc_metadata: Dict[str, Any], output_path: str) -> str:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        self._generate_reportlab(computation_data, doc_metadata, output_path)
        return output_path

    def _generate_reportlab(self, comp: Dict[str, Any], meta: Dict[str, Any], output_path: str):
        from reportlab.lib import colors
        from reportlab.lib.pagesizes import A4
        from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle, HRFlowable
        from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
        from reportlab.lib.enums import TA_CENTER, TA_RIGHT, TA_LEFT

        PAGE_W = A4[0] - 72  # usable width (36pt margin each side)

        doc = SimpleDocTemplate(
            output_path,
            pagesize=A4,
            leftMargin=36, rightMargin=36,
            topMargin=36, bottomMargin=36,
        )
        styles = getSampleStyleSheet()

        def style(name, **kw):
            return ParagraphStyle(name, parent=styles['Normal'], **kw)

        S_TITLE    = style('Title2',   fontName='Helvetica-Bold', fontSize=15, leading=18, alignment=TA_CENTER, spaceAfter=12)
        S_SEC      = style('Sec',      fontName='Helvetica-Bold', fontSize=10, leading=13, spaceBefore=10, spaceAfter=4)
        S_HEAD_REG = style('HeadReg',  fontName='Helvetica-Bold', fontSize=11, leading=14, spaceBefore=10, spaceAfter=5)
        S_LBL      = style('Lbl',      fontName='Helvetica-Bold', fontSize=9,  leading=12)
        S_VAL      = style('Val',      fontName='Helvetica',      fontSize=9,  leading=12)
        S_VAL_R    = style('ValR',     fontName='Helvetica',      fontSize=9,  leading=12, alignment=TA_RIGHT)
        S_VAL_RB   = style('ValRB',    fontName='Helvetica-Bold', fontSize=9,  leading=12, alignment=TA_RIGHT)
        S_SMALL    = style('Small',    fontName='Helvetica',      fontSize=8,  leading=11)

        elements = []

        # ── Helpers ──────────────────────────────────────────────────────────────
        def hr():
            return HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#94a3b8'), spaceAfter=4, spaceBefore=4)

        def comp_row(label, value, bold=False):
            lbl_s = S_LBL if bold else S_VAL
            val_s = S_VAL_RB if bold else S_VAL_R
            return [Paragraph(label, lbl_s), Paragraph(_fc(value), val_s)]

        def comp_table(rows):
            t = Table(rows, colWidths=[PAGE_W - 160, 160])
            t.setStyle(TableStyle([
                ('VALIGN',        (0, 0), (-1, -1), 'MIDDLE'),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 1.5),
                ('TOPPADDING',    (0, 0), (-1, -1), 1.5),
                ('LEFTPADDING',   (0, 0), (-1, -1), 0),
                ('RIGHTPADDING',  (0, 0), (-1, -1), 0),
            ]))
            return t

        def grid_table(rows, col_widths, header_row=True):
            t = Table(rows, colWidths=col_widths)
            ts = [
                ('GRID',          (0, 0), (-1, -1), 0.5, colors.HexColor('#94a3b8')),
                ('VALIGN',        (0, 0), (-1, -1), 'MIDDLE'),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
                ('TOPPADDING',    (0, 0), (-1, -1), 3),
            ]
            if header_row:
                ts.append(('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#e2e8f0')))
            t.setStyle(TableStyle(ts))
            return t

        # ── Resolve metadata ─────────────────────────────────────────────────────
        form_type = (meta.get("form_type") or "ITR-1").upper()
        is_itr4 = "4" in form_type

        name        = (meta.get("name") or "ASSESSEE").strip().upper()
        father      = (meta.get("father_name") or "").strip().upper()
        address     = (meta.get("address") or "").strip()
        email       = (meta.get("email") or "").strip()
        mobile      = (meta.get("mobile") or "").strip()
        status      = (meta.get("status") or "Individual").strip()
        pan         = (meta.get("pan") or "").strip().upper()
        dob         = (meta.get("dob") or "").strip()
        aadhaar     = (meta.get("aadhaar") or "").strip()
        nature      = (meta.get("nature_of_business") or "").strip()
        f_status    = (meta.get("filing_status") or "Original - 139(1) On or before due date").strip()
        fdate       = (meta.get("filing_date") or "").strip()
        ack         = (meta.get("ack_no") or "").strip()
        bname       = (meta.get("bank_name") or "").strip()
        bacc        = (meta.get("bank_account") or "").strip()
        bifsc       = (meta.get("bank_ifsc") or "").strip()
        btype       = (meta.get("bank_type") or "Savings Account").strip()

        # Assessment year
        ay = comp.get("assessment_year") or meta.get("assessment_year") or "2026-27"
        if "-" in ay and len(ay) == 7:
            parts = ay.split("-")
            ay_display = f"{parts[0]}-20{parts[1]}"
        else:
            ay_display = ay

        fy_end = "31.3." + ay_display.split("-")[0]  # e.g. 31.3.2026
        ret_filed_on = f"{fdate}" + (f", Acknowledgement No.: {ack}" if ack else "")
        bank_str = bname + (f", A/C NO: {bacc}" if bacc else "") + (f", IFSC: {bifsc}" if bifsc else "")

        rec = comp.get("recommended_regime", "NEW").upper()

        # ── Page 1 Title ─────────────────────────────────────────────────────────
        elements.append(Paragraph("Computation of Total Income", S_TITLE))

        # ── Assessee Details table ────────────────────────────────────────────────
        def arow(label, val):
            return [Paragraph(label, S_LBL), Paragraph(val, S_VAL)]

        a_rows = [
            arow("Name of Assessee",    name.title()),
        ]
        if father:
            a_rows.append(arow("Father's Name",     father))
        if address:
            a_rows.append(arow("Address",           address))
        if email:
            a_rows.append(arow("E-Mail",            email))
        a_rows.append(arow("Status",                status))
        a_rows.append(arow("Assessment Year",        ay_display))
        a_rows.append(arow("Year Ended",             fy_end))
        if pan:
            a_rows.append(arow("PAN",               pan))
        if dob:
            a_rows.append(arow("Date of Birth",     dob))
        if aadhaar:
            a_rows.append(arow("Aadhaar No",        aadhaar))
        if mobile:
            a_rows.append(arow("Mobile No",         mobile))
        if is_itr4 and nature:
            a_rows.append(arow("Nature of Business", nature))
        a_rows.append(arow("Filing Status",          f_status))
        if ret_filed_on:
            a_rows.append(arow("Return Filed On",   ret_filed_on))
        if bank_str.strip():
            a_rows.append(arow("Bank Name",         bank_str))

        t_a = Table(a_rows, colWidths=[150, PAGE_W - 150])
        t_a.setStyle(TableStyle([
            ('VALIGN',        (0, 0), (-1, -1), 'TOP'),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
            ('TOPPADDING',    (0, 0), (-1, -1), 2),
            ('LEFTPADDING',   (0, 0), (-1, -1), 0),
            ('RIGHTPADDING',  (0, 0), (-1, -1), 0),
        ]))
        elements.append(t_a)
        elements.append(Spacer(1, 8))
        elements.append(hr())

        # ── Computation section ───────────────────────────────────────────────────
        elements.append(Paragraph(
            f"Computation of Total Income [As per Section 115BAC ({rec} Tax Regime)]",
            S_HEAD_REG
        ))

        new_reg = comp.get("new_regime", {})
        old_reg = comp.get("old_regime", {})
        # Use new regime numbers for the display (recommended)
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
        tax_pay   = use_reg.get("tax_payable", tax_pay if False else (total_tax - tds))
        tax_pay   = use_reg.get("tax_payable", total_tax - tds)

        if is_itr4:
            # ── ITR-4: presumptive income layout ─────────────────────────────
            b_income = float(meta.get("presumptive_income_44ad") or meta.get("business_income") or 0)
            o_income = float(meta.get("other_income") or 0)

            comp_rows = [
                comp_row("Income from Business (Presumptive u/s 44AD) (Chapter IV D)", b_income),
                comp_row("Income from Other Sources (Chapter IV F)",                   o_income),
                comp_row("Gross Total Income",                                          gti,       bold=True),
                comp_row("Less: Deductions (Chapter VI-A)",                            -ded),
                comp_row("Total Income",                                                gti - ded, bold=True),
                comp_row("Round off u/s 288A",                                         tot_inc,   bold=True),
                comp_row("", None),
                comp_row("Tax Due",                                                     base_tax),
                comp_row("Rebate u/s 87A",                                             -rebate if rebate else 0),
                comp_row("Tax Payable After Rebate",                                   base_tax - rebate, bold=True),
                comp_row("Surcharge",                                                   surcharge),
                comp_row("Health & Education Cess @ 4%",                               cess),
                comp_row("Total Tax Liability",                                         total_tax, bold=True),
                comp_row("Less: TDS / Taxes Paid",                                    -tds),
                comp_row("Net Tax Payable / (Refund)",                                 tax_pay,   bold=True),
            ]

        else:
            # ── ITR-1 / ITR-2: salary + CG layout ────────────────────────────
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
                comp_row("Income from Salary / Pension (Chapter IV A)", gross_sal),
                comp_row("  Less: Standard Deduction u/s 16(ia)", -std_ded),
                comp_row("  Income from Salary (Net)", net_sal, bold=True),
            ]

            if hp_income != 0:
                comp_rows.append(comp_row("Income from House Property (Chapter IV B)", hp_income))

            if "2" in form_type and total_cg != 0:
                comp_rows.append(comp_row("Income from Capital Gains (Chapter IV E)", None))
                if stcg_111a:
                    comp_rows.append(comp_row("  STCG u/s 111A (Listed Equity @ 20%)", stcg_111a))
                if ltcg_112a:
                    comp_rows.append(comp_row("  LTCG u/s 112A (Listed Equity @ 12.5%)", ltcg_112a))
                if other_stcg:
                    comp_rows.append(comp_row("  Short Term Capital Gains (Other)", other_stcg))
                if other_ltcg:
                    comp_rows.append(comp_row("  Long Term Capital Gains (Other)", other_ltcg))
                if vda_income:
                    comp_rows.append(comp_row("  VDA / Crypto Income u/s 115BBH (@ 30%)", vda_income))
                comp_rows.append(comp_row("  Total Capital Gains", total_cg, bold=True))

            comp_rows.append(comp_row("Income from Other Sources (Chapter IV F)", o_income))
            comp_rows.append(comp_row("Gross Total Income", gti, bold=True))

            if ded > 0:
                comp_rows.append(comp_row("Less: Deductions Chapter VI-A", -ded))
                if d80c:
                    comp_rows.append(comp_row("  80C (PPF/ELSS/LIC/EPF/Tuition)", d80c))
                if d80d:
                    comp_rows.append(comp_row("  80D (Health Insurance)", d80d))
                if d80tta:
                    comp_rows.append(comp_row("  80TTA (Savings Interest)", d80tta))
                if d_other:
                    comp_rows.append(comp_row("  Other Deductions", d_other))
            else:
                comp_rows.append(comp_row("Less: Deductions Chapter VI-A", 0))

            comp_rows += [
                comp_row("Total Income",             gti - ded, bold=True),
                comp_row("Round off u/s 288A",        tot_inc,   bold=True),
                comp_row("", None),
                comp_row("Tax on Normal Income (Slab)", base_tax),
            ]

            if sp_tax:
                comp_rows.append(comp_row("Tax at Special Rates (CG/VDA)", sp_tax))

            comp_rows += [
                comp_row("Total Tax before Rebate",   base_tax + sp_tax, bold=True),
                comp_row("Less: Rebate u/s 87A",      -rebate if rebate else 0),
            ]
            if marg_rel:
                comp_rows.append(comp_row("Less: Marginal Relief u/s 87A", -marg_rel))

            comp_rows += [
                comp_row("Tax After Rebate",           base_tax + sp_tax - rebate - marg_rel, bold=True),
                comp_row("Surcharge",                  surcharge),
                comp_row("Health & Education Cess @ 4%", cess),
                comp_row("Total Tax Liability",        total_tax, bold=True),
            ]

            tds_sal   = float(meta.get("tds_salary") or 0)
            tds_other = float(meta.get("tds_other") or 0)
            tds_vda   = float(meta.get("tds_other") or 0)
            if tds_sal and tds_other:
                comp_rows.append(comp_row("  Less: TDS on Salary (Schedule TDS1)", -tds_sal))
                comp_rows.append(comp_row("  Less: TDS on Other Income (Schedule TDS2)", -tds_other))
            comp_rows.append(comp_row("Less: TDS / Advance Tax / Self-Assessment Tax", -tds))
            comp_rows.append(comp_row("Net Tax Payable / (Refund)", tax_pay, bold=True))

        elements.append(comp_table(comp_rows))
        elements.append(Spacer(1, 10))

        # ── OLD REGIME comparison ─────────────────────────────────────────────────
        elements.append(hr())
        elements.append(Paragraph("Comparison — Old Tax Regime", S_HEAD_REG))

        old_tax_pay = old_reg.get("tax_payable", 0.0)
        old_total   = old_reg.get("total_tax", 0.0)
        old_base    = old_reg.get("base_tax", 0.0)
        old_rebate  = old_reg.get("rebate_87a", 0.0)
        old_sur     = old_reg.get("surcharge", 0.0)
        old_cess    = old_reg.get("cess", 0.0)
        old_ti      = old_reg.get("taxable_income", 0.0)
        old_ded     = old_reg.get("deductions", 0.0)

        old_rows = [
            comp_row("Taxable Income (Old Regime)", old_ti, bold=True),
            comp_row("Tax on Slab (Old Regime)",    old_base),
            comp_row("Less: Rebate u/s 87A",        -old_rebate if old_rebate else 0),
            comp_row("Surcharge",                    old_sur),
            comp_row("Health & Education Cess @ 4%", old_cess),
            comp_row("Total Tax (Old Regime)",       old_total, bold=True),
            comp_row("Less: TDS / Taxes Paid",       -tds),
            comp_row("Net Tax Payable / (Refund)",   old_tax_pay, bold=True),
        ]
        elements.append(comp_table(old_rows))

        rec_note = "NEW REGIME" if rec == "NEW" else "OLD REGIME"
        elements.append(Spacer(1, 6))
        elements.append(Paragraph(f"★  Recommended: {rec_note}", S_LBL))
        elements.append(Spacer(1, 10))
        elements.append(hr())

        # ── ITR-4 specific: 44AD Schedule + Balance Sheet ────────────────────────
        if is_itr4:
            to_tot   = float(meta.get("turnover_44ad") or 0)
            to_dig   = float(meta.get("turnover_44ad_digital") or 0)
            to_cash  = float(meta.get("turnover_44ad_cash") or 0)
            to_other = float(meta.get("turnover_44ad_other") or 0)
            prof_dig  = float(meta.get("deemed_profit_44ad_digital") or 0)
            prof_cash = float(meta.get("deemed_profit_44ad_cash") or 0)
            prof_tot  = float(meta.get("presumptive_income_44ad") or meta.get("business_income") or 0)
            pct_book  = round((prof_tot / to_tot * 100), 2) if to_tot else 0.0

            elements.append(Paragraph("Income Declared u/s 44AD — Gross Receipt", S_SEC))
            sch_rows = [
                [Paragraph("Particulars", S_LBL), Paragraph("Amount (Rs.)", S_LBL), Paragraph("%", S_LBL)],
                [Paragraph("Gross Receipts/Turnover (ECS/Cheque/DD Mode)", S_VAL), Paragraph(_fc(to_dig), S_VAL_R), Paragraph("", S_VAL)],
                [Paragraph("Gross Receipts/Turnover (Cash Receipt)", S_VAL),       Paragraph(_fc(to_cash), S_VAL_R), Paragraph("", S_VAL)],
                [Paragraph("Gross Receipts/Turnover (Other modes)", S_VAL),         Paragraph(_fc(to_other), S_VAL_R), Paragraph("", S_VAL)],
                [Paragraph("Gross Receipts/Turnover (Total)", S_VAL),               Paragraph(_fc(to_tot), S_VAL_RB), Paragraph("", S_VAL)],
                [Paragraph("Book Profit (Declared)",          S_VAL),               Paragraph(_fc(prof_tot), S_VAL_RB), Paragraph(f"{pct_book:.2f} %", S_VAL_R)],
                [Paragraph("Deemed Profit (Digital @ 6%)",   S_VAL),               Paragraph(_fc(prof_dig), S_VAL_R), Paragraph("6.00 %", S_VAL_R)],
                [Paragraph("Deemed Profit (Cash/Other @ 8%)", S_VAL),              Paragraph(_fc(prof_cash), S_VAL_R), Paragraph("8.00 %", S_VAL_R)],
                [Paragraph("Net Profit Declared",             S_VAL),               Paragraph(_fc(prof_tot), S_VAL_RB), Paragraph(f"{pct_book:.2f} %", S_VAL_R)],
            ]
            elements.append(grid_table(sch_rows, [PAGE_W - 220, 140, 80]))
            elements.append(Spacer(1, 10))

        # ── Bank Account Detail ───────────────────────────────────────────────────
        elements.append(Paragraph("Bank Account Detail", S_SEC))
        bank_rows = [
            [Paragraph("S.No.", S_LBL), Paragraph("Bank Name", S_LBL), Paragraph("Account No.", S_LBL), Paragraph("IFSC Code", S_LBL), Paragraph("Type", S_LBL)],
            [Paragraph("1", S_VAL), Paragraph(bname or "—", S_VAL), Paragraph(bacc or "—", S_VAL), Paragraph(bifsc or "—", S_VAL), Paragraph(btype, S_VAL)],
        ]
        elements.append(grid_table(bank_rows, [35, 155, 125, 100, 105]))
        elements.append(Spacer(1, 14))

        # ── ITR-4: Balance Sheet ──────────────────────────────────────────────────
        if is_itr4:
            elements.append(Paragraph("Detail of Assets and Income — Balance Sheet", S_SEC))
            cred    = float(meta.get("sundry_creditors") or 0)
            inv     = float(meta.get("inventories") or 0)
            deb     = float(meta.get("sundry_debtors") or 0)
            cash_v  = float(meta.get("cash_in_hand") or 0)
            tot_ast = float(meta.get("total_assets") or (inv + deb + cash_v))

            bs_rows = [
                [Paragraph("S.No", S_LBL), Paragraph("Liabilities", S_LBL), Paragraph("Amount", S_LBL),
                 Paragraph("S.No", S_LBL), Paragraph("Assets", S_LBL), Paragraph("Amount", S_LBL)],
                [Paragraph("1", S_VAL), Paragraph("Partner/Member capital", S_VAL), Paragraph("0", S_VAL_R),
                 Paragraph("1", S_VAL), Paragraph("Fixed Assets", S_VAL), Paragraph("0", S_VAL_R)],
                [Paragraph("2", S_VAL), Paragraph("Secured Loans", S_VAL), Paragraph("0", S_VAL_R),
                 Paragraph("2", S_VAL), Paragraph("Investments", S_VAL), Paragraph("0", S_VAL_R)],
                [Paragraph("3", S_VAL), Paragraph("Unsecured Loans", S_VAL), Paragraph("0", S_VAL_R),
                 Paragraph("3", S_VAL), Paragraph("Inventories", S_VAL), Paragraph(_fc(inv), S_VAL_R)],
                [Paragraph("4", S_VAL), Paragraph("Advances", S_VAL), Paragraph("0", S_VAL_R),
                 Paragraph("4", S_VAL), Paragraph("Sundry Debtors", S_VAL), Paragraph(_fc(deb), S_VAL_R)],
                [Paragraph("5", S_VAL), Paragraph("Sundry Creditors", S_VAL), Paragraph(_fc(cred), S_VAL_R),
                 Paragraph("5", S_VAL), Paragraph("Balance with Banks", S_VAL), Paragraph("0", S_VAL_R)],
                [Paragraph("6", S_VAL), Paragraph("Other Liabilities", S_VAL), Paragraph("0", S_VAL_R),
                 Paragraph("6", S_VAL), Paragraph("Cash in Hand", S_VAL), Paragraph(_fc(cash_v), S_VAL_R)],
                [Paragraph("", S_VAL), Paragraph("", S_VAL), Paragraph("", S_VAL_R),
                 Paragraph("7", S_VAL), Paragraph("Loans and Advances", S_VAL), Paragraph("0", S_VAL_R)],
                [Paragraph("", S_VAL), Paragraph("", S_VAL), Paragraph("", S_VAL_R),
                 Paragraph("8", S_VAL), Paragraph("Other Assets", S_VAL), Paragraph("0", S_VAL_R)],
                [Paragraph("", S_LBL), Paragraph("Total", S_LBL), Paragraph(_fc(cred), S_VAL_RB),
                 Paragraph("", S_LBL), Paragraph("Total", S_LBL), Paragraph(_fc(tot_ast), S_VAL_RB)],
            ]
            elements.append(grid_table(bs_rows, [30, 145, 65, 30, 165, 85]))
            elements.append(Spacer(1, 40))

        else:
            elements.append(Spacer(1, 40))

        # ── Signature ────────────────────────────────────────────────────────────
        sig_rows = [[Paragraph(f"Signature<br/><b>({name.title()})</b>", S_VAL)]]
        t_sig = Table(sig_rows, colWidths=[200])
        t_sig.setStyle(TableStyle([('LEFTPADDING', (0, 0), (-1, -1), 0)]))
        elements.append(t_sig)

        doc.build(elements)
