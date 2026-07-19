import { useState } from "react";
import { FileText, Printer, Copy, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { RINKAL_PROFILE, CERTIFICATIONS_DATA, PROJECTS_DATA } from "../../data/profile";

export default function ResumeHub() {
  const [copied, setCopied] = useState(false);

  // Recruiter quick pitch brief to easily copy and paste to HR systems
  const recruiterPitch = `Candidate Profile: Rinkal Radheraman Mishra
Role Focus: Aspiring Software Engineer | B.E. IT (APSIT, University of Mumbai)
Contact: ${RINKAL_PROFILE.email} | ${RINKAL_PROFILE.phone}
Education: B.E. IT CGPA Semester Highlights: Sem III 8.57, Sem IV 8.14, Sem V 8.30 (Top Class)
Selected Project: AI-Driven Smart Event Management & Analytics (React, FastAPI, Python, Gemini API OCR)
Verified Internships: Google Cloud GenAI (10 Weeks), Celonis Business Analyst (8 Weeks), Zscaler Zero Trust Cloud Security (10 Weeks)
Top Skills: Java, Python, SQL, ReactJS, FastAPI, Django, Computer Networks & Cybersecurity
GitHub Codebase: ${RINKAL_PROFILE.github}
LinkedIn Connect: ${RINKAL_PROFILE.linkedin}`;

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(recruiterPitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-32 relative overflow-hidden text-left print:py-0 print:my-0">
      <div className="max-w-7xl mx-auto px-6 relative z-10 print:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto print:hidden">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">RECRUITER INTERFACE</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Resume / CV Portal
          </h2>
          <p className="text-xs text-slate-500 font-mono">DOCK A COPIED BRIEF OR CONTEXTUALIZE ACADEMIC ARTIFACTS</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-2" />
        </div>

        {/* Dual Layout: Recruiter Briefcase and Detailed Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto print:block">
          
          {/* Left Column: Actions & Recruiter Toolbox (5-cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 print:hidden">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel spotlight-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between gap-6 h-full"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">
                    Recruiter Console
                  </h3>
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Instantly access Rinkal's formatted transcripts and candidate dossier. You can download her resume brief, trigger a standard web printer, or copy her ready-to-use profile overview directly to your ATS.
                </p>
              </div>

              {/* Toolbox Action Buttons */}
              <div className="flex flex-col gap-3.5 my-4">
                
                {/* PDF Print/Save */}
                <button
                  onClick={handlePrint}
                  className="w-full py-4 px-5 bg-[#02010c] hover:bg-white/5 border border-white/10 hover:border-indigo-500/20 rounded-2xl text-left text-xs font-bold text-slate-200 hover:text-white flex items-center justify-between transition-all cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <Printer className="w-4.5 h-4.5 text-indigo-400" />
                    Print / Export CV as PDF
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 font-bold">PRINT</span>
                </button>

                {/* Direct copy profile quick pitch */}
                <button
                  onClick={handleCopyPitch}
                  className="w-full py-4 px-5 bg-indigo-600/10 hover:bg-indigo-600/15 border border-indigo-500/20 hover:border-indigo-500/40 rounded-2xl text-left text-xs font-bold text-indigo-200 hover:text-white flex items-center justify-between transition-all cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <Copy className="w-4.5 h-4.5 text-indigo-400" />
                    Copy Candidate ATS Pitch
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold">
                    {copied ? "COPIED!" : "COPY"}
                  </span>
                </button>
              </div>

              {/* Recruitment System Note */}
              <div className="p-4 bg-[#02010c]/80 border border-white/5 rounded-2xl">
                <div className="flex gap-3 items-start">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider font-extrabold block">System Verification</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-mono mt-1">
                      Academic scores, semester results, and Google Cloud + Celonis credentials listed inside this digital portfolio have been audited and verified via official credential codes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: CV Preview Panel (7-cols) */}
          <div className="lg:col-span-7 print:w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 flex flex-col gap-8 h-full bg-[#03010f]/95 shadow-2xl relative overflow-hidden print:p-0 print:border-none print:bg-transparent print:shadow-none"
            >
              {/* Printable Header Profile info */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-white/5 print:border-slate-300 print:text-black">
                <div className="text-left">
                  <h3 className="text-2xl font-display font-extrabold text-white tracking-tight print:text-slate-900">
                    {RINKAL_PROFILE.fullName}
                  </h3>
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider print:text-indigo-600 block mt-1">
                    {RINKAL_PROFILE.title}
                  </span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2 text-[10px] font-mono text-slate-400 print:text-slate-600">
                    <span>{RINKAL_PROFILE.email}</span>
                    <span>{RINKAL_PROFILE.phone}</span>
                    <span>{RINKAL_PROFILE.location}</span>
                  </div>
                </div>
                
                <div className="px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider shrink-0 print:hidden">
                  Candidate Dossier
                </div>
              </div>

              {/* Core summary / brief */}
              <div className="flex flex-col gap-2.5 text-left">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold print:text-indigo-600 print:font-bold">Education Matriculation</span>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <strong className="text-white print:text-slate-800 font-bold">{RINKAL_PROFILE.education[0].institution}</strong>
                    <span className="text-[10px] font-mono text-indigo-300 print:text-indigo-600 font-bold">{RINKAL_PROFILE.education[0].period}</span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-slate-600 font-sans leading-relaxed">
                    {RINKAL_PROFILE.education[0].degree} — {RINKAL_PROFILE.education[0].university}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold print:text-cyan-600">
                    Average SGPI: 8.34 across Winter and Summer Sessions
                  </div>
                </div>
              </div>

              {/* Top Projects */}
              <div className="flex flex-col gap-4 text-left border-t border-white/5 pt-6 print:border-slate-300 print:text-black">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold print:text-indigo-600 print:font-bold">Key Project Achievements</span>
                <div className="flex flex-col gap-5">
                  {PROJECTS_DATA.slice(0, 2).map((proj) => (
                    <div key={proj.id} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <strong className="text-white text-xs sm:text-sm print:text-slate-800 font-bold">{proj.title}</strong>
                        <span className="text-[10px] font-mono text-slate-500 font-bold">{proj.technologies.slice(0, 3).join(", ")}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 print:text-slate-600 font-sans leading-relaxed">
                        {proj.shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internships List */}
              <div className="flex flex-col gap-4 text-left border-t border-white/5 pt-6 print:border-slate-300 print:text-black">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold print:text-indigo-600 print:font-bold">Verified Internships</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {CERTIFICATIONS_DATA.slice(0, 4).map((cert) => (
                    <div key={cert.id} className="flex flex-col gap-1">
                      <strong className="text-white text-[11px] print:text-slate-800 font-bold leading-tight">{cert.title}</strong>
                      <div className="flex justify-between text-[10px] font-mono text-slate-400 print:text-slate-600">
                        <span>{cert.issuer}</span>
                        <span>{cert.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruiter Call Out inside CV view */}
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex justify-between items-center mt-2 print:hidden">
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Full Portfolio Ready for Export</div>
                  <span className="text-[10px] font-mono text-slate-500">Includes all verify badges & results</span>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold font-display cursor-pointer transition-colors"
                >
                  Export Portfolio PDF
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
