
import { useState, useEffect, useRef } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const experience = {
    role: "Estagiário Suporte técnico",
    company: "Universidade Veiga de Almeida",
    period: "Maio/2023 a Agosto/2023",
    description: [
      "Suporte na manutenção de equipamentos, corrigindo problemas e falhas relatados por alunos e colaboradores.",
      "Configuração de softwares, apoiando os usuários e a empresa no melhor uso de suas ferramentas.",
      "Elaboração de relatórios e dashboards para facilitar a tomada de decisão da gerência."
    ]
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10">
      <div className="section-container">
        <h2 className="section-heading">Experiência Profissional</h2>
        
        <div 
          ref={containerRef}
          className={`relative bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-xl transition-all duration-1000 reveal-on-scroll ${
            inView ? 'animate-reveal' : ''
          }`}
        >
          {/* Animated background elements */}
          <div className="absolute -top-5 -right-5 h-32 w-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-xl animate-pulse opacity-50"></div>
          <div className="absolute -bottom-5 -left-5 h-24 w-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl animate-pulse opacity-30" style={{ animationDelay: "1.5s" }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur animate-pulse"></div>
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mr-5 relative z-10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold group">
                  <span className="bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-white via-white/90 to-white/80 transition-all duration-500">
                    {experience.role}
                  </span>
                </h3>
                <p className="text-muted-foreground">
                  {experience.company} | {experience.period}
                </p>
              </div>
            </div>
            
            <ul className="space-y-4 mt-6">
              {experience.description.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start group transition-all duration-500 opacity-0 ${
                    inView ? 'animate-reveal' : ''
                  }`} 
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Animated particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute h-1 w-1 rounded-full bg-white/30 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transitionDelay: `${i * 0.2}s`,
                animation: `float ${4 + i % 3}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
