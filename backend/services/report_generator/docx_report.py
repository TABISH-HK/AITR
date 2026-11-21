"""
DOCX Report Generator for ITR Computation Sheet.
Complies with FR-009: creates a Microsoft Word document (.docx) using python-docx.
"""
from __future__ import annotations

import os
from typing import Any, Dict

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt, RGBColor

from .base import ReportGenerator


class DocxReportGenerator(ReportGenerator):
    def generate(self, computation_data: Dict[str, Any], doc_metadata: Dict[str, Any], output_path: str) -> str:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        doc = Document()

        # Document Title
        p_title = doc.add_paragraph()
        p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run_title = p_title.add_run("INCOME TAX COMPUTATION SHEET")
        run_title.bold = True
        run_title.font.size = Pt(16)
        run_title.font.color.rgb = RGBColor(15, 23, 42)

        # Subtitle
        ay = computation_data.get("assessment_year", "2026-27")
        form = doc_metadata.get("form_type", "ITR-1")
        p_sub = doc.add_paragraph()
        p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run_sub = p_sub.add_run(f"Assessment Year: {ay} (FY 2025-26)  |  Form: {form}")
        run_sub.font.size = Pt(11)
        run_sub.font.color.rgb = RGBColor(71, 85, 105)

        # Meta info
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        meta_table = doc.add_table(rows=2, cols=2)
        meta_table.autofit = True
        taxpayer = doc_metadata.get("name") or "Taxpayer"
        pan = doc_metadata.get("pan") or "Not Specified"
        fname = doc_metadata.get("file_name", "Document")

        meta_table.cell(0, 0).text = f"Taxpayer Name: {taxpayer}"
        meta_table.cell(0, 1).text = f"PAN: {pan}"
        meta_table.cell(1, 0).text = f"Source Document: {fname}"
        meta_table.cell(1, 1).text = f"Computed At: {computation_data.get('computed_at', '')}"

        # Recommendation banner
        rec = computation_data.get("recommended_regime", "NEW")
        p_rec = doc.add_paragraph()
        p_rec.paragraph_format.space_before = Pt(12)
        p_rec.paragraph_format.space_after = Pt(12)
        run_rec = p_rec.add_run(f"RECOMMENDATION: {rec} REGIME is more beneficial (Lower tax liability).")
        run_rec.bold = True
        run_rec.font.size = Pt(11)
        run_rec.font.color.rgb = RGBColor(6, 95, 70)

        # Comparison Table
        table = doc.add_table(rows=1, cols=3)
        table.style = 'Table Grid'
        hdr_cells = table.rows[0].cells
        hdr_cells[0].text = "Particulars"
        hdr_cells[1].text = "Old Regime (₹)"
        hdr_cells[2].text = "New Regime (₹)"

        for cell in hdr_cells:
            for p in cell.paragraphs:
                p.runs[0].bold = True

        old = computation_data.get("old_regime", {})
        new = computation_data.get("new_regime", {})

        rows = [
            ("Gross Total Income (GTI)", f"{old.get('gross_total_income', 0):,.2f}", f"{new.get('gross_total_income', 0):,.2f}"),
            ("Less: Deductions (Chapter VI-A)", f"{old.get('deductions', 0):,.2f}", f"{new.get('deductions', 0):,.2f}"),
            ("Total Taxable Income", f"{old.get('taxable_income', 0):,.2f}", f"{new.get('taxable_income', 0):,.2f}"),
            ("Tax on Total Income (slab)", f"{old.get('base_tax', 0):,.2f}", f"{new.get('base_tax', 0):,.2f}"),
            ("Less: Rebate u/s 87A", f"{old.get('rebate_87a', 0):,.2f}", f"{new.get('rebate_87a', 0):,.2f}"),
            ("Health & Education Cess (4%)", f"{old.get('cess', 0):,.2f}", f"{new.get('cess', 0):,.2f}"),
            ("Total Tax Liability", f"{old.get('total_tax', 0):,.2f}", f"{new.get('total_tax', 0):,.2f}"),
            ("Less: TDS Paid", f"{old.get('tds', 0):,.2f}", f"{new.get('tds', 0):,.2f}"),
            ("Net Tax Payable / (Refund)", f"{old.get('tax_payable', 0):,.2f}", f"{new.get('tax_payable', 0):,.2f}"),
        ]

        for particular, old_val, new_val in rows:
            row_cells = table.add_row().cells
            row_cells[0].text = particular
            row_cells[1].text = old_val
            row_cells[2].text = new_val

        # Statutory Disclaimer
        p_disc = doc.add_paragraph()
        p_disc.paragraph_format.space_before = Pt(20)
        run_disc = p_disc.add_run(
            "Statutory Non-Advisory Disclaimer: This computation sheet is generated automatically by the "
            "AI-Based ITR Computation System for informational and academic demonstration purposes only. "
            "It does not constitute chartered accountancy, legal, or financial tax advice. "
            "Tax liabilities should be verified against official Income Tax Department rules before electronic filing."
        )
        run_disc.italic = True
        run_disc.font.size = Pt(9)
        run_disc.font.color.rgb = RGBColor(100, 116, 139)

        doc.save(output_path)
        return output_path
