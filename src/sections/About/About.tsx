import { GraduationCap, BookOpen, Star, CheckCircle, Flame } from "lucide-react";
import { motion } from "motion/react";
import { RINKAL_PROFILE } from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">PROFESSIONAL BIO</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            About Me & Academics
          </h2>
          <p className="text-xs text-slate-500 font-mono">EDUCATIONAL MATRIX & STRATEGIC FOCUS VECTORS</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-2" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Bento Block 1: Storytelling & Focus Areas (5-cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel spotlight-card p-8 rounded-3xl flex flex-col gap-6 h-full justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    The Software Engineering Journey
                  </h3>
                </div>
                
                <div className="text-sm text-slate-300 space-y-4 font-sans leading-relaxed">
                  <p>
                    I am an Information Technology student at <strong className="text-white font-semibold">A. P. Shah Institute of Technology, Thane</strong>, dedicated to backend architectures, secure system design, and AI automation.
                  </p>
                  <p>
                    My design ethos focuses on <em className="text-indigo-300 font-medium font-mono not-italic text-xs bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/10">"engineering clean, high-performance systems"</em>. I thrive when compiling structures, databases, and network modules.
                  </p>
                  <p>
                    Through multiple virtual internships (Google Cloud GenAI, Zscaler, Palo Alto Networks), I have cultivated a rigorous security-first development approach.
                  </p>
                </div>
              </div>

              {/* Core Growth Goals */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-6 mt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  Strategic Focus Vectors
                </h4>
                <div className="flex flex-col gap-3">
                  {RINKAL_PROFILE.professionalGrowth.map((goal, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs text-slate-400 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5 hover:border-indigo-500/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bento Block 2: Academic Transcripts Dashboard (7-cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel spotlight-card p-8 rounded-3xl flex flex-col gap-8 h-full justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <GraduationCap className="w-5.5 h-5.5 text-indigo-400" />
                      Academic Performance
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                      University of Mumbai | College Code: 996 (Thane)
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-mono text-indigo-300 font-bold">
                    B.E. IT
                  </div>
                </div>

                {/* Simplified overall CGPA display */}
                <div className="flex flex-col sm:flex-row gap-6 items-center bg-[#02010c]/80 border border-white/5 p-6 rounded-2xl">
                  {/* Large visual score */}
                  <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        stroke="url(#cgpaGradient)"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 38}
                        strokeDashoffset={2 * Math.PI * 38 * (1 - 8.34 / 10)}
                        className="transition-all duration-700 ease-out"
                      />
                      <defs>
                        <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xl font-display font-black text-white">
                        8.34
                      </span>
                      <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest font-bold">CGPA</span>
                    </div>
                  </div>

                  {/* 1-2 Lines description */}
                  <div className="text-left flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Cumulative GPA</span>
                    <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
                      Maintained an overall average score of <strong className="text-indigo-400">8.34 CGPA</strong> (Distinction Class) with consistent high performance across Semester III (8.57), Semester IV (8.14), and Semester V (8.30).
                    </p>
                  </div>
                </div>
              </div>

              {/* Course Grade List */}
              <div className="flex flex-col gap-3">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-indigo-400" />
                  Primary Curricular Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Database Systems", "Computer Networks", "Cybersecurity", "Web Development"].map((field, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-indigo-950/20 border border-white/5 text-xs text-slate-300 flex items-center gap-2 hover:border-indigo-500/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span>{field}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
