"""
DOCX parser using python-docx.
Extracts paragraphs and table contents from Word documents.
"""
from docx import Document

from .base import DocumentParser, ParsedDocument


class DocxParser(DocumentParser):
    def parse(self, file_path: str) -> ParsedDocument:
        doc = Document(file_path)
        paragraphs = [p.text for p in doc.paragraphs]
        raw_text = "\n".join(paragraphs)

        all_tables: list[list[list[str]]] = []
        for table in doc.tables:
            rows = []
            for row in table.rows:
                rows.append([cell.text for cell in row.cells])
            all_tables.append(rows)

        return ParsedDocument(
            raw_text=raw_text,
            tables=all_tables,
            page_count=1,  # DOCX has no page concept at parse time
        )
