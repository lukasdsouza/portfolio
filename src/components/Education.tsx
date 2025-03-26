
import { Book } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      institution: "IBMEC",
      degree: "Engenharia de Computação",
      period: "2022 - 2025 (Previsão de conclusão: Dezembro/2025 - 7º período)",
      description: "Formação em Engenharia de Computação com foco em desenvolvimento de software e hardware."
    },
    {
      institution: "IBMEC",
      degree: "Ciência de dados e inteligência artificial",
      period: "2022 - 2026 (Previsão de conclusão: Dezembro/2026 - 5º período)",
      description: "Formação em Ciência de Dados e Inteligência Artificial."
    }
  ];
  
  const certifications = [
    { name: "Docker Fundamentals", issuer: "Udemy", date: "Jul/2024" },
    { name: "Git and GitHub", issuer: "Udemy", date: "Jul/2024" },
    { name: "DevOps Introduction", issuer: "Udemy", date: "Jun/2024" },
    { name: "Webpack Fundamentals", issuer: "Udemy", date: "Jul/2024" },
    { name: "Scrum: Agility in Your Project", issuer: "Alura", date: "Set/2022" },
    { name: "IBM Technical Regional Exchange", issuer: "IBM", date: "Out/2023" },
    { name: "Hackathon Tech_Hubs+=Green", issuer: "IBMEC", date: "Jun/2024" },
    { name: "Intermediário em desenvolvimento Back-end", issuer: "IBMEC", date: "Dez/2024" },
    { name: "Intermediário em desenvolvimento Front-end", issuer: "IBMEC", date: "Dez/2024" },
    { name: "Intermediário em Sistemas embarcados", issuer: "IBMEC", date: "Dez/2024" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Fev/2025" },
    { name: "Networking Basics", issuer: "Cisco", date: "Fev/2025" },
    { name: "Orientação a objetos em C++", issuer: "Alura", date: "Fev/2025" }
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <h2 className="section-heading">Formação Acadêmica</h2>
        
        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <div>
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                  <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-primary/20 -translate-x-[7px] group-hover:bg-primary/50 transition-colors"></div>
                  
                  <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.institution} | {item.period}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Book className="mr-2 h-5 w-5" />
              Cursos e Atividades Complementares
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 bg-gray-50/50 hover:bg-white group"
                >
                  <h4 className="font-medium group-hover:text-primary transition-colors">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer} | {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
