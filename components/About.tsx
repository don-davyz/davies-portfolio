import React from 'react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square bg-black brutal-shadow overflow-hidden border-2 border-black">
             <img 
               src="https://github.com/don-davyz.png" 
               alt="Davies" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 bg-white border-2 border-black p-4 brutal-shadow rotate-3 hidden md:block">
            <span className="text-2xl font-bold">Me 💻</span>
          </div>
        </div>
        
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            <span className="font-bold text-4xl">I</span> make things work on the internet. Based in the great nation of Nigeria, I specialize in crafting robust web applications that don't just function—they perform.
          </p>
          <p>
            My journey started with a curiosity about the internet works, and it has evolved into a full-blown obsession with clean architecture, responsive design, and user-centric development.
          </p>
          <p>
            When I'm not debugging, I'm probably debating the best Jollof rice (it's Nigerian, obviously), exploring new tech stacks, watching a battlerap drop on Youtube or contributing to open source.
          </p>
          
          <div className="pt-6">
             <a href="#contact" className="inline-block px-8 py-4 bg-black text-white font-bold text-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 brutal-shadow">
               Let's Talk Business
             </a>
          </div>
        </div>
      </div>
    </Section>
  );
};