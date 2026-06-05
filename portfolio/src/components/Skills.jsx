import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMicrosoftazure, SiDatabricks, SiMysql, SiPostman, SiApachespark } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: "MySQL / SQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Azure Cloud", icon: <SiMicrosoftazure className="text-[#0089D6]" /> },
    { name: "Databricks", icon: <SiDatabricks className="text-[#FF3621]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "PySpark", icon: <SiApachespark className="text-[#E25A1C]" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <h3 className="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        <span className="text-blue-400 font-mono text-xl">01.</span> Core Capabilities
      </h3>

      <div className="grid grid-cols-3 gap-[1px] bg-slate-800 border border-slate-800 rounded-xl overflow-hidden">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-[#0f172a] flex flex-col items-center justify-center gap-4 py-10 px-6 transition-all duration-300 hover:bg-[#1e293b] hover:-translate-y-1 hover:z-10 group cursor-default"
          >
            <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors tracking-widest uppercase">