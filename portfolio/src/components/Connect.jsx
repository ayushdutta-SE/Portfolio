export default function Connect() {
  return (
    <section id="connect" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60 text-center">
      <p className="text-blue-400 font-mono text-sm mb-3 tracking-widest">04. WHAT&apos;S NEXT?</p>
      <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">
        Get In Touch
      </h3>
      <p className="text-slate-400 max-w-lg mx-auto text-md leading-relaxed mb-10">
        I am currently looking for new opportunities in Java Backend Development and Azure Data Engineering. Whether you have a question or just want to discuss system design, my inbox is always open!
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="mailto:ayush.dutta.cloud@gmail.com" 
          className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 text-sm tracking-wide"
        >
          Say Hello Via Email
        </a>
        <a 
          href="https://github.com/ayushdutta-SE" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all text-sm tracking-wide"
        >
          GitHub Profile
        </a>
        <a 
          href="https://linkedin.com/in/ayushdutta-se" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all text-sm tracking-wide"
        >
          LinkedIn Connections
        </a>
      </div>
    </section>
  );
}