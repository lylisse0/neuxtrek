
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Plus, X, PlayCircle, Save, FileCode, Settings, Download } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Logo from '@/components/Logo';

const NewProject = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{type: 'user' | 'ai', content: string}[]>([
    {type: 'ai', content: 'Hello! I\'m your AI assistant. How can I help you build your project today?'}
  ]);
  const [activeTab, setActiveTab] = useState('chat');
  const [projectName, setProjectName] = useState('Untitled Project');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {type: 'user', content: message}]);
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai', 
          content: 'I understand you want to ' + message.toLowerCase() + '. Let me help you implement that feature!'
        }]);
      }, 1000);
      
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-neuxtrek-silver flex flex-col">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-neuxtrek-silver/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Logo isScrolled={false} className="scale-75" />
          
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="bg-transparent border-b border-neuxtrek-silver/30 px-2 py-1 focus:outline-none focus:border-neuxtrek-gold"
            />
            
            <Button variant="ghost" size="icon">
              <Settings size={18} />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Save size={18} />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Download size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow flex">
        {/* Left panel - Chat interface */}
        <div className="w-1/3 border-r border-neuxtrek-silver/10 flex flex-col">
          <div className="p-4 border-b border-neuxtrek-silver/10">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="chat" className="data-[state=active]:text-neuxtrek-gold">Chat</TabsTrigger>
                <TabsTrigger value="files" className="data-[state=active]:text-neuxtrek-gold">Files</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex-grow overflow-auto p-4">
            <TabsContent value="chat" className="h-full flex flex-col">
              <div className="flex-grow overflow-auto space-y-4">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-neuxtrek-silver/10 ml-8' 
                        : 'bg-neuxtrek-gold/5 mr-8'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex">
                <Textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="flex-grow bg-black/40 border-neuxtrek-silver/30 resize-none"
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="ml-2 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90"
                >
                  <Send size={16} />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="files" className="h-full">
              <div className="p-4 bg-black/30 rounded-lg border border-neuxtrek-silver/10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Project Files</h3>
                  <Button variant="ghost" size="sm" className="text-neuxtrek-gold">
                    <Plus size={16} className="mr-1" /> New File
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center p-2 hover:bg-neuxtrek-silver/5 rounded-md cursor-pointer">
                    <FileCode size={16} className="mr-2 text-neuxtrek-gold" />
                    <span>index.tsx</span>
                  </div>
                  <div className="flex items-center p-2 hover:bg-neuxtrek-silver/5 rounded-md cursor-pointer">
                    <FileCode size={16} className="mr-2 text-neuxtrek-gold" />
                    <span>App.css</span>
                  </div>
                  <div className="flex items-center p-2 hover:bg-neuxtrek-silver/5 rounded-md cursor-pointer">
                    <FileCode size={16} className="mr-2 text-neuxtrek-gold" />
                    <span>components/Header.tsx</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </div>
        
        {/* Right panel - Preview */}
        <div className="w-2/3 bg-[#111] flex flex-col">
          <div className="p-4 border-b border-neuxtrek-silver/10 flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-neuxtrek-silver/20 text-neuxtrek-silver">
                <PlayCircle size={16} className="mr-1" /> Preview
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-neuxtrek-silver hover:text-neuxtrek-gold">
                Desktop
              </Button>
              <Button variant="ghost" size="sm" className="text-neuxtrek-silver hover:text-neuxtrek-gold">
                Tablet
              </Button>
              <Button variant="ghost" size="sm" className="text-neuxtrek-silver hover:text-neuxtrek-gold">
                Mobile
              </Button>
            </div>
          </div>
          
          <div className="flex-grow p-8 flex items-center justify-center text-neuxtrek-silver/50">
            <div className="text-center">
              <div className="mb-4 w-16 h-16 mx-auto border-2 border-dashed border-neuxtrek-silver/20 rounded-full flex items-center justify-center">
                <Plus size={24} className="text-neuxtrek-silver/30" />
              </div>
              <p className="text-lg">Your project preview will appear here</p>
              <p className="text-sm mt-2">Start by describing what you want to build in the chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
