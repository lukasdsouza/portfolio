
import { useState, useEffect, useRef } from 'react';
import { Code, Eye, Github, ArrowRight, ArrowLeft } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects = [
    {
      title: "Lixeira Inteligente",
      subtitle: "Monitoramento Automatizado de Resíduos",
      description: "Sistema IoT de monitoramento de nível de lixo utilizando sensor ultrassônico HC-SR04, LEDs e buzzer. O dispositivo detecta a quantidade de resíduos em tempo real, fornecendo alertas visuais e sonoros quando a lixeira atinge capacidades predefinidas (50%, 80% e 100%).",
      features: [
        "Monitoramento em tempo real do nível de enchimento",
        "Alertas visuais (LEDs) e sonoros (buzzer) para níveis críticos",
        "Comunicação MQTT para envio de dados para monitoramento remoto",
        "Interface de dashboard para visualização de estatísticas de enchimento",
        "Otimização de rotas de coleta baseada nos dados de enchimento"
      ],
      technologies: ["Arduino", "C/C++", "MQTT", "IoT", "Sensores ultrassônicos"],
      image: "/lixeira-project.svg"
    },
    {
      title: "Visão Computacional",
      subtitle: "Reconhecimento de Expressões Faciais",
      description: "Sistema avançado de visão computacional capaz de identificar e analisar expressões faciais de até 3 pessoas simultaneamente. Utilizando algoritmos como YOLOv9 e Haar Cascade, o sistema detecta e classifica emoções em tempo real.",
      features: [
        "Detecção facial múltipla com rastreamento simultâneo",
        "Classificação de expressões emocionais (alegria, tristeza, surpresa, raiva, etc.)",
        "Análise de ruborização facial para detecção de emoções sutis",
        "Processamento de stream de vídeo em tempo real",
        "Integração MQTT para compartilhamento de dados processados"
      ],
      technologies: ["Python", "YOLOv9", "Haar Cascade", "OpenCV", "MQTT", "Machine Learning"],
      repo: "https://github.com/mariaclaudiafreitas/Projeto-Reconhecimento-do-comportamento-humano",
      image: "/vision-project.svg"
    }
  ];

  useEffect(() => {
    // Add mouse parallax effect to project cards
    const handleMouseMove = (e: MouseEvent) => {
      projectRefs.current.forEach(ref => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        ref.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
    };
    
    const handleMouseLeave = () => {
      projectRefs.current.forEach(ref => {
        if (!ref) return;
        ref.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10 reveal-on-scroll">
      <div className="section-container">
        <h2 className="section-heading">Projetos</h2>
        
        <div className="relative">
          {/* Project Navigation */}
          <div className="flex justify-between mb-8">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-2">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveProject(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`px-5 py-4 text-left rounded-lg transition-all duration-500 ${
                    activeProject === index 
                      ? 'bg-primary/10 shadow-lg shadow-primary/20 border border-primary/30 scale-[1.02]' 
                      : 'bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <div className="font-medium text-lg">{project.title}</div>
                  <div className="text-sm text-muted-foreground">{project.subtitle}</div>
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={prevProject} 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextProject} 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Next project"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Project Content */}
          <div 
            ref={el => projectRefs.current[activeProject] = el}
            className={`bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-xl transition-all duration-500 card-3d ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 relative">
                {/* Animated decoration elements */}
                <div className="absolute -top-4 -left-4 h-20 w-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-pulse opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-xl animate-pulse opacity-50" style={{ animationDelay: "1s" }}></div>
                
                <h3 className="text-2xl font-semibold text-white relative z-10 group">
                  <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-white via-white/90 to-white/80 transition-all duration-500">
                    {projects[activeProject].title}
                  </span>
                  <div className="absolute -inset-1 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-transparent blur-lg"></div>
                </h3>
                
                <p className="text-lg text-white/80 relative z-10 leading-relaxed animate-fade-in reveal">
                  {projects[activeProject].description}
                </p>
                
                <div className="space-y-4 relative z-10 reveal reveal-delay-1">
                  <h4 className="text-lg font-medium animate-shimmer">Funcionalidades principais:</h4>
                  <ul className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start group transition-all duration-300 animate-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="group-hover:text-primary transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="reveal reveal-delay-2">
                  <h4 className="text-lg font-medium mb-3 animate-shimmer">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-300 animate-reveal"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {projects[activeProject].repo && (
                  <div className="pt-4 reveal reveal-delay-3">
                    <a 
                      href={projects[activeProject].repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 transition-all duration-300 rounded-lg group animate-border"
                    >
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Ver repositório</span>
                    </a>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-center h-full">
                <div className="w-full h-full max-h-80 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden group relative hover-glow">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated particles */}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-1 w-1 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transitionDelay: `${i * 0.05}s`,
                        animation: `float ${3 + i % 4}s ease-in-out infinite`
                      }}
                    />
                  ))}
                  
                  <Code className="h-24 w-24 text-white/30 group-hover:scale-90 transition-transform duration-300 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
