
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (!href) return;
        
        const element = document.querySelector(href);
        if (!element) return;
        
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth"
        });
      }
    };
    
    // Add custom cursor trail
    const createCursorTrail = () => {
      const cursorTrail = document.createElement('div');
      cursorTrail.classList.add('cursor-trail');
      document.body.appendChild(cursorTrail);
      
      document.addEventListener('mousemove', (e) => {
        cursorTrail.style.left = `${e.clientX}px`;
        cursorTrail.style.top = `${e.clientY}px`;
      });
    };
    
    createCursorTrail();
    document.addEventListener("click", handleLinkClick);
    
    // Reveal animations on scroll
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };
    
    observeElements();
    
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
