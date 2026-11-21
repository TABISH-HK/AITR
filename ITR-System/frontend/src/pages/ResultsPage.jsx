import React, { useState } from 'react';
import { Download, CheckCircle, ArrowLeft, FileText, Check, AlertTriangle } from 'lucide-react';
import { generateReport } from '../api/client';

export default function ResultsPage({ data, onEditAgain, onNewUpload }) {
  const { computation, reviewed_data, document } = data;
  const { old_regime, new_regime, recommended_regime } = computation;

  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [downloadingDocx, setDownloadingDocx] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  const formatCurrency = (val) => {
    return '₹' + Number(val || 0).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleDownload = async (format) => {
    setDownloadError(null);
    if (format === 'PDF') setDownloadingPdf(true);
    if (format === 'DOCX') setDownloadingDocx(true);

    try {
      const res = await generateReport(computation.computation_id, format);
      window.open(res.download_url, '_blank');
    } catch (err) {
      console.error(err);
      setDownloadError(err.response?.data?.detail || err.message || `Failed to generate ${format} report.`);
    } finally {
      if (format === 'PDF') setDownloadingPdf(false);
      if (format === 'DOCX') setDownloadingDocx(false);
    }
  };

  const taxDiff = Math.abs(old_regime.total_tax - new_regime.total_tax);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <button
            onClick={onEditAgain}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium mb-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Edit Fields
          </button>
          <h1 className="text-2xl font-bold text-slate-900">Tax Computation Results</h1>
          <p className="text-sm text-slate-500">
            Assessment Year: <span className="font-semibold text-slate-700">{computation.assessment_year}</span> &bull; Taxpayer: <span className="font-semibold text-slate-700">{reviewed_data?.name || 'Taxpayer'}</span>
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleDownload('PDF')}
            disabled={downloadingPdf}
            className="flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{downloadingPdf ? 'Building PDF...' : 'Download PDF'}</span>
          </button>

          <button
            onClick={() => handleDownload('DOCX')}
            disabled={downloadingDocx}
            className="flex items-center space-x-1.5 px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-medium transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{downloadingDocx ? 'Building DOCX...' : 'Download Word'}</span>
          </button>
        </div>
      </div>

      {downloadError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {downloadError}
        </div>
      )}

      {/* Recommendation Banner */}
      <div className="mb-8 p-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Check className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">
              Recommended: {recommended_regime} REGIME
            </h2>
            <p className="text-sm text-emerald-50">
              {taxDiff > 0
                ? `You save approximately ${formatCurrency(taxDiff)} by opting for the ${recommended_regime} Tax Regime.`
                : 'Both regimes yield an identical tax liability.'}
            </p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs uppercase tracking-wider text-emerald-100 font-semibold">Lower Liability</div>
          <div className="text-2xl font-black">
            {formatCurrency(recommended_regime === 'OLD' ? old_regime.total_tax : new_regime.total_tax)}
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Old Regime Card */}
        <div className={`rounded-xl border p-6 transition-all ${
          recommended_regime === 'OLD'
            ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
            : 'bg-white border-slate-200 opacity-90'
        }`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">Old Tax Regime</h3>
            {recommended_regime === 'OLD' && (
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                BEST CHOICE
              </span>
            )}
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Gross Total Income</span>
              <span className="font-medium text-slate-800">{formatCurrency(old_regime.gross_total_income)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Total Deductions (VI-A)</span>
              <span className="font-medium text-emerald-600">- {formatCurrency(old_regime.deductions)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 font-semibold">
              <span className="text-slate-700">Taxable Income</span>
              <span className="text-slate-900">{formatCurrency(old_regime.taxable_income)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Base Slab Tax</span>
              <span className="text-slate-800">{formatCurrency(old_regime.base_tax)}</span>
            </div>
            {old_regime.special_rate_tax > 0 && (
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Special-Rate Tax (Capital Gains)</span>
                <span className="text-slate-800">{formatCurrency(old_regime.special_rate_tax)}</span>
              </div>
            )}
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Section 87A Rebate</span>
              <span className="text-emerald-600">- {formatCurrency(old_regime.rebate_87a)}</span>
            </div>
            {old_regime.surcharge > 0 && (
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Surcharge</span>
                <span className="text-slate-800">{formatCurrency(old_regime.surcharge)}</span>
              </div>
            )}
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Cess (4%)</span>
              <span className="text-slate-800">{formatCurrency(old_regime.cess)}</span>
            </div>
            <div className="flex justify-between py-2 border-b-2 border-slate-200 text-base font-bold">
              <span className="text-slate-900">Total Tax Liability</span>
              <span className="text-slate-900">{formatCurrency(old_regime.total_tax)}</span>
            </div>
            <div className="flex justify-between py-1 text-slate-500">
              <span>Less: TDS Paid</span>
              <span>- {formatCurrency(old_regime.tds)}</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-base bg-slate-50 px-3 rounded-lg">
              <span className="text-slate-800">Net Tax Payable</span>
              <span className="text-indigo-600">{formatCurrency(old_regime.tax_payable)}</span>
            </div>
          </div>
        </div>

        {/* New Regime Card */}
        <div className={`rounded-xl border p-6 transition-all ${
          recommended_regime === 'NEW'
            ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
            : 'bg-white border-slate-200 opacity-90'
        }`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">New Tax Regime (Default)</h3>
            {recommended_regime === 'NEW' && (
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                BEST CHOICE
              </span>
            )}
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Gross Total Income</span>
              <span className="font-medium text-slate-800">{formatCurrency(new_regime.gross_total_income)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Deductions (Standard ₹75K only)</span>
              <span className="font-medium text-slate-400">Nil in VI-A</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 font-semibold">
              <span className="text-slate-700">Taxable Income</span>
              <span className="text-slate-900">{formatCurrency(new_regime.taxable_income)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Base Slab Tax</span>
              <span className="text-slate-800">{formatCurrency(new_regime.base_tax)}</span>
            </div>
            {new_regime.special_rate_tax > 0 && (
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Special-Rate Tax (Capital Gains)</span>
                <span className="text-slate-800">{formatCurrency(new_regime.special_rate_tax)}</span>
              </div>
            )}
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Section 87A Rebate (&le; ₹12L)</span>
              <span className="text-emerald-600">- {formatCurrency(new_regime.rebate_87a)}</span>
            </div>
            {new_regime.marginal_relief > 0 && (
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Marginal Relief u/s 87A</span>
                <span className="text-emerald-600">- {formatCurrency(new_regime.marginal_relief)}</span>
              </div>
            )}
            {new_regime.surcharge > 0 && (
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Surcharge</span>
                <span className="text-slate-800">{formatCurrency(new_regime.surcharge)}</span>
              </div>
            )}
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Cess (4%)</span>
              <span className="text-slate-800">{formatCurrency(new_regime.cess)}</span>
            </div>
            <div className="flex justify-between py-2 border-b-2 border-slate-200 text-base font-bold">
              <span className="text-slate-900">Total Tax Liability</span>
              <span className="text-slate-900">{formatCurrency(new_regime.total_tax)}</span>
            </div>
            <div className="flex justify-between py-1 text-slate-500">
              <span>Less: TDS Paid</span>
              <span>- {formatCurrency(new_regime.tds)}</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-base bg-slate-50 px-3 rounded-lg">
              <span className="text-slate-800">Net Tax Payable</span>
              <span className="text-indigo-600">{formatCurrency(new_regime.tax_payable)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Breakdown Accordion / Tables */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Step-wise Workings (Auditable Engine Breakdown)
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Old Regime Steps</h4>
            <div className="bg-slate-50 rounded-lg p-3 text-xs space-y-1.5 font-mono">
              {old_regime.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-slate-600">{item.label}</span>
                  <span className={item.amount < 0 ? 'text-red-600 font-semibold' : 'text-slate-900 font-semibold'}>
                    {formatCurrency(item.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">New Regime Steps</h4>
            <div className="bg-slate-50 rounded-lg p-3 text-xs space-y-1.5 font-mono">
              {new_regime.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-slate-600">{item.label}</span>
                  <span className={item.amount < 0 ? 'text-red-600 font-semibold' : 'text-slate-900 font-semibold'}>
                    {formatCurrency(item.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Non-advisory Statutory Disclaimer */}
      <div className="p-4 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-500 leading-relaxed">
        <strong>Statutory Non-Advisory Disclaimer:</strong> This computation sheet is generated automatically by the
        AI-Based ITR Computation System for informational and academic demonstration purposes only. It does not constitute
        formal chartered accountancy, legal, or financial tax advice. Tax liabilities should be verified against official
        Income Tax Department rules before electronic filing.
      </div>
    </div>
  );
}
