import { useState } from 'react';
import { motion } from 'framer-motion';

const TagInput = ({ tags, onAdd, onRemove }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;
    onAdd(value);
    setInput('');
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.span
            layout
            key={tag}
            className="flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemove(tag)}
              className="text-teal-500 hover:text-teal-700"
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          </motion.span>
        ))}
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type a symptom and press Enter"
          className="min-w-[180px] flex-1 border-none bg-transparent text-sm text-slate-700 outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white"
        >
          Add
        </button>
      </form>
      <p className="mt-3 text-xs text-slate-500">Example: fever, cough, fatigue</p>
    </div>
  );
};

export default TagInput;
