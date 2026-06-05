// import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/70 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wider text-slate-100">
        AYUSH<span className="text-blue-400">.</span>DUTTA
      </div>
      <div className="flex gap-6 text-sm font-medium text-slate-400">
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
      </div>
    </nav>
  );
}