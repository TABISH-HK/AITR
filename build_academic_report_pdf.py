"""
Compile Comprehensive Academic Project Report (Chapters 1 to 6) into PDF using ReportLab.
Conforming strictly to the structure provided:
- Chapter 1: INTRODUCTION (Literature Survey, Domain Profile, Shortcomings, Realization, Broad Outline)
- Chapter 2: PROBLEM FORMULATION (Definition, Aspects, Critical View, Technical Novelty, Proposed Method)
- Chapter 3: SYSTEM ANALYSIS AND DESIGN (Requirements, Operating Env, System Architecture, UML/DFD/ER Diagrams, Traceability, Risks)
- Chapter 4: SYSTEM IMPLEMENTATION (Hardware/Software Reqs, Project Structure Tree, Operation Manual with ALL Screenshots, Main APIs)
- Chapter 5: RESULT AND DISCUSSION (Interpretation, Risk/Regime Analysis, Implemented Rules, Test Scenarios TC-01 to TC-12, Comparison)
- Chapter 6: CONCLUSION (Advantages, Limitations, Future Scope, References)
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

class AcademicNumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(AcademicNumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(AcademicNumberedCanvas, self).showPage()
        super(AcademicNumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        if self._pageNumber == 1:
            return  # Skip cover
        self.saveState()
        self.setFont("Times-Roman", 9)
        self.setFillColor(colors.HexColor("#334155"))
        
        # Running Header
        self.drawString(54, letter[1] - 36, "AITR: AI-Driven Income Tax Return Computation System | AMU MCA Project")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(54, letter[1] - 40, letter[0] - 54, letter[1] - 40)
        
        # Running Footer
        self.line(54, 45, letter[0] - 54, 45)
        self.drawString(54, 32, "Department of Computer Science, Aligarh Muslim University (AMU)")
        self.drawRightString(letter[0] - 54, 32, f"Page {self._pageNumber} of {page_count}")
        self.restoreState()


def build_academic_report_pdf(pdf_path: str, assets_dir: str, diagrams_dir: str):
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Formatting Styles conforming to sample project file
    cover_univ = ParagraphStyle(
        'CoverUniv',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=15,
        leading=19,
        alignment=1,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=4
    )

    cover_title = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=20,
        leading=25,
        alignment=1,
        textColor=colors.HexColor('#1e3a8a'),
        spaceAfter=12
    )

    chap_heading = ParagraphStyle(
        'ChapHeading',
        parent=styles['Heading1'],
        fontName='Times-Bold',
        fontSize=15,
        leading=19,
        alignment=1, # Center like sample "Chapter 1: INTRODUCTION"
        textColor=colors.black,
        spaceBefore=16,
        spaceAfter=14,
        keepWithNext=True
    )

    sec_heading = ParagraphStyle(
        'SecHeading',
        parent=styles['Heading2'],
        fontName='Times-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.black,
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )

    subsec_heading = ParagraphStyle(
        'SubSecHeading',
        parent=styles['Heading3'],
        fontName='Times-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#1e293b'),
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    body = ParagraphStyle(
        'AcademicBody',
        parent=styles['BodyText'],
        fontName='Times-Roman',
        fontSize=10,
        leading=14.5,
        textColor=colors.black,
        alignment=4, # Justified
        spaceAfter=6
    )

    bullet = ParagraphStyle(
        'AcademicBullet',
        parent=body,
        leftIndent=16,
        bulletIndent=6,
        spaceAfter=3,
        alignment=4
    )

    caption = ParagraphStyle(
        'FigCaption',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=9,
        leading=12,
        alignment=1,
        textColor=colors.HexColor('#334155'),
        spaceBefore=4,
        spaceAfter=10
    )

    th = ParagraphStyle(
        'TH',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.black
    )

    tc = ParagraphStyle(
        'TC',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8,
        leading=11,
        textColor=colors.black
    )

    story = []

    # ──────────────────────────────────────────────────────────────────────────
    # COVER & CERTIFICATE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Spacer(1, 40))
    story.append(Paragraph("DEPARTMENT OF COMPUTER SCIENCE", cover_univ))
    story.append(Paragraph("ALIGARH MUSLIM UNIVERSITY, ALIGARH (U.P.), INDIA", ParagraphStyle('CoverSub', parent=styles['Normal'], fontName='Times-Roman', fontSize=11, leading=15, alignment=1, textColor=colors.HexColor('#334155'))))
    story.append(Spacer(1, 40))

    story.append(HRFlowable(width="75%", thickness=2, color=colors.HexColor('#1e3a8a'), spaceAfter=18, spaceBefore=0))
    story.append(Paragraph("PROJECT REPORT", ParagraphStyle('CoverBadge', parent=styles['Normal'], fontName='Times-Bold', fontSize=12, leading=16, alignment=1, textColor=colors.HexColor('#0369a1'), spaceAfter=8)))
    story.append(Paragraph("AI-DRIVEN INCOME TAX RETURN (ITR)<br/>COMPUTATION SYSTEM (AITR)", cover_title))
    story.append(Paragraph("A Full-Stack Intelligent Assessment System with Deterministic Multi-Regime Computation & Semantic LLM Extraction", ParagraphStyle('CoverDesc', parent=styles['Normal'], fontName='Times-Roman', fontSize=10.5, leading=14, alignment=1, textColor=colors.HexColor('#475569'))))
    story.append(HRFlowable(width="75%", thickness=1, color=colors.HexColor('#94a3b8'), spaceAfter=35, spaceBefore=0))

    meta = [
        [Paragraph("<b>Degree Program:</b>", tc), Paragraph("Master of Computer Applications (MCA)", tc)],
        [Paragraph("<b>Course Requirement:</b>", tc), Paragraph("MCA Mini Project (Semester Curriculum)", tc)],
        [Paragraph("<b>Academic Session:</b>", tc), Paragraph("2026 – 2027", tc)],
        [Paragraph("<b>Candidate Name:</b>", tc), Paragraph("<b>Tabish Hasan</b>", tc)],
        [Paragraph("<b>Roll / Enrolment No:</b>", tc), Paragraph("<b>25CAMSA156</b>", tc)],
        [Paragraph("<b>Department:</b>", tc), Paragraph("Department of Computer Science, AMU, Aligarh", tc)],
        [Paragraph("<b>Source Code:</b>", tc), Paragraph("https://github.com/TABISH-HK/AITR", tc)],
        [Paragraph("<b>Live Cloud App:</b>", tc), Paragraph("https://aitr-drab.vercel.app/", tc)],
    ]
    t_cover = Table(meta, colWidths=[150, 310])
    t_cover.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#94a3b8')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
    ]))
    story.append(t_cover)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 1: INTRODUCTION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 1: INTRODUCTION", chap_heading))
    story.append(Paragraph(
        "Income Tax Returns (ITR) in India contain vital statutory financial information including Permanent Account Number (PAN), "
        "Aadhaar identifier, Gross Salary, Chapter VI-A deductions (under Sections 80C, 80D, 80TTA), capital gains from equities and "
        "Virtual Digital Assets (VDA / cryptocurrency u/s 115BBH), presumptive business turnover u/s 44AD/44ADA, and Tax Deducted at Source (TDS). "
        "Manual verification of diverse financial acknowledgements, salary certificates (Form 16), and capital gains statements is "
        "time-consuming, labor-intensive, and prone to transcription mistakes. It is particularly difficult to identify, in a consistent and repeatable way, "
        "arithmetic calculation discrepancies, incorrect standard deductions, misapplied Section 87A rebates, and optimal tax regime choices under the "
        "evolving Indian Union Budgets.",
        body
    ))
    story.append(Paragraph(
        "The <b>AI-Driven Income Tax Return Computation System (AITR)</b> is an enterprise-grade web application for automated, structured tax document "
        "ingestion and deterministic dual-regime assessment. It accepts taxpayer documents in digital PDF and Word (DOCX) formats, validates file structures, "
        "executes semantic entity extraction through NVIDIA NIM Large Language Model reasoning alongside high-precision regex fallback rules, computes exact "
        "tax liabilities under both the progressive Old Tax Regime and the Section 115BAC New Tax Regime for Assessment Years (AY) 2025-26 and 2026-27, "
        "identifies optimal regime savings, and generates downloadable Chartered Accountant-standard audit reports. The project is built with Python, "
        "FastAPI, React 18 with Vite, Three.js WebGL, SQLite, and ReportLab, and focuses on deterministic statutory compliance rather than unconstrained "
        "generative arithmetic.",
        body
    ))

    story.append(Paragraph("1.1 Literature Survey", sec_heading))
    story.append(Paragraph("<b>a) Previous related work (chronological)</b>", subsec_heading))
    
    t1_data = [
        [Paragraph("Year", th), Paragraph("Work / Technology", th), Paragraph("Relevance to Project", th)],
        [Paragraph("1961", tc), Paragraph("Income Tax Act, 1961 (Govt. of India)", tc), Paragraph("The primary statutory legislation governing direct taxation, taxable heads, exemptions, and tax computation.", tc)],
        [Paragraph("2020", tc), Paragraph("Finance Act 2020: Introduction of Section 115BAC", tc), Paragraph("Introduced the concessional New Tax Regime with revised tax slabs and forfeiture of specified deductions.", tc)],
        [Paragraph("2022", tc), Paragraph("Finance Act 2022: Virtual Digital Assets (Sec 115BBH)", tc), Paragraph("Defined 30% flat taxation on crypto/NFT capital gains without deduction of expenses, verified by AITR.", tc)],
        [Paragraph("2023", tc), Paragraph("Finance Act 2023: Default Status of New Tax Regime", tc), Paragraph("Made Section 115BAC the default tax regime and enhanced Section 87A rebate to ₹25,000 for income up to ₹7,00,000.", tc)],
        [Paragraph("2024", tc), Paragraph("Union Budget 2024: Revision for AY 2025-26", tc), Paragraph("Increased Standard Deduction from ₹50,000 to ₹75,000 under New Regime and restructured tax slabs.", tc)],
        [Paragraph("2024 onwards", tc), Paragraph("NVIDIA NIM (Inference Microservices) & Nemotron Models", tc), Paragraph("Provides optimized, high-throughput LLM reasoning microservices for structured JSON financial extraction.", tc)],
        [Paragraph("Ongoing", tc), Paragraph("Deterministic rule engines in financial tax software", tc), Paragraph("Ensures zero mathematical hallucination by delegating all arithmetic computation to deterministic code.", tc)],
    ]
    t1 = Table(t1_data, colWidths=[55, 155, 250])
    t1.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 1: Previous related work and its statutory/technological relevance</b>", caption))
    story.append(t1)
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>b) Organisation / domain profile</b>", subsec_heading))
    story.append(Paragraph(
        "Direct taxation in India is administered by the Central Board of Direct Taxes (CBDT) under the Department of Revenue, Ministry of Finance. "
        "Every taxpayer is assigned a 10-character alphanumeric Permanent Account Number (PAN). Resident individual taxpayers file returns using designated forms: "
        "ITR-1 (Sahaj) for salaried individuals with income up to ₹50 lakh, ITR-2 for individuals with capital gains or cryptocurrency transactions, and "
        "ITR-4 (Sugam) for small businesses and professionals electing presumptive taxation under Section 44AD/44ADA. "
        "The coexistence of two tax regimes requires taxpayers to evaluate both systems annually. These statutory provisions make income tax calculation "
        "exceptionally well-suited to deterministic, rule-based algorithmic verification.",
        body
    ))

    story.append(Paragraph("1.2 Present State of the Art and Its Shortcomings", sec_heading))
    story.append(Paragraph("• <b>Manual Data Transcription:</b> Taxpayers manually re-type values from Form 16, bank interest certificates, and brokerage summaries into return filing sheets, creating high human error rates.", bullet))
    story.append(Paragraph("• <b>LLM Hallucination Risks:</b> Generic conversational AI systems (e.g. ChatGPT, Claude) frequently hallucinate arithmetic calculations, misapply Section 87A rebate boundaries, or apply wrong slab rates.", bullet))
    story.append(Paragraph("• <b>Spreadsheet Complexity:</b> Spreadsheet-based tax templates are fragile, lack input validation, fail to handle complex VDA crypto gains u/s 115BBH, and do not provide automated regime recommendations.", bullet))
    story.append(Paragraph("• <b>Opaque Accounting Software:</b> Commercial tax utilities often obscure the step-by-step intermediate calculations, preventing taxpayers from understanding why a specific regime is recommended.", bullet))
    story.append(Paragraph("• <b>Lack of Unified Ingestion:</b> Existing utilities rarely support drag-and-drop parsing of raw ITR acknowledgements, requiring users to pre-process documents into proprietary formats.", bullet))

    story.append(Paragraph("1.3 Realization of the Problem", sec_heading))
    story.append(Paragraph(
        "The core problem is to provide an automated, repeatable, and mathematically verifiable platform that ingests unstructured financial documents, "
        "accurately extracts taxpayer particulars and income heads, applies statutory tax algorithms under both Old and New Regimes, and provides "
        "explainable regime recommendations alongside professional Chartered Accountant-format audit documentation.",
        body
    ))

    story.append(Paragraph("1.4 Introduction of the Work to Be Taken Up", sec_heading))
    story.append(Paragraph(
        "The proposed work consists of a Python FastAPI backend with SQLite persistence, document ingestion (pdfplumber and python-docx), hybrid extraction "
        "(NVIDIA NIM LLM + regular expression rules), deterministic tax calculation engines (ITR-1, ITR-2, ITR-4), CA report generation (ReportLab and python-docx), "
        "and a reactive Single Page Application delivered through React 18, Tailwind CSS, and a Three.js WebGL shader background.",
        body
    ))

    story.append(Paragraph("1.5 Broad Outline of the Work (Chapter-wise)", sec_heading))
    story.append(Paragraph("• <b>Chapter 1:</b> Introduction, literature survey, domain profile, present shortcomings, problem realization, and project outline.", bullet))
    story.append(Paragraph("• <b>Chapter 2:</b> Problem formulation, aspects, critical view, scientific novelty, and proposed methodology.", bullet))
    story.append(Paragraph("• <b>Chapter 3:</b> System requirements, operational environment, architecture, UML/DFD/ER diagrams, traceability, and risks.", bullet))
    story.append(Paragraph("• <b>Chapter 4:</b> System implementation, project structure, operation manual with complete UI screenshots, and API specifications.", bullet))
    story.append(Paragraph("• <b>Chapter 5:</b> Results and discussion, risk/regime classification, test scenarios TC-01 to TC-12, and comparative analysis.", bullet))
    story.append(Paragraph("• <b>Chapter 6:</b> Conclusion, advantages, system limitations, future scope, and statutory references.", bullet))

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 2: PROBLEM FORMULATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 2: PROBLEM FORMULATION", chap_heading))
    story.append(Paragraph("2.1 Problem Definition", sec_heading))
    story.append(Paragraph(
        "To design and develop an intelligent, automated financial assessment system that ingests Indian ITR documents (PDF/DOCX), validates document authenticity "
        "and selectable text, extracts taxpayer particulars and income heads using hybrid AI extraction, computes exact statutory tax liabilities under Old and "
        "Section 115BAC New Tax Regimes across Assessment Years 2025-26 and 2026-27, determines optimal tax recommendations, and exports audit-ready CA reports.",
        body
    ))

    story.append(Paragraph("2.2 Various Aspects of the Problem", sec_heading))
    t2_data = [
        [Paragraph("Aspect", th), Paragraph("Description", th)],
        [Paragraph("Input Aspect", tc), Paragraph("Ingests Form 16, ITR acknowledgements, and salary drafts in digital PDF and DOCX formats up to 10MB.", tc)],
        [Paragraph("Extraction Aspect", tc), Paragraph("Captures PAN, Aadhaar, AY, salary, allowances, deductions, VDA gains, and TDS using Regex + NVIDIA NIM LLM.", tc)],
        [Paragraph("Review Aspect", tc), Paragraph("Provides human-in-the-loop review interface allowing users to inspect and override extracted values before computation.", tc)],
        [Paragraph("Tax Calculation", tc), Paragraph("Applies statutory tax slabs, standard deductions, Chapter VI-A deductions, and Section 87A rebates deterministically.", tc)],
        [Paragraph("Special Rates", tc), Paragraph("Segregates Virtual Digital Assets (Crypto u/s 115BBH @ 30%) and capital gains from normal income heads.", tc)],
        [Paragraph("Statutory Rounding", tc), Paragraph("Enforces Section 288A (taxable income to nearest ₹10) and Section 288B (net tax/refund to nearest rupee).", tc)],
        [Paragraph("Audit Reporting", tc), Paragraph("Generates formal CA-format Statement of Total Income in downloadable PDF and editable DOCX formats.", tc)],
    ]
    t2 = Table(t2_data, colWidths=[110, 350])
    t2.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 2: Aspects of the tax computation problem</b>", caption))
    story.append(t2)
    story.append(Spacer(1, 8))

    story.append(Paragraph("2.3 Present System: Critical View", sec_heading))
    story.append(Paragraph(
        "Current compliance workflows in accounting firms rely on manual examination of PDF acknowledgements, followed by transcription into spreadsheets. "
        "Such manual workflows require repetitive comparisons, are sensitive to operator fatigue, and frequently fail to optimize between Old and New Regimes. "
        "Existing commercial software packages operate as closed black-boxes, providing minimal transparency on why specific regime recommendations are made. "
        "AITR automates data extraction while preserving the exact algorithmic reasoning required for professional tax audits.",
        body
    ))

    story.append(Paragraph("2.4 Scientific/Technical Novelty and Need of the Work", sec_heading))
    story.append(Paragraph("• <b>Zero Arithmetic Hallucination:</b> Combines LLM semantic intelligence for text parsing with 100% deterministic Python calculation algorithms.", bullet))
    story.append(Paragraph("• <b>Dynamic Multi-AY Configuration:</b> Seamlessly reconfigures tax slabs and rebate rules between AY 2025-26 and AY 2026-27.", bullet))
    story.append(Paragraph("• <b>Section 115BBH VDA Isolation:</b> Accurately isolates cryptocurrency gains from normal income, taxing them flat at 30% plus 4% cess.", bullet))
    story.append(Paragraph("• <b>Human-in-the-Loop Review:</b> Ensures taxpayers can inspect, verify, and correct extracted entities before tax computation.", bullet))
    story.append(Paragraph("• <b>Automated Dual-Export Reporting:</b> Generates both tamper-resistant vector PDF audit notes and editable Microsoft Word DOCX files.", bullet))

    story.append(Paragraph("2.5 Proposed System/Method of Solution", sec_heading))
    story.append(Paragraph("• <b>Session Portal:</b> Persistent session isolation associating documents, reviewed data, and computation history per user.", bullet))
    story.append(Paragraph("• <b>Ingestion & Validation:</b> Validates selectable text and file integrity; stores sanitized uploads in persistent storage.", bullet))
    story.append(Paragraph("• <b>Hybrid Extraction:</b> High-precision regex primary parser + NVIDIA NIM LLM reasoning fallback with JSON Schema validation.", bullet))
    story.append(Paragraph("• <b>Interactive Verification:</b> Review screen allows taxpayers to verify extracted salary, deductions, and capital gains.", bullet))
    story.append(Paragraph("• <b>Deterministic Engine:</b> Executes statutory slabs under Section 115BAC and Old Regime, applying 87A rebate and 4% cess.", bullet))
    story.append(Paragraph("• <b>Report Compilation:</b> Compiles CA-format Statement of Total Income ready for client delivery and filing records.", bullet))

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 3: SYSTEM ANALYSIS AND DESIGN
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 3: SYSTEM ANALYSIS AND DESIGN", chap_heading))
    story.append(Paragraph("3.1 Requirement Specification", sec_heading))
    story.append(Paragraph(
        "This section details the functional and non-functional requirements of AITR. Requirements are cataloged with distinct IDs "
        "(FR-001 through FR-010 and NFR-01 through NFR-08) for end-to-end traceability against implementation modules and test cases.",
        body
    ))

    t_fr_data = [
        [Paragraph("ID", th), Paragraph("Requirement", th), Paragraph("Description", th), Paragraph("Priority", th), Paragraph("Depends on", th)],
        [Paragraph("FR-001", tc), Paragraph("Taxpayer Session Portal", tc), Paragraph("Establish isolated session ID storing taxpayer name and PAN in local session.", tc), Paragraph("High", tc), Paragraph("SessionModel", tc)],
        [Paragraph("FR-002", tc), Paragraph("Document Upload & Validation", tc), Paragraph("Ingest PDF/DOCX files up to 10MB; reject scanned images without selectable text.", tc), Paragraph("High", tc), Paragraph("FR-001, Parsers", tc)],
        [Paragraph("FR-003", tc), Paragraph("Hybrid Entity Extraction", tc), Paragraph("Extract PAN, Aadhaar, AY, salary, deductions, VDA gains, and TDS via Regex+LLM.", tc), Paragraph("High", tc), Paragraph("FR-002, NIM API", tc)],
        [Paragraph("FR-004", tc), Paragraph("Interactive Data Review", tc), Paragraph("Present extracted values for user validation and manual field modification.", tc), Paragraph("High", tc), Paragraph("FR-003", tc)],
        [Paragraph("FR-005", tc), Paragraph("Multi-AY Slab Configuration", tc), Paragraph("Support dynamic slab and standard deduction switching (AY 25-26 & 26-27).", tc), Paragraph("High", tc), Paragraph("config.py", tc)],
        [Paragraph("FR-006", tc), Paragraph("Deterministic Tax Engine", tc), Paragraph("Compute Old and New Regime liabilities with Section 87A rebate and 4% cess.", tc), Paragraph("High", tc), Paragraph("FR-004, FR-005", tc)],
        [Paragraph("FR-007", tc), Paragraph("Special Rates & Presumptive", tc), Paragraph("Apply 30% flat tax on VDA (115BBH) and 6%/8%/50% profit u/s 44AD/44ADA.", tc), Paragraph("High", tc), Paragraph("FR-006", tc)],
        [Paragraph("FR-008", tc), Paragraph("Statutory Rounding", tc), Paragraph("Enforce Section 288A (nearest ₹10) and Section 288B (nearest rupee) rounding.", tc), Paragraph("High", tc), Paragraph("FR-006", tc)],
        [Paragraph("FR-009", tc), Paragraph("CA Report Generation", tc), Paragraph("Generate formal CA Statement of Total Income in PDF and DOCX formats.", tc), Paragraph("High", tc), Paragraph("FR-006, ReportLab", tc)],
        [Paragraph("FR-010", tc), Paragraph("Session History & Retrieval", tc), Paragraph("Persist and display session history of past uploads, computations, and downloads.", tc), Paragraph("Medium", tc), Paragraph("FR-001, DB", tc)],
    ]
    t_fr = Table(t_fr_data, colWidths=[40, 110, 190, 45, 75])
    t_fr.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 3: Functional Requirements of AITR</b>", caption))
    story.append(t_fr)
    story.append(Spacer(1, 8))

    story.append(Paragraph("3.2 Operating Environment", sec_heading))
    story.append(Paragraph("• <b>Server:</b> Python 3.10+ execution environment with FastAPI, Uvicorn, and SQLite3 in WAL mode.", bullet))
    story.append(Paragraph("• <b>Client:</b> Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari with WebGL 2.0 and ECMAScript 2020+ support.", bullet))
    story.append(Paragraph("• <b>Development Stack:</b> Windows 11, VS Code, Node.js 20 with Vite, Git/GitHub, and Python virtual environment.", bullet))
    story.append(Paragraph("• <b>Cloud Deployment:</b> Vercel Serverless environment with dynamic `/tmp` storage bindings for temporary databases and uploads.", bullet))

    story.append(Paragraph("3.3 System Architecture & Design Diagrams", sec_heading))
    story.append(Paragraph(
        "The architecture adheres to clean separation of concerns across presentation, routing, validation, and computational engines.",
        body
    ))

    # Architecture Diagram
    arch_img = os.path.join(diagrams_dir, "class_diag.png")
    if os.path.exists(arch_img):
        story.append(Image(arch_img, width=460, height=270))
        story.append(Paragraph("Figure 3.1: Object-Oriented Backend Architecture and Engine Inheritance Hierarchy", caption))

    story.append(PageBreak())

    # Classical Chen ER Diagram
    story.append(Paragraph("3.4 Entity-Relationship Modeling (Classical Chen's Notation)", sec_heading))
    story.append(Paragraph(
        "Conforming to standard DBMS academic modeling conventions, the schema encompasses 5 relational entities. "
        "<b>Rectangles</b> depict Entity sets (`SESSION`, `DOCUMENT`, `EXTRACTED_DATA`, `COMPUTATION`, `REPORT`), "
        "<b>Diamonds</b> depict Relationships with cardinalities (1:1, 1:N), and <b>Ovals</b> depict individual Attributes with Primary Keys underlined.",
        body
    ))
    er_img = os.path.join(diagrams_dir, "er_chen.png")
    if os.path.exists(er_img):
        story.append(Image(er_img, width=460, height=290))
        story.append(Paragraph("Figure 3.2: Classical Chen's Entity-Relationship (ER) Diagram (Rectangles, Diamonds, Ovals)", caption))

    # Use Case Diagram
    story.append(Paragraph("3.5 Use Case Diagram & Actor Interactions", sec_heading))
    story.append(Paragraph(
        "Illustrates the primary user roles (Taxpayer / Chartered Accountant) interacting with document ingestion, "
        "extraction validation, tax computation, and report generation boundaries.",
        body
    ))
    uc_img = os.path.join(diagrams_dir, "usecase.png")
    if os.path.exists(uc_img):
        story.append(Image(uc_img, width=440, height=250))
        story.append(Paragraph("Figure 3.3: Use Case Diagram for AITR System Actors and Operations", caption))

    story.append(PageBreak())

    # Sequence Diagram
    story.append(Paragraph("3.6 Sequence Diagram: End-to-End Execution Flow", sec_heading))
    story.append(Paragraph(
        "Chronological interaction flow between React UI, FastAPI controllers, SQLite database, extraction services, "
        "tax engines, and ReportLab document generators.",
        body
    ))
    seq_img = os.path.join(diagrams_dir, "sequence_diag.png")
    if os.path.exists(seq_img):
        story.append(Image(seq_img, width=460, height=280))
        story.append(Paragraph("Figure 3.4: Sequence Diagram for Ingestion, Verification, Computation, and Reporting", caption))

    # Data Flow Diagrams
    story.append(Paragraph("3.7 Data Flow Diagrams (Level 0 and Level 1)", sec_heading))
    story.append(Paragraph("<b>Level 0 DFD (Context Diagram):</b> Defines boundaries between external actors and centralized system.", body))
    dfd0_img = os.path.join(diagrams_dir, "dfd0.png")
    if os.path.exists(dfd0_img):
        story.append(Image(dfd0_img, width=440, height=130))
        story.append(Paragraph("Figure 3.5: Level 0 DFD - Context Diagram", caption))

    story.append(Paragraph("<b>Level 1 DFD (Decomposition):</b> Traces data flows across the 5 core processes and 4 data stores.", body))
    dfd1_img = os.path.join(diagrams_dir, "dfd1.png")
    if os.path.exists(dfd1_img):
        story.append(Image(dfd1_img, width=460, height=270))
        story.append(Paragraph("Figure 3.6: Level 1 DFD - Subsystem Decomposition and Data Store Operations", caption))

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 4: SYSTEM IMPLEMENTATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 4: SYSTEM IMPLEMENTATION", chap_heading))
    story.append(Paragraph(
        "This chapter outlines the implementation environment, file hierarchy, operation procedures, and operational screenshots "
        "of the AI-Driven Income Tax Return Computation System.",
        body
    ))

    story.append(Paragraph("4.1 Hardware & Software Requirements", sec_heading))
    t_hw = Table([
        [Paragraph("Component", th), Paragraph("Minimum Requirement", th), Paragraph("Recommended Specification", th)],
        [Paragraph("Processor", tc), Paragraph("Dual-core 2.0 GHz or equivalent", tc), Paragraph("Quad-core Intel Core i5 / AMD Ryzen 5 or higher", tc)],
        [Paragraph("RAM", tc), Paragraph("4 GB RAM", tc), Paragraph("8 GB - 16 GB RAM", tc)],
        [Paragraph("Storage", tc), Paragraph("2 GB free disk space", tc), Paragraph("SSD with 5 GB free disk space", tc)],
        [Paragraph("Display", tc), Paragraph("1280 x 720 resolution", tc), Paragraph("1920 x 1080 Full HD (WebGL 2.0 capable GPU)", tc)],
        [Paragraph("Operating System", tc), Paragraph("Windows 10/11, Ubuntu 22.04+, macOS", tc), Paragraph("Windows 11 / Linux (Ubuntu)", tc)],
    ], colWidths=[110, 175, 175])
    t_hw.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 4: Hardware specifications for development and execution</b>", caption))
    story.append(t_hw)
    story.append(Spacer(1, 8))

    # Project Structure Tree Screenshot
    story.append(Paragraph("4.2 Project Codebase Structure", sec_heading))
    story.append(Paragraph(
        "The directory tree below illustrates the decoupled structure of the AITR codebase, highlighting the segregation between backend services, "
        "FastAPI routers, deterministic tax calculation engines, and React SPA components:",
        body
    ))
    tree_img = os.path.join(assets_dir, "project_structure.png")
    if os.path.exists(tree_img):
        story.append(Image(tree_img, width=420, height=450))
        story.append(Paragraph("Figure 4.1: Comprehensive AITR Project Directory Structure and Architecture Map", caption))

    story.append(PageBreak())

    # Operation Manual with Screenshots
    story.append(Paragraph("4.3 Operation Manual & User Interface Screenshots", sec_heading))
    story.append(Paragraph(
        "The following screenshots document the live execution of the AITR platform through its sequential user workflow:",
        body
    ))

    # Screenshot: Taxpayer Session Portal
    sess_img = os.path.join(assets_dir, "screen_taxpayer_session.png")
    if os.path.exists(sess_img):
        story.append(Paragraph("4.3.1 Taxpayer Session Portal (Authentication & Identity Binding)", subsec_heading))
        story.append(Paragraph(
            "Users initialize a persistent computation session by entering taxpayer name and PAN. Sessions are isolated in localStorage, "
            "allowing multi-session computation without exposing unencrypted financial identity data:",
            body
        ))
        story.append(Image(sess_img, width=320, height=360))
        story.append(Paragraph("Figure 4.2: Taxpayer Session Portal Modal for Isolated Session Management", caption))
        story.append(Spacer(1, 8))

    # Screenshot: Upload Screen
    up_img = os.path.join(assets_dir, "screen_upload.png")
    if os.path.exists(up_img):
        story.append(Paragraph("4.3.2 Document Ingestion Interface with Three.js WebGL GridScan Background", subsec_heading))
        story.append(Paragraph(
            "The upload zone accepts Form 16, salary slips, and ITR documents. During extraction, the Three.js WebGL shader background "
            "dynamically accelerates to visually indicate processing status:",
            body
        ))
        story.append(Image(up_img, width=460, height=260))
        story.append(Paragraph("Figure 4.3: Document Ingestion Screen with Drag-and-Drop Zone and Three.js WebGL Shader", caption))

    story.append(PageBreak())

    # Screenshot: Results Screen
    res_img = os.path.join(assets_dir, "screen_results.png")
    if os.path.exists(res_img):
        story.append(Paragraph("4.3.3 Dual-Regime Tax Computation Results & Recommendation", subsec_heading))
        story.append(Paragraph(
            "Displays side-by-side comparative cards for the Old Tax Regime and Section 115BAC New Tax Regime. "
            "For taxpayer SHAKEV ULLAH KHAN (AY 2025-26), both regimes evaluate to ₹0 tax liability, resulting in an EQUAL REGIME "
            "recommendation with full TDS refund of ₹10,238:",
            body
        ))
        story.append(Image(res_img, width=460, height=270))
        story.append(Paragraph("Figure 4.4: Dual-Regime Comparative Evaluation Screen with Automated Recommendation Banner", caption))
        story.append(Spacer(1, 8))

    # Screenshot: CA Report
    ca_img = os.path.join(assets_dir, "screen_ca_report.png")
    if os.path.exists(ca_img):
        story.append(Paragraph("4.3.4 Chartered Accountant (CA) Computation Audit Statement", subsec_heading))
        story.append(Paragraph(
            "Clicking 'Download PDF' compiles a formal CA-format Statement of Total Income incorporating Section 288A rounding (to ₹4,050), "
            "Section 115BAC computations, Chapter IV heads, and Old Regime comparison:",
            body
        ))
        story.append(Image(ca_img, width=400, height=410))
        story.append(Paragraph("Figure 4.5: Generated CA Audit Note / Computation of Total Income (PDF Report Export)", caption))

    story.append(PageBreak())

    # Backend APIs
    story.append(Paragraph("4.4 Principal Backend API Endpoints", sec_heading))
    t_api_data = [
        [Paragraph("Method", th), Paragraph("Endpoint", th), Paragraph("Function & Description", th)],
        [Paragraph("POST", tc), Paragraph("/api/upload", tc), Paragraph("Validates file structure (PDF/DOCX <= 10MB) and records DocumentModel.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/extract/{doc_id}", tc), Paragraph("Executes Regex + NVIDIA NIM LLM extraction; stores ExtractedDataModel.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/review/{ext_id}", tc), Paragraph("Retrieves extracted financial data for human-in-the-loop review.", tc)],
        [Paragraph("PUT", tc), Paragraph("/api/review/{ext_id}", tc), Paragraph("Updates reviewed JSON following manual user overrides and corrections.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/compute/{ext_id}", tc), Paragraph("Runs deterministic tax engine for Old & New Regimes; records ComputationModel.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/reports/generate/{id}/{fmt}", tc), Paragraph("Compiles official CA audit report in PDF (ReportLab) or DOCX format.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/reports/download/{rep_id}", tc), Paragraph("Streams generated audit report file to the client for download.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/history/{session_id}", tc), Paragraph("Returns chronological list of documents, computations, and reports per session.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/health", tc), Paragraph("Health check returning system status and current active assessment year.", tc)],
    ]
    t_api = Table(t_api_data, colWidths=[50, 155, 255])
    t_api.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 5: RESTful API Endpoints exposed by FastAPI Backend</b>", caption))
    story.append(t_api)

    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 5: RESULT AND DISCUSSION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 5: RESULT AND DISCUSSION", chap_heading))
    story.append(Paragraph(
        "This chapter evaluates the performance, accuracy, and statutory compliance of AITR across diverse taxpayer scenarios. "
        "The system's deterministic calculation engines were benchmarked against official CBDT e-filing utilities.",
        body
    ))

    story.append(Paragraph("5.1 Interpretation of Results & Tax Slab Formulation", sec_heading))
    t_slabs = [
        [Paragraph("Tax Regime", th), Paragraph("Income Slabs (₹)", th), Paragraph("Tax Rate", th), Paragraph("Standard Deduction", th), Paragraph("Section 87A Rebate", th)],
        [Paragraph("Old Regime<br/>(AY 2025-26 & 2026-27)", tc), Paragraph("0 - 2,50,000<br/>2,50,001 - 5,00,000<br/>5,00,001 - 10,00,000<br/>Above 10,00,000", tc), Paragraph("Nil<br/>5%<br/>20%<br/>30%", tc), Paragraph("₹50,000 (Salary)", tc), Paragraph("Max ₹12,500<br/>(If Taxable Income <= ₹5,00,000)", tc)],
        [Paragraph("New Regime u/s 115BAC<br/>(AY 2025-26 & 2026-27)", tc), Paragraph("0 - 3,00,000<br/>3,00,001 - 7,00,000<br/>7,00,001 - 10,00,000<br/>10,00,001 - 12,00,000<br/>12,00,001 - 15,00,000<br/>Above 15,00,000", tc), Paragraph("Nil<br/>5%<br/>10%<br/>15%<br/>20%<br/>30%", tc), Paragraph("₹75,000<br/>(Raised in Budget 2024)", tc), Paragraph("Max ₹25,000<br/>(100% Tax Rebate if Taxable Income <= ₹7,00,000)", tc)],
    ]
    t_sl = Table(t_slabs, colWidths=[80, 130, 65, 85, 100])
    t_sl.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 6: Statutory Tax Slab Matrix for Dual Regime Assessment</b>", caption))
    story.append(t_sl)
    story.append(Spacer(1, 8))

    story.append(Paragraph("5.2 Functional Test Scenarios (TC-01 to TC-12)", sec_heading))
    t_tc_data = [
        [Paragraph("Test ID", th), Paragraph("Test Scenario", th), Paragraph("Expected System Behaviour", th), Paragraph("Execution Status", th)],
        [Paragraph("TC-01", tc), Paragraph("Upload valid PDF/DOCX ITR document.", tc), Paragraph("File parsed, selectable text validated, document saved.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-02", tc), Paragraph("Upload scanned image-only PDF.", tc), Paragraph("Rejected with clear error: selectable text required.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-03", tc), Paragraph("Extract PAN and Aadhaar numbers.", tc), Paragraph("PAN conforms to [A-Z]{5}[0-9]{4}[A-Z]; Aadhaar captured.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-04", tc), Paragraph("Isolate Virtual Digital Assets (VDA) u/s 115BBH.", tc), Paragraph("Crypto gains segregated and taxed flat at 30% + 4% cess.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-05", tc), Paragraph("Apply Standard Deduction for AY 2025-26.", tc), Paragraph("Deducts ₹50,000 under Old vs. ₹75,000 under New Regime.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-06", tc), Paragraph("Compute Section 87A rebate (Old <= ₹5L).", tc), Paragraph("Applies rebate up to ₹12,500; tax liability reduced to zero.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-07", tc), Paragraph("Compute Section 87A rebate (New <= ₹7L).", tc), Paragraph("Applies 100% tax rebate up to ₹25,000; tax reduced to zero.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-08", tc), Paragraph("Taxable income Section 288A rounding.", tc), Paragraph("Rounds taxable total income to nearest multiple of ₹10.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-09", tc), Paragraph("Final tax Section 288B rounding.", tc), Paragraph("Rounds total tax payable/refundable to nearest rupee (₹1).", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-10", tc), Paragraph("Presumptive taxation u/s 44AD/44ADA (ITR-4).", tc), Paragraph("Deemed profit computed at 6%/8% (44AD) and 50% (44ADA).", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-11", tc), Paragraph("Comparative regime recommendation.", tc), Paragraph("Recommends regime yielding lower liability or EQUAL banner.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-12", tc), Paragraph("Download CA audit report (PDF & DOCX).", tc), Paragraph("Generates printable PDF and editable DOCX computation sheets.", tc), Paragraph("Passed", tc)],
    ]
    t_tc = Table(t_tc_data, colWidths=[40, 150, 205, 65])
    t_tc.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 7: Functional Test Suite Execution Evidence (TC-01 to TC-12)</b>", caption))
    story.append(t_tc)

    story.append(PageBreak())

    # Comparison with existing system
    story.append(Paragraph("5.3 Comparison with the Existing System", sec_heading))
    t_comp_data = [
        [Paragraph("Basis of Comparison", th), Paragraph("Manual / Spreadsheet-Based Workflow", th), Paragraph("Proposed AITR System", th)],
        [Paragraph("Document Ingestion", tc), Paragraph("Manual reading and typing of figures from Form 16 / acknowledgements.", tc), Paragraph("Automated drag-and-drop parsing of PDF and DOCX files.", tc)],
        [Paragraph("Entity Extraction", tc), Paragraph("Subject to human fatigue and transcription error.", tc), Paragraph("Hybrid extraction (Regex primary + NVIDIA NIM LLM reasoning).", tc)],
        [Paragraph("Tax Calculation", tc), Paragraph("Spreadsheet formulas that frequently misapply slab thresholds.", tc), Paragraph("100% deterministic Python calculation engine matching CBDT rules.", tc)],
        [Paragraph("Regime Comparison", tc), Paragraph("Requires building separate manual worksheets for Old and New.", tc), Paragraph("Side-by-side comparative cards with automated recommendation.", tc)],
        [Paragraph("Statutory Rounding", tc), Paragraph("Often overlooked, leading to mismatched rupee totals with portal.", tc), Paragraph("Strictly enforces Section 288A (₹10) and Section 288B (₹1) rounding.", tc)],
        [Paragraph("Report Generation", tc), Paragraph("Manual typing of computation notes into Word templates.", tc), Paragraph("Instant generation of CA-format PDF and Word DOCX audit notes.", tc)],
    ]
    t_comp = Table(t_comp_data, colWidths=[110, 175, 175])
    t_comp.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 8: Comparative evaluation: Manual Process vs. Proposed AITR System</b>", caption))
    story.append(t_comp)

    story.append(Spacer(1, 10))

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 6: CONCLUSION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 6: CONCLUSION", chap_heading))
    story.append(Paragraph(
        "The AI-Driven Income Tax Return Computation System (AITR) provides a modern, robust, and mathematically sound approach "
        "to Indian tax assessment. By integrating AI solely for unstructured document comprehension and keeping all arithmetic strictly "
        "deterministic, the system eliminates both human transcription errors and AI calculation hallucinations. "
        "The project demonstrates how modern web engineering, serverless deployments, and intelligent microservices can modernize tax compliance.",
        body
    ))

    story.append(Paragraph("6.1 Advantages and Special Features of the System", sec_heading))
    story.append(Paragraph("• <b>Zero Arithmetic Hallucination:</b> Pure deterministic statutory calculation engines ensure 100% computational accuracy.", bullet))
    story.append(Paragraph("• <b>Multi-Assessment Year Support:</b> Dynamically switches between AY 2025-26 and AY 2026-27 to reflect annual budget updates.", bullet))
    story.append(Paragraph("• <b>Broad Statutory Form Coverage:</b> Full support for salaried (ITR-1), capital gains/crypto (ITR-2), and presumptive (ITR-4).", bullet))
    story.append(Paragraph("• <b>Section 115BBH VDA Segregation:</b> Accurately taxes cryptocurrency gains at flat 30% plus 4% cess without deductions.", bullet))
    story.append(Paragraph("• <b>Human-in-the-Loop Review:</b> Interactive editor lets taxpayers verify extracted figures before computation.", bullet))
    story.append(Paragraph("• <b>CA-Standard Report Export:</b> Exports formal computation sheets in non-editable PDF and editable Word DOCX.", bullet))
    story.append(Paragraph("• <b>Reactive WebGL User Interface:</b> Fast React 18 interface with an interactive Three.js GridScan shader background.", bullet))

    story.append(Paragraph("6.2 Limitations", sec_heading))
    story.append(Paragraph("• <b>Scanned Physical Documents:</b> Direct processing of scanned paper receipts or low-resolution image files is excluded.", bullet))
    story.append(Paragraph("• <b>Live Portal Verification:</b> Live PAN/Aadhaar biometric authentication with CBDT servers requires specialized API gateway licenses.", bullet))
    story.append(Paragraph("• <b>Corporate Entities:</b> Form ITR-5 (Partnership Firms) and Form ITR-6 (Companies) are outside the current individual taxpayer scope.", bullet))

    story.append(Paragraph("6.3 Future Scope", sec_heading))
    story.append(Paragraph("• Integration with official CBDT JSON filing schema for 1-click return submission to the government portal.", bullet))
    story.append(Paragraph("• OCR scanning of physical paper salary slips and donation receipts using computer vision neural networks.", bullet))
    story.append(Paragraph("• Automated parsing of Annual Information Statements (AIS) and Tax Information Summaries (TIS).", bullet))

    story.append(Spacer(1, 10))
    story.append(Paragraph("REFERENCES", sec_heading))
    refs = [
        "1. Central Board of Direct Taxes (CBDT). (2024). Income Tax Rules, Slabs and Return Preparation Utilities. Ministry of Finance, Govt. of India.",
        "2. Government of India. (1961). The Income-tax Act, 1961 (Act No. 43 of 1961). Ministry of Law and Justice.",
        "3. Government of India. (2024). The Finance (No. 2) Act, 2024: Amendments to Section 115BAC, Standard Deduction, and Slabs.",
        "4. NVIDIA Corporation. (2024). NVIDIA NIM (Inference Microservices) Documentation & Nemotron Reasoning Models.",
        "5. Tiangolo, S. (2024). FastAPI: Modern, Fast (High-Performance) Web Framework for Building APIs with Python 3.8+.",
        "6. Meta Open Source. (2024). React 18 Documentation: Building Reactive Single Page Applications.",
        "7. Cabello, R. et al. (2024). Three.js: JavaScript 3D Library and WebGL Shader Programming.",
        "8. ReportLab Inc. (2024). ReportLab PDF Generation Library for Python Documentation.",
        "9. Scanny. (2024). python-docx: Creating and Updating Microsoft Word (.docx) Files with Python.",
    ]
    for r in refs:
        story.append(Paragraph(r, tc))

    # Compile PDF
    doc.build(story, canvasmaker=AcademicNumberedCanvas)
    print(f"Successfully compiled Academic Final Project Report PDF at: {pdf_path}")


if __name__ == "__main__":
    out_pdf = r"D:\Python\AITR\AITR_Academic_Project_Report.pdf"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_academic_report_pdf(out_pdf, assets, diagrams)
