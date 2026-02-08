import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import TagInput from '../components/TagInput.jsx';
import ResultCard from '../components/ResultCard.jsx';
import { analyzeSymptoms } from '../utils/diagnosis.js';
import { addHistoryRecord } from '../utils/storage.js';

const Diagnose = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState(null);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const canAnalyze = symptoms.length >= 2;

  const handleAdd = (symptom) => {
    if (symptoms.includes(symptom.toLowerCase())) return;
    setSymptoms((prev) => [...prev, symptom.toLowerCase()]);
  };

  const handleRemove = (symptom) => {
    setSymptoms((prev) => prev.filter((item) => item !== symptom));
  };

  const handleAnalyze = () => {
    if (!canAnalyze) return;
    const analysis = analyzeSymptoms(symptoms);
    const record = {
      id: crypto.randomUUID(),
      symptoms,
      ...analysis,
      timestamp: new Date().toISOString()
    };
    setResult(record);
    addHistoryRecord(record);
    setHasAnalyzed(true);
  };

  const summary = useMemo(() => {
    if (!result) return null;
    return `${result.condition} · ${result.confidence}% confidence`;
  }, [result]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Smart Symptom Checker</h1>
        <p className="mt-2 text-sm text-slate-600">
          Add at least two symptoms to get an AI-powered diagnosis. Results are saved automatically for future
          reference.
        </p>
        <div className="mt-6">
          <TagInput tags={symptoms} onAdd={handleAdd} onRemove={handleRemove} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleAnalyze}
            className={`rounded-full px-5 py-2 text-sm font-semibold text-white transition ${
              canAnalyze ? 'bg-primary-600 hover:bg-primary-700' : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            Analyze Symptoms
          </button>
          <p className="text-xs text-slate-500">You need at least two symptoms to run the analysis.</p>
        </div>
      </div>

      {hasAnalyzed && summary && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl bg-teal-50 p-4">
          <p className="text-sm font-semibold text-teal-800">Latest result: {summary}</p>
        </motion.div>
      )}

      <ResultCard result={result} />
    </div>
  );
};

export default Diagnose;
