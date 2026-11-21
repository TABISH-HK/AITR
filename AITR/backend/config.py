"""
Tax rules configuration for AY 2026-27 (FY 2025-26).
All slab limits, rates, deductions, cess and surcharges are stored here as constants.
Matches the official ITR Formula Sheet for AY 2026-27.
"""

ASSESSMENT_YEAR = "2026-27"
FINANCIAL_YEAR = "2025-26"

# ─── New Regime Slabs (Default, Sec 115BAC) ──────────────────────────────────
# Up to Rs. 4,00,000          : Nil
# Rs. 4,00,001 - 8,00,000     : 5%
# Rs. 8,00,001 - 12,00,000    : 10%
# Rs. 12,00,001 - 16,00,000   : 15%
# Rs. 16,00,001 - 20,00,000   : 20%
# Rs. 20,00,001 - 24,00,000   : 25%
# Above Rs. 24,00,000         : 30%
NEW_REGIME_SLABS = [
    (400_000,   0.00),
    (800_000,   0.05),
    (1_200_000, 0.10),
    (1_600_000, 0.15),
    (2_000_000, 0.20),
    (2_400_000, 0.25),
    (float("inf"), 0.30),
]

# Standard deduction
NEW_REGIME_STANDARD_DEDUCTION = 75_000
OLD_REGIME_STANDARD_DEDUCTION = 50_000

# ─── Section 87A Rebate & Marginal Relief ───────────────────────────────────
# New Regime: Rebate up to Rs. 60,000 if taxable income <= Rs. 12,00,000
NEW_REGIME_REBATE_INCOME_LIMIT = 1_200_000
NEW_REGIME_REBATE_MAX = 60_000

# Old Regime: Rebate up to Rs. 12,500 if taxable income <= Rs. 5,00,000
OLD_REGIME_REBATE_INCOME_LIMIT = 500_000
OLD_REGIME_REBATE_MAX = 12_500

# ─── Old Regime Slabs (Below 60 years) ───────────────────────────────────────
# Up to Rs. 2,50,000          : Nil
# Rs. 2,50,001 - 5,00,000     : 5%
# Rs. 5,00,001 - 10,00,000    : 20%
# Above Rs. 10,00,000         : 30%
OLD_REGIME_SLABS = [
    (250_000,   0.00),
    (500_000,   0.05),
    (1_000_000, 0.20),
    (float("inf"), 0.30),
]

# ─── Capital Gains Rates (AY 2026-27 Formula Sheet) ──────────────────────────
# STCG on listed equity (Sec 111A): 20%
STCG_111A_RATE = 0.20

# LTCG on listed equity (Sec 112A): 12.5% on gains above Rs. 1.25 lakh
LTCG_112A_RATE = 0.125
LTCG_112A_EXEMPTION = 125_000

# LTCG on other assets (Sec 112): 12.5%
LTCG_112_RATE = 0.125

# ─── Presumptive Taxation (ITR-4) ────────────────────────────────────────────
# Sec 44AD: 8% of turnover (6% for digital receipts)
S44AD_RATE_NORMAL = 0.08
S44AD_RATE_DIGITAL = 0.06

# Sec 44ADA: 50% of gross receipts
S44ADA_RATE = 0.50

# Sec 44AE: Rs. 7,500 per vehicle per month
S44AE_PER_VEHICLE_MONTH = 7_500

# ─── Chapter VI-A Deductions (Old Regime) ────────────────────────────────────
SEC_80C_LIMIT = 150_000
SEC_80CCD1B_LIMIT = 50_000       # NPS additional
SEC_80D_SELF_LIMIT = 25_000      # Non-senior
SEC_80D_SENIOR_LIMIT = 50_000    # Senior citizen
SEC_80TTA_LIMIT = 10_000         # Savings interest
SEC_80TTB_LIMIT = 50_000         # Senior citizen interest

# House Property self-occupied loan interest cap (Old Regime only)
HOME_LOAN_INTEREST_LIMIT_SELF_OCCUPIED = 200_000

# ─── Health and Education Cess ───────────────────────────────────────────────
CESS_RATE = 0.04  # 4% on (Tax + Surcharge)

# ─── Surcharge Rates ─────────────────────────────────────────────────────────
SURCHARGE_TIERS = [
    (50_000_000, 0.37),  # > 5 Cr (Old regime 37%, New regime capped at 25%)
    (20_000_000, 0.25),  # > 2 Cr: 25%
    (10_000_000, 0.15),  # > 1 Cr: 15%
    (5_000_000,  0.10),  # > 50 L: 10%
]
