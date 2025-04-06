
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-neuxtrek-silver/10 pt-16 pb-8">
      <div className="neuxtrek-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            
            <p className="text-neuxtrek-silver/70 max-w-xs">
              Empowering businesses through intelligent automation and cutting-edge AI solutions.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neuxtrek-silver">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-neuxtrek-silver/70 hover:text-neuxtrek-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neuxtrek-silver">Our Services</h3>
            <ul className="space-y-3">
              {[
                'AI Process Automation',
                'Data Analytics',
                'Custom AI Development',
                'Automation Integration',
                'AI Strategy Consulting'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-neuxtrek-silver/70 hover:text-neuxtrek-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neuxtrek-silver">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-neuxtrek-gold flex-shrink-0" size={20} />
                <span className="text-neuxtrek-silver/70">
                  123 Innovation Drive, Tech City, TC 10001
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-neuxtrek-gold flex-shrink-0" size={20} />
                <a 
                  href="tel:+11234567890" 
                  className="text-neuxtrek-silver/70 hover:text-neuxtrek-gold transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-neuxtrek-gold flex-shrink-0" size={20} />
                <a 
                  href="mailto:info@neuxtrek.com" 
                  className="text-neuxtrek-silver/70 hover:text-neuxtrek-gold transition-colors"
                >
                  info@neuxtrek.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neuxtrek-silver/10 text-center sm:flex sm:justify-between">
          <p className="text-neuxtrek-silver/50 text-sm mb-4 sm:mb-0">
            © {currentYear} NeuXTrek. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a 
                key={item}
                href="#"
                className="text-neuxtrek-silver/50 hover:text-neuxtrek-gold text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
