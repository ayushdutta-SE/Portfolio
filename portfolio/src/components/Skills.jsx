import { useState } from 'react';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiMysql, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava />, color: '#f59e0b', cat: 'Backend', r: 100, angle: 270 },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#22c55e', cat: 'Backend', r: 100, angle: 30 },
  { name: 'MySQL', icon: <SiMysql />, color: '#3b82f6', cat: 'Database', r: 100, angle: 150 },
  { name: 'Azure', icon: <SiMicrosoftazure />, color: '#0ea5e9', cat: 'Cloud', r: 160, angle: 270 },
  { name: 'Databricks', icon: <SiDatabricks />, color: '#ef4444', cat: 'Data Eng', r: 160, angle: 342 },
  { name: 'Python', icon: <FaPython />, color: '#a855f7', cat: 'Programming', r: 160, angle: 54 },
  { name: 'Postman', icon: <SiPostman />, color: '#f97316', cat: 'Tools', r: 160, angle: 198 },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032', cat: 'DevOps', r: 210, angle: 310 },
];

export default function Skills() {
  const [active, setActive] = useState(skills[0]);

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <h3 className="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        <span className="text-blue-400 font-mono text-xl">01.</span> Core Capabilities
      </h3>

      <div className="flex items-center justify-center">
        <div className="relative" style={{ width: 460, height: 460 }}>

          {/* Orbit rings */}
          {[220, 340, 460].map(size => (
            <div key={size} className="absolute rounded-full border border-slate-800/50"
              style={{ width: size, height: size, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          ))}

          {/* Center display */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 rounded-full bg-slate-900 border-2 border-blue-500/40 flex flex-col items-center justify-center gap-1 transition-all duration-300">
              <div className="text-4xl" style={{ color: active.color }}>{active.icon}</div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">{active.name}</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">{active.cat}</span>
            </div>
          </div>

          {/* Skill nodes */}
          {skills.map((skill, i) => {
            const rad = (skill.angle * Math.PI) / 180;
            const x = 230 + skill.r * Math.cos(rad);
            const y = 230 + skill.r * Math.sin(rad);
            const isActive = active.name === skill.name;
            return (
              <button key={i} onClick={() => setActive(skill)}
                className="absolute flex flex-col items-center justify-center rounded-full transition-all duration-250 cursor-pointer"
                style={{
                  width: 58, height: 58,
                  left: x, top: y,
                  transform: 'translate(-50%,-50%)',
                  background: isActive ? 'rgba(30,58,95,0.8)' : '#0d1526',
                  border: `1.5px solid ${isActive ? skill.color : '#1e3a5f'}`,
                  boxShadow: isActive ? `0 0 12px ${skill.color}40` : 'none',
                  scale: isActive ? '1.15' : '1',
                  color: skill.color,
                  fontSize: '1.4rem',
                  zIndex: isActive ? 20 : 5,
                }}>
                {skill.icon}
                <span className="absolute -bottom-5 text-[9px] font-mono text-slate-500 uppercase whitespace-nowrap tracking-wide">
                  {skill.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}