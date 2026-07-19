import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: ReactNode;
  align?: "center" | "left";
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  badgeIcon,
  align = "center"
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  
  return (
    <div className={`flex flex-col gap-4 mb-16 max-w-3xl ${alignmentClass}`}>
      {badge && (
        <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold flex items-center gap-2">
          {badgeIcon || <Sparkles className="w-4 h-4 animate-pulse text-indigo-400" />}
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-2 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
