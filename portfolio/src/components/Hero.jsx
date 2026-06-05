export default function Hero() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[70vh]">
      <p className="text-blue-400 font-mono text-sm mb-3 tracking-widest">HI, MY NAME IS</p>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-4">
        Ayush Dutta.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
        Building robust backend systems & cloud pipelines.
      </h2>
      <p className="text-slate-400 max-w-2xl text-lg mb-8 leading-relaxed">
        I am a Software Engineer with professional experience at Tata Consultancy Services in Java backend development[cite: 4]. I specialize in building enterprise services using <span className="text-slate-200 font-semibold">Spring Boot & RESTful APIs</span> [cite: 4], while bridging the gap into cloud ecosystems with <span className="text-slate-200 font-semibold">Azure Data Engineering</span> workflows[cite: 6].
      </p>
      <div className="flex gap-4">
        {/* Updated from a mailto link to point straight to your contact section anchor */}
        <a 
          href="#connect" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20"
        >
          Get In Touch
        </a>
        <a 
          href="#experience" 
          className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}