import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UploadPage from './pages/UploadPage';
import ReviewPage from './pages/ReviewPage';
import ResultsPage from './pages/ResultsPage';
import HistoryPage from './pages/HistoryPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'review' | 'results' | 'history'
  const [extractionData, setExtractionData] = useState(null);
  const [computationData, setComputationData] = useState(null);

  const handleExtractionComplete = (data) => {
    setExtractionData(data);
    setActiveTab('review');
  };

  const handleComputeComplete = (data) => {
    setComputationData(data);
    setActiveTab('results');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === 'upload' && (
          <UploadPage onExtractionComplete={handleExtractionComplete} />
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

      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        AI-Based ITR Computation System &bull; AMU MCA Mini Project &bull; Academic Year 2026-27 &bull; Tabish Hasan (25CAMSA156)
      </footer>
    </div>
  );
}
