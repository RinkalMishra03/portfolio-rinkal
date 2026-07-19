import { Terminal } from "lucide-react";
import { motion } from "motion/react";

interface LoaderProps {
  title?: string;
  subtitle?: string;
}

export default function Loader({
  title = "Rinkal Mishra",
  subtitle = "Compiling Portfolio Core..."
}: LoaderProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-indigo-500/10 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin" />
          <Terminal className="w-6 h-6 text-indigo-400" />
        </div>

        <div className="text-center mt-2">
          <div className="font-display font-bold text-white text-lg tracking-tight">
            {title}
          </div>
          <div className="text-xs font-mono text-indigo-400 mt-0.5 tracking-wider animate-pulse uppercase">
            {subtitle}
          </div>
        </div>
      </div>
      
      <div className="text-[10px] font-mono text-slate-500 max-w-xs text-left h-12 overflow-hidden leading-tight flex flex-col justify-end">
        <div>&gt; Loading university results database... 100%</div>
        <div>&gt; Verifying Google Cloud Generative AI credentials... OK</div>
        <div>&gt; Syncing portfolio resources... READY</div>
      </div>
    </div>
  );
}
