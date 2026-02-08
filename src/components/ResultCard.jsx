import { motion } from 'framer-motion';

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-primary-100 bg-white p-6 shadow-lg"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-teal-600">Predicted condition</p>
          <h2 className="text-2xl font-semibold text-slate-900">{result.condition}</h2>
        </div>
        <div className="rounded-2xl bg-primary-50 px-5 py-3 text-center">
          <p className="text-xs font-semibold text-primary-600">Confidence</p>
          <p className="text-2xl font-bold text-primary-700">{result.confidence}%</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">{result.explanation}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Recommended actions</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-slate-600">
            {result.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Common medications</h3>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-600">
            {result.medications.map((medication) => (
              <li key={medication}>{medication}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-amber-600">Informational only, not a prescription.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Precautions</h3>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-600">
            {result.precautions.map((precaution) => (
              <li key={precaution}>{precaution}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-amber-50 px-4 py-3 text-xs text-amber-800">
        This tool provides AI-assisted insights and does not replace professional medical advice. Seek a qualified
        healthcare provider for urgent concerns.
      </div>
    </motion.div>
  );
};

export default ResultCard;
