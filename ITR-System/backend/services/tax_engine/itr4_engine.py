"""
ITR-4 Tax Computation Engine (AY 2026-27 / FY 2025-26).
Complies with official ITR Formula Sheet:
- Section 44AD (business): 8% of turnover (6% for digital receipts)
- Section 44ADA (professional): 50% of gross receipts
- Section 44AE (goods carriages): Rs. 7,500 per vehicle per month
- Slabs, Section 87A rebate (up to 60K for <=12L in New Regime) & marginal relief
- Surcharge, Cess 4%, rounding to nearest Rs. 10
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


class Itr4Engine(TaxEngine):
    def compute(self, data: Dict[str, Any]) -> ComputationResult:
        old = self._compute_old(data)
        new = self._compute_new(data)
        return ComputationResult(
            old_regime=old,
            new_regime=new,
            recommended_regime=self._recommend(old.total_tax, new.total_tax),
        )

    def _presumptive_income(self, d: Dict[str, Any]) -> tuple[float, list[BreakdownItem]]:
        n = self._n
        turnover_44ad    = n(d, "turnover_44ad")
        receipts_44ada   = n(d, "receipts_44ada")
        vehicles_44ae    = n(d, "vehicles_44ae")
        is_digital       = d.get("is_digital_receipts_44ad", False) or False
        other_income     = n(d, "other_income")

        rate_44ad = C.S44AD_RATE_DIGITAL if is_digital else C.S44AD_RATE_NORMAL
        income_44ad = turnover_44ad * rate_44ad

        income_44ada = receipts_44ada * C.S44ADA_RATE
        income_44ae = vehicles_44ae * C.S44AE_PER_VEHICLE_MONTH * 12

        total_presumptive = income_44ad + income_44ada + income_44ae
        gti = total_presumptive + other_income

        breakdown = [
            BreakdownItem("Turnover u/s 44AD", turnover_44ad),
            BreakdownItem(f"Presumptive Income u/s 44AD (@ {int(rate_44ad*100)}%)", income_44ad),
            BreakdownItem("Gross Receipts u/s 44ADA", receipts_44ada),
            BreakdownItem("Presumptive Income u/s 44ADA (@ 50%)", income_44ada),
            BreakdownItem("Goods Vehicles u/s 44AE", vehicles_44ae),
            BreakdownItem("Presumptive Income u/s 44AE (Rs. 7500/veh/m)", income_44ae),
            BreakdownItem("Income from Other Sources", other_income),
            BreakdownItem("Gross Total Income (GTI)", gti),
        ]
        return gti, breakdown

    def _compute_old(self, d: Dict[str, Any]) -> RegimeResult:
        n = self._n
        tds = n(d, "tds_total")
        gti, pre_breakdown = self._presumptive_income(d)

        d80c     = min(n(d, "deduction_80c"), C.SEC_80C_LIMIT)
        d80ccd1b = min(n(d, "deduction_80ccd1b"), C.SEC_80CCD1B_LIMIT)
        d80d     = min(n(d, "deduction_80d"), C.SEC_80D_SELF_LIMIT + C.SEC_80D_SENIOR_LIMIT)
        d80tta   = min(n(d, "deduction_80tta"), C.SEC_80TTA_LIMIT)
        other_ded = n(d, "other_deductions")
        total_ded = d80c + d80ccd1b + d80d + d80tta + other_ded

        raw_taxable = max(0.0, gti - total_ded)
        taxable_income = round_to_nearest_10(raw_taxable)

        base_tax = compute_slab_tax(taxable_income, C.OLD_REGIME_SLABS)
        rebate, tax_after_rebate = apply_rebate_old(base_tax, taxable_income)
        surcharge = compute_surcharge(tax_after_rebate, taxable_income, is_new_regime=False)
        cess = apply_cess(tax_after_rebate + surcharge)
        total_tax = round_to_nearest_10(tax_after_rebate + surcharge + cess)
        tax_payable = total_tax - tds

        breakdown = pre_breakdown + [
            BreakdownItem("Less: Section 80C", -d80c),
            BreakdownItem("Less: Section 80CCD(1B)", -d80ccd1b),
            BreakdownItem("Less: Section 80D", -d80d),
            BreakdownItem("Less: Section 80TTA", -d80tta),
            BreakdownItem("Less: Other Deductions", -other_ded),
            BreakdownItem("Total Taxable Income (rounded to nearest Rs. 10)", taxable_income),
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
            deductions=total_ded,
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

    def _compute_new(self, d: Dict[str, Any]) -> RegimeResult:
        n = self._n
        tds = n(d, "tds_total")
        gti, pre_breakdown = self._presumptive_income(d)

        taxable_income = round_to_nearest_10(max(0.0, gti))
        base_tax = compute_slab_tax(taxable_income, C.NEW_REGIME_SLABS)
        rebate, marginal_relief, tax_after_rebate = apply_rebate_and_marginal_relief_new(base_tax, taxable_income)
        surcharge = compute_surcharge(tax_after_rebate, taxable_income, is_new_regime=True)
        cess = apply_cess(tax_after_rebate + surcharge)
        total_tax = round_to_nearest_10(tax_after_rebate + surcharge + cess)
        tax_payable = total_tax - tds

        breakdown = pre_breakdown + [
            BreakdownItem("Total Taxable Income (rounded to nearest Rs. 10)", taxable_income),
            BreakdownItem("Tax on Total Income (slab)", base_tax),
            BreakdownItem("Less: Rebate u/s 87A", -rebate),
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
