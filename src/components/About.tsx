
import { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Link as LinkIcon, User, ThumbsUp, ChevronRight } from 'lucide-react';
import AnimatedLink from './AnimatedLink';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const contactInfo = [
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: "Celular", 
      value: "(21) 99634-8228", 
      href: "tel:+5521996348228" 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "E-mail", 
      value: "lukascasd@gmail.com", 
      href: "mailto:lukascasd@gmail.com" 
    },
    { 
      icon: <LinkIcon className="h-5 w-5" />, 
      label: "GitHub", 
      value: "github.com/lukasrozado", 
      href: "https://github.com/lukasrozado" 
    },
    { 
      icon: <LinkIcon className="h-5 w-5" />, 
      label: "LinkedIn", 
      value: "www.linkedin.com/in/lukas-souza2", 
      href: "https://www.linkedin.com/in/lukas-souza2" 
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      label: "Localização", 
      value: "Jacarepaguá, RJ", 
      href: "https://maps.app.goo.gl/TsH9AZJ4VKGiqZ9PA" 
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 relative z-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 h-64 w-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <h2 className="section-heading text-white">
          <span className="relative inline-block">
            Sobre Mim
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-xl transition-all duration-700 hover:shadow-2xl hover:bg-white/15 card-3d ${
            isVisible ? 'animate-reveal' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-white/80" />
              </div>
              <h3 className="text-xl font-semibold text-white">Perfil Profissional</h3>
            </div>
            
            <p className="text-lg leading-relaxed text-white/90 relative">
              <span className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent rounded"></span>
              Estudante de Engenharia da Computação no IBMEC, com sólida base em desenvolvimento de 
              software e hardware. Experiência em Python, com projeto de reconhecimento de emoções 
              através de ruborização facial.
            </p>
            
            <p className="text-lg leading-relaxed text-white/90 relative">
              <span className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded"></span>
              Prática em C++ para Programação Orientada a Objetos e em C, programando Arduinos para 
              detecção de presença e calor usando sensores. Atualmente me especializando em C++, 
              com foco em IOT/Visão computacional e Python para análise de dados.
            </p>
            
            <div className="flex items-center pt-4 text-white/80">
              <ThumbsUp className="h-5 w-5 mr-2" />
              <p className="text-white/90">
                <span className="font-semibold">Idiomas:</span> Inglês (Avançado)
              </p>
            </div>
            
            {/* Decorative orbs */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-white/30 animate-pulse opacity-0"
                style={{
                  left: `${20 + Math.random() * 80}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${2 + i}s`,
                  opacity: isVisible ? 0.6 : 0
                }}
              />
            ))}
          </div>
          
          <div className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'animate-reveal' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
              <span className="relative">
                Informações de Contato
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></span>
              </span>
            </h3>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className={`group transition-all duration-500 ${
                  isVisible ? 'animate-reveal' : 'opacity-0 translate-x-10'
                }`} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <a 
                    href={info.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group-hover:border-white/20"
                  >
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{info.label}</p>
                      <p className="font-medium text-white">{info.value}</p>
                    </div>
                    <div className="ml-auto transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
