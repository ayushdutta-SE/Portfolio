import { useState } from 'react';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiMysql, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f59e0b', cat: 'Backend', desc: 'Core language for enterprise backend development. Used at TCS for building production-grade services.' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#22c55e', cat: 'Backend', desc: 'Built REST APIs and microservices using Spring Boot in live enterprise environments.' },
  { name: 'MySQL / SQL', icon: SiMysql, color: '#3b82f6', cat: 'Database', desc: 'Optimized SQL queries for transactional and reporting use cases across production systems.' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0ea5e9', cat: 'Cloud', desc: 'Designed cloud data pipelines using ADF, ADLS Gen2, Synapse Analytics and Azure Key Vault.' },
  { name: 'Databricks', icon: SiDatabricks, color: '#ef4444', cat: 'Data Eng', desc: 'Re-engineered Informatica PowerCenter logic into distributed PySpark scripts on Databricks.' },
  { name: 'Python', icon: FaPython, color: '#a855f7', cat: 'Programming', desc: 'Used for data processing, transformation scripts and automation in data engineering workflows.' },
  { name: 'Postman', icon: SiPostman, color: '#f97316', cat: 'Tools', desc: 'API testing, documentation and workflow automation across backend development cycles.' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032', cat: 'DevOps', desc: 'Version control and collaborative development across all professional and personal projects.' },
];

const TOTAL = skills.length;
const CX = 500;
const CY = 500;
const INNER = 160;
const OUTER = 340;
const GAP_DEG = 2;

function polarToCart(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function segmentPath(cx, cy, inner, outer, startDeg, endDeg) {
  const s1 = polarToCart(cx, cy, outer, startDeg);
  const e1 = polarToCart(cx, cy, outer, endDeg);
  const s2 = polarToCart(cx, cy, inner, endDeg);
  const e2 = polarToCart(cx, cy, inner, startDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${s1.x} ${s1.y} A ${outer} ${outer} 0 ${largeArc} 1 ${e1.x} ${e1.y} L ${s2.x} ${s2.y} A ${inner} ${inner} 0 ${largeArc} 0 ${e2.x} ${e2.y} Z`;
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);

  const arcDeg = 180;
  const segDeg = (arcDeg / TOTAL);

  const handleClick = (i) => {
    if (i === active) return;

    // 1. Structural Shortest Path circular looping logic
    let diff = i - active;
    if (diff > TOTAL / 2) diff -= TOTAL;
    if (diff < -TOTAL / 2) diff += TOTAL;

    // 2. Continuous smooth rotational stepping
    setRotation(prev => prev - (diff * segDeg));
    setActive(i);
  };

  return (
    <section id="skills" className="pt-24 pb-0 px-6 max-w-6xl mx-auto border-t border-slate-800/60 overflow-hidden">
      <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
      <h3 className="text-4xl font-bold text-slate-100 mt-1 mb-0 leading-tight">
        My <span className="text-blue-400">Skills</span>
      </h3>

      <div className="relative flex items-end justify-end" style={{ height: 500 }}>

        {/* SVG Wheel — Anchored flush at the bottom-right layout frame boundary */}
        <div
          className="absolute"
          style={{ right: -180, bottom: -120 }}
        >
          <svg width="1000" height="620" viewBox="0 0 1000 620" style={{ overflow: 'visible' }}>
            <defs>
              {skills.map((s, i) => (
                <radialGradient key={i} id={`grad${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={s.color} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={s.color} stopOpacity="0.02" />
                </radialGradient>
              ))}
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-strong">
                <feGaussianBlur stdDeviation="14" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rotating Core Rail Container */}
            <g transform={`rotate(${rotation}, ${CX}, ${CY})`} style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}>
              {skills.map((skill, i) => {
                const startDeg = i * segDeg + GAP_DEG / 2;
                const endDeg = (i + 1) * segDeg - GAP_DEG / 2;
                const midDeg = (startDeg + endDeg) / 2;
                const isActive = active === i;
                const iconPos = polarToCart(CX, CY, (INNER + OUTER) / 2, midDeg);
                const Icon = skill.icon;

                return (
                  <g key={i} onClick={() => handleClick(i)} className="outline-none select-none" style={{ cursor: 'pointer' }}>
                    {/* SVG Console Arc Segment Path Track */}
                    <path
                      d={segmentPath(CX, CY, INNER, OUTER, startDeg, endDeg)}
                      fill={isActive ? `url(#grad${i})` : 'rgba(10,17,32,0.4)'}
                      stroke={isActive ? skill.color : 'rgba(30,58,95,0.25)'}
                      strokeWidth={isActive ? 1.5 : 0.8}
                      filter={isActive ? 'url(#glow)' : 'none'}
                      style={{ transition: 'fill 0.4s, stroke 0.4s' }}
                    />

                    {/* Node Icon Component: Safely counter-rotated to preserve vertical orientation */}
                    <g 
                      transform={`rotate(${-rotation}, ${iconPos.x}, ${iconPos.y})`}
                      style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
                    >
                      <foreignObject
                        x={iconPos.x - 20}
                        y={iconPos.y - 20}
                        width="40"
                        height="40"
                        style={{ overflow: 'visible' }}
                      >
                        <div style={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.6rem',
                          color: skill.color,
                          // Fades track icon to 0 when active to let the clean static glowing bubble handle presentation
                          opacity: isActive ? 0 : 0.35,
                          transition: 'opacity 0.3s'
                        }}>
                          <Icon />
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                );
              })}

              {/* Concentric Accent Orbit Lines */}
              <circle cx={CX} cy={CY} r={INNER - 12} fill="none" stroke="rgba(30,58,95,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx={CX} cy={CY} r={OUTER + 16} fill="none" stroke="rgba(30,58,95,0.15)" strokeWidth="1" />
            </g>

            {/* UNIFIED STATIC APEX HUB: Latches right at the 0° crest. 
                Contains the brand logo inside a glowing ring and positions the 
                matching text directly underneath it, keeping the left column completely clean.
            */}
            {(() => {
              const topPos = polarToCart(CX, CY, (INNER + OUTER) / 2, 0);
              const AIcon = skills[active].icon;
              const currentBrandColor = skills[active].color;

              return (
                <g>
                  {/* Glowing Core Active Bubble */}
                  <g filter="url(#glow-strong)">
                    <circle
                      cx={topPos.x}
                      cy={topPos.y}
                      r="46"
                      fill="#060c18"
                      stroke={currentBrandColor}
                      strokeWidth="2"
                    />
                    <circle
                      cx={topPos.x}
                      cy={topPos.y}
                      r="54"
                      fill="none"
                      stroke={`${currentBrandColor}30`}
                      strokeWidth="1"
                    />
                    <foreignObject x={topPos.x - 22} y={topPos.y - 22} width="44" height="44">
                      <div style={{
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.2rem',
                        color: currentBrandColor,
                      }}>
                        <AIcon />
                      </div>
                    </foreignObject>
                  </g>

                  {/* Sketch-Accurate Alignment Label Node: Anchored directly below the halo */}
                  <g>
                    <text
                      x={topPos.x}
                      y={topPos.y + 85}
                      textAnchor="middle"
                      fill={currentBrandColor}
                      fontSize="22"
                      fontFamily="ui-sans-serif, system-ui, sans-serif"
                      fontWeight="800"
                      letterSpacing="3"
                      style={{ 
                        textTransform: 'uppercase',
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                        transition: 'fill 0.5s ease-in-out'
                      }}
                    >
                      {skills[active].name}
                    </text>
                  </g>
                </g>
              );
            })()}
          </svg>
        </div>
      </div>
    </section>
  );
}