import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" }
  ];

  const connectOptions = [
    { name: "GitHub", url: "https://github.com/ayushdutta-SE", color: "#f05032" },
    { name: "LinkedIn", url: "https://linkedin.com/in/ayush-dutta-se", color: "#0ea5e9" },
    { name: "Email", url: "mailto:your-email@example.com", color: "#22c55e" }
  ];

  return (
    <nav className="w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center relative">
        
        {/* Brand Identity Signature */}
        <a href="#" className="font-mono font-bold text-slate-100 text-lg tracking-tight hover:text-blue-400 transition-colors">
          Ayush<span className="text-blue-500">.</span>
        </a>

        {/* Global Navigation Assembly Menu */}
        <div className="flex items-center gap-6 font-mono text-xs">
          {navigationLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="text-slate-400 hover:text-slate-200 transition-colors">
              {link.name}
            </a>
          ))}

          {/* Interactive Connect Dropdown Trigger Controller */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-md hover:bg-blue-500/20 transition-all font-semibold flex items-center gap-1"
            >
              Connect <span className={`text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            {/* Dropdown Popup Panel Overlay */}
            {isOpen && (
              <>
                {/* Backdrop closer click capture barrier */}
                <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                
                <div className="absolute right-0 mt-2 w-40 bg-[#0d1526] border border-slate-800 rounded-lg shadow-2xl z-20 overflow-hidden transform origin-top-right transition-all animate-fadeIn">
                  {connectOptions.map((option, i) => (
                    <a
                      key={i}
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-slate-300 hover:bg-slate-800/40 text-left transition-colors border-b border-slate-900/50 last:border-0 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: option.color }} />
                      {option.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}