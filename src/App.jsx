import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CampingTrips from './pages/PlacesIveBeen';

import './index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-32 max-w-5xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/places" element={<PlacesIveBeen />} />
          </Routes>
      </main>
    </>
  );
}
