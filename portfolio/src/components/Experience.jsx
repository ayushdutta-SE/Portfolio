import { useState } from 'react';

const experiences = [
  {
    role: "Azure Data Engineer Specialist",
    company: "Data Engineering Bootcamp",
    period: "June 2025 - Dec 2025",
    
    color: "#0ea5e9", // Cloud Blue
    highlights: [
      "Completed an intensive 6-month specialization mastering advanced cloud data architecture, ingestion paradigms, and warehousing analytics.",
      "Engineered distributed processing infrastructure components translating localized relational logic into enterprise-grade PySpark scripts on Databricks.",
      "Built and deployed fully orchestrated end-to-end data pipelines using Azure Data Factory (ADF), Synapse Analytics, and secure ADLS Gen2 lakes."
    ]
  },
  {
    role: "Java Backend Developer",
    company: "TCS",
    period: "Nov 2023 - May 2025",
    
    color: "#f59e0b", // Core Java Orange
    highlights: [
      "Spent 1.7 years engineering production-grade systems, building and maintaining high-throughput REST APIs and microservices using Spring Boot.",
      "Designed database persistence models and successfully optimized complex transactional SQL queries across enterprise MySQL systems.",
      "Collaborated across distributed teams using Git version control, structuring robust test suites in Postman to guarantee API stability."
    ]
  }
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="py-32 w-full border-t border-slate-800/60 bg-[#070c14]/40 relative overflow-hidden">
      
      {/* Decorative Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">02. Career Architecture</span>
          <h3 className="text-5xl font-extrabold text-slate-100 mt-2 tracking-tight">
            Experience & <span className="text-blue-400">Journey</span>
          </h3>
        </div>

        {/* Timeline Structural Track */}
        <div className="relative max-w-3xl mx-auto md:mx-0">
          
          {/* Vertical Vector Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Timeline Rows */}
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            const isHovered = hoveredIndex === idx;

            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 
                  ${isEven ? 'md:flex-row-reverse' : ''}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                
                {/* Timeline Center Node Pin */}
                <div 
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#060c14] border-2 z-20 transform -translate-x-1/2 transition-all duration-300 shadow-xl"
                  style={{ 
                    borderColor: isHovered ? exp.color : '#334155',
                    boxShadow: isHovered ? `0 0 15px ${exp.color}` : 'none',
                    scale: isHovered ? '1.3' : '1'
                  }}
                />

                {/* Content Panel Wrapper */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div 
                    className="rounded-2xl p-6 border bg-[#0d1526]/30 backdrop-blur-md shadow-xl transition-all duration-500 group text-left"
                    style={{ 
                      borderColor: isHovered ? `${exp.color}40` : '#1e293b60',
                      boxShadow: isHovered ? `0 10px 30px -10px ${exp.color}15` : 'none',
                      background: isHovered ? `linear-gradient(135deg, ${exp.color}03, transparent)` : '#0d152630'
                    }}
                  >
                    {/* Role Header Cluster */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800/40 pb-3">
                      <div>
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
                          {exp.role}
                        </h4>
                        <div className="text-xs font-mono text-slate-500 font-semibold tracking-wider mt-0.5">
                          {exp.company}
                        </div>
                      </div>
                      
                      {/* Badge Metadata Column */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-1.5 self-start sm:self-center">
                        <span className="text-[11px] font-sans font-bold text-slate-300 whitespace-nowrap">
                          {exp.period}
                        </span>
                        <span 
                          className="text-[9px] font-mono px-2 py-0.5 rounded border tracking-wider transition-colors duration-300"
                          style={{ 
                            borderColor: isHovered ? `${exp.color}40` : '#1e293b', 
                            color: isHovered ? exp.color : '#475569',
                            backgroundColor: isHovered ? `${exp.color}08` : 'transparent'
                          }}
                        >
                          {exp.blockTag}
                        </span>
                      </div>
                    </div>

                    {/* Highly-Technical Bullet Logs */}
                    <ul className="space-y-3">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                          <span className="text-blue-500/70 mt-1.5 text-[10px] select-none">▶</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Invisible balancing layout placeholder */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}