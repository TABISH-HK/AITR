"""
Session & History Router (FR-010).
Lists earlier documents, computations, and generated reports for a user's browser session.
"""
import json
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import ComputationModel, DocumentModel, ExtractedDataModel, ReportModel, SessionModel, get_db
from schemas import ComputationOut, DocumentOut, HistoryItem, RegimeResult, ReportOut, SessionOut, TaxBreakdownItem

router = APIRouter(prefix="/api/history", tags=["History"])


@router.get("/session/new", response_model=SessionOut)
def create_session(db: Session = Depends(get_db)):
    sess = SessionModel()
    db.add(sess)
    db.commit()
    db.refresh(sess)
    return SessionOut(session_id=sess.session_id, created_at=sess.created_at)


@router.get("/{session_id}", response_model=List[HistoryItem])
def get_session_history(session_id: str, db: Session = Depends(get_db)):
    sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if not sess:
        return []

    docs = db.query(DocumentModel).filter(DocumentModel.session_id == session_id).order_by(DocumentModel.uploaded_at.desc()).all()
    results = []

    for doc in docs:
        doc_out = DocumentOut(
            document_id=doc.document_id,
            session_id=doc.session_id,
            file_name=doc.file_name,
            file_type=doc.file_type,
            form_type=doc.form_type,
            status=doc.status,
            uploaded_at=doc.uploaded_at,
        )

        comp_out = None
        reports_out = []

        ext = db.query(ExtractedDataModel).filter(ExtractedDataModel.document_id == doc.document_id).first()
        if ext:
            comp = db.query(ComputationModel).filter(ComputationModel.extraction_id == ext.extraction_id).order_by(ComputationModel.computed_at.desc()).first()
            if comp:
                b = json.loads(comp.breakdown_json)
                def parse_r(r: dict):
                    return RegimeResult(
                        gross_total_income=r.get("gross_total_income", 0.0),
                        deductions=r.get("deductions", 0.0),
                        taxable_income=r.get("taxable_income", 0.0),
                        base_tax=r.get("base_tax", 0.0),
                        special_rate_tax=r.get("special_rate_tax", 0.0),
                        rebate_87a=r.get("rebate_87a", 0.0),
                        marginal_relief=r.get("marginal_relief", 0.0),
                        surcharge=r.get("surcharge", 0.0),
                        cess=r.get("cess", 0.0),
                        total_tax=r.get("total_tax", 0.0),
                        tds=r.get("tds", 0.0),
                        tax_payable=r.get("tax_payable", 0.0),
                        breakdown=[TaxBreakdownItem(**item) for item in r.get("breakdown", [])],
                    )

                comp_out = ComputationOut(
                    computation_id=comp.computation_id,
                    extraction_id=comp.extraction_id,
                    assessment_year=comp.assessment_year,
                    old_regime=parse_r(b.get("old_regime", {})),
                    new_regime=parse_r(b.get("new_regime", {})),
                    recommended_regime=comp.recommended_regime,
                    computed_at=comp.computed_at,
                )

                reps = db.query(ReportModel).filter(ReportModel.computation_id == comp.computation_id).all()
                for rep in reps:
                    reports_out.append(ReportOut(
                        report_id=rep.report_id,
                        computation_id=rep.computation_id,
                        format=rep.format,
                        download_url=f"/api/reports/download/{rep.report_id}",
                        generated_at=rep.generated_at,
                    ))

        results.append(HistoryItem(
            document=doc_out,
            computation=comp_out,
            reports=reports_out,
        ))

    return results
