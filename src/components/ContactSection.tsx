
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';

// Define an interface for the form data
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// Define our notification component
const NotificationOverlay = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className="bg-white text-black p-8 rounded-lg shadow-2xl max-w-md w-full relative animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-center">
          <div className="mb-4 text-neuxtrek-gold">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Success!</h3>
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Send data to the webhook
      const response = await fetch(
        "https://yeti-amusing-bedbug.ngrok-free.app/webhook/6dec0b26-36ce-4741-a6ce-2fbff783b104",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Show success notification
        setShowNotification(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      toast.error("There was an error submitting your message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="neuxtrek-section relative bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      <div className="neural-lines opacity-5"></div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-neuxtrek-gold/5 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-neuxtrek-silver/5 blur-[100px]"></div>
      
      <div className="neuxtrek-container">
        <div className="text-center mb-16">
          <h2 className="neuxtrek-heading mb-4">{t('contact.title')} <span className="gold-text">{t('contact.title')}</span></h2>
          <p className="neuxtrek-subheading max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-neuxtrek-silver">
                  {t('contact.name')} <span className="text-neuxtrek-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neuxtrek-silver/5 border border-neuxtrek-silver/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neuxtrek-gold/50 focus:border-transparent text-neuxtrek-silver"
                  placeholder={t('contact.name')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-neuxtrek-silver">
                  {t('contact.email')} <span className="text-neuxtrek-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neuxtrek-silver/5 border border-neuxtrek-silver/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neuxtrek-gold/50 focus:border-transparent text-neuxtrek-silver"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-neuxtrek-silver">
                {t('contact.company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-neuxtrek-silver/5 border border-neuxtrek-silver/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neuxtrek-gold/50 focus:border-transparent text-neuxtrek-silver"
                placeholder={t('contact.company')}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-neuxtrek-silver">
                {t('contact.message')} <span className="text-neuxtrek-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full bg-neuxtrek-silver/5 border border-neuxtrek-silver/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neuxtrek-gold/50 focus:border-transparent text-neuxtrek-silver"
                placeholder={t('contact.message')}
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "neuxtrek-btn-primary inline-flex items-center justify-center min-w-[150px]",
                  isLoading && "opacity-70 cursor-not-allowed"
                )}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.sendMessage')}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Success Notification */}
      {showNotification && (
        <NotificationOverlay
          message={t('contact.success')}
          onClose={() => setShowNotification(false)}
        />
      )}
    </section>
  );
};

export default ContactSection;
