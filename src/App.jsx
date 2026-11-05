import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundEffect } from './components/ui/BackgroundEffect';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950 font-sans">
        {/* Futuristic Background Visual Effects */}
        <BackgroundEffect />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

