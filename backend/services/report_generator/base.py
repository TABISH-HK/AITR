"""
Abstract base class for report generators.
"""
from abc import ABC, abstractmethod
from typing import Any, Dict


class ReportGenerator(ABC):
    """Abstract report generator interface."""

    @abstractmethod
    def generate(self, computation_data: Dict[str, Any], doc_metadata: Dict[str, Any], output_path: str) -> str:
        """
        Generate a computation report file.
        Returns the absolute file path of the generated report.
        """
        ...
