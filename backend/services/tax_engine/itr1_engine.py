"""
ITR-1 Tax Computation Engine (AY 2026-27 / FY 2025-26).
Complies with official ITR Formula Sheet:
- Standard Deduction: New Rs. 75,000, Old Rs. 50,000
- New Regime slabs (up to 4L Nil, 4-8L 5%, 8-12L 10%, 12-16L 15%, 16-20L 20%, 20-24L 25%, >24L 30%)
- Section 87A Rebate up to Rs. 60,000 (New Regime <= 12L) & Marginal Relief above 12L
- Section 87A Rebate up to Rs. 12,500 (Old Regime <= 5L)
- Rounding to nearest Rs. 10
- Surcharge + 4% Health & Education Cess
"""
from __future__ import annotations

from typing import Any, Dict

import config as C
from .base import (
    BreakdownItem,
    ComputationResult,
    RegimeResult,
    TaxEngine,
    apply_cess,
    apply_rebate_and_marginal_relief_new,
    apply_rebate_old,
    compute_slab_tax,
    compute_surcharge,
    round_to_nearest_10,
)


class Itr1Engine(TaxEngine):
    def compute(self, data: Dict[str, Any]) -> ComputationResult:
        old = self._compute_old(data)
        new = self._compute_new(data)
        return ComputationResult(
            old_regime=old,
            new_regime=new,
            recommended_regime=self._recommend(old.total_tax, new.total_tax),
        )

    # ── Old Regime ────────────────────────────────────────────────────────────
    def _compute_old(self, d: Dict[str, Any]) -> RegimeResult:
        n = self._n
        gross_salary   = n(d, "gross_salary")
        exemptions     = n(d, "exemptions_u10")  # HRA, LTA, etc.
        prof_tax       = n(d, "professional_tax")
        hp_income      = n(d, "house_property_income")
        other_income   = n(d, "other_income")
        tds            = n(d, "tds_total")

        # Income from Salary = Gross - Exemptions - SD - Professional Tax
        net_salary = max(0.0, gross_salary - exemptions - C.OLD_REGIME_STANDARD_DEDUCTION - prof_tax)

        # Self-occupied HP loss capped at Rs. 2,00,000
        hp_loss_allowed = max(-C.HOME_LOAN_INTEREST_LIMIT_SELF_OCCUPIED, hp_income)

        gti = net_salary + hp_loss_allowed + other_income

        # Chapter VI-A Deductions
        d80c     = min(n(d, "deduction_80c"), C.SEC_80C_LIMIT)
        d80ccd1b = min(n(d, "deduction_80ccd1b"), C.SEC_80CCD1B_LIMIT)
        d80d     = min(n(d, "deduction_80d"), C.SEC_80D_SELF_LIMIT + C.SEC_80D_SENIOR_LIMIT)
        d80tta   = min(n(d, "deduction_80tta"), C.SEC_80TTA_LIMIT)
        other_ded = n(d, "other_deductions")
        total_deductions = d80c + d80ccd1b + d80d + d80tta + other_ded

        # Total Income rounded off to nearest Rs. 10
        raw_taxable = max(0.0, gti - total_deductions)
        taxable_income = round_to_nearest_10(raw_taxable)

        # Slab tax
        base_tax = compute_slab_tax(taxable_income, C.OLD_REGIME_SLABS)

        # Section 87A rebate
        rebate, tax_after_rebate = apply_rebate_old(base_tax, taxable_income)

        # Surcharge
        surcharge = compute_surcharge(tax_after_rebate, taxable_income, is_new_regime=False)

        # Cess (4% on Tax + Surcharge)
        cess = apply_cess(tax_after_rebate + surcharge)
        total_tax = round(tax_after_rebate + surcharge + cess)
        tax_payable = total_tax - tds

        breakdown = [
            BreakdownItem("Gross Salary", gross_salary),
            BreakdownItem("Less: Exemptions u/s 10 (HRA/LTA)", -exemptions),
            BreakdownItem("Less: Standard Deduction (Old Regime)", -C.OLD_REGIME_STANDARD_DEDUCTION),
            BreakdownItem("Less: Professional Tax", -prof_tax),
            BreakdownItem("Income Chargeable under Salaries", net_salary),
            BreakdownItem("House Property Income / (Loss)", hp_loss_allowed),
            BreakdownItem("Income from Other Sources", other_income),
            BreakdownItem("Gross Total Income (GTI)", gti),
            BreakdownItem("Less: Section 80C", -d80c),
            BreakdownItem("Less: Section 80CCD(1B) (NPS)", -d80ccd1b),
            BreakdownItem("Less: Section 80D (Health Insurance)", -d80d),
            BreakdownItem("Less: Section 80TTA (Savings Interest)", -d80tta),
            BreakdownItem("Less: Other Chapter VI-A Deductions", -other_ded),
            BreakdownItem("Total Income (rounded to nearest Rs. 10)", taxable_income),
            BreakdownItem("Tax on Total Income (slab)", base_tax),
            BreakdownItem("Less: Rebate u/s 87A", -rebate),
            BreakdownItem("Tax After Rebate", tax_after_rebate),
            BreakdownItem("Surcharge", surcharge),
            BreakdownItem("Health & Education Cess @ 4%", cess),
            BreakdownItem("Total Tax Liability", total_tax),
            BreakdownItem("Less: Taxes Paid / TDS", -tds),
            BreakdownItem("Net Tax Payable / (Refund)", tax_payable),
        ]

        return RegimeResult(
            gross_total_income=gti,
            deductions=total_deductions,
            taxable_income=taxable_income,
            base_tax=base_tax,
            special_rate_tax=0.0,
            rebate_87a=rebate,
            marginal_relief=0.0,
            tax_after_rebate=tax_after_rebate,
            surcharge=surcharge,
            cess=cess,
            total_tax=total_tax,
            tds=tds,
            tax_payable=tax_payable,
            breakdown=breakdown,
        )

    # ── New Regime ────────────────────────────────────────────────────────────
    def _compute_new(self, d: Dict[str, Any]) -> RegimeResult:
        n = self._n
        gross_salary   = n(d, "gross_salary")
        exemptions     = n(d, "exemptions_u10")
        hp_income      = n(d, "house_property_income")
        other_income   = n(d, "other_income")
        tds            = n(d, "tds_total")

        # In New Regime: Standard deduction Rs. 75,000; self-occupied HP loss not deductible
        # Exempt allowances u/s 10 (e.g. transport, children education) that are explicitly
        # listed as exempt in the ITR are subtracted from gross salary.
        net_salary = max(0.0, gross_salary - exemptions - C.NEW_REGIME_STANDARD_DEDUCTION)
        hp_adj = max(0.0, hp_income)

        gti = net_salary + hp_adj + other_income
        taxable_income = round_to_nearest_10(max(0.0, gti))

        # Base tax on slabs (0-4L Nil, 4-8L 5%, 8-12L 10%, 12-16L 15%, 16-20L 20%, 20-24L 25%, >24L 30%)
        base_tax = compute_slab_tax(taxable_income, C.NEW_REGIME_SLABS)

        # Section 87A rebate (up to Rs. 60,000 for income <= 12L) & Marginal Relief above 12L
        rebate, marginal_relief, tax_after_rebate = apply_rebate_and_marginal_relief_new(base_tax, taxable_income)

        # Surcharge (capped at 25% under New Regime)
        surcharge = compute_surcharge(tax_after_rebate, taxable_income, is_new_regime=True)

        # Health & Education Cess @ 4%
        cess = apply_cess(tax_after_rebate + surcharge)
        total_tax = round(tax_after_rebate + surcharge + cess)
        tax_payable = total_tax - tds

        breakdown = [
            BreakdownItem("Gross Salary", gross_salary),
            BreakdownItem("Less: Standard Deduction (New Regime)", -C.NEW_REGIME_STANDARD_DEDUCTION),
            BreakdownItem("Income from Salary", net_salary),
            BreakdownItem("Income from House Property", hp_adj),
            BreakdownItem("Income from Other Sources", other_income),
            BreakdownItem("Total Taxable Income (rounded to nearest Rs. 10)", taxable_income),
            BreakdownItem("Tax on Total Income (slab)", base_tax),
            BreakdownItem("Less: Rebate u/s 87A (<= Rs. 12L)", -rebate),
            BreakdownItem("Less: Marginal Relief u/s 87A", -marginal_relief),
            BreakdownItem("Tax After Rebate & Relief", tax_after_rebate),
            BreakdownItem("Surcharge", surcharge),
            BreakdownItem("Health & Education Cess @ 4%", cess),
            BreakdownItem("Total Tax Liability", total_tax),
            BreakdownItem("Less: Taxes Paid / TDS", -tds),
            BreakdownItem("Net Tax Payable / (Refund)", tax_payable),
        ]

        return RegimeResult(
            gross_total_income=gti,
            deductions=0.0,
            taxable_income=taxable_income,
            base_tax=base_tax,
            special_rate_tax=0.0,
            rebate_87a=rebate,
            marginal_relief=marginal_relief,
            tax_after_rebate=tax_after_rebate,
            surcharge=surcharge,
            cess=cess,
            total_tax=total_tax,
            tds=tds,
            tax_payable=tax_payable,
            breakdown=breakdown,
        )
