"""
Compile Formal Final Project Report PDF with ReportLab.
Incorporates:
- Academic Cover Page (AMU MCA Mini Project - Tabish Hasan 25CAMSA156)
- Certificate of Authenticity & Declaration
- Complete IEEE/Academic Structure
- High-Resolution Architecture & Chen ER Diagrams
- Full-page Screenshot Figures from live execution:
  1. Upload & Ingestion Interface with GridScan WebGL Background
  2. Tax Computation Results Screen (Old vs. New Regime Comparison)
  3. Generated CA Audit Note / Computation of Total Income
- Test Cases, Mathematical Formulations, and Academic Conclusion
"""
import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        if self._pageNumber == 1:
            return  # Skip cover page
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Header
        self.drawString(54, letter[1] - 36, "AITR: AI-Driven Income Tax Return Computation System | AMU MCA Project")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(54, letter[1] - 42, letter[0] - 54, letter[1] - 42)
        
        # Footer
        self.line(54, 45, letter[0] - 54, 45)
        self.drawString(54, 32, "Department of Computer Science, Aligarh Muslim University (AMU)")
        self.drawRightString(letter[0] - 54, 32, f"Page {self._pageNumber} of {page_count}")
        self.restoreState()


def build_final_report_pdf(pdf_path: str, assets_dir: str, diagrams_dir: str):
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=23,
        leading=29,
        textColor=colors.HexColor('#0f172a'),
        alignment=1,
        spaceAfter=10
    )

    subtitle_style = ParagraphStyle(
        'CoverSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#334155'),
        alignment=1,
        spaceAfter=25
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=colors.HexColor('#1e3a8a'),
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'H2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=colors.HexColor('#0369a1'),
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=6
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=body_style,
        leftIndent=15,
        bulletIndent=5,
        spaceAfter=3
    )

    caption_style = ParagraphStyle(
        'Caption',
        parent=styles['Italic'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#475569'),
        alignment=1,
        spaceAfter=8
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#0f172a')
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )

    story = []

    # ──────────────────────────────────────────────────────────────────────────
    # COVER PAGE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Spacer(1, 30))
    story.append(Paragraph("DEPARTMENT OF COMPUTER SCIENCE", ParagraphStyle('Univ', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=14, leading=18, textColor=colors.HexColor('#1e3a8a'), alignment=1)))
    story.append(Paragraph("ALIGARH MUSLIM UNIVERSITY, ALIGARH (U.P.), INDIA", ParagraphStyle('Univ2', parent=styles['Normal'], fontName='Helvetica', fontSize=10.5, leading=14, textColor=colors.HexColor('#475569'), alignment=1)))
    story.append(Spacer(1, 35))

    story.append(HRFlowable(width="70%", thickness=2.5, color=colors.HexColor('#1e3a8a'), spaceAfter=18, spaceBefore=0))
    story.append(Paragraph("PROJECT REPORT", ParagraphStyle('ReportBadge', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=12, leading=15, textColor=colors.HexColor('#0369a1'), alignment=1, spaceAfter=8)))
    story.append(Paragraph("AI-DRIVEN INCOME TAX RETURN (ITR)<br/>COMPUTATION SYSTEM (AITR)", title_style))
    story.append(Paragraph("A Full-Stack Financial Assessment System with Deterministic Multi-Regime Computation & Semantic LLM Extraction", subtitle_style))
    story.append(HRFlowable(width="70%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceAfter=35, spaceBefore=0))

    meta_data = [
        [Paragraph("<b>Degree Program:</b>", body_style), Paragraph("Master of Computer Applications (MCA)", body_style)],
        [Paragraph("<b>Course Requirement:</b>", body_style), Paragraph("MCA Mini Project (Semester Curriculum)", body_style)],
        [Paragraph("<b>Academic Session:</b>", body_style), Paragraph("2026 – 2027", body_style)],
        [Paragraph("<b>Submitted By:</b>", body_style), Paragraph("<b>Tabish Hasan</b>", body_style)],
        [Paragraph("<b>Roll / Enrolment No:</b>", body_style), Paragraph("<b>25CAMSA156</b>", body_style)],
        [Paragraph("<b>Department / Institution:</b>", body_style), Paragraph("Department of Computer Science, AMU", body_style)],
        [Paragraph("<b>Source Code Repository:</b>", body_style), Paragraph("https://github.com/TABISH-HK/AITR", body_style)],
        [Paragraph("<b>Live Cloud Application:</b>", body_style), Paragraph("https://aitr-drab.vercel.app/", body_style)],
    ]
    meta_table = Table(meta_data, colWidths=[150, 310])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(meta_table)

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # CERTIFICATE & DECLARATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Certificate of Authenticity", h1_style))
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "This is to certify that the project entitled <b>\"AI-Driven Income Tax Return (ITR) Computation System (AITR)\"</b> "
        "is a bonafide record of work carried out by <b>Tabish Hasan (25CAMSA156)</b> in partial fulfillment of the requirements "
        "for the degree of <b>Master of Computer Applications (MCA)</b> at the <b>Department of Computer Science, Aligarh Muslim University, Aligarh</b> "
        "during the academic session 2026–2027.",
        body_style
    ))
    story.append(Paragraph(
        "The project demonstrates sound engineering principles, incorporating modern API design, reactive WebGL user interfaces, "
        "large language model parsing, and strict adherence to the Indian Income Tax Act, 1961.",
        body_style
    ))
    story.append(Spacer(1, 40))

    sig_table = Table([
        [Paragraph("<b>Tabish Hasan</b><br/>Candidate (25CAMSA156)<br/>MCA, AMU", body_style),
         Paragraph("<b>Project Supervisor / Faculty Mentor</b><br/>Department of Computer Science<br/>Aligarh Muslim University", body_style)]
    ], colWidths=[230, 230])
    sig_table.setStyle(TableStyle([
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('LINEABOVE', (0,0), (0,0), 1, colors.HexColor('#94a3b8')),
        ('LINEABOVE', (1,0), (1,0), 1, colors.HexColor('#94a3b8')),
    ]))
    story.append(sig_table)

    story.append(Spacer(1, 25))
    story.append(Paragraph("Executive Summary", h1_style))
    story.append(Paragraph(
        "The <b>AI-Driven Income Tax Return (ITR) Computation System (AITR)</b> is an intelligent, automated financial platform "
        "designed to eradicate manual transcription errors and computational discrepancies during income tax assessment in India. "
        "By fusing <b>hybrid semantic AI extraction (NVIDIA NIM LLM + rule-based regex)</b> with a <b>100% deterministic calculation engine</b>, "
        "the application ingests official filing forms (ITR-1 Sahaj, ITR-2 Capital Gains/Crypto, and ITR-4 Sugam presumptive), computes "
        "exact tax liabilities across dual regimes (Old vs. Section 115BAC New Regime) for Assessment Years 2025-26 and 2026-27, and exports "
        "statutory Chartered Accountant-format audit notes in both PDF and DOCX formats.",
        body_style
    ))

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 1: SYSTEM OVERVIEW & ARCHITECTURE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("1. System Architecture & Engineering Methodology", h1_style))
    story.append(Paragraph(
        "AITR is engineered as an asynchronous, decoupled client-server architecture. The frontend Single Page Application (SPA) "
        "features a custom Three.js WebGL GridScan shader background that dynamically accelerates during computational extraction. "
        "The backend is driven by FastAPI with automated SQLite persistence, utilizing `/tmp` directory abstractions for serverless cloud execution.",
        body_style
    ))

    arch_img = os.path.join(diagrams_dir, "class_diag.png")
    if os.path.exists(arch_img):
        story.append(Image(arch_img, width=460, height=270))
        story.append(Paragraph("Figure 1.1: Object-Oriented Backend Architecture and Engine Inheritance Hierarchy", caption_style))

    story.append(Paragraph("2. Conceptual Database Design (Chen's ER Model)", h1_style))
    story.append(Paragraph(
        "In accordance with standard database modeling conventions, the schema encompasses 5 relational entities. "
        "<b>Rectangles</b> represent Entities, <b>Diamonds</b> represent Relational Cardinalities (1:1, 1:N), and <b>Ovals</b> depict Attributes "
        "with primary key constraints underlined.",
        body_style
    ))

    er_img = os.path.join(diagrams_dir, "er_chen.png")
    if os.path.exists(er_img):
        story.append(Image(er_img, width=460, height=290))
        story.append(Paragraph("Figure 2.1: Classical Chen's Entity-Relationship (ER) Diagram (Rectangles, Diamonds, Ovals)", caption_style))

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 3: SYSTEM SCREENSHOTS & OPERATIONAL VERIFICATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3. Operational Screenshots & User Interface", h1_style))
    story.append(Paragraph(
        "The following screenshots document the live execution of the AITR application across its primary operational states:",
        body_style
    ))

    # Screenshot 1: Upload Page
    sc1_path = os.path.join(assets_dir, "screen_upload.jpg")
    if os.path.exists(sc1_path):
        story.append(Paragraph("3.1 Document Ingestion & WebGL Shader Interface", h2_style))
        story.append(Paragraph(
            "Users upload digital PDF or DOCX ITR documents (Form 16, salary slips, or computation drafts). "
            "The screen renders an interactive Three.js WebGL GridScan background shader that visually tracks system interaction.",
            body_style
        ))
        story.append(Image(sc1_path, width=480, height=270))
        story.append(Paragraph("Figure 3.1: AITR Ingestion Interface with Drag-and-Drop Zone and Three.js WebGL Background", caption_style))
        story.append(Spacer(1, 10))

    # Screenshot 2: Computation Results
    sc2_path = os.path.join(assets_dir, "screen_results.jpg")
    if os.path.exists(sc2_path):
        story.append(Paragraph("3.2 Dual-Regime Tax Computation Results & Recommendation", h2_style))
        story.append(Paragraph(
            "Following automated extraction and user review, the deterministic tax engine computes side-by-side liabilities "
            "for Old and New Regimes. As shown below for taxpayer SHAKEV ULLAH KHAN (AY 2025-26), both regimes evaluate to ₹0 tax liability, "
            "recommending EQUAL REGIME with full refund of TDS (₹10,238).",
            body_style
        ))
        story.append(Image(sc2_path, width=480, height=275))
        story.append(Paragraph("Figure 3.2: Dual-Regime Comparative Evaluation Screen with Automated Recommendation Banner", caption_style))

    story.append(PageBreak())

    # Screenshot 3: CA Audit Report
    sc3_path = os.path.join(assets_dir, "screen_ca_report.png")
    if os.path.exists(sc3_path):
        story.append(Paragraph("3.3 Chartered Accountant (CA) Computation Audit Statement", h2_style))
        story.append(Paragraph(
            "Clicking 'Download PDF' triggers the ReportLab generation engine to compile an official CA-format Computation of Total Income sheet. "
            "It incorporates Section 288A rounding (nearest ₹10), Section 115BAC New Regime calculations, Chapter IV heads, and Old Regime comparison.",
            body_style
        ))
        story.append(Image(sc3_path, width=450, height=430))
        story.append(Paragraph("Figure 3.3: Generated CA Audit Note / Computation of Total Income (PDF Report Export)", caption_style))
        story.append(Spacer(1, 10))

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 4: MATHEMATICAL SLABS & VERIFICATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("4. Statutory Tax Slabs & Deterministic Formulations", h1_style))
    story.append(Paragraph(
        "AITR strictly encodes the Indian Income Tax Act, 1961. The table below delineates the statutory tax slabs executed by the calculation engine:",
        body_style
    ))

    slabs_data = [
        [Paragraph("Regime", table_header), Paragraph("Income Slab (₹)", table_header), Paragraph("Tax Rate", table_header), Paragraph("Standard Ded.", table_header), Paragraph("Rebate u/s 87A", table_header)],
        [Paragraph("<b>Old Regime</b><br/>(AY 2025-26 & 2026-27)", table_cell), Paragraph("0 - 2,50,000<br/>2,50,001 - 5,00,000<br/>5,00,001 - 10,00,000<br/>Above 10,00,000", table_cell), Paragraph("Nil<br/>5%<br/>20%<br/>30%", table_cell), Paragraph("₹50,000", table_cell), Paragraph("Max ₹12,500<br/>(Total Income <= ₹5,00,000)", table_cell)],
        [Paragraph("<b>New Regime</b><br/>(u/s 115BAC)", table_cell), Paragraph("0 - 3,00,000<br/>3,00,001 - 7,00,000<br/>7,00,001 - 10,00,000<br/>10,00,001 - 12,00,000<br/>12,00,001 - 15,00,000<br/>Above 15,00,000", table_cell), Paragraph("Nil<br/>5%<br/>10%<br/>15%<br/>20%<br/>30%", table_cell), Paragraph("₹75,000<br/>(Budget 2024 revised)", table_cell), Paragraph("Max ₹25,000<br/>(Full Rebate if Total Income <= ₹7,00,000)", table_cell)],
    ]
    t_slabs = Table(slabs_data, colWidths=[80, 140, 70, 90, 124])
    t_slabs.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1e3a8a')),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_slabs)
    story.append(Spacer(1, 10))

    story.append(Paragraph("4.1 Special Rates & Presumptive Schemes", h2_style))
    story.append(Paragraph("<b>Section 115BBH (Virtual Digital Assets / Crypto):</b> Flat 30% tax + 4% cess on gross VDA gains without deduction of expenses.", bullet_style))
    story.append(Paragraph("<b>Section 44AD (Presumptive Business Turnover):</b> Deemed net profit at 6% on digital turnover and 8% on cash turnover.", bullet_style))
    story.append(Paragraph("<b>Section 44ADA (Presumptive Professional Receipts):</b> Deemed profit at 50% on gross professional receipts.", bullet_style))
    story.append(Paragraph("<b>Section 288A & 288B Rounding:</b> Taxable total income rounded to nearest ₹10; final tax liability/refund rounded to nearest rupee.", bullet_style))

    story.append(Spacer(1, 10))
    story.append(Paragraph("5. Key Advantages & Innovations", h1_style))
    story.append(Paragraph("<b>1. Zero Arithmetic Hallucination:</b> AI models parse text; deterministic algorithms execute all tax math.", bullet_style))
    story.append(Paragraph("<b>2. Multi-AY Agility:</b> Dynamically configures slabs between AY 2025-26 and 2026-27 based on Union Budget updates.", bullet_style))
    story.append(Paragraph("<b>3. Broad Form Coverage:</b> Full support across ITR-1 (salaried), ITR-2 (capital gains/VDA), and ITR-4 (presumptive).", bullet_style))
    story.append(Paragraph("<b>4. CA-Standard Audit Export:</b> Instant generation of printable PDF and editable Word DOCX audit notes.", bullet_style))
    story.append(Paragraph("<b>5. Cloud & Serverless Ready:</b> Configured for zero-configuration deployment on Vercel and traditional servers.", bullet_style))

    story.append(Spacer(1, 10))
    story.append(Paragraph("6. Conclusion & Future Work", h1_style))
    story.append(Paragraph(
        "The AITR system successfully accomplishes all research and engineering objectives specified for the MCA Mini Project. "
        "It establishes a reliable paradigm for financial technology in India, bridging the gap between natural language document ingestion "
        "and mathematically verifiable tax computation. Future work will explore direct JSON e-filing submission integration with CBDT servers "
        "and computer vision optical character recognition for physical receipts.",
        body_style
    ))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully compiled Final Project Report PDF at: {pdf_path}")


if __name__ == "__main__":
    out_pdf = r"D:\Python\AITR\AITR_Final_Project_Report.pdf"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_final_report_pdf(out_pdf, assets, diagrams)
