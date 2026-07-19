import { useState } from "react";
import { Code, Database, Layout, Shield, GitBranch, Cpu, Zap, Lock, Cloud, Layers, Terminal, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { SKILLS_DATA } from "../../data/profile";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("languages");

  // Map icon strings to Lucide components
  const iconMap: Record<string, any> = {
    Code: Code,
    Database: Database,
    Layout: Layout,
    Shield: Shield,
    GitBranch: GitBranch,
    Cpu: Cpu,
    Zap: Zap,
    Lock: Lock,
    Cloud: Cloud,
    Layers: Layers,
    Terminal: Terminal
  };

  const categories = [
    { id: "languages", label: "Languages", list: SKILLS_DATA.programmingLanguages, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30", gradient: "from-indigo-500 to-indigo-600" },
    { id: "frameworks", label: "Frameworks & APIs", list: SKILLS_DATA.frameworks, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", gradient: "from-cyan-500 to-cyan-600" },
    { id: "databases", label: "Databases & ORMs", list: SKILLS_DATA.databases, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", gradient: "from-emerald-500 to-emerald-600" },
    { id: "security", label: "Cybersecurity", list: SKILLS_DATA.cyberSecurity, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", gradient: "from-purple-500 to-purple-600" },
    { id: "tools", label: "DevOps & Tools", list: SKILLS_DATA.tools, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", gradient: "from-amber-500 to-amber-600" }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="py-32 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">ENGINEERING TOOLKIT</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Technical Proficiency
          </h2>
          <p className="text-xs text-slate-500 font-mono">CURATED STACK & PLATFORM EXPERTISES</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-purple-400 mx-auto mt-2" />
        </div>

        {/* Category Tab Selector with Spring Motion Active State */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto p-1.5 bg-[#02010c] border border-white/5 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer flex-1 min-w-[120px] text-center ${
                activeCategory === cat.id
                  ? "text-white font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryGlow"
                  className="absolute inset-0 rounded-xl bg-indigo-600/15 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.08)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skill Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.list.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel spotlight-card p-6 rounded-2xl relative group hover:border-indigo-500/20 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Glow accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all pointer-events-none" />
                
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                      <IconComponent className={`w-5.5 h-5.5 ${currentCategory.color}`} />
                    </div>
                    <span className="font-display font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Proficiency Level tag */}
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {skill.proficiency >= 90 ? "Expert" : skill.proficiency >= 80 ? "Advanced" : "Proficient"}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-mono text-slate-500">Confidence Scale</span>
                    <span className={`font-mono ${currentCategory.color} font-bold`}>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#02010c] border border-white/5 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${currentCategory.gradient}`}
                    />
                  </div>
                </div>

                {/* Indicator dots for hover state */}
                <div className="absolute bottom-2 right-4 flex gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills Highlight ribbon at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel spotlight-card p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 hidden md:flex">
              <Sparkles className="w-5 h-5 text-indigo-400 animate-spin-slow" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Professional Growth & Interpersonal Synergy</div>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Active presentation lead, academic community organizer, and Literature and Publicity head at APSIT. Expert at communicating high-level concepts simply.
              </p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider">
              Publicity Head
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
              Event Lead
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
