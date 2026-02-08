import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Diagnose from './pages/Diagnose.jsx';
import History from './pages/History.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnose" element={<Diagnose />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
