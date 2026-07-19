import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "cyan" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-xl cursor-pointer select-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/10 border border-indigo-500/30",
    secondary: "bg-[#0c0a24] hover:bg-[#14103c] text-white border border-white/5 hover:border-indigo-500/20",
    cyan: "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/10 border border-cyan-500/30",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
    danger: "bg-rose-600 hover:bg-rose-500 text-white border border-rose-500/30"
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
