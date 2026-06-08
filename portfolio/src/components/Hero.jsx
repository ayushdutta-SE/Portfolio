export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '8rem 1.5rem 4rem' }}>
      <div className="max-w-7xl mx-auto w-full">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.35rem 1rem',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '100px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem', color: '#a78bfa',
              marginBottom: '1.5rem', letterSpacing: '0.05em'
            }}>
              ⚡ Java Backend → AI Engineer
            </div>

            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.8rem, 5vw, 5rem)',
              fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.03em', marginBottom: '0.5rem'
            }}>
              <span style={{ color: '#f1f5f9', display: 'block' }}>Ayush</span>
              <span style={{
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', display: 'block'
              }}>Dutta</span>
            </h1>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.88rem', color: '#94a3b8',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: '#a78bfa' }}>[</span>
              <span style={{ color: '#22d3ee' }}>backend_dev</span>
              <span style={{ color: '#a78bfa' }}>]</span>
              <span style={{ color: '#475569' }}> → </span>
              <span style={{ color: '#a78bfa' }}>[</span>
              <span style={{ color: '#22d3ee' }}>ai_engineer</span>
              <span style={{ color: '#a78bfa' }}>]</span>
            </div>

            <p style={{
              fontSize: '0.95rem', color: '#94a3b8',
              lineHeight: 1.8, maxWidth: 480, marginBottom: '2.5rem'
            }}>
              <strong style={{ color: '#f1f5f9' }}>1.7 years</strong> building enterprise Java backends at TCS.
              Azure Data Engineering certified. Now engineering the next generation of{' '}
              <strong style={{ color: '#f1f5f9' }}>intelligent systems</strong> — where LLMs meet scalable cloud infrastructure.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                padding: '0.75rem 1.75rem',
                background: '#6366f1', color: '#fff',
                borderRadius: '8px', textDecoration: 'none',
                fontWeight: 600, fontSize: '0.875rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.2s', fontFamily: "'Space Grotesk', sans-serif"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4f46e5'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >→ Let{"'"}s Talk</a>
              <a href="#projects" style={{
                padding: '0.75rem 1.75rem',
                background: 'transparent', color: '#f1f5f9',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', textDecoration: 'none',
                fontWeight: 500, fontSize: '0.875rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.2s', fontFamily: "'Space Grotesk', sans-serif"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#6366f1'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >View Projects</a>
            </div>

            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {[['1.7+', 'yrs exp'], ['9.1', 'cgpa'], ['∞', 'learning']].map(([num, label]) => (
                <div key={label}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '2rem', fontWeight: 700,
                    background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', lineHeight: 1
                  }}>{num}</div>
                  <div style={{ fontSize: '0.7rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ animationDelay: '0.2s' }} className="animate-fade-up">
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px', overflow: 'hidden',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '0.75rem 1rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)'
              }}>
                {[['#ff5f57',''], ['#febc2e',''], ['#28c840','']].map(([color], i) => (
                  <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
                ))}
                <span style={{
                  flex: 1, textAlign: 'center',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem', color: '#475569'
                }}>ayush@portfolio ~ zsh</span>
              </div>

              <div style={{
                padding: '1.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem', lineHeight: 2.2
              }}>
                {[
                  { prompt: true, cmd: 'whoami', out: null },
                  { prompt: false, cmd: null, out: { text: 'Ayush Dutta // Backend → AI Engineer', color: '#10b981' } },
                  { prompt: true, cmd: 'cat skills.json', out: null },
                  { prompt: false, cmd: null, out: { text: '{ "core": ["Java", "Spring Boot", "SQL"] }', color: '#fbbf24' } },
                  { prompt: false, cmd: null, out: { text: '{ "cloud": ["Azure", "ADF", "Databricks"] }', color: '#22d3ee' } },
                  { prompt: false, cmd: null, out: { text: '{ "ai": ["LLMs", "RAG", "Agents"] }', color: '#a78bfa' } },
                  { prompt: true, cmd: 'cat status.txt', out: null },
                  { prompt: false, cmd: null, out: { text: '✓ Open to AI / Backend roles', color: '#10b981' } },
                  { prompt: false, cmd: null, out: { text: '✓ Available immediately', color: '#10b981' } },
                  { prompt: false, cmd: null, out: { text: '✓ Remote + Hybrid friendly', color: '#10b981' } },
                ].map((line, i) => (
                  <div key={i}>
                    {line.prompt && (
                      <span>
                        <span style={{ color: '#a78bfa' }}>→ </span>
                        <span style={{ color: '#f1f5f9' }}>{line.cmd}</span>
                      </span>
                    )}
                    {line.out && <span style={{ color: line.out.color, paddingLeft: '1rem' }}>{line.out.text}</span>}
                  </div>
                ))}
                <div>
                  <span style={{ color: '#a78bfa' }}>→ </span>
                  <span className="cursor-blink" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}