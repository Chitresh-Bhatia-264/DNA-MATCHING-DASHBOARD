import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AlignedSequences, KMP, NeedlemanWunsch } from './algorithms';
import { InputForm } from './components/InputForm';
import { AlignedSequencesViewer } from './components/AlignedSequencesViewer';
import Dashboard from './components/Dashboard';


function App() {
  const navigate = useNavigate();
  const [reference, setReference] = useState('');
  const [query, setQuery] = useState('');
  const [alignedSequences, setAlignedSequences] = useState<AlignedSequences | null>(null);

  const handleSequenceSubmit = () => {
    const needlemanWunschResult = NeedlemanWunsch(reference, query);

    setAlignedSequences({
      reference: reference,
      query: query,
      alignment: needlemanWunschResult.alignment,
      score: needlemanWunschResult.score,
    });

    navigate('/dashboard', { state: { alignedSequences: needlemanWunschResult } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route
          path="/"
          element={
            <InputForm
              reference={reference}
              query={query}
              onReferenceChange={setReference}
              onQueryChange={setQuery}
              onSubmit={handleSequenceSubmit}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
