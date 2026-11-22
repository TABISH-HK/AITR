import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import GridScan from './components/GridScan';
import UploadPage from './pages/UploadPage';
import ReviewPage from './pages/ReviewPage';
import ResultsPage from './pages/ResultsPage';
import HistoryPage from './pages/HistoryPage';
import { getSessionUser, resetSessionId } from './api/client';

export default function App() {
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'review' | 'results' | 'history'
  const [extractionData, setExtractionData] = useState(null);
  const [computationData, setComputationData] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [sessionUser, setSessionUser] = useState(null);
  const [isExtracting, setIsExtracting] = useState(false);

  useEffect(() => {
    const user = getSessionUser();
    if (user) {
      setSessionUser(user);
    }
  }, []);

  const handleExtractionComplete = (data) => {
    setExtractionData(data);
    setActiveTab('review');
  };

  const handleComputeComplete = (data) => {
    setComputationData(data);
    setActiveTab('results');
  };

  const handleLogout = () => {
    if (confirm('Sign out of this session?')) {
      resetSessionId();
      setSessionUser(null);
      setExtractionData(null);
      setComputationData(null);
      setActiveTab('upload');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Dynamic Interactive GridScan WebGL Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <GridScan
          lineThickness={1}
          gridScale={0.12}
          lineJitter={0.08}
          linesColor="#1e293b"
          scanColor={isExtracting ? "#a855f7" : "#6366f1"}
          scanOpacity={isExtracting ? 0.85 : 0.45}
          scanDuration={isExtracting ? 0.6 : 3.8}
          scanDelay={isExtracting ? 0.0 : 1.2}
          enablePost
          bloomIntensity={isExtracting ? 0.6 : 0.2}
          chromaticAberration={isExtracting ? 0.005 : 0.002}
          noiseIntensity={0.012}
          scanGlow={isExtracting ? 0.9 : 0.5}
          scanSoftness={2}
          scanOnClick={true}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenLogin={() => setIsLoginOpen(true)}
          sessionUser={sessionUser}
          onLogout={handleLogout}
        />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={(user) => {
            setSessionUser(user);
            setActiveTab('upload');
          }}
        />

        <main className="flex-1 backdrop-blur-[2px]">
          {activeTab === 'upload' && (
            <UploadPage
              onExtractionComplete={handleExtractionComplete}
              onExtractingChange={setIsExtracting}
            />
          )}

          {activeTab === 'review' && extractionData && (
            <ReviewPage
              extractionData={extractionData}
              onComputeComplete={handleComputeComplete}
              onBack={() => setActiveTab('upload')}
            />
          )}

          {activeTab === 'results' && computationData && (
            <ResultsPage
              data={computationData}
              onEditAgain={() => setActiveTab('review')}
              onNewUpload={() => setActiveTab('upload')}
            />
          )}

          {activeTab === 'history' && (
            <HistoryPage
              onSelectComputation={(comp) => {
                setComputationData(comp);
                setActiveTab('results');
              }}
            />
          )}
        </main>

        <footer className="bg-slate-900/80 backdrop-blur border-t border-slate-800 py-4 text-center text-xs text-slate-400">
          AI-Based ITR Computation System &bull; AMU MCA Mini Project &bull; Academic Year 2026-27 &bull; Tabish Hasan (25CAMSA156)
        </footer>
      </div>
    </div>
  );
}
