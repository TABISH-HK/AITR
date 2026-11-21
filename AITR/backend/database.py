"""
SQLAlchemy database setup and ORM models.
Five tables: Session, Document, ExtractedData, Computation, Report.
"""
import uuid
from datetime import datetime, timezone

from sqlalchemy import (
    Boolean,
    CheckConstraint,
    Column,
    ForeignKey,
    Index,
    Numeric,
    String,
    Text,
    UniqueConstraint,
    create_engine,
    event,
)
from sqlalchemy.orm import DeclarativeBase, Session, relationship, sessionmaker

from settings import settings

engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False},
)

# Enable WAL mode for better concurrent reads
@event.listens_for(engine, "connect")
def set_sqlite_pragma(dbapi_conn, _):
    cursor = dbapi_conn.cursor()
    cursor.execute("PRAGMA journal_mode=WAL")
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def _uuid() -> str:
    return str(uuid.uuid4())


def _now() -> datetime:
    return datetime.now(timezone.utc)


# ─── Models ──────────────────────────────────────────────────────────────────

class SessionModel(Base):
    __tablename__ = "session"

    session_id = Column(String, primary_key=True, default=_uuid)
    created_at = Column(String, nullable=False, default=lambda: _now().isoformat())

    documents = relationship("DocumentModel", back_populates="session", cascade="all, delete-orphan")


class DocumentModel(Base):
    __tablename__ = "document"

    document_id = Column(String, primary_key=True, default=_uuid)
    session_id  = Column(String, ForeignKey("session.session_id", ondelete="CASCADE"), nullable=False)
    file_name   = Column(String, nullable=False)
    file_type   = Column(String, nullable=False)
    file_path   = Column(String, nullable=False)
    form_type   = Column(String, nullable=True)
    status      = Column(String, nullable=False, default="UPLOADED")
    uploaded_at = Column(String, nullable=False, default=lambda: _now().isoformat())

    __table_args__ = (
        CheckConstraint("file_type IN ('PDF','DOCX')", name="ck_document_file_type"),
        CheckConstraint("form_type IN ('ITR-1','ITR-2','ITR-4') OR form_type IS NULL", name="ck_document_form_type"),
        Index("ix_document_session_id", "session_id"),
        Index("ix_document_uploaded_at", "uploaded_at"),
    )

    session       = relationship("SessionModel", back_populates="documents")
    extracted_data = relationship("ExtractedDataModel", back_populates="document", uselist=False, cascade="all, delete-orphan")


class ExtractedDataModel(Base):
    __tablename__ = "extracted_data"

    extraction_id  = Column(String, primary_key=True, default=_uuid)
    document_id    = Column(String, ForeignKey("document.document_id", ondelete="CASCADE"), nullable=False, unique=True)
    extracted_json = Column(Text, nullable=False)   # JSON stored as text
    reviewed_json  = Column(Text, nullable=True)
    is_reviewed    = Column(Boolean, nullable=False, default=False)
    extracted_at   = Column(String, nullable=False, default=lambda: _now().isoformat())

    __table_args__ = (
        UniqueConstraint("document_id", name="uq_extracted_data_document_id"),
    )

    document    = relationship("DocumentModel", back_populates="extracted_data")
    computations = relationship("ComputationModel", back_populates="extracted_data", cascade="all, delete-orphan")


class ComputationModel(Base):
    __tablename__ = "computation"

    computation_id     = Column(String, primary_key=True, default=_uuid)
    extraction_id      = Column(String, ForeignKey("extracted_data.extraction_id", ondelete="CASCADE"), nullable=False)
    assessment_year    = Column(String, nullable=False)
    old_regime_tax     = Column(Numeric, nullable=False)
    new_regime_tax     = Column(Numeric, nullable=False)
    recommended_regime = Column(String, nullable=False)
    breakdown_json     = Column(Text, nullable=False)
    computed_at        = Column(String, nullable=False, default=lambda: _now().isoformat())

    __table_args__ = (
        CheckConstraint("recommended_regime IN ('OLD','NEW','EQUAL')", name="ck_computation_regime"),
        Index("ix_computation_extraction_id", "extraction_id"),
    )

    extracted_data = relationship("ExtractedDataModel", back_populates="computations")
    reports        = relationship("ReportModel", back_populates="computation", cascade="all, delete-orphan")


class ReportModel(Base):
    __tablename__ = "report"

    report_id      = Column(String, primary_key=True, default=_uuid)
    computation_id = Column(String, ForeignKey("computation.computation_id", ondelete="CASCADE"), nullable=False)
    format         = Column(String, nullable=False)
    file_path      = Column(String, nullable=False)
    generated_at   = Column(String, nullable=False, default=lambda: _now().isoformat())

    __table_args__ = (
        CheckConstraint("format IN ('PDF','DOCX')", name="ck_report_format"),
        Index("ix_report_computation_id", "computation_id"),
    )

    computation = relationship("ComputationModel", back_populates="reports")


# ─── DB Init & Dependency ────────────────────────────────────────────────────

def init_db():
    Base.metadata.create_all(bind=engine)

# Auto-initialize tables on startup
init_db()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
