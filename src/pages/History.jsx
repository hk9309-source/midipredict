import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import HistoryChart from '../components/HistoryChart.jsx';
import { loadHistory } from '../utils/storage.js';

const History = () => {
  const [expandedId, setExpandedId] = useState(null);
  const history = loadHistory();

  const chartData = useMemo(() => {
    const counts = history.reduce((acc, record) => {
      acc[record.condition] = (acc[record.condition] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [history]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Diagnosis History</h1>
        <p className="mt-2 text-sm text-slate-600">
          Track every AI diagnosis with timestamps, and review details when needed.
        </p>
      </div>

      <HistoryChart data={chartData} />

      <div className="space-y-4">
        {history.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
            No diagnoses stored yet. Start with a new diagnosis to populate history.
          </div>
        )}
        {history.map((record) => {
          const isExpanded = expandedId === record.id;
          return (
            <motion.div
              layout
              key={record.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setExpandedId(isExpanded ? null : record.id)}
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{record.condition}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(record.timestamp).toLocaleString()} · {record.confidence}% confidence
                  </p>
                </div>
                <span className="text-sm font-semibold text-primary-600">{isExpanded ? 'Hide' : 'View'}</span>
              </button>

              {isExpanded && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-slate-600">
                  <div className="flex flex-wrap gap-2">
                    {record.symptoms.map((symptom) => (
                      <span
                        key={symptom}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3">{record.explanation}</p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Medications</p>
                      <ul className="mt-2 list-disc space-y-1 pl-4">
                        {record.medications.map((med) => (
                          <li key={med}>{med}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Precautions</p>
                      <ul className="mt-2 list-disc space-y-1 pl-4">
                        {record.precautions.map((precaution) => (
                          <li key={precaution}>{precaution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
