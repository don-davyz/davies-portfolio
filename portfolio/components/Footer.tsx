import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t-2 border-black bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter">DAVIES_</h2>
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="text-sm font-mono">
          <p>DESIGNED & BUILT WITH LOVE</p>
        </div>
      </div>
    </footer>
  );
};