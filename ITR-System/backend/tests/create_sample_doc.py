"""
Generates a sample digital ITR/Form 16 PDF for testing.
"""
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_sample_itr_pdf(filename="sample_itr1_document.pdf"):
    doc = SimpleDocTemplate(filename, pagesize=letter)
    styles = getSampleStyleSheet()
    elements = []

    title_style = ParagraphStyle('Title', parent=styles['Heading1'], fontSize=16, alignment=1)
    elements.append(Paragraph("FORM NO. 16 - PART B", title_style))
    elements.append(Paragraph("Certificate under section 203 of the Income-tax Act, 1961 for tax deducted at source on salary", styles['Normal']))
    elements.append(Spacer(1, 14))

    meta_data = [
        ["Name of Employee", "Tabish Hasan", "PAN of Employee", "ABCDE1234F"],
        ["Assessment Year", "2025-26", "Period with Employer", "01-Apr-2024 to 31-Mar-2025"]
    ]
    t1 = Table(meta_data, colWidths=[130, 130, 130, 130])
    t1.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
    ]))
    elements.append(t1)
    elements.append(Spacer(1, 14))

    salary_data = [
        ["Particulars", "Amount (Rs.)"],
        ["1. Gross Salary u/s 17(1)", "9,50,000.00"],
        ["2. Exemptions u/s 10 (HRA / Allowance)", "50,000.00"],
        ["3. Standard Deduction u/s 16(ia)", "50,000.00"],
        ["4. Income chargeable under head 'Salaries'", "8,50,000.00"],
        ["5. Income from Other Sources (Savings Bank Interest)", "25,000.00"],
        ["6. Deductions under Chapter VI-A:", ""],
        ["   a) Section 80C (PPF / ELSS / Life Insurance)", "1,20,000.00"],
        ["   b) Section 80D (Health Insurance Premium)", "25,000.00"],
        ["   c) Section 80TTA (Interest on deposits)", "10,000.00"],
        ["7. Total Tax Deducted at Source (TDS)", "35,000.00"],
    ]
    t2 = Table(salary_data, colWidths=[360, 160])
    t2.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
    ]))
    elements.append(t2)
    doc.build(elements)
    print(f"Sample PDF created: {filename}")

if __name__ == "__main__":
    create_sample_itr_pdf()
