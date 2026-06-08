import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'about', href: '#home' },
    { name: 'skills', href: '#skills' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ];

  const socials = [
    { name: 'GitHub', url: 'https://github.com/ayushdutta-SE', color: '#f05032' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayushdutta-se/', color: '#0ea5e9' },
    { name: 'Email', url: 'mailto:ayush.dutta.cloud@gmail.com', color: '#22c55e' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(3,7,18,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600, fontSize: '1rem', color: '#f1f5f9'
        }}>
          Ayush<span style={{ color: '#6366f1' }}>.</span>dev
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.name} href={l.href} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem', color: '#94a3b8',
              textDecoration: 'none', letterSpacing: '0.05em',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = '#22d3ee'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >{l.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem', color: '#10b981'
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#10b981', animation: 'blink 2s infinite'
            }} />
            available for hire
          </div>

          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#a78bfa', padding: '0.35rem 0.9rem',
              borderRadius: '6px', cursor: 'pointer',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}>
              connect <span style={{ fontSize: '0.6rem', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>▼</span>
            </button>

            {isOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0, zIndex: 10 }} onClick={() => setIsOpen(false)} />
                <div style={{
                  position: 'absolute', right: 0, top: '110%',
                  width: 160, background: '#0d1526',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px', overflow: 'hidden',
                  zIndex: 20, boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                }}>
                  {socials.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.65rem 1rem', color: '#cbd5e1',
                        textDecoration: 'none', fontSize: '0.82rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        borderBottom: i < socials.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      {s.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}