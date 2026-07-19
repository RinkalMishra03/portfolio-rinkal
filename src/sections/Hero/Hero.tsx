import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { RINKAL_PROFILE } from "../../data/profile";
import AnimatedCounter from "../../components/animations/AnimatedCounter";
import FloatingParticles from "../../components/animations/FloatingParticles";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [typedIndex, setTypedIndex] = useState(0);
  const titles = [
    "Aspiring Software Engineer",
    "Google Cloud GenAI Intern",
    "Cybersecurity Challenge Winner",
    "Full-Stack Java & Python Developer"
  ];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[typedIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setTypedIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typedIndex]);

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden text-left"
    >
      {/* Floating Network Background Particles */}
      <FloatingParticles quantity={60} color="99, 102, 241" />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        {/* Typography, Taglines, CTA Buttons */}
        <div className="flex flex-col items-start gap-8">
          
          {/* Micro-badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[11px] font-mono tracking-wider text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            ELITE SOFTWARE ENGINEERING CANDIDATE
          </motion.div>

          {/* Headline Display */}
          <div className="flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Hi, I'm <span className="gradient-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Rinkal Mishra</span>
            </motion.h1>

            {/* Sub-headline type-writer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-mono text-cyan-400 font-semibold min-h-[40px] flex items-center tracking-tight"
            >
              <span>{currentText}</span>
              <span className="w-1.5 h-5 bg-cyan-400 ml-2 animate-pulse" />
            </motion.div>
          </div>

          {/* Profile narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl font-sans"
          >
            {RINKAL_PROFILE.summary}
          </motion.p>

          {/* Premium stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-4 w-full max-w-xl"
          >
            <div className="glass-panel spotlight-card p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-1 relative group hover:border-indigo-500/20 transition-all">
              <span className="text-3xl font-display font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                <AnimatedCounter value="8" />+
              </span>
              <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest font-semibold">Credentials</span>
            </div>
            
            <div className="glass-panel spotlight-card p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-1 relative group hover:border-cyan-500/20 transition-all">
              <span className="text-3xl font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                <AnimatedCounter value="5" />+
              </span>
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest font-semibold">Internships</span>
            </div>
            
            <div className="glass-panel spotlight-card p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-1 relative group hover:border-purple-500/20 transition-all">
              <span className="text-3xl font-display font-extrabold text-white group-hover:text-purple-400 transition-colors">
                <AnimatedCounter value="1st" />
              </span>
              <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest font-semibold">Hackathon</span>
            </div>
          </motion.div>

          {/* CTA Buttons with spring transitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-400 hover:to-indigo-500 text-white rounded-full font-display font-bold text-xs tracking-wider uppercase active:scale-95 shadow-[0_10px_30px_-5px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all border border-indigo-400/30 group"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate("about")}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-display font-bold text-xs tracking-wider uppercase border border-white/10 hover:border-white/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <FileText className="w-4 h-4 text-slate-300" />
              Academics & Bio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
