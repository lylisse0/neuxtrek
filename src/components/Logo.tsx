
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

  return (
    <div className={cn("relative flex items-center", containerClassName)}>
      {/* Heart Logo */}
      <div 
        className={cn(
          "relative transition-transform duration-300",
          isScrolled ? "scale-90" : "scale-100",
          className
        )}
      >
        <div className="relative w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-neuxtrek-gold">
            <path 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className={cn("ml-2 transition-transform duration-300", isScrolled ? "scale-90" : "scale-100")}>
        <h1 className="text-xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neuxtrek-silver to-white">NeuXTrek</span>
        </h1>
        <p className="text-xs text-neuxtrek-gold font-light tracking-wide">AI Automation Agency</p>
      </div>
    </div>
  );
};

export default Logo;
