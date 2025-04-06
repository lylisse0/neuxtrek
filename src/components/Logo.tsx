
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  containerClassName?: string;
  isScrolled?: boolean;
}

const Logo = ({ className, containerClassName, isScrolled = false }: LogoProps) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate rotation based on scroll (subtle effect)
  const rotateAmount = Math.min(scrollOffset * 0.05, 10);

  return (
    <div className={cn("relative flex items-center", containerClassName)}>
      {/* X Logo */}
      <div 
        className={cn(
          "relative transition-transform duration-300",
          isScrolled ? "scale-90" : "scale-100",
          className
        )}
        style={{
          transform: `rotate(${rotateAmount}deg)`,
        }}
      >
        {/* Main X Shape */}
        <div className="relative w-12 h-12">
          {/* Line 1 */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-neuxtrek-silver to-white transform rotate-45 origin-left rounded-full"></div>
          
          {/* Line 2 */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-neuxtrek-silver to-white transform -rotate-45 origin-left rounded-full"></div>
          
          {/* Line 3 */}
          <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-l from-neuxtrek-silver to-white transform -rotate-45 origin-right rounded-full"></div>
          
          {/* Line 4 */}
          <div className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-l from-neuxtrek-silver to-white transform rotate-45 origin-right rounded-full"></div>
          
          {/* Neural dots */}
          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-neuxtrek-gold animate-pulse-glow transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-neuxtrek-gold animate-pulse-glow transform -translate-x-1/2 translate-y-1/2 animation-delay-300"></div>
          <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-neuxtrek-gold animate-pulse-glow transform -translate-x-1/2 -translate-y-1/2 animation-delay-600"></div>
          <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-neuxtrek-gold animate-pulse-glow transform translate-x-1/2 -translate-y-1/2 animation-delay-900"></div>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className={cn("ml-2 transition-transform duration-300", isScrolled ? "scale-90" : "scale-100")}>
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neuxtrek-silver to-white">NEUXTREK</span>
        </h1>
        <p className="text-xs text-neuxtrek-gold font-light tracking-wide">AI Automation Agency</p>
      </div>
    </div>
  );
};

export default Logo;
