import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Send, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:dvsolaniyi@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('dvsolaniyi@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-neutral-50">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-4xl font-bold mb-6">Let's build something epic.</h3>
          <p className="text-xl mb-8">
            Whether you have a project in mind, a question about my work, or just want to say hi, feel free to drop a message.
          </p>
          
          <div className="p-8 border-2 border-black bg-white brutal-shadow mb-8">
            <p className="text-sm font-mono text-neutral-500 mb-2">EMAIL ME DIRECTLY</p>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="mailto:dvsolaniyi@gmail.com" className="text-2xl md:text-3xl font-bold hover:underline truncate">
                dvsolaniyi@gmail.com
              </a>
              <button 
                onClick={copyEmail}
                className="p-2 border border-black rounded hover:bg-black hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
              <a key={social} href="#" className="text-lg font-bold underline decoration-2 hover:decoration-4 underline-offset-4">
                {social}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-bold mb-2 uppercase">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border-2 border-black bg-transparent focus:outline-none focus:ring-4 focus:ring-black/20 transition-all text-lg"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-2 uppercase">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-black bg-transparent focus:outline-none focus:ring-4 focus:ring-black/20 transition-all text-lg"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-lg font-bold mb-2 uppercase">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border-2 border-black bg-transparent focus:outline-none focus:ring-4 focus:ring-black/20 transition-all text-lg resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <Button type="submit" className="w-full flex items-center justify-center gap-2">
            SEND MESSAGE <Send size={20} />
          </Button>
        </form>
      </div>
    </Section>
  );
};