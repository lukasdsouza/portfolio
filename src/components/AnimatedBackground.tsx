
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Particle system
    const particleCount = 100;
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      life: number;
      opacity: number;
      direction: number;
      velocity: number;
    }[] = [];

    const colors = ['#333333', '#444444', '#555555', '#666666'];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 100 + 50;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          life: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.08 + 0.03,
          direction: Math.random() * Math.PI * 2,
          velocity: 0.05 + Math.random() * 0.1
        });
      }
    };
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      // Clear canvas with background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Move particles with fluid-like motion
        p.direction += (Math.random() - 0.5) * 0.05;
        p.x += Math.cos(p.direction) * p.velocity;
        p.y += Math.sin(p.direction) * p.velocity;
        
        // Adjust speed based on position for fluid effect
        p.speedX += (Math.random() - 0.5) * 0.01;
        p.speedY += (Math.random() - 0.5) * 0.01;
        p.speedX *= 0.99;
        p.speedY *= 0.99;
        
        // Ensure particles stay within boundaries with soft edge behavior
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;
        
        // Create fluid gradient effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(120, 120, 120, ${p.opacity * p.life})`);
        gradient.addColorStop(0.5, `rgba(80, 80, 80, ${p.opacity * p.life * 0.6})`);
        gradient.addColorStop(1, 'rgba(30, 30, 30, 0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add connection lines between close particles for web effect
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 100, 100, ${0.02 * (1 - distance / 200)})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AnimatedBackground;
