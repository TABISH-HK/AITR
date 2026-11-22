"""
Review & Correction Router (FR-004).
Allows the user to verify, edit, and save extracted financial fields before running tax computation.
"""
import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import DocumentModel, ExtractedDataModel, get_db
from schemas import ExtractionOut, ReviewRequest

router = APIRouter(prefix="/api/review", tags=["Review & Correction"])


@router.get("/{extraction_id}", response_model=ExtractionOut)
def get_extraction(extraction_id: str, db: Session = Depends(get_db)):
    record = db.query(ExtractedDataModel).filter(ExtractedDataModel.extraction_id == extraction_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Extraction record not found.")

    return ExtractionOut(
        extraction_id=record.extraction_id,
        document_id=record.document_id,
        extracted_json=json.loads(record.extracted_json),
        reviewed_json=json.loads(record.reviewed_json) if record.reviewed_json else None,
        is_reviewed=record.is_reviewed,
        extracted_at=record.extracted_at,
    )


@router.put("/{extraction_id}", response_model=ExtractionOut)
def update_reviewed_data(extraction_id: str, payload: ReviewRequest, db: Session = Depends(get_db)):
    record = db.query(ExtractedDataModel).filter(ExtractedDataModel.extraction_id == extraction_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Extraction record not found.")

    record.reviewed_json = json.dumps(payload.reviewed_json)
    record.is_reviewed = True

    # If form type was edited in review, update document table as well
    if "form_type" in payload.reviewed_json:
        doc = db.query(DocumentModel).filter(DocumentModel.document_id == record.document_id).first()
        if doc and payload.reviewed_json["form_type"] in ("ITR-1", "ITR-2", "ITR-4"):
            doc.form_type = payload.reviewed_json["form_type"]

    db.commit()
    db.refresh(record)

    return ExtractionOut(
        extraction_id=record.extraction_id,
        document_id=record.document_id,
        extracted_json=json.loads(record.extracted_json),
        reviewed_json=json.loads(record.reviewed_json),
        is_reviewed=record.is_reviewed,
        extracted_at=record.extracted_at,
    )
