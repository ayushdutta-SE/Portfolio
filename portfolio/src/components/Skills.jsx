import { useState, useEffect } from 'react';
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

const RADIUS = 200;
const CENTER = 260;

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
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Left text panel */}
        <div className="lg:w-2/5 flex-shrink-0">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
          <h3 className="text-4xl font-bold text-slate-100 mt-2 mb-4 leading-tight">
            My <span className="text-blue-400">Skills</span>
          </h3>
          <div
            className="rounded-xl p-4 border transition-all duration-500"
            style={{ borderColor: `${skills[active].color}30`, background: `${skills[active].color}08` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl" style={{ color: skills[active].color }}>
                {(() => { const Icon = skills[active].icon; return <Icon />; })()}
              </div>
              <div>
                <div className="text-lg font-bold text-slate-100">{skills[active].name}</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">{skills[active].cat}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{skills[active].desc}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((s, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className="text-xs font-mono px-3 py-1 rounded-full border transition-all duration-200"
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

        {/* Wheel */}
        <div className="relative flex-shrink-0" style={{ width: CENTER * 2, height: CENTER * 2 }}>

          {/* Orbit rings */}
          {[160, 220, RADIUS * 2 + 20].map((size, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: size, height: size,
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                border: '1px solid rgba(30,58,95,0.5)'
              }} />
          ))}

          {/* Rotating wheel */}
          <div
            className="absolute inset-0"
            style={{ transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)', transform: `rotate(${rotation}deg)` }}
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
                  className="absolute rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    width: isActive ? 80 : 56,
                    height: isActive ? 80 : 56,
                    left: x,
                    top: y,
                    transform: `translate(-50%,-50%) rotate(${-rotation}deg)`,
                    background: isActive ? `${skill.color}20` : '#0d1526',
                    border: `2px solid ${isActive ? skill.color : '#1e3a5f'}`,
                    boxShadow: isActive ? `0 0 24px ${skill.color}60, 0 0 48px ${skill.color}20` : 'none',
                    color: skill.color,
                    fontSize: isActive ? '2rem' : '1.4rem',
                    zIndex: isActive ? 20 : 5,
                  }}
                >
                  <Icon />
                </button>
              );
            })}
          </div>

          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 120, height: 120,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${skills[active].color}20 0%, transparent 70%)`,
              transition: 'background 0.5s'
            }}
          />

          {/* Center circle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center gap-1 z-10 transition-all duration-500"
            style={{
              width: 110, height: 110,
              background: '#060c18',
              border: `2px solid ${skills[active].color}50`,
            }}
          >
            <div className="text-3xl transition-all duration-300" style={{ color: skills[active].color }}>
              {(() => { const Icon = skills[active].icon; return <Icon />; })()}
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider">
              {skills[active].name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}