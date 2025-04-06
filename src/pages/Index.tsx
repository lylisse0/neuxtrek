
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SupportChat from "@/components/SupportChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-neuxtrek-black text-neuxtrek-silver">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Index;
