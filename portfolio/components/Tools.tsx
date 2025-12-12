import React from 'react';

const tools = [
  "JavaScript",   
  "Tailwind CSS", "PostgreSQL", "Git", "Figma", "Python", 
  "Laravel", "Docker", "AWS", "Bootsrap 5"
];

export const Tools: React.FC = () => {
  return (
    <div id="tools" className="py-24 border-b-2 border-black overflow-hidden bg-black text-white">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-6xl md:text-8xl font-bold uppercase tracking-tighter">
          {tools.map((tool, index) => (
            <span key={index} className="flex items-center">
              {tool} <span className="mx-6 text-neutral-600 text-4xl">★</span>
            </span>
          ))}
          {/* Duplicate for infinite loop */}
          {tools.map((tool, index) => (
            <span key={`dup-${index}`} className="flex items-center">
              {tool} <span className="mx-6 text-neutral-600 text-4xl">★</span>
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm font-mono uppercase tracking-widest text-neutral-400">My Arsenal</p>
      </div>
    </div>
  );
};