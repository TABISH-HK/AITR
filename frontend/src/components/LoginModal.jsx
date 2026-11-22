import React, { useState } from 'react';
import { User, LogIn, PlusCircle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { getSessionId, setSessionUser, getSessionUser, createNamedSession } from '../api/client';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [name, setName] = useState('');
  const [pan, setPan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name or identifier.');
      return;
    }

    setIsSubmitting(true);
    try {
      const cleanPan = pan.trim().toUpperCase();
      const newSessId = createNamedSession(name.trim(), cleanPan);
      setSessionUser({
        name: name.trim(),
        pan: cleanPan,
        sessionId: newSessId,
        loggedInAt: new Date().toISOString(),
      });
      onLoginSuccess({
        name: name.trim(),
        pan: cleanPan,
        sessionId: newSessId,
      });
      onClose();
    } catch (err) {
      setError('Failed to create session. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto shadow-md mb-3">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Taxpayer Session Portal</h2>
          <p className="text-xs text-slate-500 mt-1">
            Sign in or create a dedicated computation session for your return.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Taxpayer Name / Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Tabish Hasan / Rizwan Khan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              PAN (Optional)
            </label>
            <input
              type="text"
              maxLength={10}
              placeholder="e.g. ABCDE1234F"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-white font-mono uppercase border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Used to associate your computation history and download reports.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              Continue as Guest
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-md transition-all"
            >
              <span>Start Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center space-x-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Session-isolated computations &bull; Data strictly stored in local session</span>
        </div>
      </div>
    </div>
  );
}
