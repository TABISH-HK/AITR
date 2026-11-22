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

    # Load full extracted/reviewed data
    data = json.loads(ext.reviewed_json) if (ext and ext.reviewed_json) else (json.loads(ext.extracted_json) if ext else {})

    # Pass ALL extracted fields to the report generator (not just name/pan)
    doc_metadata = {
        # Core identity
        "name": data.get("name"),
        "pan": data.get("pan"),
        "file_name": doc.file_name if doc else "Document",
        "form_type": doc.form_type if doc else data.get("form_type", "ITR-1"),
        # Personal details
        "father_name": data.get("father_name"),
        "address": data.get("address"),
        "email": data.get("email"),
        "mobile": data.get("mobile"),
        "dob": data.get("dob"),
        "aadhaar": data.get("aadhaar"),
        "status": data.get("status", "Individual"),
        # Filing details
        "filing_status": data.get("filing_status"),
        "filing_date": data.get("filing_date"),
        "ack_no": data.get("ack_no"),
        "assessment_year": data.get("assessment_year"),
        # Bank details
        "bank_name": data.get("bank_name"),
        "bank_account": data.get("bank_account"),
        "bank_ifsc": data.get("bank_ifsc"),
        "bank_type": data.get("bank_type"),
        # ITR-4 specific
        "nature_of_business": data.get("nature_of_business"),
        "presumptive_income_44ad": data.get("presumptive_income_44ad"),
        "business_income": data.get("business_income"),
        "other_income": data.get("other_income"),
        "turnover_44ad": data.get("turnover_44ad"),
        "turnover_44ad_digital": data.get("turnover_44ad_digital"),
        "turnover_44ad_cash": data.get("turnover_44ad_cash"),
        "turnover_44ad_other": data.get("turnover_44ad_other"),
        "deemed_profit_44ad_digital": data.get("deemed_profit_44ad_digital"),
        "deemed_profit_44ad_cash": data.get("deemed_profit_44ad_cash"),
        "sundry_creditors": data.get("sundry_creditors"),
        "inventories": data.get("inventories"),
        "sundry_debtors": data.get("sundry_debtors"),
        "cash_in_hand": data.get("cash_in_hand"),
        "total_assets": data.get("total_assets"),
        # ITR-1/ITR-2 specific income
        "gross_salary": data.get("gross_salary"),
        "net_salary": data.get("net_salary"),
        "exemptions_u10": data.get("exemptions_u10"),
        "professional_tax": data.get("professional_tax"),
        "house_property_income": data.get("house_property_income", 0),
        # Capital Gains (ITR-2)
        "stcg_111a": data.get("stcg_111a", 0),
        "ltcg_112a": data.get("ltcg_112a", 0),
        "other_stcg": data.get("other_stcg", 0),
        "other_ltcg": data.get("other_ltcg", 0),
        "vda_income": data.get("vda_income", 0),
        # Deductions
        "deduction_80c": data.get("deduction_80c", 0),
        "deduction_80ccd1b": data.get("deduction_80ccd1b", 0),
        "deduction_80d": data.get("deduction_80d", 0),
        "deduction_80tta": data.get("deduction_80tta", 0),
        "other_deductions": data.get("other_deductions", 0),
        # TDS
        "tds_total": data.get("tds_total", 0),
        "tds_salary": data.get("tds_salary", 0),
        "tds_other": data.get("tds_other", 0),
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
