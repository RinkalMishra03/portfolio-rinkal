import { useState, useEffect, useRef } from "react";
import { Terminal, Github, Linkedin, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Navbar } from "./components/layout";
import { 
  Hero, About, Skills, Certifications, 
  Projects, Achievements, ResumeHub, Contact 
} from "./sections";
import { AdminConsole } from "./components/common";

import { RINKAL_PROFILE } from "./data/profile";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [showAdmin, setShowAdmin] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update reading progress bar, active section and mouse spotlight
  useEffect(() => {
    // Simulate premium system core load sequence
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    const handleScroll = () => {
      // 1. Reading Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Active Section Tracking
      const sections = ["hero", "about", "skills", "certifications", "projects", "achievements", "resume", "contact"];
      const scrollPosition = window.scrollY + 250; // offset for triggers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans overflow-hidden"
    >
      {/* Dynamic Drifting Aurora Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Aurora Blob 1 - Indigo */}
        <div className="aurora-blob-1 absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-indigo-600/10 pointer-events-none mix-blend-screen" />
        {/* Aurora Blob 2 - Cyan */}
        <div className="aurora-blob-2 absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/5 pointer-events-none mix-blend-screen" />
        {/* Aurora Blob 3 - Purple/Magenta */}
        <div className="aurora-blob-1 absolute bottom-[15%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 pointer-events-none mix-blend-screen" />
        
        {/* Global Spotlight pointer spotlight layer */}
        <div 
          className="absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: "radial-gradient(1000px circle at var(--mouse-x, 50vw) var(--mouse-y, 30vh), rgba(99, 102, 241, 0.05) 0%, rgba(192, 132, 252, 0.02) 40%, transparent 80%)",
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 premium-grid z-20 opacity-70" />
      </div>
      
      {/* 1. Dynamic Startup System Loader Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6"
          >
            <div className="flex flex-col items-center gap-3">
              {/* Spinning technical core */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-indigo-500/10 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin" />
                <Terminal className="w-6 h-6 text-indigo-400" />
              </div>

              <div className="text-center mt-2">
                <div className="font-display font-bold text-white text-lg tracking-tight">
                  Rinkal Mishra
                </div>
                <div className="text-xs font-mono text-indigo-400 mt-0.5 tracking-wider animate-pulse uppercase">
                  Compiling Portfolio Core...
                </div>
              </div>
            </div>
            
            {/* Mock console logs to feel incredibly tech-forward */}
            <div className="text-[10px] font-mono text-slate-500 max-w-xs text-left h-12 overflow-hidden leading-tight flex flex-col justify-end">
              <div>&gt; Loading university results database... 100%</div>
              <div>&gt; Verifying Google Cloud Generative AI credentials... OK</div>
              <div>&gt; Syncing portfolio resources... READY</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Canvas (visible after load) */}
      {!isLoading && (
        <div className="relative z-10 flex flex-col min-h-screen">
          
          {/* 2. Top Reading Progress Bar */}
          <div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 z-[60] transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* 3. Navigation Bar */}
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

          {/* 4. Portfolio Sections */}
          <main className="flex-1">
            <Hero onNavigate={handleNavigate} />
            <About />
            <Skills />
            <Certifications />
            <Projects />
            <Achievements />
            <ResumeHub />
            <Contact />
          </main>

          {/* 5. Highly Premium Footer with Hidden Admin Door */}
          <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-12 relative z-10 text-left">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Group (Brand & Copy) */}
              <div className="md:col-span-6 flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="font-display font-bold text-white tracking-tight">Rinkal Mishra</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-sans">
                  The official personal brand and digital identity of Rinkal Mishra. Developed in React and Node with full-stack Gemini API integrations.
                </p>
                <div className="text-[10px] font-mono text-slate-600 mt-2">
                  © 2026 Rinkal Mishra. All rights reserved.
                </div>
              </div>

              {/* Right Group (Quick Handles & Admin Entrance) */}
              <div className="md:col-span-6 flex flex-col items-start md:items-end gap-5">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/RinkalMishra03"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 text-slate-400 hover:text-white transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rinkal-mishra-674a14374"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 text-slate-400 hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Hidden door to secure admin message audit */}
                <button
                  onClick={() => setShowAdmin(true)}
                  className="group flex items-center gap-1.5 text-[10px] font-mono text-slate-600 hover:text-indigo-400 transition-colors cursor-pointer border border-transparent hover:border-white/5 px-2.5 py-1.5 rounded-lg"
                  title="Secure Administrative Entrance"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                  SECURE_CONSOLE_LOGIN
                </button>
              </div>

            </div>
          </footer>

          {/* 6. Admin Panel Overlay Modal */}
          <AnimatePresence>
            {showAdmin && (
              <AdminConsole onClose={() => setShowAdmin(false)} />
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
