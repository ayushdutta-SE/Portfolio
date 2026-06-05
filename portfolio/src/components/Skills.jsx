// import React from 'react';

export default function Skills() {
  const skillsData = [
    { category: "Backend Development", skills: ["Java", "Spring Boot", "RESTful APIs", "JPA/Hibernate", "Microservices"] },
    { category: "Azure & Cloud", skills: ["Azure Data Factory (ADF)", "Azure Databricks", "Azure Synapse", "ADLS Gen2", "Azure SQL"] },
    { category: "Data Engineering & Tools", skills: ["ETL Pipelines", "PySpark", "Data Migration", "Query Optimization", "Python", "Git"] }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <h3 className="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        <span className="text-blue-400 font-mono text-xl">01.</span> Tech Stack
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {skillsData.map((group, idx) => (
          <div key={idx} className="bg-[#1e293b] p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group">
            <h4 className="text-lg font-semibold text-slate-200 mb-4 group-hover:text-blue-400 transition-colors">{group.category}</h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span key={i} className="text-xs font-mono bg-[#0f172a] px-3 py-1.5 rounded-md text-slate-400 border border-slate-800|">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}