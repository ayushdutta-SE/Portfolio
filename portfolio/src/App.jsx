import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Skills from './components/Skills'; 
import Experience from './components/Experience';

export default function App() {
  return (
    <main className="bg-[#060c14] min-h-screen text-slate-100 font-sans relative overflow-x-hidden">
      
      {/* 1. TOP NAVIGATION LAYER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#060c14]/80 backdrop-blur-md border-b border-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-lg font-black tracking-wider text-slate-100">
            Ayush<span className="text-blue-400 font-mono font-light">Dutta.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-slate-400">
            <a href="#home" className="text-blue-400">Home</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* 2. MAIN HERO OPENING GRID ASSEMBLY */}
      <div id="home" className="relative w-full max-w-7xl mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-24 lg:pt-0 gap-12">
        
        {/* LEFT PROFILE HERO INFO COLUMN */}
        <div className="w-full lg:w-1/2 z-20 space-y-6 text-left lg:pr-8">
          <div className="space-y-2">
            {/* Fixed: Wrapped the raw apostrophe safely inside a React string token */}
            <h4 className="text-xl font-bold text-slate-200 tracking-wide font-mono">Hello, It{"'"}s Me</h4>
            <h1 className="text-6xl lg:text-7xl font-black text-slate-100 tracking-tight leading-none">
              Ayush Dutta
            </h1>
            {/* Fixed: Wrapped the raw apostrophe safely inside a React string token */}
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-300 tracking-tight pt-1">
              And I{"'"}m a <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.2)]">Building robust backend systems & cloud pipelines.</span>
            </h2>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
            Specialized in engineering high-throughput microservices and cloud infrastructure. Core expertise spans robust backend architecture with Spring Boot and enterprise-scale data transformations via Databricks and Azure data pipelines.
          </p>

          {/* SOCIAL PLATFORM MARKERS */}
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://www.linkedin.com/in/ayushdutta-se/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-blue-500/40 flex items-center justify-center text-blue-400 hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/ayushdutta-SE" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-500/5 hover:scale-105 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-500/5 hover:scale-105 transition-all duration-300"
            >
              <FaEnvelope size={17} />
            </a>
          </div>

          {/* ACTION DEPLOYMENT BUTTON */}
          <div className="pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-blue-500 text-[#060c14] font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:shadow-blue-400/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Connect Matrix
            </a>
          </div>
        </div>

        {/* RIGHT PROPERTY HOUSING */}
        <div className="w-full lg:w-1/2 flex items-center justify-end relative h-[650px] lg:h-auto">
          <Skills />
        </div>
      </div>

      {/* 3. LOWER STREAM MODULES */}
      <Experience />
    </main>
  );
}