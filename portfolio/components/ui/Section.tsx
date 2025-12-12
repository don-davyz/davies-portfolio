import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', title }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 border-b-2 border-black ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter uppercase">
            {title}<span className="text-neutral-400">.</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};