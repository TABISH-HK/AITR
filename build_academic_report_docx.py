"""
Compile Comprehensive Academic Project Report (Chapters 1 to 6) into Microsoft Word (.docx) format using python-docx.
Strictly matches the structure, tables, and figures of the academic report sample.
"""
import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=60, bottom=60, left=100, right=100):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def add_academic_heading(doc, text, level=1):
    h = doc.add_paragraph()
    if level == 1:
        h.alignment = WD_ALIGN_PARAGRAPH.CENTER
        h.paragraph_format.space_before = Pt(18)
        h.paragraph_format.space_after = Pt(12)
        r = h.add_run(text)
        r.font.name = "Times New Roman"
        r.font.size = Pt(15)
        r.font.bold = True
        r.font.color.rgb = RGBColor(0, 0, 0)
    elif level == 2:
        h.paragraph_format.space_before = Pt(12)
        h.paragraph_format.space_after = Pt(6)
        r = h.add_run(text)
        r.font.name = "Times New Roman"
        r.font.size = Pt(12)
        r.font.bold = True
        r.font.color.rgb = RGBColor(0, 0, 0)
    elif level == 3:
        h.paragraph_format.space_before = Pt(8)
        h.paragraph_format.space_after = Pt(4)
        r = h.add_run(text)
        r.font.name = "Times New Roman"
        r.font.size = Pt(10.5)
        r.font.bold = True
        r.font.color.rgb = RGBColor(30, 41, 59)
    return h

def add_body_p(doc, text):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.line_spacing = 1.15
    r = p.add_run(text)
    r.font.name = "Times New Roman"
    r.font.size = Pt(10)
    r.font.color.rgb = RGBColor(0, 0, 0)
    return p

def add_bullet_p(doc, text):
    p = doc.add_paragraph(style='List Bullet')
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.line_spacing = 1.15
    r = p.add_run(text)
    r.font.name = "Times New Roman"
    r.font.size = Pt(10)
    r.font.color.rgb = RGBColor(0, 0, 0)
    return p

def add_fig_caption(doc, text):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(10)
    r = p.add_run(text)
    r.font.name = "Times New Roman"
    r.font.size = Pt(9)
    r.font.italic = True
    r.font.color.rgb = RGBColor(71, 85, 105)
    return p

def build_academic_docx(docx_path: str, assets_dir: str, diagrams_dir: str):
    doc = Document()

    for s in doc.sections:
        s.top_margin = Inches(0.75)
        s.bottom_margin = Inches(0.75)
        s.left_margin = Inches(0.75)
        s.right_margin = Inches(0.75)

    # ──────────────────────────────────────────────────────────────────────────
    # COVER PAGE
    # ──────────────────────────────────────────────────────────────────────────
    p_inst = doc.add_paragraph()
    p_inst.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_inst.paragraph_format.space_before = Pt(20)
    r_inst = p_inst.add_run("DEPARTMENT OF COMPUTER SCIENCE\nALIGARH MUSLIM UNIVERSITY, ALIGARH (U.P.), INDIA\n")
    r_inst.font.name = "Times New Roman"
    r_inst.font.size = Pt(14)
    r_inst.font.bold = True
    r_inst.font.color.rgb = RGBColor(15, 23, 42)

    p_badge = doc.add_paragraph()
    p_badge.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_badge = p_badge.add_run("MCA MINI PROJECT REPORT (2026–2027)\n")
    r_badge.font.name = "Times New Roman"
    r_badge.font.size = Pt(11)
    r_badge.font.bold = True
    r_badge.font.color.rgb = RGBColor(3, 105, 161)

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_title = p_title.add_run("AI-DRIVEN INCOME TAX RETURN (ITR)\nCOMPUTATION SYSTEM (AITR)\n")
    r_title.font.name = "Times New Roman"
    r_title.font.size = Pt(21)
    r_title.font.bold = True
    r_title.font.color.rgb = RGBColor(30, 58, 138)

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_sub = p_sub.add_run("A Full-Stack Intelligent Assessment System with Deterministic Multi-Regime Computation & Semantic LLM Extraction\n")
    r_sub.font.name = "Times New Roman"
    r_sub.font.size = Pt(10.5)
    r_sub.font.color.rgb = RGBColor(71, 85, 105)

    # Metadata Table
    t_meta = doc.add_table(rows=8, cols=2)
    t_meta.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_rows = [
        ("Degree Program:", "Master of Computer Applications (MCA)"),
        ("Course Requirement:", "MCA Mini Project (Semester Curriculum)"),
        ("Academic Session:", "2026 – 2027"),
        ("Submitted By:", "Tabish Hasan (Candidate)"),
        ("Roll / Enrolment No:", "25CAMSA156"),
        ("Institution:", "Department of Computer Science, AMU, Aligarh"),
        ("Project Repository:", "https://github.com/TABISH-HK/AITR"),
        ("Live Deployment:", "https://aitr-drab.vercel.app/"),
    ]
    for idx, (lbl, val) in enumerate(meta_rows):
        row = t_meta.rows[idx]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.2)
        c1.width = Inches(4.3)
        set_cell_background(c0, "F8FAFC")
        set_cell_background(c1, "F8FAFC")
        set_cell_margins(c0, 50, 50, 100, 100)
        set_cell_margins(c1, 50, 50, 100, 100)
        
        r0 = c0.paragraphs[0].add_run(lbl)
        r0.font.name = "Times New Roman"
        r0.font.size = Pt(9.5)
        r0.font.bold = True
        r0.font.color.rgb = RGBColor(30, 41, 59)

        r1 = c1.paragraphs[0].add_run(val)
        r1.font.name = "Times New Roman"
        r1.font.size = Pt(9.5)
        if "Tabish" in val or "25CAMSA156" in val:
            r1.font.bold = True
        r1.font.color.rgb = RGBColor(30, 41, 59)

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 1: INTRODUCTION
    # ──────────────────────────────────────────────────────────────────────────
    add_academic_heading(doc, "Chapter 1: INTRODUCTION", level=1)
    add_body_p(doc, 
        "Income Tax Returns (ITR) in India contain vital statutory financial information such as Permanent Account Number (PAN), "
        "Aadhaar identifier, Gross Salary, Chapter VI-A deductions (under Sections 80C, 80D, 80TTA), capital gains from equities and "
        "Virtual Digital Assets (VDA / cryptocurrency u/s 115BBH), presumptive business turnover u/s 44AD/44ADA, and Tax Deducted at Source (TDS). "
        "Manual verification of large numbers of diverse financial acknowledgements, salary certificates (Form 16), and capital gains statements is "
        "time-consuming and makes it difficult to identify, in a consistent and repeatable way, arithmetic calculation mismatches, incorrect standard deductions, "
        "misapplied Section 87A rebates, and optimal tax regime choices under evolving Union Budgets."
    )
    add_body_p(doc, 
        "The AI-Driven Income Tax Return Computation System (AITR) is a web-based application for structured tax document ingestion "
        "and deterministic dual-regime assessment. It accepts taxpayer financial data through digital PDF and Word (DOCX) files, validates file structures, "
        "executes semantic entity extraction through NVIDIA NIM Large Language Model reasoning alongside high-precision regular expression fallback rules, "
        "computes exact statutory tax liabilities under both the progressive Old Tax Regime and the Section 115BAC New Tax Regime for Assessment Years (AY) 2025-26 "
        "and 2026-27, detects optimal regime savings, and provides explainable results and downloadable Chartered Accountant-standard audit reports. "
        "The project is built with Python, FastAPI, React 18 with Vite, Three.js WebGL, SQLite, and ReportLab, and focuses on deterministic statutory verification "
        "rather than unconstrained machine-learning arithmetic."
    )

    add_academic_heading(doc, "1.1 Literature Survey", level=2)
    add_academic_heading(doc, "a) Previous related work (chronological)", level=3)

    t1 = doc.add_table(rows=8, cols=3)
    t1.alignment = WD_TABLE_ALIGNMENT.CENTER
    t1_content = [
        ["Year", "Work / Technology", "Relevance to Project"],
        ["1961", "Income Tax Act, 1961 (Govt. of India)", "Primary statutory legislation governing direct taxation, taxable heads, exemptions, and tax computation."],
        ["2020", "Finance Act 2020: Introduction of Section 115BAC", "Introduced concessional New Tax Regime with revised tax slabs and forfeiture of specified deductions."],
        ["2022", "Finance Act 2022: Virtual Digital Assets (Sec 115BBH)", "Defined 30% flat taxation on crypto/NFT capital gains without deduction of expenses, verified by AITR."],
        ["2023", "Finance Act 2023: Default Status of New Tax Regime", "Made Section 115BAC the default tax regime and enhanced Section 87A rebate to ₹25,000 for income up to ₹7,00,000."],
        ["2024", "Union Budget 2024: Revision for AY 2025-26", "Increased Standard Deduction from ₹50,000 to ₹75,000 under New Regime and restructured tax slabs."],
        ["2024+", "NVIDIA NIM & Nemotron Reasoning Models", "Provides optimized, high-throughput LLM reasoning microservices for structured JSON financial extraction."],
        ["Ongoing", "Deterministic rule engines in tax software", "Ensures zero mathematical hallucination by delegating all arithmetic computation to deterministic code."],
    ]
    col_w1 = [Inches(0.8), Inches(2.2), Inches(3.5)]
    for r_idx, row_data in enumerate(t1_content):
        for c_idx, val in enumerate(row_data):
            cell = t1.rows[r_idx].cells[c_idx]
            cell.width = col_w1[c_idx]
            set_cell_margins(cell, 40, 40, 60, 60)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 1: Previous related work and its relevance")

    add_academic_heading(doc, "b) Organisation / domain profile", level=3)
    add_body_p(doc,
        "Direct taxation in India is administered by the Central Board of Direct Taxes (CBDT) under the Department of Revenue, Ministry of Finance. "
        "Every taxpayer is identified by a 10-character alphanumeric PAN. Resident individual taxpayers file returns using designated forms: "
        "ITR-1 (Sahaj) for salaried individuals with income up to ₹50 lakh, ITR-2 for individuals with capital gains or cryptocurrency transactions, and "
        "ITR-4 (Sugam) for small businesses and professionals electing presumptive taxation under Section 44AD/44ADA. "
        "The coexistence of two tax regimes requires taxpayers to evaluate both systems annually. These statutory provisions make income tax calculation "
        "exceptionally well-suited to deterministic, rule-based algorithmic verification."
    )

    add_academic_heading(doc, "1.2 Present State of the Art and Its Shortcomings", level=2)
    add_bullet_p(doc, "Manual verification requires inspecting Form 16, salary slips, and capital gains statements individually, resulting in high human error rates.")
    add_bullet_p(doc, "Generic conversational AI models (e.g. ChatGPT, Claude) frequently hallucinate arithmetic sums or misapply Indian tax slab boundaries.")
    add_bullet_p(doc, "Spreadsheet-based checking is repetitive and rarely gives consistent, explainable calculations for every deduction or crypto transaction.")
    add_bullet_p(doc, "Commercial tax software packages operate as closed black-boxes, hiding intermediate steps so taxpayers cannot see why a regime was recommended.")
    add_bullet_p(doc, "There is rarely a single unified dashboard providing real-time Old vs. New Regime comparisons and instant CA-standard audit documentation.")

    add_academic_heading(doc, "1.3 Realization of the Problem", level=2)
    add_body_p(doc,
        "The core problem is to provide a structured, repeatable, and mathematically verifiable mechanism for ingesting tax documents, "
        "extracting financial entities, evaluating liabilities under both Old and New Regimes according to CBDT statutory rules, and presenting "
        "explainable results with instant CA audit notes."
    )

    add_academic_heading(doc, "1.4 Introduction of the Work to Be Taken Up", level=2)
    add_body_p(doc,
        "The proposed work consists of a Python FastAPI backend with SQLite persistence, document ingestion (pdfplumber/python-docx), "
        "hybrid extraction (NVIDIA NIM LLM + rule-based regex), deterministic tax calculation engines (ITR-1, ITR-2, ITR-4), and CA report generation "
        "delivered through a React web interface with Tailwind CSS and a Three.js WebGL GridScan shader background."
    )

    add_academic_heading(doc, "1.5 Broad Outline of the Work (Chapter-wise)", level=2)
    add_bullet_p(doc, "Chapter 1: Introduction, background, current limitations, problem realization and project outline.")
    add_bullet_p(doc, "Chapter 2: Problem formulation, aspects, critical view, technical novelty and proposed method.")
    add_bullet_p(doc, "Chapter 3: Requirements, operational environment, architecture, UML/DFD/ER diagrams, traceability and risks.")
    add_bullet_p(doc, "Chapter 4: Implementation approach, codebase structure, operation manual with complete screenshots, and API endpoints.")
    add_bullet_p(doc, "Chapter 5: Testing strategy, representative test scenarios (TC-01 to TC-12), and comparative discussion.")
    add_bullet_p(doc, "Chapter 6: Constraints, limitations, future scope, conclusion and references.")

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 2: PROBLEM FORMULATION
    # ──────────────────────────────────────────────────────────────────────────
    add_academic_heading(doc, "Chapter 2: PROBLEM FORMULATION", level=1)
    add_academic_heading(doc, "2.1 Problem Definition", level=2)
    add_body_p(doc,
        "To design and develop a system that accepts structured and unstructured Indian ITR documents, validates document format and selectable text, "
        "extracts taxpayer particulars and income heads, checks tax consistency, computes exact statutory tax liabilities under Old and New Regimes across "
        "Assessment Years 2025-26 and 2026-27, and presents the results through a modern web interface with downloadable CA audit reports."
    )

    add_academic_heading(doc, "2.2 Various Aspects of the Problem", level=2)
    t2 = doc.add_table(rows=8, cols=2)
    t2.alignment = WD_TABLE_ALIGNMENT.CENTER
    t2_content = [
        ["Aspect", "Description"],
        ["Input aspect", "ITR acknowledgements and Form 16 are ingested via digital PDF and DOCX formats up to 10MB."],
        ["Extraction aspect", "PAN, Aadhaar, AY, salary, deductions, VDA gains, and TDS are extracted via Regex + NVIDIA NIM LLM."],
        ["Review aspect", "Interactive human-in-the-loop review allows verification and correction of extracted entities."],
        ["Tax calculation", "Standard deductions, slab rates, Chapter VI-A deductions, and 87A rebates are computed deterministically."],
        ["Special rates", "Virtual Digital Assets (u/s 115BBH @ 30%) and capital gains are segregated from regular income heads."],
        ["Statutory rounding", "Section 288A (nearest ₹10) and Section 288B (nearest rupee) rounding are strictly enforced."],
        ["Reporting", "Audit-grade CA Statement of Total Income is viewable on dashboard and exportable in PDF/DOCX."],
    ]
    for r_idx, row_data in enumerate(t2_content):
        for c_idx, val in enumerate(row_data):
            cell = t2.rows[r_idx].cells[c_idx]
            cell.width = Inches(1.8) if c_idx == 0 else Inches(4.7)
            set_cell_margins(cell, 40, 40, 60, 60)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 2: Aspects of the problem")

    add_academic_heading(doc, "2.3 Present System: Critical View", level=2)
    add_body_p(doc,
        "The existing manual approach depends on inspecting paper or PDF records and performing tax computations through spreadsheets. "
        "Such a process requires repeated calculations, depends heavily on operator attention, and rarely optimizes between Old and New Regimes. "
        "AITR automates data extraction while retaining full transparency, precision, and verifiable audit records."
    )

    add_academic_heading(doc, "2.4 Scientific/Technical Novelty and Need of the Work", level=2)
    add_bullet_p(doc, "Combines LLM semantic intelligence for text parsing with 100% deterministic Python calculation algorithms.")
    add_bullet_p(doc, "Dynamically reconfigures tax slabs and standard deduction rules between AY 2025-26 and AY 2026-27.")
    add_bullet_p(doc, "Accurately isolates Virtual Digital Assets (Crypto u/s 115BBH), taxing them flat at 30% plus 4% cess.")
    add_bullet_p(doc, "Enforces strict Section 288A/B rounding, ensuring exact matching with official CBDT e-filing portal totals.")
    add_bullet_p(doc, "Generates dual-format CA audit notes in non-editable PDF and editable Microsoft Word DOCX formats.")

    add_academic_heading(doc, "2.5 Proposed System/Method of Solution", level=2)
    add_bullet_p(doc, "Session Management: Taxpayer Session Portal initializes persistent, isolated sessions per filing.")
    add_bullet_p(doc, "Document Ingestion: PDF/DOCX files are verified for selectable text and stored safely in local/serverless storage.")
    add_bullet_p(doc, "Hybrid Extraction: Regular expression primary extraction + NVIDIA NIM LLM fallback with JSON schema validation.")
    add_bullet_p(doc, "Review & Override: React interface permits full manual review and correction of all parsed fields.")
    add_bullet_p(doc, "Deterministic Tax Engine: Evaluates exact tax under Old and New Regimes, recommending the optimal regime.")
    add_bullet_p(doc, "Audit Reporting: Compiles CA-format Statement of Total Income for client delivery and filing records.")

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 3: SYSTEM ANALYSIS AND DESIGN
    # ──────────────────────────────────────────────────────────────────────────
    add_academic_heading(doc, "Chapter 3: SYSTEM ANALYSIS AND DESIGN", level=1)
    add_academic_heading(doc, "3.1 Requirement Specification", level=2)
    add_body_p(doc,
        "This section details the functional and non-functional requirements of AITR, identified as FR (functional) and NFR (non-functional) "
        "for traceability against implementation modules and test cases."
    )

    t_fr = doc.add_table(rows=11, cols=4)
    t_fr.alignment = WD_TABLE_ALIGNMENT.CENTER
    fr_rows = [
        ["ID", "Requirement", "Description", "Priority"],
        ["FR-001", "Taxpayer Session Portal", "Establish isolated session storing taxpayer name and PAN in local session.", "High"],
        ["FR-002", "Document Ingestion", "Upload PDF/DOCX files up to 10MB; reject scanned images without selectable text.", "High"],
        ["FR-003", "Hybrid Entity Extraction", "Extract PAN, Aadhaar, AY, salary, deductions, VDA gains, and TDS via Regex+LLM.", "High"],
        ["FR-004", "Data Review & Correction", "Present extracted values for user validation and manual modification.", "High"],
        ["FR-005", "Multi-AY Slab Engine", "Support dynamic slab and standard deduction switching (AY 25-26 & 26-27).", "High"],
        ["FR-006", "Deterministic Tax Calculation", "Compute Old and New Regime liabilities with Section 87A rebate and 4% cess.", "High"],
        ["FR-007", "Special Rates & Presumptive", "Apply 30% flat tax on VDA (115BBH) and 6%/8%/50% profit u/s 44AD/44ADA.", "High"],
        ["FR-008", "Statutory Rounding Rules", "Enforce Section 288A (nearest ₹10) and Section 288B (nearest rupee) rounding.", "High"],
        ["FR-009", "CA Report Generation", "Generate formal CA Statement of Total Income in PDF and DOCX formats.", "High"],
        ["FR-010", "Session History Retrieval", "Persist and display session history of past uploads, computations, and downloads.", "Medium"],
    ]
    col_w_fr = [Inches(0.8), Inches(1.8), Inches(3.1), Inches(0.8)]
    for r_idx, row_data in enumerate(fr_rows):
        for c_idx, val in enumerate(row_data):
            cell = t_fr.rows[r_idx].cells[c_idx]
            cell.width = col_w_fr[c_idx]
            set_cell_margins(cell, 35, 35, 50, 50)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 3: Functional requirements")

    add_academic_heading(doc, "3.2 System Architecture & Design Diagrams", level=2)
    add_body_p(doc, "The proposed system follows an asynchronous, decoupled client-server architecture:")

    arch_img = os.path.join(diagrams_dir, "class_diag.png")
    if os.path.exists(arch_img):
        doc.add_picture(arch_img, width=Inches(6.2))
        add_fig_caption(doc, "Figure 3.1: Object-Oriented Backend Architecture and Engine Inheritance Hierarchy")

    add_academic_heading(doc, "3.3 Classical Chen's ER Diagram", level=2)
    add_body_p(doc,
        "Conforming to standard DBMS academic modeling conventions, the schema encompasses 5 relational entities. "
        "Rectangles depict Entity sets (SESSION, DOCUMENT, EXTRACTED_DATA, COMPUTATION, REPORT), Diamonds depict Relationships "
        "with cardinalities (1:1, 1:N), and Ovals depict individual Attributes with Primary Keys underlined:"
    )
    er_img = os.path.join(diagrams_dir, "er_chen.png")
    if os.path.exists(er_img):
        doc.add_picture(er_img, width=Inches(6.2))
        add_fig_caption(doc, "Figure 3.2: Classical Chen's Entity-Relationship (ER) Diagram (Rectangles, Diamonds, Ovals)")

    doc.add_page_break()

    add_academic_heading(doc, "3.4 Use Case Diagram", level=2)
    uc_img = os.path.join(diagrams_dir, "usecase.png")
    if os.path.exists(uc_img):
        doc.add_picture(uc_img, width=Inches(5.8))
        add_fig_caption(doc, "Figure 3.3: Use Case Diagram for AITR System Actors and Operations")

    add_academic_heading(doc, "3.5 Sequence Diagram", level=2)
    seq_img = os.path.join(diagrams_dir, "sequence_diag.png")
    if os.path.exists(seq_img):
        doc.add_picture(seq_img, width=Inches(6.0))
        add_fig_caption(doc, "Figure 3.4: Sequence Diagram: Document Ingestion, Verification, Computation, and Reporting")

    add_academic_heading(doc, "3.6 Data Flow Diagrams (Level 0 and Level 1)", level=2)
    dfd0_img = os.path.join(diagrams_dir, "dfd0.png")
    if os.path.exists(dfd0_img):
        doc.add_picture(dfd0_img, width=Inches(5.5))
        add_fig_caption(doc, "Figure 3.5: DFD Level 0 (Context Diagram)")

    dfd1_img = os.path.join(diagrams_dir, "dfd1.png")
    if os.path.exists(dfd1_img):
        doc.add_picture(dfd1_img, width=Inches(6.0))
        add_fig_caption(doc, "Figure 3.6: DFD Level 1 (Subsystem Decomposition)")

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 4: SYSTEM IMPLEMENTATION
    # ──────────────────────────────────────────────────────────────────────────
    add_academic_heading(doc, "Chapter 4: SYSTEM IMPLEMENTATION", level=1)
    add_body_p(doc,
        "This chapter describes the implementation environment, file hierarchy, operation manual with complete screenshots, "
        "and primary backend REST API endpoints of the AI-Driven Income Tax Return Computation System."
    )

    add_academic_heading(doc, "4.1 Project Codebase Structure", level=2)
    add_body_p(doc,
        "The directory structure below details the complete organization of the AITR codebase across backend services, "
        "routers, deterministic tax calculation engines, and React SPA components:"
    )
    tree_img = os.path.join(assets_dir, "project_structure.png")
    if os.path.exists(tree_img):
        doc.add_picture(tree_img, width=Inches(5.5))
        add_fig_caption(doc, "Figure 4.1: Comprehensive AITR Project Directory Structure and Architecture Map")

    doc.add_page_break()

    add_academic_heading(doc, "4.2 Operation Manual & User Interface Screenshots", level=2)
    add_body_p(doc, "The following screenshots document the live execution of the AITR application across its primary operational states:")

    # Screenshot 1: Taxpayer Session Portal
    sess_img = os.path.join(assets_dir, "screen_taxpayer_session.png")
    if os.path.exists(sess_img):
        add_academic_heading(doc, "4.2.1 Taxpayer Session Portal", level=3)
        add_body_p(doc, "Users sign in or create a dedicated computation session by entering their Taxpayer Name and PAN:")
        doc.add_picture(sess_img, width=Inches(4.5))
        add_fig_caption(doc, "Figure 4.2: Taxpayer Session Portal Modal for Dedicated Computation Sessions")

    # Screenshot 2: Upload Page
    up_img = os.path.join(assets_dir, "screen_upload.png")
    if os.path.exists(up_img):
        add_academic_heading(doc, "4.2.2 Document Ingestion Interface", level=3)
        add_body_p(doc, "Users upload digital PDF or DOCX ITR documents. The screen renders an interactive Three.js WebGL GridScan background shader:")
        doc.add_picture(up_img, width=Inches(6.0))
        add_fig_caption(doc, "Figure 4.3: Document Ingestion Interface with Three.js WebGL GridScan Shader Background")

    doc.add_page_break()

    # Screenshot 3: Results Page
    res_img = os.path.join(assets_dir, "screen_results.png")
    if os.path.exists(res_img):
        add_academic_heading(doc, "4.2.3 Dual-Regime Tax Computation Results & Recommendation", level=3)
        add_body_p(doc,
            "The deterministic tax engine computes side-by-side liabilities for Old and New Regimes, recommending EQUAL REGIME "
            "with full refund of TDS (₹10,238) for taxpayer SHAKEV ULLAH KHAN (AY 2025-26):"
        )
        doc.add_picture(res_img, width=Inches(6.0))
        add_fig_caption(doc, "Figure 4.4: Dual-Regime Comparative Evaluation Screen with Automated Recommendation Banner")

    # Screenshot 4: CA Report
    ca_img = os.path.join(assets_dir, "screen_ca_report.png")
    if os.path.exists(ca_img):
        add_academic_heading(doc, "4.2.4 Chartered Accountant (CA) Computation Audit Statement", level=3)
        add_body_p(doc,
            "Clicking 'Download PDF' triggers ReportLab to compile a formal CA-format Statement of Total Income with Section 288A rounding, "
            "Section 115BAC computations, and Old Regime comparison:"
        )
        doc.add_picture(ca_img, width=Inches(5.0))
        add_fig_caption(doc, "Figure 4.5: Generated CA Audit Note / Computation of Total Income (PDF Report Export)")

    doc.add_page_break()

    # Main API Endpoints Table
    add_academic_heading(doc, "4.3 Principal Backend API Endpoints", level=2)
    t_api = doc.add_table(rows=10, cols=3)
    t_api.alignment = WD_TABLE_ALIGNMENT.CENTER
    api_rows = [
        ["HTTP Method", "Endpoint", "Purpose"],
        ["POST", "/api/upload", "Upload and validate PDF/DOCX file structure"],
        ["POST", "/api/extract/{document_id}", "Execute Regex + NVIDIA NIM LLM entity extraction"],
        ["GET", "/api/review/{extraction_id}", "Retrieve extracted financial fields for review"],
        ["PUT", "/api/review/{extraction_id}", "Update reviewed JSON with manual user corrections"],
        ["POST", "/api/compute/{extraction_id}", "Compute Old and New Regime tax liabilities"],
        ["POST", "/api/reports/generate/{id}/{fmt}", "Generate formal CA audit note in PDF or DOCX"],
        ["GET", "/api/reports/download/{id}", "Stream generated audit report file for download"],
        ["GET", "/api/history/{session_id}", "Retrieve past computation and download history"],
        ["GET", "/api/health", "System health check and active Assessment Year status"],
    ]
    col_w_api = [Inches(1.2), Inches(2.3), Inches(3.0)]
    for r_idx, row_data in enumerate(api_rows):
        for c_idx, val in enumerate(row_data):
            cell = t_api.rows[r_idx].cells[c_idx]
            cell.width = col_w_api[c_idx]
            set_cell_margins(cell, 35, 35, 50, 50)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 5: Main Backend API Endpoints")

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 5: RESULT AND DISCUSSION
    # ──────────────────────────────────────────────────────────────────────────
    add_academic_heading(doc, "Chapter 5: RESULT AND DISCUSSION", level=1)
    add_body_p(doc,
        "This chapter discusses the results, statutory slab formulations, functional test scenarios, and comparative analysis "
        "of the AI-Driven Income Tax Return Computation System."
    )

    add_academic_heading(doc, "5.1 Statutory Tax Slabs & Formulations", level=2)
    t_slabs = doc.add_table(rows=3, cols=5)
    t_slabs.alignment = WD_TABLE_ALIGNMENT.CENTER
    slabs_content = [
        ["Regime", "Income Slab (₹)", "Tax Rate", "Standard Ded.", "Rebate u/s 87A"],
        ["Old Regime\n(AY 2025-26 & 2026-27)", "0 - 2,50,000\n2,50,001 - 5,00,000\n5,00,001 - 10,00,000\nAbove 10,00,000", "Nil\n5%\n20%\n30%", "₹50,000", "Max ₹12,500\n(Total Income <= ₹5,00,000)"],
        ["New Regime\n(u/s 115BAC)", "0 - 3,00,000\n3,00,001 - 7,00,000\n7,00,001 - 10,00,000\n10,00,001 - 12,00,000\n12,00,001 - 15,00,000\nAbove 15,00,000", "Nil\n5%\n10%\n15%\n20%\n30%", "₹75,000\n(Budget 2024 revised)", "Max ₹25,000\n(Full Rebate if Total Income <= ₹7,00,000)"],
    ]
    col_w_sl = [Inches(1.2), Inches(1.8), Inches(0.9), Inches(1.1), Inches(1.5)]
    for r_idx, row_data in enumerate(slabs_content):
        for c_idx, val in enumerate(row_data):
            cell = t_slabs.rows[r_idx].cells[c_idx]
            cell.width = col_w_sl[c_idx]
            set_cell_margins(cell, 40, 40, 60, 60)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 6: Statutory tax slabs and deduction rules")

    add_academic_heading(doc, "5.2 Functional Test Scenarios (TC-01 to TC-12)", level=2)
    t_tc = doc.add_table(rows=13, cols=4)
    t_tc.alignment = WD_TABLE_ALIGNMENT.CENTER
    tc_rows = [
        ["Test ID", "Test Scenario", "Expected System Behaviour", "Execution Status"],
        ["TC-01", "Upload valid PDF/DOCX ITR document.", "File is processed and text is validated.", "Successful"],
        ["TC-02", "Provide scanned image-only PDF.", "Rejected: selectable text required error shown.", "Successful"],
        ["TC-03", "Extract PAN and Aadhaar numbers.", "Conforms to standard alphanumeric patterns.", "Successful"],
        ["TC-04", "Isolate Virtual Digital Assets (VDA) u/s 115BBH.", "Crypto gains taxed flat at 30% plus 4% cess.", "Successful"],
        ["TC-05", "Apply Standard Deduction for AY 2025-26.", "Deducts ₹50,000 (Old) vs. ₹75,000 (New).", "Successful"],
        ["TC-06", "Compute Section 87A rebate (Old <= ₹5L).", "Applies rebate up to ₹12,500; tax reduced to zero.", "Successful"],
        ["TC-07", "Compute Section 87A rebate (New <= ₹7L).", "Applies 100% tax rebate up to ₹25,000.", "Successful"],
        ["TC-08", "Taxable income Section 288A rounding.", "Rounds taxable total income to nearest ₹10.", "Successful"],
        ["TC-09", "Final tax Section 288B rounding.", "Rounds net tax payable/refundable to nearest rupee.", "Successful"],
        ["TC-10", "Presumptive taxation u/s 44AD/44ADA (ITR-4).", "Deemed profit computed at 6%/8% and 50%.", "Successful"],
        ["TC-11", "Comparative regime recommendation.", "Recommends regime yielding lowest tax liability.", "Successful"],
        ["TC-12", "Export CA audit report (PDF & DOCX).", "Generates printable PDF and editable DOCX.", "Successful"],
    ]
    col_w_tc = [Inches(0.8), Inches(2.2), Inches(2.5), Inches(1.0)]
    for r_idx, row_data in enumerate(tc_rows):
        for c_idx, val in enumerate(row_data):
            cell = t_tc.rows[r_idx].cells[c_idx]
            cell.width = col_w_tc[c_idx]
            set_cell_margins(cell, 35, 35, 50, 50)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 7: Functional test scenarios and execution status")

    add_academic_heading(doc, "5.3 Comparison with the Existing System", level=2)
    t_comp = doc.add_table(rows=7, cols=3)
    t_comp.alignment = WD_TABLE_ALIGNMENT.CENTER
    comp_rows = [
        ["Basis", "Manual / Spreadsheet-Based Process", "Proposed AITR System"],
        ["Data Entry", "Manual transcription of values from Form 16.", "Automated drag-and-drop parsing of PDF/DOCX."],
        ["Entity Extraction", "Subject to human fatigue and transcription error.", "Hybrid extraction (Regex + NVIDIA NIM LLM)."],
        ["Tax Calculation", "Manual formulas that frequently misapply slabs.", "100% deterministic Python calculation engine."],
        ["Regime Comparison", "Requires building separate manual worksheets.", "Side-by-side cards with automated recommendation."],
        ["Statutory Rounding", "Often overlooked, leading to mismatched totals.", "Strictly enforces Section 288A (₹10) & 288B (₹1)."],
        ["Report Generation", "Manual typing into Word templates.", "Instant generation of CA-format PDF and Word DOCX."],
    ]
    col_w_comp = [Inches(1.5), Inches(2.5), Inches(2.5)]
    for r_idx, row_data in enumerate(comp_rows):
        for c_idx, val in enumerate(row_data):
            cell = t_comp.rows[r_idx].cells[c_idx]
            cell.width = col_w_comp[c_idx]
            set_cell_margins(cell, 40, 40, 60, 60)
            if r_idx == 0:
                set_cell_background(cell, "F1F5F9")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8.5)
                run.font.bold = True
            else:
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Times New Roman"
                run.font.size = Pt(8)
    add_fig_caption(doc, "Table 8: Comparison with the existing system")

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CHAPTER 6: CONCLUSION
    # ──────────────────────────────────────────────────────────────────────────
    add_academic_heading(doc, "Chapter 6: CONCLUSION", level=1)
    add_body_p(doc,
        "The AI-Driven Income Tax Return Computation System (AITR) provides a modern, robust, and mathematically sound approach "
        "to Indian tax assessment. By integrating AI solely for unstructured document comprehension and keeping all arithmetic strictly "
        "deterministic, the system eliminates both human transcription errors and AI calculation hallucinations. "
        "The project demonstrates how modern web engineering, serverless deployments, and intelligent microservices can modernize tax compliance."
    )

    add_academic_heading(doc, "6.1 Advantages and Special Features of the System", level=2)
    add_bullet_p(doc, "Zero Arithmetic Hallucination: Pure deterministic calculation engines ensure 100% computational accuracy.")
    add_bullet_p(doc, "Multi-Assessment Year Support: Dynamically switches between AY 2025-26 and AY 2026-27 to reflect annual budget updates.")
    add_bullet_p(doc, "Broad Statutory Form Coverage: Full support for salaried (ITR-1), capital gains/crypto (ITR-2), and presumptive (ITR-4).")
    add_bullet_p(doc, "Section 115BBH VDA Segregation: Accurately taxes cryptocurrency gains at flat 30% plus 4% cess without deductions.")
    add_bullet_p(doc, "Human-in-the-Loop Review: Interactive editor lets taxpayers verify extracted figures before computation.")
    add_bullet_p(doc, "CA-Standard Report Export: Exports formal computation sheets in non-editable PDF and editable Word DOCX.")
    add_bullet_p(doc, "Reactive WebGL User Interface: Fast React 18 interface with an interactive Three.js GridScan shader background.")

    add_academic_heading(doc, "6.2 Limitations", level=2)
    add_bullet_p(doc, "The current input workflow is based on digital PDF and DOCX documents; direct scanning of physical paper receipts via OCR is excluded.")
    add_bullet_p(doc, "Live PAN/Aadhaar biometric authentication with CBDT servers requires specialized API gateway licenses.")
    add_bullet_p(doc, "Form ITR-5 (Partnership Firms) and Form ITR-6 (Companies) are outside the current individual taxpayer scope.")

    add_academic_heading(doc, "6.3 Future Scope", level=2)
    add_bullet_p(doc, "Integration with official CBDT JSON filing schema for 1-click return submission to the government portal.")
    add_bullet_p(doc, "OCR scanning of physical paper salary slips and donation receipts using computer vision neural networks.")
    add_bullet_p(doc, "Automated parsing of Annual Information Statements (AIS) and Tax Information Summaries (TIS).")

    add_academic_heading(doc, "REFERENCES", level=2)
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
        p_r = doc.add_paragraph()
        p_r.paragraph_format.space_after = Pt(3)
        r_run = p_r.add_run(r)
        r_run.font.name = "Times New Roman"
        r_run.font.size = Pt(8.5)

    doc.save(docx_path)
    print(f"Successfully compiled Academic Final Project Report DOCX at: {docx_path}")

if __name__ == "__main__":
    out_docx = r"D:\Python\AITR\AITR_Academic_Project_Report.docx"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_academic_docx(out_docx, assets, diagrams)
