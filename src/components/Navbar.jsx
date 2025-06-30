import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a1a] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#646cff]">Moe</h1>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none flex flex-col justify-center items-center space-y-1"
          >
            <span
              className={`h-0.5 w-6 bg-[#646cff] transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#646cff] transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#646cff] transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {['/', '/about', '/projects', '/places', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Projects', 'Places', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? 'text-[#646cff]' : 'hover:text-[#646cff]'
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#646cff]">Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#646cff]">About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-[#646cff]">Projects</NavLink>
          <NavLink to="/places" onClick={() => setIsOpen(false)} className="block hover:text-[#646cff]">PlacesIveBeen</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#646cff]">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}