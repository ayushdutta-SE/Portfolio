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
    let diff = clickedIndex - active;
    if (diff > totalSkills / 2) diff -= totalSkills;
    if (diff < -totalSkills / 2) diff += totalSkills;

    const degreesPerSkill = 360 / totalSkills;
    setRotation(prev => prev - (diff * degreesPerSkill));
    setActive(clickedIndex);
  };

  return (
    <section id="skills" className="pt-24 pb-0 px-6 max-w-5xl mx-auto border-t border-slate-800/60 relative min-h-[520px] flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      
      {/* LEFT CONTENT BLOCK */}
      <div className="w-full lg:w-2/5 z-10 self-start lg:self-center pb-8 lg:pb-0">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">01. Core Capabilities</span>
        <h3 className="text-4xl font-bold text-slate-100 mt-2 leading-tight">
          My <span className="text-blue-400">Skills</span>
        </h3>
      </div>

      {/* RIGHT CYBER ARC ROTATOR */}
      <div 
        className="relative lg:absolute right-0 bottom-0 translate-y-[12%] lg:translate-y-[8%] translate-x-[5%] lg:translate-x-0 flex-shrink-0"
        style={{ width: CENTER_X * 2, height: CENTER_Y }}
      >
        {/* Track Guideline */}
        <div 
          className="absolute rounded-full border border-dashed border-slate-800/30 pointer-events-none"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: CENTER_X - RADIUS,
            top: CENTER_Y - RADIUS,
          }}
        />

        {/* Dynamic Rotation Layer */}
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
            // Calculate base circular coordinates
            const angle = (i * 360) / skills.length - 90;
            const rad = (angle * Math.PI) / 180;
            const x = CENTER_X + RADIUS * Math.cos(rad);
            const y = CENTER_Y + RADIUS * Math.sin(rad);
            const Icon = skill.icon;
            const isActive = active === i;

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 40 : 10
                }}
              >
                {/* When active, this container transforms into a unified single 
                  circle block containing both the scaled icon AND the color-matched text name 
                */}
                <button
                  onClick={() => handleNodeClick(i)}
                  className={`flex flex-col items-center justify-center transition-all duration-500 rounded-full outline-none select-none
                    ${isActive 
                      ? 'w-[130px] h-[130px] bg-[#060c18] border-2 shadow-2xl animate-bounce-slow' 
                      : 'w-14 h-14 bg-[#060c14] border border-slate-800 opacity-30 hover:opacity-80'
                    }`}
                  style={{
                    borderColor: isActive ? skill.color : '#1e3a5f',
                    // Keep item elements upright regardless of the parent track's degree rotation orientation
                    transform: `rotate(${-rotation}deg)`,
                    boxShadow: isActive ? `0 0 50px -10px ${skill.color}40, inset 0 0 20px ${skill.color}15` : 'none'
                  }}
                >
                  {/* Icon Sizing Engine */}
                  <div 
                    className="transition-all duration-300"
                    style={{ 
                      color: skill.color,
                      fontSize: isActive ? '2.4rem' : '1.3rem'
                    }}
                  >
                    <Icon />
                  </div>

                  {/* Active Name Element - Appears directly underneath inside the bubble */}
                  {isActive && (
                    <span 
                      className="text-[11px] font-mono font-bold tracking-wider uppercase mt-1.5 animate-fadeIn"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}