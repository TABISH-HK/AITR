"""
Generate Comprehensive 30-32 Page Academic Project Report PDF with ReportLab.
Features:
- Department of Computer Science, AMU Formatting
- All 13 Figures (Screenshots & Diagrams) strictly CENTERED (hAlign='CENTER')
- Chapters 1 to 6 with exhaustive statutory and technical sections
- Target page count: ~30-32 pages with clean page breaks
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


def build_academic_30p_pdf(pdf_path: str, assets_dir: str, diagrams_dir: str):
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

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
        fontSize=14.5,
        leading=18.5,
        alignment=1, # Centered chapter title like academic thesis
        textColor=colors.black,
        spaceBefore=14,
        spaceAfter=12,
        keepWithNext=True
    )

    sec_heading = ParagraphStyle(
        'SecHeading',
        parent=styles['Heading2'],
        fontName='Times-Bold',
        fontSize=11.5,
        leading=15.5,
        textColor=colors.black,
        spaceBefore=11,
        spaceAfter=5,
        keepWithNext=True
    )

    subsec_heading = ParagraphStyle(
        'SubSecHeading',
        parent=styles['Heading3'],
        fontName='Times-Bold',
        fontSize=10,
        leading=13.5,
        textColor=colors.HexColor('#1e293b'),
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    body = ParagraphStyle(
        'AcademicBody',
        parent=styles['BodyText'],
        fontName='Times-Roman',
        fontSize=9.5,
        leading=13.8,
        textColor=colors.black,
        alignment=4, # Justified
        spaceAfter=5.5
    )

    bullet = ParagraphStyle(
        'AcademicBullet',
        parent=body,
        leftIndent=15,
        bulletIndent=5,
        spaceAfter=3,
        alignment=4
    )

    caption = ParagraphStyle(
        'FigCaption',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=8.5,
        leading=11.5,
        alignment=1, # STRICTLY CENTERED CAPTION
        textColor=colors.HexColor('#334155'),
        spaceBefore=4,
        spaceAfter=9
    )

    th = ParagraphStyle(
        'TH',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8,
        leading=10.5,
        textColor=colors.black
    )

    tc = ParagraphStyle(
        'TC',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=7.8,
        leading=10.2,
        textColor=colors.black
    )

    def centered_img(img_path, w, h):
        return Image(img_path, width=w, height=h, hAlign='CENTER')

    story = []

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 1: COVER PAGE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Spacer(1, 35))
    story.append(Paragraph("DEPARTMENT OF COMPUTER SCIENCE", cover_univ))
    story.append(Paragraph("ALIGARH MUSLIM UNIVERSITY, ALIGARH (U.P.), INDIA", ParagraphStyle('CoverSub', parent=styles['Normal'], fontName='Times-Roman', fontSize=11, leading=15, alignment=1, textColor=colors.HexColor('#334155'))))
    story.append(Spacer(1, 35))

    story.append(HRFlowable(width="75%", thickness=2, color=colors.HexColor('#1e3a8a'), spaceAfter=18, spaceBefore=0))
    story.append(Paragraph("PROJECT REPORT", ParagraphStyle('CoverBadge', parent=styles['Normal'], fontName='Times-Bold', fontSize=12, leading=16, alignment=1, textColor=colors.HexColor('#0369a1'), spaceAfter=8)))
    story.append(Paragraph("AI-DRIVEN INCOME TAX RETURN (ITR)<br/>COMPUTATION SYSTEM (AITR)", cover_title))
    story.append(Paragraph("A Full-Stack Intelligent Assessment System with Deterministic Multi-Regime Computation & Semantic LLM Extraction", ParagraphStyle('CoverDesc', parent=styles['Normal'], fontName='Times-Roman', fontSize=10.5, leading=14, alignment=1, textColor=colors.HexColor('#475569'))))
    story.append(HRFlowable(width="75%", thickness=1, color=colors.HexColor('#94a3b8'), spaceAfter=30, spaceBefore=0))

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
        ('TOPPADDING', (0,0), (-1,-1), 4.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4.5),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
    ]))
    story.append(t_cover)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 2: CERTIFICATE OF AUTHENTICITY
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Certificate of Authenticity", chap_heading))
    story.append(Spacer(1, 15))
    story.append(Paragraph(
        "This is to certify that the project entitled <b>\"AI-Driven Income Tax Return (ITR) Computation System (AITR)\"</b> "
        "is a bonafide record of work carried out by <b>Tabish Hasan (Roll / Enrolment No: 25CAMSA156)</b> in partial fulfillment of the requirements "
        "for the degree of <b>Master of Computer Applications (MCA)</b> at the <b>Department of Computer Science, Aligarh Muslim University, Aligarh</b> "
        "during the academic session 2026–2027.",
        body
    ))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "The project demonstrates sound software engineering principles, incorporating modern API design, reactive WebGL user interfaces, "
        "large language model semantic parsing, and strict deterministic adherence to the statutory provisions of the Indian Income Tax Act, 1961.",
        body
    ))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "The results embodied in this report have been verified and tested on actual sample ITR acknowledgment documents and have not been submitted elsewhere "
        "for the award of any other degree or diploma.",
        body
    ))
    story.append(Spacer(1, 60))

    sig_table = Table([
        [Paragraph("______________________________<br/><b>Tabish Hasan</b><br/>Candidate (25CAMSA156)<br/>MCA, Aligarh Muslim University", body),
         Paragraph("______________________________<br/><b>Project Supervisor / Faculty Mentor</b><br/>Department of Computer Science<br/>Aligarh Muslim University", body)]
    ], colWidths=[230, 230])
    sig_table.setStyle(TableStyle([
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(sig_table)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 3: ACKNOWLEDGEMENT & EXECUTIVE SUMMARY
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Acknowledgement", chap_heading))
    story.append(Paragraph(
        "I express my deep gratitude to the faculty and mentors of the <b>Department of Computer Science, Aligarh Muslim University (AMU)</b> "
        "for their continuous encouragement, guidance, and constructive evaluation throughout the tenure of this MCA Mini Project. "
        "Their academic rigor and valuable insights enabled me to bridge direct tax legislation with state-of-the-art software systems.",
        body
    ))
    story.append(Paragraph(
        "I also extend my sincere appreciation to the open-source software engineering community behind FastAPI, React, Three.js, ReportLab, and "
        "the NVIDIA Inference Microservices (NIM) ecosystem, whose powerful tools made this full-stack implementation possible.",
        body
    ))
    story.append(Spacer(1, 15))
    story.append(Paragraph("Executive Summary", sec_heading))
    story.append(Paragraph(
        "The <b>AI-Driven Income Tax Return (ITR) Computation System (AITR)</b> addresses a critical challenge in modern Indian financial management: "
        "the time-consuming, error-prone manual processing of tax documents amidst evolving dual-regime taxation (Old vs. Section 115BAC New Regime). "
        "By fusing <b>hybrid semantic AI extraction (NVIDIA NIM LLM + rule-based regex fallback)</b> with a <b>100% deterministic calculation engine</b>, "
        "AITR achieves zero mathematical hallucination while automating the parsing of complex ITR-1 (Sahaj), ITR-2 (Capital Gains & Crypto u/s 115BBH), "
        "and ITR-4 (Sugam Presumptive) documents for Assessment Years 2025-26 and 2026-27.",
        body
    ))
    story.append(Paragraph(
        "The system provides an intuitive Three.js WebGL interface, an interactive human-in-the-loop review portal, automatic regime optimization, "
        "and one-click compilation of professional Chartered Accountant-format Statement of Total Income audit reports in both PDF and Word DOCX formats.",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 4: TABLE OF CONTENTS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("TABLE OF CONTENTS", chap_heading))
    toc_data = [
        [Paragraph("<b>Chapter / Section</b>", th), Paragraph("<b>Title / Subject Description</b>", th), Paragraph("<b>Page</b>", th)],
        [Paragraph("<b>Chapter 1</b>", tc), Paragraph("<b>INTRODUCTION</b><br/>1.1 Literature Survey (Chronological related work & domain profile)<br/>1.2 Present State of the Art & Its Shortcomings<br/>1.3 Realization of the Problem<br/>1.4 Introduction of Work to Be Taken Up<br/>1.5 Broad Outline of the Work (Chapter-wise)", tc), Paragraph("5<br/>5<br/>7<br/>8<br/>8<br/>8", tc)],
        [Paragraph("<b>Chapter 2</b>", tc), Paragraph("<b>PROBLEM FORMULATION</b><br/>2.1 Problem Definition<br/>2.2 Various Aspects of the Problem (Table 2)<br/>2.3 Present System: Critical View<br/>2.4 Scientific/Technical Novelty & Need of the Work<br/>2.5 Proposed System / Method of Solution", tc), Paragraph("9<br/>9<br/>9<br/>10<br/>10<br/>10", tc)],
        [Paragraph("<b>Chapter 3</b>", tc), Paragraph("<b>SYSTEM ANALYSIS AND DESIGN</b><br/>3.1 Requirements Specification (User classes, operating env, constraints)<br/>3.2 Functional & Non-Functional Requirements (Table 3, 4, 5)<br/>3.3 Data & Interface Requirements (Table 6)<br/>3.4 Information Collection & Rationale (Table 7)<br/>3.5 System Architecture & Object-Oriented Class Hierarchy (Figure 3.1)<br/>3.6 Classical Chen's Entity-Relationship (ER) Diagram (Figure 3.2)<br/>3.7 Use Case Diagram & Main Use Case Descriptions (Figure 3.3, Table 8)<br/>3.8 Activity Diagrams (Ingestion & Tax Calculation: Figures 3.4, 3.5)<br/>3.9 Data Flow Diagrams (Level 0 and Level 1: Figures 3.6, 3.7)<br/>3.10 Sequence Diagram: End-to-End Workflow (Figure 3.8)<br/>3.11 System Modules Breakdown (Table 9)<br/>3.12 System Development Tools & Tech Stack Justification<br/>3.13 Traceability & Acceptance Criteria (Table 10)<br/>3.14 Project Risks and Mitigation Strategies (Table 11)", tc), Paragraph("11<br/>11<br/>12<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20<br/>21<br/>22<br/>22<br/>23<br/>23", tc)],
        [Paragraph("<b>Chapter 4</b>", tc), Paragraph("<b>SYSTEM IMPLEMENTATION</b><br/>4.1 Hardware & Software Requirements (Tables 12, 13)<br/>4.2 Project Codebase Structure & Directory Tree (Figure 4.1)<br/>4.3 Operation Manual with Complete UI Screenshots:<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.3.1 Taxpayer Session Portal (Figure 4.2)<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.3.2 Document Ingestion & WebGL Shader Screen (Figure 4.3)<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.3.3 Dual-Regime Tax Computation Results Screen (Figure 4.4)<br/>&nbsp;&nbsp;&nbsp;&nbsp;4.3.4 Chartered Accountant (CA) Audit Note PDF Export (Figure 4.5)<br/>4.4 Principal Backend REST API Endpoints (Table 14)<br/>4.5 Output Reports Description", tc), Paragraph("24<br/>24<br/>25<br/>26<br/>26<br/>26<br/>27<br/>27<br/>28<br/>28", tc)],
        [Paragraph("<b>Chapter 5</b>", tc), Paragraph("<b>RESULT AND DISCUSSION</b><br/>5.1 Interpretation of Results & Statutory Slab Matrix (Table 15)<br/>5.2 Implemented Tax Validation & Calculation Rules (Table 16)<br/>5.3 Functional Test Scenarios & Execution Evidence (TC-01 to TC-12: Table 17)<br/>5.4 Comparison with the Existing System (Table 18)<br/>5.5 Practical Application Areas and Deployment Scope", tc), Paragraph("29<br/>29<br/>30<br/>30<br/>31<br/>31", tc)],
        [Paragraph("<b>Chapter 6</b>", tc), Paragraph("<b>CONCLUSION</b><br/>6.1 Advantages & Special Features of the System<br/>6.2 System Limitations<br/>6.3 Future Extensions & Roadmap<br/>6.4 Final Remarks<br/><b>REFERENCES</b>", tc), Paragraph("32<br/>32<br/>32<br/>32<br/>32<br/>32", tc)],
    ]
    t_toc = Table(toc_data, colWidths=[65, 345, 40])
    t_toc.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(t_toc)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 5: CHAPTER 1: INTRODUCTION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 1: INTRODUCTION", chap_heading))
    story.append(Paragraph(
        "Income Tax Returns (ITR) in India contain critical statutory financial information such as Permanent Account Number (PAN), "
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
    story.append(Paragraph(
        "Taxation computational tools have evolved substantially over past decades, shifting from manual spreadsheet templates to automated rule engines "
        "and contemporary neural language models. Table 1 outlines the historical progression and technological milestones foundational to AITR:",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 6: LITERATURE SURVEY TABLE 1
    # ──────────────────────────────────────────────────────────────────────────
    t1_data = [
        [Paragraph("Year", th), Paragraph("Work / Technology", th), Paragraph("Relevance to Project", th)],
        [Paragraph("1961", tc), Paragraph("Income Tax Act, 1961 (Govt. of India)", tc), Paragraph("The primary statutory legislation governing direct taxation, taxable heads, exemptions, and tax computation.", tc)],
        [Paragraph("2020", tc), Paragraph("Finance Act 2020: Section 115BAC", tc), Paragraph("Introduced concessional New Tax Regime with revised tax slabs and forfeiture of specified deductions.", tc)],
        [Paragraph("2022", tc), Paragraph("Finance Act 2022: Virtual Digital Assets (Sec 115BBH)", tc), Paragraph("Defined 30% flat taxation on crypto/NFT capital gains without deduction of expenses, verified by AITR.", tc)],
        [Paragraph("2023", tc), Paragraph("Finance Act 2023: Default Status of New Tax Regime", tc), Paragraph("Made Section 115BAC default tax regime and enhanced Section 87A rebate to ₹25,000 for income up to ₹7,00,000.", tc)],
        [Paragraph("2024", tc), Paragraph("Union Budget 2024: Revision for AY 2025-26", tc), Paragraph("Increased Standard Deduction from ₹50,000 to ₹75,000 under New Regime and restructured tax slabs.", tc)],
        [Paragraph("2024+", tc), Paragraph("NVIDIA NIM & Nemotron Reasoning Models", tc), Paragraph("Provides optimized, high-throughput LLM reasoning microservices for structured JSON financial extraction.", tc)],
        [Paragraph("Ongoing", tc), Paragraph("Deterministic rule engines in tax software", tc), Paragraph("Ensures zero mathematical hallucination by delegating all arithmetic computation to deterministic code.", tc)],
    ]
    t1 = Table(t1_data, colWidths=[55, 155, 250])
    t1.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 1: Previous related work and its statutory/technological relevance</b>", caption))
    story.append(t1)
    story.append(Spacer(1, 10))
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
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 7: PRESENT SHORTCOMINGS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("1.2 Present State of the Art and Its Shortcomings", sec_heading))
    story.append(Paragraph("• <b>Manual Data Transcription:</b> Taxpayers manually re-type values from Form 16, bank interest certificates, and brokerage summaries into return filing sheets, creating high human error rates.", bullet))
    story.append(Paragraph("• <b>LLM Hallucination Risks:</b> Generic conversational AI systems (e.g. ChatGPT, Claude) frequently hallucinate arithmetic calculations, misapply Section 87A rebate boundaries, or apply wrong slab rates.", bullet))
    story.append(Paragraph("• <b>Spreadsheet Complexity:</b> Spreadsheet-based tax templates are fragile, lack input validation, fail to handle complex VDA crypto gains u/s 115BBH, and do not provide automated regime recommendations.", bullet))
    story.append(Paragraph("• <b>Opaque Accounting Software:</b> Commercial tax utilities often obscure the step-by-step intermediate calculations, preventing taxpayers from understanding why a specific regime is recommended.", bullet))
    story.append(Paragraph("• <b>Lack of Unified Ingestion:</b> Existing utilities rarely support drag-and-drop parsing of raw ITR acknowledgements, requiring users to pre-process documents into proprietary formats.", bullet))
    story.append(Paragraph("• <b>Absence of Dual-Export Notes:</b> Few solutions produce both client-ready non-editable vector PDFs and editable Microsoft Word documents for accountants who must attach explanatory notes.", bullet))
    story.append(Spacer(1, 10))

    story.append(Paragraph("1.3 Realization of the Problem", sec_heading))
    story.append(Paragraph(
        "The core problem is to provide an automated, repeatable, and mathematically verifiable platform that ingests unstructured financial documents, "
        "accurately extracts taxpayer particulars and income heads, applies statutory tax algorithms under both Old and New Regimes, and provides "
        "explainable regime recommendations alongside professional Chartered Accountant-format audit documentation.",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 8: OUTLINE & SCOPE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("1.4 Introduction of the Work to Be Taken Up", sec_heading))
    story.append(Paragraph(
        "The proposed work consists of a Python FastAPI backend with SQLite persistence, document ingestion (pdfplumber and python-docx), hybrid extraction "
        "(NVIDIA NIM LLM + regular expression rules), deterministic tax calculation engines (ITR-1, ITR-2, ITR-4), CA report generation (ReportLab and python-docx), "
        "and a reactive Single Page Application delivered through React 18, Tailwind CSS, and a Three.js WebGL shader background.",
        body
    ))
    story.append(Spacer(1, 8))
    story.append(Paragraph("1.5 Broad Outline of the Work (Chapter-wise)", sec_heading))
    story.append(Paragraph("• <b>Chapter 1:</b> Introduction, literature survey, domain profile, present shortcomings, problem realization, and project outline.", bullet))
    story.append(Paragraph("• <b>Chapter 2:</b> Problem formulation, aspects, critical view, scientific novelty, and proposed methodology.", bullet))
    story.append(Paragraph("• <b>Chapter 3:</b> System requirements, operational environment, architecture, UML/DFD/ER diagrams, traceability, and risks.", bullet))
    story.append(Paragraph("• <b>Chapter 4:</b> System implementation, project structure, operation manual with complete UI screenshots, and API specifications.", bullet))
    story.append(Paragraph("• <b>Chapter 5:</b> Results and discussion, risk/regime classification, test scenarios TC-01 to TC-12, and comparative analysis.", bullet))
    story.append(Paragraph("• <b>Chapter 6:</b> Conclusion, advantages, system limitations, future scope, and statutory references.", bullet))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 9: CHAPTER 2: PROBLEM FORMULATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 2: PROBLEM FORMULATION", chap_heading))
    story.append(Paragraph("2.1 Problem Definition", sec_heading))
    story.append(Paragraph(
        "To design and develop an intelligent, automated financial assessment system that ingests Indian ITR documents (PDF/DOCX), validates document authenticity "
        "and selectable text, extracts taxpayer particulars and income heads using hybrid AI extraction, computes exact statutory tax liabilities under Old and "
        "Section 115BAC New Tax Regimes across Assessment Years 2025-26 and 2026-27, determines optimal tax recommendations, and exports audit-ready CA reports.",
        body
    ))
    story.append(Spacer(1, 6))
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
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 10: METHOD OF SOLUTION
    # ──────────────────────────────────────────────────────────────────────────
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
    # PAGE 11: CHAPTER 3: SYSTEM ANALYSIS AND DESIGN
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 3: SYSTEM ANALYSIS AND DESIGN", chap_heading))
    story.append(Paragraph("3.1 Requirement Specification", sec_heading))
    story.append(Paragraph(
        "This section details the functional and non-functional requirements of AITR. Requirements are cataloged with distinct IDs "
        "(FR-001 through FR-010 and NFR-01 through NFR-08) for end-to-end traceability against implementation modules and test cases.",
        body
    ))
    story.append(Paragraph("3.1.1 Purpose & Intended Audience", subsec_heading))
    story.append(Paragraph(
        "The purpose is to specify expected behavior, API interfaces, mathematical rules, and quality attributes. Intended audience includes "
        "project supervisors, academic evaluators, software developers, and Chartered Accountants.",
        body
    ))
    story.append(Paragraph("3.1.2 Product Perspective & Functions", subsec_heading))
    story.append(Paragraph(
        "AITR is a web-based financial intelligence application operating on structured and semi-structured ITR data. "
        "Key functions include session-isolated document upload, text extraction, data validation, dual-regime tax computation, and report compilation.",
        body
    ))
    story.append(Paragraph("3.1.5 User Classes and Characteristics", subsec_heading))
    t_uc = Table([
        [Paragraph("User Class", th), Paragraph("Description & Responsibilities", th), Paragraph("Technical Skill", th)],
        [Paragraph("Individual Taxpayer", tc), Paragraph("Uploads Form 16/ITR, reviews extracted income heads, verifies deductions, and views optimal regime.", tc), Paragraph("Basic / Non-technical", tc)],
        [Paragraph("Chartered Accountant (CA)", tc), Paragraph("Inspects intermediate tax calculations, adjusts capital gains/crypto heads, and exports audit reports.", tc), Paragraph("Moderate / Professional", tc)],
        [Paragraph("System Evaluator", tc), Paragraph("Reviews test suites, verifies mathematical formulas, checks logs, and evaluates source code.", tc), Paragraph("High / Engineering", tc)],
    ], colWidths=[110, 260, 90])
    t_uc.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 3: User classes and characteristics</b>", caption))
    story.append(t_uc)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 12: FUNCTIONAL REQUIREMENTS PART 1
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.1.6 Operating Environment, Constraints, Assumptions", sec_heading))
    story.append(Paragraph("• <b>Operating Environment:</b> Python 3.10+ FastAPI server, modern web browser (Chrome, Edge, Firefox), SQLite3 database.", bullet))
    story.append(Paragraph("• <b>Implementation Constraints:</b> Maximum upload limit of 10MB per document; scanned paper without selectable text is rejected.", bullet))
    story.append(Paragraph("• <b>Assumptions:</b> Taxpayers provide authentic ITR documents; internet connectivity is present for NVIDIA NIM inference.", bullet))
    story.append(Spacer(1, 6))

    story.append(Paragraph("3.1.9 Functional Requirements (Part 1)", sec_heading))
    t_fr1 = [
        [Paragraph("ID", th), Paragraph("Requirement", th), Paragraph("Description", th), Paragraph("Priority", th)],
        [Paragraph("FR-001", tc), Paragraph("Taxpayer Session Portal", tc), Paragraph("Establish isolated session ID storing taxpayer name and PAN in local session.", tc), Paragraph("High", tc)],
        [Paragraph("FR-002", tc), Paragraph("Document Upload & Validation", tc), Paragraph("Ingest PDF/DOCX files up to 10MB; reject scanned images without selectable text.", tc), Paragraph("High", tc)],
        [Paragraph("FR-003", tc), Paragraph("Hybrid Entity Extraction", tc), Paragraph("Extract PAN, Aadhaar, AY, salary, deductions, VDA gains, and TDS via Regex+LLM.", tc), Paragraph("High", tc)],
        [Paragraph("FR-004", tc), Paragraph("Interactive Data Review", tc), Paragraph("Present extracted values for user validation and manual field modification.", tc), Paragraph("High", tc)],
        [Paragraph("FR-005", tc), Paragraph("Multi-AY Slab Configuration", tc), Paragraph("Support dynamic slab and standard deduction switching (AY 25-26 & 26-27).", tc), Paragraph("High", tc)],
    ]
    t_fr_tab1 = Table(t_fr1, colWidths=[45, 130, 235, 50])
    t_fr_tab1.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 4(a): Functional Requirements (FR-001 to FR-005)</b>", caption))
    story.append(t_fr_tab1)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 13: FUNCTIONAL REQUIREMENTS PART 2 & NON-FUNCTIONAL REQUIREMENTS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.1.9 Functional Requirements (Part 2)", sec_heading))
    t_fr2 = [
        [Paragraph("ID", th), Paragraph("Requirement", th), Paragraph("Description", th), Paragraph("Priority", th)],
        [Paragraph("FR-006", tc), Paragraph("Deterministic Tax Engine", tc), Paragraph("Compute Old and New Regime liabilities with Section 87A rebate and 4% cess.", tc), Paragraph("High", tc)],
        [Paragraph("FR-007", tc), Paragraph("Special Rates & Presumptive", tc), Paragraph("Apply 30% flat tax on VDA (115BBH) and 6%/8%/50% profit u/s 44AD/44ADA.", tc), Paragraph("High", tc)],
        [Paragraph("FR-008", tc), Paragraph("Statutory Rounding", tc), Paragraph("Enforce Section 288A (nearest ₹10) and Section 288B (nearest rupee) rounding.", tc), Paragraph("High", tc)],
        [Paragraph("FR-009", tc), Paragraph("CA Report Generation", tc), Paragraph("Generate formal CA Statement of Total Income in PDF and DOCX formats.", tc), Paragraph("High", tc)],
        [Paragraph("FR-010", tc), Paragraph("Session History & Retrieval", tc), Paragraph("Persist and display session history of past uploads, computations, and downloads.", tc), Paragraph("Medium", tc)],
    ]
    t_fr_tab2 = Table(t_fr2, colWidths=[45, 130, 235, 50])
    t_fr_tab2.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 4(b): Functional Requirements (FR-006 to FR-010)</b>", caption))
    story.append(t_fr_tab2)
    story.append(Spacer(1, 8))

    story.append(Paragraph("3.1.10 Non-Functional Requirements", sec_heading))
    t_nfr = Table([
        [Paragraph("ID", th), Paragraph("Category", th), Paragraph("Specification", th)],
        [Paragraph("NFR-01", tc), Paragraph("Performance", tc), Paragraph("Extraction under 2.5s; deterministic tax computation under 50ms; report generation under 1.2s.", tc)],
        [Paragraph("NFR-02", tc), Paragraph("Accuracy", tc), Paragraph("100% deterministic statutory precision; 0% arithmetic hallucination; exact Section 288A/B rounding.", tc)],
        [Paragraph("NFR-03", tc), Paragraph("Security", tc), Paragraph("Session isolation via client-side tokens; no permanent storage of unencrypted financial identity data.", tc)],
        [Paragraph("NFR-04", tc), Paragraph("Reliability", tc), Paragraph("Resilient regex fallback if external LLM API is unavailable; graceful error handling on malformed files.", tc)],
        [Paragraph("NFR-05", tc), Paragraph("Usability", tc), Paragraph("High contrast accessible UI, Three.js WebGL visual feedback, clear breakdown tables, responsive layout.", tc)],
        [Paragraph("NFR-06", tc), Paragraph("Maintainability", tc), Paragraph("Decoupled statutory tax configurations in config.py; independent tax engine classes per form.", tc)],
    ], colWidths=[50, 95, 315])
    t_nfr.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 5: Non-Functional Requirements</b>", caption))
    story.append(t_nfr)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 14: DATA & INTERFACE REQUIREMENTS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.1.11 External Interface Requirements", sec_heading))
    story.append(Paragraph("• <b>User Interface:</b> React 18 SPA with Tailwind CSS, Lucide icons, and Three.js WebGL GridScan shader background.", bullet))
    story.append(Paragraph("• <b>Software Interfaces:</b> FastAPI REST API (HTTP JSON & multipart/form-data), SQLite in WAL mode, NVIDIA NIM REST API.", bullet))
    story.append(Paragraph("• <b>Communication Protocol:</b> HTTPS / HTTP between browser and application server.", bullet))
    story.append(Spacer(1, 6))

    story.append(Paragraph("3.1.13 Data Requirements & Financial Heads", sec_heading))
    t_data_req = Table([
        [Paragraph("Field Name", th), Paragraph("Data Type", th), Paragraph("Mandatory", th), Paragraph("Description & Validation Rules", th)],
        [Paragraph("pan", tc), Paragraph("String", tc), Paragraph("Yes", tc), Paragraph("10-character PAN adhering to [A-Z]{5}[0-9]{4}[A-Z].", tc)],
        [Paragraph("name", tc), Paragraph("String", tc), Paragraph("Yes", tc), Paragraph("Taxpayer full name as stated on filing acknowledgment.", tc)],
        [Paragraph("assessment_year", tc), Paragraph("String", tc), Paragraph("Yes", tc), Paragraph("AY format '2025-26' or '2026-27'.", tc)],
        [Paragraph("gross_salary", tc), Paragraph("Decimal", tc), Paragraph("Yes", tc), Paragraph("Total gross salary before standard deduction u/s 16(ia).", tc)],
        [Paragraph("deductions_80c", tc), Paragraph("Decimal", tc), Paragraph("No", tc), Paragraph("Life insurance, PPF, ELSS (capped at ₹1,50,000 u/s 80CCE).", tc)],
        [Paragraph("deductions_80d", tc), Paragraph("Decimal", tc), Paragraph("No", tc), Paragraph("Health insurance premium u/s 80D (capped at ₹25k/₹50k).", tc)],
        [Paragraph("vda_income", tc), Paragraph("Decimal", tc), Paragraph("No", tc), Paragraph("Virtual Digital Assets (crypto) gains taxed flat at 30% u/s 115BBH.", tc)],
        [Paragraph("tds_total", tc), Paragraph("Decimal", tc), Paragraph("Yes", tc), Paragraph("Total Tax Deducted at Source credited against final liability.", tc)],
    ], colWidths=[90, 60, 60, 250])
    t_data_req.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 6: Extracted Financial Data Fields</b>", caption))
    story.append(t_data_req)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 15: INFORMATION COLLECTION & ARCHITECTURE OVERVIEW
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.2 Information Collection", sec_heading))
    story.append(Paragraph(
        "To establish an authoritative statutory baseline, diverse information gathering techniques were evaluated:",
        body
    ))
    t_info = Table([
        [Paragraph("Method", th), Paragraph("Description", th), Paragraph("Advantages", th), Paragraph("Status", th)],
        [Paragraph("Statutory Legal Analysis", tc), Paragraph("Review of Income Tax Act 1961, Finance Acts 2020-2024, and CBDT circulars.", tc), Paragraph("Authoritative, mathematically rigorous, defines exact slab rates.", tc), Paragraph("Primary", tc)],
        [Paragraph("Sample Document Study", tc), Paragraph("Analysis of actual ITR-1, ITR-2, and ITR-4 acknowledgment PDFs and Form 16.", tc), Paragraph("Reveals real-world OCR layouts, table structures, and edge cases.", tc), Paragraph("Primary", tc)],
        [Paragraph("CA Practitioner Interviews", tc), Paragraph("Consultation with practicing Chartered Accountants on audit computation formats.", tc), Paragraph("Defined required CA computation note layout and rounding conventions.", tc), Paragraph("Supporting", tc)],
        [Paragraph("Prototyping", tc), Paragraph("Building small test parsers for pdfplumber and NVIDIA NIM LLM prompt templates.", tc), Paragraph("Validated JSON output schema and verified regex fallbacks.", tc), Paragraph("Iterative", tc)],
    ], colWidths=[110, 140, 160, 50])
    t_info.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 7: Information gathering methods and selection rationale</b>", caption))
    story.append(t_info)
    story.append(Spacer(1, 8))
    story.append(Paragraph("3.3 System Architecture Overview", sec_heading))
    story.append(Paragraph(
        "AITR is structured into four distinct layers: Presentation (React + Three.js), API Routing (FastAPI), Service Execution "
        "(Extractor & Tax Engines), and Persistence (SQLite / `/tmp` serverless storage). The next section presents the formal class hierarchy.",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 16: FIGURE 3.1: CLASS DIAGRAM (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.3.1 Object-Oriented Class Hierarchy", sec_heading))
    story.append(Paragraph(
        "The backend calculation engine employs an object-oriented architecture rooted in the abstract <code>BaseTaxEngine</code>, "
        "subclassed into specialized engines for ITR-1, ITR-2 (with Section 115BBH VDA segregation), and ITR-4 (presumptive 44AD/ADA). "
        "Report generators similarly implement the abstract <code>ReportService</code>.",
        body
    ))
    story.append(Spacer(1, 10))
    arch_img = os.path.join(diagrams_dir, "class_diag.png")
    if os.path.exists(arch_img):
        story.append(centered_img(arch_img, 460, 145))
        story.append(Paragraph("Figure 3.1: Object-Oriented Backend Architecture and Engine Inheritance Hierarchy", caption))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "This polymorphic structure ensures future tax amendments can be incorporated by adding or modifying engine modules "
        "without disrupting the FastAPI routing or database persistence layers.",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 17: FIGURE 3.2: CHEN'S ER DIAGRAM (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.4 Classical Chen's Entity-Relationship (ER) Diagram", sec_heading))
    story.append(Paragraph(
        "Conforming to standard DBMS academic modeling conventions, the schema encompasses 5 relational entities. "
        "<b>Rectangles</b> depict Entity sets (`SESSION`, `DOCUMENT`, `EXTRACTED_DATA`, `COMPUTATION`, `REPORT`), "
        "<b>Diamonds</b> depict Relationships with cardinalities (1:1, 1:N), and <b>Ovals</b> depict individual Attributes with Primary Keys underlined:",
        body
    ))
    story.append(Spacer(1, 8))
    er_img = os.path.join(diagrams_dir, "er_chen.png")
    if os.path.exists(er_img):
        story.append(centered_img(er_img, 440, 375))
        story.append(Paragraph("Figure 3.2: Classical Chen's Entity-Relationship (ER) Diagram (Rectangles, Diamonds, Ovals)", caption))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 18: FIGURE 3.3: USE CASE DIAGRAM (CENTERED) & TABLE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.5 Use Case Diagram & Main Use Case Descriptions", sec_heading))
    story.append(Paragraph(
        "The use case diagram models the operational boundaries between external actors (Individual Taxpayer, CA) and system processes:",
        body
    ))
    story.append(Spacer(1, 6))
    uc_img = os.path.join(diagrams_dir, "usecase.png")
    if os.path.exists(uc_img):
        story.append(centered_img(uc_img, 360, 320))
        story.append(Paragraph("Figure 3.3: Use Case Diagram for AITR System Actors and Operations", caption))
    story.append(Spacer(1, 6))

    t_uc_desc = Table([
        [Paragraph("Item", th), Paragraph("Use Case: Upload & Ingest Document", th), Paragraph("Use Case: Calculate Dual-Regime Tax", th)],
        [Paragraph("Actor", tc), Paragraph("Taxpayer / Chartered Accountant", tc), Paragraph("Taxpayer / Chartered Accountant", tc)],
        [Paragraph("Precondition", tc), Paragraph("Valid user session established; PDF/DOCX file ready.", tc), Paragraph("Document uploaded and financial heads reviewed.", tc)],
        [Paragraph("Main Flow", tc), Paragraph("1. Select file; 2. Validate format; 3. Store file; 4. Run regex+LLM extraction.", tc), Paragraph("1. Select AY; 2. Trigger tax engines; 3. Compare Old vs New; 4. Recommend optimal.", tc)],
        [Paragraph("Postcondition", tc), Paragraph("Document and extracted JSON stored in DB.", tc), Paragraph("Computation record saved; UI displays breakdown.", tc)],
    ], colWidths=[70, 195, 195])
    t_uc_desc.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 8: Core Use Case Specifications</b>", caption))
    story.append(t_uc_desc)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 19: FIGURES 3.4 & 3.5: ACTIVITY DIAGRAMS (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.6 Activity Diagrams: Ingestion & Tax Calculation", sec_heading))
    story.append(Paragraph(
        "Activity diagrams represent the step-by-step operational workflows of document ingestion and dual-regime tax calculation:",
        body
    ))
    story.append(Spacer(1, 8))
    act_up = os.path.join(diagrams_dir, "activity_upload.png")
    if os.path.exists(act_up):
        story.append(centered_img(act_up, 460, 52))
        story.append(Paragraph("Figure 3.4: Activity Diagram: Document Ingestion, Text Validation & Extraction Workflow", caption))
    story.append(Spacer(1, 15))

    act_comp = os.path.join(diagrams_dir, "activity_compute.png")
    if os.path.exists(act_comp):
        story.append(centered_img(act_comp, 460, 81))
        story.append(Paragraph("Figure 3.5: Activity Diagram: Dual-Regime Tax Computation & Optimal Recommendation Workflow", caption))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "Both workflows incorporate branching decision diamonds ensuring malformed documents or extreme financial outliers are gracefully caught.",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 20: FIGURES 3.6 & 3.7: DATA FLOW DIAGRAMS (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.7 Data Flow Diagrams (Level 0 and Level 1)", sec_heading))
    story.append(Paragraph("<b>Level 0 DFD (Context Diagram):</b> Defines boundaries between external actors and centralized system:", body))
    story.append(Spacer(1, 6))
    dfd0_img = os.path.join(diagrams_dir, "dfd0.png")
    if os.path.exists(dfd0_img):
        story.append(centered_img(dfd0_img, 450, 52))
        story.append(Paragraph("Figure 3.6: Level 0 DFD - Context Diagram", caption))
    story.append(Spacer(1, 14))

    story.append(Paragraph("<b>Level 1 DFD (Subsystem Decomposition):</b> Traces data flows across the 5 core processes and 4 data stores:", body))
    story.append(Spacer(1, 6))
    dfd1_img = os.path.join(diagrams_dir, "dfd1.png")
    if os.path.exists(dfd1_img):
        story.append(centered_img(dfd1_img, 450, 280))
        story.append(Paragraph("Figure 3.7: Level 1 DFD - Subsystem Decomposition and Data Store Operations", caption))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 21: FIGURE 3.8: SEQUENCE DIAGRAM (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.8 Sequence Diagram: End-to-End Workflow", sec_heading))
    story.append(Paragraph(
        "The sequence diagram captures chronological interactions between Taxpayer, React UI, FastAPI controllers, "
        "database, extraction engine, tax calculation engine, and ReportLab report generator:",
        body
    ))
    story.append(Spacer(1, 8))
    seq_img = os.path.join(diagrams_dir, "sequence_diag.png")
    if os.path.exists(seq_img):
        story.append(centered_img(seq_img, 450, 310))
        story.append(Paragraph("Figure 3.8: Sequence Diagram: Document Ingestion, Verification, Computation, and Reporting", caption))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 22: MODULES BREAKDOWN & TECH STACK
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.9 Description of Various Modules", sec_heading))
    t_mod = Table([
        [Paragraph("No.", th), Paragraph("Module Name", th), Paragraph("Description & Functional Scope", th), Paragraph("Related FRs", th)],
        [Paragraph("1", tc), Paragraph("Taxpayer Session Portal", tc), Paragraph("Manages persistent browser sessions, linking filings to taxpayer identity.", tc), Paragraph("FR-001", tc)],
        [Paragraph("2", tc), Paragraph("Ingestion & Validation", tc), Paragraph("Validates file format (PDF/DOCX <= 10MB), checks selectable text, stores file.", tc), Paragraph("FR-002", tc)],
        [Paragraph("3", tc), Paragraph("Hybrid Extractor", tc), Paragraph("Parses text tables, executes Regex rules + NVIDIA NIM LLM inference.", tc), Paragraph("FR-003", tc)],
        [Paragraph("4", tc), Paragraph("Review & Correction UI", tc), Paragraph("Displays parsed entities, allows user overrides, updates reviewed JSON.", tc), Paragraph("FR-004", tc)],
        [Paragraph("5", tc), Paragraph("Multi-AY Configuration", tc), Paragraph("Switches statutory slab parameters between AY 2025-26 and 2026-27.", tc), Paragraph("FR-005", tc)],
        [Paragraph("6", tc), Paragraph("Deterministic Tax Engine", tc), Paragraph("Executes Old & New Regime slab logic, Section 87A rebate, and 4% cess.", tc), Paragraph("FR-006, 007", tc)],
        [Paragraph("7", tc), Paragraph("Statutory Rounding Unit", tc), Paragraph("Applies Section 288A (nearest ₹10) and Section 288B (nearest rupee) rounding.", tc), Paragraph("FR-008", tc)],
        [Paragraph("8", tc), Paragraph("CA Audit Report Generator", tc), Paragraph("Compiles official Statement of Total Income in PDF and DOCX formats.", tc), Paragraph("FR-009", tc)],
    ], colWidths=[25, 125, 240, 70])
    t_mod.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 9: System Modules Description</b>", caption))
    story.append(t_mod)
    story.append(Spacer(1, 8))

    story.append(Paragraph("3.10 System Development Tools & Tech Stack Justification", sec_heading))
    story.append(Paragraph("• <b>Python 3.10+ / FastAPI:</b> Asynchronous high-concurrency API framework ensuring sub-50ms execution latency.", bullet))
    story.append(Paragraph("• <b>React 18 / Vite:</b> High-speed client framework with modular state management and responsive styling via Tailwind CSS.", bullet))
    story.append(Paragraph("• <b>Three.js WebGL:</b> Renders interactive GridScan background shader that visually tracks system extraction speed.", bullet))
    story.append(Paragraph("• <b>SQLite in WAL Mode:</b> Lightweight, zero-configuration ACID database with serverless `/tmp` directory dynamic bindings.", bullet))
    story.append(Paragraph("• <b>ReportLab & python-docx:</b> Industry-standard libraries for pixel-perfect PDF and native Microsoft Word generation.", bullet))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 23: TRACEABILITY & RISKS
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("3.11 Traceability and Acceptance Criteria (Summary)", sec_heading))
    t_trace = Table([
        [Paragraph("Requirement", th), Paragraph("Verification Method", th), Paragraph("Acceptance Criterion", th)],
        [Paragraph("FR-001, NFR-03", tc), Paragraph("Session inspection", tc), Paragraph("Session ID and PAN persisted; records isolated per session.", tc)],
        [Paragraph("FR-002, NFR-01", tc), Paragraph("File upload test", tc), Paragraph("Valid files accepted under 2s; scanned images rejected.", tc)],
        [Paragraph("FR-003, NFR-02", tc), Paragraph("Extraction test suite", tc), Paragraph("PAN, salary, and TDS extracted; regex fallback works.", tc)],
        [Paragraph("FR-005, FR-006", tc), Paragraph("Hand-calculated test cases", tc), Paragraph("Tax liability exactly matches CBDT official portal output.", tc)],
        [Paragraph("FR-007", tc), Paragraph("VDA test filing", tc), Paragraph("Crypto gains taxed flat at 30% + 4% cess u/s 115BBH.", tc)],
        [Paragraph("FR-008", tc), Paragraph("Rounding test suite", tc), Paragraph("Income rounded to nearest ₹10; tax rounded to nearest rupee.", tc)],
        [Paragraph("FR-009", tc), Paragraph("Report download test", tc), Paragraph("PDF and DOCX download with complete CA statement.", tc)],
    ], colWidths=[90, 130, 240])
    t_trace.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 10: Traceability and Acceptance Criteria Matrix</b>", caption))
    story.append(t_trace)
    story.append(Spacer(1, 8))

    story.append(Paragraph("3.12 Project Risks and Mitigation Strategies", sec_heading))
    t_risk = Table([
        [Paragraph("Risk Event", th), Paragraph("Severity", th), Paragraph("Proactive Mitigation Strategy", th)],
        [Paragraph("Budget tax slabs change annually", tc), Paragraph("High", tc), Paragraph("Isolate slabs and limits in config.py; enable dynamic AY switching.", tc)],
        [Paragraph("NVIDIA LLM API timeout / outage", tc), Paragraph("High", tc), Paragraph("Implement resilient deterministic regex primary extraction fallback.", tc)],
        [Paragraph("Scanned / password-protected PDFs", tc), Paragraph("Medium", tc), Paragraph("Validate selectable text on upload; provide clear error prompt.", tc)],
        [Paragraph("Floating-point rounding discrepancies", tc), Paragraph("Medium", tc), Paragraph("Enforce statutory Decimal rounding per Section 288A/B.", tc)],
        [Paragraph("Serverless read-only filesystem crash", tc), Paragraph("High", tc), Paragraph("Bind dynamic /tmp storage for databases, uploads, and reports.", tc)],
    ], colWidths=[130, 60, 270])
    t_risk.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 11: Project Risks and Mitigation Register</b>", caption))
    story.append(t_risk)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 24: CHAPTER 4: SYSTEM IMPLEMENTATION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 4: SYSTEM IMPLEMENTATION", chap_heading))
    story.append(Paragraph(
        "This chapter outlines the practical implementation environment, hardware/software specifications, project codebase structure, "
        "and operation manual with live user interface screenshots.",
        body
    ))
    story.append(Paragraph("4.1 Hardware Requirements", sec_heading))
    t_hw = Table([
        [Paragraph("Component", th), Paragraph("Minimum Requirement", th), Paragraph("Recommended Specification", th)],
        [Paragraph("Processor", tc), Paragraph("Dual-core 2.0 GHz or equivalent", tc), Paragraph("Quad-core Intel Core i5 / AMD Ryzen 5 or higher", tc)],
        [Paragraph("RAM", tc), Paragraph("4 GB RAM", tc), Paragraph("8 GB - 16 GB RAM", tc)],
        [Paragraph("Storage", tc), Paragraph("2 GB free disk space", tc), Paragraph("SSD with 5 GB free disk space", tc)],
        [Paragraph("Display", tc), Paragraph("1280 x 720 resolution", tc), Paragraph("1920 x 1080 Full HD (WebGL 2.0 capable GPU)", tc)],
    ], colWidths=[110, 175, 175])
    t_hw.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 12: Hardware specifications</b>", caption))
    story.append(t_hw)
    story.append(Spacer(1, 8))

    story.append(Paragraph("4.2 Software Requirements", sec_heading))
    t_sw = Table([
        [Paragraph("Component", th), Paragraph("Requirement & Technology Selected", th)],
        [Paragraph("Operating System", tc), Paragraph("Windows 10/11, Linux (Ubuntu 22.04+), or macOS.", tc)],
        [Paragraph("Backend Runtime", tc), Paragraph("Python 3.10+ with FastAPI, Uvicorn, SQLAlchemy, Pydantic v2.", tc)],
        [Paragraph("Frontend Tooling", tc), Paragraph("Node.js 20+ with Vite, React 18, Tailwind CSS, Lucide React icons, Three.js.", tc)],
        [Paragraph("Database", tc), Paragraph("SQLite3 with WAL mode; dynamic /tmp path for serverless cloud execution.", tc)],
        [Paragraph("Deployment Platform", tc), Paragraph("Vercel Serverless Platform with vercel.json multi-build configuration.", tc)],
    ], colWidths=[130, 330])
    t_sw.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 13: Software requirements</b>", caption))
    story.append(t_sw)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 25: FIGURE 4.1: PROJECT STRUCTURE TREE (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("4.3 Project Codebase Structure", sec_heading))
    story.append(Paragraph(
        "The project follows a clean separation of concerns. The backend houses database models, routers, tax engines, "
        "and document parsers, while the frontend manages React components, pages, and WebGL shaders:",
        body
    ))
    story.append(Spacer(1, 6))
    tree_img = os.path.join(assets_dir, "project_structure.png")
    if os.path.exists(tree_img):
        story.append(centered_img(tree_img, 360, 410))
        story.append(Paragraph("Figure 4.1: Comprehensive AITR Project Directory Structure and Architecture Map", caption))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 26: SCREENSHOTS: SESSION PORTAL & UPLOAD SCREEN (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("4.4 Operation Manual & User Interface Screenshots", sec_heading))
    story.append(Paragraph(
        "The following screenshots document the live execution of the AITR application across its primary operational states:",
        body
    ))

    # Screenshot: Session Modal (Centered)
    sess_img = os.path.join(assets_dir, "screen_taxpayer_session.png")
    if os.path.exists(sess_img):
        story.append(Paragraph("4.4.1 Taxpayer Session Portal (Authentication & Identity Binding)", subsec_heading))
        story.append(centered_img(sess_img, 220, 250))
        story.append(Paragraph("Figure 4.2: Taxpayer Session Portal Modal for Dedicated Computation Sessions", caption))

    # Screenshot: Upload Screen (Centered)
    up_img = os.path.join(assets_dir, "screen_upload.png")
    if os.path.exists(up_img):
        story.append(Paragraph("4.4.2 Document Ingestion Interface with Three.js WebGL GridScan Background", subsec_heading))
        story.append(centered_img(up_img, 380, 225))
        story.append(Paragraph("Figure 4.3: Document Ingestion Interface with Three.js WebGL GridScan Shader Background", caption))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 27: SCREENSHOTS: RESULTS & CA STATEMENT (CENTERED)
    # ──────────────────────────────────────────────────────────────────────────
    # Screenshot: Results Screen (Centered)
    res_img = os.path.join(assets_dir, "screen_results.png")
    if os.path.exists(res_img):
        story.append(Paragraph("4.4.3 Dual-Regime Tax Computation Results & Recommendation", subsec_heading))
        story.append(Paragraph(
            "Displays side-by-side comparative cards for the Old Tax Regime and Section 115BAC New Tax Regime for taxpayer SHAKEV ULLAH KHAN (AY 2025-26):",
            body
        ))
        story.append(centered_img(res_img, 380, 265))
        story.append(Paragraph("Figure 4.4: Dual-Regime Comparative Evaluation Screen with Automated Recommendation Banner", caption))

    # Screenshot: CA Report (Centered)
    ca_img = os.path.join(assets_dir, "screen_ca_report.png")
    if os.path.exists(ca_img):
        story.append(Paragraph("4.4.4 Chartered Accountant (CA) Computation Audit Statement", subsec_heading))
        story.append(centered_img(ca_img, 260, 290))
        story.append(Paragraph("Figure 4.5: Generated CA Audit Note / Computation of Total Income (PDF Report Export)", caption))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 28: API ENDPOINTS TABLE
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("4.5 Principal Backend API Endpoints", sec_heading))
    t_api_data = [
        [Paragraph("HTTP Method", th), Paragraph("Endpoint", th), Paragraph("Purpose & Description", th)],
        [Paragraph("POST", tc), Paragraph("/api/upload", tc), Paragraph("Validates file structure (PDF/DOCX <= 10MB) and records DocumentModel.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/extract/{doc_id}", tc), Paragraph("Executes Regex + NVIDIA NIM LLM entity extraction; stores ExtractedDataModel.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/review/{ext_id}", tc), Paragraph("Retrieves extracted financial fields for human-in-the-loop review.", tc)],
        [Paragraph("PUT", tc), Paragraph("/api/review/{ext_id}", tc), Paragraph("Updates reviewed JSON following manual user overrides and corrections.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/compute/{ext_id}", tc), Paragraph("Runs deterministic tax engine for Old & New Regimes; records ComputationModel.", tc)],
        [Paragraph("POST", tc), Paragraph("/api/reports/generate/{id}/{fmt}", tc), Paragraph("Compiles official CA audit report in PDF (ReportLab) or DOCX format.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/reports/download/{id}", tc), Paragraph("Streams generated audit report file to the client for download.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/history/{session_id}", tc), Paragraph("Returns chronological list of documents, computations, and reports per session.", tc)],
        [Paragraph("GET", tc), Paragraph("/api/health", tc), Paragraph("Health check returning system status and current active assessment year.", tc)],
    ]
    t_api = Table(t_api_data, colWidths=[65, 145, 250])
    t_api.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.black),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.black),
        ('TOPPADDING', (0,0), (-1,-1), 4.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4.5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 14: Main Backend REST API Endpoints</b>", caption))
    story.append(t_api)
    story.append(Spacer(1, 10))

    story.append(Paragraph("4.6 Output Reports Description", sec_heading))
    story.append(Paragraph("• <b>CA Audit Statement (PDF):</b> Non-editable vector PDF compiled with ReportLab, featuring statutory notes, Section 288A rounding, and regime comparison.", bullet))
    story.append(Paragraph("• <b>CA Audit Statement (DOCX):</b> Editable Microsoft Word document for tax consultants who need to append custom annexures or notes.", bullet))
    story.append(Paragraph("• <b>Interactive Dashboard View:</b> Real-time browser representation showing side-by-side liability cards and refund indicators.", bullet))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 29: CHAPTER 5: RESULT AND DISCUSSION
    # ──────────────────────────────────────────────────────────────────────────
    story.append(Paragraph("Chapter 5: RESULT AND DISCUSSION", chap_heading))
    story.append(Paragraph("5.1 Interpretation of Results & Statutory Tax Slabs", sec_heading))
    story.append(Paragraph(
        "The system evaluates taxpayer documents against the statutory provisions of the Indian Income Tax Act, 1961. "
        "The deterministic calculation engine implements the following slab parameters for AY 2025-26 and 2026-27:",
        body
    ))
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
    story.append(Paragraph("<b>Table 15: Statutory Tax Slab Matrix for Dual Regime Assessment</b>", caption))
    story.append(t_sl)
    story.append(Spacer(1, 8))

    story.append(Paragraph("5.1.2 Dual-Regime Recommendation Logic", subsec_heading))
    story.append(Paragraph(
        "$$\\text{Recommended Regime} = \\begin{cases} "
        "\\text{\"NEW\"}, & \\text{if } \\text{Tax}_{\\text{New}} < \\text{Tax}_{\\text{Old}} \\\\ "
        "\\text{\"OLD\"}, & \\text{if } \\text{Tax}_{\\text{Old}} < \\text{Tax}_{\\text{New}} \\\\ "
        "\\text{\"EQUAL\"}, & \\text{if } \\text{Tax}_{\\text{New}} = \\text{Tax}_{\\text{Old}} "
        "\\end{cases}$$",
        body
    ))
    story.append(Paragraph(
        "When liabilities are equal (e.g. for low-income earners eligible for full Section 87A rebate), the system explicitly displays "
        "the <b>EQUAL REGIME</b> banner, demonstrating complete neutrality and transparency.",
        body
    ))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 30: TEST SCENARIOS TC-01 TO TC-12
    # ──────────────────────────────────────────────────────────────────────────
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
    story.append(Paragraph("<b>Table 17: Functional Test Suite Execution Evidence (TC-01 to TC-12)</b>", caption))
    story.append(t_tc)
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 31: COMPARISON WITH EXISTING SYSTEM & APPLICATION AREAS
    # ──────────────────────────────────────────────────────────────────────────
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
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
    ]))
    story.append(Paragraph("<b>Table 18: Comparative evaluation: Manual Process vs. Proposed AITR System</b>", caption))
    story.append(t_comp)
    story.append(Spacer(1, 8))

    story.append(Paragraph("5.4 Practical Application Areas", sec_heading))
    story.append(Paragraph("• <b>Individual Salaried Taxpayers:</b> Enables quick verification of Form 16 and optimization between Old and New Regimes.", bullet))
    story.append(Paragraph("• <b>Chartered Accountant Firms:</b> Provides an auditable transcription and calculation tool, speeding up client filing workflows.", bullet))
    story.append(Paragraph("• <b>Cryptocurrency Investors:</b> Segregates and computes complex Section 115BBH VDA liabilities without tedious manual tracking.", bullet))
    story.append(Paragraph("• <b>Small Business Owners & Freelancers:</b> Streamlines Section 44AD and 44ADA presumptive filings with minimal inputs.", bullet))
    story.append(PageBreak())

    # ──────────────────────────────────────────────────────────────────────────
    # PAGE 32: CHAPTER 6: CONCLUSION & REFERENCES
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

    story.append(Paragraph("6.2 Limitations & Future Scope", sec_heading))
    story.append(Paragraph("• Direct OCR scanning of physical receipts and official CBDT JSON filing schema integrations represent logical next milestones.", bullet))

    story.append(Spacer(1, 6))
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
    build_academic_30p_pdf(out_pdf, assets, diagrams)
