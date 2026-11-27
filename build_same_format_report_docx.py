"""
Generate the AITR Academic Final Project Report in Microsoft Word (.docx) format.
STRICTLY mirrors the visual typography, chapter layout, table borders,
bottom-centered page numbering, and structure of the user's uploaded sample PDF (Final_Printable_SRS.pdf).
Starts on Page 1 with 'Chapter 1: INTRODUCTION', contains no colored banners or navy fills,
and maintains ~30 pages total with all images centered.
"""
import os
import re
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

from reportlab.platypus import Paragraph, Table, Image, PageBreak, Spacer
import build_same_format_report_pdf as bsfrp


def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)


def set_cell_margins(cell, top=60, bottom=60, left=90, right=90):
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


def set_table_borders(table, color="000000", sz="4", val="single"):
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


def add_formatted_runs(p, text, default_size=Pt(10), default_color=None, default_bold=False, default_italic=False):
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
            else:
                r.font.color.rgb = RGBColor(0, 0, 0)


def build_same_format_docx(docx_path: str, assets_dir: str, diagrams_dir: str):
    # 1. Capture story flowables from the verified 30-page PDF generator
    story_captured = []
    original_build = bsfrp.SimpleDocTemplate.build

    def mock_build(self, story, canvasmaker=None):
        story_captured.extend(story)

    bsfrp.SimpleDocTemplate.build = mock_build
    try:
        bsfrp.build_same_format_pdf(
            os.path.join(os.path.dirname(docx_path), "temp_build2.pdf"),
            assets_dir,
            diagrams_dir
        )
    finally:
        bsfrp.SimpleDocTemplate.build = original_build
        temp_pdf = os.path.join(os.path.dirname(docx_path), "temp_build2.pdf")
        if os.path.exists(temp_pdf):
            try:
                os.remove(temp_pdf)
            except Exception:
                pass

    # 2. Initialize Word Document with exact academic margins
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.75)
        s.bottom_margin = Inches(0.75)
        s.left_margin = Inches(1.0)
        s.right_margin = Inches(0.75)
        
        # In sample PDF: NO top header!
        header = s.header
        hp = header.paragraphs[0]
        hp.text = ""

        # Footer: centered page number in Times New Roman 10pt
        footer = s.footer
        fp = footer.paragraphs[0]
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        # In python-docx, adding a page number field
        f_run = fp.add_run()
        f_run.font.name = "Times New Roman"
        f_run.font.size = Pt(10)
        f_run.font.color.rgb = RGBColor(0, 0, 0)
        f_pPr = fp._p.get_or_add_pPr()
        f_fld = parse_xml(r'<w:fldSimple %s w:instr="PAGE"/>' % nsdecls('w'))
        fp._p.append(f_fld)

    # 3. Iterate over captured flowables and build Word elements
    for item in story_captured:
        if isinstance(item, Paragraph):
            sname = getattr(item.style, 'name', '')
            text = item.text.strip()
            if not text:
                continue
            p = doc.add_paragraph()
            
            if 'SampleChHeading' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.space_before = Pt(14)
                p.paragraph_format.space_after = Pt(10)
                add_formatted_runs(p, text, default_size=Pt(16), default_bold=True)
            elif 'SampleSecHeading' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                p.paragraph_format.space_before = Pt(12)
                p.paragraph_format.space_after = Pt(4)
                add_formatted_runs(p, text, default_size=Pt(13), default_bold=True)
            elif 'SampleSubSecHeading' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                p.paragraph_format.space_before = Pt(8)
                p.paragraph_format.space_after = Pt(3)
                add_formatted_runs(p, text, default_size=Pt(11), default_bold=True)
            elif 'SampleTabTitle' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER  # CENTERED RIGHT ABOVE TABLE
                p.paragraph_format.space_before = Pt(6)
                p.paragraph_format.space_after = Pt(3)
                add_formatted_runs(p, text, default_size=Pt(10), default_bold=True)
            elif 'SampleFigCaption' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER  # CENTERED BELOW IMAGE
                p.paragraph_format.space_before = Pt(3)
                p.paragraph_format.space_after = Pt(8)
                add_formatted_runs(p, text, default_size=Pt(10))
            elif 'SampleBullet' in sname:
                p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                p.paragraph_format.left_indent = Inches(0.25)
                p.paragraph_format.space_before = Pt(2)
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.line_spacing = 1.15
                add_formatted_runs(p, text, default_size=Pt(10.5))
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                p.paragraph_format.space_before = Pt(2)
                p.paragraph_format.space_after = Pt(3)
                p.paragraph_format.line_spacing = 1.15
                add_formatted_runs(p, text, default_size=Pt(10.5))

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
                set_table_borders(table, color="000000", sz="4")
                col_widths_pt = getattr(item, '_colWidths', None)
                total_w = sum(col_widths_pt) if col_widths_pt else 469.0

                for r_idx, row in enumerate(item._cellvalues):
                    for c_idx, cell_data in enumerate(row):
                        cell = table.cell(r_idx, c_idx)
                        if col_widths_pt and c_idx < len(col_widths_pt):
                            cell.width = Inches(min(6.5, (col_widths_pt[c_idx] / total_w) * 6.3))
                        p = cell.paragraphs[0]
                        p.paragraph_format.space_before = Pt(1.5)
                        p.paragraph_format.space_after = Pt(1.5)
                        p.paragraph_format.line_spacing = 1.05
                        is_hdr = (r_idx == 0)
                        if is_hdr:
                            set_cell_background(cell, "F2F2F2")  # Subtle light grey header, black text
                            set_cell_margins(cell, top=60, bottom=60, left=80, right=80)
                            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                        else:
                            set_cell_background(cell, "FFFFFF")
                            set_cell_margins(cell, top=45, bottom=45, left=70, right=70)
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
                        add_formatted_runs(p, combined_cell, default_size=Pt(8.5), default_bold=is_hdr)

        elif isinstance(item, PageBreak):
            doc.add_page_break()

    # Save output docx file
    doc.save(docx_path)
    print(f"Successfully compiled Sample-Format Academic DOCX at: {docx_path}")


if __name__ == "__main__":
    out_docx = r"D:\Python\AITR\AITR_Academic_Project_Report.docx"
    assets = r"D:\Python\AITR\report_assets"
    diagrams = r"D:\Python\AITR\srs_diagrams"
    build_same_format_docx(out_docx, assets, diagrams)
