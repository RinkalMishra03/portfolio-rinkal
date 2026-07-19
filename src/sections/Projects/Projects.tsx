import { useState } from "react";
import { FolderGit2, Github, ShieldAlert, Sparkles, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../../data/profile";

export default function Projects() {
  const [activeTabs, setActiveCategory] = useState<Record<string, "summary" | "problem" | "solution" | "impact">>({
    "smart-event-manager": "summary",
    "cyberaware": "summary",
    "smart-recruiter": "summary"
  });

  const handleTabChange = (projectId: string, tabId: "summary" | "problem" | "solution" | "impact") => {
    setActiveCategory((prev) => ({
      ...prev,
      [projectId]: tabId
    }));
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">ENGINEERING PROOFS</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Technical Project Showcase
          </h2>
          <p className="text-xs text-slate-500 font-mono">PRACTICAL BUILDS & DEPLOYED SOLUTIONS</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2" />
        </div>

        {/* Dynamic Project Bento Showcase */}
        <div className="flex flex-col gap-16">
          {PROJECTS_DATA.map((project, idx) => {
            const activeTab = activeTabs[project.id] || "summary";
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="glass-panel spotlight-card p-8 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch hover:border-indigo-500/20 transition-all duration-500 relative"
              >
                {/* Visual Category Pill */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.08)]">
                    {project.category}
                  </span>
                </div>

                {/* Left side: Project Basic metadata & tags (5-cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
                  <div className="flex flex-col gap-5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <FolderGit2 className="w-5.5 h-5.5 text-indigo-400" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech stack badge container */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Tech Stack Integration</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl bg-[#02010c] border border-white/5 text-[11px] font-mono text-indigo-200 hover:border-indigo-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-indigo-500/20 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      View Codebase
                    </a>
                  </div>
                </div>

                {/* Right side: Interactive Slide Tabs (7-cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-10 h-full">
                  
                  {/* Sliding Tabs Bar */}
                  <div className="flex flex-wrap gap-1 p-1 bg-[#02010c] border border-white/5 rounded-xl mb-6">
                    {["summary", "problem", "solution", "impact"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(project.id, tab as any)}
                        className={`relative px-4 py-2 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase transition-all cursor-pointer flex-1 text-center ${
                          activeTab === tab
                            ? "text-white"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        {tab === "problem" ? "Pain Point" : tab === "solution" ? "Architecture" : tab}
                        {activeTab === tab && (
                          <motion.div
                            layoutId={`activeProjectTabGlow_${project.id}`}
                            className="absolute inset-0 rounded-lg bg-indigo-600/15 border border-indigo-500/20"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Interactive Content Canvas */}
                  <div className="flex-1 flex flex-col justify-center min-h-[220px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeTab === "summary" && (
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-300 leading-relaxed font-sans">
                              {project.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                              {project.features.map((feat, idx) => (
                                <div key={idx} className="flex gap-2.5 items-start text-xs text-slate-400 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-indigo-500/10 transition-colors">
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === "problem" && (
                          <div className="flex flex-col gap-4">
                            <div className="text-[10px] font-mono text-rose-400 uppercase tracking-widest flex items-center gap-2 font-extrabold bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-lg w-fit">
                              <ShieldAlert className="w-4 h-4 text-rose-400" />
                              The Engineering Bottleneck
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed font-sans mt-1">
                              {project.problem}
                            </p>
                          </div>
                        )}

                        {activeTab === "solution" && (
                          <div className="flex flex-col gap-4">
                            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2 font-extrabold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
                              <Sparkles className="w-4 h-4 text-emerald-400" />
                              Technical System Resolution
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed font-sans mt-1">
                              {project.solution}
                            </p>
                          </div>
                        )}

                        {activeTab === "impact" && (
                          <div className="flex flex-col gap-4">
                            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 font-extrabold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg w-fit">
                              <Cpu className="w-4 h-4 text-cyan-400" />
                              Quantifiable Project OKRs
                            </div>
                            <div className="flex flex-col gap-3 mt-2">
                              {project.impact.map((imp, idx) => (
                                <div key={idx} className="flex gap-3.5 items-start text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#02010c] border border-white/5 p-4 rounded-xl hover:border-cyan-500/20 transition-colors">
                                  <span className="px-2 py-0.5 text-[9px] font-extrabold font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 shrink-0 mt-0.5">
                                    METRIC 0{idx+1}
                                  </span>
                                  <span>{imp}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
