
import { useState } from "react";
import CommunityLayout from "@/components/layout/CommunityLayout";
import CourseCard from "@/components/classroom/CourseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Classroom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const courses = [
    {
      id: 1,
      title: "Start Here: AI Automation Fundamentals",
      description: "Welcome to AI automation mastery! Learn the core concepts and get started on your automation journey.",
      thumbnail: "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      badge: "NT+",
      progress: 0,
    },
    {
      id: 2,
      title: "Automation with Python: Zero to Hero",
      description: "Learn how to build powerful automation scripts using Python, from basics to advanced techniques.",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      badge: "Popular",
      progress: 25,
    },
    {
      id: 3,
      title: "AI-Powered Social Media Management",
      description: "Automate your social media presence with the power of AI tools and scheduling algorithms.",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      progress: 68,
    },
    {
      id: 4,
      title: "Advanced Workflow Automation",
      description: "Connect different systems and create seamless workflows that run without human intervention.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      badge: "New",
      progress: 12,
    },
    {
      id: 5,
      title: "Machine Learning for Business Analytics",
      description: "Implement ML algorithms to analyze your business data and generate actionable insights.",
      thumbnail: "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      badge: "NT+",
      progress: 45,
    },
    {
      id: 6,
      title: "AI Tools for Content Creation",
      description: "Discover and master AI-powered tools for generating engaging content across multiple platforms.",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      progress: 80,
    },
  ];

  const totalPages = Math.ceil(courses.length / 6);
  
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <CommunityLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Classroom</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="border-zinc-700 text-white hover:bg-zinc-700"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "bg-[#FFC107] text-black hover:bg-[#FFD54F]"
                    : "text-white hover:bg-zinc-800"
                }
              >
                {index + 1}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="border-zinc-700 text-white hover:bg-zinc-700"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </CommunityLayout>
  );
};

export default Classroom;
