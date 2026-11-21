"""
End-to-end API test using FastAPI TestClient.
Tests:
- /api/health
- /api/upload with sample PDF
- /api/compute with mock extracted data
- /api/reports/generate (PDF & DOCX)
- /api/history
"""
import io
import json
import os
import pytest
from fastapi.testclient import TestClient
from main import app
from database import SessionModel, DocumentModel, ExtractedDataModel, SessionLocal

client = TestClient(app)

def test_health_endpoint():
    res = client.get("/api/health")
    assert res.status_code == 200
    assert res.json()["status"] == "healthy"
    assert res.json()["assessment_year"] == "2025-26"

def test_upload_endpoint():
    sample_pdf = os.path.join(os.path.dirname(__file__), "sample_itr1_document.pdf")
    with open(sample_pdf, "rb") as f:
        file_bytes = f.read()

    res = client.post(
        "/api/upload",
        files={"file": ("sample_itr1_document.pdf", file_bytes, "application/pdf")},
        data={"session_id": "test_session_123"}
    )
    assert res.status_code == 200
    data = res.json()
    assert data["file_type"] == "PDF"
    assert data["status"] == "PARSED"
    assert "document_id" in data

def test_compute_and_report_flow():
    import uuid
    uid = str(uuid.uuid4())[:8]
    sess_id = f"sess_{uid}"
    doc_id = f"doc_{uid}"
    ext_id = f"ext_{uid}"

    # Insert test data into DB
    db = SessionLocal()
    sess = SessionModel(session_id=sess_id)
    db.add(sess)
    db.commit()

    doc = DocumentModel(
        document_id=doc_id,
        session_id=sess_id,
        file_name="test.pdf",
        file_type="PDF",
        file_path="dummy_path.pdf",
        form_type="ITR-1",
        status="EXTRACTED"
    )
    db.add(doc)
    db.commit()

    sample_extracted = {
        "form_type": "ITR-1",
        "name": "Tabish Hasan",
        "pan": "ABCDE1234F",
        "gross_salary": 1000000,
        "exemptions_u10": 50000,
        "house_property_income": 0,
        "other_income": 30000,
        "deduction_80c": 150000,
        "deduction_80d": 25000,
        "tds_total": 40000
    }

    ext = ExtractedDataModel(
        extraction_id=ext_id,
        document_id=doc_id,
        extracted_json=json.dumps(sample_extracted),
        is_reviewed=True,
        reviewed_json=json.dumps(sample_extracted)
    )
    db.add(ext)
    db.commit()
    db.close()

    # 1. Compute tax
    comp_res = client.post(f"/api/compute/{ext_id}")
    assert comp_res.status_code == 200
    comp_data = comp_res.json()
    assert comp_data["assessment_year"] == "2025-26"
    assert comp_data["recommended_regime"] in ("OLD", "NEW", "EQUAL")
    computation_id = comp_data["computation_id"]

    # 2. Generate PDF report
    pdf_res = client.post(f"/api/reports/generate/{computation_id}/PDF")
    assert pdf_res.status_code == 200
    pdf_info = pdf_res.json()
    assert pdf_info["format"] == "PDF"

    # Download PDF
    dl_pdf = client.get(pdf_info["download_url"])
    assert dl_pdf.status_code == 200
    assert dl_pdf.headers["content-type"] == "application/pdf"

    # 3. Generate DOCX report
    docx_res = client.post(f"/api/reports/generate/{computation_id}/DOCX")
    assert docx_res.status_code == 200
    docx_info = docx_res.json()
    assert docx_info["format"] == "DOCX"

    # Download DOCX
    dl_docx = client.get(docx_info["download_url"])
    assert dl_docx.status_code == 200

    # 4. Check Session History
    hist_res = client.get(f"/api/history/{sess_id}")
    assert hist_res.status_code == 200
    hist = hist_res.json()
    assert len(hist) >= 1
    assert hist[0]["document"]["document_id"] == doc_id
    assert len(hist[0]["reports"]) >= 2
