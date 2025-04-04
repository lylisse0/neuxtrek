
import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "Hello! How can I help you today with AI automation?",
      isUser: false,
    },
  ]);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setMessage("");
    
    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for reaching out! One of our AI specialists will get back to you shortly. In the meantime, feel free to check out our services section for more information.",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

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
            Chat with me for support
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
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
              placeholder="Type your message..."
              className="flex-1 bg-neuxtrek-silver/5 border border-neuxtrek-silver/20 rounded-l-md px-4 py-2 focus:outline-none focus:border-neuxtrek-gold text-neuxtrek-silver"
            />
            <button
              type="submit"
              className="bg-neuxtrek-gold text-black px-4 rounded-r-md hover:bg-neuxtrek-gold/90 transition-colors"
              disabled={!message.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportChat;
