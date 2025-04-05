
import { useState } from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Logo from '@/components/Logo';
import { MessageSquare, Play, Code, Save } from 'lucide-react';

const NewProject = () => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    console.log('Submitting message:', message);
    // Clear input after submission
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top navigation */}
      <header className="border-b border-white/10 p-3 flex justify-between items-center">
        <Logo isScrolled={true} />
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Play size={18} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Code size={18} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Save size={18} />
          </button>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Chat interface */}
        <div className="w-1/3 border-r border-white/10 flex flex-col">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="border-b border-white/10 px-2">
              <TabsTrigger value="chat" className="data-[state=active]:border-b-2 data-[state=active]:border-neuxtrek-gold">Chat</TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:border-b-2 data-[state=active]:border-neuxtrek-gold">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="flex-1 flex flex-col p-2">
              <div className="flex-1 overflow-y-auto space-y-4 p-2">
                {/* Messages would go here */}
                <div className="bg-white/5 rounded p-3">
                  <p className="text-sm">How can I help you build your project today?</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-auto p-2">
                <div className="relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send a message..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    <MessageSquare size={18} />
                  </button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="history" className="flex-1 overflow-y-auto p-4">
              <p className="text-white/60 text-center">No conversation history yet.</p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Right panel - Project preview */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <Command className="rounded-lg border border-white/10 bg-black">
              <CommandInput placeholder="Search templates..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Templates">
                  <CommandItem>Landing Page</CommandItem>
                  <CommandItem>E-commerce</CommandItem>
                  <CommandItem>Blog</CommandItem>
                  <CommandItem>Dashboard</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item} 
                  className="border border-white/10 rounded-lg p-4 hover:border-neuxtrek-gold/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded mb-3"></div>
                  <h3 className="font-medium">Project Template {item}</h3>
                  <p className="text-sm text-white/60">A simple starter template for your next project</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
