
import { Award, Cpu, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-neuxtrek-gold" />,
      value: "100+",
      label: "Satisfied Clients",
    },
    {
      icon: <Cpu className="w-8 h-8 text-neuxtrek-gold" />,
      value: "250+",
      label: "AI Models Deployed",
    },
    {
      icon: <Award className="w-8 h-8 text-neuxtrek-gold" />,
      value: "15+",
      label: "Industry Awards",
    },
  ];

  return (
    <section id="about" className="neuxtrek-section bg-black relative overflow-hidden">
      <div className="neural-lines"></div>
      
      <div className="neuxtrek-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <div>
            <h2 className="neuxtrek-heading mb-6">
              About <span className="gold-text">NeuXTrek</span>
            </h2>
            
            <div className="space-y-6">
              <p className="neuxtrek-paragraph">
                At NeuXTrek, we are pioneers in the field of AI automation, combining cutting-edge 
                technology with deep industry expertise to deliver transformative solutions for businesses 
                across sectors.
              </p>
              
              <p className="neuxtrek-paragraph">
                Our mission is to harness the power of artificial intelligence to optimize operations, 
                drive innovation, and create sustainable competitive advantages for our clients. We believe 
                that intelligent automation is the key to unlocking unprecedented levels of efficiency and 
                growth in the digital era.
              </p>
              
              <p className="neuxtrek-paragraph">
                Founded by a team of AI researchers, engineers, and business strategists, NeuXTrek brings 
                together diverse expertise to tackle the most complex challenges in business process automation.
              </p>
            </div>
          </div>
          
          {/* Right Column - Stats and Visuals */}
          <div className="relative">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="neuxtrek-card flex flex-col items-center text-center glow-effect"
                >
                  <div className="relative z-10">
                    <div className="mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-neuxtrek-gold mb-1">{stat.value}</div>
                    <div className="text-neuxtrek-silver/80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neuxtrek-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-neuxtrek-silver/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
