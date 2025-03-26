
import { useState } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      role: "Engenheiro Suporte técnico",
      company: "Quantativa Vigia do Ambiente",
      period: "Março/2023 a Agosto/2023",
      description: [
        "Desenvolvimento e instalações de equipamentos, corrigindo problemas e falhas relatadas por outros colaboradores.",
        "Configuração de softwares, operação de máquinas e empresas no melhor uso de seus ferramentas.",
        "Elaboração de relatórios e dashboards para facilitar a tomada de decisão de gerentes."
      ]
    },
    {
      role: "Formação Acadêmica",
      company: "IBMEC",
      period: "2022 - Presente",
      description: [
        "Estudante de Engenharia de Computação no IBMEC",
        "Ciência de dados e inteligência artificial (Previsão de conclusão: Dezembro/2024)",
        "Projetos acadêmicos em desenvolvimento de software e sistemas embarcados"
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
