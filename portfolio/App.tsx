import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Projects } from './components/Projects';
import { WorkHistory } from './components/WorkHistory';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tools />
        <Projects />
        <WorkHistory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;