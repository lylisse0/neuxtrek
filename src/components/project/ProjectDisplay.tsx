
import { useState } from 'react';
import { Settings, Save, Download, Send, Plus, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Message {
  type: 'user' | 'ai';
  content: string;
}

const ProjectDisplay = () => {
  const [projectName, setProjectName] = useState('Untitled Project');
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {type: 'ai', content: 'Hello! I\'m your AI assistant. How can I help you build your project today?'}
  ]);

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
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Create Your Project</h2>
      <div className="border border-neuxtrek-silver/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <Input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-transparent border-b border-neuxtrek-silver/30 px-2 py-1 focus:outline-none focus:border-neuxtrek-gold"
          />
          
          <div className="flex items-center gap-2">
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

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="chat" className="data-[state=active]:text-neuxtrek-gold">Chat</TabsTrigger>
            <TabsTrigger value="files" className="data-[state=active]:text-neuxtrek-gold">Files</TabsTrigger>
          </TabsList>
        
          <TabsContent value="chat" className="mt-4 h-80 overflow-auto">
            <div className="space-y-4">
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
          
          <TabsContent value="files" className="mt-4 h-80 overflow-auto">
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
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectDisplay;
