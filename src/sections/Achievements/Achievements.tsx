import { useState } from "react";
import { Award, Trophy, Megaphone, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ACHIEVEMENTS_DATA } from "../../data/profile";

export default function Achievements() {
  const [, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-32 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">HONORS & LEADERSHIP</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Achievements & Leadership
          </h2>
          <p className="text-xs text-slate-500 font-mono">DISTINGUISHED AWARDS, INNOVATION HACKATHONS, & COMMUNICATIONS</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2" />
        </div>

        {/* Dynamic Bento-Style Achievement Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {ACHIEVEMENTS_DATA.map((ach, idx) => {
            const isAward = ach.category === "award";
            const isLeadership = ach.category === "leadership";
            
            // Map icons based on category
            const Icon = isAward ? Trophy : isLeadership ? Megaphone : Award;
            const borderGlow = isAward 
              ? "hover:border-amber-500/20" 
              : isLeadership 
              ? "hover:border-cyan-500/20" 
              : "hover:border-indigo-500/20";
            const bgGlow = isAward
              ? "from-amber-500/5 to-transparent"
              : isLeadership
              ? "from-cyan-500/5 to-transparent"
              : "from-indigo-500/5 to-transparent";
            const accentText = isAward
              ? "text-amber-400"
              : isLeadership
              ? "text-cyan-400"
              : "text-indigo-400";
            
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredCard(ach.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-panel spotlight-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full ${borderGlow} ${
                  isLeadership ? "lg:col-span-12" : "lg:col-span-6"
                }`}
              >
                {/* Background decorative gradient */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${bgGlow} pointer-events-none rounded-tr-3xl`} />
                
                <div className="flex flex-col gap-6">
                  {/* Category Pill and Date */}
                  <div className="flex justify-between items-center relative z-10">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-white/5 border border-white/10 ${accentText}`}>
                      {ach.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {ach.date}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${accentText}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-extrabold text-white leading-snug">
                        {ach.title}
                      </h3>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1.5 font-bold">
                        Organized by {ach.organizingBody}
                      </p>
                    </div>
                  </div>

                  {/* Core narrative */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans relative z-10">
                    {ach.description}
                  </p>
                </div>

                {/* Quantifiable Impact Vector Panel */}
                <div className="mt-8 pt-6 border-t border-white/5 relative z-10 flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    Verified Achievements Impact Value
                  </span>
                  <div className="p-4 bg-[#02010c] border border-white/5 rounded-2xl hover:border-white/10 transition-colors flex gap-3.5 items-start">
                    <span className={`px-2 py-0.5 text-[8px] font-extrabold font-mono rounded shrink-0 mt-0.5 bg-white/5 border border-white/10 ${accentText}`}>
                      OKRs SUCCESS
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {ach.impact}
                    </p>
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
