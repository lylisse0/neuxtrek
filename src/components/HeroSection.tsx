
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      // Get mouse position relative to hero section
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    // Add mousemove event listener
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Calculate parallax positions
  const calcParallax = (strength: number = 20) => {
    if (!heroRef.current) return { x: 0, y: 0 };
    
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = (mousePosition.x - centerX) / strength;
    const offsetY = (mousePosition.y - centerY) / strength;
    
    return { x: offsetX, y: offsetY };
  };

  // Parallax settings for different elements
  const mainParallax = calcParallax(40);
  const circleParallax = calcParallax(10);
  const textParallax = calcParallax(60);

  return (
    <section
      ref={heroRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(159, 158, 161, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
      }}
    >
      {/* Neural network background */}
      <div className="neural-lines"></div>
      
      {/* Glowing circles */}
      <div 
        className="absolute rounded-full w-[400px] h-[400px] blur-[100px] bg-neuxtrek-gold/10 animate-float"
        style={{ 
          transform: `translate(${circleParallax.x * 2}px, ${circleParallax.y * 2}px)`
        }}
      ></div>
      <div 
        className="absolute rounded-full w-[300px] h-[300px] blur-[80px] bg-neuxtrek-silver/5 animate-float animation-delay-500"
        style={{ 
          left: '30%',
          transform: `translate(${-circleParallax.x}px, ${-circleParallax.y}px)`
        }}
      ></div>
      
      <div className="neuxtrek-container z-10 text-center">
        <div
          className="space-y-6 max-w-3xl mx-auto"
          style={{
            transform: `translate(${textParallax.x}px, ${textParallax.y}px)`
          }}
        >
          <h1 className="neuxtrek-heading leading-tight">
            Powering the Future with <br />
            <span className="gold-text font-bold">Intelligent Automation</span>
          </h1>
          
          <p className="neuxtrek-paragraph max-w-2xl mx-auto">
            We combine cutting-edge AI technology with expert automation strategies to transform your business operations, increase efficiency, and drive innovation.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="neuxtrek-btn-primary">
              Explore Our Services
            </a>
            <a href="#contact" className="neuxtrek-btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated geometric shapes */}
      <div 
        className="absolute -bottom-20 left-10 w-32 h-32 opacity-20"
        style={{ 
          transform: `translate(${mainParallax.x * 1.5}px, ${mainParallax.y * 1.5}px) rotate(${mousePosition.x * 0.05}deg)`
        }}
      >
        <div className="absolute w-full h-1 bg-neuxtrek-gold/50 rotate-45 top-1/2"></div>
        <div className="absolute w-full h-1 bg-neuxtrek-gold/50 -rotate-45 top-1/2"></div>
      </div>
      
      <div 
        className="absolute top-20 right-20 w-40 h-40 opacity-10"
        style={{ 
          transform: `translate(${-mainParallax.x}px, ${-mainParallax.y}px)`
        }}
      >
        <div className="absolute w-full h-full rounded-full border border-neuxtrek-silver/30"></div>
        <div className="absolute w-3/4 h-3/4 rounded-full border border-neuxtrek-silver/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-1/2 h-1/2 rounded-full border border-neuxtrek-silver/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-neuxtrek-silver/50 text-sm mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neuxtrek-gold"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
