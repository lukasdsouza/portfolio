
import { useState } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      role: "Estagiário Suporte técnico",
      company: "Universidade Veiga de Almeida",
      period: "Maio/2023 a Agosto/2023",
      description: [
        "Suporte na manutenção de equipamentos, corrigindo problemas e falhas relatados por alunos e colaboradores.",
        "Configuração de softwares, apoiando os usuários e a empresa no melhor uso de suas ferramentas.",
        "Elaboração de relatórios e dashboards para facilitar a tomada de decisão da gerência."
      ]
    },
    {
      role: "Projeto: Lixeira Inteligente",
      company: "Monitoramento Automatizado de Resíduos",
      period: "2023",
      description: [
        "Desenvolvimento de sistema para monitorar o nível de lixo em uma lixeira utilizando sensor ultrassônico HC-SR04, LEDs e buzzer.",
        "Implementação de comunicação via MQTT para envio de alertas e monitoramento remoto.",
        "O sistema detecta o nível de enchimento, acionando sinais visuais e sonoros conforme a capacidade."
      ]
    },
    {
      role: "Projeto: Visão Computacional",
      company: "Reconhecimento de Expressões Faciais",
      period: "2024",
      description: [
        "Sistema que utiliza algoritmos de Visão Computacional como YOLOv9 e Haar Cascade para reconhecimento de expressões faciais.",
        "Capacidade de detecção de até 3 pessoas simultaneamente.",
        "Para o compartilhamento de dados foi utilizado protocolo MQTT.",
        "Link do repositório: github.com/mariaclaudiafreitas/Projeto-Reconhecimento-do-comportamento-humano"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading">Experiência Profissional</h2>
        
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal rounded-lg transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-white shadow-md border border-gray-200' 
                    : 'hover:bg-white/50'
                }`}
              >
                <div className="font-medium">{exp.company}</div>
                <div className="text-sm text-muted-foreground">{exp.role}</div>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  {experiences[activeTab].role}
                </h3>
                <p className="text-muted-foreground">
                  {experiences[activeTab].company} | {experiences[activeTab].period}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
