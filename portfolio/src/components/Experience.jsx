import { useState } from 'react';

const experiences = [
  {
    role: 'Java Backend Developer',
    company: 'Tata Consultancy Services',
    period: 'Nov 2023 — May 2025',
    color: '#6366f1',
    tag: 'Full-time',
    highlights: [
      'Built and maintained production REST APIs using Java & Spring Boot for enterprise workflows serving live business systems.',
      'Optimized SQL queries and JPA entity mappings, improving API response times across transactional and reporting use cases.',
      'Delivered change requests and production bug fixes — wrote JUnit & Mockito test suites in an Agile squad.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Tata Consultancy Services',
    period: 'Feb 2023 — Apr 2023',
    color: '#22d3ee',
    tag: 'Internship',
    highlights: [
      'Built REST APIs using Spring Boot for an internal ticket management system — integrated with frontend modules end-to-end.',
      'Optimized SQL queries reducing API latency, contributed to sprint planning and peer code reviews.',
    ],
  },
  {
    role: 'Azure Data Engineering Bootcamp',
    company: 'Intensive Training Program',
    period: '2025',
    color: '#10b981',
    tag: 'Certification',
    highlights: [
      'Built ETL pipelines: Azure Data Factory → ADLS Gen2 → Azure SQL with SHIR for secure hybrid SQL Server migrations.',
      'Deployed PySpark workloads on Databricks, Microsoft Fabric, Synapse Analytics.',
      'Automated orchestration with Logic Apps and Azure Key Vault secrets management.',
    ],
  },
];

export default function Experience() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="experience" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(30,41,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.06) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem', pointerEvents: 'none'
      }} />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem', color: '#22d3ee',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <span style={{ color: '#475569' }}>{"//"}</span> career journey
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9'
          }}>
            Where I{"'"}ve{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>shipped code</span>
          </h2>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8,
            width: 1,
            background: 'linear-gradient(to bottom, #6366f1, #22d3ee, transparent)'
          }} />

          {experiences.map((exp, i) => (
            <div key={i}
              style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '2rem' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                position: 'absolute', left: '-2.35rem', top: '0.35rem',
                width: 13, height: 13, borderRadius: '50%',
                background: '#030712',
                border: `2px solid ${hovered === i ? exp.color : '#334155'}`,
                boxShadow: hovered === i ? `0 0 12px ${exp.color}` : 'none',
                transition: 'all 0.3s', zIndex: 2
              }} />

              <div style={{
                background: hovered === i ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${hovered === i ? `${exp.color}35` : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '12px', padding: '1.5rem',
                transition: 'all 0.3s',
                transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
                ...(i === 2 ? { borderStyle: 'dashed' } : {})
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem', fontWeight: 600, color: '#f1f5f9', flex: 1, minWidth: 180
                  }}>{exp.role}</span>
                  <span style={{
                    padding: '0.2rem 0.7rem',
                    background: `${exp.color}18`,
                    border: `1px solid ${exp.color}30`,
                    borderRadius: '6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem', color: exp.color
                  }}>{exp.company}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem', color: '#475569'
                  }}>{exp.period}</span>
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{
                      fontSize: '0.875rem', color: '#94a3b8',
                      padding: '0.25rem 0 0.25rem 1rem',
                      position: 'relative', lineHeight: 1.7
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: '#22d3ee', fontSize: '0.65rem', top: '0.45rem' }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}