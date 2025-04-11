
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const CaseStudiesSection = () => {
  const { t } = useTranslation();
  const [activeStudy, setActiveStudy] = useState('manufacturing');

  const caseStudies = [
    {
      id: 'manufacturing',
      titleKey: 'caseStudies.manufacturing.title',
      clientKey: 'caseStudies.manufacturing.client',
      descriptionKey: 'caseStudies.manufacturing.description',
      resultsKey: 'caseStudies.manufacturing.results',
      image: '/manufacturing.jpg'
    },
    {
      id: 'finance',
      titleKey: 'caseStudies.finance.title',
      clientKey: 'caseStudies.finance.client',
      descriptionKey: 'caseStudies.finance.description',
      resultsKey: 'caseStudies.finance.results',
      image: '/finance.jpg'
    },
    {
      id: 'healthcare',
      titleKey: 'caseStudies.healthcare.title',
      clientKey: 'caseStudies.healthcare.client',
      descriptionKey: 'caseStudies.healthcare.description',
      resultsKey: 'caseStudies.healthcare.results',
      image: '/healthcare.jpg'
    },
  ];

  return (
    <section id="case-studies" className="neuxtrek-section bg-gradient-to-b from-black to-neuxtrek-black/80 relative">
      <div className="neural-lines opacity-5"></div>
      
      <div className="neuxtrek-container">
        <div className="text-center mb-16">
          <h2 className="neuxtrek-heading mb-4">{t('caseStudies.title')} <span className="gold-text">{t('caseStudies.title')}</span></h2>
          <p className="neuxtrek-subheading max-w-3xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Case Study Navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-4 sticky top-24">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveStudy(study.id)}
                  className={cn(
                    "w-full text-left p-6 rounded-lg transition-all duration-300",
                    activeStudy === study.id
                      ? "bg-gradient-to-r from-neuxtrek-gold/20 to-transparent border-l-4 border-neuxtrek-gold"
                      : "bg-black/30 hover:bg-black/50"
                  )}
                >
                  <h3 className={cn(
                    "text-xl font-bold mb-1 transition-colors",
                    activeStudy === study.id ? "text-neuxtrek-gold" : "text-neuxtrek-silver"
                  )}>
                    {t(study.titleKey)}
                  </h3>
                  <p className="text-sm text-neuxtrek-silver/70">{t(study.clientKey)}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Case Study Details */}
          <div className="lg:col-span-3">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className={cn(
                  "transition-all duration-500",
                  activeStudy === study.id ? "opacity-100" : "hidden opacity-0"
                )}
              >
                <div className="bg-gradient-to-br from-neuxtrek-silver/10 to-black/50 rounded-xl overflow-hidden">
                  {/* This would display an actual image - using a placeholder div for now */}
                  <div 
                    className="h-64 bg-gradient-to-r from-neuxtrek-silver/30 to-neuxtrek-gold/10 relative"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, rgba(159, 158, 161, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                    }}
                  >
                    <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-neuxtrek-gold text-opacity-50 text-lg">Case Study Image</div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-neuxtrek-gold">{t(study.titleKey)}</h3>
                    <p className="text-neuxtrek-silver mb-6">{t(study.descriptionKey)}</p>
                    
                    <h4 className="text-lg font-semibold mb-3 text-neuxtrek-silver">{t('caseStudies.keyResults')}</h4>
                    <ul className="space-y-2">
                      {/* Fix: Properly handle the translated results array */}
                      {(() => {
                        const results = t(study.resultsKey, { returnObjects: true });
                        // Check if results is an array before mapping
                        if (Array.isArray(results)) {
                          return results.map((result: string, index: number) => (
                            <li key={index} className="flex items-center text-neuxtrek-silver/80">
                              <span className="mr-2 text-neuxtrek-gold">•</span>
                              {result}
                            </li>
                          ));
                        }
                        // Fallback in case translation doesn't return an array
                        return (
                          <li className="flex items-center text-neuxtrek-silver/80">
                            <span className="mr-2 text-neuxtrek-gold">•</span>
                            No results available
                          </li>
                        );
                      })()}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
