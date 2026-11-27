"""
Compile Comprehensive Academic Project Report (Chapters 1 to 6) into Microsoft Word (.docx) format using python-docx.
Strictly mirrors the 32-page structure, tables, and figures from build_academic_report_pdf.py.
Ensures all images and diagrams are strictly centered, tables are styled with academic navy themes,
and page breaks maintain a ~30-32 page thesis layout.
"""
import os
import re
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn

from reportlab.platypus import Paragraph, Table, Image, PageBreak, Spacer, HRFlowable
import build_academic_report_pdf as barp


def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)


def set_cell_margins(cell, top=60, bottom=60, left=100, right=100):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)


def set_table_borders(table, color="CBD5E1", sz="4", val="single"):
    tblPr = table._tbl.tblPr
    tblBorders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'<w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:left w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:right w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:insideV w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(tblBorders)


def add_formatted_runs(p, text, default_size=Pt(9.5), default_color=None, default_bold=False, default_italic=False):
    text = text.replace('&nbsp;', ' ')
    lines = text.split('<br/>')
    for l_idx, line in enumerate(lines):
        if l_idx > 0:
            p.add_run('\n')
        parts = re.split(r'(<b>.*?</b>|<i>.*?</i>)', line)
        for part in parts:
            if not part:
                continue
            is_b = default_bold
            is_i = default_italic
            raw = part
            if raw.startswith('<b>') and raw.endswith('</b>'):
                is_b = True
                raw = raw[3:-4]
            elif raw.startswith('<i>') and raw.endswith('</i>'):
                is_i = True
                raw = raw[3:-4]
            clean = re.sub(r'<[^>]+>', '', raw)
            r = p.add_run(clean)
            r.font.name = 'Times New Roman'
            r.font.size = default_size
            r.bold = is_b
            r.italic = is_i
            if default_color:
                r.font.color.rgb = default_color


def build_academic_report_docx(docx_path: str, assets_dir: str, diagrams_dir: str):
    """
    Builds a 30-32 page Academic Project Report in DOCX format by translating
    the ReportLab story flowables from build_academic_report_pdf into styled Word elements.
    Ensures all images are strictly centered and all tables have professional styling.
    """
    # 1. Capture story flowables from the verified 32-page PDF generator
    story_captured = []
    original_build = barp.SimpleDocTemplate.build

    def mock_build(self, story, canvasmaker=None):
        story_captured.extend(story)

    barp.SimpleDocTemplate.build = mock_build
    try:
        barp.build_academic_30p_pdf(
            os.path.join(os.path.dirname(docx_path), "temp_build.pdf"),
            assets_dir,
            diagrams_dir
        )
    finally:
        barp.SimpleDocTemplate.build = original_build
        temp_pdf = os.path.join(os.path.dirname(docx_path), "temp_build.pdf")
        if os.path.exists(temp_pdf):
            try:
                os.remove(temp_pdf)
            except Exception:
                pass

    # 2. Initialize Word Document with academic margins
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.75)
        s.bottom_margin = Inches(0.75)
        s.left_margin = Inches(0.8)
        s.right_margin = Inches(0.8)
        
        # Configure Header & Footer
        header = s.header
        hp = header.paragraphs[0]
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hrun = hp.add_run("AITR: AI-Driven Income Tax Return Computation System | AMU MCA Mini Project")
        hrun.font.name = "Times New Roman"
        hrun.font.size = Pt(8)
        hrun.font.color.rgb = RGBColor(148, 163, 184)

        footer = s.footer
        fp = footer.paragraphs[0]
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        frun = fp.add_run("Department of Computer Science • Aligarh Muslim University • Academic Year 2026–27")
        frun.font.name = "Times New Roman"
        frun.font.size = Pt(8)
        frun.font.color.rgb = RGBColor(148, 163, 184)

    # 3. Iterate over captured flowables and build Word elements
    for item in story_captured:
        if isinstance(item, Paragraph):
            sname = getattr(item.style, 'name', '')
            text = item.text.strip()
            if not text:
                continue
            p = doc.add_paragraph()
            
            # Match style name to appropriate Word styling
            if 'CoverUniv' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(14)
                p.paragraph_format.space_after = Pt(4)
                add_formatted_runs(p, text, default_size=Pt(14), default_color=RGBColor(30, 58, 138), default_bold=True)
            elif 'CoverBadge' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(10)
                p.paragraph_format.space_after = Pt(6)
                add_formatted_runs(p, text, default_size=Pt(11.5), default_color=RGBColor(3, 105, 161), default_bold=True)
            elif 'CoverTitle' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(8)
                p.paragraph_format.space_after = Pt(14)
                add_formatted_runs(p, text, default_size=Pt(16), default_color=RGBColor(15, 23, 42), default_bold=True)
            elif 'CoverSub' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(2)
                p.paragraph_format.space_after = Pt(6)
                add_formatted_runs(p, text, default_size=Pt(10), default_color=RGBColor(51, 65, 85))
            elif 'ChapterHeading' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(16)
                p.paragraph_format.space_after = Pt(10)
                add_formatted_runs(p, text, default_size=Pt(15), default_color=RGBColor(30, 58, 138), default_bold=True)
            elif 'SectionHeading' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                p.paragraph_format.space_before = Pt(12)
                p.paragraph_format.space_after = Pt(4)
                add_formatted_runs(p, text, default_size=Pt(12), default_color=RGBColor(15, 23, 42), default_bold=True)
            elif 'SubSectionHeading' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                p.paragraph_format.space_before = Pt(8)
                p.paragraph_format.space_after = Pt(3)
                add_formatted_runs(p, text, default_size=Pt(10.5), default_color=RGBColor(30, 41, 59), default_bold=True)
            elif 'BulletItem' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                p.paragraph_format.left_indent = Inches(0.2)
                p.paragraph_format.space_before = Pt(2)
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.line_spacing = 1.15
                add_formatted_runs(p, text, default_size=Pt(9.5))
            elif 'FigCaption' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER  # STRICTLY CENTERED CAPTION
                p.paragraph_format.space_before = Pt(3)
                p.paragraph_format.space_after = Pt(7)
                add_formatted_runs(p, text, default_size=Pt(8.5), default_color=RGBColor(71, 85, 105), default_italic=True)
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                p.paragraph_format.space_before = Pt(3)
                p.paragraph_format.space_after = Pt(3)
                p.paragraph_format.line_spacing = 1.15
                add_formatted_runs(p, text, default_size=Pt(9.5))

        elif isinstance(item, Image):
            # STRICTLY CENTERED IMAGE IN WORD
            img_path = item.filename
            if os.path.exists(img_path):
                p = doc.add_paragraph()
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER  # CENTER PARAGRAPH ALIGNMENT
                p.paragraph_format.space_before = Pt(6)
                p.paragraph_format.space_after = Pt(2)
                w_in = min(6.3, item.drawWidth / 72.0)
                r = p.add_run()
                r.add_picture(img_path, width=Inches(w_in))

        elif isinstance(item, Table):
            rows = len(item._cellvalues)
            cols = len(item._cellvalues[0]) if rows > 0 else 0
            if rows > 0 and cols > 0:
                table = doc.add_table(rows=rows, cols=cols)
                table.alignment = WD_TABLE_ALIGNMENT.CENTER  # CENTER TABLE ALIGNMENT
                table.autofit = False
                set_table_borders(table, color="CBD5E1", sz="4")
                col_widths_pt = getattr(item, '_colWidths', None)
                total_w = sum(col_widths_pt) if col_widths_pt else 460.0

                for r_idx, row in enumerate(item._cellvalues):
                    for c_idx, cell_data in enumerate(row):
                        cell = table.cell(r_idx, c_idx)
                        if col_widths_pt and c_idx < len(col_widths_pt):
                            cell.width = Inches(min(6.5, (col_widths_pt[c_idx] / total_w) * 6.3))
                        p = cell.paragraphs[0]
                        p.paragraph_format.space_before = Pt(2)
                        p.paragraph_format.space_after = Pt(2)
                        p.paragraph_format.line_spacing = 1.05
                        is_hdr = (r_idx == 0)
                        if is_hdr:
                            set_cell_background(cell, "1E3A8A")
                            set_cell_margins(cell, top=70, bottom=70, left=90, right=90)
                            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                        else:
                            bg = "F8FAFC" if r_idx % 2 == 1 else "FFFFFF"
                            set_cell_background(cell, bg)
                            set_cell_margins(cell, top=45, bottom=45, left=75, right=75)
                            p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                        
                        # Extract and parse cell contents
                        cell_texts = []
                        if isinstance(cell_data, list):
                            for sub in cell_data:
                                if hasattr(sub, 'text'):
                                    cell_texts.append(sub.text)
                                else:
                                    cell_texts.append(str(sub))
                        elif hasattr(cell_data, 'text'):
                            cell_texts.append(cell_data.text)
                        else:
                            cell_texts.append(str(cell_data))
                        combined_cell = '<br/>'.join(cell_texts)
                        def_color = RGBColor(255, 255, 255) if is_hdr else RGBColor(30, 41, 59)
                        add_formatted_runs(p, combined_cell, default_size=Pt(8.0), default_color=def_color, default_bold=is_hdr)

        elif isinstance(item, PageBreak):
            doc.add_page_break()

        elif isinstance(item, HRFlowable):
            p = doc.add_paragraph()
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_before = Pt(4)
            p.paragraph_format.space_after = Pt(8)
            r = p.add_run('―' * 38)
            r.font.name = 'Times New Roman'
            r.font.size = Pt(9)
            r.font.color.rgb = RGBColor(30, 58, 138)

    # Save output docx file
    doc.save(docx_path)
    print(f"Successfully compiled Academic Final Project Report DOCX at: {docx_path}")


if __name__ == "__main__":
    out_docx = r"D:\Python\AITR\AITR_Academic_Project_Report.docx"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_academic_report_docx(out_docx, assets, diagrams)
