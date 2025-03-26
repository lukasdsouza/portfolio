
import { useState } from 'react';
import { Code, Eye, Github } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
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

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10">
      <div className="section-container">
        <h2 className="section-heading">Projetos</h2>
        
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Project Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-y-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-5 py-4 text-left whitespace-nowrap md:whitespace-normal rounded-lg transition-all duration-500 ${
                  activeProject === index 
                    ? 'bg-primary/10 shadow-lg border border-primary/30 scale-[1.02]' 
                    : 'bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="font-medium text-lg">{project.title}</div>
                <div className="text-sm text-muted-foreground">{project.subtitle}</div>
              </button>
            ))}
          </div>
          
          {/* Project Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  {projects[activeProject].title}
                </h3>
                <p className="text-lg text-white/80">
                  {projects[activeProject].description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Funcionalidades principais:</h4>
                  <ul className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start group">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="group-hover:text-primary transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-3">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {projects[activeProject].repo && (
                  <div className="pt-4">
                    <a 
                      href={projects[activeProject].repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 transition-all duration-300 rounded-lg group"
                    >
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Ver repositório</span>
                    </a>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-center h-full">
                <div className="w-full h-full max-h-80 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Code className="h-24 w-24 text-white/30 group-hover:scale-90 transition-transform duration-300" />
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
