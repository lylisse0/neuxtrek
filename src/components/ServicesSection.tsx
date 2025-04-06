
import { Code, Cpu, Database, LineChart, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Cpu className="w-10 h-10 text-neuxtrek-gold" />,
    title: 'AI Process Automation',
    description: 'Streamline operations through intelligent systems that learn and adapt to your business processes.'
  },
  {
    icon: <Database className="w-10 h-10 text-neuxtrek-gold" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our AI-powered analytics solutions.'
  },
  {
    icon: <Code className="w-10 h-10 text-neuxtrek-gold" />,
    title: 'Custom AI Development',
    description: 'Build bespoke AI solutions tailored to your specific industry needs and challenges.'
  },
  {
    icon: <Zap className="w-10 h-10 text-neuxtrek-gold" />,
    title: 'Automation Integration',
    description: 'Seamlessly integrate AI automation with your existing systems and workflows.'
  },
  {
    icon: <LineChart className="w-10 h-10 text-neuxtrek-gold" />,
    title: 'Predictive Analytics',
    description: 'Anticipate market trends and customer behaviors with predictive AI models.'
  },
  {
    icon: <Sparkles className="w-10 h-10 text-neuxtrek-gold" />,
    title: 'AI Strategy Consulting',
    description: 'Develop comprehensive strategies to implement AI solutions that drive business growth.'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className={cn(
        "group neuxtrek-card glow-effect relative z-10",
        index % 3 === 0 ? "lg:translate-y-8" : "",
        index % 3 === 2 ? "lg:-translate-y-8" : ""
      )}
    >
      <div className="relative z-10">
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2 text-neuxtrek-silver group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-neuxtrek-silver/70">{service.description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="neuxtrek-section relative overflow-hidden">
      <div className="neural-lines"></div>
      
      <div className="neuxtrek-container">
        <div className="text-center mb-16">
          <h2 className="neuxtrek-heading mb-4">Our <span className="gold-text">Services</span></h2>
          <p className="neuxtrek-subheading max-w-3xl mx-auto">
            Innovative AI solutions designed to elevate your business in the digital age
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-neuxtrek-gold/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-neuxtrek-silver/5 blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;
