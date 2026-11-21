"""
Integration tests for parsers, reports, and FastAPI endpoints.
"""
import os
import pytest
from services.parsers.pdf_parser import PdfParser
from services.report_generator.pdf_report import PdfReportGenerator
from services.report_generator.docx_report import DocxReportGenerator
from services.tax_engine.itr1_engine import Itr1Engine

def test_pdf_parser_on_digital_pdf():
    pdf_path = os.path.join(os.path.dirname(__file__), "sample_itr1_document.pdf")
    parser = PdfParser()
    parsed = parser.parse(pdf_path)
    assert parser.has_selectable_text(parsed) is True
    assert "FORM NO. 16" in parsed.raw_text
    assert "Tabish Hasan" in parsed.raw_text
    assert parsed.page_count >= 1

def test_report_generators_create_valid_files(tmp_path):
    engine = Itr1Engine()
    data = {
        "gross_salary": 950_000,
        "exemptions_u10": 50_000,
        "other_income": 25_000,
        "deduction_80c": 120_000,
        "deduction_80d": 25_000,
        "deduction_80tta": 10_000,
        "tds_total": 35_000,
    }
    result = engine.compute(data)
    comp_dict = result.to_dict()
    comp_dict["assessment_year"] = "2026-27"
    comp_dict["computed_at"] = "2026-11-21T13:50:00"

    doc_meta = {
        "name": "Tabish Hasan",
        "pan": "ABCDE1234F",
        "file_name": "sample_itr1_document.pdf",
        "form_type": "ITR-1"
    }

    # PDF Report
    pdf_out = str(tmp_path / "test_report.pdf")
    pdf_gen = PdfReportGenerator()
    pdf_gen.generate(comp_dict, doc_meta, pdf_out)
    assert os.path.exists(pdf_out)
    assert os.path.getsize(pdf_out) > 500

    # DOCX Report
    docx_out = str(tmp_path / "test_report.docx")
    docx_gen = DocxReportGenerator()
    docx_gen.generate(comp_dict, doc_meta, docx_out)
    assert os.path.exists(docx_out)
    assert os.path.getsize(docx_out) > 500
