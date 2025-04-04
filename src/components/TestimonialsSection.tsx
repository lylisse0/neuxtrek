
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "NeuXTrek's AI automation solutions have transformed our manufacturing processes, leading to significant cost savings and increased productivity.",
    author: "James Wilson",
    title: "CTO, Global Manufacturing Corp"
  },
  {
    quote: "The fraud detection system developed by NeuXTrek has proven invaluable for our financial institution, drastically reducing fraudulent transactions.",
    author: "Sarah Johnson",
    title: "Head of Security, NextGen Banking"
  },
  {
    quote: "Working with NeuXTrek has been a game-changer for our hospital. Their patient flow optimization system has improved both staff and patient experiences.",
    author: "Dr. Michael Chen",
    title: "Director, Metropolitan Medical Center"
  },
  {
    quote: "The custom AI solution NeuXTrek created for our retail business has given us insights we never thought possible, helping us stay ahead of trends.",
    author: "Olivia Martinez",
    title: "VP of Innovation, RetailPlus"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="neuxtrek-section bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-neuxtrek-gold blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-neuxtrek-silver blur-3xl"></div>
      </div>

      <div className="neuxtrek-container relative">
        <div className="text-center mb-16">
          <h2 className="neuxtrek-heading mb-4">Client <span className="gold-text">Testimonials</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-10 left-0 text-neuxtrek-gold opacity-20">
            <Quote size={60} />
          </div>
          
          <div className="relative h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
                style={{ transitionDelay: index === currentIndex ? "0ms" : "300ms" }}
              >
                <blockquote className="text-xl md:text-2xl text-neuxtrek-silver italic font-light mb-6 text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="text-neuxtrek-gold font-semibold">{testimonial.author}</p>
                  <p className="text-neuxtrek-silver/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-neuxtrek-gold w-6"
                    : "bg-neuxtrek-silver/30 hover:bg-neuxtrek-silver/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full bg-black/50 hover:bg-neuxtrek-gold/20 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-black/50 hover:bg-neuxtrek-gold/20 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
