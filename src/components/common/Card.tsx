import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export default function Card({
  children,
  hoverEffect = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`glass-panel spotlight-card rounded-2xl border border-white/5 bg-slate-950/40 p-6 ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
