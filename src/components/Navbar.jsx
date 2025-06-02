import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-[#646cff] font-semibold'
      : 'text-white hover:text-[#646cff] transition-colors';

  return (
    <nav className="sticky top-0 bg-[#1a1a1a] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Moe</h1>
        <div className="space-x-6 text-sm sm:text-base">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
