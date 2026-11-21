"""
Tax Computation Router (FR-005, FR-006, FR-007, FR-008).
Executes deterministic rule-based computation for ITR-1, ITR-2, or ITR-4,
computes both Old and New regimes, and saves the result snapshot.
"""
import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import config as C
from database import ComputationModel, DocumentModel, ExtractedDataModel, get_db
from schemas import ComputationOut, RegimeResult, TaxBreakdownItem
from services.tax_engine.itr1_engine import Itr1Engine
from services.tax_engine.itr2_engine import Itr2Engine
from services.tax_engine.itr4_engine import Itr4Engine

router = APIRouter(prefix="/api/compute", tags=["Tax Computation"])

ENGINES = {
    "ITR-1": Itr1Engine(),
    "ITR-2": Itr2Engine(),
    "ITR-4": Itr4Engine(),
}


@router.post("/{extraction_id}", response_model=ComputationOut)
def compute_tax(extraction_id: str, db: Session = Depends(get_db)):
    ext_record = db.query(ExtractedDataModel).filter(ExtractedDataModel.extraction_id == extraction_id).first()
    if not ext_record:
        raise HTTPException(status_code=404, detail="Extraction record not found.")

    doc = db.query(DocumentModel).filter(DocumentModel.document_id == ext_record.document_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Associated document not found.")

    # Use reviewed data if available; otherwise use extracted data
    data = json.loads(ext_record.reviewed_json) if ext_record.reviewed_json else json.loads(ext_record.extracted_json)

    form_type = doc.form_type or data.get("form_type", "ITR-1")
    engine = ENGINES.get(form_type, ENGINES["ITR-1"])

    result = engine.compute(data)
    result_dict = result.to_dict()

    comp_record = ComputationModel(
        extraction_id=extraction_id,
        assessment_year=C.ASSESSMENT_YEAR,
        old_regime_tax=result.old_regime.total_tax,
        new_regime_tax=result.new_regime.total_tax,
        recommended_regime=result.recommended_regime,
        breakdown_json=json.dumps(result_dict),
    )
    db.add(comp_record)
    doc.status = "COMPUTED"
    db.commit()
    db.refresh(comp_record)

    return _to_computation_out(comp_record, result_dict)


@router.get("/{computation_id}", response_model=ComputationOut)
def get_computation(computation_id: str, db: Session = Depends(get_db)):
    comp = db.query(ComputationModel).filter(ComputationModel.computation_id == computation_id).first()
    if not comp:
        raise HTTPException(status_code=404, detail="Computation record not found.")

    breakdown = json.loads(comp.breakdown_json)
    return _to_computation_out(comp, breakdown)


def _to_computation_out(comp: ComputationModel, breakdown: dict) -> ComputationOut:
    def parse_regime(r: dict) -> RegimeResult:
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
            breakdown=[TaxBreakdownItem(**b) for b in r.get("breakdown", [])],
        )

    return ComputationOut(
        computation_id=comp.computation_id,
        extraction_id=comp.extraction_id,
        assessment_year=comp.assessment_year,
        old_regime=parse_regime(breakdown.get("old_regime", {})),
        new_regime=parse_regime(breakdown.get("new_regime", {})),
        recommended_regime=comp.recommended_regime,
        computed_at=comp.computed_at,
    )
