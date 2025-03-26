
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div 
        className="container max-w-6xl px-6 relative z-10"
        style={{
          transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
        }}
      >
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-3 py-1 mb-4 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10 animate-pulse">
            Engenheiro de Computação
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-white/30 rounded-full blur opacity-75 animate-pulse"></div>
              <Avatar className="h-24 w-24 border-2 border-primary shadow-lg relative hover:scale-110 transition-all duration-300">
                <AvatarImage src="/lovable-uploads/dd8a0634-11f3-48d8-a809-f633b0ba1e9d.png" alt="Lukas Chaves" className="object-cover" />
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white hover:scale-105 transition-transform duration-300">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">Lukas Chaves</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/80 to-white/70">de Souza</span>
              </h1>
            </div>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/80 leading-relaxed animate-fade-in">
            Estudante de Engenharia da Computação no IBMEC, com foco em desenvolvimento de software e hardware, 
            especializado em C++, Python e IoT/Visão computacional.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:scale-105"
            >
              Entre em Contato
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 text-white hover:shadow-lg hover:shadow-white/5"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${scrolled ? 'opacity-0' : 'animate-bounce'} hover:animate-none hover:scale-110 transition-all duration-300 text-white/80 hover:text-white bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10`}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-2 w-2 rounded-full bg-white/20 float float-delay-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
