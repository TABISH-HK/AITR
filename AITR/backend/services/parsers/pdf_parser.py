"""
PDF parser using pdfplumber.
Extracts plain text and table contents from digital (non-scanned) PDFs.
"""
import pdfplumber

from .base import DocumentParser, ParsedDocument


class PdfParser(DocumentParser):
    def parse(self, file_path: str) -> ParsedDocument:
        pages_text: list[str] = []
        all_tables: list[list[list[str]]] = []

        with pdfplumber.open(file_path) as pdf:
            page_count = len(pdf.pages)
            for page in pdf.pages:
                text = page.extract_text() or ""
                pages_text.append(text)
                tables = page.extract_tables() or []
                for table in tables:
                    cleaned = [
                        [cell or "" for cell in row]
                        for row in table
                    ]
                    all_tables.append(cleaned)

        return ParsedDocument(
            raw_text="\n".join(pages_text),
            tables=all_tables,
            page_count=page_count,
        )
