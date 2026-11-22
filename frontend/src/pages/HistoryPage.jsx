import React, { useEffect, useState } from 'react';
import { History, FileText, Download, Calendar, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { getSessionHistory } from '../api/client';

export default function HistoryPage({ onSelectComputation }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHistory = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSessionHistory();
      setHistory(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load session history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Computation History</h1>
          <p className="text-sm text-slate-500">Documents and computations performed during your current browser session.</p>
        </div>
        <button
          onClick={fetchHistory}
          className="flex items-center space-x-1.5 px-3 py-1.5 border border-slate-300 rounded-lg text-xs text-slate-600 hover:bg-slate-50"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-16">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {error}
        </div>
      )}

      {!loading && history.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <History className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-700">No Computations Yet</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Upload your first ITR document to see its extraction, computation, and report downloads recorded here.
          </p>
        </div>
      )}

      {!loading && history.length > 0 && (
        <div className="space-y-4">
          {history.map((item, idx) => {
            const { document, computation, reports } = item;
            return (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-slate-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-slate-900">{document.file_name}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {document.form_type || 'ITR-1'}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(document.uploaded_at).toLocaleDateString()}
                      </span>
                    </div>

                    {computation && (
                      <div className="mt-2 text-xs text-slate-600 space-x-4">
                        <span>
                          Recommended: <strong className="text-emerald-700">{computation.recommended_regime} Regime</strong>
                        </span>
                        <span>
                          Old Tax: <strong>₹{computation.old_regime.total_tax.toLocaleString('en-IN')}</strong>
                        </span>
                        <span>
                          New Tax: <strong>₹{computation.new_regime.total_tax.toLocaleString('en-IN')}</strong>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {reports && reports.length > 0 && (
                      <div className="flex items-center space-x-1">
                        {reports.map((rep) => (
                          <a
                            key={rep.report_id}
                            href={rep.download_url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{rep.format}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
