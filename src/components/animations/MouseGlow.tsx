import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
      style={{
        background: "radial-gradient(1000px circle at var(--mouse-x, 50vw) var(--mouse-y, 30vh), rgba(99, 102, 241, 0.05) 0%, rgba(192, 132, 252, 0.02) 40%, transparent 80%)",
      }}
    />
  );
}
