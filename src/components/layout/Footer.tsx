import { Github, Linkedin, Lock } from "lucide-react";

interface FooterProps {
  onAdminClick: () => void;
}

export default function Footer({ onAdminClick }: FooterProps) {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-12 relative z-10 text-left w-full">
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
            onClick={onAdminClick}
            className="group flex items-center gap-1.5 text-[10px] font-mono text-slate-600 hover:text-indigo-400 transition-colors cursor-pointer border border-transparent hover:border-white/5 px-2.5 py-1.5 rounded-lg"
            title="Secure Administrative Entrance"
          >
            <Lock className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            SECURE_CONSOLE_LOGIN
          </button>
        </div>

      </div>
    </footer>
  );
}
