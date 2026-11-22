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

            # If document has <= 14 pages (standard full ITR-1, ITR-4, etc.), extract ALL pages
            if page_count <= 14:
                target_indices = list(range(page_count))
            else:
                # Multi-page full ITR form (e.g. 40+ pages ITR-2):
                # Always grab first 4 pages (General info, Salary details)
                selected_set = set(range(min(4, page_count)))
                # Grab last 4 pages (Part B-TI, Part B-TTI, Taxes Paid)
                selected_set.update(range(max(0, page_count - 4), page_count))

                # Also scan pages that mention key tax schedules
                key_markers = [
                    "SCHEDULE SALARY", "PART B", "PARTB", "SCHEDULE HP",
                    "SCHEDULE CG", "SCHEDULE OS", "SCHEDULE VIA",
                    "SCHEDULE 80", "TAXES PAID", "SCHEDULE TDS",
                    "SCHEDULE BP", "44AD", "44ADA", "44AE",
                    "COMPUTATION OF TOTAL INCOME", "COMPUTATION OF TAX"
                ]
                for i in range(page_count):
                    text = pdf.pages[i].extract_text() or ""
                    text_upper = text.upper()
                    if any(marker in text_upper for marker in key_markers):
                        selected_set.add(i)

                target_indices = sorted(list(selected_set))

            for i in target_indices:
                page = pdf.pages[i]
                text = page.extract_text() or ""
                pages_text.append(f"--- PAGE {i+1} ---\n{text}")
                tables = page.extract_tables() or []
                for table in tables:
                    cleaned = [
                        [cell or "" for cell in row]
                        for row in table
                    ]
                    all_tables.append(cleaned)

        return ParsedDocument(
            raw_text="\n\n".join(pages_text),
            tables=all_tables,
            page_count=page_count,
        )
