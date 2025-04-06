
import { useState } from 'react';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    id: 1,
    title: 'Manufacturing Process Optimization',
    client: 'Global Manufacturing Corp',
    description: 'Implemented an AI-driven system that reduced production errors by 35% and increased overall efficiency by 28% within six months.',
    results: [
      '35% reduction in production errors',
      '28% increase in manufacturing efficiency',
      '$2.4M annual cost savings',
    ],
    image: '/manufacturing.jpg' // This would be an actual image file in your project
  },
  {
    id: 2,
    title: 'Financial Fraud Detection System',
    client: 'NextGen Banking',
    description: 'Developed a machine learning model that identifies potential fraud patterns in real-time, resulting in a 42% improvement in fraud detection rates.',
    results: [
      '42% improvement in fraud detection',
      '89% reduction in false positives',
      'Enhanced customer trust and security',
    ],
    image: '/finance.jpg'
  },
  {
    id: 3,
    title: 'Healthcare Patient Flow Optimization',
    client: 'Metropolitan Medical Center',
    description: 'Created an AI-powered patient management system that decreased wait times by 47% and improved resource allocation across departments.',
    results: [
      '47% reduction in patient wait times',
      '23% improvement in resource utilization',
      'Increased patient satisfaction scores by 31%',
    ],
    image: '/healthcare.jpg'
  },
];

const CaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);

  return (
    <section id="case-studies" className="neuxtrek-section bg-gradient-to-b from-black to-neuxtrek-black/80 relative">
      <div className="neural-lines opacity-5"></div>
      
      <div className="neuxtrek-container">
        <div className="text-center mb-16">
          <h2 className="neuxtrek-heading mb-4">Case <span className="gold-text">Studies</span></h2>
          <p className="neuxtrek-subheading max-w-3xl mx-auto">
            Real-world success stories showcasing our AI automation solutions
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
                    {study.title}
                  </h3>
                  <p className="text-sm text-neuxtrek-silver/70">{study.client}</p>
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
                    <h3 className="text-2xl font-bold mb-3 text-neuxtrek-gold">{study.title}</h3>
                    <p className="text-neuxtrek-silver mb-6">{study.description}</p>
                    
                    <h4 className="text-lg font-semibold mb-3 text-neuxtrek-silver">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-neuxtrek-silver/80">
                          <span className="mr-2 text-neuxtrek-gold">•</span>
                          {result}
                        </li>
                      ))}
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
