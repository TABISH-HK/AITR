"""
Abstract base class and core calculation utilities for the tax computation engine.
AY 2026-27 (FY 2025-26).
Implements master flow, Section 87A rebate, marginal relief, surcharge, cess, and rounding.
"""
from __future__ import annotations

import math
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Any, Dict, List

import config as C


@dataclass
class BreakdownItem:
    label: str
    amount: float


@dataclass
class RegimeResult:
    gross_total_income: float = 0.0
    deductions: float = 0.0
    taxable_income: float = 0.0
    base_tax: float = 0.0
    special_rate_tax: float = 0.0
    rebate_87a: float = 0.0
    marginal_relief: float = 0.0
    tax_after_rebate: float = 0.0
    surcharge: float = 0.0
    cess: float = 0.0
    total_tax: float = 0.0
    tds: float = 0.0
    tax_payable: float = 0.0
    breakdown: List[BreakdownItem] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "gross_total_income": round(self.gross_total_income, 2),
            "deductions": round(self.deductions, 2),
            "taxable_income": round(self.taxable_income, 2),
            "base_tax": round(self.base_tax, 2),
            "special_rate_tax": round(self.special_rate_tax, 2),
            "rebate_87a": round(self.rebate_87a, 2),
            "marginal_relief": round(self.marginal_relief, 2),
            "tax_after_rebate": round(self.tax_after_rebate, 2),
            "surcharge": round(self.surcharge, 2),
            "cess": round(self.cess, 2),
            "total_tax": round(self.total_tax, 2),
            "tds": round(self.tds, 2),
            "tax_payable": round(self.tax_payable, 2),
            "breakdown": [{"label": b.label, "amount": round(b.amount, 2)} for b in self.breakdown],
        }


@dataclass
class ComputationResult:
    old_regime: RegimeResult
    new_regime: RegimeResult
    recommended_regime: str  # "OLD" | "NEW" | "EQUAL"

    def to_dict(self) -> Dict[str, Any]:
        return {
            "old_regime": self.old_regime.to_dict(),
            "new_regime": self.new_regime.to_dict(),
            "recommended_regime": self.recommended_regime,
        }


def round_to_nearest_10(amount: float) -> float:
    """Round off to the nearest Rs. 10 as prescribed by the Income-tax Act."""
    return round(amount / 10.0) * 10.0


def compute_slab_tax(income: float, slabs: list[tuple[float, float]]) -> float:
    """Generic progressive slab-tax calculator."""
    tax = 0.0
    prev = 0.0
    for limit, rate in slabs:
        if income <= prev:
            break
        taxable_in_slab = min(income, limit) - prev
        tax += taxable_in_slab * rate
        prev = limit
    return tax


def apply_rebate_and_marginal_relief_new(tax_on_slab: float, taxable_income: float) -> tuple[float, float, float]:
    """
    New Regime Rebate u/s 87A & Marginal Relief for AY 2026-27:
    - If taxable income <= Rs. 12,00,000: Rebate up to Rs. 60,000 -> Tax is Nil.
    - If taxable income > Rs. 12,00,000:
        Marginal Relief applies if tax as per slab > (Taxable Income - 12,00,000).
        Tax payable = LOWER of:
          (a) Tax as per slab rates
          (b) Taxable Income - Rs. 12,00,000
    Returns (rebate_87a, marginal_relief, tax_after_rebate).
    """
    if taxable_income <= C.NEW_REGIME_REBATE_INCOME_LIMIT:
        rebate = min(tax_on_slab, C.NEW_REGIME_REBATE_MAX)
        return rebate, 0.0, max(0.0, tax_on_slab - rebate)

    # Marginal Relief check above 12 Lakhs
    excess_income = taxable_income - C.NEW_REGIME_REBATE_INCOME_LIMIT
    if tax_on_slab > excess_income:
        marginal_relief = tax_on_slab - excess_income
        return 0.0, marginal_relief, excess_income

    return 0.0, 0.0, tax_on_slab


def apply_rebate_old(tax_on_slab: float, taxable_income: float) -> tuple[float, float]:
    """
    Old Regime Rebate u/s 87A for AY 2026-27:
    - Rebate up to Rs. 12,500 if taxable income <= Rs. 5,00,000.
    Returns (rebate_87a, tax_after_rebate).
    """
    if taxable_income <= C.OLD_REGIME_REBATE_INCOME_LIMIT:
        rebate = min(tax_on_slab, C.OLD_REGIME_REBATE_MAX)
        return rebate, max(0.0, tax_on_slab - rebate)
    return 0.0, tax_on_slab


def compute_surcharge(tax: float, total_income: float, is_new_regime: bool = True) -> float:
    """
    Surcharge on income tax:
    - Income > 50L  : 10%
    - Income > 1 Cr : 15%
    - Income > 2 Cr : 25%
    - Income > 5 Cr : 25% (New Regime) / 37% (Old Regime)
    """
    if total_income <= 5_000_000:
        return 0.0

    if total_income > 50_000_000:
        rate = 0.25 if is_new_regime else 0.37
    elif total_income > 20_000_000:
        rate = 0.25
    elif total_income > 10_000_000:
        rate = 0.15
    else:
        rate = 0.10

    return tax * rate


def apply_cess(tax_plus_surcharge: float) -> float:
    """Health & Education Cess = 4% on (Tax + Surcharge)."""
    return tax_plus_surcharge * C.CESS_RATE


class TaxEngine(ABC):
    """Abstract tax engine interface."""

    @abstractmethod
    def compute(self, data: Dict[str, Any]) -> ComputationResult:
        ...

    @staticmethod
    def _recommend(old_tax: float, new_tax: float) -> str:
        if old_tax < new_tax:
            return "OLD"
        if new_tax < old_tax:
            return "NEW"
        return "EQUAL"

    @staticmethod
    def _n(data: Dict[str, Any], key: str, default: float = 0.0) -> float:
        val = data.get(key)
        if val is None:
            return default
        try:
            return float(val)
        except (TypeError, ValueError):
            return default
