"""
AI Extraction Router (FR-003).
Calls LLMExtractor to parse financial fields and detect form type.
Saves results into ExtractedData table.
"""
import json
import logging
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import DocumentModel, ExtractedDataModel, get_db
from schemas import ExtractionOut
from services.extractor import LLMExtractor
from services.parsers.docx_parser import DocxParser
from services.parsers.pdf_parser import PdfParser

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/extract", tags=["AI Extraction"])


@router.post("/{document_id}", response_model=ExtractionOut)
def extract_document(document_id: str, db: Session = Depends(get_db)):
    doc = db.query(DocumentModel).filter(DocumentModel.document_id == document_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found.")

    # Re-parse file text
    parser = PdfParser() if doc.file_type == "PDF" else DocxParser()
    try:
        parsed = parser.parse(doc.file_path)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Failed to re-parse file: {exc}")

    extractor = LLMExtractor()
    try:
        extracted_data = extractor.extract(parsed)
    except Exception as exc:
        logger.exception("AI Extraction error")
        raise HTTPException(
            status_code=502,
            detail=f"AI Extraction failed: {str(exc)}. Please review the document or configure an active NVIDIA model."
        )

    # Detect form type
    detected_form = extracted_data.get("form_type", "ITR-1")
    doc.form_type = detected_form
    doc.status = "EXTRACTED"

    # Check if record already exists for re-extraction
    ext_record = db.query(ExtractedDataModel).filter(ExtractedDataModel.document_id == document_id).first()
    if ext_record:
        ext_record.extracted_json = json.dumps(extracted_data)
        ext_record.reviewed_json = None
        ext_record.is_reviewed = False
    else:
        ext_record = ExtractedDataModel(
            document_id=document_id,
            extracted_json=json.dumps(extracted_data),
            reviewed_json=None,
            is_reviewed=False,
        )
        db.add(ext_record)

    db.commit()
    db.refresh(ext_record)

    return ExtractionOut(
        extraction_id=ext_record.extraction_id,
        document_id=ext_record.document_id,
        extracted_json=json.loads(ext_record.extracted_json),
        reviewed_json=json.loads(ext_record.reviewed_json) if ext_record.reviewed_json else None,
        is_reviewed=ext_record.is_reviewed,
        extracted_at=ext_record.extracted_at,
    )
