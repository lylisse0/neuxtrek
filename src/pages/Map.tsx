
import CommunityLayout from "@/components/layout/CommunityLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, LockIcon } from "lucide-react";

const Map = () => {
  const modules = [
    {
      id: 1,
      title: "Getting Started with AI Automation",
      description: "Core concepts and first steps in your automation journey",
      status: "completed",
      lessons: [
        { name: "Welcome & Introduction", completed: true },
        { name: "Setting Up Your Environment", completed: true },
        { name: "Your First Automation", completed: true },
      ],
    },
    {
      id: 2,
      title: "Automation Fundamentals",
      description: "Learn the essential tools and techniques for automation",
      status: "in-progress",
      lessons: [
        { name: "Automation Planning", completed: true },
        { name: "Tools Overview", completed: true },
        { name: "Basic Scripting", completed: false },
        { name: "Workflow Design", completed: false },
      ],
    },
    {
      id: 3,
      title: "Advanced AI Integration",
      description: "Incorporate AI capabilities into your automation workflows",
      status: "locked",
      lessons: [
        { name: "AI Models Overview", completed: false },
        { name: "Data Processing with AI", completed: false },
        { name: "Custom Model Training", completed: false },
        { name: "Integration Patterns", completed: false },
      ],
    },
    {
      id: 4,
      title: "Enterprise Automation Solutions",
      description: "Scale your automation to enterprise-level implementations",
      status: "locked",
      lessons: [
        { name: "Enterprise Architecture", completed: false },
        { name: "Security Best Practices", completed: false },
        { name: "Governance & Compliance", completed: false },
        { name: "Case Studies", completed: false },
      ],
    },
  ];

  return (
    <CommunityLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Learning Path</h1>
        
        <div className="space-y-8">
          {modules.map((module, index) => (
            <Card 
              key={module.id} 
              className={`border-l-4 ${
                module.status === "completed" 
                  ? "border-l-[#4CAF50] bg-zinc-800/50 border-zinc-700" 
                  : module.status === "in-progress" 
                  ? "border-l-[#FFC107] bg-zinc-800 border-zinc-700" 
                  : "border-l-zinc-600 bg-zinc-900/50 border-zinc-800"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-zinc-500 text-sm font-medium">MODULE {index + 1}</span>
                      {module.status === "completed" && (
                        <span className="bg-[#4CAF50]/20 text-[#4CAF50] text-xs px-2 py-0.5 rounded">
                          Completed
                        </span>
                      )}
                      {module.status === "in-progress" && (
                        <span className="bg-[#FFC107]/20 text-[#FFC107] text-xs px-2 py-0.5 rounded">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{module.title}</h2>
                    <p className="text-zinc-400 mb-4">{module.description}</p>
                    
                    <div className="space-y-2">
                      {module.lessons.map((lesson, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center gap-2 ${
                            module.status === "locked" 
                              ? "text-zinc-600"
                              : lesson.completed 
                              ? "text-white" 
                              : "text-zinc-400"
                          }`}
                        >
                          {module.status === "locked" ? (
                            <LockIcon className="h-4 w-4" />
                          ) : lesson.completed ? (
                            <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border border-zinc-400" />
                          )}
                          <span className="text-sm">{lesson.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className={
                      module.status === "completed" 
                        ? "bg-zinc-700 hover:bg-zinc-600 text-white" 
                        : module.status === "in-progress" 
                        ? "bg-[#FFC107] hover:bg-[#FFD54F] text-black" 
                        : "bg-zinc-700 text-zinc-500 hover:bg-zinc-700 cursor-not-allowed"
                    }
                    disabled={module.status === "locked"}
                  >
                    {module.status === "completed" ? "Review" : module.status === "in-progress" ? "Continue" : "Locked"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CommunityLayout>
  );
};

export default Map;
