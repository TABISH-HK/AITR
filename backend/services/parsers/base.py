"""
Abstract base class for document parsers.
"""
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import List


@dataclass
class ParsedDocument:
    """Holds extracted text and table data from a document."""
    raw_text: str = ""
    tables: List[List[List[str]]] = field(default_factory=list)
    page_count: int = 0

    def combined_text(self) -> str:
        """Return raw text plus a flattened, human-readable version of all tables."""
        parts = [self.raw_text]
        for table in self.tables:
            for row in table:
                parts.append(" | ".join(cell or "" for cell in row))
        return "\n".join(parts)


class DocumentParser(ABC):
    """Abstract parser. Concrete subclasses handle PDF and DOCX."""

    @abstractmethod
    def parse(self, file_path: str) -> ParsedDocument:
        """Parse the file at *file_path* and return a ParsedDocument."""
        ...

    @staticmethod
    def has_selectable_text(parsed: ParsedDocument) -> bool:
        """Return True if the document contains selectable (non-scanned) text."""
        return bool(parsed.raw_text and parsed.raw_text.strip())
