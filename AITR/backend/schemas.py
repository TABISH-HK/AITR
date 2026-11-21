"""
Pydantic schemas for all API request / response bodies.
"""
from __future__ import annotations

from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


# ─── Session ─────────────────────────────────────────────────────────────────

class SessionOut(BaseModel):
    session_id: str
    created_at: str


# ─── Document ─────────────────────────────────────────────────────────────────

class DocumentOut(BaseModel):
    document_id: str
    session_id: str
    file_name: str
    file_type: str
    form_type: Optional[str]
    status: str
    uploaded_at: str


# ─── Extracted Data ───────────────────────────────────────────────────────────

class ExtractionOut(BaseModel):
    extraction_id: str
    document_id: str
    extracted_json: Dict[str, Any]
    reviewed_json: Optional[Dict[str, Any]]
    is_reviewed: bool
    extracted_at: str


class ReviewRequest(BaseModel):
    reviewed_json: Dict[str, Any]


# ─── Tax Computation ──────────────────────────────────────────────────────────

class TaxBreakdownItem(BaseModel):
    label: str
    amount: float


class RegimeResult(BaseModel):
    gross_total_income: float
    deductions: float
    taxable_income: float
    base_tax: float
    special_rate_tax: float = 0.0
    rebate_87a: float
    marginal_relief: float = 0.0
    surcharge: float = 0.0
    cess: float
    total_tax: float
    tds: float
    tax_payable: float
    breakdown: List[TaxBreakdownItem]


class ComputationOut(BaseModel):
    computation_id: str
    extraction_id: str
    assessment_year: str
    old_regime: RegimeResult
    new_regime: RegimeResult
    recommended_regime: str   # "OLD" | "NEW" | "EQUAL"
    computed_at: str


# ─── Report ───────────────────────────────────────────────────────────────────

class ReportOut(BaseModel):
    report_id: str
    computation_id: str
    format: str
    download_url: str
    generated_at: str


# ─── History ─────────────────────────────────────────────────────────────────

class HistoryItem(BaseModel):
    document: DocumentOut
    computation: Optional[ComputationOut]
    reports: List[ReportOut]


# ─── Error ───────────────────────────────────────────────────────────────────

class ErrorOut(BaseModel):
    detail: str
