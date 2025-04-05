
import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import SupportChat from '@/components/SupportChat';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, Database, LineChart, FileCode, Building, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const tabs = [
  { id: 'platform', label: 'Platform', icon: <Cpu size={18} /> },
  { id: 'api', label: 'API', icon: <Code size={18} /> },
  { id: 'pricing', label: 'Pricing', icon: <Database size={18} /> },
  { id: 'doc', label: 'Documentation', icon: <FileCode size={18} /> },
  { id: 'enterprise', label: 'Enterprise', icon: <Building size={18} /> },
];

const serviceCards = [
  {
    title: 'AI Process Automation',
    description: 'Streamline operations through intelligent systems that learn and adapt to your business processes.',
    icon: <Cpu className="w-8 h-8 text-neuxtrek-gold" />,
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our AI-powered analytics solutions.',
    icon: <Database className="w-8 h-8 text-neuxtrek-gold" />,
  },
  {
    title: 'Custom AI Development',
    description: 'Build bespoke AI solutions tailored to your specific industry needs and challenges.',
    icon: <Code className="w-8 h-8 text-neuxtrek-gold" />,
  },
  {
    title: 'Predictive Analytics',
    description: 'Anticipate market trends and customer behaviors with predictive AI models.',
    icon: <LineChart className="w-8 h-8 text-neuxtrek-gold" />,
  },
];

const apiEndpoints = [
  { name: 'Text Classification', endpoint: '/api/classify', description: 'Classifies text into categories' },
  { name: 'Entity Recognition', endpoint: '/api/entities', description: 'Extracts entities from text' },
  { name: 'Sentiment Analysis', endpoint: '/api/sentiment', description: 'Analyzes sentiment of text' },
  { name: 'Image Recognition', endpoint: '/api/vision', description: 'Identifies objects in images' },
  { name: 'Data Processing', endpoint: '/api/process', description: 'Processes structured data' },
];

const pricingPlans = [
  {
    name: 'Basic',
    price: '$50',
    period: '/month',
    features: [
      'Access to all basic AI tools',
      '100,000 API calls per month',
      'Email support',
      'Basic analytics dashboard',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    features: [
      'All Basic features',
      'Unlimited API calls',
      'Priority support',
      'Advanced analytics dashboard',
      'Custom model training',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'All Pro features',
      'Dedicated account manager',
      'SLA guarantees',
      'Custom implementation',
      'On-premise deployment options',
    ],
    isPopular: false,
  },
];

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [activeTab, setActiveTab] = useState('platform');
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, fetch this from your backend or auth provider
    const profile = localStorage.getItem('user_profile');
    if (profile) {
      const { username: storedUsername } = JSON.parse(profile);
      setUsername(storedUsername || 'User');
    } else {
      // If no profile is found, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user_profile');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleEnterpriseClick = () => {
    navigate('/enterprise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#111] text-neuxtrek-silver">
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-neuxtrek-silver/10 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neuxtrek-gold to-neuxtrek-silver/70 flex items-center justify-center text-black font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
            <span className="text-neuxtrek-silver hidden sm:inline">Welcome, </span>
            <span className="font-semibold text-neuxtrek-gold">{username}</span>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 max-w-3xl mx-4">
            <TabsList className="grid grid-cols-5">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="flex items-center space-x-1 data-[state=active]:text-neuxtrek-gold data-[state=active]:bg-black/40"
                  onClick={() => tab.id === 'enterprise' && handleEnterpriseClick()}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-neuxtrek-silver hover:text-neuxtrek-gold hover:bg-transparent"
            onClick={handleLogout}
          >
            <RefreshCcw size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, <span className="text-neuxtrek-gold">{username}</span></h1>
          <p className="text-neuxtrek-silver/70">Explore our AI automation platform and start building your solutions today.</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="platform" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((service, index) => (
                <div 
                  key={index}
                  className="neuxtrek-card glow-effect hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{service.title}</h3>
                  <p className="text-sm text-neuxtrek-silver/70 text-center">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
              <div className="bg-black/30 border border-neuxtrek-silver/10 rounded-lg p-6">
                <p className="text-neuxtrek-silver/70 text-center py-8">No recent projects. Start by creating a new AI solution.</p>
                <div className="flex justify-center">
                  <Button className="bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90">
                    Create New Project
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">API Documentation</h2>
              <div className="bg-black/30 border border-neuxtrek-silver/10 rounded-lg p-6">
                <p className="mb-6">Access our powerful AI capabilities programmatically through our REST API.</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                  <div className="bg-black/70 rounded-md p-4 font-mono text-sm mb-2">
                    <p className="text-neuxtrek-silver/80">Authorization: Bearer &lt;your_api_key&gt;</p>
                  </div>
                  <p className="text-sm text-neuxtrek-silver/70">All API requests require authentication using your API key.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available Endpoints</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-neuxtrek-silver/10">
                          <th className="text-left py-2 px-4">Name</th>
                          <th className="text-left py-2 px-4">Endpoint</th>
                          <th className="text-left py-2 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {apiEndpoints.map((endpoint, index) => (
                          <tr key={index} className="border-b border-neuxtrek-silver/10">
                            <td className="py-3 px-4">{endpoint.name}</td>
                            <td className="py-3 px-4">
                              <code className="text-neuxtrek-gold">{endpoint.endpoint}</code>
                            </td>
                            <td className="py-3 px-4 text-neuxtrek-silver/70">{endpoint.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing" className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`relative neuxtrek-card ${
                      plan.isPopular ? 'border-neuxtrek-gold/50 ring-1 ring-neuxtrek-gold/20' : ''
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neuxtrek-gold text-black text-xs font-bold py-1 px-3 rounded-full">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-neuxtrek-silver/70">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={16} className="mr-2 text-neuxtrek-gold mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={
                        plan.isPopular
                          ? "w-full bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90"
                          : "w-full bg-black/50 border border-neuxtrek-silver/30 hover:border-neuxtrek-gold/50 text-neuxtrek-silver"
                      }
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="doc" className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">API Documentation</h2>
              <div className="bg-black/30 border border-neuxtrek-silver/10 rounded-lg p-6">
                <div className="prose prose-invert max-w-none">
                  <h3>Getting Started</h3>
                  <p>Welcome to the NeuXTrek API documentation. This guide will help you integrate our AI automation tools into your applications.</p>
                  
                  <h4>Authentication</h4>
                  <p>All API requests require an API key for authentication. You can get your API key from your account dashboard.</p>
                  
                  <pre className="bg-black/70 p-4 rounded-md overflow-x-auto">
                    <code className="text-neuxtrek-silver/90">
                      curl -X POST https://api.neuxtrek.com/v1/classify \<br />
                      -H "Authorization: Bearer YOUR_API_KEY" \<br />
                      -H "Content-Type: application/json" \<br />
                      -d '&#123;"text": "Analyze this customer feedback"&#125;'
                    </code>
                  </pre>
                  
                  <h4>Rate Limits</h4>
                  <p>The API has the following rate limits:</p>
                  <ul>
                    <li>Basic plan: 100 requests per minute</li>
                    <li>Pro plan: 1,000 requests per minute</li>
                    <li>Enterprise plan: Custom limits</li>
                  </ul>
                  
                  <h4>Response Format</h4>
                  <p>All responses are returned in JSON format with the following structure:</p>
                  <pre className="bg-black/70 p-4 rounded-md overflow-x-auto">
                    <code className="text-neuxtrek-silver/90">
                      &#123;<br />
                      &nbsp;&nbsp;"status": "success",<br />
                      &nbsp;&nbsp;"data": &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;// Response data here<br />
                      &nbsp;&nbsp;&#125;,<br />
                      &nbsp;&nbsp;"meta": &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;"processing_time": "0.235s"<br />
                      &nbsp;&nbsp;&#125;<br />
                      &#125;
                    </code>
                  </pre>
                  
                  <Button className="mt-4 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90">
                    Download Full Documentation
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <SupportChat />
    </div>
  );
};

export default Dashboard;
