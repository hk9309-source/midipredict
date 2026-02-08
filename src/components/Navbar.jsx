import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Diagnose', to: '/diagnose' },
  { label: 'History', to: '/history' }
];

const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-primary-500 text-white font-semibold">
            MP
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">MidiPredict</p>
            <p className="text-xs text-slate-500">AI Symptom Insights</p>
          </div>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-700'
                  : 'transition hover:text-primary-600'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="/diagnose"
          className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Start Diagnosis
        </motion.a>
      </div>
    </header>
  );
};

export default Navbar;
