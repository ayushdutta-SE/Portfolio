// import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: "Data Migration & ETL Pipeline Development",
      subtitle: "Enterprise Cloud Migration",
      description: "Designed and executed an end-to-end data migration strategy moving legacy infrastructure to cloud native storage with zero data loss. Analyzed legacy Informatica PowerCenter logic to engineer equivalent high-performance processing in the cloud.",
      tech: ["Azure Data Factory", "Azure Databricks", "PySpark", "SQL Server", "ADLS Gen2", "Logic Apps"],
      metrics: [
        "Metadata-driven automation",
        "Secure on-prem SHIR connectivity",
        "Automated status alerts via Logic Apps"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <h3 className="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        <span className="text-blue-400 font-mono text-xl">03.</span> Featured Projects
      </h3>
      
      <div className="grid gap-8">
        {projectsData.map((proj, idx) => (
          <div key={idx} className="bg-[#1e293b]/60 rounded-xl p-6 md:p-8 border border-slate-800/80 hover:border-slate-700/80 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transition-all group-hover:bg-blue-400" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{proj.subtitle}</span>
                <h4 className="text-2xl font-bold text-slate-100 mt-1 mb-4 group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl mb-6">
                  {proj.description}
                </p>
              </div>
            </div>

            {/* Core Implementation Highlights */}
            <div className="mb-6">
              <h5 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3">Key Highlights:</h5>
              <ul className="grid sm:grid-cols-2 gap-2">
                {proj.metrics.map((metric, i) => (
                  <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="text-blue-500">▹</span> {metric}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-[11px] font-mono bg-[#0f172a] text-slate-400 px-2.5 py-1 rounded border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}