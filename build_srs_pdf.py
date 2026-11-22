"""
Generate formal IEEE 830 SRS Document in PDF format using ReportLab.
Features:
- Academic project cover page (AMU MCA Mini Project)
- Formatted tables, typography, headers/footers with page numbering
- High-resolution embedded diagram figures (Use Case, Chen's ER, Class, Sequence, DFD-0, DFD-1)
- Complete Functional and Non-Functional Requirements
"""
import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
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
        self.drawString(54, letter[1] - 36, "AITR: AI-Driven Income Tax Return Computation System | AMU MCA Mini Project")
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(54, letter[1] - 42, letter[0] - 54, letter[1] - 42)
        
        # Footer
        self.line(54, 45, letter[0] - 54, 45)
        self.drawString(54, 32, "Confidential - Department of Computer Science, Aligarh Muslim University")
        self.drawRightString(letter[0] - 54, 32, f"Page {self._pageNumber} of {page_count}")
        self.restoreState()


def build_srs_pdf(pdf_path: str, diagrams_dir: str):
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
        fontSize=24,
        leading=30,
        textColor=colors.HexColor('#0f172a'),
        alignment=1, # Center
        spaceAfter=12
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
        fontSize=15,
        leading=19,
        textColor=colors.HexColor('#1e3a8a'),
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'H2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=colors.HexColor('#0369a1'),
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    h3_style = ParagraphStyle(
        'H3',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#334155'),
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
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
        textColor=colors.HexColor('#64748b'),
        alignment=1,
        spaceAfter=10
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
    story.append(Spacer(1, 40))
    story.append(Paragraph("DEPARTMENT OF COMPUTER SCIENCE", ParagraphStyle('Univ', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=13, leading=16, textColor=colors.HexColor('#1e3a8a'), alignment=1)))
    story.append(Paragraph("ALIGARH MUSLIM UNIVERSITY, ALIGARH", ParagraphStyle('Univ2', parent=styles['Normal'], fontName='Helvetica', fontSize=11, leading=14, textColor=colors.HexColor('#334155'), alignment=1)))
    story.append(Spacer(1, 40))

    story.append(HRFlowable(width="60%", thickness=2, color=colors.HexColor('#1e3a8a'), spaceAfter=20, spaceBefore=0))
    story.append(Paragraph("SOFTWARE REQUIREMENTS SPECIFICATION (SRS)", title_style))
    story.append(Paragraph("For: <b>AI-Driven Income Tax Return (ITR) Computation System (AITR)</b><br/>Compliant with IEEE Std 830-1998", subtitle_style))
    story.append(HRFlowable(width="60%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceAfter=40, spaceBefore=0))

    meta_data = [
        [Paragraph("<b>Document Version:</b>", body_style), Paragraph("1.0 (Release Candidate)", body_style)],
        [Paragraph("<b>Academic Session:</b>", body_style), Paragraph("2026 – 2027", body_style)],
        [Paragraph("<b>Course / Degree:</b>", body_style), Paragraph("Master of Computer Applications (MCA)", body_style)],
        [Paragraph("<b>Project Type:</b>", body_style), Paragraph("MCA Mini Project", body_style)],
        [Paragraph("<b>Author / Candidate:</b>", body_style), Paragraph("<b>Tabish Hasan</b>", body_style)],
        [Paragraph("<b>Roll / Enrolment No:</b>", body_style), Paragraph("25CAMSA156", body_style)],
        [Paragraph("<b>Repository:</b>", body_style), Paragraph("https://github.com/TABISH-HK/AITR", body_style)],
        [Paragraph("<b>Date of Release:</b>", body_style), Paragraph("November 2026", body_style)],
    ]
    meta_table = Table(meta_data, colWidths=[150, 300])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(meta_table)

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 1: INTRODUCTION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("1. Introduction", h1_style))
    story.append(Paragraph("1.1 Purpose", h2_style))
    story.append(Paragraph(
        "This Software Requirements Specification (SRS) document provides a comprehensive, verifiable, and unambiguous "
        "description of the <b>AI-Driven Income Tax Return Computation System (AITR)</b>. It defines the functional, "
        "architectural, data modeling, external interface, and deterministic tax computation requirements under the Indian "
        "Income Tax Act, 1961 for Assessment Years (AY) 2025-26 and 2026-27.",
        body_style
    ))

    story.append(Paragraph("1.2 Scope of the System", h2_style))
    story.append(Paragraph(
        "AITR is a full-stack, automated tax assessment platform engineered for Indian individual taxpayers, consultants, and "
        "Chartered Accountants (CAs). The application ingests official ITR forms (ITR-1 Sahaj, ITR-2 Capital Gains/VDA, ITR-4 Sugam presumptive), "
        "executes regex and LLM-assisted multi-layer information extraction, computes tax liability under dual regimes "
        "(Old vs. Section 115BAC New Regime) with 100% deterministic precision, and generates downloadable audit-ready CA reports.",
        body_style
    ))

    story.append(Paragraph("1.3 Definitions, Acronyms, and Abbreviations", h2_style))
    defs_data = [
        [Paragraph("Term", table_header), Paragraph("Definition", table_header)],
        [Paragraph("ITR", table_cell), Paragraph("Income Tax Return prescribed by CBDT.", table_cell)],
        [Paragraph("AY / FY", table_cell), Paragraph("Assessment Year / Financial Year (Previous Year).", table_cell)],
        [Paragraph("PAN", table_cell), Paragraph("Permanent Account Number (10-character alphanumeric Indian taxpayer ID).", table_cell)],
        [Paragraph("VDA", table_cell), Paragraph("Virtual Digital Asset (Crypto/NFTs) taxed u/s 115BBH @ 30%.", table_cell)],
        [Paragraph("TDS", table_cell), Paragraph("Tax Deducted at Source by employer/deductors.", table_cell)],
        [Paragraph("Rebate 87A", table_cell), Paragraph("Tax rebate for resident individuals (up to ₹12.5k Old / ₹25k New).", table_cell)],
        [Paragraph("WAL", table_cell), Paragraph("Write-Ahead Logging mode for concurrent SQLite database access.", table_cell)],
    ]
    t_defs = Table(defs_data, colWidths=[90, 414])
    t_defs.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1e3a8a')),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_defs)
    story.append(Spacer(1, 10))

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 2: OVERALL DESCRIPTION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("2. Overall Description", h1_style))
    story.append(Paragraph("2.1 Product Perspective & High-Level Architecture", h2_style))
    story.append(Paragraph(
        "AITR operates as an asynchronous decoupled architecture. The frontend is a React 18 Single Page Application (SPA) "
        "featuring an interactive Three.js WebGL GridScan shader background. The backend is a Python FastAPI service exposing RESTful APIs "
        "interacting with pdfplumber/python-docx for parsing, NVIDIA NIM LLM for semantic reasoning, deterministic tax engines, "
        "and ReportLab/python-docx for report generation.",
        body_style
    ))

    story.append(Paragraph("2.2 System Modules Breakdown", h2_style))
    story.append(Paragraph("<b>1. Ingestion Module:</b> Handles multi-part file uploads (.pdf, .docx up to 25MB) with session binding.", bullet_style))
    story.append(Paragraph("<b>2. Parsing & Extraction:</b> Dual-layer pipeline: deterministic regex primary extraction + NVIDIA NIM LLM fallback.", bullet_style))
    story.append(Paragraph("<b>3. Review & Correction:</b> React UI enabling user overrides and manual corrections of financial heads.", bullet_style))
    story.append(Paragraph("<b>4. Tax Engine:</b> Independent deterministic engines for ITR-1, ITR-2, and ITR-4 evaluating Old and New Regimes.", bullet_style))
    story.append(Paragraph("<b>5. Audit Reporting:</b> Generation of CA computation statements in PDF and DOCX formats.", bullet_style))

    story.append(Spacer(1, 8))

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 3: SYSTEM FEATURES & FUNCTIONAL REQUIREMENTS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3. Functional Requirements", h1_style))
    
    fr_data = [
        [Paragraph("Req ID", table_header), Paragraph("Feature", table_header), Paragraph("Description", table_header)],
        [Paragraph("FR-1.1", table_cell), Paragraph("Session Management", table_cell), Paragraph("Assign and manage persistent UUID-based user sessions.", table_cell)],
        [Paragraph("FR-1.2", table_cell), Paragraph("File Upload", table_cell), Paragraph("Support uploading PDF and DOCX ITR files up to 25MB with validation.", table_cell)],
        [Paragraph("FR-2.1", table_cell), Paragraph("Form Auto-Detection", table_cell), Paragraph("Identify ITR-1 (Sahaj), ITR-2, or ITR-4 (Sugam) automatically.", table_cell)],
        [Paragraph("FR-2.2", table_cell), Paragraph("Field Extraction", table_cell), Paragraph("Extract PAN, Aadhaar, AY, Salary, Deductions, VDA, and TDS.", table_cell)],
        [Paragraph("FR-3.1", table_cell), Paragraph("Data Review", table_cell), Paragraph("Present extracted values for user validation and manual modification.", table_cell)],
        [Paragraph("FR-4.1", table_cell), Paragraph("Multi-AY Computation", table_cell), Paragraph("Support deterministic slab calculation for AY 2025-26 & AY 2026-27.", table_cell)],
        [Paragraph("FR-4.2", table_cell), Paragraph("Dual Regime Evaluation", table_cell), Paragraph("Calculate side-by-side Old vs. New Regime tax and recommend lowest.", table_cell)],
        [Paragraph("FR-4.3", table_cell), Paragraph("Section 87A Rebate", table_cell), Paragraph("Apply rebate up to ₹12.5k (Old <= 5L) and ₹25k (New <= 7L).", table_cell)],
        [Paragraph("FR-4.4", table_cell), Paragraph("VDA Flat Taxation", table_cell), Paragraph("Tax Virtual Digital Assets (Crypto) flat at 30% + 4% cess u/s 115BBH.", table_cell)],
        [Paragraph("FR-5.1", table_cell), Paragraph("Report Export", table_cell), Paragraph("Generate formal CA-format computation sheets in PDF and DOCX.", table_cell)],
    ]
    t_fr = Table(fr_data, colWidths=[55, 120, 329])
    t_fr.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1e3a8a')),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_fr)

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 4: SYSTEM MODELING & DIAGRAMS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("4. System Modeling & Diagrams", h1_style))

    # Helper function to insert an image with border and caption
    def add_diagram(img_name: str, caption_text: str, w=480, h=300):
        img_path = os.path.join(diagrams_dir, img_name)
        if os.path.exists(img_path):
            try:
                img = Image(img_path, width=w, height=h)
                story.append(Spacer(1, 4))
                story.append(img)
                story.append(Spacer(1, 2))
                story.append(Paragraph(caption_text, caption_style))
                story.append(Spacer(1, 6))
            except Exception as e:
                story.append(Paragraph(f"<i>[Error rendering {img_name}: {e}]</i>", caption_style))
        else:
            story.append(Paragraph(f"<i>[Diagram {img_name} not found]</i>", caption_style))

    # 4.1 Use Case Diagram
    story.append(Paragraph("4.1 Use Case Diagram", h2_style))
    story.append(Paragraph(
        "Illustrates the primary user roles (Taxpayer / CA) interacting with the AITR system, highlighting "
        "document upload, extraction verification, dual-regime tax computation, and report downloading.",
        body_style
    ))
    add_diagram("usecase.png", "Figure 4.1: AITR System Use Case Diagram", w=450, h=260)

    # 4.2 Classical Chen ER Diagram
    story.append(Paragraph("4.2 Classical Entity-Relationship (ER) Diagram (Chen's Notation)", h2_style))
    story.append(Paragraph(
        "Constructed using standard academic Chen's notation: <b>Rectangles</b> represent Entities, <b>Diamonds</b> "
        "represent Relationships with cardinalities (1:1, 1:N), and <b>Ovals</b> represent individual Attributes with Primary Keys underlined.",
        body_style
    ))
    add_diagram("er_chen.png", "Figure 4.2: Classical Entity-Relationship Diagram (Chen's Notation with Rectangles, Diamonds & Ovals)", w=480, h=320)

    story.append(PageBreak())

    # 4.3 Class Diagram
    story.append(Paragraph("4.3 Object-Oriented Class Diagram", h2_style))
    story.append(Paragraph(
        "Depicts the object-oriented backend hierarchy. The abstract <code>BaseTaxEngine</code> is inherited by specialized "
        "engines for ITR-1, ITR-2, and ITR-4. Report generators implement <code>ReportService</code>.",
        body_style
    ))
    add_diagram("class_diag.png", "Figure 4.3: Backend Architecture Class Diagram and Inheritance Hierarchy", w=480, h=300)

    # 4.4 Sequence Diagram
    story.append(Paragraph("4.4 Sequence Diagram (End-to-End Execution Flow)", h2_style))
    story.append(Paragraph(
        "Demonstrates the complete chronological request-response lifecycle from file upload to data review, tax computation, "
        "database persistence, and audit report generation.",
        body_style
    ))
    add_diagram("sequence_diag.png", "Figure 4.4: Sequence Diagram for Document Ingestion, Tax Computation, and Reporting", w=480, h=310)

    story.append(PageBreak())

    # 4.5 Data Flow Diagrams (DFD)
    story.append(Paragraph("4.5 Data Flow Diagrams (DFD)", h1_style))
    story.append(Paragraph("4.5.1 Level 0 DFD (Context Diagram)", h2_style))
    story.append(Paragraph(
        "Defines the system boundaries of AITR, capturing data flows between external entities (Taxpayer / CA, NVIDIA NIM AI) "
        "and the centralized computing system.",
        body_style
    ))
    add_diagram("dfd0.png", "Figure 4.5: Level 0 DFD - Context Diagram", w=460, h=150)

    story.append(Paragraph("4.5.2 Level 1 DFD (Subsystem Decomposition)", h2_style))
    story.append(Paragraph(
        "Decomposes the context diagram into 5 functional processes (Upload, Extraction, Review, Computation, Reporting) "
        "and 4 persistent database stores (D1 to D4).",
        body_style
    ))
    add_diagram("dfd1.png", "Figure 4.6: Level 1 DFD - Subsystem Decomposition and Data Store Operations", w=480, h=310)

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 5: MATHEMATICAL FORMULATION & TAX SLABS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(PageBreak())
    story.append(Paragraph("5. Mathematical Formulation & Tax Slabs", h1_style))

    story.append(Paragraph("5.1 Assessment Year Tax Slab Specifications", h2_style))
    slabs_data = [
        [Paragraph("Regime", table_header), Paragraph("Income Slab (₹)", table_header), Paragraph("Tax Rate", table_header), Paragraph("Standard Ded.", table_header), Paragraph("Rebate u/s 87A", table_header)],
        [Paragraph("<b>Old Regime</b><br/>(All AYs)", table_cell), Paragraph("0 - 2,50,000<br/>2,50,001 - 5,00,000<br/>5,00,001 - 10,00,000<br/>Above 10,00,000", table_cell), Paragraph("Nil<br/>5%<br/>20%<br/>30%", table_cell), Paragraph("₹50,000", table_cell), Paragraph("Max ₹12,500<br/>(If Total <= ₹5,00,000)", table_cell)],
        [Paragraph("<b>New Regime</b><br/>(AY 2025-26 & 2026-27)", table_cell), Paragraph("0 - 3,00,000<br/>3,00,001 - 7,00,000<br/>7,00,001 - 10,00,000<br/>10,00,001 - 12,00,000<br/>12,00,001 - 15,00,000<br/>Above 15,00,000", table_cell), Paragraph("Nil<br/>5%<br/>10%<br/>15%<br/>20%<br/>30%", table_cell), Paragraph("₹75,000<br/>(Raised in Budget 2024)", table_cell), Paragraph("Max ₹25,000<br/>(100% Rebate if Total <= ₹7,00,000)", table_cell)],
    ]
    t_slabs = Table(slabs_data, colWidths=[80, 140, 70, 90, 124])
    t_slabs.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1e3a8a')),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_slabs)
    story.append(Spacer(1, 10))

    story.append(Paragraph("5.2 Precision Rounding Standards", h2_style))
    story.append(Paragraph("<b>Section 288A (Taxable Total Income):</b> Rounded to the nearest ₹10: <code>Round(Income / 10) * 10</code>.", bullet_style))
    story.append(Paragraph("<b>Section 288B (Net Tax / Refund):</b> Rounded to the nearest ₹1 (rupee): <code>Round(Tax_Payable)</code>.", bullet_style))
    story.append(Paragraph("<b>Health & Education Cess:</b> Applied uniformly at 4% on net tax liability before advance tax / TDS credits.", bullet_style))

    story.append(Spacer(1, 15))
    story.append(Paragraph("6. Non-Functional Requirements", h1_style))
    story.append(Paragraph("<b>NFR-1 (Deterministic Accuracy):</b> Dual tax computation engines shall execute with zero algorithmic divergence from official CBDT portal rules.", bullet_style))
    story.append(Paragraph("<b>NFR-2 (Computation Latency):</b> Tax calculations and regime recommendations shall resolve in under 50ms upon request.", bullet_style))
    story.append(Paragraph("<b>NFR-3 (Report Generation Performance):</b> PDF audit reports shall render in under 1.2 seconds using ReportLab canvas streams.", bullet_style))
    story.append(Paragraph("<b>NFR-4 (Security & Isolation):</b> Uploaded documents are segregated by unique UUID namespaces; temporary files are scrubbed after lifecycle completion.", bullet_style))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated SRS PDF at: {pdf_path}")


if __name__ == "__main__":
    out_pdf = r"D:\Python\AITR\AITR_Software_Requirements_Specification_SRS.pdf"
    diag_dir = r"D:\Python\AITR\srs_diagrams"
    build_srs_pdf(out_pdf, diag_dir)
