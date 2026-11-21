# AI-Based ITR Computation System

> **Department of Computer Science, Aligarh Muslim University (AMU)**  
> **Course:** CAMS-3P01: Mini Project | M.C.A Semester – III (Session 2026-27)  
> **Student:** Tabish Hasan (Faculty No: 25CAMSA156, Enrollment No: GK7254)  
> **Guides:** Dr. Faisal Anwar, Dr. Faraz Masood, Mr. Shad Shamim, Mr. Ahsan Shameem  

---

## 📖 Overview

The **AI-Based ITR Computation System** is an end-to-end web application that assists taxpayers by:
1. Ingesting digital ITR documents in **PDF** or **DOC/DOCX** format.
2. Employing an **AI/LLM layer** (NVIDIA NIM API) to reliably extract financial data and detect the applicable ITR form (`ITR-1`, `ITR-2`, `ITR-4`).
3. Providing an interactive **Review & Correction UI** so the user can verify or adjust any extracted values before calculation.
4. Executing an **auditable, deterministic rule-based computation engine** under both the **Old** and **New** Tax Regimes for **Assessment Year 2025-26 (FY 2024-25)**.
5. Providing **Section 87A rebate** calculations, **4% Health & Education cess**, capital gains special rates (`111A`, `112A`), and presumptive taxation (`44AD`, `44ADA`, `44AE`).
6. Generating downloadable computation reports in **PDF** and **DOCX (Microsoft Word)** format.
7. Tracking session **Computation History** for re-downloading reports and reviewing past runs.

---

## 🏛️ System Architecture

```
[Presentation Tier]  React 18 + Vite + Tailwind CSS + Lucide Icons
                            │ (REST API via Axios)
[Logic Tier]         FastAPI (Python 3.11+) + Pydantic v2
                       ├── Parsers: pdfplumber & python-docx
                       ├── AI Extractor: NVIDIA NIM API (LLM Layer)
                       ├── Tax Engine: Pure Python Deterministic Modules (ITR-1, 2, 4)
                       └── Report Generators: WeasyPrint / ReportLab (PDF) & python-docx (DOCX)
                            │
[Data Tier]          SQLite + SQLAlchemy 2.0 (5 normalized tables in 3NF)
```

---

## 🚀 How to Run

### Prerequisites
- Python 3.11+
- Node.js 18+ (tested on Node v24)
- (Optional) NVIDIA NIM API Key for live LLM extraction.

### 1. Backend Setup

```bash
cd "D:\Agent BASED SYSTEM\ITR-System\backend"

# Install dependencies
pip install -r requirements.txt

# (Optional) Set your NVIDIA API key in .env
copy .env.example .env
# Edit .env with your NVIDIA_API_KEY if testing live AI extraction

# Start FastAPI server
python -m uvicorn main:app --reload --port 8000
```
API Documentation will be live at: `http://localhost:8000/docs`

### 2. Frontend Setup (Development Mode)

```bash
cd "D:\Agent BASED SYSTEM\ITR-System\frontend"

# Install npm packages
npm install

# Start Vite dev server
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Single-Server Mode
The FastAPI backend automatically serves the pre-built React frontend located in `frontend/dist/`. Simply running:
```bash
cd "D:\Agent BASED SYSTEM\ITR-System\backend"
python main.py
```
serves the complete application directly at `http://localhost:8000`!

---

## 🧪 Automated Testing

All test cases specified in **Section 5 of the SRS** are automated:

```bash
cd "D:\Agent BASED SYSTEM\ITR-System\backend"
pytest tests -v
```

### Test Case Coverage
- **TC-01 / TC-02:** PDF/DOCX digital parsing and selectable text validation
- **TC-04:** Section 87A Rebate computation (Zero tax for income ≤ ₹7L under New Regime)
- **TC-05:** Salaried case where Old Regime is lower (deduction thresholds)
- **TC-06:** Salaried case where New Regime is lower (standard deduction ₹75K)
- **TC-07:** ITR-2 with short-term capital gains under Section 111A (15% special rate)
- **TC-08:** ITR-2 with long-term capital gains under Section 112A (10% above ₹1L exemption)
- **TC-09:** ITR-4 with presumptive turnover under Section 44AD (8% / 6%) and 44ADA (50%)
- **TC-11:** User edits extracted values; computation uses corrected values
- **TC-12:** PDF and DOCX computation sheet generation with metadata and disclaimer

---

## 📂 Project Structure

```
ITR-System/
├── backend/
│   ├── config.py              # AY 2025-26 tax slabs, rates, limits
│   ├── database.py            # SQLAlchemy models & SQLite setup
│   ├── main.py                # FastAPI app + static asset server
│   ├── schemas.py             # Pydantic v2 schemas
│   ├── settings.py            # Environment configurations
│   ├── requirements.txt       # Python package requirements
│   ├── routers/               # API endpoints
│   │   ├── upload.py          # FR-001, FR-002: Ingestion & validation
│   │   ├── extraction.py      # FR-003: LLM extraction
│   │   ├── review.py          # FR-004: Interactive editing & save
│   │   ├── computation.py     # FR-005 to FR-008: Dual-regime engine
│   │   ├── reports.py         # FR-009: PDF & DOCX generation
│   │   └── history.py         # FR-010: Session computation history
│   ├── services/
│   │   ├── parsers/           # pdfplumber & python-docx parsers
│   │   ├── extractor.py       # NVIDIA NIM LLM Extractor
│   │   ├── tax_engine/        # ITR-1, ITR-2, ITR-4 rule-based engines
│   │   └── report_generator/  # PDF & Word report generators
│   ├── tests/                 # Full pytest suite
│   ├── uploads/               # Upload storage
│   └── reports/               # Generated reports storage
└── frontend/
    ├── src/
    │   ├── api/client.js      # Axios client with session tracking
    │   ├── components/        # Navbar, badges, UI elements
    │   ├── pages/
    │   │   ├── UploadPage.jsx # Drag-and-drop file ingestion
    │   │   ├── ReviewPage.jsx # Interactive field editor
    │   │   ├── ResultsPage.jsx# Comparison & PDF/DOCX downloads
    │   │   └── HistoryPage.jsx# Session history table
    │   ├── App.jsx            # Multi-step state management
    │   └── main.jsx           # React DOM root
    ├── package.json
    └── vite.config.js
```
