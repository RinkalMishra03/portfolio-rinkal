import React, { useState } from "react";
import { Terminal, X, RefreshCw, Mail, Calendar, MessageSquare, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface AdminConsoleProps {
  onClose: () => void;
}

interface AdminMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminConsole({ onClose }: AdminConsoleProps) {
  const [messages, setMessages] = useState<AdminMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/messages");
      const data = await response.json();
      if (Array.isArray(data)) {
        setMessages(data);
      } else {
        setError("Failed to compile administrative feeds.");
      }
    } catch (err) {
      console.error("Failed to fetch admin messages:", err);
      setError("Failed to compile administrative feeds.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified credential gate for recruiters to evaluate instantly without typing complex keys
    if (password.toLowerCase() === "admin") {
      setIsAuthenticated(true);
      fetchMessages();
    } else {
      setError("Unauthorized access code.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-4xl bg-slate-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-left"
      >
        {/* Console Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-slate-900 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <span className="font-mono text-xs text-indigo-300 font-bold uppercase tracking-wider">
              Secure Administrative Core
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Authenticate Shell */}
        {!isAuthenticated ? (
          <div className="p-8 flex flex-col items-center justify-center gap-6 min-h-[300px]">
            <ShieldAlert className="w-12 h-12 text-indigo-400 animate-pulse" />
            <div className="text-center">
              <h4 className="text-base font-display font-semibold text-white">Administrative Portal Access</h4>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Enter credential code <strong className="text-indigo-400 font-mono">admin</strong> to audit submitted contact list feeds live.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="flex gap-2 w-full max-w-sm">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin code..."
                className="flex-1 glass-input px-4 py-3 text-xs sm:text-sm font-mono text-center tracking-widest bg-black/50 border border-white/10 rounded-xl"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-xs font-semibold text-white cursor-pointer transition-all border border-indigo-400/25"
              >
                Access
              </button>
            </form>
            {error && <span className="text-xs text-rose-400 mt-1">{error}</span>}
          </div>
        ) : (
          /* Live Message Feed Container */
          <div className="flex-1 overflow-hidden flex flex-col">
            
            {/* Control Bar */}
            <div className="px-6 py-3 bg-black/40 border-b border-white/5 flex justify-between items-center shrink-0 text-xs text-slate-400 font-mono">
              <span>Auditing Message Feeds ({messages.length})</span>
              <button
                onClick={fetchMessages}
                disabled={loading}
                className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>

            {/* List log */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {loading && messages.length === 0 ? (
                <div className="flex items-center justify-center min-h-[160px] text-slate-400 gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-indigo-400" />
                  Loading message feeds...
                </div>
              ) : messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[160px] text-slate-500 gap-2 font-mono text-xs">
                  <MessageSquare className="w-8 h-8 opacity-25" />
                  No messages submitted yet. Submit a message via the Contact Form to test!
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/10 transition-all flex flex-col gap-3 text-left"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-3">
                      <div>
                        <div className="text-sm font-semibold text-white">{msg.name}</div>
                        <div className="text-xs text-indigo-300 font-mono flex items-center gap-1 mt-0.5">
                          <Mail className="w-3.5 h-3.5 text-indigo-400" />
                          {msg.email}
                          {msg.phone && <span className="text-slate-500 ml-1">| Tel: {msg.phone}</span>}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1 shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(msg.createdAt).toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-indigo-300 uppercase tracking-wide">Subject</div>
                      <div className="text-xs font-semibold text-slate-200 mt-0.5">{msg.subject}</div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">Message</div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
}
