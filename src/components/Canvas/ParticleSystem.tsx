import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

export const ParticleSystem = ({ 
  scrollProgress, 
  theme = 'health' 
}: { 
  scrollProgress: number;
  theme?: 'health' | 'education' | 'happiness' | 'environment';
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const colors = {
    health: ['#ef4444', '#f87171', '#fca5a5'],
    education: ['#3b82f6', '#60a5fa', '#93c5fd'],
    happiness: ['#f59e0b', '#fbbf24', '#fcd34d'],
    environment: ['#10b981', '#34d399', '#6ee7b7']
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = () => {
      const themeColors = colors[theme];
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        life: 0,
        maxLife: 120 + Math.random() * 60,
        color: themeColors[Math.floor(Math.random() * themeColors.length)]
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles based on scroll progress
      const particleSpawnRate = scrollProgress * 10;
      if (Math.random() < particleSpawnRate / 100) {
        particlesRef.current.push(createParticle());
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const alpha = 1 - (particle.life / particle.maxLife);
        if (alpha <= 0) return false;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = alpha * scrollProgress;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2 + Math.sin(particle.life * 0.1), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return particle.y > -10 && particle.life < particle.maxLife;
      });

      // Draw connecting lines between nearby particles
      if (scrollProgress > 0.3) {
        ctx.save();
        ctx.globalAlpha = 0.3 * scrollProgress;
        ctx.strokeStyle = colors[theme][0];
        ctx.lineWidth = 1;

        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress, theme]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0.1 ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};