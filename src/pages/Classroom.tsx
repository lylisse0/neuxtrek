
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClassroomContent from '@/components/classroom/ClassroomContent';
import SupportChat from '@/components/SupportChat';
import { useTranslation } from 'react-i18next';

const Classroom = () => {
  const { i18n } = useTranslation();

  // Re-render when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      // Force a re-render when language changes
      // This is just to ensure our component responds to language changes
    };
    
    document.addEventListener('languageChanged', handleLanguageChange);
    return () => document.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <div className="pt-28">
        <ClassroomContent />
      </div>
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Classroom;
