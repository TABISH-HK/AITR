"""
Upload & Ingestion Router (FR-001, FR-002).
Validates file format (PDF/DOCX), size (<=10MB), and selectable text.
Parses text & tables and saves Document record.
"""
import os
import shutil
import tempfile
import uuid
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

from database import DocumentModel, SessionModel, get_db
from schemas import DocumentOut
from services.parsers.docx_parser import DocxParser
from services.parsers.pdf_parser import PdfParser
from settings import settings

router = APIRouter(prefix="/api/upload", tags=["Upload"])

if os.environ.get("VERCEL"):
    UPLOAD_DIR = os.path.join(tempfile.gettempdir(), "uploads")
else:
    UPLOAD_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "uploads"))

os.makedirs(UPLOAD_DIR, exist_ok=True)

ALLOWED_EXTENSIONS = {".pdf": "PDF", ".docx": "DOCX"}


@router.post("", response_model=DocumentOut)
async def upload_document(
    file: UploadFile = File(...),
    session_id: str = Form(None),
    db: Session = Depends(get_db),
):
    # Ensure session exists or create one
    if not session_id:
        sess = SessionModel()
        db.add(sess)
        db.commit()
        session_id = sess.session_id
    else:
        sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
        if not sess:
            sess = SessionModel(session_id=session_id)
            db.add(sess)
            db.commit()

    # Validate file extension
    ext = os.path.splitext(file.filename or "")[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file type '{ext}'. Only digital PDF and DOCX files are supported."
        )

    file_type = ALLOWED_EXTENSIONS[ext]

    # Save file to disk
    doc_id = str(uuid.uuid4())
    safe_name = f"{doc_id}_{os.path.basename(file.filename)}"
    file_path = os.path.join(UPLOAD_DIR, safe_name)

    content = await file.read()
    max_bytes = settings.MAX_UPLOAD_SIZE_MB * 1024 * 1024
    if len(content) > max_bytes:
        raise HTTPException(
            status_code=400,
            detail=f"File exceeds maximum allowed size of {settings.MAX_UPLOAD_SIZE_MB} MB."
        )

    with open(file_path, "wb") as f:
        f.write(content)

    # Validate presence of selectable text (reject scanned / image-only files as per SRS TC-02)
    parser = PdfParser() if file_type == "PDF" else DocxParser()
    try:
        parsed = parser.parse(file_path)
        if not parser.has_selectable_text(parsed):
            # Clean up uploaded file
            os.remove(file_path)
            raise HTTPException(
                status_code=400,
                detail="Scanned or image-only document detected. The system requires selectable text in PDF or DOCX format."
            )
    except HTTPException:
        raise
    except Exception as exc:
        if os.path.exists(file_path):
            os.remove(file_path)
        raise HTTPException(
            status_code=400,
            detail=f"Failed to parse document: {str(exc)}. Please verify the file is not corrupted or password-protected."
        )

    # Save to database
    doc_record = DocumentModel(
        document_id=doc_id,
        session_id=session_id,
        file_name=file.filename,
        file_type=file_type,
        file_path=file_path,
        form_type=None,
        status="PARSED",
    )
    db.add(doc_record)
    db.commit()
    db.refresh(doc_record)

    return DocumentOut(
        document_id=doc_record.document_id,
        session_id=doc_record.session_id,
        file_name=doc_record.file_name,
        file_type=doc_record.file_type,
        form_type=doc_record.form_type,
        status=doc_record.status,
        uploaded_at=doc_record.uploaded_at,
    )
