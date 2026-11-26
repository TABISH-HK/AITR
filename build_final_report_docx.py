"""
Compile Formal Final Project Report into Microsoft Word (.docx) format using python-docx.
Incorporates:
- Academic formatting (Department of Computer Science, AMU)
- Certificate of Authenticity & Declaration
- Formatted tables with color accents
- High-resolution embedded diagram figures and screenshots
- Multi-AY statutory slab specifications, test cases, and conclusion
"""
import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def build_docx_report(docx_path: str, assets_dir: str, diagrams_dir: str):
    doc = Document()

    # Page setup: Standard Letter, 0.75 in margins
    for section in doc.sections:
        section.top_margin = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # ──────────────────────────────────────────────────────────────────────────
    # COVER PAGE
    # ──────────────────────────────────────────────────────────────────────────
    p_inst = doc.add_paragraph()
    p_inst.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_inst = p_inst.add_run("DEPARTMENT OF COMPUTER SCIENCE\nALIGARH MUSLIM UNIVERSITY, ALIGARH (U.P.), INDIA\n")
    run_inst.font.name = "Arial"
    run_inst.font.size = Pt(13)
    run_inst.font.bold = True
    run_inst.font.color.rgb = RGBColor(30, 58, 138)

    p_badge = doc.add_paragraph()
    p_badge.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_badge = p_badge.add_run("MCA MINI PROJECT REPORT (2026–2027)\n")
    run_badge.font.name = "Arial"
    run_badge.font.size = Pt(11)
    run_badge.font.bold = True
    run_badge.font.color.rgb = RGBColor(3, 105, 161)

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_title = p_title.add_run("AI-DRIVEN INCOME TAX RETURN (ITR)\nCOMPUTATION SYSTEM (AITR)\n")
    run_title.font.name = "Arial"
    run_title.font.size = Pt(22)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(15, 23, 42)

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_sub = p_sub.add_run("A Full-Stack Financial Assessment System with Deterministic Multi-Regime Computation & Semantic LLM Extraction\n")
    run_sub.font.name = "Arial"
    run_sub.font.size = Pt(11)
    run_sub.font.color.rgb = RGBColor(71, 85, 105)

    # Metadata Table
    t_meta = doc.add_table(rows=8, cols=2)
    t_meta.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_rows = [
        ("Degree Program:", "Master of Computer Applications (MCA)"),
        ("Course Requirement:", "MCA Mini Project (Semester Curriculum)"),
        ("Academic Session:", "2026 – 2027"),
        ("Submitted By:", "Tabish Hasan (Candidate)"),
        ("Roll / Enrolment No:", "25CAMSA156"),
        ("Institution:", "Department of Computer Science, AMU"),
        ("Project Repository:", "https://github.com/TABISH-HK/AITR"),
        ("Live Deployment:", "https://aitr-drab.vercel.app/"),
    ]
    for idx, (label, val) in enumerate(meta_rows):
        row = t_meta.rows[idx]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.2)
        c1.width = Inches(4.3)
        set_cell_background(c0, "F8FAFC")
        set_cell_background(c1, "F8FAFC")
        set_cell_margins(c0, 60, 60, 100, 100)
        set_cell_margins(c1, 60, 60, 100, 100)
        
        r0 = c0.paragraphs[0].add_run(label)
        r0.font.name = "Arial"
        r0.font.size = Pt(9.5)
        r0.font.bold = True
        r0.font.color.rgb = RGBColor(30, 41, 59)

        r1 = c1.paragraphs[0].add_run(val)
        r1.font.name = "Arial"
        r1.font.size = Pt(9.5)
        if "Tabish" in val or "25CAMSA156" in val:
            r1.font.bold = True
        r1.font.color.rgb = RGBColor(30, 41, 59)

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # CERTIFICATE & DECLARATION
    # ──────────────────────────────────────────────────────────────────────────
    h_cert = doc.add_paragraph()
    r_cert = h_cert.add_run("Certificate of Authenticity")
    r_cert.font.name = "Arial"
    r_cert.font.size = Pt(15)
    r_cert.font.bold = True
    r_cert.font.color.rgb = RGBColor(30, 58, 138)

    p_cbody1 = doc.add_paragraph()
    r_cb1 = p_cbody1.add_run(
        "This is to certify that the project entitled \"AI-Driven Income Tax Return (ITR) Computation System (AITR)\" "
        "is a bonafide record of work carried out by Tabish Hasan (Roll / Enrolment No: 25CAMSA156) in partial fulfillment of the requirements "
        "for the degree of Master of Computer Applications (MCA) at the Department of Computer Science, Aligarh Muslim University, Aligarh "
        "during the academic session 2026–2027."
    )
    r_cb1.font.name = "Arial"
    r_cb1.font.size = Pt(10)
    r_cb1.font.color.rgb = RGBColor(30, 41, 59)

    p_cbody2 = doc.add_paragraph()
    r_cb2 = p_cbody2.add_run(
        "The project demonstrates sound software engineering principles, incorporating modern API design, reactive WebGL user interfaces, "
        "large language model parsing, and strict deterministic adherence to the Indian Income Tax Act, 1961."
    )
    r_cb2.font.name = "Arial"
    r_cb2.font.size = Pt(10)
    r_cb2.font.color.rgb = RGBColor(30, 41, 59)

    p_space = doc.add_paragraph()
    p_space.paragraph_format.space_after = Pt(40)

    t_sig = doc.add_table(rows=1, cols=2)
    t_sig.alignment = WD_TABLE_ALIGNMENT.CENTER
    t_sig.rows[0].cells[0].width = Inches(3.2)
    t_sig.rows[0].cells[1].width = Inches(3.3)
    
    p_sig1 = t_sig.rows[0].cells[0].paragraphs[0]
    r_s1 = p_sig1.add_run("______________________________\nTabish Hasan\nCandidate (25CAMSA156)\nMCA, Aligarh Muslim University")
    r_s1.font.name = "Arial"
    r_s1.font.size = Pt(9.5)
    r_s1.font.bold = True

    p_sig2 = t_sig.rows[0].cells[1].paragraphs[0]
    r_s2 = p_sig2.add_run("______________________________\nProject Supervisor / Faculty Mentor\nDepartment of Computer Science\nAligarh Muslim University")
    r_s2.font.name = "Arial"
    r_s2.font.size = Pt(9.5)
    r_s2.font.bold = True

    # Executive Summary
    h_exec = doc.add_paragraph()
    h_exec.paragraph_format.space_before = Pt(25)
    r_exec = h_exec.add_run("Executive Summary")
    r_exec.font.name = "Arial"
    r_exec.font.size = Pt(14)
    r_exec.font.bold = True
    r_exec.font.color.rgb = RGBColor(30, 58, 138)

    p_eb = doc.add_paragraph()
    r_eb = p_eb.add_run(
        "The AI-Driven Income Tax Return (ITR) Computation System (AITR) is an automated financial assessment platform "
        "engineered to eradicate manual transcription errors and computational discrepancies during income tax assessment in India. "
        "By fusing hybrid semantic AI extraction (NVIDIA NIM LLM + rule-based regex) with a 100% deterministic calculation engine, "
        "the application ingests official filing forms (ITR-1 Sahaj, ITR-2 Capital Gains/Crypto, and ITR-4 Sugam presumptive), computes "
        "exact tax liabilities across dual regimes (Old vs. Section 115BAC New Regime) for Assessment Years 2025-26 and 2026-27, and exports "
        "statutory Chartered Accountant-format audit notes in both PDF and Word DOCX formats."
    )
    r_eb.font.name = "Arial"
    r_eb.font.size = Pt(9.5)
    r_eb.font.color.rgb = RGBColor(30, 41, 59)

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 1: SYSTEM OVERVIEW & ARCHITECTURE
    # ──────────────────────────────────────────────────────────────────────────
    h_s1 = doc.add_paragraph()
    r_s1 = h_s1.add_run("1. System Architecture & Engineering Methodology")
    r_s1.font.name = "Arial"
    r_s1.font.size = Pt(14)
    r_s1.font.bold = True
    r_s1.font.color.rgb = RGBColor(30, 58, 138)

    p_s1 = doc.add_paragraph()
    r_p1 = p_s1.add_run(
        "AITR is engineered as an asynchronous, decoupled client-server architecture. The frontend Single Page Application (SPA) "
        "features a custom Three.js WebGL GridScan shader background that dynamically accelerates during computational extraction. "
        "The backend is driven by FastAPI with automated SQLite persistence, utilizing /tmp directory abstractions for serverless cloud execution."
    )
    r_p1.font.name = "Arial"
    r_p1.font.size = Pt(9.5)
    r_p1.font.color.rgb = RGBColor(30, 41, 59)

    arch_img = os.path.join(diagrams_dir, "class_diag.png")
    if os.path.exists(arch_img):
        doc.add_picture(arch_img, width=Inches(6.2))
        p_c = doc.add_paragraph()
        p_c.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_c = p_c.add_run("Figure 1.1: Object-Oriented Backend Architecture and Engine Inheritance Hierarchy")
        r_c.font.name = "Arial"
        r_c.font.size = Pt(8.5)
        r_c.font.italic = True
        r_c.font.color.rgb = RGBColor(100, 116, 139)

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 2: CHEN'S ER DIAGRAM
    # ──────────────────────────────────────────────────────────────────────────
    h_s2 = doc.add_paragraph()
    h_s2.paragraph_format.space_before = Pt(15)
    r_s2 = h_s2.add_run("2. Conceptual Database Design (Chen's ER Model)")
    r_s2.font.name = "Arial"
    r_s2.font.size = Pt(14)
    r_s2.font.bold = True
    r_s2.font.color.rgb = RGBColor(30, 58, 138)

    p_s2 = doc.add_paragraph()
    r_p2 = p_s2.add_run(
        "In accordance with standard database modeling conventions, the schema encompasses 5 relational entities. "
        "Rectangles represent Entities, Diamonds represent Relational Cardinalities (1:1, 1:N), and Ovals depict Attributes "
        "with primary key constraints underlined."
    )
    r_p2.font.name = "Arial"
    r_p2.font.size = Pt(9.5)
    r_p2.font.color.rgb = RGBColor(30, 41, 59)

    er_img = os.path.join(diagrams_dir, "er_chen.png")
    if os.path.exists(er_img):
        doc.add_picture(er_img, width=Inches(6.2))
        p_c2 = doc.add_paragraph()
        p_c2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_c2 = p_c2.add_run("Figure 2.1: Classical Chen's Entity-Relationship (ER) Diagram (Rectangles, Diamonds, Ovals)")
        r_c2.font.name = "Arial"
        r_c2.font.size = Pt(8.5)
        r_c2.font.italic = True
        r_c2.font.color.rgb = RGBColor(100, 116, 139)

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 3: SYSTEM SCREENSHOTS & OPERATIONAL VERIFICATION
    # ──────────────────────────────────────────────────────────────────────────
    h_s3 = doc.add_paragraph()
    r_s3 = h_s3.add_run("3. Operational Screenshots & User Interface")
    r_s3.font.name = "Arial"
    r_s3.font.size = Pt(14)
    r_s3.font.bold = True
    r_s3.font.color.rgb = RGBColor(30, 58, 138)

    p_s3 = doc.add_paragraph()
    r_p3 = p_s3.add_run("The following screenshots document the live execution of the AITR application across its primary operational states:")
    r_p3.font.name = "Arial"
    r_p3.font.size = Pt(9.5)

    # Screenshot 1
    sc1_path = os.path.join(assets_dir, "screen_upload.png")
    if os.path.exists(sc1_path):
        h_sc1 = doc.add_paragraph()
        r_h1 = h_sc1.add_run("3.1 Document Ingestion & WebGL Shader Interface")
        r_h1.font.name = "Arial"
        r_h1.font.size = Pt(11.5)
        r_h1.font.bold = True
        r_h1.font.color.rgb = RGBColor(3, 105, 161)

        p_sc1_desc = doc.add_paragraph()
        r_sd1 = p_sc1_desc.add_run("Users upload digital PDF or DOCX ITR documents. The screen renders an interactive Three.js WebGL GridScan background shader that visually tracks system interaction:")
        r_sd1.font.name = "Arial"
        r_sd1.font.size = Pt(9)

        doc.add_picture(sc1_path, width=Inches(6.2))
        p_c_sc1 = doc.add_paragraph()
        p_c_sc1.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_cs1 = p_c_sc1.add_run("Figure 3.1: AITR Ingestion Interface with Drag-and-Drop Zone and Three.js WebGL Background")
        r_cs1.font.name = "Arial"
        r_cs1.font.size = Pt(8.5)
        r_cs1.font.italic = True
        r_cs1.font.color.rgb = RGBColor(100, 116, 139)

    # Screenshot 2
    sc2_path = os.path.join(assets_dir, "screen_results.png")
    if os.path.exists(sc2_path):
        h_sc2 = doc.add_paragraph()
        h_sc2.paragraph_format.space_before = Pt(12)
        r_h2 = h_sc2.add_run("3.2 Dual-Regime Tax Computation Results & Recommendation")
        r_h2.font.name = "Arial"
        r_h2.font.size = Pt(11.5)
        r_h2.font.bold = True
        r_h2.font.color.rgb = RGBColor(3, 105, 161)

        p_sc2_desc = doc.add_paragraph()
        r_sd2 = p_sc2_desc.add_run("The deterministic tax engine computes side-by-side liabilities for Old and New Regimes, recommending EQUAL REGIME with full refund of TDS (₹10,238) for taxpayer SHAKEV ULLAH KHAN (AY 2025-26):")
        r_sd2.font.name = "Arial"
        r_sd2.font.size = Pt(9)

        doc.add_picture(sc2_path, width=Inches(6.2))
        p_c_sc2 = doc.add_paragraph()
        p_c_sc2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_cs2 = p_c_sc2.add_run("Figure 3.2: Dual-Regime Comparative Evaluation Screen with Automated Recommendation Banner")
        r_cs2.font.name = "Arial"
        r_cs2.font.size = Pt(8.5)
        r_cs2.font.italic = True
        r_cs2.font.color.rgb = RGBColor(100, 116, 139)

    doc.add_page_break()

    # Screenshot 3
    sc3_path = os.path.join(assets_dir, "screen_ca_report.png")
    if os.path.exists(sc3_path):
        h_sc3 = doc.add_paragraph()
        r_h3 = h_sc3.add_run("3.3 Chartered Accountant (CA) Computation Audit Statement")
        r_h3.font.name = "Arial"
        r_h3.font.size = Pt(11.5)
        r_h3.font.bold = True
        r_h3.font.color.rgb = RGBColor(3, 105, 161)

        p_sc3_desc = doc.add_paragraph()
        r_sd3 = p_sc3_desc.add_run("Clicking 'Download PDF' triggers the ReportLab generation engine to compile an official CA-format Computation of Total Income sheet with Section 288A rounding, Section 115BAC calculations, and regime comparison:")
        r_sd3.font.name = "Arial"
        r_sd3.font.size = Pt(9)

        doc.add_picture(sc3_path, width=Inches(5.8))
        p_c_sc3 = doc.add_paragraph()
        p_c_sc3.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_cs3 = p_c_sc3.add_run("Figure 3.3: Generated CA Audit Note / Computation of Total Income (PDF Report Export)")
        r_cs3.font.name = "Arial"
        r_cs3.font.size = Pt(8.5)
        r_cs3.font.italic = True
        r_cs3.font.color.rgb = RGBColor(100, 116, 139)

    doc.add_page_break()

    # ──────────────────────────────────────────────────────────────────────────
    # SECTION 4: SLABS & FORMULATIONS
    # ──────────────────────────────────────────────────────────────────────────
    h_s4 = doc.add_paragraph()
    r_s4 = h_s4.add_run("4. Statutory Tax Slabs & Deterministic Formulations")
    r_s4.font.name = "Arial"
    r_s4.font.size = Pt(14)
    r_s4.font.bold = True
    r_s4.font.color.rgb = RGBColor(30, 58, 138)

    t_slabs = doc.add_table(rows=3, cols=5)
    t_slabs.alignment = WD_TABLE_ALIGNMENT.CENTER
    slabs_content = [
        ["Regime", "Income Slab (₹)", "Tax Rate", "Standard Ded.", "Rebate u/s 87A"],
        ["Old Regime\n(AY 2025-26 & 2026-27)", "0 - 2,50,000\n2,50,001 - 5,00,000\n5,00,001 - 10,00,000\nAbove 10,00,000", "Nil\n5%\n20%\n30%", "₹50,000", "Max ₹12,500\n(Total Income <= ₹5,00,000)"],
        ["New Regime\n(u/s 115BAC)", "0 - 3,00,000\n3,00,001 - 7,00,000\n7,00,001 - 10,00,000\n10,00,001 - 12,00,000\n12,00,001 - 15,00,000\nAbove 15,00,000", "Nil\n5%\n10%\n15%\n20%\n30%", "₹75,000\n(Budget 2024 revised)", "Max ₹25,000\n(Full Rebate if Total Income <= ₹7,00,000)"],
    ]
    col_w = [Inches(1.2), Inches(1.8), Inches(0.9), Inches(1.1), Inches(1.5)]
    for r_idx, row_data in enumerate(slabs_content):
        for c_idx, val in enumerate(row_data):
            cell = t_slabs.rows[r_idx].cells[c_idx]
            cell.width = col_w[c_idx]
            set_cell_margins(cell, 60, 60, 80, 80)
            if r_idx == 0:
                set_cell_background(cell, "1E3A8A")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Arial"
                run.font.size = Pt(8.5)
                run.font.bold = True
                run.font.color.rgb = RGBColor(255, 255, 255)
            else:
                set_cell_background(cell, "F8FAFC" if r_idx % 2 == 1 else "FFFFFF")
                run = cell.paragraphs[0].add_run(val)
                run.font.name = "Arial"
                run.font.size = Pt(8)
                run.font.color.rgb = RGBColor(30, 41, 59)

    p_sp = doc.add_paragraph()
    p_sp.paragraph_format.space_after = Pt(10)

    # Advantages
    h_s5 = doc.add_paragraph()
    r_s5 = h_s5.add_run("5. Key Advantages & Innovations")
    r_s5.font.name = "Arial"
    r_s5.font.size = Pt(14)
    r_s5.font.bold = True
    r_s5.font.color.rgb = RGBColor(30, 58, 138)

    advs = [
        ("Zero Arithmetic Hallucination", "AI models parse text; deterministic algorithms execute all tax math with zero errors."),
        ("Multi-AY Agility", "Dynamically configures slabs between AY 2025-26 and 2026-27 based on Union Budget updates."),
        ("Broad Form Coverage", "Full support across ITR-1 (salaried), ITR-2 (capital gains/VDA), and ITR-4 (presumptive)."),
        ("CA-Standard Audit Export", "Instant generation of printable PDF and editable Word DOCX audit notes."),
        ("Cloud & Serverless Ready", "Configured for zero-configuration deployment on Vercel and traditional servers."),
    ]
    for title, desc in advs:
        p_a = doc.add_paragraph(style='List Bullet')
        r_at = p_a.add_run(f"{title}: ")
        r_at.font.name = "Arial"
        r_at.font.size = Pt(9)
        r_at.font.bold = True
        r_ad = p_a.add_run(desc)
        r_ad.font.name = "Arial"
        r_ad.font.size = Pt(9)

    # Conclusion
    h_s6 = doc.add_paragraph()
    h_s6.paragraph_format.space_before = Pt(12)
    r_s6 = h_s6.add_run("6. Conclusion & Future Work")
    r_s6.font.name = "Arial"
    r_s6.font.size = Pt(14)
    r_s6.font.bold = True
    r_s6.font.color.rgb = RGBColor(30, 58, 138)

    p_conc = doc.add_paragraph()
    r_conc = p_conc.add_run(
        "The AITR system successfully accomplishes all research and engineering objectives specified for the MCA Mini Project. "
        "It establishes a reliable paradigm for financial technology in India, bridging the gap between natural language document ingestion "
        "and mathematically verifiable tax computation. Future work will explore direct JSON e-filing submission integration with CBDT servers "
        "and computer vision optical character recognition for physical receipts."
    )
    r_conc.font.name = "Arial"
    r_conc.font.size = Pt(9.5)
    r_conc.font.color.rgb = RGBColor(30, 41, 59)

    doc.save(docx_path)
    print(f"Successfully compiled Final Project Report DOCX at: {docx_path}")

if __name__ == "__main__":
    out_docx = r"D:\Python\AITR\AITR_Final_Project_Report.docx"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_docx_report(out_docx, assets, diagrams)
