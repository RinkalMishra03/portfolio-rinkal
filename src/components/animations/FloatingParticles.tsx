import { useEffect, useRef } from "react";

interface FloatingParticlesProps {
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
}

export default function FloatingParticles({
  quantity = 40,
  staticity = 50,
  ease = 50,
  color = "129, 140, 248" // indigo color in rgb format
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    if (canvasRef.current) {
      initCanvas();
    }
    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouse.current.x = x;
      mouse.current.y = y;
    }
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    }
  };

  const createParticle = (): any => {
    const x = Math.random() * canvasSize.current.w;
    const y = Math.random() * canvasSize.current.h;
    const translateX = 0;
    const translateY = 0;
    const size = Math.random() * 2 + 0.5;
    const alpha = 0;
    const targetAlpha = Math.random() * 0.6 + 0.1;
    const dx = (Math.random() - 0.5) * 0.15;
    const dy = (Math.random() - 0.5) * 0.15;
    const magnetism = 0.1 + Math.random() * 4;
    return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism };
  };

  const drawParticles = () => {
    particles.current = [];
    for (let i = 0; i < quantity; i++) {
      particles.current.push(createParticle());
    }
    
    let animationFrameId: number;
    const render = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        
        particles.current.forEach((p, idx) => {
          const mx = mouse.current.x;
          const my = mouse.current.y;
          const dx = mx - (p.x + p.translateX);
          const dy = my - (p.y + p.translateY);
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.translateX += (dx / dist) * force * p.magnetism * 0.1;
            p.translateY += (dy / dist) * force * p.magnetism * 0.1;
          } else {
            p.translateX *= 0.98;
            p.translateY *= 0.98;
          }

          p.x += p.dx;
          p.y += p.dy;

          if (p.alpha < p.targetAlpha) {
            p.alpha += 0.01;
          }

          if (p.x < 0 || p.x > canvasSize.current.w) p.dx = -p.dx;
          if (p.y < 0 || p.y > canvasSize.current.h) p.dy = -p.dy;

          ctx.beginPath();
          ctx.arc(p.x + p.translateX, p.y + p.translateY, p.size, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
          ctx.fill();
        });
      }
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationFrameId);
  };

  return (
    <div ref={canvasContainerRef} className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="opacity-70" />
    </div>
  );
}
