import { useState, useEffect } from "react";
import { Menu, X, Terminal, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Academics" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certs" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Honors" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6"
      >
        <div className={`mx-auto px-6 max-w-7xl w-full flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? "bg-[#080618]/65 backdrop-blur-xl border border-white/5 py-4 px-8 rounded-full shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),0_0_30px_rgba(99,102,241,0.05)] max-w-5xl" 
            : "bg-transparent"
        }`}>
          {/* Brand/Logo Identity */}
          <button
            onClick={() => handleItemClick("hero")}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-400 group-hover:bg-indigo-500/20 flex items-center justify-center transition-all duration-300">
              <Terminal className="w-5 h-5 text-indigo-400 group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                Rinkal Mishra
              </div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                B.E. IT | PORTFOLIO
              </div>
            </div>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-[#02010c]/40 border border-white/5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold font-sans tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-full bg-indigo-500/10 border border-indigo-500/20 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side: Social Handles & Hire Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/RinkalMishra03"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/rinkal-mishra-674a14374"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <button
              onClick={() => handleItemClick("contact")}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-display font-bold text-[11px] uppercase tracking-wider rounded-full shadow-[0_10px_20px_-5px_rgba(99,102,241,0.2)] active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-indigo-400/25 shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-24 left-6 right-6 z-40 lg:hidden p-6 border border-white/5 bg-[#080618]/95 backdrop-blur-xl rounded-2xl flex flex-col gap-5 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-3 text-left text-sm font-semibold rounded-xl transition-all ${
                    activeSection === item.id
                      ? "bg-indigo-500/10 text-indigo-300 border-l-2 border-indigo-500"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-[1px] bg-white/5" />

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href="https://github.com/RinkalMishra03"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-3 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/5"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/rinkal-mishra-674a14374"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-3 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/5"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => handleItemClick("contact")}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-lg"
              >
                Let's Collaborate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
