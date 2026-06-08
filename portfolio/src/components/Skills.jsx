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
const BASE_INNER = 160;
const BASE_OUTER = 320;
const GAP_DEG = 2;

function polarToCart(cx, cy, r, angleDeg) {
  // Adjusted by 180 degrees to naturally orient the semi-circle arc to face the left wall
  const rad = ((angleDeg - 180) * Math.PI) / 180;
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
    const targetOffset = (TOTAL / 2 - 0.5 - i) * segDeg;
    const currentNorm = ((rotation % 360) + 360) % 360;
    let delta = targetOffset - currentNorm;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    setRotation(prev => prev + delta);
    setActive(i);
  };

  const ActiveIcon = skills[active].icon;

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative min-h-[600px] flex items-center overflow-hidden">
      
      {/* Left Text Dashboard Context Panel */}
      <div className="w-full lg:w-2/5 z-20 space-y-6">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
          <h3 className="text-4xl font-bold text-slate-100 mt-1 mb-0 leading-tight">
            My <span className="text-blue-400">Skills</span>
          </h3>
        </div>

        <div
          className="rounded-2xl p-6 border transition-all duration-500 bg-[#0d1526]/40 backdrop-blur-md shadow-2xl"
          style={{
            borderColor: `${skills[active].color}30`,
            background: `${skills[active].color}02`
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="text-4xl" style={{ color: skills[active].color }}>
              <ActiveIcon />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-100 leading-tight">{skills[active].name}</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">{skills[active].cat}</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">{skills[active].desc}</p>
        </div>
      </div>

      {/* RIGHT WALL ANCHOR CONTAINER: Pinned flush against the screen boundary wall */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] lg:translate-x-[30%] select-none z-10"
        style={{ width: 1000, height: 620 }}
      >
        <svg width="1000" height="620" viewBox="0 0 1000 620" style={{ overflow: 'visible' }}>
          <defs>
            {skills.map((s, i) => (
              <radialGradient key={i} id={`grad${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={s.color} stopOpacity="0.25" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0.03" />
              </radialGradient>
            ))}
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-strong">
              <feGaussianBlur stdDeviation="15" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Rotating Axis Wheel */}
          <g transform={`rotate(${rotation}, ${CX}, ${CY})`} style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}>
            {skills.map((skill, i) => {
              const startDeg = i * segDeg + GAP_DEG / 2;
              const endDeg = (i + 1) * segDeg - GAP_DEG / 2;
              const midDeg = (startDeg + endDeg) / 2;
              const isActive = active === i;
              
              // 1. Dynamic Radius Inflation: Active segment expands to swallow the elements safely
              const currentInner = isActive ? BASE_INNER - 35 : BASE_INNER;
              const currentOuter = isActive ? BASE_OUTER + 55 : BASE_OUTER;
              
              const iconPos = polarToCart(CX, CY, (currentInner + currentOuter) / 2, midDeg);
              const Icon = skill.icon;

              return (
                <g key={i} onClick={() => handleClick(i)} style={{ cursor: 'pointer' }}>
                  {/* Expanded Quadrilateral Path Segment */}
                  <path
                    d={segmentPath(CX, CY, currentInner, currentOuter, startDeg, endDeg)}
                    fill={isActive ? `url(#grad${i})` : 'rgba(11,19,36,0.5)'}
                    stroke={isActive ? skill.color : 'rgba(30,58,95,0.3)'}
                    strokeWidth={isActive ? 2 : 0.8}
                    filter={isActive ? 'url(#glow)' : 'none'}
                    style={{ transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  />

                  {/* Counter-Rotated Node Icons */}
                  <g 
                    transform={`rotate(${-rotation}, ${iconPos.x}, ${iconPos.y})`}
                    style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  >
                    <foreignObject
                      x={iconPos.x - 22}
                      y={iconPos.y - 28} // Shifted slightly upward to balance text addition below
                      width="44"
                      height="44"
                      style={{ overflow: 'visible' }}
                    >
                      <div style={{
                        width: 44, height: 44,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: isActive ? '2.1rem' : '1.4rem',
                        color: skill.color,
                        filter: isActive ? `drop-shadow(0 0 12px ${skill.color})` : 'none',
                        transition: 'all 0.4s'
                      }}>
                        <Icon />
                      </div>
                    </foreignObject>

                    {/* Skill Text Label: Fits cleanly inside the active enlarged segment */}
                    {isActive && (
                      <text
                        x={iconPos.x}
                        y={iconPos.y + 32}
                        textAnchor="middle"
                        fill={skill.color}
                        fontSize="12"
                        fontFamily="monospace"
                        fontWeight="800"
                        letterSpacing="2"
                        style={{ textTransform: 'uppercase', filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
                      >
                        {skill.name}
                      </text>
                    )}
                  </g>
                </g>
              );
            })}

            {/* Concentric Guide Vectors */}
            <circle cx={CX} cy={CY} r={BASE_INNER - 12} fill="none" stroke="rgba(30,58,95,0.15)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx={CX} cy={CY} r={BASE_OUTER + 16} fill="none" stroke="rgba(30,58,95,0.15)" strokeWidth="1" />
          </g>

          {/* BACKGROUND GLOW HALO DESIGN (Stays fixed at the center-left apex pointing forward) */}
          {(() => {
            const topPos = polarToCart(CX, CY, (BASE_INNER + BASE_OUTER) / 2 + 10, 90);
            return (
              <g filter="url(#glow-strong)" className="pointer-events-none">
                <circle
                  cx={topPos.x}
                  cy={topPos.y}
                  r="62"
                  fill={`${skills[active].color}05`}
                  stroke={skills[active].color}
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                  className="opacity-40"
                />
              </g>
            );
          })()}
        </svg>
      </div>
    </section>
  );
}