export default function Connect() {
  const contacts = [
    { label: 'email', value: 'ayush.dutta.cloud@gmail.com', href: 'mailto:ayush.dutta.cloud@gmail.com', color: '#6366f1', icon: '📧' },
    { label: 'linkedin', value: 'linkedin.com/in/ayushdutta-se', href: 'https://www.linkedin.com/in/ayushdutta-se/', color: '#22d3ee', icon: '💼' },
    { label: 'phone', value: '+91 83402 99489', href: 'tel:+918340299489', color: '#10b981', icon: '📱' },
    { label: 'location', value: 'Jamshedpur, Jharkhand, India', href: null, color: '#fbbf24', icon: '📍' },
  ];

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem 8rem', position: 'relative' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem', color: '#22d3ee',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <span style={{ color: '#475569' }}>{"//"}</span> contact
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9',
            marginBottom: '0.75rem'
          }}>
            Let{"'"}s{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>build something</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: 480 }}>
            Open to AI engineering and backend roles. Remote, hybrid, or Jamshedpur-based. Let{"'"}s talk.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: 700 }}>
          {contacts.map((c, i) => {
            const Tag = c.href ? 'a' : 'div';
            return (
              <Tag key={i} href={c.href || undefined}
                target={c.href?.startsWith('http') ? '_blank' : undefined}
                rel={c.href?.startsWith('http') ? 'noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px', textDecoration: 'none',
                  transition: 'all 0.2s', cursor: c.href ? 'pointer' : 'default'
                }}
                onMouseEnter={e => { if (c.href) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = `${c.color}30`; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '10px',
                  background: `${c.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0
                }}>{c.icon}</div>
                <div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem', color: '#475569',
                    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem'
                  }}>{c.label}</div>
                  <div style={{ fontSize: '0.875rem', color: '#f1f5f9', fontWeight: 500 }}>{c.value}</div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>

      <div style={{
        maxWidth: '1152px', margin: '4rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#475569' }}>
          © 2025 <span style={{ color: '#6366f1' }}>Ayush Dutta</span>. All rights reserved.
        </p>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#475569' }}>
          Built with <span style={{ color: '#6366f1' }}>React + Vite</span> · <span style={{ color: '#6366f1' }}>Vercel</span>
        </p>
      </div>
    </section>
  );
}