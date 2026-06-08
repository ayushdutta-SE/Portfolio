import { useState } from 'react';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiApachekafka, SiRedis, SiPostgresql } from 'react-icons/si';

const projects = [
  {
    title: 'High-Throughput Financial Transaction Broker',
    category: 'Backend Architecture',
    status: 'PRODUCTION CORE',
    statusColor: '#22c55e',
    tech: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#22c55e' },
      { name: 'Apache Kafka', icon: SiApachekafka, color: '#ef4444' },
      { name: 'Redis', icon: SiRedis, color: '#d946ef' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#3382f6' },
    ],
    metrics: [{ label: 'THROUGHPUT', value: '45K TPS' }, { label: 'P99 LATENCY', value: '12ms' }, { label: 'CACHE HIT', value: '94.2%' }],
    summary: 'Event-driven transaction broker handling thousands of messages per second. Implemented reliable transactional outbox pattern with Kafka and dual-layer Redis pooling protecting multi-sharded relational databases.',
    arch: [
      'Optimized entity state serialization, reducing raw memory payload by 42%.',
      'Configured distributed Kafka partitions for strict in-order sequence execution.',
      'Engineered fallback circuits to handle edge-case spikes without DB drops.',
    ],
  },
  {
    title: 'Enterprise On-Premises → Azure Migration Pipeline',
    category: 'Cloud Data Engineering',
    status: 'MIGRATION COMPLETE',
    statusColor: '#0ea5e9',
    tech: [
      { name: 'Azure Data Factory', icon: SiMicrosoftazure, color: '#0ea5e9' },
      { name: 'Databricks', icon: SiDatabricks, color: '#ef4444' },
      { name: 'ADLS Gen2', icon: SiMicrosoftazure, color: '#38bdf8' },
    ],
    metrics: [{ label: 'VOLUME MOVED', value: '14.2 TB' }, { label: 'CLUSTERS', value: '32 Nodes' }, { label: 'SUCCESS RATE', value: '99.98%' }],
    summary: 'End-to-end migration from legacy SQL Server to Azure Data Lake. Converted Informatica mappings into optimized PySpark jobs running on auto-scaling Databricks clusters with zero data loss.',
    arch: [
      'Configured SHIR with TLS 1.2 encryption for secure hybrid connectivity.',
      'Implemented pre-ingestion schema validation, halting faulty data before processing.',
      'Optimized ADLS Gen2 partition strategies, slashing analytics scan costs by 35%.',
    ],
  },
  {
    title: 'Real-Time Telemetry & Metric Aggregation Engine',
    category: 'Data Infrastructure',
    status: 'STABLE TELEMETRY',
    statusColor: '#a855f7',
    tech: [
      { name: 'Java Core', icon: SiSpringboot, color: '#f59e0b' },
      { name: 'Azure Synapse', icon: SiMicrosoftazure, color: '#0ea5e9' },
      { name: 'Kafka Pipelines', icon: SiApachekafka, color: '#ef4444' },
    ],
    metrics: [{ label: 'INGEST RATE', value: '1.2M/s' }, { label: 'COMPRESSION', value: '4.8x GZIP' }, { label: 'ANALYTICS DELAY', value: '< 1.5s' }],
    summary: 'Persistent system metrics framework collecting raw telemetry, applying windowed aggregations via memory pipelines, and pushing batched structures into Synapse Analytics for near real-time dashboards.',
    arch: [
      'Custom thread-pool allocation matrix using Java concurrency abstractions.',
      'Batch-flushing algorithms significantly cutting downstream I/O overhead.',
      'Health checkpoints alerting instantly when processing thresholds are breached.',
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const proj = projects[active];

  return (
    <section id="projects" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem', color: '#22d3ee',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <span style={{ color: '#475569' }}>{"//"}</span> work
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9'
          }}>
            Things I{"'"}ve{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>actually built</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {projects.map((p, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                padding: '1.25rem',
                background: active === i ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${active === i ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: '12px', cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem', color: '#475569',
                    textTransform: 'uppercase', letterSpacing: '0.08em'
                  }}>{p.category}</span>
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: p.statusColor,
                    boxShadow: `0 0 8px ${p.statusColor}`
                  }} />
                </div>
                <div style={{
                  fontSize: '0.875rem', fontWeight: 600,
                  color: active === i ? '#a78bfa' : '#94a3b8',
                  lineHeight: 1.4, transition: 'color 0.2s'
                }}>{p.title}</div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px', padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.5rem', marginBottom: '1.5rem'
            }}>
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem', color: '#6366f1',
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem'
                }}>SYSTEM DIAGNOSTICS LOG</div>
                <h3 style={{
                  fontSize: '1.2rem', fontWeight: 700,
                  color: '#f1f5f9', lineHeight: 1.3, maxWidth: 420
                }}>{proj.title}</h3>
              </div>
              <span style={{
                padding: '0.25rem 0.75rem',
                border: `1px solid ${proj.statusColor}40`,
                borderRadius: '6px', color: proj.statusColor,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem', fontWeight: 700,
                whiteSpace: 'nowrap', letterSpacing: '0.05em'
              }}>{proj.status}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {proj.metrics.map((m, j) => (
                <div key={j} style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px', padding: '1rem', textAlign: 'center'
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.label}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginTop: '0.35rem' }}>{m.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{"// PIPELINE ABSTRACT"}</div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.8 }}>{proj.summary}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{"// RUNTIME DEPENDENCIES"}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {proj.tech.map((t, k) => {
                  const TIcon = t.icon;
                  return (
                    <div key={k} style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.3rem 0.75rem',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '6px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem', color: '#94a3b8'
                    }}>
                      <TIcon style={{ color: t.color }} size={12} />
                      {t.name}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{"// SYSTEM IMPLEMENTATION LOGS"}</div>
              <ul style={{ listStyle: 'none' }}>
                {proj.arch.map((a, l) => (
                  <li key={l} style={{
                    display: 'flex', gap: '0.75rem',
                    fontSize: '0.82rem', color: '#94a3b8',
                    lineHeight: 1.7, padding: '0.2rem 0'
                  }}>
                    <span style={{ color: '#6366f1', fontFamily: 'monospace', flexShrink: 0 }}>✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}