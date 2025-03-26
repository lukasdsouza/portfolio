
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import AnimatedLink from './AnimatedLink';

const About = () => {
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
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <h2 className="section-heading">Sobre Mim</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Estudante de Engenharia de Computação no IBMEC, com foco em desenvolvimento de software e hardware. 
              Experiência em desenvolvimento web utilizando C, C++, programação para placas e chips Arduino e C#. 
              Além disso, possuo conhecimento em programação em UX/UI, com uso em UI/UX WEB complementando a parte 
              de experimentos em VS++, com uso em UI/UX Web.
            </p>
            
            <p className="text-lg leading-relaxed">
              Possuo interesse pelas áreas de Programação, Segurança da Informação (hacking ético), 
              Desenvolvimento de Jogos e Automação.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <a 
                    href={info.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
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
