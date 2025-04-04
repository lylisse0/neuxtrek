
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 py-4",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-neuxtrek-silver/10 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo isScrolled={isScrolled} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-neuxtrek-silver hover:text-neuxtrek-gold transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="neuxtrek-btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neuxtrek-silver hover:text-neuxtrek-gold"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xl text-neuxtrek-silver hover:text-neuxtrek-gold transition duration-300"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/#contact" 
              className="neuxtrek-btn-primary w-full text-center" 
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
