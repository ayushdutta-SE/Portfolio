import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
// 1. Changed VscAzure to SiAzure here
import { SiSpringboot, SiApachedatabricks, SiMysql, SiPostman } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend Engineering",
      items: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "MySQL / SQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Postman API", icon: <SiPostman className="text-[#FF6C37]" /> }
      ]
    },
    {
      category: "Cloud Data Engineering",
      items: [
        {
          category: "Cloud Data Engineering",
          items: [
            // 2. Updated the icon component instance here
            { name: "Azure Cloud", icon: <SiAzure className="text-[#0089D6]" /> },
            { name: "Databricks", icon: <SiApachedatabricks className="text-[#FF3621]" /> },
            { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
            { name: "Git Analytics", icon: <FaGitAlt className="text-[#F05032]" /> }
          ]
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60 perspective-1000">
      <h3 className="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        <span className="text-blue-400 font-mono text-xl">01.</span> Core Capabilities
      </h3>
      
      <div className="space-y-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h4 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">{cat.category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {cat.items.map((skill, i) => (
                <div 
                  key={i} 
                  className="bg-[#1e293b]/40 border border-slate-800 p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-out transform hover:-translate-y-3 hover:scale-105 hover:rotate-1 hover:border-blue-500/50 hover:bg-[#1e293b]/80 hover:shadow-2xl hover:shadow-blue-500/10 group cursor-default"
                >
                  <div className="text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}