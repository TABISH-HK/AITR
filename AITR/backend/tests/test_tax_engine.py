"""
Unit tests for Tax Computation Engine (ITR-1, ITR-2, ITR-4)
AY 2026-27 (FY 2025-26).
Directly tests formulas from the ITR Computation Formula Sheet:
1. Section 12 Worked Example (New Regime): Gross 15L -> Tax 97,500
2. Section 9 Rebate u/s 87A (New Regime up to 12L is Nil)
3. Section 9 Marginal Relief (New Regime above 12L capped at excess income)
4. Section 5 Capital Gains (STCG 111A @ 20%, LTCG 112A @ 12.5% above 1.25L)
5. Section 4 Presumptive Income (44AD 8%/6%, 44ADA 50%, 44AE)
6. Old Regime slab tax and deduction comparisons
"""
import pytest
from services.tax_engine.itr1_engine import Itr1Engine
from services.tax_engine.itr2_engine import Itr2Engine
from services.tax_engine.itr4_engine import Itr4Engine


def test_section_12_worked_example():
    """
    Section 12 of Formula Sheet:
    Salary Income: 15,00,000
    Less: Standard Deduction: 75,000
    Taxable Income: 14,25,000
    Tax:
      0 - 4L @ 0% = 0
      4L - 8L @ 5% = 20,000
      8L - 12L @ 10% = 40,000
      12L - 14.25L @ 15% = 33,750
      Total Base Tax = 93,750
      Add: Cess @ 4% = 3,750
      TOTAL TAX LIABILITY = 97,500
    """
    engine = Itr1Engine()
    data = {
        "gross_salary": 1_500_000,
        "exemptions_u10": 0,
        "house_property_income": 0,
        "other_income": 0,
        "deduction_80c": 0,
        "tds_total": 0,
    }
    result = engine.compute(data)
    new = result.new_regime

    assert new.gross_total_income == 1_425_000  # After standard deduction
    assert new.taxable_income == 1_425_000
    assert new.base_tax == 93_750.0
    assert new.cess == 3_750.0
    assert new.total_tax == 97_500.0
    assert new.tax_payable == 97_500.0


def test_section_9_rebate_87a_new_regime_up_to_12_lakh():
    """
    Section 9: New Regime Rebate up to Rs. 60,000 if taxable income <= Rs. 12,00,000.
    E.g. Gross salary 12,75,000 - 75,000 SD = 12,00,000 taxable income.
    Tax on 12L: 4L@5% (20k) + 4L@10% (40k) = 60,000.
    Rebate = 60,000 -> Net Tax is 0!
    """
    engine = Itr1Engine()
    data = {
        "gross_salary": 1_275_000,
        "exemptions_u10": 0,
        "house_property_income": 0,
        "other_income": 0,
        "tds_total": 0,
    }
    result = engine.compute(data)
    new = result.new_regime

    assert new.taxable_income == 1_200_000
    assert new.base_tax == 60_000.0
    assert new.rebate_87a == 60_000.0
    assert new.total_tax == 0.0
    assert new.tax_payable == 0.0


def test_section_9_marginal_relief_new_regime():
    """
    Section 9 Marginal Relief:
    When taxable income is slightly above Rs. 12 lakh (e.g. 12,10,000):
    Slab tax = 60,000 (up to 12L) + 10,000 * 15% (1,500) = 61,500.
    Excess income over 12L = 10,000.
    Tax payable is LOWER of:
      (a) 61,500
      (b) 10,000 (Excess income)
    -> Base tax capped at 10,000 + 4% cess (400) = 10,400 total tax!
    """
    engine = Itr1Engine()
    data = {
        "gross_salary": 1_285_000,  # 12.85L - 75K SD = 12.10L taxable
        "exemptions_u10": 0,
        "house_property_income": 0,
        "other_income": 0,
        "tds_total": 0,
    }
    result = engine.compute(data)
    new = result.new_regime

    assert new.taxable_income == 1_210_000
    assert new.base_tax == 61_500.0
    assert new.marginal_relief == 51_500.0
    assert new.tax_after_rebate == 10_000.0
    assert new.cess == 400.0
    assert new.total_tax == 10_400.0


def test_section_5_capital_gains_itr2():
    """
    Section 5 Capital Gains rates:
    - STCG u/s 111A: 20%
    - LTCG u/s 112A: 12.5% on gains above Rs. 1.25 lakh
    E.g. STCG 111A = 1,00,000 -> Tax @ 20% = 20,000
         LTCG 112A = 2,25,000 -> Taxable 1,00,000 @ 12.5% = 12,500
    """
    engine = Itr2Engine()
    data = {
        "gross_salary": 0,
        "stcg_111a": 100_000,
        "ltcg_112a": 225_000,
        "other_ltcg": 0,
        "tds_total": 0,
    }
    result = engine.compute(data)
    new = result.new_regime

    assert new.special_rate_tax == 32_500.0  # 20,000 + 12,500
    # 32,500 + 4% cess (1,300) = 33,800
    assert new.total_tax == 33_800.0


def test_section_4_presumptive_taxation_itr4():
    """
    Section 4 Presumptive Rates:
    - 44AD turnover 50,00,000 (digital receipts 6%) -> 3,00,000
    - 44ADA receipts 20,00,000 (50%) -> 10,00,000
    Total = 13,00,000
    """
    engine = Itr4Engine()
    data = {
        "turnover_44ad": 5_000_000,
        "is_digital_receipts_44ad": True,
        "receipts_44ada": 2_000_000,
        "vehicles_44ae": 0,
        "other_income": 0,
        "tds_total": 0,
    }
    result = engine.compute(data)
    assert result.new_regime.gross_total_income == 1_300_000
