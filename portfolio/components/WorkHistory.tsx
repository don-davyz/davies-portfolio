import React from 'react';
import { Section } from './ui/Section';
import { Experience } from '../types';

const history: Experience[] = [
  {
    id: 1,
    role: "Web Developer",
    company: "Novel Solar",
    duration: "Nov 2025 - Present",
    description: "Leading the charge on the E-commerce platform and Novel Solar Academy. Fusing WordPress with my full technical stack to build robust educational and retail experiences."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "Sep 2021 - Nov 2025",
    description: "Operated as a digital mercenary for private and public entities. Deployed my complete arsenal—from frontend to backend—to build custom business solutions that scale."
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Lead Nicely Inc",
    duration: "Mar 2021 - Sep 2021",
    description: "Where it all began. Built rapid, responsive websites for small businesses using WordPress and Elementor, focusing on delivering value and clean design."
  }
];

export const WorkHistory: React.FC = () => {
  return (
    <Section id="history" title="History">
      <div className="space-y-8">
        {history.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-0">
            {/* Mobile line */}
            <div className="absolute left-0 top-2 bottom-0 w-1 bg-black md:hidden"></div>
            
            <div className="md:grid md:grid-cols-12 gap-8 items-start group">
              {/* Date Column */}
              <div className="md:col-span-3 text-xl font-bold md:text-right py-2 bg-black text-white inline-block md:block px-2 md:bg-transparent md:text-black transform -skew-x-12 md:skew-x-0 mb-2 md:mb-0">
                {job.duration}
              </div>
              
              {/* Divider Dot (Desktop) */}
              <div className="hidden md:flex md:col-span-1 justify-center py-2">
                <div className="w-4 h-4 bg-black rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-8 border-l-4 border-transparent md:border-none">
                <h3 className="text-3xl font-bold uppercase mb-1">{job.role}</h3>
                <h4 className="text-xl text-neutral-500 font-mono mb-4">@ {job.company}</h4>
                <p className="text-lg leading-relaxed border-2 border-black p-6 bg-white brutal-shadow">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};