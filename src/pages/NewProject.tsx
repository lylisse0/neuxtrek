import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  Plus, 
  Settings, 
  Save, 
  Download, 
  PlayCircle, 
  Book, 
  Users, 
  Signal, 
  Megaphone,
  Lightbulb, 
  Play, 
  Info, 
  MessageSquare,
  List,
  Rocket,
  FileCode,
  Pencil,
  TestTube,
  Briefcase,
  Globe,
  Folder,
  File,
  Laptop,
  GraduationCap,
  Grid2X2,
  Bug,
  CircleSlash,
  Github,
  Database,
  CreditCard,
  Mail,
  UserPlus,
  Wand2,
  Ruler,
  Image,
  Video,
  Chrome,
  Text,
  Package,
  Smartphone,
  Search,
  Shield,
  X,
  ChevronRight
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarMenuSub, 
  SidebarMenuSubButton, 
  SidebarMenuSubItem, 
  SidebarProvider 
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Logo from '@/components/Logo';

const NewProject = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{type: 'user' | 'ai', content: string}[]>([
    {type: 'ai', content: 'Hello! I\'m your AI assistant. How can I help you build your project today?'}
  ]);
  const [activeTab, setActiveTab] = useState('chat');
  const [projectName, setProjectName] = useState('Untitled Project');
  const [isScrolled, setIsScrolled] = useState(false);

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

  const sidebarMenuItems = [
    {
      label: "Documentation",
      icon: <Book size={16} />,
      submenu: []
    },
    {
      label: "Community",
      icon: <Users size={16} />,
      submenu: []
    },
    {
      label: "Status",
      icon: <Signal size={16} />,
      submenu: []
    },
    {
      label: "Product Announcement",
      icon: <Megaphone size={16} />,
      submenu: []
    },
    {
      label: "Request Feature",
      icon: <Lightbulb size={16} />,
      submenu: []
    },
    {
      label: "YouTube",
      icon: <Play size={16} />,
      submenu: []
    },
    {
      label: "Introduction",
      icon: <Info size={16} />,
      isActive: true,
      submenu: [
        { label: "Welcome", isActive: true },
        { label: "Messaging Limits", icon: <MessageSquare size={14} /> }
      ]
    },
    {
      label: "FAQ",
      icon: <Info size={16} />,
      submenu: []
    },
    {
      label: "Changelog",
      icon: <List size={16} />,
      submenu: []
    },
    {
      label: "User Guides",
      icon: <Book size={16} />,
      submenu: [
        { label: "Quickstart", icon: <Rocket size={14} /> },
        { label: "Figma to NeuXTrek", icon: <FileCode size={14} /> },
        { label: "Visual Edit", icon: <Pencil size={14} /> },
        { label: "Knowledge Files", icon: <File size={14} /> },
        { label: "Dev Mode", icon: <FileCode size={14} /> },
        { label: "Labs", icon: <TestTube size={14} /> },
        { label: "Troubleshooting", icon: <Briefcase size={14} /> },
        { label: "Deploy", icon: <Rocket size={14} /> },
        { label: "Custom Domain", icon: <Globe size={14} /> },
        { label: "Launched", icon: <Rocket size={14} /> }
      ]
    },
    {
      label: "Use Cases",
      icon: <Folder size={16} />,
      submenu: [
        { label: "Landing Page", icon: <File size={14} /> },
        { label: "Prototype", icon: <File size={14} /> },
        { label: "SaaS", icon: <Laptop size={14} /> }
      ]
    },
    {
      label: "Prompt Engineering",
      icon: <GraduationCap size={16} />,
      submenu: [
        { label: "Prompting 1.1", icon: <GraduationCap size={14} /> },
        { label: "Prompt Library", icon: <Grid2X2 size={14} /> },
        { label: "Debugging Prompts", icon: <Bug size={14} /> },
        { label: "Prompts & Integrations", icon: <Signal size={14} /> }
      ]
    },
    {
      label: "Integrations",
      icon: <CircleSlash size={16} />,
      submenu: [
        { label: "GitHub Integration", icon: <Github size={14} /> },
        { label: "Supabase Integration", icon: <Database size={14} /> },
        { label: "Stripe & Payments", icon: <CreditCard size={14} /> },
        { label: "Integration with Resend", icon: <Mail size={14} /> },
        { label: "Integration with Clerk", icon: <UserPlus size={14} /> },
        { label: "Integration with Make", icon: <Wand2 size={14} /> },
        { label: "Integration with Replicate", icon: <Play size={14} /> },
        { label: "Integrate with 21st.dev", icon: <Ruler size={14} /> }
      ]
    },
    {
      label: "Tips and Tricks",
      icon: <Lightbulb size={16} />,
      submenu: [
        { label: "Using Images in NeuXTrek", icon: <Image size={14} /> },
        { label: "Using Videos", icon: <Video size={14} /> },
        { label: "Chrome Add-on", icon: <Chrome size={14} /> },
        { label: "Using Custom Fonts", icon: <Text size={14} /> },
        { label: "Using npm Packages", icon: <Package size={14} /> },
        { label: "Mobile Support", icon: <Smartphone size={14} /> },
        { label: "SEO", icon: <Search size={14} /> }
      ]
    },
    {
      label: "Resources",
      icon: <Folder size={16} />,
      submenu: [
        { label: "Video Tutorial", icon: <Play size={14} /> },
        { label: "Inspiration Time", icon: <Lightbulb size={14} /> },
        { label: "Community", icon: <Users size={14} /> },
        { label: "Support Policy", icon: <Shield size={14} /> },
        { label: "Glossary", icon: <Book size={14} /> }
      ]
    }
  ];

  const pageLinks = [
    "Product Capabilities",
    "Quick Start",
    "What is NeuXTrek",
    "Stay Connected",
    "Support",
    "Learn More"
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-black text-neuxtrek-silver flex flex-col w-full">
        {/* Header */}
        <header className="bg-black/80 backdrop-blur-md border-b border-neuxtrek-silver/10 p-4 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Logo isScrolled={isScrolled} />
              <p className="ml-2 text-xs text-neuxtrek-silver/70">AI Automation Agency</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative hidden md:flex items-center">
                <Input 
                  type="text" 
                  placeholder="Search or ask..." 
                  className="w-64 bg-neuxtrek-silver/10 border-neuxtrek-silver/20"
                />
                <span className="absolute right-3 text-xs text-neuxtrek-silver/50">Ctrl K</span>
              </div>
              
              {/* Buttons */}
              <Button variant="ghost" size="sm" className="text-neuxtrek-silver">
                Support
              </Button>
              
              <Button className="bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black" size="sm">
                App
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-grow flex">
          {/* Left Navigation Sidebar */}
          <Sidebar variant="sidebar" className="bg-[#2E2E2E] border-r border-neuxtrek-silver/10 w-64">
            <SidebarContent>
              {sidebarMenuItems.map((item, index) => (
                <SidebarGroup key={`${item.label}-${index}`}>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton 
                        isActive={item.isActive} 
                        className={cn(
                          "transition-colors duration-300 hover:bg-[#3C3C3C] hover:text-[#E6C12E]",
                          item.isActive && "text-neuxtrek-gold"
                        )}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        {item.submenu.length > 0 && (
                          <ChevronRight size={14} className="ml-auto" />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    {item.submenu.length > 0 && (
                      <SidebarMenuSub>
                        {item.submenu.map((subItem, subIndex) => (
                          <SidebarMenuSubItem key={`${subItem.label}-${subIndex}`}>
                            <SidebarMenuSubButton 
                              isActive={subItem.isActive}
                              className={cn(
                                "transition-colors duration-300 hover:bg-[#3C3C3C] hover:text-[#E6C12E]",
                                subItem.isActive && "text-neuxtrek-gold"
                              )}
                            >
                              {subItem.icon && subItem.icon}
                              <span>{subItem.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenu>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>

          {/* Main content */}
          <div className="flex-grow flex flex-col">
            <div className="flex flex-grow">
              {/* Main Content Area */}
              <div className="w-3/4 p-8">
                {/* Main content sections */}
                <div className="mb-12">
                  <h1 className="text-4xl font-bold text-white mb-4">Welcome</h1>
                  <h2 className="text-xl text-neuxtrek-silver/70 mb-4">Build real web apps fast using natural language with NeuXTrek.</h2>
                  <p className="text-neuxtrek-silver mb-6">
                    NeuXTrek is an AI-powered tool that empowers users of any skill level to create full-stack web applications 
                    without coding expertise, simply by describing what they want in plain English.
                  </p>
                  <a href="#" className="text-neuxtrek-gold hover:text-neuxtrek-gold/80 transition-colors duration-300">Learn More</a>
                </div>
                
                {/* Product Capabilities Section */}
                <div className="bg-[#2E2E2E] p-6 rounded-lg mb-12">
                  <div className="bg-neuxtrek-gold text-black p-3 mb-6 rounded">
                    <p className="text-sm font-medium">Limited offer! Unlock a lifetime of creativity with 3 months at 100% off!</p>
                    <Button variant="outline" size="sm" className="mt-2 bg-white text-black border-black">
                      Login
                    </Button>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Button className="flex-1 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90 h-auto py-4 flex flex-col">
                      <Image size={24} className="mb-2" />
                      <span>Create Image</span>
                      <span className="text-xs mt-1">Edit Image</span>
                    </Button>
                    
                    <Button className="flex-1 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90 h-auto py-4 flex flex-col">
                      <Text size={24} className="mb-2" />
                      <span>Create Character</span>
                      <span className="text-xs mt-1">Create Video</span>
                    </Button>
                    
                    <Button className="flex-1 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90 h-auto py-4 flex flex-col">
                      <Play size={24} className="mb-2" />
                      <span>Quick Start</span>
                      <span className="text-xs mt-1">Explore Models</span>
                    </Button>
                  </div>
                </div>

                {/* Project Display Section */}
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
              </div>
              
              {/* Right Panel */}
              <div className="w-1/4 border-l border-neuxtrek-silver/10 p-6">
                <h3 className="text-neuxtrek-silver font-medium mb-4">On this page</h3>
                <ul className="space-y-2">
                  {pageLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-neuxtrek-gold hover:text-neuxtrek-gold/80 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Neural grid pattern background */}
        <div className="neural-lines fixed inset-0 opacity-10 pointer-events-none" aria-hidden="true"></div>
      </div>
    </SidebarProvider>
  );
};

export default NewProject;
