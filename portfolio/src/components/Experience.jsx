// import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Java Backend Developer",
      company: "Tata Consultancy Services",
      duration: "Nov 2023 - May 2025",
      points: [
        "Developed and maintained enterprise backend services using Java and Spring Boot for internal business applications.",
        "Designed and built RESTful APIs integrated with relational database access layers via JPA/Hibernate.",
        "Resolved production incidents within SLA constraints and optimized complex SQL queries for transactional workflows."
      ]
    },
    {
      role: "Azure Data Engineer",
      company: "Bootcamp & Independent Specialization",
      duration: "Jun 2025 - Nov 2025",
      points: [
        "Built metadata-driven ETL pipelines in Azure Data Factory integrating REST APIs, stored procedures, and Key Vault.",
        "Developed PySpark and SQL transformation workflows in Azure Databricks for scalable cloud data cleansing.",
        "Executed secure on-premises SQL Server to cloud migrations utilizing Self-Hosted Integration Runtime (SHIR)."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <h3 className="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        <span className="text-blue-400 font-mono text-xl">02.</span> Experience & Journey
      </h3>
      <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 group">
            <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-blue-500 group-hover:bg-blue-400 transition-colors" />
            <div className="bg-[#1e293b]/40 p-6 rounded-xl border border-slate-800/80 hover:border-slate-800 transition-all">
              <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">{exp.duration}</span>
              <h4 className="text-xl font-bold text-slate-200 mt-1">{exp.role}</h4>
              <h5 className="text-md text-slate-400 mb-4">{exp.company}</h5>
              <ul className="space-y-2 text-slate-400 text-sm list-disc pl-4 leading-relaxed">
                {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}