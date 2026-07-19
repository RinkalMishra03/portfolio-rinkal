import MouseGlow from "./MouseGlow";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Blob 1 - Indigo */}
      <div className="aurora-blob-1 absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-indigo-600/10 pointer-events-none mix-blend-screen" />
      {/* Aurora Blob 2 - Cyan */}
      <div className="aurora-blob-2 absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/5 pointer-events-none mix-blend-screen" />
      {/* Aurora Blob 3 - Purple/Magenta */}
      <div className="aurora-blob-1 absolute bottom-[15%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 pointer-events-none mix-blend-screen" />
      
      {/* Dynamic Mouse Spotlight Hover effect */}
      <MouseGlow />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 premium-grid z-20 opacity-70" />
    </div>
  );
}
