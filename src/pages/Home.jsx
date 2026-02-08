import { motion } from 'framer-motion';

const features = [
  {
    title: 'Smart Symptom Checker',
    description: 'Add symptoms as tags and receive real-time AI analysis with confidence scores.'
  },
  {
    title: 'Diagnosis History',
    description: 'Track every analysis, view detailed records, and explore trends via charts.'
  },
  {
    title: 'Professional UI/UX',
    description: 'Responsive medical design with smooth, calming animations and navigation.'
  }
];

const Home = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600"
        >
          AI-Powered Symptom Insights
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900 sm:text-5xl"
        >
          MidiPredict helps you organize symptoms and receive clear, responsible guidance.
        </motion.h1>
        <p className="text-base text-slate-600">
          Use the diagnose flow to capture your symptoms as tags, receive instant AI reasoning, and keep a structured
          record for future visits. Every result includes safety notes to encourage professional care.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/diagnose"
            className="rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Start a Diagnosis
          </a>
          <a
            href="/history"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
          >
            View History
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
              <p className="mt-2 text-xs text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-3xl bg-gradient-to-br from-primary-500 to-teal-500 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-wide">How it works</p>
          <ol className="mt-4 space-y-3 text-sm">
            <li>1. Enter symptoms as tags.</li>
            <li>2. AI engine analyzes patterns.</li>
            <li>3. View condition, confidence, meds, precautions.</li>
            <li>4. Results are saved for history tracking.</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
          This product provides preliminary insights only. It does not provide medical advice and is not a
          substitute for professional healthcare.
        </div>
      </div>
    </div>
  );
};

export default Home;
