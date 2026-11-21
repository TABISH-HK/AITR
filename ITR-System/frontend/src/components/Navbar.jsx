import React from 'react';
import { FileText, History, Calculator, Sparkles, Building2 } from 'lucide-react';
import { getSessionId, resetSessionId } from '../api/client';

export default function Navbar({ activeTab, setActiveTab }) {
  const handleNewSession = () => {
    if (confirm('Start a new session? Current session documents will remain in history.')) {
      resetSessionId();
      window.location.reload();
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Academic Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-700 flex items-center justify-center text-white shadow-md">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">AI-Based ITR System</span>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium border border-indigo-200">
                  AY 2025-26
                </span>
              </div>
              <div className="text-xs text-slate-500 hidden sm:block">
                Dept. of Computer Science &bull; Aligarh Muslim University
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'upload'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Upload</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <History className="w-4 h-4" />
              <span>History</span>
            </button>
          </nav>

          {/* User Session Info */}
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span className="hidden md:inline font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200">
              Session: {getSessionId().substring(0, 10)}...
            </span>
            <button
              onClick={handleNewSession}
              title="Reset session"
              className="text-xs text-slate-500 hover:text-indigo-600 underline"
            >
              New
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
