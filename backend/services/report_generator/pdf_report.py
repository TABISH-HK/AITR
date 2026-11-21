"""
PDF Report Generator for ITR Computation Sheet.
Complies with FR-009: displays Assessment Year, income/deduction breakup,
step-wise workings for both Old and New regimes, comparison, and non-advisory disclaimer.
Attempts WeasyPrint first; gracefully falls back to ReportLab for standalone Windows compatibility.
"""
from __future__ import annotations

import os
from typing import Any, Dict

from .base import ReportGenerator

HTML_TEMPLATE = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>ITR Computation Sheet - AY {{ assessment_year }}</title>
<style>
  body { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #1e293b; margin: 30px; line-height: 1.4; }
  .header { text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px; }
  .header h1 { margin: 0 0 4px 0; font-size: 20px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; }
  .header .sub { font-size: 13px; color: #475569; font-weight: 600; }
  .meta-grid { display: table; width: 100%; margin-bottom: 20px; border-collapse: collapse; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; }
  .meta-row { display: table-row; }
  .meta-cell { display: table-cell; padding: 8px 12px; font-size: 11px; }
  .meta-cell strong { color: #334155; }
  .rec-banner { background: #ecfdf5; border: 1px solid #10b981; color: #065f46; padding: 10px 14px; border-radius: 6px; margin-bottom: 20px; font-weight: bold; font-size: 13px; }
  table.comp-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  table.comp-table th, table.comp-table td { border: 1px solid #cbd5e1; padding: 6px 10px; text-align: left; font-size: 11px; }
  table.comp-table th { background-color: #f1f5f9; color: #1e293b; font-weight: 700; }
  .text-right { text-align: right !important; }
  .bold { font-weight: bold; }
  .highlight-row { background-color: #f8fafc; font-weight: bold; }
  .disclaimer { border-top: 1px dashed #94a3b8; padding-top: 10px; margin-top: 30px; font-size: 10px; color: #64748b; font-style: italic; line-height: 1.4; }
</style>
</head>
<body>

<div class="header">
  <h1>Income Tax Computation Sheet</h1>
  <div class="sub">Assessment Year: {{ assessment_year }} (FY 2025-26) &bull; Form: {{ form_type }}</div>
</div>

<table class="meta-grid">
  <tr class="meta-row">
    <td class="meta-cell"><strong>Taxpayer Name:</strong> {{ taxpayer_name }}</td>
    <td class="meta-cell"><strong>PAN:</strong> {{ pan }}</td>
  </tr>
  <tr class="meta-row">
    <td class="meta-cell"><strong>Source Document:</strong> {{ file_name }}</td>
    <td class="meta-cell"><strong>Generated On:</strong> {{ computed_at }}</td>
  </tr>
</table>

<div class="rec-banner">
  Recommendation: <strong>{{ recommended_regime }} REGIME</strong> is more beneficial (Lower tax liability).
</div>

<table class="comp-table">
  <thead>
    <tr>
      <th style="width: 50%;">Particulars</th>
      <th class="text-right" style="width: 25%;">Old Regime (₹)</th>
      <th class="text-right" style="width: 25%;">New Regime (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gross Total Income (GTI)</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.gross_total_income) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.gross_total_income) }}</td>
    </tr>
    <tr>
      <td>Less: Deductions (Chapter VI-A)</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.deductions) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.deductions) }}</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>Total Taxable Income</strong></td>
      <td class="text-right"><strong>{{ "₹{:,.2f}".format(old_regime.taxable_income) }}</strong></td>
      <td class="text-right"><strong>{{ "₹{:,.2f}".format(new_regime.taxable_income) }}</strong></td>
    </tr>
    <tr>
      <td>Tax Computed on Taxable Income (slab)</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.base_tax) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.base_tax) }}</td>
    </tr>
    <tr>
      <td>Special-Rate Tax (Capital Gains etc.)</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.special_rate_tax) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.special_rate_tax) }}</td>
    </tr>
    <tr>
      <td>Less: Rebate u/s 87A</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.rebate_87a) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.rebate_87a) }}</td>
    </tr>
    <tr>
      <td>Less: Marginal Relief u/s 87A</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.marginal_relief) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.marginal_relief) }}</td>
    </tr>
    <tr>
      <td>Surcharge</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.surcharge) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.surcharge) }}</td>
    </tr>
    <tr>
      <td>Health & Education Cess (4%)</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.cess) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.cess) }}</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>Total Tax Liability</strong></td>
      <td class="text-right"><strong>{{ "₹{:,.2f}".format(old_regime.total_tax) }}</strong></td>
      <td class="text-right"><strong>{{ "₹{:,.2f}".format(new_regime.total_tax) }}</strong></td>
    </tr>
    <tr>
      <td>Less: Taxes Paid / TDS</td>
      <td class="text-right">{{ "₹{:,.2f}".format(old_regime.tds) }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(new_regime.tds) }}</td>
    </tr>
    <tr class="highlight-row" style="background-color: #f1f5f9;">
      <td><strong>Net Tax Payable / (Refundable)</strong></td>
      <td class="text-right"><strong>{{ "₹{:,.2f}".format(old_regime.tax_payable) }}</strong></td>
      <td class="text-right"><strong>{{ "₹{:,.2f}".format(new_regime.tax_payable) }}</strong></td>
    </tr>
  </tbody>
</table>

<h3 style="font-size: 13px; margin-bottom: 8px; color: #0f172a;">Step-wise Old Regime Breakdown</h3>
<table class="comp-table">
  <thead>
    <tr>
      <th>Step / Item</th>
      <th class="text-right">Amount (₹)</th>
    </tr>
  </thead>
  <tbody>
    {% for item in old_regime.breakdown %}
    <tr>
      <td>{{ item.label }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(item.amount) }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<h3 style="font-size: 13px; margin-bottom: 8px; color: #0f172a;">Step-wise New Regime Breakdown</h3>
<table class="comp-table">
  <thead>
    <tr>
      <th>Step / Item</th>
      <th class="text-right">Amount (₹)</th>
    </tr>
  </thead>
  <tbody>
    {% for item in new_regime.breakdown %}
    <tr>
      <td>{{ item.label }}</td>
      <td class="text-right">{{ "₹{:,.2f}".format(item.amount) }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<div class="disclaimer">
  <strong>Statutory Non-Advisory Disclaimer:</strong> This computation sheet is generated automatically by the AI-Based ITR Computation System for informational and academic demonstration purposes only. It does not constitute professional chartered accountancy, legal, or financial tax advice. Tax liabilities should be verified against official Income Tax Department rules before electronic filing.
</div>

</body>
</html>
"""


class PdfReportGenerator(ReportGenerator):
    def generate(self, computation_data: Dict[str, Any], doc_metadata: Dict[str, Any], output_path: str) -> str:
        import jinja2

        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        template = jinja2.Template(HTML_TEMPLATE)
        html_content = template.render(
            assessment_year=computation_data.get("assessment_year", "2025-26"),
            form_type=doc_metadata.get("form_type", "ITR-1"),
            taxpayer_name=doc_metadata.get("name") or "Taxpayer",
            pan=doc_metadata.get("pan") or "Not Specified",
            file_name=doc_metadata.get("file_name", "Document"),
            computed_at=computation_data.get("computed_at", ""),
            recommended_regime=computation_data.get("recommended_regime", "NEW"),
            old_regime=computation_data.get("old_regime", {}),
            new_regime=computation_data.get("new_regime", {}),
        )

        # Try WeasyPrint first; fall back to ReportLab if WeasyPrint/GTK is not installed
        try:
            from weasyprint import HTML
            HTML(string=html_content).write_pdf(output_path)
            return output_path
        except Exception:
            # ReportLab fallback
            self._generate_reportlab(computation_data, doc_metadata, output_path)
            return output_path

    def _generate_reportlab(self, comp: Dict[str, Any], meta: Dict[str, Any], output_path: str):
        from reportlab.lib import colors
        from reportlab.lib.pagesizes import letter
        from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
        from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

        doc = SimpleDocTemplate(output_path, pagesize=letter, rightMargin=36, leftMargin=36, topMargin=36, bottomMargin=36)
        styles = getSampleStyleSheet()
        elements = []

        title_style = ParagraphStyle(
            'TitleStyle',
            parent=styles['Heading1'],
            fontSize=16,
            leading=20,
            alignment=1,
            textColor=colors.HexColor('#0f172a')
        )
        sub_style = ParagraphStyle(
            'SubStyle',
            parent=styles['Normal'],
            fontSize=10,
            alignment=1,
            textColor=colors.HexColor('#475569')
        )
        normal_style = styles['Normal']

        elements.append(Paragraph("AI-BASED INCOME TAX COMPUTATION SHEET", title_style))
        elements.append(Paragraph(f"Assessment Year: {comp.get('assessment_year', '2025-26')} (FY 2024-25) | Form: {meta.get('form_type', 'ITR-1')}", sub_style))
        elements.append(Spacer(1, 14))

        rec = comp.get("recommended_regime", "NEW")
        banner_style = ParagraphStyle(
            'BannerStyle',
            parent=styles['Normal'],
            fontSize=11,
            textColor=colors.HexColor('#065f46'),
            backColor=colors.HexColor('#ecfdf5'),
            borderPadding=6,
            alignment=1
        )
        elements.append(Paragraph(f"<b>RECOMMENDED: {rec} REGIME</b> (Lower Tax Liability)", banner_style))
        elements.append(Spacer(1, 14))

        old = comp.get("old_regime", {})
        new = comp.get("new_regime", {})

        comp_data = [
            ["Particulars", "Old Regime", "New Regime"],
            ["Gross Total Income", f"Rs. {old.get('gross_total_income', 0):,.2f}", f"Rs. {new.get('gross_total_income', 0):,.2f}"],
            ["Deductions (Chapter VI-A)", f"Rs. {old.get('deductions', 0):,.2f}", f"Rs. {new.get('deductions', 0):,.2f}"],
            ["Taxable Income", f"Rs. {old.get('taxable_income', 0):,.2f}", f"Rs. {new.get('taxable_income', 0):,.2f}"],
            ["Base Tax (slab)", f"Rs. {old.get('base_tax', 0):,.2f}", f"Rs. {new.get('base_tax', 0):,.2f}"],
            ["Rebate u/s 87A", f"Rs. {old.get('rebate_87a', 0):,.2f}", f"Rs. {new.get('rebate_87a', 0):,.2f}"],
            ["Health & Education Cess (4%)", f"Rs. {old.get('cess', 0):,.2f}", f"Rs. {new.get('cess', 0):,.2f}"],
            ["Total Tax Liability", f"Rs. {old.get('total_tax', 0):,.2f}", f"Rs. {new.get('total_tax', 0):,.2f}"],
            ["Less TDS Paid", f"Rs. {old.get('tds', 0):,.2f}", f"Rs. {new.get('tds', 0):,.2f}"],
            ["Net Tax Payable / (Refund)", f"Rs. {old.get('tax_payable', 0):,.2f}", f"Rs. {new.get('tax_payable', 0):,.2f}"],
        ]

        t = Table(comp_data, colWidths=[240, 150, 150])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
            ('TEXTCOLOR', (0,0), (-1,0), colors.HexColor('#0f172a')),
            ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
            ('ALIGN', (1,0), (-1,-1), 'RIGHT'),
            ('FONTNAME', (0,3), (-1,3), 'Helvetica-Bold'),
            ('FONTNAME', (0,7), (-1,7), 'Helvetica-Bold'),
            ('FONTNAME', (0,9), (-1,9), 'Helvetica-Bold'),
            ('BACKGROUND', (0,9), (-1,9), colors.HexColor('#f8fafc')),
        ]))
        elements.append(t)
        elements.append(Spacer(1, 20))

        disclaimer_text = (
            "<b>Statutory Non-Advisory Disclaimer:</b> This computation sheet is generated automatically by the "
            "AI-Based ITR Computation System for informational and academic demonstration purposes only. "
            "It does not constitute chartered accountancy, legal, or financial tax advice. "
            "Tax liabilities should be verified against official Income Tax Department rules before electronic filing."
        )
        elements.append(Paragraph(disclaimer_text, ParagraphStyle('Disc', parent=normal_style, fontSize=8, textColor=colors.HexColor('#64748b'))))

        doc.build(elements)
