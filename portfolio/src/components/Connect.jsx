export default function Contact() {
  return (
    <footer id="contact" className="py-12 border-t border-slate-800/40 bg-[#070c18]/30">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-3">
        
        {/* Subtle, clean heading callout */}
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          04. Production Status
        </span>
        
        <p className="text-sm text-slate-400 font-medium max-w-md">
          Open for engineering opportunities in Java Backend & Cloud Data pipelines.
        </p>

        {/* Minimalist Signature Credit */}
        <div className="pt-4 text-[11px] font-mono text-slate-600">
          Designed & Built by <span className="text-slate-400 font-semibold">Ayush Dutta</span> • 2026
        </div>
        
      </div>
    </footer>
  );
}