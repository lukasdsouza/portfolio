
import { Book } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      institution: "IBMEC",
      degree: "Engenharia de Computação",
      period: "2022 - Presente",
      description: "Formação em Engenharia de Computação com foco em desenvolvimento de software e hardware."
    },
    {
      institution: "Pluralsight & Udemy",
      degree: "Cursos complementares",
      period: "2020 - 2023",
      description: "Diversos cursos nas áreas de programação, desenvolvimento web e hacking ético."
    }
  ];
  
  const certifications = [
    { name: "Docker Fundamentals", issuer: "Udemy", date: "Jul/2022" },
    { name: "API and CLI Udemy", issuer: "Udemy", date: "Jul/2023" },
    { name: "DevOps Introduction", issuer: "Udemy", date: "Jan/2023" },
    { name: "Webpack Fundamentals", issuer: "Udemy", date: "Jul/2023" },
    { name: "GIT Fundamentals", issuer: "Udemy", date: "Ago/2022" },
    { name: "AWS Certified Sol. Architect Associate", issuer: "AWS", date: "Dez/2022" },
    { name: "IBM Technical Regional Exchange", issuer: "IBM", date: "Out/2022" },
    { name: "Full-Stack Web Development", issuer: "IBMEC", date: "Jan/2023" },
    { name: "Intermediate em desenvolvimento Back-end/Basic", issuer: "Udemy", date: "Dez/2023" },
    { name: "Intermediate em desenvolvimento Front-end/Basic", issuer: "Udemy", date: "Dez/2023" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Jun/2023" },
    { name: "Networking Basics", issuer: "Cisco", date: "Fev/2023" },
    { name: "Orientação a objetos em C++", issuer: "Alura", date: "Jun/2023" }
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
              Certificações
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
