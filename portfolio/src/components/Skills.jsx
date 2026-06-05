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

const RADIUS = 260; 
const CENTER_X = 300;
const CENTER_Y = 340;

export default function Skills() {
  const [rotation, setRotation] = useState(0);
  const [active, setActive] = useState(0);

  const handleNodeClick = (clickedIndex) => {
    if (clickedIndex === active) return;

    const totalSkills = skills.length;
    
    // Calculate shortest distance path along a circular index array loop
    let diff = clickedIndex - active;
    if (diff > totalSkills / 2) diff -= totalSkills;
    if (diff < -totalSkills / 2) diff += totalSkills;

    // Convert step indices cleanly to degree steps based on the array distribution
    const degreesPerSkill = 360 / totalSkills;
    
    setRotation(prev => prev - (diff * degreesPerSkill));
    setActive(clickedIndex);
  };

  return (
    <section id="skills" className="pt-24 pb-0 px-6 max-w-5xl mx-auto border-t border-slate-800/60 relative min-h-[580px] flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      {/* LEFT CONTENT BLOCK */}
      <div className="w-full lg:w-2/5 z-10 space-y-6 pb-12 lg:pb-0">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
          <h3 className="text-4xl font-bold text-slate-100 mt-2 mb-4 leading-tight">
            My <span className="text-blue-400">Skills</span>
          </h3>
        </div>

        {/* Dynamic Detail Card Box */}
        <div
          className="rounded-xl p-6 border transition-all duration-500 bg-[#0d1526]/40 backdrop-blur-md max-w-md shadow-2xl"
          style={{ borderColor: `${skills[active].color}25`, background: `${skills[active].color}02` }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-4xl" style={{ color: skills[active].color }}>
              {(() => { const Icon = skills[active].icon; return <Icon />; })()}
            </div>
            <div>
              <div className="text-lg font-bold text-slate-100 tracking-tight">{skills[active].name}</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-0.5">{skills[active].cat}</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">{skills[active].desc}</p>
        </div>
      </div>

      {/* RIGHT ARC COMPONENT */}
      <div 
        className="relative lg:absolute right-0 bottom-0 translate-y-[12%] lg:translate-y-[8%] translate-x-[5%] lg:translate-x-0 flex-shrink-0"
        style={{ width: CENTER_X * 2, height: CENTER_Y }}
      >
        {/* Track Guideline */}
        <div 
          className="absolute rounded-full border border-dashed border-slate-800/40 pointer-events-none"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: CENTER_X - RADIUS,
            top: CENTER_Y - RADIUS,
          }}
        />

        {/* Core Rotator Matrix Engine */}
        <div
          className="absolute inset-0"
          style={{ 
            width: CENTER_X * 2, 
            height: CENTER_Y * 2,
            transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)', 
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${CENTER_X}px ${CENTER_Y}px`
          }}
        >
          {skills.map((skill, i) => {
            const angle = (i * 360) / skills.length - 90;
            const rad = (angle * Math.PI) / 180;
            const x = CENTER_X + RADIUS * Math.cos(rad);
            const y = CENTER_Y + RADIUS * Math.sin(rad);
            const Icon = skill.icon;
            const isActive = active === i;

            return (
              <button
                key={i}
                onClick={() => handleNodeClick(i)}
                className={`absolute rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl cursor-pointer select-none outline-none
                  ${isActive ? 'animate-bounce-slow' : 'opacity-30 hover:opacity-80'}`}
                style={{
                  width: isActive ? 74 : 52,
                  height: isActive ? 74 : 52,
                  left: x,
                  top: y,
                  // Keep node text baseline parallel with user viewport perspective dynamically
                  transform: `translate(-50%,-50%) rotate(${-rotation}deg)`,
                  background: isActive ? '#0d1526' : '#060c14',
                  border: `2px solid ${isActive ? skill.color : '#1e3a5f'}`,
                  boxShadow: isActive ? `0 0 35px ${skill.color}40, inset 0 0 15px ${skill.color}20` : 'none',
                  color: skill.color,
                  fontSize: isActive ? '1.8rem' : '1.2rem',
                  zIndex: isActive ? 30 : 10,
                }}
              >
                <Icon />
              </button>
            );
          })}
        </div>

        {/* Static Central Identity Dial */}
        <div
          className="absolute rounded-full flex flex-col items-center justify-center transition-all duration-500 z-10 border shadow-2xl"
          style={{
            width: 120,
            height: 120,
            left: CENTER_X - 60,
            top: CENTER_Y - 60,
            background: '#060c18',
            border: `2px solid ${skills[active].color}35`,
            boxShadow: `0 0 50px -10px ${skills[active].color}25`
          }}
        >
          <div className="text-2xl transition-all duration-300" style={{ color: skills[active].color }}>
            {(() => { const Icon = skills[active].icon; return <Icon />; })()}
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase mt-1">
            {skills[active].name}
          </span>
        </div>
      </div>
    </section>
  );
}