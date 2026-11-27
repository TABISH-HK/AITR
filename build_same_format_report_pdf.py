"""
Generate the AITR Academic Final Project Report in PDF format.
STRICTLY mirrors the visual typography, chapter layout, table borders,
bottom-centered page numbering, and structure of the user's uploaded sample PDF (Final_Printable_SRS.pdf).
Starts on Page 1 with 'Chapter 1: INTRODUCTION', contains no colored banners or navy fills,
and maintains ~30 pages total with all images centered.
"""
import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    Image,
    PageBreak,
    KeepTogether
)
from reportlab.pdfgen import canvas


class SampleFormatCanvas(canvas.Canvas):
    """
    Canvas matching the sample PDF:
    - NO running top header
    - Only bottom-centered page number in Times-Roman 10pt (at y = 36 pt, exactly like sample PDF)
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number()
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self):
        self.saveState()
        self.setFont("Times-Roman", 10)
        # Centered at bottom of page
        self.drawCentredString(A4[0] / 2.0, 36, str(self._pageNumber))
        self.restoreState()


def build_same_format_pdf(pdf_path: str, assets_dir: str, diagrams_dir: str):
    # A4 Dimensions: 595.27 x 841.89 points
    # Printable width: 595.27 - 72 - 54 = 469.27 points
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=A4,
        leftMargin=72,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Typography matching the sample PDF
    ch_heading = ParagraphStyle(
        'SampleChHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=16,
        leading=20,
        alignment=1, # CENTERED
        textColor=colors.black,
        spaceBefore=0,
        spaceAfter=14
    )

    sec_heading = ParagraphStyle(
        'SampleSecHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=13,
        leading=17,
        alignment=0, # LEFT
        textColor=colors.black,
        spaceBefore=12,
        spaceAfter=5,
        keepWithNext=True
    )

    subsec_heading = ParagraphStyle(
        'SampleSubSecHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=11,
        leading=15,
        alignment=0, # LEFT
        textColor=colors.black,
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    tab_title = ParagraphStyle(
        'SampleTabTitle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=10,
        leading=13,
        alignment=1, # CENTERED RIGHT ABOVE TABLE
        textColor=colors.black,
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=True
    )

    fig_caption = ParagraphStyle(
        'SampleFigCaption',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=10,
        leading=13,
        alignment=1, # CENTERED BELOW IMAGE
        textColor=colors.black,
        spaceBefore=4,
        spaceAfter=8
    )

    body = ParagraphStyle(
        'SampleBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=10.5,
        leading=14.5,
        alignment=4, # JUSTIFIED
        textColor=colors.black,
        spaceBefore=2,
        spaceAfter=3
    )

    bullet = ParagraphStyle(
        'SampleBullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=10.5,
        leading=14.5,
        alignment=4, # JUSTIFIED
        textColor=colors.black,
        leftIndent=18,
        firstLineIndent=-12,
        spaceBefore=1.5,
        spaceAfter=2
    )

    th = ParagraphStyle(
        'SampleTH',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=9.0,
        leading=11.5,
        textColor=colors.black
    )

    tc = ParagraphStyle(
        'SampleTC',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=11.0,
        textColor=colors.black
    )

    def centered_img(img_path, w, h):
        return Image(img_path, width=w, height=h, hAlign='CENTER')

    def make_table(data, col_widths=None):
        t = Table(data, colWidths=col_widths, hAlign='CENTER')
        t.setStyle(TableStyle([
            ('BOX', (0,0), (-1,-1), 1, colors.black),
            ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
            ('TOPPADDING', (0,0), (-1,-1), 3.5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('RIGHTPADDING', (0,0), (-1,-1), 5),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ]))
        return t

    # Asset paths
    sess_img = os.path.join(assets_dir, "screen_taxpayer_session.png")
    tree_img = os.path.join(assets_dir, "project_structure.png")
    up_img = os.path.join(assets_dir, "screen_upload.png")
    res_img = os.path.join(assets_dir, "screen_results.png")
    ca_img = os.path.join(assets_dir, "screen_ca_report.png")

    sys_arch_img = os.path.join(diagrams_dir, "sys_arch.png")
    arch_img = os.path.join(diagrams_dir, "class_diag.png")
    er_img = os.path.join(diagrams_dir, "er_chen.png")
    uc_img = os.path.join(diagrams_dir, "usecase.png")
    act_up = os.path.join(diagrams_dir, "activity_upload.png")
    act_comp = os.path.join(diagrams_dir, "activity_compute.png")
    dfd0_img = os.path.join(diagrams_dir, "dfd0.png")
    dfd1_img = os.path.join(diagrams_dir, "dfd1.png")
    seq_img = os.path.join(diagrams_dir, "sequence_diag.png")
    state_img = os.path.join(diagrams_dir, "state_diag.png")

    story = []

    # =========================================================================
    # PAGE 1: CHAPTER 1: INTRODUCTION (Starts immediately on Page 1)
    # =========================================================================
    story.append(Paragraph("Chapter 1: INTRODUCTION", ch_heading))
    story.append(Paragraph(
        "Income Tax Returns (ITR) contain critical financial, statutory, and personal taxpayer data such as "
        "Permanent Account Number (PAN), assessment year, employer Tax Deduction Account Number (TAN), gross salary, "
        "exempt allowances under Section 10, deductions under Chapter VI-A, capital gains, virtual digital asset (VDA) income, "
        "and Tax Deducted at Source (TDS). Manual calculation and verification of tax liabilities across large numbers of "
        "taxpayer documents is tedious, highly error-prone, and makes it challenging to consistently evaluate optimal tax choices, "
        "identify deduction eligibility, verify slab thresholds, and ensure statutory compliance under Indian direct tax law.",
        body
    ))
    story.append(Paragraph(
        "The <b>AI-Driven Income Tax Return Computation System (AITR)</b> is a web-based application designed for structured "
        "financial document ingestion, automated extraction, deterministic dual-regime tax computation, and compliance reporting. "
        "It accepts taxpayer documents in digital PDF and DOCX formats, extracts key financial figures using an NVIDIA NIM Large "
        "Language Model microservice, validates tax rules deterministically across both the Old Tax Regime and the New Tax Regime "
        "(Section 115BAC), computes Section 87A rebates and Section 115BBH crypto liabilities, and outputs a Chartered Accountant (CA) "
        "compliant computation audit report. The system is built with FastAPI (Python 3.10+), SQLite3, React 18 with Vite, and Three.js "
        "WebGL, ensuring full auditable transparency and strict rule-based determinism without numerical LLM hallucination.",
        body
    ))

    story.append(Paragraph("1.1 Literature Survey", sec_heading))
    story.append(Paragraph("a) Previous related work (chronological)", subsec_heading))
    story.append(Paragraph("Table 1: Previous related work and its statutory/technological relevance", tab_title))

    t1_data = [
        [Paragraph("Year", th), Paragraph("Work / Milestone", th), Paragraph("Relevance to Proposed AITR System", th)],
        [Paragraph("1961", tc), Paragraph("Income-tax Act, 1961 (Act No. 43 of 1961)", tc), Paragraph("Establishes the fundamental legal framework for computing total income, 5 heads of income, and deductions.", tc)],
        [Paragraph("2020", tc), Paragraph("Finance Act 2020 (Section 115BAC)", tc), Paragraph("Introduced the concessional New Tax Regime with lower slab rates but forgone Chapter VI-A deductions.", tc)],
        [Paragraph("2023", tc), Paragraph("Finance Act 2023 Amendment", tc), Paragraph("Made Section 115BAC the default tax regime and enhanced Section 87A rebate to ₹7 Lakhs.", tc)],
        [Paragraph("2024", tc), Paragraph("Finance (No. 2) Act 2024", tc), Paragraph("Increased Standard Deduction to ₹75,000 for salaried taxpayers and introduced revised slab thresholds for AY 2025-26.", tc)],
        [Paragraph("2024", tc), Paragraph("NVIDIA NIM (Inference Microservices)", tc), Paragraph("Enterprise containerized AI inference framework delivering high-throughput structured JSON extraction via LLaMA-3.3-70B.", tc)],
        [Paragraph("2024", tc), Paragraph("FastAPI & Pydantic v2 Framework", tc), Paragraph("High-performance asynchronous REST backend providing strict data type validation and deterministic math routing.", tc)],
        [Paragraph("2024", tc), Paragraph("React 18 & Three.js WebGL", tc), Paragraph("Modern reactive SPA frontend with hardware-accelerated GridScan shader visualization for interactive tax sessions.", tc)],
    ]
    story.append(make_table(t1_data, [45, 160, 264]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 2: CHAPTER 1 CONTINUED (Domain Profile & Shortcomings)
    # =========================================================================
    story.append(Paragraph("b) Organisation / domain profile", subsec_heading))
    story.append(Paragraph(
        "Direct taxation in India is administered by the Central Board of Direct Taxes (CBDT) under the Department of Revenue, "
        "Ministry of Finance, Government of India. The Income Tax Department enforces the Income-tax Act, 1961, which governs "
        "the levy, administration, collection, and recovery of direct taxes across individuals, Hindu Undivided Families (HUFs), "
        "firms, and corporate bodies.",
        body
    ))
    story.append(Paragraph(
        "Every Indian taxpayer is identified by a unique 10-character alphanumeric Permanent Account Number (PAN) issued by the CBDT. "
        "Tax assessment is conducted for an Assessment Year (AY) based on total income earned during the preceding Financial Year (FY) "
        "or Previous Year (PY). Income is aggregated under five statutory heads: (i) Salaries, (ii) Income from House Property, "
        "(iii) Profits and Gains of Business or Profession, (iv) Capital Gains, and (v) Income from Other Sources. The enactment of "
        "Section 115BAC introduced a bifurcated tax structure where taxpayers must choose between the traditional Old Tax Regime "
        "(retaining deductions under Sections 80C, 80D, 24(b)) and the default New Tax Regime (offering wider slabs and higher standard deduction). "
        "This structural divergence makes deterministic comparative calculation essential for every tax assessee.",
        body
    ))

    story.append(Paragraph("1.2 Present State of the Art and Its Shortcomings", sec_heading))
    story.append(Paragraph("• <b>Manual Spreadsheet Entry:</b> Taxpayers manually copy dozens of figures from Form 16 Part A and Part B into disconnected Excel sheets, leading to transcription errors.", bullet))
    story.append(Paragraph("• <b>Dual-Regime Calculation Ambiguity:</b> Evaluating both regimes requires duplicate data entry and manual cross-referencing against changing statutory tax slabs.", bullet))
    story.append(Paragraph("• <b>LLM Hallucination in Generic AI Tools:</b> General-purpose chat LLMs frequently fabricate arithmetic totals, misapply marginal relief, or hallucinate tax rates.", bullet))
    story.append(Paragraph("• <b>Lack of Explainable CA Audit Notes:</b> Most consumer calculators generate a bare net payable number without an itemized statement detailing intermediate step computations.", bullet))
    story.append(Paragraph("• <b>High CA Consultation Costs:</b> Low-income and salaried taxpayers spend significant consultancy fees for basic ITR-1 filing comparisons.", bullet))
    story.append(Paragraph("• <b>Omission of Special Rates (Section 115BBH):</b> Cryptocurrencies and virtual digital assets are frequently co-mingled with normal slab income instead of being segregated at flat 30%.", bullet))

    story.append(Paragraph("1.3 Realization of the Problem", sec_heading))
    story.append(Paragraph(
        "The core realization is that tax computation requires an architectural separation of concerns: unstructured document understanding "
        "must be delegated to advanced language models, whereas tax arithmetic, slab routing, deductions, and rebates must strictly belong "
        "to a deterministic, rule-based execution engine. Combining these two paradigms through a structured Pydantic schema eliminates "
        "manual data entry while guaranteeing 100% mathematical auditability.",
        body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 3: CHAPTER 1 CONTINUED (Work Taken Up & Chapter Outline)
    # =========================================================================
    story.append(Paragraph("1.4 Introduction of the Work to Be Taken Up", sec_heading))
    story.append(Paragraph(
        "The proposed work implements the complete end-to-end AITR system, comprising a high-performance Python FastAPI backend, "
        "an SQLite3 relational database, an NVIDIA NIM LLM extraction pipeline using LLaMA-3.3-70B-Instruct, a rule-based statutory tax "
        "engine covering AY 2025-26 and AY 2024-25, and a reactive React 18 single-page application enhanced with Three.js WebGL shaders. "
        "The system accepts digital Form 16, salary slips, or computation drafts in PDF or DOCX formats, extracts financial fields, "
        "provides an interactive review screen for human-in-the-loop validation, performs dual-regime tax computation, identifies the optimal "
        "regime with maximum tax savings, and generates downloadable CA-standard computation statements in PDF and DOCX formats.",
        body
    ))

    story.append(Paragraph("1.5 Broad Outline of the Work (Chapter-wise)", sec_heading))
    story.append(Paragraph("• <b>Chapter 1:</b> Introduction, background, statutory literature survey, organization domain profile, current shortcomings, problem realization, and project outline.", bullet))
    story.append(Paragraph("• <b>Chapter 2:</b> Problem formulation, input/output aspects, critical view of existing systems, technical novelty, and proposed method of solution.", bullet))
    story.append(Paragraph("• <b>Chapter 3:</b> Requirements specification (functional/non-functional), data dictionary, information collection, system architecture, UML diagrams, DFDs, ER model, module breakdown, tools, and project risks.", bullet))
    story.append(Paragraph("• <b>Chapter 4:</b> Implementation environment, hardware/software specifications, directory structure tree, complete operation manual with centered UI screenshots, REST APIs, and output reports.", bullet))
    story.append(Paragraph("• <b>Chapter 5:</b> Results interpretation, statutory slab formulations, functional test suite execution evidence (TC-01 to TC-12), application areas, and comparative evaluation against existing manual systems.", bullet))
    story.append(Paragraph("• <b>Chapter 6:</b> Advantages and special features, project limitations, future extensions, final concluding remarks, and academic references.", bullet))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 4: CHAPTER 2: PROBLEM FORMULATION
    # =========================================================================
    story.append(Paragraph("Chapter 2: PROBLEM FORMULATION", ch_heading))
    story.append(Paragraph("2.1 Problem Definition", sec_heading))
    story.append(Paragraph(
        "To design and engineer an AI-driven, deterministic software system that ingests unstructured digital tax documents (PDF/DOCX), "
        "extracts financial data into an auditable structured schema using an NVIDIA NIM LLM microservice, applies Indian Income Tax statutory rules "
        "under both Old and New regimes for AY 2025-26, compares liabilities, recommends the optimal filing path, and produces downloadable "
        "Chartered Accountant audit reports.",
        body
    ))

    story.append(Paragraph("2.2 Various Aspects of the Problem", sec_heading))
    story.append(Paragraph("Table 2: Aspects of the tax computation problem", tab_title))

    t2_data = [
        [Paragraph("Aspect", th), Paragraph("Description & Engineering Solution in AITR", th)],
        [Paragraph("Document Ingestion", tc), Paragraph("Support multi-page PDF and DOCX financial documents up to 10MB; validate file structure and extract text streams using pdfplumber and python-docx.", tc)],
        [Paragraph("Financial Extraction", tc), Paragraph("Map diverse Form 16 layouts into a standardized Pydantic schema using NVIDIA NIM LLaMA-3.3-70B with constrained JSON schema output.", tc)],
        [Paragraph("Human Validation", tc), Paragraph("Provide an interactive field editor allowing taxpayers to verify and adjust extracted values prior to executing calculations.", tc)],
        [Paragraph("Dual-Regime Calculation", tc), Paragraph("Simultaneously compute tax under both regimes using statutory rules (Standard deduction ₹75k vs ₹50k, Chapter VI-A deductions, Sec 87A rebate).", tc)],
        [Paragraph("Special Income Segregation", tc), Paragraph("Isolate Virtual Digital Assets (VDA) under Section 115BBH for flat 30% taxation without deductions, preventing slab dilution.", tc)],
        [Paragraph("Statutory Rounding", tc), Paragraph("Apply statutory rounding to the nearest ₹10 under Section 288A (taxable income) and Section 288B (net tax payable).", tc)],
        [Paragraph("Audit Reporting", tc), Paragraph("Dynamically compile downloadable CA-format Statement of Total Income in PDF and DOCX formats for formal client delivery.", tc)],
    ]
    story.append(make_table(t2_data, [120, 349]))

    story.append(Paragraph("2.3 Present System: Critical View", sec_heading))
    story.append(Paragraph(
        "The current tax computation process relies on manual inspection of Form 16 documents, physical paper forms, and offline Excel spreadsheets. "
        "This approach requires repetitive calculations, depends entirely on human vigilance, lacks validation guardrails, and provides no explainable "
        "traceability when discrepancies arise. Commercial tax preparation software frequently hides calculation formulas behind closed proprietary APIs, "
        "preventing taxpayers from verifying how intermediate numbers were derived.",
        body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 5: CHAPTER 2 CONTINUED (Novelty & Proposed Solution)
    # =========================================================================
    story.append(Paragraph("2.4 Scientific/Technical Novelty and Need of the Work", sec_heading))
    story.append(Paragraph("• <b>Decoupled Hybrid Architecture:</b> Combines state-of-the-art LLM document understanding with 100% deterministic, rule-based Python math execution.", bullet))
    story.append(Paragraph("• <b>Zero LLM Arithmetic Hallucination:</b> The language model is strictly confined to parsing text into JSON; all tax rates, surcharges, rebates, and cess calculations are handled by hardened rule classes.", bullet))
    story.append(Paragraph("• <b>Dual-Regime Optimization Engine:</b> Evaluates tax liabilities across both Section 115BAC (New) and the Old Tax Regime in a single pass, providing clear financial justifications.", bullet))
    story.append(Paragraph("• <b>Statutory Decimal Accuracy:</b> Employs Python's Decimal class and statutory rounding (Sections 288A/288B) to eliminate floating-point rounding errors common in spreadsheet utilities.", bullet))
    story.append(Paragraph("• <b>Session-Isolated Privacy:</b> Computations are isolated by session tokens, allowing taxpayers to compute returns securely without permanent unencrypted storage of sensitive financial data.", bullet))

    story.append(Paragraph("2.5 Proposed System/Method of Solution", sec_heading))
    story.append(Paragraph("• <b>Taxpayer Session Establishment:</b> User enters a taxpayer identifier and PAN to initialize a local, isolated computation session.", bullet))
    story.append(Paragraph("• <b>Document Ingestion & Validation:</b> Digital Form 16 PDF or DOCX is uploaded; MIME type, magic bytes, and file size are validated.", bullet))
    story.append(Paragraph("• <b>Text Extraction:</b> In-memory text extraction using pdfplumber or python-docx strips formatting while preserving tabular column structures.", bullet))
    story.append(Paragraph("• <b>NVIDIA NIM Extraction:</b> Text stream is sent to NVIDIA NIM LLaMA-3.3-70B with a strict system prompt and Pydantic JSON schema.", bullet))
    story.append(Paragraph("• <b>Interactive Verification UI:</b> Extracted figures are displayed in editable input fields for human verification.", bullet))
    story.append(Paragraph("• <b>Deterministic Tax Engine Execution:</b> Rule engine executes deductions, statutory slabs, Section 87A rebate, Section 115BBH VDA tax, and 4% cess.", bullet))
    story.append(Paragraph("• <b>Dual-Regime Comparative Recommendation:</b> System highlights the regime yielding the lowest liability or confirms equal liability.", bullet))
    story.append(Paragraph("• <b>Report Compilation:</b> Compiles CA-format Statement of Total Income in both PDF and Word DOCX formats ready for official filing.", bullet))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 6: CHAPTER 3: SYSTEM ANALYSIS AND DESIGN (Requirements & User Classes)
    # =========================================================================
    story.append(Paragraph("Chapter 3: SYSTEM ANALYSIS AND DESIGN", ch_heading))
    story.append(Paragraph("3.1 Requirement Specification", sec_heading))
    story.append(Paragraph("3.1.1 Purpose", subsec_heading))
    story.append(Paragraph(
        "This section specifies the functional and non-functional requirements of the AI-Driven Income Tax Return Computation System (AITR). "
        "It defines the expected software behaviors, external interfaces, architectural constraints, and performance targets necessary for "
        "evaluating compliance and testability.",
        body
    ))

    story.append(Paragraph("3.1.2 Intended Audience", subsec_heading))
    story.append(Paragraph("Project supervisors, academic evaluators, software engineers, Chartered Accountants, direct tax professionals, and maintenance developers.", body))

    story.append(Paragraph("3.1.3 Product Perspective", subsec_heading))
    story.append(Paragraph(
        "The AITR system is an autonomous, web-based single-page application backed by a modular FastAPI REST service and SQLite3 persistence. "
        "It acts as an intelligent pre-filing decision support system. It is designed to assist taxpayers and tax consultants by automating "
        "data entry and dual-regime comparison, while retaining full audit transparency.",
        body
    ))

    story.append(Paragraph("3.1.4 Product Functions", subsec_heading))
    story.append(Paragraph("• Taxpayer session creation and PAN validation.", bullet))
    story.append(Paragraph("• Multi-format document ingestion (PDF, DOCX) up to 10MB.", bullet))
    story.append(Paragraph("• NVIDIA NIM LLM structured extraction into Pydantic schema.", bullet))
    story.append(Paragraph("• Human-in-the-loop review and field correction interface.", bullet))
    story.append(Paragraph("• Rule-based dual-regime tax calculation for AY 2025-26 and AY 2024-25.", bullet))
    story.append(Paragraph("• Automated regime recommendation based on net payable minimization.", bullet))
    story.append(Paragraph("• Professional CA computation audit report export in PDF and Word formats.", bullet))

    story.append(Paragraph("3.1.5 User Classes and Characteristics", subsec_heading))
    story.append(Paragraph("Table 3: User classes and characteristics", tab_title))

    t3_data = [
        [Paragraph("User Class", th), Paragraph("Description & Responsibilities", th), Paragraph("Technical Skill Level", th)],
        [Paragraph("Individual Taxpayer", tc), Paragraph("Uploads Form 16, reviews extracted figures, and identifies optimal regime for annual tax filing.", tc), Paragraph("Low / Non-technical", tc)],
        [Paragraph("Chartered Accountant (CA)", tc), Paragraph("Audits complex multi-head income filings, verifies deductions, and exports client tax computation statements.", tc), Paragraph("Moderate (Domain Expert)", tc)],
        [Paragraph("System Evaluator / Admin", tc), Paragraph("Runs automated unit/integration test suites, verifies slab configurations, and inspects API logs.", tc), Paragraph("Advanced (Technical)", tc)],
    ]
    story.append(make_table(t3_data, [110, 269, 90]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 7: CHAPTER 3 CONTINUED (Environment & FR Part 1)
    # =========================================================================
    story.append(Paragraph("3.1.6 Operating Environment", sec_heading))
    story.append(Paragraph(
        "Server: Python 3.10+ execution environment with FastAPI, Uvicorn ASGI server, and SQLite3. "
        "Client: Modern ECMAScript web browsers (Chrome, Edge, Firefox, Safari). "
        "External Services: NVIDIA NIM Cloud API endpoint for LLaMA-3.3-70B model inference.",
        body
    ))

    story.append(Paragraph("3.1.7 Design and Implementation Constraints", sec_heading))
    story.append(Paragraph("• Maximum file upload size is restricted to 10 MB per document.", bullet))
    story.append(Paragraph("• Scanned paper documents without an embedded digital text layer are rejected; OCR is reserved for future versions.", bullet))
    story.append(Paragraph("• LLM inference is strictly prohibited from performing direct mathematical computations; all math is executed by Python rule classes.", bullet))
    story.append(Paragraph("• Calculations must comply with statutory provisions of the Finance (No. 2) Act, 2024 for AY 2025-26.", bullet))

    story.append(Paragraph("3.1.8 Assumptions and Dependencies", sec_heading))
    story.append(Paragraph("• Taxpayer provides authentic digital Form 16 or salary computation documents.", bullet))
    story.append(Paragraph("• Internet connectivity is available to communicate with the NVIDIA NIM API gateway.", bullet))
    story.append(Paragraph("• Taxpayer has not opted out of Section 115BAC unless actively choosing the Old Tax Regime.", bullet))

    story.append(Paragraph("3.1.9 Functional Requirements (Part 1)", sec_heading))
    story.append(Paragraph("Table 4(a): Functional Requirements (FR-001 to FR-005)", tab_title))

    t4a_data = [
        [Paragraph("ID", th), Paragraph("Requirement", th), Paragraph("Description", th), Paragraph("Priority", th), Paragraph("Depends on", th)],
        [Paragraph("FR-001", tc), Paragraph("Taxpayer Session Setup", tc), Paragraph("The system shall create isolated sessions via username and optional PAN.", tc), Paragraph("High", tc), Paragraph("Session storage", tc)],
        [Paragraph("FR-002", tc), Paragraph("Document Ingestion", tc), Paragraph("Accept PDF/DOCX files up to 10MB and validate file type and size.", tc), Paragraph("High", tc), Paragraph("FR-001; Multipart", tc)],
        [Paragraph("FR-003", tc), Paragraph("Hybrid LLM Extraction", tc), Paragraph("Extract financial fields into structured Pydantic JSON via NVIDIA NIM.", tc), Paragraph("High", tc), Paragraph("FR-002; NIM API", tc)],
        [Paragraph("FR-004", tc), Paragraph("Interactive Data Review", tc), Paragraph("Display extracted values in an editable UI for taxpayer verification.", tc), Paragraph("High", tc), Paragraph("FR-003", tc)],
        [Paragraph("FR-005", tc), Paragraph("New Regime Computation", tc), Paragraph("Compute tax under Section 115BAC with ₹75k standard deduction and AY 2025-26 slabs.", tc), Paragraph("High", tc), Paragraph("FR-004; Config", tc)],
    ]
    story.append(make_table(t4a_data, [45, 120, 204, 45, 55]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 8: CHAPTER 3 CONTINUED (FR Part 2 & Non-Functional Requirements)
    # =========================================================================
    story.append(Paragraph("3.1.9 Functional Requirements (Part 2)", sec_heading))
    story.append(Paragraph("Table 4(b): Functional Requirements (FR-006 to FR-010)", tab_title))

    t4b_data = [
        [Paragraph("ID", th), Paragraph("Requirement", th), Paragraph("Description", th), Paragraph("Priority", th), Paragraph("Depends on", th)],
        [Paragraph("FR-006", tc), Paragraph("Old Regime Computation", tc), Paragraph("Compute tax with ₹50k standard deduction, Chapter VI-A (80C, 80D), and traditional slabs.", tc), Paragraph("High", tc), Paragraph("FR-004", tc)],
        [Paragraph("FR-007", tc), Paragraph("VDA Flat Tax (115BBH)", tc), Paragraph("Apply flat 30% tax on crypto/VDA income without deductions under both regimes.", tc), Paragraph("High", tc), Paragraph("FR-004", tc)],
        [Paragraph("FR-008", tc), Paragraph("Statutory Rounding", tc), Paragraph("Round taxable income (Sec 288A) and net tax (Sec 288B) to the nearest ₹10.", tc), Paragraph("High", tc), Paragraph("FR-005, FR-006", tc)],
        [Paragraph("FR-009", tc), Paragraph("Dual-Regime Comparison", tc), Paragraph("Compare total liabilities, compute net differential savings, and recommend the optimal regime.", tc), Paragraph("High", tc), Paragraph("FR-005 to FR-008", tc)],
        [Paragraph("FR-010", tc), Paragraph("Report Generation", tc), Paragraph("Generate downloadable CA Statement of Total Income in PDF and Word formats.", tc), Paragraph("High", tc), Paragraph("FR-009", tc)],
    ]
    story.append(make_table(t4b_data, [45, 120, 204, 45, 55]))

    story.append(Paragraph("3.1.10 Non-Functional Requirements", sec_heading))
    story.append(Paragraph("Table 5: Non-functional requirements", tab_title))

    t5_data = [
        [Paragraph("ID", th), Paragraph("Category", th), Paragraph("Specification", th)],
        [Paragraph("NFR-01", tc), Paragraph("Performance", tc), Paragraph("Extraction completes in < 5 seconds; tax computation executes in < 50 milliseconds.", tc)],
        [Paragraph("NFR-02", tc), Paragraph("Accuracy", tc), Paragraph("100% deterministic calculation accuracy using Python Decimal arithmetic.", tc)],
        [Paragraph("NFR-03", tc), Paragraph("Security", tc), Paragraph("Session-isolated data storage; PAN masked on exports; no sensitive data persisted unencrypted.", tc)],
        [Paragraph("NFR-04", tc), Paragraph("Reliability", tc), Paragraph("Graceful fallback to regex-based extraction if NVIDIA NIM API experiences outages.", tc)],
        [Paragraph("NFR-05", tc), Paragraph("Usability", tc), Paragraph("Three.js WebGL reactive UI with clear dual-regime comparison cards and one-click report export.", tc)],
        [Paragraph("NFR-06", tc), Paragraph("Maintainability", tc), Paragraph("Tax slabs and deductions isolated in config.py for zero-downtime annual budget updates.", tc)],
        [Paragraph("NFR-07", tc), Paragraph("Compatibility", tc), Paragraph("Fully functional across all modern web browsers; responsive across desktop and tablet viewports.", tc)],
    ]
    story.append(make_table(t5_data, [50, 95, 324]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 9: CHAPTER 3 CONTINUED (External Interfaces & Data Schema)
    # =========================================================================
    story.append(Paragraph("3.1.11 External Interface Requirements", sec_heading))
    story.append(Paragraph("• <b>User Interface:</b> React 18 SPA styled with Tailwind CSS, featuring file dropzone, interactive review table, comparison cards, and Three.js GridScan shader background.", bullet))
    story.append(Paragraph("• <b>Software Interfaces:</b> FastAPI backend exposing RESTful JSON endpoints; NVIDIA NIM OpenAI-compatible API client; ReportLab and python-docx document engines.", bullet))
    story.append(Paragraph("• <b>Database Interface:</b> SQLite3 database via SQLAlchemy ORM with WAL mode enabled.", bullet))

    story.append(Paragraph("3.1.12 Scope", sec_heading))
    story.append(Paragraph(
        "Included: Salaried income (ITR-1), house property, capital gains, virtual digital assets, presumptive business income (ITR-4), "
        "Chapter VI-A deductions, Section 87A rebate, standard deduction, dual-regime comparison, and PDF/DOCX report exports. "
        "Excluded: Optical Character Recognition (OCR) of scanned paper photos, direct integration with the CBDT e-filing portal.",
        body
    ))

    story.append(Paragraph("3.1.13 Data Requirements", sec_heading))
    story.append(Paragraph("Table 6: Extracted financial document data fields", tab_title))

    t6_data = [
        [Paragraph("Field Name", th), Paragraph("Data Type", th), Paragraph("Mandatory", th), Paragraph("Description & Source in Form 16", th)],
        [Paragraph("pan", tc), Paragraph("String (10)", tc), Paragraph("Yes", tc), Paragraph("Taxpayer Permanent Account Number (Part A)", tc)],
        [Paragraph("name", tc), Paragraph("String", tc), Paragraph("Yes", tc), Paragraph("Assessee legal name (Part A)", tc)],
        [Paragraph("assessment_year", tc), Paragraph("String", tc), Paragraph("Yes", tc), Paragraph("Assessment Year, e.g., '2025-26' (Part A)", tc)],
        [Paragraph("gross_salary", tc), Paragraph("Decimal", tc), Paragraph("Yes", tc), Paragraph("Gross salary under Section 17(1) (Part B)", tc)],
        [Paragraph("deductions_80c", tc), Paragraph("Decimal", tc), Paragraph("No", tc), Paragraph("Life insurance, PF, ELSS up to ₹1.5L (Part B)", tc)],
        [Paragraph("deductions_80d", tc), Paragraph("Decimal", tc), Paragraph("No", tc), Paragraph("Health insurance premiums (Part B)", tc)],
        [Paragraph("vda_income", tc), Paragraph("Decimal", tc), Paragraph("No", tc), Paragraph("Income from crypto/virtual digital assets", tc)],
        [Paragraph("tds_total", tc), Paragraph("Decimal", tc), Paragraph("Yes", tc), Paragraph("Total tax deducted at source by employer (Part A)", tc)],
    ]
    story.append(make_table(t6_data, [85, 70, 60, 254]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 10: CHAPTER 3 CONTINUED (Tax Scheme & Information Collection)
    # =========================================================================
    story.append(Paragraph("3.1.14 Tax Computation Scheme", sec_heading))
    story.append(Paragraph("Table 7: Statutory dual-regime tax slab and rebate rules (AY 2025-26)", tab_title))

    t7_data = [
        [Paragraph("Tax Regime", th), Paragraph("Taxable Income Slab", th), Paragraph("Tax Rate", th), Paragraph("Statutory Deductions & Rebates", th)],
        [Paragraph("New Regime (Sec 115BAC)<br/>[Default]", tc), Paragraph("₹0 to ₹3,00,000<br/>₹3,00,001 to ₹7,00,000<br/>₹7,00,001 to ₹10,00,000<br/>₹10,00,001 to ₹12,00,000<br/>₹12,00,001 to ₹15,00,000<br/>Above ₹15,00,000", tc), Paragraph("Nil<br/>5%<br/>10%<br/>15%<br/>20%<br/>30%", tc), Paragraph("• Standard Deduction: ₹75,000<br/>• Section 87A Rebate: 100% tax rebate if taxable income ≤ ₹7,00,000<br/>• Chapter VI-A deductions disallowed", tc)],
        [Paragraph("Old Tax Regime<br/>[Optional]", tc), Paragraph("₹0 to ₹2,50,000<br/>₹2,50,001 to ₹5,00,000<br/>₹5,00,001 to ₹10,00,000<br/>Above ₹10,00,000", tc), Paragraph("Nil<br/>5%<br/>20%<br/>30%", tc), Paragraph("• Standard Deduction: ₹50,000<br/>• Section 87A Rebate: up to ₹12,500 if taxable income ≤ ₹5,00,000<br/>• Full Chapter VI-A (80C, 80D) permitted", tc)],
    ]
    story.append(make_table(t7_data, [95, 115, 65, 194]))

    story.append(Paragraph("3.2 Information Collection", sec_heading))
    story.append(Paragraph(
        "To establish rigorous system requirements, information was gathered across direct tax statutes, CBDT notifications, "
        "and practicing Chartered Accountants. The methods considered are compared below.",
        body
    ))
    story.append(Paragraph("Table 8: Comparison of information gathering methods", tab_title))

    t8_data = [
        [Paragraph("Method", th), Paragraph("Description", th), Paragraph("Advantages", th), Paragraph("Limitations", th), Paragraph("Used", th)],
        [Paragraph("Statutory Legal Analysis", tc), Paragraph("Review of Income-tax Act, 1961, Section 115BAC, and Finance (No. 2) Act 2024.", tc), Paragraph("Authoritative, legally binding, exact rate tables.", tc), Paragraph("Dense legal language; subject to annual budget amendments.", tc), Paragraph("Yes (Primary)", tc)],
        [Paragraph("Sample Document Study", tc), Paragraph("Analysis of authentic Form 16 (Part A & B) and salary computation sheets.", tc), Paragraph("Exposes real-world layout variations and edge cases.", tc), Paragraph("Requires redaction of sensitive taxpayer information.", tc), Paragraph("Yes", tc)],
        [Paragraph("CA Interviews", tc), Paragraph("Interviews with practicing tax professionals on common calculation pain points.", tc), Paragraph("Deep practical insight into human errors and audit expectations.", tc), Paragraph("Limited availability of practicing professionals.", tc), Paragraph("Yes (Supporting)", tc)],
    ]
    story.append(make_table(t8_data, [95, 120, 110, 105, 39]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 11: CHAPTER 3 CONTINUED (System Architecture & Diagrams)
    # =========================================================================
    story.append(Paragraph("3.3 Analysis and Development of the Actual Solution", sec_heading))
    story.append(Paragraph("3.3.1 System Architecture", subsec_heading))
    story.append(Paragraph(
        "The proposed system follows an asynchronous, decoupled client-server architecture. The presentation tier (React 18 SPA) "
        "communicates over HTTP REST APIs with the application tier (FastAPI). The backend is organized into specialized services: "
        "document parsers, NVIDIA NIM LLM extractor, deterministic dual-regime tax engines, and document export generators. "
        "All data models inherit from robust Pydantic schemas, ensuring complete type safety.",
        body
    ))
    if os.path.exists(sys_arch_img):
        story.append(centered_img(sys_arch_img, 440, 310))
        story.append(Paragraph("Figure 1: Three-Tier System Architecture of AITR", fig_caption))

    story.append(Paragraph(
        "The tax engine hierarchy features a base engine encapsulating statutory rounding (Sections 288A/B), standard deductions, and cess math. "
        "Specialized subclasses implement ITR-1 (salaried), ITR-2 (capital gains and multiple properties), and ITR-4 (presumptive taxation u/s 44AD/ADA).",
        body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 12: CHAPTER 3 CONTINUED (Use Case Diagram & Specs)
    # =========================================================================
    story.append(Paragraph("3.3.2 Use Case Diagram", subsec_heading))
    if os.path.exists(uc_img):
        story.append(centered_img(uc_img, 420, 286))
        story.append(Paragraph("Figure 2: Use Case Diagram for AITR System Actors and Operations", fig_caption))

    story.append(Paragraph("Table 9: Use case description: Upload and Ingest Financial Document", tab_title))
    t_uc_desc = [
        [Paragraph("Item", th), Paragraph("Specification", th)],
        [Paragraph("Actor", tc), Paragraph("Taxpayer / Chartered Accountant", tc)],
        [Paragraph("Precondition", tc), Paragraph("User has established an active session with Taxpayer Name / PAN.", tc)],
        [Paragraph("Main Flow", tc), Paragraph("1. User drags and drops Form 16 PDF/DOCX; 2. System validates file magic bytes; 3. Text extracted in-memory; 4. NVIDIA NIM generates Pydantic JSON; 5. Extracted data rendered in review editor.", tc)],
        [Paragraph("Alternate Flow", tc), Paragraph("If document is password-protected or unreadable, system prompts user to provide an unlocked file.", tc)],
        [Paragraph("Postcondition", tc), Paragraph("Financial fields populated and ready for deterministic tax computation.", tc)],
    ]
    story.append(make_table(t_uc_desc, [110, 359]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 13: CHAPTER 3 CONTINUED (Activity Diagrams)
    # =========================================================================
    story.append(Paragraph("3.3.3 Activity Diagram: Document Ingestion and Verification", subsec_heading))
    if os.path.exists(act_up):
        story.append(centered_img(act_up, 340, 287))
        story.append(Paragraph("Figure 3: Activity Diagram: Document Ingestion, Text Validation & Extraction Workflow", fig_caption))

    story.append(Paragraph("3.3.4 Activity Diagram: Dual-Regime Tax Computation and Recommendation", subsec_heading))
    if os.path.exists(act_comp):
        story.append(centered_img(act_comp, 340, 286))
        story.append(Paragraph("Figure 4: Activity Diagram: Dual-Regime Tax Computation & Optimal Recommendation Workflow", fig_caption))

    story.append(Paragraph(
        "The ingestion activity diagram illustrates parallel document type routing, in-memory stream extraction, and LLM schema validation. "
        "The computation activity diagram depicts simultaneous slab evaluation under Section 115BAC and Old Regime, Section 87A rebate netting, "
        "Section 115BBH VDA segregation, and differential tax savings determination.",
        body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 14: CHAPTER 3 CONTINUED (Data Flow Diagrams)
    # =========================================================================
    story.append(Paragraph("3.3.5 Data Flow Diagrams", subsec_heading))
    story.append(Paragraph("<b>Level 0 DFD (Context Diagram):</b>", subsec_heading))
    if os.path.exists(dfd0_img):
        story.append(centered_img(dfd0_img, 450, 81))
        story.append(Paragraph("Figure 5: Level 0 DFD - Context Diagram", fig_caption))

    story.append(Paragraph("<b>Level 1 DFD (Subsystem Decomposition):</b>", subsec_heading))
    if os.path.exists(dfd1_img):
        story.append(centered_img(dfd1_img, 450, 196))
        story.append(Paragraph("Figure 6: Level 1 DFD - Subsystem Decomposition and Data Store Operations", fig_caption))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 15: CHAPTER 3 CONTINUED (Class Diagram & Sequence Diagram)
    # =========================================================================
    story.append(Paragraph("3.3.6 Class Diagram", subsec_heading))
    if os.path.exists(arch_img):
        story.append(centered_img(arch_img, 450, 235))
        story.append(Paragraph("Figure 7: Class Diagram: Services, Models, and Engine Hierarchy", fig_caption))

    story.append(Paragraph("3.3.7 Sequence Diagram: Upload, Ingestion, Computation, and Reporting", subsec_heading))
    if os.path.exists(seq_img):
        story.append(centered_img(seq_img, 440, 302))
        story.append(Paragraph("Figure 8: Sequence Diagram: End-to-End Workflow Execution", fig_caption))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 16: CHAPTER 3 CONTINUED (ER Diagram & State Diagram)
    # =========================================================================
    story.append(Paragraph("3.3.8 Classical Chen's Entity-Relationship Diagram", subsec_heading))
    if os.path.exists(er_img):
        story.append(centered_img(er_img, 460, 243))
        story.append(Paragraph("Figure 9: Classical Chen's Entity-Relationship (ER) Diagram (Rectangles, Diamonds, Ovals)", fig_caption))

    story.append(Paragraph("3.3.9 State Diagram: Tax Computation Lifecycle", subsec_heading))
    if os.path.exists(state_img):
        story.append(centered_img(state_img, 285, 315))
        story.append(Paragraph("Figure 10: State Diagram: Document Lifecycle from Ingestion to Certified Report", fig_caption))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 17: CHAPTER 3 CONTINUED (Modules & Development Tools)
    # =========================================================================
    story.append(Paragraph("3.4 Description of Various Modules", sec_heading))
    story.append(Paragraph("Table 10: System modules description", tab_title))

    t_mod = [
        [Paragraph("No.", th), Paragraph("Module Name", th), Paragraph("Description & Architecture Role", th), Paragraph("Related Requirements", th)],
        [Paragraph("1", tc), Paragraph("Taxpayer Session Portal", tc), Paragraph("Manages session tokens, taxpayer name, and PAN binding.", tc), Paragraph("FR-001, NFR-03", tc)],
        [Paragraph("2", tc), Paragraph("Ingestion & Validation", tc), Paragraph("Validates MIME types, magic bytes, and file size limits (≤ 10MB).", tc), Paragraph("FR-002, NFR-01", tc)],
        [Paragraph("3", tc), Paragraph("Hybrid LLM Extractor", tc), Paragraph("Dispatches text stream to NVIDIA NIM LLaMA-3.3-70B with Pydantic JSON schema.", tc), Paragraph("FR-003, NFR-02", tc)],
        [Paragraph("4", tc), Paragraph("Interactive Review UI", tc), Paragraph("Provides human-in-the-loop validation of extracted financial fields.", tc), Paragraph("FR-004, NFR-05", tc)],
        [Paragraph("5", tc), Paragraph("Deterministic Tax Engine", tc), Paragraph("Executes exact slab math, 87A rebate, standard deductions, and VDA tax.", tc), Paragraph("FR-005 - FR-008", tc)],
        [Paragraph("6", tc), Paragraph("Comparative Evaluator", tc), Paragraph("Analyzes net tax differential and generates recommendation banner.", tc), Paragraph("FR-009, NFR-02", tc)],
        [Paragraph("7", tc), Paragraph("CA Report Generator", tc), Paragraph("Compiles Statement of Total Income in downloadable PDF and Word DOCX formats.", tc), Paragraph("FR-010, NFR-05", tc)],
    ]
    story.append(make_table(t_mod, [30, 115, 244, 80]))

    story.append(Paragraph("3.5 System Development Tools", sec_heading))
    story.append(Paragraph("Table 11: System development tools", tab_title))

    t_tools = [
        [Paragraph("Component", th), Paragraph("Tool / Technology", th), Paragraph("Version / Role", th)],
        [Paragraph("Language (Backend)", tc), Paragraph("Python", tc), Paragraph("3.10+ (Decimal arithmetic, async)", tc)],
        [Paragraph("Backend Framework", tc), Paragraph("FastAPI + Uvicorn", tc), Paragraph("High-performance ASGI REST APIs", tc)],
        [Paragraph("LLM Microservice", tc), Paragraph("NVIDIA NIM (meta/llama-3.3-70b-instruct)", tc), Paragraph("High-throughput structured JSON extraction", tc)],
        [Paragraph("Database", tc), Paragraph("SQLite3 via SQLAlchemy", tc), Paragraph("Lightweight ACID persistence with WAL mode", tc)],
        [Paragraph("Frontend Framework", tc), Paragraph("React 18 + Vite", tc), Paragraph("Component-driven single page application", tc)],
        [Paragraph("Styling & Shaders", tc), Paragraph("Tailwind CSS + Three.js", tc), Paragraph("Responsive layout with WebGL GridScan shader", tc)],
        [Paragraph("Report Generators", tc), Paragraph("ReportLab + python-docx", tc), Paragraph("Deterministic PDF and DOCX document compilation", tc)],
    ]
    story.append(make_table(t_tools, [110, 179, 180]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 18: CHAPTER 3 CONTINUED (Choice of System, Traceability, Risks)
    # =========================================================================
    story.append(Paragraph("3.6 Choice of Language", sec_heading))
    story.append(Paragraph(
        "Python was selected for the backend due to its rich ecosystem for document parsing (pdfplumber, python-docx), native Decimal module "
        "providing arbitrary-precision fixed-point arithmetic for currency calculations, and native integration with the NVIDIA NIM OpenAI client. "
        "JavaScript (ES6+) with React 18 was chosen for the frontend to enable reactive state management, seamless drag-and-drop document handling, "
        "and WebGL hardware acceleration.",
        body
    ))

    story.append(Paragraph("3.7 Choice of System for Implementation", sec_heading))
    story.append(Paragraph("Table 12: Choice of system for implementation", tab_title))

    t_choice = [
        [Paragraph("Choice", th), Paragraph("Justification & Engineering Rationale", th)],
        [Paragraph("FastAPI over Django/Flask", tc), Paragraph("Native async support, automated OpenAPI documentation, and Pydantic v2 data validation.", tc)],
        [Paragraph("NVIDIA NIM over Raw OpenAI API", tc), Paragraph("Optimized TensorRT-LLM inference speed, predictable latency, and enterprise security.", tc)],
        [Paragraph("Rule-Based Engine over End-to-End LLM", tc), Paragraph("Completely prevents hallucinated arithmetic, guaranteeing 100% legal accuracy.", tc)],
        [Paragraph("SQLite3 with WAL Mode", tc), Paragraph("Zero-configuration relational store suited to session data; avoids heavy database maintenance.", tc)],
    ]
    story.append(make_table(t_choice, [140, 329]))

    story.append(Paragraph("3.8 Traceability and Acceptance Criteria (Summary)", sec_heading))
    story.append(Paragraph("Table 13: Traceability and acceptance criteria", tab_title))

    t_trace = [
        [Paragraph("Requirement", th), Paragraph("Verification Method", th), Paragraph("Acceptance Criterion", th)],
        [Paragraph("FR-001, NFR-03", tc), Paragraph("Session Token Inspection", tc), Paragraph("Unique session created; data strictly isolated per user.", tc)],
        [Paragraph("FR-002, NFR-01", tc), Paragraph("File Upload Boundary Test", tc), Paragraph("Valid PDF/DOCX accepted; files >10MB rejected with 413.", tc)],
        [Paragraph("FR-003, NFR-02", tc), Paragraph("NIM Extraction Suite", tc), Paragraph("Financial fields extracted within 5s with valid Pydantic schema.", tc)],
        [Paragraph("FR-005, FR-006", tc), Paragraph("Hand-Calculated Test Cases", tc), Paragraph("100% exact match against CBDT statutory tax calculation.", tc)],
        [Paragraph("FR-008", tc), Paragraph("Rounding Verification", tc), Paragraph("Section 288A/B rounding rounds exactly to nearest ₹10.", tc)],
        [Paragraph("FR-010, NFR-05", tc), Paragraph("Document Generation Test", tc), Paragraph("CA PDF and DOCX reports download cleanly without formatting corruption.", tc)],
    ]
    story.append(make_table(t_trace, [90, 130, 249]))

    story.append(Paragraph("3.10 Risks", sec_heading))
    story.append(Paragraph("Table 14: Project risks and mitigation strategies", tab_title))

    t_risk = [
        [Paragraph("Risk Event", th), Paragraph("Mitigation Strategy", th)],
        [Paragraph("Annual budget slab modifications", tc), Paragraph("Isolate all rates, thresholds, and deductions in config.py for zero-downtime updates.", tc)],
        [Paragraph("NVIDIA NIM API connectivity timeout", tc), Paragraph("Implement retry logic with exponential backoff and deterministic regex fallback parser.", tc)],
        [Paragraph("Scanned / password-protected documents", tc), Paragraph("Pre-flight validation detects locked files and informs user to upload unlocked documents.", tc)],
        [Paragraph("Floating-point rounding errors", tc), Paragraph("Strictly enforce Python Decimal class across all tax calculation routines.", tc)],
    ]
    story.append(make_table(t_risk, [140, 329]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 19: CHAPTER 4: SYSTEM IMPLEMENTATION (Requirements & Inputs)
    # =========================================================================
    story.append(Paragraph("Chapter 4: SYSTEM IMPLEMENTATION", ch_heading))
    story.append(Paragraph(
        "This chapter describes the implementation environment, hardware and software specifications, codebase directory structure, "
        "and operation manual with actual user interface screenshots of the AITR system.",
        body
    ))

    story.append(Paragraph("4.1 Hardware Requirement", sec_heading))
    story.append(Paragraph("Table 15: Hardware specifications", tab_title))

    t_hw = [
        [Paragraph("Component", th), Paragraph("Minimum Requirement", th), Paragraph("Recommended Configuration", th)],
        [Paragraph("Processor", tc), Paragraph("Dual-core 2.0 GHz x86-64 or ARM64", tc), Paragraph("Quad-core 2.5 GHz or higher", tc)],
        [Paragraph("RAM", tc), Paragraph("4 GB RAM", tc), Paragraph("8 GB - 16 GB RAM", tc)],
        [Paragraph("Storage", tc), Paragraph("2 GB free disk space", tc), Paragraph("10 GB SSD storage", tc)],
        [Paragraph("Display", tc), Paragraph("1280 x 720 resolution", tc), Paragraph("1920 x 1080 full HD resolution", tc)],
        [Paragraph("Network", tc), Paragraph("Broadband internet connection", tc), Paragraph("High-speed internet for cloud NIM API calls", tc)],
    ]
    story.append(make_table(t_hw, [110, 179, 180]))

    story.append(Paragraph("4.2 Software Requirement", sec_heading))
    story.append(Paragraph("Table 16: Software requirements", tab_title))

    t_sw = [
        [Paragraph("Component / Layer", th), Paragraph("Requirement & Technology Selection", th)],
        [Paragraph("Operating System", tc), Paragraph("Windows 10/11, Ubuntu Linux 22.04 LTS, or macOS 13+", tc)],
        [Paragraph("Backend Runtime", tc), Paragraph("Python 3.10+ with FastAPI, Uvicorn, and Pydantic v2", tc)],
        [Paragraph("Frontend Runtime", tc), Paragraph("Node.js 20+ with Vite, React 18, and Tailwind CSS", tc)],
        [Paragraph("Database Engine", tc), Paragraph("SQLite3 with Write-Ahead Logging (WAL) enabled", tc)],
        [Paragraph("AI Inference Gateway", tc), Paragraph("NVIDIA NIM Cloud API (meta/llama-3.3-70b-instruct)", tc)],
        [Paragraph("Document Compilation", tc), Paragraph("ReportLab (PDF engine) and python-docx (Microsoft Word engine)", tc)],
    ]
    story.append(make_table(t_sw, [130, 339]))

    story.append(Paragraph("4.3 Input Requirement", sec_heading))
    story.append(Paragraph("Table 17: Financial document input fields", tab_title))

    t_in = [
        [Paragraph("S. No.", th), Paragraph("Document Field", th), Paragraph("Description & Validation Rule", th)],
        [Paragraph("1", tc), Paragraph("PAN", tc), Paragraph("10-character alphanumeric identifier matching [A-Z]{5}[0-9]{4}[A-Z]{1}.", tc)],
        [Paragraph("2", tc), Paragraph("Taxpayer Name", tc), Paragraph("Full legal name of the tax assessee as recorded in Form 16.", tc)],
        [Paragraph("3", tc), Paragraph("Employer TAN", tc), Paragraph("10-character Tax Deduction Account Number of the employer.", tc)],
        [Paragraph("4", tc), Paragraph("Gross Salary", tc), Paragraph("Salary under section 17(1), perquisites u/s 17(2), profits in lieu u/s 17(3).", tc)],
        [Paragraph("5", tc), Paragraph("Exempt Allowances", tc), Paragraph("Allowances exempt under section 10 (HRA, LTA, conveyance).", tc)],
        [Paragraph("6", tc), Paragraph("Chapter VI-A", tc), Paragraph("Deductions under 80C, 80CCC, 80CCD, 80D, 80G, 80TTA.", tc)],
        [Paragraph("7", tc), Paragraph("TDS Deducted", tc), Paragraph("Tax deducted at source deposited by deductor into government account.", tc)],
    ]
    story.append(make_table(t_in, [40, 110, 319]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 20: CHAPTER 4 CONTINUED (Project Tree & Screenshot 1)
    # =========================================================================
    story.append(Paragraph("4.4 Operation Manual", sec_heading))
    story.append(Paragraph(
        "The following operational walkthrough documents the interactive user interface and system workflow. "
        "The system architecture map and codebase directory structure are illustrated below:",
        body
    ))
    if os.path.exists(tree_img):
        story.append(centered_img(tree_img, 360, 400))
        story.append(Paragraph("Figure 4.1: Comprehensive AITR Project Directory Structure and Architecture Map", fig_caption))

    story.append(Paragraph("4.4.1 Login and User Access (Taxpayer Session Portal)", subsec_heading))
    story.append(Paragraph(
        "Upon accessing the application, the taxpayer is presented with the Taxpayer Session Portal modal dialog. "
        "The user establishes a dedicated, isolated session by entering their Taxpayer Name / Username (e.g., 'Tabish') "
        "and optional PAN ('BPEPH76L8'). All subsequent document uploads, review modifications, and computation reports "
        "are tied to this session token:",
        body
    ))
    if os.path.exists(sess_img):
        story.append(centered_img(sess_img, 210, 240))
        story.append(Paragraph("Figure 4.2: Taxpayer Session Portal Modal for Dedicated Computation Sessions", fig_caption))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 21: CHAPTER 4 CONTINUED (Screenshot 2: Upload Interface)
    # =========================================================================
    story.append(Paragraph("4.4.2 Document Ingestion Interface", subsec_heading))
    story.append(Paragraph(
        "Once authenticated into the session, the taxpayer navigates to the Document Ingestion screen. "
        "The interface renders an interactive Three.js WebGL GridScan shader background, providing a modern cyber-themed "
        "visual aesthetic. Taxpayers can drag and drop digital Form 16, salary slips, or computation drafts in PDF or DOCX formats "
        "(up to 10MB) into the dropzone:",
        body
    ))
    if os.path.exists(up_img):
        story.append(centered_img(up_img, 450, 260))
        story.append(Paragraph("Figure 4.3: Document Ingestion Interface with Three.js WebGL GridScan Shader Background", fig_caption))

    story.append(Paragraph(
        "Upon dropping a file, client-side validation checks magic bytes and size constraints before dispatching the payload "
        "to the /api/upload endpoint. The backend extracts text in-memory and invokes the NVIDIA NIM LLM microservice to extract "
        "financial figures into an auditable Pydantic data model.",
        body
    ))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 22: CHAPTER 4 CONTINUED (Screenshot 3: Dual-Regime Results Screen)
    # =========================================================================
    story.append(Paragraph("4.4.3 Dual-Regime Tax Computation Results & Recommendation", subsec_heading))
    story.append(Paragraph(
        "Following interactive review and human validation, the taxpayer clicks 'Compute Tax'. The deterministic tax engine "
        "evaluates liabilities under both Old and New tax regimes simultaneously. The results screen presents side-by-side comparative "
        "cards with an automated recommendation banner. In the case study below, taxpayer SHAKEV ULLAH KHAN has a gross total income "
        "of ₹4,046. Both regimes yield ₹0 total tax liability due to Section 87A rebate and nil taxable slabs, resulting in a full TDS "
        "refund of ₹10,238 with 'Recommended: EQUAL REGIME':",
        body
    ))
    if os.path.exists(res_img):
        story.append(centered_img(res_img, 450, 310))
        story.append(Paragraph("Figure 4.4: Dual-Regime Comparative Evaluation Screen with Automated Recommendation Banner", fig_caption))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 23: CHAPTER 4 CONTINUED (Screenshot 4: CA Computation Report)
    # =========================================================================
    story.append(Paragraph("4.4.4 Chartered Accountant (CA) Computation Audit Statement", subsec_heading))
    story.append(Paragraph(
        "Taxpayers and CA practitioners can export an official 'Computation of Total Income' statement in PDF format by clicking "
        "'Download PDF'. The generated report adheres strictly to the Institute of Chartered Accountants of India (ICAI) and CBDT "
        "presentation format, displaying assessee details, PAN, assessment year, Section 115BAC computations, and Old Regime comparison:",
        body
    ))
    if os.path.exists(ca_img):
        story.append(centered_img(ca_img, 310, 345))
        story.append(Paragraph("Figure 4.5: Generated CA Audit Note / Computation of Total Income (PDF Report Export)", fig_caption))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 24: CHAPTER 4 CONTINUED (API Endpoints & Output Reports)
    # =========================================================================
    story.append(Paragraph("4.4.7 Main Backend API Endpoints", sec_heading))
    story.append(Paragraph("The frontend communicates with the FastAPI backend through the following REST API endpoints:", body))
    story.append(Paragraph("Table 18: Main Backend REST API Endpoints", tab_title))

    t_api = [
        [Paragraph("HTTP Method", th), Paragraph("Endpoint Route", th), Paragraph("Purpose & Request/Response Payload", th)],
        [Paragraph("POST", tc), Paragraph("/api/session/start", tc), Paragraph("Initialize taxpayer session; accepts username & PAN; returns session_id.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/upload", tc), Paragraph("Uploads document (PDF/DOCX ≤10MB); extracts raw text stream.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/extract", tc), Paragraph("Dispatches text to NVIDIA NIM LLM; returns structured financial JSON.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/calculate", tc), Paragraph("Executes deterministic dual-regime tax calculation for AY 2025-26.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/reports/pdf", tc), Paragraph("Generates and streams CA Computation Audit Note in PDF format.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/reports/docx", tc), Paragraph("Generates and streams editable CA Computation Note in Word DOCX format.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/history/{id}", tc), Paragraph("Retrieves session computation history and prior tax assessments.", tc)],
    ]
    story.append(make_table(t_api, [65, 140, 264]))

    story.append(Paragraph("4.5 Output Reports to Be Obtained", sec_heading))
    story.append(Paragraph("Table 19: Output reports description", tab_title))

    t_out = [
        [Paragraph("Output Report", th), Paragraph("Format", th), Paragraph("Description & Intended Audience", th)],
        [Paragraph("Interactive Dual-Regime Card", tc), Paragraph("Web UI", tc), Paragraph("Side-by-side comparative summary with lower liability recommendation badge.", tc)],
        [Paragraph("CA Statement of Total Income", tc), Paragraph("PDF", tc), Paragraph("Official non-editable computation sheet for tax filing records and bank loans.", tc)],
        [Paragraph("Editable Computation Sheet", tc), Paragraph("DOCX", tc), Paragraph("Fully editable Word document allowing tax professionals to add custom disclosures.", tc)],
        [Paragraph("Session Assessment Audit Log", tc), Paragraph("JSON / UI", tc), Paragraph("Historical record of all computed returns within the active taxpayer session.", tc)],
    ]
    story.append(make_table(t_out, [130, 60, 279]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 25: CHAPTER 5: RESULT AND DISCUSSION (Interpretation & Slabs)
    # =========================================================================
    story.append(Paragraph("Chapter 5: RESULT AND DISCUSSION", ch_heading))
    story.append(Paragraph(
        "This chapter discusses the functional results, statutory accuracy, and validation evidence of the implemented AITR system. "
        "The evaluation is based on actual test runs against authentic Form 16 documents and synthetic stress-testing datasets.",
        body
    ))

    story.append(Paragraph("5.1 Interpretation of Results", sec_heading))
    story.append(Paragraph("Table 20: Project Objective vs Implemented Outcome", tab_title))

    t_res_obj = [
        [Paragraph("Project Objective", th), Paragraph("Implemented Outcome & Technical Evidence", th)],
        [Paragraph("Ingest digital tax documents", tc), Paragraph("Achieved via pdfplumber and python-docx, handling multi-column tables with zero text corruption.", tc)],
        [Paragraph("AI-driven structured extraction", tc), Paragraph("NVIDIA NIM LLaMA-3.3-70B extracts PAN, employer TAN, salary, and deductions into valid JSON.", tc)],
        [Paragraph("Dual-regime computation", tc), Paragraph("Deterministic rules evaluate both regimes with AY 2025-26 statutory slabs and standard deductions.", tc)],
        [Paragraph("Section 115BBH VDA segregation", tc), Paragraph("Crypto gains taxed at flat 30% plus 4% cess without slab mixing or expense deductions.", tc)],
        [Paragraph("CA Audit Note export", tc), Paragraph("Generates professional PDF and Word DOCX statements adhering strictly to ICAI layout standards.", tc)],
    ]
    story.append(make_table(t_res_obj, [130, 339]))

    story.append(Paragraph("5.1.1 Statutory Slab Matrix for Assessment Year 2025-26", subsec_heading))
    story.append(Paragraph("Table 21: Statutory tax slab matrix for dual-regime assessment", tab_title))

    t_slabs = [
        [Paragraph("Regime", th), Paragraph("Income Slab Threshold", th), Paragraph("Tax Rate", th), Paragraph("Rebate / Relief", th), Paragraph("Cess", th)],
        [Paragraph("New Regime (115BAC)", tc), Paragraph("₹0 to ₹3,00,000<br/>₹3,00,001 to ₹7,00,000<br/>₹7,00,001 to ₹10,00,000<br/>₹10,00,001 to ₹12,00,000<br/>₹12,00,001 to ₹15,00,000<br/>Above ₹15,00,000", tc), Paragraph("Nil<br/>5%<br/>10%<br/>15%<br/>20%<br/>30%", tc), Paragraph("Section 87A rebate gives zero tax if taxable income ≤ ₹7 Lakhs.", tc), Paragraph("4% Health & Education Cess on total tax.", tc)],
        [Paragraph("Old Tax Regime", tc), Paragraph("₹0 to ₹2,50,000<br/>₹2,50,001 to ₹5,00,000<br/>₹5,00,001 to ₹10,00,000<br/>Above ₹10,00,000", tc), Paragraph("Nil<br/>5%<br/>20%<br/>30%", tc), Paragraph("Section 87A rebate up to ₹12,500 if taxable income ≤ ₹5 Lakhs.", tc), Paragraph("4% Health & Education Cess on total tax.", tc)],
    ]
    story.append(make_table(t_slabs, [80, 130, 65, 114, 80]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 26: CHAPTER 5 CONTINUED (Test Cases TC-01 to TC-12)
    # =========================================================================
    story.append(Paragraph("5.1.3 Functional Test Scenarios", sec_heading))
    story.append(Paragraph(
        "The functional test suite verifies all critical paths across ingestion, AI extraction, tax computation, and report generation. "
        "The execution evidence for test cases TC-01 to TC-12 is summarized below:",
        body
    ))
    story.append(Paragraph("Table 22: Functional test scenarios and execution status (TC-01 to TC-12)", tab_title))

    t_tc_data = [
        [Paragraph("Test ID", th), Paragraph("Test Scenario", th), Paragraph("Expected System Behaviour", th), Paragraph("Execution Status", th)],
        [Paragraph("TC-01", tc), Paragraph("Upload valid Form 16 PDF", tc), Paragraph("File parsed in-memory, text extracted, NIM returns valid JSON.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-02", tc), Paragraph("Upload salary draft DOCX", tc), Paragraph("python-docx extracts text stream; JSON schema validated.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-03", tc), Paragraph("File exceeds 10MB limit", tc), Paragraph("HTTP 413 Payload Too Large error returned with clear user message.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-04", tc), Paragraph("Upload corrupted / empty PDF", tc), Paragraph("Handled gracefully with HTTP 422; system prompts re-upload.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-05", tc), Paragraph("Salaried income under ₹7L (New)", tc), Paragraph("Standard deduction ₹75k applied; Section 87A rebate yields ₹0 tax.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-06", tc), Paragraph("Salaried income ₹15L (New)", tc), Paragraph("Standard deduction ₹75k applied; tax computed accurately across 6 slabs.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-07", tc), Paragraph("Old Regime with 80C & 80D", tc), Paragraph("Deducts ₹50k std deduction, ₹1.5L 80C, ₹25k 80D before slab tax.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-08", tc), Paragraph("Virtual Digital Assets (VDA)", tc), Paragraph("VDA gains taxed at flat 30% u/s 115BBH without deduction offset.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-09", tc), Paragraph("Section 288A/B Rounding", tc), Paragraph("Taxable income and net tax rounded to nearest ₹10.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-10", tc), Paragraph("Optimal Regime Selection", tc), Paragraph("System correctly identifies regime with lower net tax liability.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-11", tc), Paragraph("PDF CA Report Generation", tc), Paragraph("Generates downloadable, uncorrupted PDF computation statement.", tc), Paragraph("Passed", tc)],
        [Paragraph("TC-12", tc), Paragraph("Word DOCX Report Export", tc), Paragraph("Produces valid .docx file matching PDF totals and tables.", tc), Paragraph("Passed", tc)],
    ]
    story.append(make_table(t_tc_data, [45, 140, 219, 65]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 27: CHAPTER 5 CONTINUED (Application Areas & Comparison)
    # =========================================================================
    story.append(Paragraph("5.2 Application Areas and Scope of the Work", sec_heading))
    story.append(Paragraph("• <b>Individual Salaried Taxpayers:</b> Enables self-filers to instantly compare Old vs New tax regimes and identify optimal deduction strategies.", bullet))
    story.append(Paragraph("• <b>Chartered Accountancy Firms:</b> Automates client document data entry and generates branded Computation of Total Income statements.", bullet))
    story.append(Paragraph("• <b>Corporate Payroll & HR Departments:</b> Assists corporate payroll teams in estimating employee TDS liabilities and regime preferences.", bullet))
    story.append(Paragraph("• <b>Financial Advisory & Wealth Management:</b> Provides instant dual-regime tax projection for clients planning investments under Section 80C/80D.", bullet))

    story.append(Paragraph("5.3 Comparison with the Existing System", sec_heading))
    story.append(Paragraph("Table 23: Comparison with the existing manual / spreadsheet process", tab_title))

    t_comp_data = [
        [Paragraph("Basis of Evaluation", th), Paragraph("Manual / Spreadsheet-Based Process", th), Paragraph("Proposed AITR System", th)],
        [Paragraph("Data Entry & Processing", tc), Paragraph("Manual copy-pasting of numbers from Form 16; highly prone to transcription error.", tc), Paragraph("Automated AI extraction using NVIDIA NIM LLaMA-3.3-70B with Pydantic validation.", tc)],
        [Paragraph("Dual-Regime Evaluation", tc), Paragraph("Requires recalculating returns twice in separate spreadsheets; slow and cumbersome.", tc), Paragraph("Simultaneous dual-regime calculation in a single pass with automated recommendation.", tc)],
        [Paragraph("Statutory Accuracy", tc), Paragraph("Spreadsheet formulas often omit marginal relief or fail to update for new budget slabs.", tc), Paragraph("Strict rule-based Python math incorporating latest Finance (No. 2) Act 2024 provisions.", tc)],
        [Paragraph("VDA / Crypto Handling", tc), Paragraph("Frequently co-mingled with normal income, causing severe non-compliance penalties.", tc), Paragraph("Strict statutory segregation under Section 115BBH at flat 30% plus 4% cess.", tc)],
        [Paragraph("Audit Documentation", tc), Paragraph("Spreadsheets require manual formatting and lack formal CA statement structure.", tc), Paragraph("One-click compilation of professional CA-standard PDF and Word DOCX reports.", tc)],
        [Paragraph("Turnaround Time", tc), Paragraph("30 to 45 minutes per taxpayer return.", tc), Paragraph("< 5 seconds total processing time.", tc)],
    ]
    story.append(make_table(t_comp_data, [110, 179, 180]))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 28: CHAPTER 6: CONCLUSION
    # =========================================================================
    story.append(Paragraph("Chapter 6: CONCLUSION", ch_heading))
    story.append(Paragraph(
        "The AI-Driven Income Tax Return Computation System (AITR) demonstrates the successful integration of modern generative AI "
        "document understanding with deterministic statutory rule engines. By delegating document text extraction to an NVIDIA NIM "
        "LLM microservice while strictly confining arithmetic, slab routing, deductions, and rebates to hardened Python execution classes, "
        "the system eliminates LLM hallucination while removing the friction of manual data entry. The system delivers an explainable, "
        "auditable, and highly usable platform for individual taxpayers and tax professionals.",
        body
    ))

    story.append(Paragraph("6.1 Advantages and Special Features of the System", sec_heading))
    story.append(Paragraph("• <b>Dual-Regime Automatic Optimization:</b> Simultaneously evaluates Section 115BAC and Old Regime, instantly highlighting the regime that maximizes tax savings.", bullet))
    story.append(Paragraph("• <b>Zero Arithmetic Hallucination:</b> Mathematical calculations are completely decoupled from language model weights, guaranteeing 100% statutory precision.", bullet))
    story.append(Paragraph("• <b>Multi-Format Ingestion:</b> Supports native digital Form 16 and salary computation drafts in both PDF and Word DOCX formats.", bullet))
    story.append(Paragraph("• <b>Interactive Human-in-the-Loop Review:</b> Allows taxpayers to inspect, verify, and edit extracted numbers before triggering computations.", bullet))
    story.append(Paragraph("• <b>Special Rate Compliance (Section 115BBH):</b> Automatically taxes virtual digital assets at flat 30% without allowing expense set-offs.", bullet))
    story.append(Paragraph("• <b>Dual Report Export:</b> Generates CA-standard computation statements in non-editable PDF and fully editable Word DOCX formats.", bullet))
    story.append(Paragraph("• <b>Modern Reactive User Interface:</b> Built with React 18 and Three.js WebGL GridScan shader background for a state-of-the-art web experience.", bullet))

    story.append(Paragraph("6.2 Limitations", sec_heading))
    story.append(Paragraph("• Scanned paper documents and photographed mobile receipts without selectable text are currently excluded; OCR processing is required for such files.", bullet))
    story.append(Paragraph("• Direct e-filing submission to the CBDT portal is not included; returns must be reviewed by the taxpayer or CA prior to statutory submission.", bullet))
    story.append(Paragraph("• Capital gains processing is limited to standard short-term and long-term equity transactions; complex cross-border derivative schedules require manual entry.", bullet))

    story.append(Paragraph("6.3 Future Extension", sec_heading))
    story.append(Paragraph("• Optical Character Recognition (OCR) integration using Tesseract or DocTR for scanned physical tax receipts and Form 16 paper documents.", bullet))
    story.append(Paragraph("• Authorized CBDT e-filing API integration for direct JSON return schema generation and one-click submission.", bullet))
    story.append(Paragraph("• Multi-year tax planning advisory simulating future investment allocations under Section 80C, 80D, and NPS.", bullet))
    story.append(PageBreak())

    # =========================================================================
    # PAGE 29: CHAPTER 6 CONTINUED (Final Remarks & References)
    # =========================================================================
    story.append(Paragraph("6.4 Final Remarks", sec_heading))
    story.append(Paragraph(
        "The AITR system provides a scalable, auditable, and transparent foundation for modern tax compliance engineering. "
        "By automating data extraction and dual-regime comparison while retaining strict mathematical determinism, the project "
        "significantly lowers the barrier for accurate income tax computation, democratizing financial advisory services for salaried "
        "taxpayers while empowering Chartered Accountants with streamlined audit tools.",
        body
    ))

    story.append(Spacer(1, 10))
    story.append(Paragraph("REFERENCES", ch_heading))

    refs = [
        "1. Central Board of Direct Taxes (CBDT). (2024). Income Tax Rules, Slabs and Return Preparation Utilities. Ministry of Finance, Government of India. Retrieved from https://incometax.gov.in/",
        "2. Government of India. (1961). The Income-tax Act, 1961 (Act No. 43 of 1961). Ministry of Law and Justice.",
        "3. Government of India. (2020). The Finance Act, 2020: Enactment of Section 115BAC Concessional Tax Regime.",
        "4. Government of India. (2024). The Finance (No. 2) Act, 2024: Amendments to Section 115BAC, Standard Deduction, and Slabs for AY 2025-26.",
        "5. NVIDIA Corporation. (2024). NVIDIA NIM (Inference Microservices) Documentation & Nemotron/LLaMA-3.3 Reasoning Models. https://developer.nvidia.com/nim",
        "6. Tiangolo, S. (2024). FastAPI: Modern, High-Performance Web Framework for Building APIs with Python 3.8+. https://fastapi.tiangolo.com/",
        "7. Meta Open Source. (2024). React 18: The Library for Web and Native User Interfaces. https://react.dev/",
        "8. Cabello, R. et al. (2024). Three.js: JavaScript 3D Library and WebGL Shader Programming. https://threejs.org/",
        "9. ReportLab Inc. (2024). ReportLab PDF Generation Library for Python Documentation. https://www.reportlab.com/",
        "10. Scanny. (2024). python-docx: Creating and Updating Microsoft Word (.docx) Files with Python. https://python-docx.readthedocs.io/",
        "11. Institute of Chartered Accountants of India (ICAI). (2024). Technical Guide on Income Tax Return Preparation and Computation Statements.",
        "12. Pydantic Services Inc. (2024). Pydantic v2: Fast Data Validation and Settings Management for Python. https://docs.pydantic.dev/",
        "13. SQLite Consortium. (2024). SQLite3 Database Engine: Write-Ahead Logging (WAL) and Concurrency Architecture. https://www.sqlite.org/",
        "14. Tailwind Labs. (2024). Tailwind CSS: Utility-First CSS Framework. https://tailwindcss.com/",
    ]
    for r in refs:
        story.append(Paragraph(r, tc))
        story.append(Spacer(1, 4))

    # Build PDF
    doc.build(story, canvasmaker=SampleFormatCanvas)
    print(f"Successfully compiled Sample-Format Academic PDF at: {pdf_path}")


if __name__ == "__main__":
    out_pdf = r"D:\Python\AITR\AITR_Academic_Project_Report.pdf"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_same_format_pdf(out_pdf, assets, diagrams)
