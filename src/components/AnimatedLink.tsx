
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children, className, external = false }) => {
  return (
    <a 
      href={href} 
      className={cn(
        "inline-block animated-underline font-medium hover-lift", 
        className
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default AnimatedLink;
