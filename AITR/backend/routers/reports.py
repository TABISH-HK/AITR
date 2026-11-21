"""
Report Generation Router (FR-009).
Generates PDF and DOCX computation sheets and serves file downloads.
"""
import json
import os
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from database import ComputationModel, DocumentModel, ExtractedDataModel, ReportModel, get_db
from schemas import ReportOut
from services.report_generator.docx_report import DocxReportGenerator
from services.report_generator.pdf_report import PdfReportGenerator

router = APIRouter(prefix="/api/reports", tags=["Reports"])

REPORTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "reports"))
os.makedirs(REPORTS_DIR, exist_ok=True)


@router.post("/generate/{computation_id}/{format}", response_model=ReportOut)
def generate_report(computation_id: str, format: str, db: Session = Depends(get_db)):
    format_clean = format.upper()
    if format_clean not in ("PDF", "DOCX"):
        raise HTTPException(status_code=400, detail="Invalid format. Supported formats: PDF, DOCX")

    comp = db.query(ComputationModel).filter(ComputationModel.computation_id == computation_id).first()
    if not comp:
        raise HTTPException(status_code=404, detail="Computation not found.")

    ext = db.query(ExtractedDataModel).filter(ExtractedDataModel.extraction_id == comp.extraction_id).first()
    doc = db.query(DocumentModel).filter(DocumentModel.document_id == ext.document_id).first() if ext else None

    # Load metadata
    data = json.loads(ext.reviewed_json) if (ext and ext.reviewed_json) else (json.loads(ext.extracted_json) if ext else {})
    doc_metadata = {
        "name": data.get("name"),
        "pan": data.get("pan"),
        "file_name": doc.file_name if doc else "Document",
        "form_type": doc.form_type if doc else "ITR-1",
    }

    comp_data = json.loads(comp.breakdown_json)
    comp_data["assessment_year"] = comp.assessment_year
    comp_data["computed_at"] = comp.computed_at
    comp_data["recommended_regime"] = comp.recommended_regime

    file_name = f"ITR_Computation_{computation_id[:8]}.{format_clean.lower()}"
    output_path = os.path.join(REPORTS_DIR, file_name)

    generator = PdfReportGenerator() if format_clean == "PDF" else DocxReportGenerator()
    try:
        generator.generate(comp_data, doc_metadata, output_path)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Failed to generate report: {str(exc)}")

    # Save to database
    report_record = ReportModel(
        computation_id=computation_id,
        format=format_clean,
        file_path=output_path,
    )
    db.add(report_record)
    db.commit()
    db.refresh(report_record)

    return ReportOut(
        report_id=report_record.report_id,
        computation_id=report_record.computation_id,
        format=report_record.format,
        download_url=f"/api/reports/download/{report_record.report_id}",
        generated_at=report_record.generated_at,
    )


@router.get("/download/{report_id}")
def download_report(report_id: str, db: Session = Depends(get_db)):
    report = db.query(ReportModel).filter(ReportModel.report_id == report_id).first()
    if not report or not os.path.exists(report.file_path):
        raise HTTPException(status_code=404, detail="Report file not found.")

    media_type = "application/pdf" if report.format == "PDF" else "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    filename = os.path.basename(report.file_path)
    return FileResponse(path=report.file_path, filename=filename, media_type=media_type)
