import { useState } from 'react';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiMysql, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f59e0b', cat: 'Backend' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#22c55e', cat: 'Backend' },
  { name: 'MySQL / SQL', icon: SiMysql, color: '#3b82f6', cat: 'Database' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0ea5e9', cat: 'Cloud' },
  { name: 'Databricks', icon: SiDatabricks, color: '#ef4444', cat: 'Data Eng' },
  { name: 'Python', icon: FaPython, color: '#a855f7', cat: 'Programming' },
  { name: 'Postman', icon: SiPostman, color: '#f97316', cat: 'Tools' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032', cat: 'DevOps' },
];

const TOTAL = skills.length;
const CY = 350; 
const BASE_INNER = 180;
const BASE_OUTER = 310;
const GAP_DEG = 3;

// CHANGE THIS
const SVG_WIDTH = 1500;
const CX = SVG_WIDTH; // This puts center at x=360 (left area)// Center at x=0 = LEFT edge of SVG box = RIGHT edge of screen

function polarToCart(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
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
  const [rotation, setRotation] = useState(180);

  const degPerSkill = 360 / TOTAL;

  const handleClick = (i) => {
    if (i === active) return;

    let diff = i - active;
    if (diff > TOTAL / 2) diff -= TOTAL;
    if (diff < -TOTAL / 2) diff += TOTAL;

    setRotation(prev => prev - (diff * degPerSkill));
    setActive(i);
  };

  return (
    /* Changed to w-full so absolute position elements can anchor to the actual monitor margins */
    <section id="skills" className="py-32 w-full border-t border-slate-800/60 relative min-h-[600px] flex items-center overflow-hidden">
      
      {/* Inner layer protecting the layout symmetry of your text column */}
      <div className="max-w-6xl w-full mx-auto px-6 z-20 pointer-events-none">
        <div className="w-full lg:w-2/5">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
          <h3 className="text-5xl font-extrabold text-slate-100 mt-2 leading-tight tracking-tight">
            My <span className="text-blue-400">Skills</span>
          </h3>
        </div>
      </div>

      {/* WHEEL ANCHOR HOUSING: Floats completely right, clean of the layout block limitations */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none z-10"
        style={{ width: SVG_WIDTH, height: 700 }}
      >
        <svg width={SVG_WIDTH} height="700" viewBox={`0 0 ${SVG_WIDTH} 700`} className="w-full h-full">
          <defs>
            {skills.map((s, i) => (
              <radialGradient key={i} id={`skills-grad${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={s.color} stopOpacity="0.25" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0.02" />
              </radialGradient>
            ))}
            <filter id="skills-glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g 
            transform={`rotate(${rotation}, ${CX}, ${CY})`} 
            style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
          >
            {skills.map((skill, i) => {
              const midDeg = i * degPerSkill;
              const startDeg = midDeg - degPerSkill / 2 + GAP_DEG / 2;
              const endDeg = midDeg + degPerSkill / 2 - GAP_DEG / 2;
              const isActive = active === i;
              
              const currentInner = isActive ? BASE_INNER - 45 : BASE_INNER;
              const currentOuter = isActive ? BASE_OUTER + 45 : BASE_OUTER;
              
              const iconPos = polarToCart(CX, CY, (currentInner + currentOuter) / 2, midDeg);
              const Icon = skill.icon;

              return (
                <g key={i} onClick={() => handleClick(i)} style={{ cursor: 'pointer' }}>
                  <path
                    d={segmentPath(CX, CY, currentInner, currentOuter, startDeg, endDeg)}
                    fill={isActive ? `url(#skills-grad${i})` : 'rgba(9,15,28,0.7)'}
                    stroke={isActive ? skill.color : 'rgba(30,58,95,0.25)'}
                    strokeWidth={isActive ? 1.8 : 0.8}
                    filter={isActive ? 'url(#skills-glow)' : 'none'}
                    style={{ transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  />

                  <g 
                    transform={`rotate(${-rotation}, ${iconPos.x}, ${iconPos.y})`}
                    style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  >
                    <foreignObject
                      x={iconPos.x - 20}
                      y={isActive ? iconPos.y - 26 : iconPos.y - 20}
                      width="40"
                      height="40"
                      style={{ overflow: 'visible' }}
                    >
                      <div style={{
                        width: 40, height: 40,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: isActive ? '2.2rem' : '1.4rem',
                        color: skill.color,
                        filter: isActive ? `drop-shadow(0 0 12px ${skill.color})` : 'none',
                        transition: 'all 0.4s'
                      }}>
                        <Icon />
                      </div>
                    </foreignObject>

                    {isActive && (
                      <text
                        x={iconPos.x}
                        y={iconPos.y + 26}
                        textAnchor="middle"
                        fill={skill.color}
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="800"
                        letterSpacing="1.5"
                        style={{ textTransform: 'uppercase' }}
                      >
                        {skill.name}
                      </text>
                    )}
                  </g>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}