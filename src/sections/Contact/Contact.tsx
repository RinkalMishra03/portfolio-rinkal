import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, RefreshCw, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RINKAL_PROFILE } from "../../data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message })
      });
      const data = await response.json();
      if (response.ok && data && data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        // Reset success state after 5 seconds to allow sending another message if needed
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data?.error || "Failed to deliver message. Please try again later.");
      }
    } catch (err) {
      console.error("Failed to deliver message:", err);
      setError("Operational timeout. Failed to deliver message. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">GET IN TOUCH</span>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Connect & Collaborate
          </h2>
          <p className="text-xs text-slate-500 font-mono">DOCK AN INQUIRY OR START A TECHNICAL DRIVE</p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-2" />
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct channels (5-cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel spotlight-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between gap-8 h-full"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    Contact Channels
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  Have an open software development opportunity, engineering role, or collaboration proposal? Drop a direct message in our digital pipeline!
                </p>
              </div>

              {/* Informational Channel Links */}
              <div className="flex flex-col gap-4 my-4">
                <a
                  href={`mailto:${RINKAL_PROFILE.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#02010c] border border-white/5 hover:border-indigo-500/25 transition-all group spotlight-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all shrink-0">
                    <Mail className="w-4.5 h-4.5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Email Handles</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-1 group-hover:text-indigo-300 transition-colors break-all font-mono">
                      {RINKAL_PROFILE.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${RINKAL_PROFILE.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#02010c] border border-white/5 hover:border-cyan-500/25 transition-all group spotlight-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all shrink-0">
                    <Phone className="w-4.5 h-4.5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Direct Dialer</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-1 group-hover:text-cyan-300 transition-colors font-mono">
                      {RINKAL_PROFILE.phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Verified External Connections */}
              <div className="flex gap-3 border-t border-white/5 pt-6 justify-center">
                <a
                  href={RINKAL_PROFILE.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-5 py-3 rounded-xl bg-[#02010c] border border-white/10 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 hover:border-indigo-500/25 transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub Code
                </a>
                <a
                  href={RINKAL_PROFILE.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-5 py-3 rounded-xl bg-[#02010c] border border-white/10 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 hover:border-indigo-500/25 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Connect
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Glass Form (7-cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel spotlight-card p-8 sm:p-10 rounded-3xl relative h-full flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 relative z-10 h-full justify-between">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Your Name <strong className="text-rose-400">*</strong></label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="glass-input px-4 py-3.5 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Your Email <strong className="text-rose-400">*</strong></label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. johndoe@company.com"
                        className="glass-input px-4 py-3.5 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Contact Number (Optional)</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 99999 99999"
                        className="glass-input px-4 py-3.5 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Subject Topic <strong className="text-rose-400">*</strong></label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Internship Interview Inquiry..."
                        className="glass-input px-4 py-3.5 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Message Text <strong className="text-rose-400">*</strong></label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Draft your detailed coordination or collaborative guidelines here..."
                      className="glass-input p-4 text-xs sm:text-sm h-36 resize-none"
                    />
                  </div>
                </div>

                {/* Submiter controls with status alerts */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 border-t border-white/5 pt-6">
                  
                  {/* Validation feedback alerts */}
                  <div className="text-xs text-left">
                    <AnimatePresence mode="wait">
                      {error && (
                        <motion.div
                          key="error"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-rose-400 flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 p-2 rounded-lg"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {error}
                        </motion.div>
                      )}
                      {success && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-emerald-400 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg font-bold font-mono text-[11px]"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          MESSAGE DELIVERED SUCCESSFULLY!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white rounded-full font-display font-bold text-xs tracking-wider uppercase active:scale-95 shadow-[0_10px_30px_rgba(99,102,241,0.15)] flex items-center justify-center gap-2 cursor-pointer border border-indigo-400/25 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Delivering...
                      </>
                    ) : success ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        DELIVERED
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Deliver Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
