# PROJECT REPORT
# AI-Driven Income Tax Return (ITR) Computation System (AITR)

**Academic Submission:**  
*Department of Computer Science, Aligarh Muslim University (AMU)*  
*Master of Computer Applications (MCA) — Mini Project*  
*Academic Session: 2026 – 2027*  

**Candidate Name:** Tabish Hasan  
**Roll / Enrolment No:** 25CAMSA156  
**Project Repository:** [https://github.com/TABISH-HK/AITR](https://github.com/TABISH-HK/AITR)  
**Live Application Deployment:** [https://aitr-drab.vercel.app/](https://aitr-drab.vercel.app/)  

---

## Certificate of Authenticity & Declaration

I hereby declare that the project titled **"AI-Driven Income Tax Return (ITR) Computation System (AITR)"** submitted by me to the **Department of Computer Science, Aligarh Muslim University**, in partial fulfillment of the requirements for the award of the degree of **Master of Computer Applications (MCA)**, is an original record of work done by me under the guidance and supervision of faculty mentors during the academic session 2026–2027.

The code, methodologies, deterministic tax calculation models, and documentation presented in this report have been executed and verified in accordance with the statutory provisions of the Indian Income Tax Act, 1961.

---

## Acknowledgement

I would like to express my sincere gratitude to the faculty and mentors of the **Department of Computer Science, Aligarh Muslim University (AMU)** for their invaluable guidance, encouragement, and constructive critique throughout the development of this project.

I am also thankful to the open-source developer communities behind FastAPI, React, Three.js, ReportLab, and NVIDIA NIM for providing modern tooling and documentation that made this full-stack engineering work possible.

---

## Executive Summary

Income tax calculation in India is undergoing a historic transition with dual tax regimes (the progressive Old Tax Regime and the concessional Section 115BAC New Tax Regime) evolving across annual Union Budgets. Taxpayers and Chartered Accountants (CAs) spend substantial hours manually inspecting complex Form 16, ITR acknowledgements, salary slips, and capital gains statements to transcribe figures into computation worksheets.

The **AI-Driven Income Tax Return (ITR) Computation System (AITR)** solves this problem through an automated **Hybrid AI + Deterministic** architecture:
1. **Document Ingestion:** Accepts PDF and Word (DOCX) financial documents up to 25MB.
2. **Hybrid Semantic Extraction:** Employs high-precision regex extraction rules combined with the **NVIDIA NIM LLM** (Nemotron reasoning model) to parse unstructured or complex tabular financial heads without transcription mistakes.
3. **Deterministic Calculation Engine:** Evaluates exact income tax liability under both Old and New Tax Regimes with 0% algorithmic hallucination, covering **ITR-1 (Sahaj)**, **ITR-2 (Capital Gains & Section 115BBH VDA/Crypto)**, and **ITR-4 (Sugam Sections 44AD/44ADA Presumptive)** for **AY 2025-26 and AY 2026-27**.
4. **Statutory Rounding Compliance:** Adheres to Section 288A (taxable income to nearest ₹10) and Section 288B (tax/refund to nearest rupee).
5. **Instant Audit Note Export:** Generates official Chartered Accountant-format computation sheets in print-ready PDF and editable Microsoft Word (DOCX) formats.
6. **Reactive WebGL UI:** Modern frontend powered by React 18, Tailwind CSS, and a real-time Three.js GridScan shader background.

---

## 1. Introduction & Background

### 1.1 Motivation & Problem Statement
Filing Indian Income Tax Returns involves navigating numerous legal sections:
- **Salary Deductions:** Section 16(ia) standard deduction (₹50,000 Old vs. ₹75,000 New Regime in AY 2025-26/26-27).
- **Chapter VI-A Relief:** Sections 80C, 80D, and 80TTA allowed exclusively under the Old Regime.
- **Section 87A Rebate:** Up to ₹12,500 under Old Regime (taxable income up to ₹5,00,000) vs. ₹25,000 under New Regime (taxable income up to ₹7,00,000).
- **Special Rate Assets:** Virtual Digital Assets (Crypto/NFTs) under Section 115BBH taxed at a flat 30% plus 4% cess without deduction or set-off.
- **Presumptive Taxation:** Small businesses (Section 44AD @ 6%/8%) and professionals (Section 44ADA @ 50%).

Traditional accounting software requires manual data entry for dozens of fields, while generic Generative AI tools (ChatGPT, Claude) frequently hallucinate arithmetic sums or misapply Indian tax slabs. AITR bridges this gap by using AI solely for document reading and pure deterministic Python algorithms for computation.

### 1.2 Objectives
- Build an automated ingestion pipeline for ITR-1, ITR-2, and ITR-4 acknowledgements.
- Provide a dual-layer extraction engine (Regex + LLM) ensuring resilient fallback.
- Support dynamic multi-year computation switching between AY 2025-26 and AY 2026-27.
- Implement side-by-side Old vs. New Regime tax comparison with optimal regime recommendation.
- Export CA-standard downloadable audit notes in PDF and Word formats.
- Deploy the production web application on modern cloud infrastructure (Vercel serverless).

---

## 2. System Architecture & Methodology

### 2.1 High-Level Architecture
AITR follows a decoupled client-server architecture:
- **Frontend Layer:** React 18 SPA (Vite build) with Tailwind CSS and Three.js WebGL shader background.
- **API Routing Layer:** High-performance asynchronous FastAPI REST endpoints.
- **Document Ingestion & Text Parsing:** `pdfplumber` and `python-docx` text extraction pipeline with selectable text validation.
- **Hybrid Extraction Engine:** Regular expression tokenizers + NVIDIA NIM OpenAI-compatible API inference.
- **Deterministic Tax Engines:** Abstract `BaseTaxEngine` extended into `ITR1Engine`, `ITR2Engine`, and `ITR4Engine`.
- **Persistence Layer:** SQLite with Write-Ahead Logging (WAL) and serverless `/tmp` dynamic storage binding.
- **Document Generation Layer:** ReportLab Canvas and `python-docx` dynamic templates.

```
+-------------------------------------------------------------------------------+
|                             Client Browser (SPA)                              |
|   [Three.js WebGL GridScan] <---> [Upload] <---> [Review] <---> [Results]    |
+---------------------------------------+---------------------------------------+
                                        | HTTPS / REST (JSON + Multipart)
+---------------------------------------v---------------------------------------+
|                               FastAPI Backend                                 |
|  +--------------------+  +----------------------+  +-----------------------+  |
|  | Document Ingestion |  | Hybrid Extractor     |  | Tax Engine Suite      |  |
|  | (pdfplumber/docx)  |  | (Regex + NVIDIA NIM) |  | (ITR-1, ITR-2, ITR-4) |  |
|  +--------------------+  +----------------------+  +-----------------------+  |
|            |                         |                          |             |
|            v                         v                          v             |
|  +--------------------+  +----------------------+  +-----------------------+  |
|  | SQLite DB Storage  |  | Dynamic AY Config    |  | CA Report Generator   |  |
|  | (Session/Doc/Comp) |  | (AY 25-26 & 26-27)   |  | (ReportLab / docx)    |  |
|  +--------------------+  +----------------------+  +-----------------------+  |
+-------------------------------------------------------------------------------+
```

---

## 3. Database Design & Entity Modeling

The database schema is designed around 5 relational entities in SQLite:
1. `session`: Session isolation per browser instance.
2. `document`: File metadata, original filename, format, and status.
3. `extracted_data`: Raw extracted JSON and user-modified reviewed JSON.
4. `computation`: Dual-regime calculated taxes, breakdown items, and recommended regime.
5. `report`: Records of generated PDF/DOCX files.

### 3.1 Classical Chen's ER Diagram
Entities are represented as **Rectangles**, Relationships as **Diamonds** (with cardinality ratios), and Attributes as **Ovals** with Primary Keys underlined:

```
[SESSION] ---1--- {has} ---N--- [DOCUMENT] ---1--- {produces} ---1--- [EXTRACTED_DATA]
                                                                             |
                                                                             1
                                                                             |
                                                                          {yields}
                                                                             |
                                                                             N
                                                                             |
                                     [REPORT] ---N--- {generates} ---1--- [COMPUTATION]
```

---

## 4. Key Implementation Modules

### 4.1 Hybrid Extraction Engine (`services/extractor.py`)
- Executes strict regex capture for 10-digit PAN (`[A-Z]{5}[0-9]{4}[A-Z]`), 12-digit masked Aadhaar (`7xxx xxxx 1485`), Assessment Year, Gross Salary, and Section 115BBH VDA gains.
- Sends document text to NVIDIA NIM LLM (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) with structured JSON schema constraints.
- Employs a resilient fallback: if LLM inference times out or fails JSON decoding, the deterministic regex engine provides full extraction continuity without breaking user flow.

### 4.2 Deterministic Tax Engine (`services/tax_engine/`)
- **ITR-1 Engine:** Computes gross salary less Section 10 exemptions, deducts standard deduction, computes slab tax under Old vs. New Regime, and applies Section 87A rebate and 4% Health & Education Cess.
- **ITR-2 Engine:** Isolates Virtual Digital Assets under Section 115BBH, computes flat 30% tax, calculates Short-Term Capital Gains (Section 111A @ 15%/20%) and Long-Term Capital Gains (Section 112 @ 10%/12.5%).
- **ITR-4 Engine:** Implements presumptive taxation under Section 44AD (6% digital / 8% cash turnover) and Section 44ADA (50% gross professional receipts).
- **Statutory Rounding:** Section 288A rounds taxable income to nearest ₹10; Section 288B rounds total tax to nearest rupee.

### 4.3 Report Generation Engine (`services/report_generator/`)
- Generates official CA-format Computation of Total Income sheets matching the format used by practicing Chartered Accountants across India.
- Exports both vector PDF (via ReportLab) and editable DOCX formats.

---

## 5. System Execution Screenshots & Verification

The operational screens of the system demonstrate the end-to-end workflow:

### 5.1 Document Ingestion Screen
*Users upload Form 16, salary certificates, or ITR acknowledgment files (PDF/DOCX). The interface features the interactive Three.js WebGL GridScan shader background:*

![Document Ingestion Screen](file:///D:/Python/AITR/report_assets/screen_upload.jpg)  
*Figure 5.1: AITR Ingestion Interface with interactive drag-and-drop zone and WebGL GridScan visual shader.*

---

### 5.2 Comparative Tax Computation Results
*Upon review and calculation, the system displays side-by-side comparative cards for the Old Tax Regime and Section 115BAC New Tax Regime, highlighting the optimal recommendation and net tax payable or refundable:*

![Comparative Tax Computation Results](file:///D:/Python/AITR/report_assets/screen_results.jpg)  
*Figure 5.2: Dual-regime comparative evaluation showing Old vs. New Regime breakdown, Section 87A rebate, TDS credit, and recommended regime.*

---

### 5.3 Chartered Accountant (CA) Audit Computation Note
*Downloadable, print-ready formal CA Statement of Total Income generated dynamically by the ReportLab engine:*

![CA Audit Computation Note](file:///D:/Python/AITR/report_assets/screen_ca_report.png)  
*Figure 5.3: Generated CA Audit Note detailing taxpayer particulars, Section 115BAC computations, statutory rounding under Section 288A, and dual-regime comparison.*

---

## 6. Mathematical Verification & Test Cases

### Test Case 1: Taxpayer SHAKEV ULLAH KHAN (AY 2025-26)
- **Gross Total Income:** ₹4,046
- **Chapter VI-A Deductions:** ₹0
- **Taxable Total Income:** ₹4,046 $\rightarrow$ Rounded u/s 288A: **₹4,050**
- **Base Slab Tax (Old & New):** ₹0 (below basic exemption limit)
- **Section 87A Rebate:** ₹0
- **Health & Education Cess (4%):** ₹0
- **Total Tax Liability:** **₹0**
- **TDS Paid at Source:** ₹10,238
- **Net Refund Due:** **-₹10,238**
- **Recommendation:** **EQUAL REGIME** (Both regimes result in ₹0 tax liability and full ₹10,238 refund).

### Test Case 2: Resident Individual with Salary & Crypto Gains (AY 2025-26)
- **Gross Salary:** ₹12,00,000
- **VDA (Crypto) Gains u/s 115BBH:** ₹1,00,000
- **Section 80C Deductions:** ₹1,50,000
- **New Regime Computation:**
  - Salary Net of Std Ded (₹75,000): ₹11,25,000
  - Slab Tax on Salary: ₹68,750
  - Tax on VDA @ 30%: ₹30,000
  - Total Tax before Cess: ₹98,750
  - Cess @ 4%: ₹3,950
  - **Total Tax Liability:** **₹1,02,700**
- **Old Regime Computation:**
  - Salary Net of Std Ded (₹50,000) & 80C (₹1,50,000): ₹10,00,000
  - Slab Tax on Salary: ₹1,12,500
  - Tax on VDA @ 30%: ₹30,000
  - Total Tax before Cess: ₹1,42,500
  - Cess @ 4%: ₹5,700
  - **Total Tax Liability:** **₹1,48,200**
- **Recommendation:** **NEW REGIME (Saves ₹45,500)**.

---

## 7. Advantages & Key Innovations

1. **Zero Mathematical Hallucination:** Unlike generic chat AI models that make computational errors, AITR restricts AI to text understanding while all math runs through deterministic Python code.
2. **Multi-Assessment Year Support:** Instant switching between AY 2025-26 and AY 2026-27 to evaluate the impact of recent Union Budget provisions.
3. **Comprehensive Form Coverage:** Supports salaried (ITR-1), capital gains/crypto (ITR-2), and presumptive business/freelance returns (ITR-4).
4. **Statutory Rounding Precision:** Enforces Section 288A (nearest ₹10) and Section 288B (nearest rupee) standards matching CBDT portal outputs.
5. **Interactive Verification:** Human-in-the-loop review interface prevents OCR/parsing discrepancies from propagating into tax liability.
6. **Dual Export Formats:** Outputs both non-editable vector PDF audit notes and editable Microsoft Word documents for practitioner convenience.
7. **Cloud Ready & Serverless:** Architected with dynamic `/tmp` bindings for frictionless deployment on Vercel and traditional Docker/cloud platforms.

---

## 8. Conclusion & Future Enhancements

The **AI-Driven Income Tax Return Computation System (AITR)** demonstrates the effective convergence of Generative AI parsing and deterministic statutory computation. It simplifies complex tax filing processes, eliminates arithmetic errors, and provides instant, audit-grade computational transparency for Indian taxpayers.

### Future Scope:
- Integration with the official Income Tax Department JSON filing schema for 1-click ITR submission.
- Direct OCR scanning of scanned paper salary slips and Form 16 Part B attachments using computer vision.
- Extension to corporate tax assessments (ITR-6) and partnership firms (ITR-5).

---

*End of Academic Project Report — Department of Computer Science, Aligarh Muslim University.*
