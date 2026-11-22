"""
ITR-2 Tax Computation Engine (AY 2026-27 / FY 2025-26).
Complies with official ITR Formula Sheet:
- STCG on listed equity (Sec 111A): 20%
- LTCG on listed equity (Sec 112A): 12.5% on gains above Rs. 1.25 lakh
- LTCG on other assets (Sec 112): 12.5%
- VDA / Crypto Income (Sec 115BBH): 30%
- Rebate u/s 87A is not available against special-rate capital gains (Sec 111A / 112A / 115BBH)
- Surcharge on capital gains capped at 15%
- Cess 4% & rounding to nearest Rs. 10
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
from .itr1_engine import Itr1Engine


class Itr2Engine(TaxEngine):
    _itr1 = Itr1Engine()

    def compute(self, data: Dict[str, Any]) -> ComputationResult:
        old = self._compute_old(data)
        new = self._compute_new(data)
        return ComputationResult(
            old_regime=old,
            new_regime=new,
            recommended_regime=self._recommend(old.total_tax, new.total_tax),
        )

    def _compute_old(self, d: Dict[str, Any]) -> RegimeResult:
        n = self._n
        base = self._itr1._compute_old(d)

        stcg_111a = n(d, "stcg_111a")
        ltcg_112a = n(d, "ltcg_112a")
        ltcg_112  = n(d, "other_ltcg")
        # vda_income takes priority; if null, check if other_stcg actually contains VDA
        vda_income = n(d, "vda_income")
        raw_other_stcg = n(d, "other_stcg")
        # If form is ITR-2 and vda_income wasn't extracted separately but other_stcg has a value,
        # treat it as VDA (since ITR-2 Schedule SI @ 30% is almost always VDA for small amounts)
        if vda_income == 0 and raw_other_stcg > 0 and stcg_111a == 0:
            vda_income = raw_other_stcg
            other_stcg = 0.0
        else:
            other_stcg = raw_other_stcg
        tds = n(d, "tds_total")

        # 1. Special rate taxes
        # STCG u/s 111A @ 20%
        tax_111a = stcg_111a * C.STCG_111A_RATE

        # LTCG u/s 112A @ 12.5% on gains above Rs. 1.25 lakh
        ltcg_112a_taxable = max(0.0, ltcg_112a - C.LTCG_112A_EXEMPTION)
        tax_112a = ltcg_112a_taxable * C.LTCG_112A_RATE

        # LTCG u/s 112 @ 12.5%
        tax_112 = ltcg_112 * C.LTCG_112_RATE

        # VDA u/s 115BBH @ 30%
        tax_vda = vda_income * C.VDA_RATE

        total_special_tax = tax_111a + tax_112a + tax_112 + tax_vda

        # 2. Slab-taxed income (Normal income + other STCG)
        slab_taxable = round_to_nearest_10(base.taxable_income + other_stcg)
        slab_tax = compute_slab_tax(slab_taxable, C.OLD_REGIME_SLABS)

        total_income = round_to_nearest_10(slab_taxable + stcg_111a + ltcg_112a + ltcg_112 + vda_income)

        # Rebate u/s 87A: available ONLY if TOTAL INCOME <= Rs. 5 Lakh in Old Regime
        if total_income <= C.OLD_REGIME_REBATE_INCOME_LIMIT:
            rebate, slab_tax_after_rebate = apply_rebate_old(slab_tax, slab_taxable)
        else:
            rebate = 0.0
            slab_tax_after_rebate = slab_tax

        tax_before_surcharge = slab_tax_after_rebate + total_special_tax

        # Surcharge (capital gains surcharge capped at 15%)
        surcharge = compute_surcharge(tax_before_surcharge, total_income, is_new_regime=False)
        if total_income > 20_000_000 and total_special_tax > 0:
            surcharge = min(surcharge, tax_before_surcharge * 0.15)

        cess = apply_cess(tax_before_surcharge + surcharge)
        total_tax = round(tax_before_surcharge + surcharge + cess)
        tax_payable = total_tax - tds

        breakdown = base.breakdown[:-8] + [
            BreakdownItem("Normal Taxable Income", slab_taxable),
            BreakdownItem("Tax on Normal Income (slab)", slab_tax),
            BreakdownItem("Less: Rebate u/s 87A", -rebate),
            BreakdownItem("STCG u/s 111A (Listed Equity)", stcg_111a),
            BreakdownItem("Special Tax on STCG @ 20% (111A)", tax_111a),
            BreakdownItem("LTCG u/s 112A (Listed Equity)", ltcg_112a),
            BreakdownItem("Exemption u/s 112A (Rs. 1.25 Lakh)", -min(ltcg_112a, C.LTCG_112A_EXEMPTION)),
            BreakdownItem("Taxable LTCG u/s 112A", ltcg_112a_taxable),
            BreakdownItem("Special Tax on LTCG @ 12.5% (112A)", tax_112a),
            BreakdownItem("LTCG Other Assets u/s 112", ltcg_112),
            BreakdownItem("Special Tax on LTCG @ 12.5% (112)", tax_112),
        ]
        if vda_income > 0:
            breakdown.extend([
                BreakdownItem("VDA / Crypto Income u/s 115BBH (@ 30%)", vda_income),
                BreakdownItem("Special Tax on VDA @ 30% (115BBH)", tax_vda),
            ])
        breakdown.extend([
            BreakdownItem("Total Tax Before Surcharge & Cess", tax_before_surcharge),
            BreakdownItem("Surcharge", surcharge),
            BreakdownItem("Health & Education Cess @ 4%", cess),
            BreakdownItem("Total Tax Liability", total_tax),
            BreakdownItem("Less: TDS Paid", -tds),
            BreakdownItem("Net Tax Payable / (Refund)", tax_payable),
        ])

        return RegimeResult(
            gross_total_income=base.gross_total_income + stcg_111a + ltcg_112a + ltcg_112 + other_stcg + vda_income,
            deductions=base.deductions,
            taxable_income=total_income,
            base_tax=slab_tax,
            special_rate_tax=total_special_tax,
            rebate_87a=rebate,
            marginal_relief=0.0,
            tax_after_rebate=tax_before_surcharge,
            surcharge=surcharge,
            cess=cess,
            total_tax=total_tax,
            tds=tds,
            tax_payable=tax_payable,
            breakdown=breakdown,
        )

    def _compute_new(self, d: Dict[str, Any]) -> RegimeResult:
        n = self._n
        base = self._itr1._compute_new(d)

        stcg_111a = n(d, "stcg_111a")
        ltcg_112a = n(d, "ltcg_112a")
        ltcg_112  = n(d, "other_ltcg")
        # Same VDA/other_stcg disambiguation as in _compute_old
        vda_income = n(d, "vda_income")
        raw_other_stcg = n(d, "other_stcg")
        if vda_income == 0 and raw_other_stcg > 0 and stcg_111a == 0:
            vda_income = raw_other_stcg
            other_stcg = 0.0
        else:
            other_stcg = raw_other_stcg
        tds = n(d, "tds_total")

        tax_111a = stcg_111a * C.STCG_111A_RATE
        ltcg_112a_taxable = max(0.0, ltcg_112a - C.LTCG_112A_EXEMPTION)
        tax_112a = ltcg_112a_taxable * C.LTCG_112A_RATE
        tax_112 = ltcg_112 * C.LTCG_112_RATE
        tax_vda = vda_income * C.VDA_RATE
        total_special_tax = tax_111a + tax_112a + tax_112 + tax_vda

        slab_taxable = round_to_nearest_10(base.taxable_income + other_stcg)
        slab_tax = compute_slab_tax(slab_taxable, C.NEW_REGIME_SLABS)

        total_income = round_to_nearest_10(slab_taxable + stcg_111a + ltcg_112a + ltcg_112 + vda_income)

        # Rebate / Marginal Relief under Sec 87A:
        # Evaluated against TOTAL INCOME (if total income > 12L, NO 87A rebate)
        if total_income <= C.NEW_REGIME_REBATE_INCOME_LIMIT:
            rebate, marginal_relief, slab_tax_after_rebate = apply_rebate_and_marginal_relief_new(slab_tax, total_income)
        else:
            rebate = 0.0
            marginal_relief = 0.0
            slab_tax_after_rebate = slab_tax

        tax_before_surcharge = slab_tax_after_rebate + total_special_tax

        surcharge = compute_surcharge(tax_before_surcharge, total_income, is_new_regime=True)
        cess = apply_cess(tax_before_surcharge + surcharge)
        total_tax = round(tax_before_surcharge + surcharge + cess)
        tax_payable = total_tax - tds

        breakdown = [
            BreakdownItem("Gross Total Normal Income", slab_taxable),
            BreakdownItem("Tax on Normal Income (slab)", slab_tax),
            BreakdownItem("Less: Rebate u/s 87A", -rebate),
            BreakdownItem("Less: Marginal Relief u/s 87A", -marginal_relief),
            BreakdownItem("STCG u/s 111A (Listed Equity)", stcg_111a),
            BreakdownItem("Special Tax on STCG @ 20% (111A)", tax_111a),
            BreakdownItem("LTCG u/s 112A (Listed Equity)", ltcg_112a),
            BreakdownItem("Exemption u/s 112A (Rs. 1.25 Lakh)", -min(ltcg_112a, C.LTCG_112A_EXEMPTION)),
            BreakdownItem("Taxable LTCG u/s 112A", ltcg_112a_taxable),
            BreakdownItem("Special Tax on LTCG @ 12.5% (112A)", tax_112a),
            BreakdownItem("LTCG Other Assets u/s 112", ltcg_112),
            BreakdownItem("Special Tax on LTCG @ 12.5% (112)", tax_112),
        ]
        if vda_income > 0:
            breakdown.extend([
                BreakdownItem("VDA / Crypto Income u/s 115BBH (@ 30%)", vda_income),
                BreakdownItem("Special Tax on VDA @ 30% (115BBH)", tax_vda),
            ])
        breakdown.extend([
            BreakdownItem("Total Tax Before Surcharge & Cess", tax_before_surcharge),
            BreakdownItem("Surcharge", surcharge),
            BreakdownItem("Health & Education Cess @ 4%", cess),
            BreakdownItem("Total Tax Liability", total_tax),
            BreakdownItem("Less: Taxes Paid / TDS", -tds),
            BreakdownItem("Net Tax Payable / (Refund)", tax_payable),
        ])

        return RegimeResult(
            gross_total_income=base.gross_total_income + stcg_111a + ltcg_112a + ltcg_112 + other_stcg + vda_income,
            deductions=0.0,
            taxable_income=total_income,
            base_tax=slab_tax,
            special_rate_tax=total_special_tax,
            rebate_87a=rebate,
            marginal_relief=marginal_relief,
            tax_after_rebate=tax_before_surcharge,
            surcharge=surcharge,
            cess=cess,
            total_tax=total_tax,
            tds=tds,
            tax_payable=tax_payable,
            breakdown=breakdown,
        )
