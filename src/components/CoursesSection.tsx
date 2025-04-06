import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "AI Prompt Engineering Masterclass",
    description: "Learn the art of crafting effective prompts for AI models like ChatGPT, Claude, and Gemini.",
    level: "Beginner",
    modules: 8,
    duration: "6 hours",
    image: "/placeholder.svg",
    tag: "Most Popular",
    icon: BookOpen
  },
  {
    id: 2,
    title: "AI Automation Workflows",
    description: "Build end-to-end automation workflows using AI to streamline business processes.",
    level: "Intermediate",
    modules: 12,
    duration: "10 hours",
    image: "/placeholder.svg",
    tag: "New",
    icon: Book
  },
  {
    id: 3,
    title: "Advanced AI Integration",
    description: "Connect AI models to existing applications and create custom AI-powered solutions.",
    level: "Advanced",
    modules: 15,
    duration: "14 hours",
    image: "/placeholder.svg",
    tag: "Advanced",
    icon: GraduationCap
  },
  {
    id: 4,
    title: "AI for Business Leaders",
    description: "Strategic implementation of AI technologies to drive business growth and innovation.",
    level: "Intermediate",
    modules: 6,
    duration: "5 hours",
    image: "/placeholder.svg",
    tag: null,
    icon: GraduationCap
  },
  {
    id: 5,
    title: "Building AI Agents",
    description: "Create autonomous AI agents that can perform complex tasks and make decisions.",
    level: "Advanced",
    modules: 10,
    duration: "12 hours",
    image: "/placeholder.svg",
    tag: "Hot",
    icon: Book
  },
  {
    id: 6,
    title: "AI Ethics & Responsible Implementation",
    description: "Navigate ethical considerations and best practices when deploying AI systems.",
    level: "All Levels",
    modules: 7,
    duration: "6 hours",
    image: "/placeholder.svg",
    tag: null,
    icon: BookOpen
  },
];

const CourseCard = ({ course }) => {
  const IconComponent = course.icon || BookOpen;
  
  return (
    <Card className="bg-gradient-to-b from-neuxtrek-silver/5 to-transparent border-neuxtrek-silver/10 hover:border-neuxtrek-gold/30 transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neuxtrek-gold/40 to-neuxtrek-gold/20 flex items-center justify-center">
            <IconComponent className="h-5 w-5 text-neuxtrek-gold" />
          </div>
          {course.tag && (
            <Badge variant="secondary" className="bg-neuxtrek-gold/20 text-neuxtrek-gold border border-neuxtrek-gold/30 hover:bg-neuxtrek-gold/30">
              {course.tag}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl mt-4 text-neuxtrek-silver">{course.title}</CardTitle>
        <CardDescription className="text-neuxtrek-silver/70">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <div className="flex justify-between text-sm text-neuxtrek-silver/60 mb-2">
          <span>Level: {course.level}</span>
          <span>{course.modules} modules</span>
        </div>
        <div className="text-sm text-neuxtrek-silver/60">
          <span>Duration: {course.duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-neuxtrek-silver/30 text-neuxtrek-silver hover:bg-neuxtrek-gold/10 hover:text-neuxtrek-gold hover:border-neuxtrek-gold/50">
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};

const SubscriptionCard = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  
  const handleSubscribe = () => {
    if (!isActive) {
      setIsActive(true);
      navigate('/community');
    } else {
      console.log("Manage existing subscription");
    }
  };

  return (
    <Card className={`bg-gradient-to-b ${isActive ? 'from-neuxtrek-gold/20 to-black/50 border-neuxtrek-gold' : 'from-neuxtrek-silver/10 to-transparent border-neuxtrek-silver/20'} transition-all duration-300 cursor-pointer`} onClick={() => setIsActive(true)}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-neuxtrek-silver">Premium Access</CardTitle>
          {isActive && <Badge className="bg-neuxtrek-gold text-black">Active</Badge>}
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold text-neuxtrek-gold">$50</span>
          <span className="text-neuxtrek-silver/70 ml-1">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">Access to all courses</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">Premium community access</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">Monthly Q&A sessions</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">Course certificates</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">AI project templates</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full neuxtrek-btn-primary bg-gradient-to-r from-neuxtrek-gold/80 to-neuxtrek-gold text-black"
          onClick={handleSubscribe}
        >
          {isActive ? 'Manage Subscription' : 'Subscribe Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neuxtrek-silver mb-4">
            Master <span className="text-neuxtrek-gold">AI Automation</span> with Our Expert-Led Courses
          </h2>
          <p className="text-lg text-neuxtrek-silver/70">
            Comprehensive training programs designed to help you harness the power of AI in your workflows
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <div className="flex justify-between items-center mb-4">
                  <TabsList className="bg-neuxtrek-silver/10">
                    <TabsTrigger value="all" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">All Courses</TabsTrigger>
                    <TabsTrigger value="beginner" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">Beginner</TabsTrigger>
                    <TabsTrigger value="intermediate" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">Intermediate</TabsTrigger>
                    <TabsTrigger value="advanced" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">Advanced</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="beginner" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.filter(course => course.level === "Beginner" || course.level === "All Levels").map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="intermediate" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.filter(course => course.level === "Intermediate" || course.level === "All Levels").map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="advanced" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.filter(course => course.level === "Advanced" || course.level === "All Levels").map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-neuxtrek-silver mb-4">Subscription Plan</h3>
              <SubscriptionCard isActive={isSubscribed} setIsActive={setIsSubscribed} />
              
              <Card className="mt-6 bg-gradient-to-b from-neuxtrek-silver/5 to-transparent border-neuxtrek-silver/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-neuxtrek-silver">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neuxtrek-silver/70 mb-3">
                    Our team is ready to assist you with any questions about our courses or subscription.
                  </p>
                  <Button variant="outline" className="w-full border-neuxtrek-silver/30 text-neuxtrek-silver hover:bg-neuxtrek-gold/10 hover:text-neuxtrek-gold hover:border-neuxtrek-gold/50">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
