import { useState } from "react";
import { Award, ExternalLink, ShieldCheck, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CERTIFICATIONS_DATA } from "../../data/profile";

export default function Certifications() {
  const [selectedIssuer, setSelectedIssuer] = useState<string>("All");

  const issuersList = ["All", "Google Cloud", "Celonis", "Palo Alto Networks", "Zscaler", "EduSkills Academy", "IIT Kharagpur"];

  const filteredCerts = selectedIssuer === "All"
    ? CERTIFICATIONS_DATA
    : CERTIFICATIONS_DATA.filter(cert => cert.issuer === selectedIssuer || (selectedIssuer === "IIT Kharagpur" && cert.issuer.includes("IIT")));

  return (
    <section id="certifications" className="py-32 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">PROFESSIONAL ACCREDITATIONS</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Verified Internships & Certifications
          </h2>
          <p className="text-xs text-slate-500 font-mono">INDUSTRY TRANSCRIPTS & REPUTABLE ALIGNMENTS</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-indigo-400 mx-auto mt-2" />
        </div>

        {/* Dynamic Issuer Filters with sliding active states */}
        <div className="flex flex-wrap justify-center gap-2 mb-20 max-w-5xl mx-auto p-1.5 bg-[#02010c] border border-white/5 rounded-2xl">
          {issuersList.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setSelectedIssuer(issuer)}
              className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-tight transition-all cursor-pointer flex-1 min-w-[140px] text-center ${
                selectedIssuer === issuer
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {issuer}
              {selectedIssuer === issuer && (
                <motion.div
                  layoutId="activeIssuerGlow"
                  className="absolute inset-0 rounded-xl bg-indigo-600/15 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.08)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Interactive Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-12">
          {/* Timeline Center line */}
          <div className="absolute left-3.5 sm:left-5 top-2 bottom-2 w-[1.5px] timeline-line opacity-50" />

          {/* Timeline list containers */}
          <div className="flex flex-col gap-12">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative flex flex-col sm:grid sm:grid-cols-12 gap-6 items-start"
                >
                  {/* Timeline Glowing Node Dot indicator */}
                  <div className="absolute -left-[29px] sm:-left-[37px] top-4 w-4 h-4 rounded-full bg-[#030014] border-2 border-indigo-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 animate-pulse" />
                  </div>

                  {/* Left Column (Metadata: Issuer & Period - 4 cols) */}
                  <div className="sm:col-span-4 flex flex-col gap-1 sm:pt-3 text-left">
                    <div className="px-2.5 py-1 rounded bg-indigo-500/15 border border-indigo-500/20 text-[9px] font-mono text-indigo-300 font-bold uppercase tracking-widest w-fit mb-1.5">
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {cert.duration} ({cert.period})
                    </div>
                    {cert.grade && (
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold mt-1">
                        Grade Earned: {cert.grade}
                      </span>
                    )}
                  </div>

                  {/* Right Column (Detailed Certification Details Card - 8 cols) */}
                  <div className="sm:col-span-8 w-full">
                    <div className="glass-panel spotlight-card p-6 rounded-2xl hover:border-indigo-500/25 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                      
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                            <Award className="w-5 h-5 text-indigo-400" />
                          </div>
                          <h3 className="text-base font-display font-extrabold text-white leading-tight">
                            {cert.title}
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                          <ShieldCheck className="w-3 h-3" />
                          VERIFIED
                        </div>
                      </div>

                      {/* Decription */}
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {cert.description}
                      </p>

                      {/* Skills/Technologies Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {cert.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-indigo-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Technical ID details section */}
                      <div className="p-3 bg-[#02010c] border border-white/5 rounded-xl text-[9px] font-mono text-slate-500 flex flex-col gap-1 mt-2">
                        <div className="flex justify-between">
                          <span>CREDENTIAL ID:</span>
                          <strong className="text-slate-300 font-mono">{cert.certificateId}</strong>
                        </div>
                        {cert.studentId && (
                          <div className="flex justify-between border-t border-white/5 pt-1.5 mt-1">
                            <span>STUDENT ID:</span>
                            <strong className="text-slate-300 font-mono">{cert.studentId}</strong>
                          </div>
                        )}
                      </div>

                      {/* Real links to certifications */}
                      {cert.verificationLink && (
                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="w-full mt-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/20 rounded-xl text-center text-xs font-bold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer group"
                        >
                          Verify Academic Credential
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
