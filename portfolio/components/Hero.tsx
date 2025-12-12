import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-between border-b-2 border-black bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
      <div className="flex-grow flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          <p className="text-xl md:text-2xl font-medium mb-4 bg-black text-white inline-block px-2 py-1 rotate-[-2deg]">
            👋 Hello, World!
          </p>
          <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tighter mb-8">
            I'M DAVIES,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black">
              WEB DEVELOPER
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-2xl border-l-4 border-black pl-6">
            Building digital experiences in Nigeria with precision, code, and a touch of chaos.
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-end p-6 md:p-12">
        <div className="hidden md:block">
          <p className="font-mono text-sm">LAGOS // NG</p>
          <p className="font-mono text-sm">EST. 2021</p>
        </div>
        <a href="#about" className="animate-bounce p-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </div>
  );
};