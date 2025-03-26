
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      <div className="container max-w-6xl px-6 relative z-10">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-3 py-1 mb-4 bg-black/5 backdrop-blur-sm rounded-full text-sm font-medium">
            Engenheiro de Computação
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
            Lukas Chaves<br />de Souza
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
            Estudante de Engenharia da Computação no IBMEC, com foco em desenvolvimento de software e hardware, 
            especializado em C++, Python e IoT/Visão computacional.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm"
            >
              Entre em Contato
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-transparent border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors duration-300"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-none hover-lift"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
