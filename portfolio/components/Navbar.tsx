import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Tools', href: '#tools' },
  { label: 'Projects', href: '#projects' },
  { label: 'History', href: '#history' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="text-3xl font-bold tracking-tighter hover:underline decoration-4">
          DAVIES<span className="text-neutral-400">_</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-lg font-medium hover-underline-animation"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b-2 border-black p-6 flex flex-col gap-4">
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-2xl font-bold border-2 border-black p-4 hover:bg-black hover:text-white transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};