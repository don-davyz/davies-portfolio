import React from 'react';
import { Section } from './ui/Section';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Prime Pay",
    description: "A seamless fintech platform simplifying cross-border payments across Africa. Features a secure digital wallet, real-time transaction tracking, and an intuitive dashboard for managing finances effortlessly.",
    technologies: ["Vue.js", "PHP", "Laravel"],
    image: "https://image.thum.io/get/width/800/crop/600/noanimate/https://prime-pay.africa",
    link: "https://prime-pay.africa"
  },
  {
    id: 2,
    title: "Zitra Investments",
    description: "A sophisticated investment management portal that democratizes wealth creation. Built to help users track portfolios, analyze market trends, and secure their financial future with precision.",
    technologies: ["Vue.js", "PHP", "Laravel"],
    image: "https://image.thum.io/get/width/800/crop/600/noanimate/https://zitrainvestments.com",
    link: "https://zitrainvestments.com"
  },
  {
    id: 3,
    title: "Novel Solar",
    description: "A modern corporate interface for a renewable energy leader. Showcasing sustainable solar solutions with an eco-conscious design language and smooth, engaging user interactions.",
    technologies: ["WordPress", "PHP", "Custom Theme"],
    image: "https://image.thum.io/get/width/800/crop/600/noanimate/https://novelsolar.com",
    link: "https://novelsolar.com"
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Selected Works">
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group border-2 border-black bg-white p-4 brutal-shadow hover:z-10 relative flex flex-col h-full">
            <div className="aspect-video overflow-hidden border-2 border-black mb-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold uppercase">{project.title}</h3>
              <div className="flex gap-2">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors rounded-full"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-lg text-neutral-600 mb-6 font-medium flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 border border-black text-sm font-bold uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};