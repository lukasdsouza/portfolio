
import { useState } from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "Todos" },
    { id: "languages", name: "Linguagens" },
    { id: "tools", name: "Ferramentas" },
    { id: "other", name: "Outros" }
  ];
  
  const skills = [
    { name: "C", category: "languages", level: 80 },
    { name: "C++", category: "languages", level: 85 },
    { name: "Python", category: "languages", level: 75 },
    { name: "JavaScript", category: "languages", level: 65 },
    { name: "SQL", category: "languages", level: 60 },
    { name: "HTML/CSS", category: "languages", level: 75 },
    { name: "Git", category: "tools", level: 85 },
    { name: "Docker", category: "tools", level: 70 },
    { name: "Arduino", category: "tools", level: 90 },
    { name: "MQTT", category: "tools", level: 75 },
    { name: "Pacote Office", category: "tools", level: 80 },
    { name: "IoT", category: "other", level: 75 },
    { name: "Visão Computacional", category: "other", level: 70 },
    { name: "Análise de Dados", category: "other", level: 65 },
    { name: "Cybersecurity", category: "other", level: 65 }
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading">Habilidades & Tecnologias</h2>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">{skill.name}</h3>
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-4 w-4" />
                </div>
              </div>
              
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary group-hover:bg-primary/90 transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-muted-foreground">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
