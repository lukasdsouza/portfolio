
import { useState } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
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
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in">
          <div className="flex items-center mb-6">
            <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mr-5 animate-pulse">
              <Briefcase className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                {experience.role}
              </h3>
              <p className="text-muted-foreground">
                {experience.company} | {experience.period}
              </p>
            </div>
          </div>
          
          <ul className="space-y-4 mt-6">
            {experience.description.map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
