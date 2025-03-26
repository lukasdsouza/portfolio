
import { ArrowUp, Mail, Phone, GitHub, Linkedin, MapPin } from 'lucide-react';
import AnimatedLink from './AnimatedLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, href: "mailto:lukascasd@gmail.com", label: "Email" },
    { icon: <Phone className="h-5 w-5" />, href: "tel:+5521996348228", label: "Telefone" },
    { icon: <GitHub className="h-5 w-5" />, href: "https://github.com/lukasrozado", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/lukas-souza2", label: "LinkedIn" },
    { icon: <MapPin className="h-5 w-5" />, href: "https://maps.app.goo.gl/TsH9AZJ4VKGiqZ9PA", label: "Localização" },
  ];

  return (
    <footer id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Lukas Chaves</h2>
            <p className="text-muted-foreground max-w-md">
              Engenheiro de Computação com foco em desenvolvimento de software e hardware.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Lukas Chaves de Souza. Todos os direitos reservados.
          </p>
          
          <a 
            href="#" 
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
