import React, { useState } from 'react';
import { Check, Edit3, ArrowRight, ShieldAlert, CheckCircle, Calculator } from 'lucide-react';
import { updateReviewedData, computeTax } from '../api/client';

export default function ReviewPage({ extractionData, onComputeComplete, onBack }) {
  const { extraction, document } = extractionData;
  const initialFields = extraction.reviewed_json || extraction.extracted_json || {};

  const [formData, setFormData] = useState({
    form_type: extractionData.document.form_type || initialFields.form_type || 'ITR-1',
    name: initialFields.name || '',
    pan: initialFields.pan || '',
    gross_salary: initialFields.gross_salary ?? 0,
    exemptions_u10: initialFields.exemptions_u10 ?? 0,
    house_property_income: initialFields.house_property_income ?? 0,
    other_income: initialFields.other_income ?? 0,
    deduction_80c: initialFields.deduction_80c ?? 0,
    deduction_80d: initialFields.deduction_80d ?? 0,
    deduction_80tta: initialFields.deduction_80tta ?? 0,
    other_deductions: initialFields.other_deductions ?? 0,
    stcg_111a: initialFields.stcg_111a ?? 0,
    ltcg_112a: initialFields.ltcg_112a ?? 0,
    turnover_44ad: initialFields.turnover_44ad ?? 0,
    receipts_44ada: initialFields.receipts_44ada ?? 0,
    vehicles_44ae: initialFields.vehicles_44ae ?? 0,
    is_digital_receipts_44ad: initialFields.is_digital_receipts_44ad ?? false,
    tds_total: initialFields.tds_total ?? 0,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const handleCompute = async () => {
    setSaving(true);
    setError(null);
    try {
      // 1. Save reviewed values (FR-004)
      await updateReviewedData(extraction.extraction_id, formData);

      // 2. Run deterministic tax computation (FR-005, FR-006, FR-007, FR-008)
      const compRes = await computeTax(extraction.extraction_id);

      onComputeComplete({
        ...extractionData,
        computation: compRes,
        reviewed_data: formData,
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.message || 'Computation failed.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Review & Correct Extracted Data</h1>
          <p className="text-sm text-slate-500">
            Source: <span className="font-medium text-slate-700">{document.file_name}</span> &bull; Detected Form: <span className="font-bold text-indigo-600">{formData.form_type}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
          >
            &larr; Re-upload
          </button>
          <button
            onClick={handleCompute}
            disabled={saving}
            className="flex items-center space-x-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm shadow-sm transition-all"
          >
            <Calculator className="w-4 h-4" />
            <span>{saving ? 'Computing...' : 'Calculate Tax Liability'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Form & Identity Info */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            Document & Taxpayer Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">ITR Form Type</label>
              <select
                name="form_type"
                value={formData.form_type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="ITR-1">ITR-1 (Sahaj - Salaried)</option>
                <option value="ITR-2">ITR-2 (Capital Gains & Multiple HP)</option>
                <option value="ITR-4">ITR-4 (Sugam - Presumptive)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Taxpayer Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Tabish Hasan"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">PAN Number</label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleInputChange}
                placeholder="e.g. ABCDE1234F"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Salary & House Property (Common to ITR-1, ITR-2) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            Income Heads (₹)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Gross Salary</label>
              <input
                type="number"
                name="gross_salary"
                value={formData.gross_salary}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Exemptions u/s 10 (HRA, etc.)</label>
              <input
                type="number"
                name="exemptions_u10"
                value={formData.exemptions_u10}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">House Property (+ / - Loss)</label>
              <input
                type="number"
                name="house_property_income"
                value={formData.house_property_income}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Other Income (Interest, etc.)</label>
              <input
                type="number"
                name="other_income"
                value={formData.other_income}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Deductions (Old Regime) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-800">
              Chapter VI-A Deductions (Old Regime)
            </h2>
            <span className="text-xs text-slate-400">Limits apply automatically</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Section 80C (PPF, ELSS, EPF)</label>
              <input
                type="number"
                name="deduction_80c"
                value={formData.deduction_80c}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Section 80D (Health Insurance)</label>
              <input
                type="number"
                name="deduction_80d"
                value={formData.deduction_80d}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Section 80TTA (Savings Interest)</label>
              <input
                type="number"
                name="deduction_80tta"
                value={formData.deduction_80tta}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Other Deductions (80CCD, etc.)</label>
              <input
                type="number"
                name="other_deductions"
                value={formData.other_deductions}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Capital Gains (ITR-2) */}
        {formData.form_type === 'ITR-2' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              Capital Gains (ITR-2 Special Rates)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  STCG u/s 111A (Listed Equity @ 15%)
                </label>
                <input
                  type="number"
                  name="stcg_111a"
                  value={formData.stcg_111a}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  LTCG u/s 112A (Listed Equity @ 10% after ₹1L exemption)
                </label>
                <input
                  type="number"
                  name="ltcg_112a"
                  value={formData.ltcg_112a}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Presumptive Taxation (ITR-4) */}
        {formData.form_type === 'ITR-4' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              Presumptive Business / Profession Income (ITR-4)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Section 44AD Turnover (Business)</label>
                <input
                  type="number"
                  name="turnover_44ad"
                  value={formData.turnover_44ad}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <label className="mt-2 flex items-center space-x-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    name="is_digital_receipts_44ad"
                    checked={formData.is_digital_receipts_44ad}
                    onChange={handleInputChange}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Digital receipts (6% rate instead of 8%)</span>
                </label>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Section 44ADA Receipts (Profession)</label>
                <input
                  type="number"
                  name="receipts_44ada"
                  value={formData.receipts_44ada}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Section 44AE Goods Vehicles</label>
                <input
                  type="number"
                  name="vehicles_44ae"
                  value={formData.vehicles_44ae}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Taxes Paid (TDS) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            TDS / Advance Tax Already Paid (₹)
          </h2>
          <div className="max-w-xs">
            <label className="block text-xs font-medium text-slate-600 mb-1">Total TDS / Advance Tax Paid</label>
            <input
              type="number"
              name="tds_total"
              value={formData.tds_total}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            onClick={onBack}
            className="px-5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleCompute}
            disabled={saving}
            className="flex items-center space-x-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm shadow-md transition-all"
          >
            <Calculator className="w-4 h-4" />
            <span>{saving ? 'Computing...' : 'Calculate Tax Liability &rarr;'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
