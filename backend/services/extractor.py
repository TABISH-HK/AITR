"""
LLM-based data extractor using the NVIDIA NIM API.
Sends the parsed document text to the configured model and returns
a validated JSON dict of financial fields.
"""
from __future__ import annotations

import json
import logging
import textwrap
import time
from typing import Any, Dict, Optional

import httpx

from services.parsers.base import ParsedDocument
from settings import settings

logger = logging.getLogger(__name__)

EXTRACTION_SCHEMA = {
    "form_type": "ITR-1 | ITR-2 | ITR-4",
    "assessment_year": "string e.g. 2026-27",
    "pan": "string or null",
    "name": "string or null",
    # --- Common Income Heads ---
    "gross_salary": "number or null",
    "exemptions_u10": "number or null (HRA, LTA, etc.)",
    "professional_tax": "number or null",
    "net_salary": "number or null",
    "house_property_income": "number or null (can be negative for loss)",
    "other_income": "number or null (interest, dividends, etc.)",
    # --- Deductions (Old Regime) ---
    "deduction_80c": "number or null",
    "deduction_80ccd1b": "number or null (NPS additional)",
    "deduction_80d": "number or null",
    "deduction_80tta": "number or null",
    "other_deductions": "number or null",
    # --- Capital Gains (ITR-2) ---
    "stcg_111a": "number or null (short-term listed equity u/s 111A)",
    "ltcg_112a": "number or null (long-term listed equity u/s 112A)",
    "other_stcg": "number or null",
    "other_ltcg": "number or null",
    # --- Presumptive Income (ITR-4) ---
    "turnover_44ad": "number or null",
    "receipts_44ada": "number or null",
    "vehicles_44ae": "number or null (count of vehicles)",
    "is_digital_receipts_44ad": "boolean or null",
    # --- TDS / Advance Tax ---
    "tds_total": "number or null",
}

SYSTEM_PROMPT = textwrap.dedent("""\
    You are a tax document analysis assistant. Your only job is to extract
    financial data from an Indian Income Tax Return (ITR) document and return
    a valid JSON object matching the schema provided. 
    Rules:
    1. Return ONLY valid JSON — no markdown fences, no explanations.
    2. Use null for any field that is not present in the document.
    3. Do NOT perform any tax arithmetic or computation.
    4. Identify the ITR form type (ITR-1, ITR-2 or ITR-4) from the document.
    5. All monetary values must be plain numbers (no currency symbols, no commas).
""")


def _build_user_prompt(document_text: str) -> str:
    schema_str = json.dumps(EXTRACTION_SCHEMA, indent=2)
    # Truncate very long documents to stay within token limits
    truncated = document_text[:12_000]
    return (
        f"Extract the following fields from the ITR document below.\n"
        f"Return ONLY a JSON object with these fields:\n{schema_str}\n\n"
        f"--- DOCUMENT START ---\n{truncated}\n--- DOCUMENT END ---"
    )


class LLMExtractor:
    """Calls the NVIDIA NIM API to extract structured data from document text."""

    BASE_URL = "https://integrate.api.nvidia.com/v1"
    MAX_RETRIES = 2

    def __init__(self):
        self.api_key = settings.NVIDIA_API_KEY
        self.model = settings.NVIDIA_MODEL

    def extract(self, parsed: ParsedDocument) -> Dict[str, Any]:
        """
        Extract financial fields from the parsed document.
        Retries up to MAX_RETRIES times on invalid JSON or transient errors.
        Raises RuntimeError with a user-visible message on final failure.
        """
        document_text = parsed.combined_text()
        user_prompt = _build_user_prompt(document_text)

        last_error: Optional[str] = None
        for attempt in range(1, self.MAX_RETRIES + 2):
            try:
                result = self._call_api(user_prompt)
                return self._validate(result)
            except (ValueError, json.JSONDecodeError) as exc:
                last_error = str(exc)
                logger.warning("Extraction attempt %d failed: %s", attempt, exc)
                if attempt <= self.MAX_RETRIES:
                    time.sleep(1)
            except httpx.HTTPStatusError as exc:
                last_error = f"API HTTP {exc.response.status_code}"
                logger.warning("API error on attempt %d: %s", attempt, exc)
                if attempt <= self.MAX_RETRIES:
                    time.sleep(2)

        raise RuntimeError(
            f"AI extraction failed after {self.MAX_RETRIES + 1} attempts. "
            f"Last error: {last_error}. Please check your document and try again."
        )

    def _call_api(self, user_prompt: str) -> str:
        """Make one API call and return the raw response text."""
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            "temperature": 0.1,
            "max_tokens": 2048,
        }
        with httpx.Client(timeout=45) as client:
            resp = client.post(
                f"{self.BASE_URL}/chat/completions",
                headers=headers,
                json=payload,
            )
            resp.raise_for_status()
            data = resp.json()
            message = data["choices"][0]["message"]
            content = message.get("content")
            # Some reasoning models (like Nemotron-3.5 or DeepSeek-R1) put output in reasoning_content or return None content
            if not content:
                content = message.get("reasoning_content") or ""
            return content

    def _validate(self, raw: str) -> Dict[str, Any]:
        """Parse JSON and do basic schema validation."""
        if not raw:
            raise ValueError("LLM returned an empty response")

        clean = raw.strip()

        # If reasoning or chain-of-thought is present, extract the JSON block
        if "```json" in clean:
            clean = clean.split("```json", 1)[1].split("```", 1)[0].strip()
        elif "```" in clean:
            clean = clean.split("```", 1)[1].split("```", 1)[0].strip()
        elif "{" in clean and "}" in clean:
            # Fallback: extract substring between the first { and last }
            start = clean.find("{")
            end = clean.rfind("}")
            clean = clean[start : end + 1].strip()

        data = json.loads(clean)

        if not isinstance(data, dict):
            raise ValueError("LLM returned non-dict JSON")

        form_type = data.get("form_type")
        if form_type not in ("ITR-1", "ITR-2", "ITR-4"):
            # Default to ITR-1 if omitted or slight variation
            if form_type and "ITR-2" in str(form_type).upper():
                data["form_type"] = "ITR-2"
            elif form_type and "ITR-4" in str(form_type).upper():
                data["form_type"] = "ITR-4"
            else:
                data["form_type"] = "ITR-1"

        return data
