import React, { useState } from 'react';
import { UploadCloud, FileCheck, AlertCircle, Loader2, Info, CheckCircle2 } from 'lucide-react';
import { uploadFile, extractDocument } from '../api/client';

export default function UploadPage({ onExtractionComplete, onExtractingChange }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [error, setError] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileSelected(e.target.files[0]);
    }
  };

  const handleFileSelected = (file) => {
    setError(null);
    const ext = file.name.split('.').pop().toLowerCase();
    if (ext !== 'pdf' && ext !== 'docx') {
      setError('Only PDF and DOCX documents with selectable text are supported.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File exceeds the 10 MB size limit.');
      return;
    }
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);
    if (onExtractingChange) onExtractingChange(true);

    try {
      setLoadingStep('Phase 1/3: Uploading & validating document text...');
      const uploadRes = await uploadFile(selectedFile);

      setLoadingStep('Phase 2/3: Parsing financial schedules & tables...');
      await new Promise((r) => setTimeout(r, 600));

      setLoadingStep('Phase 3/3: AI Extraction & ITR form classification...');
      const extRes = await extractDocument(uploadRes.document_id);

      if (onExtractingChange) onExtractingChange(false);
      onExtractionComplete({
        document: uploadRes,
        extraction: extRes,
      });
    } catch (err) {
      console.error(err);
      if (onExtractingChange) onExtractingChange(false);
      setError(err.response?.data?.detail || err.message || 'Processing failed. Please check your document.');
    } finally {
      setLoading(false);
      setLoadingStep('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6">
      {/* Intro Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl drop-shadow-sm">
          Upload ITR Financial Document
        </h1>
        <p className="mt-3 text-base text-slate-300 max-w-2xl mx-auto">
          Upload your Form 16, salary slip, or computation draft in PDF or DOCX.
          The AI layer extracts your income, deductions, and capital gains, followed by deterministic tax computation.
        </p>
      </div>

      {/* Main Upload Box */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 sm:p-12 text-center transition-all ${
            dragActive
              ? 'border-indigo-600 bg-indigo-50/50'
              : 'border-slate-300 hover:border-slate-400 bg-slate-50/50'
          }`}
        >
          <UploadCloud className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
          <p className="text-sm font-medium text-slate-700">
            Drag and drop your document here, or{' '}
            <label className="text-indigo-600 hover:text-indigo-500 cursor-pointer font-semibold underline">
              browse
              <input
                type="file"
                className="hidden"
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Supported formats: PDF, DOCX &bull; Maximum file size: 10 MB
          </p>
        </div>

        {/* Selected File Card */}
        {selectedFile && (
          <div className="mt-6 flex items-center justify-between p-4 bg-indigo-50/60 border border-indigo-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileCheck className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm font-medium text-slate-800">{selectedFile.name}</p>
                <p className="text-xs text-slate-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Remove
            </button>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3 text-red-800 text-sm">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Upload or Extraction Failed</p>
              <p className="mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Process Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!selectedFile || loading}
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white shadow-sm transition-all ${
              !selectedFile || loading
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{loadingStep || 'Processing...'}</span>
              </>
            ) : (
              <span>Extract & Continue &rarr;</span>
            )}
          </button>
        </div>
      </div>

      {/* Academic / Scope Notice */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-500">
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-700 mb-1">Supported Forms</p>
          <p>ITR-1 (Salaried), ITR-2 (Capital Gains & Multiple HP), and ITR-4 (Presumptive u/s 44AD/ADA/AE).</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-700 mb-1">Dual-Regime Calculation</p>
          <p>Computes tax under both Old and New regimes for AY 2025-26 with automated rebate and recommendation.</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-700 mb-1">Auditable & Deterministic</p>
          <p>AI is strictly used for extraction; all tax calculations are executed by a rule-based engine.</p>
        </div>
      </div>
    </div>
  );
}
