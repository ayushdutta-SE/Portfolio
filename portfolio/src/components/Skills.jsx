import { useState } from 'react';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiMysql, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f59e0b', cat: 'Backend', desc: 'Core language for enterprise backend development. Used at TCS for building production-grade services.' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#22c55e', cat: 'Backend', desc: 'Built and maintained REST APIs and microservices using Spring Boot in live enterprise environments.' },
  { name: 'MySQL', icon: SiMysql, color: '#3b82f6', cat: 'Database', desc: 'Optimized SQL queries for transactional and reporting use cases across production systems.' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0ea5e9', cat: 'Cloud', desc: 'Designed cloud data pipelines using ADF, ADLS Gen2, Synapse Analytics and Azure Key Vault.' },
  { name: 'Databricks', icon: SiDatabricks, color: '#ef4444', cat: 'Data Eng', desc: 'Re-engineered Informatica PowerCenter logic into distributed PySpark scripts on Databricks.' },
  { name: 'Python', icon: FaPython, color: '#a855f7', cat: 'Programming', desc: 'Used for data processing, transformation scripts and automation in data engineering workflows.' },
  { name: 'Postman', icon: SiPostman, color: '#f97316', cat: 'Tools', desc: 'API testing, documentation and workflow automation across backend development cycles.' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032', cat: 'DevOps', desc: 'Version control and collaborative development across all professional and personal projects.' },
];

const RADIUS = 240; // Increased radius to give the off-screen curve a massive, smooth layout look
const CENTER = 300;

export default function Skills() {
  const [rotation, setRotation] = useState(0);
  const [active, setActive] = useState(0);

  const handleClick = (i) => {
    const totalSkills = skills.length;
    const targetAngle = (i * 360) / totalSkills;
    const currentAngle = ((rotation % 360) + 360) % 360;
    let delta = targetAngle - currentAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    setRotation(prev => prev - delta);
    setActive(i);
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60 relative min-h-[650px] flex items-center overflow-hidden">
      
      {/* LEFT CONTENT HALF */}
      <div className="w-full lg:w-1/2 z-10 space-y-6">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
          <h3 className="text-4xl font-bold text-slate-100 mt-2 mb-4 leading-tight">
            My <span className="text-blue-400">Skills</span>
          </h3>
        </div>

        {/* Informative Display Panel */}
        <div
          className="rounded-xl p-6 border transition-all duration-500 bg-[#0d1526]/40 backdrop-blur-md max-w-md shadow-2xl"
          style={{ borderColor: `${skills[active].color}30`, background: `${skills[active].color}04` }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-4xl" style={{ color: skills[active].color }}>
              {(() => { const Icon = skills[active].icon; return <Icon />; })()}
            </div>
            <div>
              <div className="text-lg font-bold text-slate-100">{skills[active].name}</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-0.5">{skills[active].cat}</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">{skills[active].desc}</p>
        </div>

        {/* Selection Navigation Pills */}
        <div className="flex flex-wrap gap-2 max-w-md">
          {skills.map((s, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-300"
              style={{
                borderColor: active === i ? s.color : '#1e293b',
                color: active === i ? s.color : '#475569',
                background: active === i ? `${s.color}15` : 'transparent'
              }}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT CYBER WHEEL HALF: Shifted and hidden by translating X-axis off screen */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] lg:translate-x-[30%] flex-shrink-0 select-none hidden md:block" 
        style={{ width: CENTER * 2, height: CENTER * 2 }}
      >
        {/* Decorative Orbit rings */}
        {[CENTER * 2 - 120, CENTER * 2 - 20, RADIUS * 2 + 20].map((size, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none"
            style={{
              width: size, height: size,
              top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              border: '1px solid rgba(30,58,95,0.25)'
            }} 
          />
        ))}

        {/* Main Axis Rotating Ring */}
        <div
          className="absolute inset-0"
          style={{ transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)', transform: `rotate(${rotation}deg)` }}
        >
          {skills.map((skill, i) => {
            const angle = (i * 360) / skills.length - 90;
            const rad = (angle * Math.PI) / 180;
            const x = CENTER + RADIUS * Math.cos(rad);
            const y = CENTER + RADIUS * Math.sin(rad);
            const Icon = skill.icon;
            const isActive = active === i;

            return (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className={`absolute rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl
                  ${isActive ? 'animate-bounce-slow' : 'opacity-40 hover:opacity-90'}`}
                style={{
                  // Active icon scales up to 76px; inactive ones sit compactly at 54px
                  width: isActive ? 76 : 54,
                  height: isActive ? 76 : 54,
                  left: x,
                  top: y,
                  transform: `translate(-50%,-50%) rotate(${-rotation}deg)`,
                  background: isActive ? '#0d1526' : '#060c14',
                  border: `2px solid ${isActive ? skill.color : '#1e3a5f'}`,
                  // Spreads a vibrant color matching neon glow underneath the peak item
                  boxShadow: isActive ? `0 0 35px ${skill.color}50, inset 0 0 15px ${skill.color}30` : 'none',
                  color: skill.color,
                  fontSize: isActive ? '1.9rem' : '1.3rem',
                  zIndex: isActive ? 30 : 10,
                }}
              >
                <Icon />
              </button>
            );
          })}
        </div>

        {/* Static Inner Radar Cap */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center transition-all duration-500 z-10"
          style={{
            width: 110, height: 110,
            background: '#060c18',
            border: `2px solid ${skills[active].color}40`,
            boxShadow: `0 0 40px -10px ${skills[active].color}20`
          }}
        >
          <div className="text-2xl transition-all duration-300" style={{ color: skills[active].color }}>
            {(() => { const Icon = skills[active].icon; return <Icon />; })()}
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-1">
            {skills[active].name}
          </span>
        </div>
      </div>
    </section>
  );
}