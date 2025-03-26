
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div 
        className="container max-w-6xl px-6 relative z-10"
        style={{
          transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
        }}
      >
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-3 py-1 mb-4 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
            Engenheiro de Computação
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="h-24 w-24 border-2 border-primary shadow-lg animate-pulse">
              <AvatarImage src="/lovable-uploads/dd8a0634-11f3-48d8-a809-f633b0ba1e9d.png" alt="Lukas Chaves" />
              <AvatarFallback>LC</AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white">
              Lukas Chaves<br />de Souza
            </h1>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/80">
            Estudante de Engenharia da Computação no IBMEC, com foco em desenvolvimento de software e hardware, 
            especializado em C++, Python e IoT/Visão computacional.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              Entre em Contato
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-white"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-none hover:scale-110 transition-transform duration-300 text-white/80 hover:text-white bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
