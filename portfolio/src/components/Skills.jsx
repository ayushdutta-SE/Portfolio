import { useState } from 'react';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiMysql, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#f59e0b' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#22c55e' },
  { name: 'MySQL', icon: SiMysql, color: '#3b82f6' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0ea5e9' },
  { name: 'Databricks', icon: SiDatabricks, color: '#ef4444' },
  { name: 'Python', icon: FaPython, color: '#a855f7' },
  { name: 'Postman', icon: SiPostman, color: '#f97316' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
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
    
    // Smooth modular shortest-path step calculation
    let diff = clickedIndex - active;
    if (diff > totalSkills / 2) diff -= totalSkills;
    if (diff < -totalSkills / 2) diff += totalSkills;

    const degreesPerSkill = 360 / totalSkills;
    
    setRotation(prev => prev - (diff * degreesPerSkill));
    setActive(clickedIndex);
  };

  return (
    <section id="skills" className="pt-24 pb-0 px-6 max-w-5xl mx-auto border-t border-slate-800/60 relative min-h-[500px] flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      {/* LEFT CONTENT BLOCK: Cleaned out entirely except for the stark main heading */}
      <div className="w-full lg:w-2/5 z-10 self-start lg:self-center pb-8 lg:pb-0">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
        <h3 className="text-4xl font-bold text-slate-100 mt-2 leading-tight">
          My <span className="text-blue-400">Skills</span>
        </h3>
      </div>

      {/* RIGHT ARC RADAR FRAME: Embedded with central metadata label */}
      <div 
        className="relative lg:absolute right-0 bottom-0 translate-y-[12%] lg:translate-y-[8%] translate-x-[5%] lg:translate-x-0 flex-shrink-0"
        style={{ width: CENTER_X * 2, height: CENTER_Y }}
      >
        {/* Orbit Path Guideline */}
        <div 
          className="absolute rounded-full border border-dashed border-slate-800/40 pointer-events-none"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: CENTER_X - RADIUS,
            top: CENTER_Y - RADIUS,
          }}
        />

        {/* Dynamic Rotation Axis Core */}
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

        {/* STATIC CENTRAL DISPLAY DIAL: Serves as the dynamic label engine for the active name */}
        <div
          className="absolute rounded-full flex flex-col items-center justify-center transition-all duration-500 z-10 border shadow-2xl"
          style={{
            width: 130,
            height: 130,
            left: CENTER_X - 65,
            top: CENTER_Y - 65,
            background: '#060c18',
            border: `2px solid ${skills[active].color}35`,
            boxShadow: `0 0 50px -10px ${skills[active].color}25`
          }}
        >
          {/* Active Skill Icon Display */}
          <div className="text-3xl transition-all duration-300" style={{ color: skills[active].color }}>
            {(() => { const Icon = skills[active].icon; return <Icon />; })()}
          </div>
          
          {/* Dynamic Core Label: Shifted cleanly right beneath the icon inside the circle */}
          <span className="text-xs font-mono font-bold text-slate-200 tracking-wider uppercase mt-1.5 transition-all duration-300">
            {skills[active].name}
          </span>
        </div>
      </div>
    </section>
  );
}