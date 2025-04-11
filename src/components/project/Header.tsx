
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const { t } = useTranslation();
  
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-neuxtrek-silver/10 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo isScrolled={isScrolled} />
          <p className="ml-2 text-xs text-neuxtrek-silver/70">AI Automation Agency</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center">
            <Input 
              type="text" 
              placeholder={t('projectHeader.search')} 
              className="w-64 bg-neuxtrek-silver/10 border-neuxtrek-silver/20"
            />
            <span className="absolute right-3 text-xs text-neuxtrek-silver/50">Ctrl K</span>
          </div>
          
          {/* Language Selector */}
          <LanguageSelector />
          
          {/* Buttons */}
          <Button variant="ghost" size="sm" className="text-neuxtrek-silver">
            {t('projectHeader.support')}
          </Button>
          
          <Button className="bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black" size="sm">
            {t('projectHeader.app')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
