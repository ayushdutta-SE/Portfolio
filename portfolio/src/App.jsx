// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'; // <-- Import the new card track

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main className="space-y-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects /> {/* <-- Render it here */}
      </main>
      <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
        Designed & Built by Ayush Dutta • 2026
      </footer>
    </div>
  );
}

export default App;