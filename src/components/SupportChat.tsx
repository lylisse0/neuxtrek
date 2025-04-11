
import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

// Latency tracker implementation
const useLatencyTracker = () => {
  const [clickTimestamps, setClickTimestamps] = useState<Record<string, number>>({});
  const [latencyMetrics, setLatencyMetrics] = useState<{
    average: number;
    min: number;
    max: number;
    lastMeasurement: number;
  }>({
    average: 0,
    min: 0,
    max: 0,
    lastMeasurement: 0
  });

  // Start tracking a user interaction
  const startTracking = (actionId: string) => {
    setClickTimestamps(prev => ({
      ...prev,
      [actionId]: performance.now()
    }));
  };

  // End tracking and calculate latency
  const endTracking = (actionId: string) => {
    const now = performance.now();
    const startTime = clickTimestamps[actionId];
    
    if (!startTime) return;
    
    const latency = now - startTime;
    
    // Update metrics
    setLatencyMetrics(prev => {
      const newAvg = prev.average === 0 
        ? latency 
        : (prev.average + latency) / 2;
      
      return {
        average: newAvg,
        min: prev.min === 0 ? latency : Math.min(prev.min, latency),
        max: Math.max(prev.max, latency),
        lastMeasurement: latency
      };
    });
    
    // Remove the timestamp
    setClickTimestamps(prev => {
      const newState = { ...prev };
      delete newState[actionId];
      return newState;
    });
  };

  // Track page navigation/tab switches
  useEffect(() => {
    const handleVisibilityChange = () => {
      const actionId = `visibility-${Date.now()}`;
      if (document.visibilityState === 'visible') {
        startTracking(actionId);
      } else {
        endTracking(actionId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    startTracking,
    endTracking,
    metrics: latencyMetrics
  };
};

// Get latency rating based on latency value (in ms)
const getLatencyRating = (latency: number) => {
  if (latency < 100) return { rating: 'excellent', color: 'text-green-500' };
  if (latency < 300) return { rating: 'good', color: 'text-blue-400' };
  if (latency < 600) return { rating: 'fair', color: 'text-yellow-400' };
  return { rating: 'poor', color: 'text-red-500' };
};

const ChatMessage = ({ message, isUser = false }: { message: string; isUser?: boolean }) => {
  return (
    <div
      className={cn(
        "mb-4 max-w-[80%]",
        isUser ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "px-4 py-3 rounded-2xl",
          isUser
            ? "bg-neuxtrek-gold text-black rounded-tr-none"
            : "bg-neuxtrek-silver/10 text-neuxtrek-silver rounded-tl-none"
        )}
      >
        {message}
      </div>
    </div>
  );
};

const SupportChat = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: t('supportChat.welcome'),
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const latencyTracker = useLatencyTracker();

  // Updated webhook URL
  const WEBHOOK_URL = "https://yeti-amusing-bedbug.ngrok-free.app/webhook/36b7472d-eb2c-4344-884c-ef3a8ed14f65";

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update welcome message when language changes
    setMessages(prev => [
      {
        text: t('supportChat.welcome'),
        isUser: false,
      },
      ...prev.slice(1)
    ]);
  }, [t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Track this interaction
    const actionId = `chat-submit-${Date.now()}`;
    latencyTracker.startTracking(actionId);
    
    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    
    // Store message to send to webhook
    const messageToSend = message;
    setMessage("");
    setIsLoading(true);
    
    // Send message to webhook
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageToSend,
          userId: "website-visitor",
          timestamp: new Date().toISOString()
        }),
      });
      
      latencyTracker.endTracking(actionId);
      
      if (!response.ok) {
        throw new Error("Failed to send message to support");
      }

      // Get response from webhook
      try {
        const data = await response.json();
        
        // Add bot response from webhook
        if (data && data.output) {
          setMessages((prev) => [
            ...prev,
            {
              text: data.output,
              isUser: false,
            },
          ]);
        } else if (data && data.reply) {
          setMessages((prev) => [
            ...prev,
            {
              text: data.reply,
              isUser: false,
            },
          ]);
        } else {
          // Fallback response if webhook doesn't return expected format
          setMessages((prev) => [
            ...prev,
            {
              text: "Thanks for your message! Our team will get back to you shortly.",
              isUser: false,
            },
          ]);
        }
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
        
        // Fallback response for JSON parse errors
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your message. Our team has received it and will respond shortly.",
            isUser: false,
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message to webhook:", error);
      
      latencyTracker.endTracking(actionId);
      
      // Show error toast
      toast.error("Couldn't connect to support. Please try again later.");
      
      // Add fallback response
      setMessages((prev) => [
        ...prev,
        {
          text: t('supportChat.errorMessage'),
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    // Track this interaction
    const actionId = `toggle-chat-${Date.now()}`;
    latencyTracker.startTracking(actionId);
    
    setIsOpen(!isOpen);
    setShowTooltip(false);
    
    // End tracking after a small delay to account for animation
    setTimeout(() => {
      latencyTracker.endTracking(actionId);
    }, 300);
  };

  // Get latency rating for display
  const { rating, color } = getLatencyRating(latencyTracker.metrics.lastMeasurement);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Button */}
      <div className="relative">
        <button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full bg-neuxtrek-gold text-black flex items-center justify-center shadow-lg hover:bg-neuxtrek-gold/90 transition-all duration-300"
          aria-label="Customer Support Chat"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
        
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute right-20 bottom-4 bg-white text-black px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            {t('supportChat.tooltip')}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
        )}
        
        {/* Latency indicator */}
        {latencyTracker.metrics.lastMeasurement > 0 && (
          <div className="absolute -top-10 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Latency: <span className={color}>{Math.round(latencyTracker.metrics.lastMeasurement)}ms</span> ({t(`latency.${rating}`)})
          </div>
        )}
      </div>
      
      {/* Chat Window */}
      <div
        className={cn(
          "absolute bottom-20 right-0 w-80 sm:w-96 bg-black border border-neuxtrek-silver/20 rounded-lg shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 pointer-events-none transform translate-y-8"
        )}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-neuxtrek-silver/10 to-black p-4 border-b border-neuxtrek-silver/10 flex items-center">
          <div className="mr-3 bg-neuxtrek-gold rounded-full p-1">
            <MessageSquare size={18} className="text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-neuxtrek-silver">NeuXTrek Support</h3>
            <p className="text-xs text-neuxtrek-silver/70">We typically reply within minutes</p>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gradient-to-b from-black to-[#050505]">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
          ))}
        </div>
        
        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-neuxtrek-silver/10 bg-black">
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('supportChat.placeholder')}
              className="flex-1 bg-neuxtrek-silver/5 border border-neuxtrek-silver/20 rounded-l-md px-4 py-2 focus:outline-none focus:border-neuxtrek-gold text-neuxtrek-silver"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={cn(
                "bg-neuxtrek-gold text-black px-4 rounded-r-md transition-colors",
                isLoading 
                  ? "opacity-70 cursor-not-allowed" 
                  : "hover:bg-neuxtrek-gold/90"
              )}
              disabled={!message.trim() || isLoading}
            >
              {isLoading ? (
                <div className="w-[18px] h-[18px] border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportChat;
