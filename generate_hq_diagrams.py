"""
Generate publication-grade high-resolution (2x scale) vector diagrams for AITR
using clean SVG rendered via headless Microsoft Edge and auto-cropped with Pillow.
Matches the crisp academic UML, DFD, Chen ER, and State diagram style of Final_Printable_SRS.pdf.
"""
import os
import subprocess
import tempfile
from PIL import Image, ImageChops

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUT_DIR = r"D:\Python\AITR\srs_diagrams"

COMMON_DEFS = """
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
  </marker>
  <marker id="hollow-triangle" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
    <path d="M 0 1 L 11 6 L 0 11 z" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
  </marker>
  <marker id="open-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#1e293b" stroke-width="1.6"/>
  </marker>
  <style>
    text { font-family: 'Segoe UI', Arial, sans-serif; fill: #0f172a; }
    .title { font-weight: 700; font-size: 13px; }
    .bold { font-weight: 700; font-size: 11.5px; }
    .lbl { font-size: 11px; }
    .small { font-size: 9.5px; fill: #334155; }
    .edge-lbl { font-size: 10px; font-weight: 600; fill: #1e293b; }
    .pk { text-decoration: underline; font-weight: 700; }
  </style>
</defs>
"""


def render_svg_to_png(svg_content: str, out_png: str, width: int, height: int):
    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body {{ margin: 0; padding: 0; background: #ffffff; width: {width}px; height: {height}px; overflow: hidden; }}
  svg {{ display: block; }}
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  {COMMON_DEFS}
  {svg_content}
</svg>
</body>
</html>"""

    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(html)
        html_path = f.name

    raw_png = out_png + ".raw.png"
    try:
        cmd = [
            EDGE_PATH,
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            f"--window-size={width},{height}",
            "--force-device-scale-factor=2",
            f"--screenshot={raw_png}",
            f"file:///{html_path.replace(os.sep, '/')}"
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

        # Auto-crop white margins and add clean 16px padding
        im = Image.open(raw_png).convert("RGB")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        diff = ImageChops.difference(im, bg)
        bbox = diff.getbbox()
        if bbox:
            pad = 24
            x0 = max(0, bbox[0] - pad)
            y0 = max(0, bbox[1] - pad)
            x1 = min(im.width, bbox[2] + pad)
            y1 = min(im.height, bbox[3] + pad)
            im = im.crop((x0, y0, x1, y1))
        im.save(out_png, dpi=(300, 300))
        print(f"Generated {os.path.basename(out_png)}: {im.size}")
    finally:
        if os.path.exists(html_path):
            os.remove(html_path)
        if os.path.exists(raw_png):
            os.remove(raw_png)


def label_pill(x, y, text, w=None):
    if w is None:
        w = max(36, len(text) * 6.2 + 12)
    return (
        f'<rect x="{x - w/2}" y="{y - 9}" width="{w}" height="18" rx="3" fill="#ffffff" stroke="none"/>'
        f'<text x="{x}" y="{y + 3.5}" text-anchor="middle" class="edge-lbl">{text}</text>'
    )


# 1. SYSTEM ARCHITECTURE (3-Tier Layered Architecture)
def build_sys_arch():
    svg = """
    <!-- Presentation Tier -->
    <rect x="40" y="20" width="820" height="115" rx="6" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="450" y="42" text-anchor="middle" class="title">Presentation Tier (Client Browser)</text>
    <rect x="110" y="58" width="210" height="58" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="215" y="82" text-anchor="middle" class="bold">React 18 SPA (Vite)</text>
    <text x="215" y="100" text-anchor="middle" class="small">Session Portal, Review Editor, History</text>

    <rect x="355" y="58" width="210" height="58" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="460" y="82" text-anchor="middle" class="bold">Three.js WebGL GridScan</text>
    <text x="460" y="100" text-anchor="middle" class="small">Interactive Shader UI &amp; Tailwind CSS</text>

    <rect x="600" y="58" width="210" height="58" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="705" y="82" text-anchor="middle" class="bold">Axios REST Client</text>
    <text x="705" y="100" text-anchor="middle" class="small">Multipart Upload &amp; File Stream Download</text>

    <line x1="450" y1="135" x2="450" y2="180" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>
    """ + label_pill(450, 157, "HTTPS / REST JSON", 120) + """

    <!-- Application Tier -->
    <rect x="40" y="180" width="820" height="270" rx="6" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="450" y="202" text-anchor="middle" class="title">Application Tier (FastAPI Python 3.10+ Backend)</text>

    <!-- Routers -->
    <rect x="70" y="218" width="760" height="50" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="450" y="238" text-anchor="middle" class="bold">FastAPI Routers &amp; Pydantic v2 Schema Validation</text>
    <text x="450" y="255" text-anchor="middle" class="small">/api/session  |  /api/upload  |  /api/extract  |  /api/review  |  /api/compute  |  /api/reports  |  /api/history</text>

    <line x1="200" y1="268" x2="200" y2="298" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <line x1="450" y1="268" x2="450" y2="298" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <line x1="700" y1="268" x2="700" y2="298" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <!-- Services -->
    <rect x="70" y="298" width="235" height="130" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="187" y="320" text-anchor="middle" class="bold">Ingestion &amp; Extraction</text>
    <text x="187" y="342" text-anchor="middle" class="small">• pdfplumber &amp; python-docx</text>
    <text x="187" y="360" text-anchor="middle" class="small">• Regex Primary Extractor</text>
    <text x="187" y="378" text-anchor="middle" class="small">• NVIDIA NIM LLaMA-3.3-70B</text>
    <text x="187" y="396" text-anchor="middle" class="small">• Form Classifier (ITR-1/2/4)</text>

    <rect x="332" y="298" width="236" height="130" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="450" y="320" text-anchor="middle" class="bold">Deterministic Tax Engine</text>
    <text x="450" y="342" text-anchor="middle" class="small">• Old Regime vs Sec 115BAC</text>
    <text x="450" y="360" text-anchor="middle" class="small">• Sec 87A Rebate &amp; Std Ded</text>
    <text x="450" y="378" text-anchor="middle" class="small">• Sec 115BBH VDA (Flat 30%)</text>
    <text x="450" y="396" text-anchor="middle" class="small">• Sec 288A/B Rounding + 4% Cess</text>

    <rect x="595" y="298" width="235" height="130" rx="4" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
    <text x="712" y="320" text-anchor="middle" class="bold">CA Report Generators</text>
    <text x="712" y="342" text-anchor="middle" class="small">• ReportLab PDF Compiler</text>
    <text x="712" y="360" text-anchor="middle" class="small">• python-docx Word Builder</text>
    <text x="712" y="378" text-anchor="middle" class="small">• ICAI Statement of Total Income</text>
    <text x="712" y="396" text-anchor="middle" class="small">• Dual-Regime Comparison Table</text>

    <line x1="450" y1="450" x2="450" y2="495" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>
    """ + label_pill(450, 472, "SQLAlchemy ORM (WAL Mode)", 165) + """

    <!-- Data Tier -->
    <rect x="190" y="495" width="520" height="95" rx="6" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
    <text x="450" y="518" text-anchor="middle" class="title">Data Tier (SQLite3 Relational Persistence)</text>
    <text x="450" y="542" text-anchor="middle" class="lbl">Tables: sessions  |  documents  |  extracted_data  |  computations  |  reports</text>
    <text x="450" y="564" text-anchor="middle" class="small">Local File Storage: /uploads (PDF/DOCX)  &amp;  /reports (Generated CA PDF/DOCX)</text>
    """
    render_svg_to_png(svg, os.path.join(OUT_DIR, "sys_arch.png"), 900, 610)


# 2. USE CASE DIAGRAM (Proper Stick Figure + System Boundary + Ovals)
def build_usecase():
    svg = """
    <!-- System Boundary -->
    <rect x="210" y="25" width="600" height="510" rx="4" fill="#ffffff" stroke="#1e293b" stroke-width="1.5"/>
    <text x="510" y="48" text-anchor="middle" class="title">AITR: AI-Driven Income Tax Return Computation System</text>

    <!-- Stick Figure Actor: Taxpayer / CA -->
    <circle cx="85" cy="240" r="18" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="85" y1="258" x2="85" y2="315" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="55" y1="278" x2="115" y2="278" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="85" y1="315" x2="60" y2="355" stroke="#1e293b" stroke-width="1.8"/>
    <line x1="85" y1="315" x2="110" y2="355" stroke="#1e293b" stroke-width="1.8"/>
    <text x="85" y="376" text-anchor="middle" class="bold">Taxpayer / CA</text>

    <!-- Use Case Ovals -->
    <ellipse cx="360" cy="95" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="99" text-anchor="middle" class="lbl">Start Taxpayer Session</text>

    <ellipse cx="360" cy="162" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="166" text-anchor="middle" class="lbl">Upload ITR Document (PDF/DOCX)</text>

    <ellipse cx="660" cy="162" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="660" y="159" text-anchor="middle" class="lbl">Extract Financial Fields</text>
    <text x="660" y="173" text-anchor="middle" class="small">(Regex + NVIDIA NIM)</text>

    <ellipse cx="360" cy="232" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="236" text-anchor="middle" class="lbl">Review &amp; Edit Extracted Data</text>

    <ellipse cx="360" cy="302" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="306" text-anchor="middle" class="lbl">Select Assessment Year</text>

    <ellipse cx="360" cy="372" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="369" text-anchor="middle" class="lbl">Compute Dual-Regime Tax</text>
    <text x="360" y="383" text-anchor="middle" class="small">(Old vs. Sec 115BAC)</text>

    <ellipse cx="660" cy="372" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="660" y="369" text-anchor="middle" class="lbl">Recommend Optimal Regime</text>
    <text x="660" y="383" text-anchor="middle" class="small">&amp; Savings Breakdown</text>

    <ellipse cx="360" cy="442" rx="115" ry="26" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="446" text-anchor="middle" class="lbl">Download CA Report (PDF/DOCX)</text>

    <ellipse cx="360" cy="500" rx="115" ry="24" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="360" y="504" text-anchor="middle" class="lbl">View Session History</text>

    <!-- Actor Associations -->
    <line x1="115" y1="265" x2="245" y2="95" stroke="#1e293b" stroke-width="1.2"/>
    <line x1="115" y1="272" x2="245" y2="162" stroke="#1e293b" stroke-width="1.2"/>
    <line x1="115" y1="280" x2="245" y2="232" stroke="#1e293b" stroke-width="1.2"/>
    <line x1="115" y1="286" x2="245" y2="302" stroke="#1e293b" stroke-width="1.2"/>
    <line x1="115" y1="294" x2="245" y2="372" stroke="#1e293b" stroke-width="1.2"/>
    <line x1="115" y1="302" x2="245" y2="442" stroke="#1e293b" stroke-width="1.2"/>
    <line x1="115" y1="310" x2="245" y2="500" stroke="#1e293b" stroke-width="1.2"/>

    <!-- Include Arrows -->
    <line x1="475" y1="162" x2="545" y2="162" stroke="#1e293b" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#open-arrow)"/>
    """ + label_pill(510, 147, "&lt;&lt;include&gt;&gt;", 68) + """

    <line x1="475" y1="372" x2="545" y2="372" stroke="#1e293b" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#open-arrow)"/>
    """ + label_pill(510, 357, "&lt;&lt;include&gt;&gt;", 68) + """
    """
    render_svg_to_png(svg, os.path.join(OUT_DIR, "usecase.png"), 840, 560)


# 3. ACTIVITY DIAGRAM 1: INGESTION & EXTRACTION (Portrait Swimlanes)
def build_activity_upload():
    svg = """
    <!-- Swimlane Headers -->
    <rect x="30" y="20" width="260" height="630" fill="#ffffff" stroke="#1e293b" stroke-width="1.4"/>
    <rect x="290" y="20" width="490" height="630" fill="#ffffff" stroke="#1e293b" stroke-width="1.4"/>
    <line x1="30" y1="52" x2="780" y2="52" stroke="#1e293b" stroke-width="1.4"/>
    <text x="160" y="40" text-anchor="middle" class="bold">Taxpayer / CA</text>
    <text x="535" y="40" text-anchor="middle" class="bold">AITR System (Backend &amp; AI)</text>

    <!-- Start Circle -->
    <circle cx="160" cy="80" r="10" fill="#0f172a"/>
    <line x1="160" y1="90" x2="160" y2="115" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <!-- Action 1: Open & Select -->
    <rect x="65" y="115" width="190" height="42" rx="12" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="160" y="133" text-anchor="middle" class="lbl">Start Session &amp; Upload</text>
    <text x="160" y="148" text-anchor="middle" class="small">PDF / DOCX (≤ 10 MB)</text>

    <!-- Arrow to System -->
    <path d="M 255 136 L 440 136" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <!-- Diamond 1: Valid File? -->
    <polygon points="520,108 600,136 520,164 440,136" fill="#fefce8" stroke="#1e293b" stroke-width="1.3"/>
    <text x="520" y="134" text-anchor="middle" class="small">Valid File Type</text>
    <text x="520" y="146" text-anchor="middle" class="small">&amp; Size ≤ 10MB?</text>

    <!-- No branch -> Reject -->
    <path d="M 600 136 L 645 136" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(622, 124, "No", 22) + """
    <rect x="645" y="116" width="115" height="40" rx="8" fill="#fef2f2" stroke="#1e293b" stroke-width="1.2"/>
    <text x="702" y="134" text-anchor="middle" class="small">Reject (400/413)</text>
    <text x="702" y="147" text-anchor="middle" class="small">Show Error</text>
    <path d="M 702 156 L 702 195" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <circle cx="702" cy="207" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="702" cy="207" r="6" fill="#0f172a"/>

    <!-- Yes branch -> Diamond 2 -->
    <path d="M 520 164 L 520 205" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(520, 184, "Yes", 26) + """

    <polygon points="520,205 600,235 520,265 440,235" fill="#fefce8" stroke="#1e293b" stroke-width="1.3"/>
    <text x="520" y="233" text-anchor="middle" class="small">Has Selectable</text>
    <text x="520" y="245" text-anchor="middle" class="small">Digital Text?</text>

    <!-- No branch -> Reject Scanned -->
    <path d="M 600 235 L 645 235" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(622, 223, "No", 22) + """
    <rect x="645" y="215" width="115" height="40" rx="8" fill="#fef2f2" stroke="#1e293b" stroke-width="1.2"/>
    <text x="702" y="233" text-anchor="middle" class="small">Reject Scanned</text>
    <text x="702" y="246" text-anchor="middle" class="small">Image PDF</text>
    <path d="M 702 215 L 702 197" fill="none" stroke="#1e293b" stroke-width="1.3"/>

    <!-- Yes branch -> Save & Parse -->
    <path d="M 520 265 L 520 298" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(520, 281, "Yes", 26) + """

    <rect x="405" y="298" width="230" height="40" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="520" y="315" text-anchor="middle" class="lbl">Extract Text (pdfplumber / docx)</text>
    <text x="520" y="329" text-anchor="middle" class="small">&amp; Persist DocumentModel</text>

    <line x1="520" y1="338" x2="520" y2="365" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <rect x="405" y="365" width="230" height="42" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="520" y="383" text-anchor="middle" class="lbl">Regex Primary + NVIDIA NIM LLM</text>
    <text x="520" y="397" text-anchor="middle" class="small">Map to Pydantic JSON &amp; Classify Form</text>

    <!-- Arrow back to Taxpayer for Review -->
    <path d="M 405 386 L 160 386 L 160 430" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <rect x="65" y="430" width="190" height="42" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="160" y="448" text-anchor="middle" class="lbl">Inspect Extracted Fields</text>
    <text x="160" y="462" text-anchor="middle" class="small">on Interactive Review Screen</text>

    <line x1="160" y1="472" x2="160" y2="500" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <!-- Diamond 3: Edits needed? -->
    <polygon points="160,500 235,528 160,556 85,528" fill="#fefce8" stroke="#1e293b" stroke-width="1.3"/>
    <text x="160" y="526" text-anchor="middle" class="small">Edits</text>
    <text x="160" y="538" text-anchor="middle" class="small">Needed?</text>

    <!-- Yes -> Update reviewed_json -->
    <path d="M 235 528 L 410 528" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(320, 516, "Yes", 26) + """
    <rect x="410" y="508" width="220" height="40" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="520" y="525" text-anchor="middle" class="lbl">Save reviewed_json</text>
    <text x="520" y="539" text-anchor="middle" class="small">(is_reviewed = true)</text>

    <!-- No -> Confirm AY -->
    <path d="M 160 556 L 160 600 L 410 600" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(220, 588, "No (Confirm AY)", 95) + """
    <path d="M 520 548 L 520 580" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <rect x="410" y="580" width="220" height="40" rx="10" fill="#f0fdf4" stroke="#1e293b" stroke-width="1.3"/>
    <text x="520" y="597" text-anchor="middle" class="lbl">Proceed to Dual-Regime</text>
    <text x="520" y="611" text-anchor="middle" class="small">Tax Computation Engine</text>

    <path d="M 630 600 L 685 600" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <circle cx="702" cy="600" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="702" cy="600" r="6" fill="#0f172a"/>
    """
    render_svg_to_png(svg, os.path.join(OUT_DIR, "activity_upload.png"), 810, 670)


# 4. ACTIVITY DIAGRAM 2: DUAL-REGIME COMPUTATION (Portrait Parallel Fork/Join)
def build_activity_compute():
    svg = """
    <!-- Start -->
    <circle cx="430" cy="25" r="10" fill="#0f172a"/>
    <line x1="430" y1="35" x2="430" y2="58" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <rect x="305" y="58" width="250" height="38" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="430" y="75" text-anchor="middle" class="lbl">Fetch Reviewed Data &amp; Load</text>
    <text x="430" y="89" text-anchor="middle" class="small">AY 2025-26 Rules from config.py</text>

    <line x1="430" y1="96" x2="430" y2="118" stroke="#1e293b" stroke-width="1.3"/>
    <!-- Fork Bar -->
    <rect x="190" y="118" width="480" height="5" fill="#0f172a"/>

    <line x1="220" y1="123" x2="220" y2="148" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <line x1="640" y1="123" x2="640" y2="148" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <!-- Left Lane: Old Tax Regime -->
    <rect x="60" y="148" width="320" height="295" rx="6" fill="#fffbeb" stroke="#334155" stroke-width="1.2"/>
    <text x="220" y="168" text-anchor="middle" class="bold">Old Tax Regime Path</text>

    <rect x="105" y="182" width="230" height="34" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="220" y="203" text-anchor="middle" class="small">Deduct Std Ded (₹50k) + Ch. VI-A</text>
    <line x1="220" y1="216" x2="220" y2="236" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>

    <rect x="105" y="236" width="230" height="34" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="220" y="257" text-anchor="middle" class="small">Apply Slabs: 0%, 5%, 20%, 30%</text>
    <line x1="220" y1="270" x2="220" y2="290" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>

    <polygon points="220,290 295,316 220,342 145,316" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="220" y="320" text-anchor="middle" class="small">Income ≤ ₹5L?</text>

    <path d="M 145 316 L 90 316 L 90 362 L 130 362" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>
    """ + label_pill(115, 304, "Yes", 24) + """
    <rect x="130" y="346" width="180" height="32" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="220" y="366" text-anchor="middle" class="small">Sec 87A Rebate (up to ₹12.5k)</text>
    <path d="M 295 316 L 350 316 L 350 408 L 300 408" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>
    """ + label_pill(325, 304, "No", 22) + """
    <line x1="220" y1="378" x2="220" y2="394" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>
    <rect x="140" y="394" width="160" height="32" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="220" y="414" text-anchor="middle" class="small">Add 4% Health &amp; Edu Cess</text>

    <!-- Right Lane: New Tax Regime -->
    <rect x="480" y="148" width="320" height="295" rx="6" fill="#f0fdf4" stroke="#334155" stroke-width="1.2"/>
    <text x="640" y="168" text-anchor="middle" class="bold">New Tax Regime (Sec 115BAC)</text>

    <rect x="525" y="182" width="230" height="34" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="640" y="203" text-anchor="middle" class="small">Deduct Std Ded (₹75k); Forfeit VI-A</text>
    <line x1="640" y1="216" x2="640" y2="236" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>

    <rect x="525" y="236" width="230" height="34" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="640" y="257" text-anchor="middle" class="small">Slabs: 0%, 5%, 10%, 15%, 20%, 30%</text>
    <line x1="640" y1="270" x2="640" y2="290" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>

    <polygon points="640,290 715,316 640,342 565,316" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="640" y="320" text-anchor="middle" class="small">Income ≤ ₹7L?</text>

    <path d="M 565 316 L 510 316 L 510 362 L 550 362" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>
    """ + label_pill(535, 304, "Yes", 24) + """
    <rect x="550" y="346" width="180" height="32" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="640" y="366" text-anchor="middle" class="small">Sec 87A Rebate (100% Zero Tax)</text>
    <path d="M 715 316 L 770 316 L 770 408 L 720 408" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>
    """ + label_pill(745, 304, "No", 22) + """
    <line x1="640" y1="378" x2="640" y2="394" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>
    <rect x="560" y="394" width="160" height="32" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
    <text x="640" y="414" text-anchor="middle" class="small">Add 4% Health &amp; Edu Cess</text>

    <!-- Join Bar -->
    <line x1="220" y1="443" x2="220" y2="465" stroke="#1e293b" stroke-width="1.3"/>
    <line x1="640" y1="443" x2="640" y2="465" stroke="#1e293b" stroke-width="1.3"/>
    <rect x="190" y="465" width="480" height="5" fill="#0f172a"/>

    <line x1="430" y1="470" x2="430" y2="492" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <rect x="280" y="492" width="300" height="36" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.3"/>
    <text x="430" y="508" text-anchor="middle" class="lbl">Add VDA (Sec 115BBH @ 30%), Deduct TDS,</text>
    <text x="430" y="522" text-anchor="middle" class="small">Apply Sec 288A/B Rounding to Nearest ₹10</text>

    <line x1="430" y1="528" x2="430" y2="550" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>

    <rect x="280" y="550" width="300" height="38" rx="10" fill="#f0fdf4" stroke="#1e293b" stroke-width="1.3"/>
    <text x="430" y="567" text-anchor="middle" class="bold">Compare Liabilities &amp; Recommend</text>
    <text x="430" y="581" text-anchor="middle" class="small">NEW / OLD / EQUAL + Persist Computation</text>

    <line x1="430" y1="588" x2="430" y2="612" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <circle cx="430" cy="624" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="430" cy="624" r="6" fill="#0f172a"/>
    """
    render_svg_to_png(svg, os.path.join(OUT_DIR, "activity_compute.png"), 860, 650)


# 5. DFD LEVEL 0 (Clean Context Diagram: Rectangles for Entities, Circle for Process)
def build_dfd0():
    svg = """
    <!-- External Entity 1 -->
    <rect x="30" y="95" width="150" height="60" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <text x="105" y="129" text-anchor="middle" class="bold">Taxpayer / CA</text>

    <!-- Central Process Circle -->
    <ellipse cx="430" cy="125" rx="95" ry="62" fill="#f8fafc" stroke="#1e293b" stroke-width="1.8"/>
    <text x="430" y="114" text-anchor="middle" class="bold">0.0</text>
    <text x="430" y="131" text-anchor="middle" class="bold">AITR System</text>
    <text x="430" y="147" text-anchor="middle" class="small">(ITR Computation)</text>

    <!-- External Entity 2 -->
    <rect x="680" y="95" width="160" height="60" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <text x="760" y="122" text-anchor="middle" class="bold">External NVIDIA</text>
    <text x="760" y="138" text-anchor="middle" class="bold">NIM AI Service</text>

    <!-- Arrows Left -->
    <path d="M 180 108 L 336 108" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(258, 92, "ITR PDF/DOCX &amp; Edits", 125) + """

    <path d="M 336 142 L 180 142" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(258, 158, "Tax Comparison &amp; CA Reports", 145) + """

    <!-- Arrows Right -->
    <path d="M 524 108 L 680 108" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(602, 92, "Document Text Stream", 120) + """

    <path d="M 680 142 L 524 142" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(602, 158, "Structured JSON Entities", 130) + """
    """
    render_svg_to_png(svg, os.path.join(OUT_DIR, "dfd0.png"), 870, 230)


# 6. DFD LEVEL 1 (Standard DFD Circles + Open-Ended Parallel Data Stores + White Labels)
def draw_datastore(x, y, w, h, code, name):
    return (
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="#ffffff" stroke="none"/>'
        f'<line x1="{x}" y1="{y}" x2="{x+w}" y2="{y}" stroke="#1e293b" stroke-width="1.5"/>'
        f'<line x1="{x}" y1="{y+h}" x2="{x+w}" y2="{y+h}" stroke="#1e293b" stroke-width="1.5"/>'
        f'<line x1="{x}" y1="{y}" x2="{x}" y2="{y+h}" stroke="#1e293b" stroke-width="1.5"/>'
        f'<line x1="{x+32}" y1="{y}" x2="{x+32}" y2="{y+h}" stroke="#1e293b" stroke-width="1.2"/>'
        f'<text x="{x+16}" y="{y+h/2+4}" text-anchor="middle" class="bold">{code}</text>'
        f'<text x="{x+32+(w-32)/2}" y="{y+h/2+4}" text-anchor="middle" class="small">{name}</text>'
    )


def build_dfd1():
    svg = ""
    # External Entity: Taxpayer / CA
    svg += """
    <rect x="405" y="20" width="150" height="44" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
    <text x="480" y="46" text-anchor="middle" class="bold">Taxpayer / CA</text>
    """

    # 5 Process Circles
    procs = [
        (110, 175, "1.0", "Upload &amp; Ingest"),
        (300, 175, "2.0", "Parse &amp; Extract"),
        (480, 175, "3.0", "Review &amp; Validate"),
        (665, 175, "4.0", "Compute Tax"),
        (850, 175, "5.0", "Generate Report"),
    ]
    for cx, cy, num, title in procs:
        svg += f'<circle cx="{cx}" cy="{cy}" r="48" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>'
        svg += f'<text x="{cx}" y="{cy-5}" text-anchor="middle" class="bold">{num}</text>'
        svg += f'<text x="{cx}" y="{cy+12}" text-anchor="middle" class="small">{title}</text>'

    # 4 Data Stores at bottom
    svg += draw_datastore(45, 345, 175, 36, "D1", "Documents Store")
    svg += draw_datastore(265, 345, 185, 36, "D2", "Extracted Data Store")
    svg += draw_datastore(500, 345, 185, 36, "D3", "Computations Store")
    svg += draw_datastore(735, 345, 175, 36, "D4", "Generated Reports")

    # Flows from Entity to Processes
    svg += '<path d="M 405 42 L 110 42 L 110 127" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(240, 42, "Upload PDF/DOCX", 95)

    svg += '<path d="M 480 64 L 480 127" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(480, 95, "Review Edits", 76)

    svg += '<path d="M 555 42 L 665 42 L 665 127" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(615, 42, "AY Selection", 72)

    svg += '<path d="M 850 127 L 850 32 L 555 32" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(730, 32, "CA PDF / DOCX Report", 120)

    # Inter-process / Data store flows
    svg += '<line x1="110" y1="223" x2="110" y2="345" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(110, 285, "Save File Meta", 82)

    svg += '<path d="M 160 345 L 285 220" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(210, 265, "Read File", 56)

    svg += '<line x1="300" y1="223" x2="300" y2="345" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(300, 295, "Save JSON", 64)

    svg += '<path d="M 420 345 L 465 221" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(410, 275, "Load JSON", 64)

    svg += '<path d="M 495 221 L 440 345" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(500, 295, "Update Reviewed", 90)

    svg += '<path d="M 450 363 L 490 363 L 645 218" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(580, 275, "Validated Data", 84)

    svg += '<line x1="665" y1="223" x2="665" y2="345" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(665, 295, "Save Results", 72)

    svg += '<path d="M 685 363 L 710 363 L 825 215" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(765, 275, "Tax Breakdown", 84)

    svg += '<line x1="850" y1="223" x2="850" y2="345" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>'
    svg += label_pill(850, 295, "Save Report Path", 90)

    render_svg_to_png(svg, os.path.join(OUT_DIR, "dfd1.png"), 960, 410)


# 7. CLASS DIAGRAM (Clean 2-Tier UML Class Diagram)
def draw_class_box(x, y, w, title, stereotype, attrs, methods):
    h_hdr = 42 if stereotype else 26
    h_attr = max(14, len(attrs) * 15 + 10) if attrs else 12
    h_meth = max(14, len(methods) * 15 + 10) if methods else 12
    total_h = h_hdr + h_attr + h_meth
    out = f'<rect x="{x}" y="{y}" width="{w}" height="{total_h}" fill="#ffffff" stroke="#1e293b" stroke-width="1.4"/>'
    out += f'<rect x="{x}" y="{y}" width="{w}" height="{h_hdr}" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>'
    if stereotype:
        out += f'<text x="{x+w/2}" y="{y+15}" text-anchor="middle" class="small">&lt;&lt;{stereotype}&gt;&gt;</text>'
        out += f'<text x="{x+w/2}" y="{y+32}" text-anchor="middle" class="bold">{title}</text>'
    else:
        out += f'<text x="{x+w/2}" y="{y+17}" text-anchor="middle" class="bold">{title}</text>'

    cy = y + h_hdr
    out += f'<line x1="{x}" y1="{cy}" x2="{x+w}" y2="{cy}" stroke="#1e293b" stroke-width="1.1"/>'
    for idx, a in enumerate(attrs):
        out += f'<text x="{x+8}" y="{cy + 14 + idx*15}" class="small">{a}</text>'

    cy2 = cy + h_attr
    out += f'<line x1="{x}" y1="{cy2}" x2="{x+w}" y2="{cy2}" stroke="#1e293b" stroke-width="1.1"/>'
    for idx, m in enumerate(methods):
        out += f'<text x="{x+8}" y="{cy2 + 14 + idx*15}" class="small">{m}</text>'
    return out, total_h


def build_class_diag():
    svg = ""
    # Top Tier: BaseTaxEngine + Subclasses
    b1, _ = draw_class_box(340, 20, 280, "BaseTaxEngine", "abstract",
        ["# slabs_old: dict", "# slabs_new: dict"],
        ["+ compute(data: dict) : dict", "# round_to_10(amount: Decimal) : Decimal", "# calculate_cess(tax: Decimal) : Decimal"]
    )
    svg += b1

    c1, _ = draw_class_box(30, 175, 270, "ITR1Engine", None, [],
        ["+ compute_old_regime(data: dict)", "+ compute_new_regime(data: dict)", "+ compute(data: dict) : dict"]
    )
    c2, _ = draw_class_box(345, 175, 270, "ITR2Engine", None, [],
        ["+ compute_vda_tax(gain: Decimal)", "+ compute_capital_gains(data: dict)", "+ compute(data: dict) : dict"]
    )
    c3, _ = draw_class_box(660, 175, 270, "ITR4Engine", None, [],
        ["+ compute_44ad(cash, digital)", "+ compute_44ada(gross_receipts)", "+ compute(data: dict) : dict"]
    )
    svg += c1 + c2 + c3

    # Inheritance arrows to BaseTaxEngine
    svg += '<path d="M 165 175 L 165 162 L 480 162 L 480 154" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#hollow-triangle)"/>'
    svg += '<path d="M 480 175 L 480 154" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#hollow-triangle)"/>'
    svg += '<path d="M 795 175 L 795 162 L 480 162 L 480 154" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#hollow-triangle)"/>'

    # Bottom Tier: ExtractorService, DatabaseModels, ReportService hierarchy
    e1, _ = draw_class_box(30, 320, 270, "ExtractorService", None,
        ["- nim_client: OpenAIClient"],
        ["+ extract(path, file_type) : dict", "+ extract_with_regex(text) : dict", "+ extract_with_llm(text) : dict"]
    )
    db, _ = draw_class_box(345, 320, 270, "DatabaseModels (SQLite3)", None,
        ["+ SessionModel, DocumentModel", "+ ExtractedDataModel, ReportModel", "+ ComputationModel"],
        ["+ save_record(), get_history()"]
    )
    rs, _ = draw_class_box(660, 310, 270, "ReportService", "abstract", [],
        ["+ generate(comp_id, data) : str"]
    )
    pdf_g, _ = draw_class_box(660, 415, 130, "PDFReportGen", None, [], ["+ generate()"])
    docx_g, _ = draw_class_box(800, 415, 130, "DOCXReportGen", None, [], ["+ generate()"])
    svg += e1 + db + rs + pdf_g + docx_g

    # Arrows
    svg += '<path d="M 725 415 L 725 400 L 795 400 L 795 388" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#hollow-triangle)"/>'
    svg += '<path d="M 865 415 L 865 400 L 795 400 L 795 388" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#hollow-triangle)"/>'

    svg += '<line x1="480" y1="265" x2="480" y2="320" stroke="#1e293b" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#open-arrow)"/>'
    svg += label_pill(480, 293, "persists", 48)

    render_svg_to_png(svg, os.path.join(OUT_DIR, "class_diag.png"), 960, 495)


# 8. CLASSICAL CHEN'S ER DIAGRAM (Balanced 2-Row Grid with Rectangles, Diamonds, Ovals)
def draw_entity(x, y, w, h, name):
    return (
        f'<rect x="{x - w/2}" y="{y - h/2}" width="{w}" height="{h}" fill="#eff6ff" stroke="#1e293b" stroke-width="1.6"/>'
        f'<text x="{x}" y="{y+4}" text-anchor="middle" class="bold">{name}</text>'
    )


def draw_diamond(x, y, w, h, name):
    pts = f"{x},{y-h/2} {x+w/2},{y} {x},{y+h/2} {x-w/2},{y}"
    return (
        f'<polygon points="{pts}" fill="#fef3c7" stroke="#1e293b" stroke-width="1.4"/>'
        f'<text x="{x}" y="{y+4}" text-anchor="middle" class="small" style="font-weight:700">{name}</text>'
    )


def draw_oval(ex, ey, ox, oy, label, is_pk=False):
    rx = max(44, len(label) * 3.5 + 14)
    cls = "small pk" if is_pk else "small"
    return (
        f'<line x1="{ex}" y1="{ey}" x2="{ox}" y2="{oy}" stroke="#475569" stroke-width="1.1"/>'
        f'<ellipse cx="{ox}" cy="{oy}" rx="{rx}" ry="15" fill="#ffffff" stroke="#1e293b" stroke-width="1.1"/>'
        f'<text x="{ox}" y="{oy+3.5}" text-anchor="middle" class="{cls}">{label}</text>'
    )


def build_er_chen():
    svg = ""
    # Top Row: SESSION (170,130) -- has --> DOCUMENT (520,130) -- produces --> EXTRACTED_DATA (870,130)
    # Bottom Row: REPORT (320,420) <-- generates -- COMPUTATION (720,420) <-- yields -- (down from EXTRACTED_DATA)

    # Attributes FIRST so lines go behind entities
    # SESSION (170, 130)
    svg += draw_oval(170, 130, 95, 50, "session_id (PK)", True)
    svg += draw_oval(170, 130, 235, 50, "username")
    svg += draw_oval(170, 130, 85, 200, "pan")
    svg += draw_oval(170, 130, 235, 200, "created_at")

    # DOCUMENT (520, 130)
    svg += draw_oval(520, 130, 415, 48, "document_id (PK)", True)
    svg += draw_oval(520, 130, 535, 42, "file_name")
    svg += draw_oval(520, 130, 645, 54, "file_type")
    svg += draw_oval(520, 130, 430, 212, "form_type")
    svg += draw_oval(520, 130, 545, 218, "status")
    svg += draw_oval(520, 130, 650, 205, "uploaded_at")

    # EXTRACTED_DATA (870, 130)
    svg += draw_oval(870, 130, 800, 48, "extraction_id (PK)", True)
    svg += draw_oval(870, 130, 955, 52, "extracted_json")
    svg += draw_oval(870, 130, 975, 210, "reviewed_json")
    svg += draw_oval(870, 130, 790, 210, "is_reviewed")

    # COMPUTATION (720, 440)
    svg += draw_oval(720, 440, 575, 365, "computation_id (PK)", True)
    svg += draw_oval(720, 440, 875, 365, "assessment_year")
    svg += draw_oval(720, 440, 880, 440, "old_regime_tax")
    svg += draw_oval(720, 440, 860, 515, "new_regime_tax")
    svg += draw_oval(720, 440, 720, 530, "recommended_regime")
    svg += draw_oval(720, 440, 565, 515, "breakdown_json")

    # REPORT (220, 440)
    svg += draw_oval(220, 440, 120, 365, "report_id (PK)", True)
    svg += draw_oval(220, 440, 305, 365, "format (PDF/DOCX)")
    svg += draw_oval(220, 440, 115, 515, "file_path")
    svg += draw_oval(220, 440, 305, 515, "generated_at")

    # Relationship lines + cardinalities
    # SESSION -- has -- DOCUMENT
    svg += '<line x1="230" y1="130" x2="450" y2="130" stroke="#1e293b" stroke-width="1.4"/>'
    svg += '<text x="255" y="122" class="bold">1</text>'
    svg += '<text x="425" y="122" class="bold">N</text>'

    # DOCUMENT -- produces -- EXTRACTED_DATA
    svg += '<line x1="590" y1="130" x2="800" y2="130" stroke="#1e293b" stroke-width="1.4"/>'
    svg += '<text x="615" y="122" class="bold">1</text>'
    svg += '<text x="775" y="122" class="bold">1</text>'

    # EXTRACTED_DATA -- yields -- COMPUTATION (elbow down)
    svg += '<path d="M 870 150 L 870 285 L 720 285 L 720 420" fill="none" stroke="#1e293b" stroke-width="1.4"/>'
    svg += '<text x="878" y="185" class="bold">1</text>'
    svg += '<text x="728" y="405" class="bold">N</text>'

    # COMPUTATION -- generates -- REPORT
    svg += '<line x1="645" y1="440" x2="290" y2="440" stroke="#1e293b" stroke-width="1.4"/>'
    svg += '<text x="615" y="432" class="bold">1</text>'
    svg += '<text x="315" y="432" class="bold">N</text>'

    # Diamonds
    svg += draw_diamond(340, 130, 82, 52, "has")
    svg += draw_diamond(695, 130, 92, 52, "produces")
    svg += draw_diamond(795, 285, 86, 52, "yields")
    svg += draw_diamond(468, 440, 98, 52, "generates")

    # Entity Rectangles on top
    svg += draw_entity(170, 130, 120, 40, "SESSION")
    svg += draw_entity(520, 130, 140, 40, "DOCUMENT")
    svg += draw_entity(870, 130, 145, 40, "EXTRACTED_DATA")
    svg += draw_entity(720, 440, 150, 40, "COMPUTATION")
    svg += draw_entity(220, 440, 130, 40, "REPORT")

    render_svg_to_png(svg, os.path.join(OUT_DIR, "er_chen.png"), 1050, 565)


# 9. STATE DIAGRAM (Compact Portrait Layout matching Figure 12 of Sample PDF)
def build_state_diag():
    svg = """
    <!-- Start Circle -->
    <circle cx="380" cy="25" r="10" fill="#0f172a"/>
    <line x1="380" y1="35" x2="380" y2="62" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(440, 48, "User uploads file", 96) + """

    <!-- Uploaded -->
    <rect x="315" y="62" width="130" height="36" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>
    <text x="380" y="84" text-anchor="middle" class="bold">Uploaded</text>

    <!-- Branch Left: Rejected -->
    <path d="M 315 80 L 140 80 L 140 148" fill="none" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(225, 68, "Invalid / Scanned PDF", 122) + """
    <rect x="75" y="148" width="130" height="36" rx="10" fill="#fef2f2" stroke="#1e293b" stroke-width="1.4"/>
    <text x="140" y="170" text-anchor="middle" class="bold">Rejected</text>

    <!-- Note next to Rejected -->
    <rect x="40" y="210" width="200" height="34" rx="4" fill="#fefce8" stroke="#94a3b8" stroke-width="1"/>
    <text x="140" y="231" text-anchor="middle" class="small">Rejected files are not stored.</text>

    <!-- Down to Final End from Rejected -->
    <path d="M 140 244 L 140 538 L 368 538" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow)"/>

    <!-- Validating -->
    <line x1="380" y1="98" x2="380" y2="148" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(445, 123, "Text extracted", 86) + """
    <rect x="315" y="148" width="130" height="36" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>
    <text x="380" y="170" text-anchor="middle" class="bold">Validating</text>

    <!-- Extracted -->
    <line x1="380" y1="184" x2="380" y2="232" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(460, 208, "Regex + NVIDIA NIM", 112) + """
    <rect x="315" y="232" width="130" height="36" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>
    <text x="380" y="254" text-anchor="middle" class="bold">Extracted</text>

    <!-- UnderReview -->
    <line x1="380" y1="268" x2="380" y2="316" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(465, 292, "User edits / confirms", 116) + """
    <rect x="315" y="316" width="130" height="36" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>
    <text x="380" y="338" text-anchor="middle" class="bold">Reviewed</text>

    <!-- Computed -->
    <line x1="380" y1="352" x2="380" y2="400" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(468, 376, "Slabs, 87A &amp; VDA math", 122) + """
    <rect x="315" y="400" width="130" height="36" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>
    <text x="380" y="422" text-anchor="middle" class="bold">Computed</text>

    <!-- ReportGenerated -->
    <line x1="380" y1="436" x2="380" y2="478" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    """ + label_pill(458, 457, "CA PDF / DOCX export", 115) + """
    <rect x="305" y="478" width="150" height="36" rx="10" fill="#f0fdf4" stroke="#1e293b" stroke-width="1.4"/>
    <text x="380" y="500" text-anchor="middle" class="bold">ReportGenerated</text>

    <line x1="380" y1="514" x2="380" y2="528" stroke="#1e293b" stroke-width="1.3" marker-end="url(#arrow)"/>
    <circle cx="380" cy="538" r="10" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="380" cy="538" r="6" fill="#0f172a"/>
    """
    render_svg_to_png(svg, os.path.join(OUT_DIR, "state_diag.png"), 640, 570)


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    build_sys_arch()
    build_usecase()
    build_activity_upload()
    build_activity_compute()
    build_dfd0()
    build_dfd1()
    build_class_diag()
    build_er_chen()
    build_state_diag()
    print("All high-resolution vector diagrams regenerated successfully!")
