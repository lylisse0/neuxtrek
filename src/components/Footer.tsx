
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Logo from "./Logo";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-neuxtrek-silver/10 pt-16 pb-8">
      <div className="neuxtrek-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            
            <p className="text-neuxtrek-silver/70 max-w-xs">
              {t('footer.companyInfo')}
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
            <h3 className="text-lg font-semibold mb-6 text-neuxtrek-silver">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {[
                { key: 'navbar.home', href: 'home' },
                { key: 'navbar.services', href: 'services' },
                { key: 'navbar.about', href: 'about' },
                { key: 'navbar.caseStudies', href: 'case-studies' },
                { key: 'navbar.contact', href: 'contact' }
              ].map((item) => (
                <li key={item.key}>
                  <a 
                    href={`#${item.href}`}
                    className="text-neuxtrek-silver/70 hover:text-neuxtrek-gold transition-colors"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neuxtrek-silver">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {[
                'services.processAuto',
                'services.dataAnalytics',
                'services.customDev',
                'services.integration',
                'services.consulting'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-neuxtrek-silver/70 hover:text-neuxtrek-gold transition-colors"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neuxtrek-silver">{t('footer.contactUs')}</h3>
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
            © {currentYear} NeuXTrek. {t('footer.rights')}
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { key: 'footer.privacyPolicy', href: '#' },
              { key: 'footer.termsOfService', href: '#' },
              { key: 'footer.sitemap', href: '#' }
            ].map((item) => (
              <a 
                key={item.key}
                href={item.href}
                className="text-neuxtrek-silver/50 hover:text-neuxtrek-gold text-sm transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
