import React from 'react';
import { FileText, History, Calculator, Sparkles, Building2, User, LogOut } from 'lucide-react';
import { getSessionId, resetSessionId, getSessionUser } from '../api/client';

export default function Navbar({ activeTab, setActiveTab, onOpenLogin, sessionUser, onLogout }) {
  const handleNewSession = () => {
    if (confirm('Start a new session? Current session documents will remain in history.')) {
      resetSessionId();
      window.location.reload();
    }
  };

  const user = sessionUser || getSessionUser();

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
                <span className="font-bold text-lg text-slate-900 tracking-tight">AITR</span>
              </div>
              <div className="text-xs text-slate-500 hidden sm:block">
                AI-Driven Income Tax Return Computation
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

          {/* User Session Info / Login Button */}
          <div className="flex items-center space-x-3 text-xs">
            {user ? (
              <div className="flex items-center space-x-2 bg-indigo-50/80 border border-indigo-100 px-3 py-1.5 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[11px]">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 leading-none">{user.name}</p>
                  <p className="text-[10px] text-slate-500 font-mono leading-none mt-0.5">{user.pan || 'Active Session'}</p>
                </div>
                <button
                  onClick={onLogout}
                  title="Sign out / Switch user"
                  className="ml-2 text-slate-400 hover:text-red-600 transition-colors p-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-lg border border-slate-200 transition-all font-medium"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In / Session</span>
              </button>
            )}

            <button
              onClick={handleNewSession}
              title="Reset session ID"
              className="hidden lg:inline text-xs text-slate-400 hover:text-slate-600 underline"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
