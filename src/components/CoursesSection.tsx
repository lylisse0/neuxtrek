
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { toast } from "sonner";
import { useState } from "react";

const coursesData = [
  {
    id: 1,
    title: "AI Automation Fundamentals",
    description: "Learn the core concepts of AI automation and how to implement them in various business scenarios.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1000&auto=format&fit=crop",
    students: 243,
    duration: "6 weeks",
    isPremium: true,
    category: "beginner"
  },
  {
    id: 2,
    title: "Practical ML Model Deployment",
    description: "Master the process of deploying machine learning models for real-world automation use cases.",
    image: "https://images.unsplash.com/photo-1669017404730-7eb7a5c060c6?q=80&w=1000&auto=format&fit=crop",
    students: 189,
    duration: "8 weeks",
    isPremium: true,
    category: "intermediate"
  },
  {
    id: 3,
    title: "AI Workflow Optimization",
    description: "Learn how to optimize business workflows using advanced AI techniques and automation tools.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    students: 156,
    duration: "5 weeks",
    isPremium: true,
    category: "advanced"
  },
  {
    id: 4,
    title: "Introduction to AI Agents",
    description: "Get started with AI agents and learn how they can automate complex tasks in your organization.",
    image: "https://images.unsplash.com/photo-1681483476977-722c16e62b56?q=80&w=1000&auto=format&fit=crop",
    students: 312,
    duration: "4 weeks",
    isPremium: true,
    category: "beginner"
  },
  {
    id: 5,
    title: "Data Processing for AI Systems",
    description: "Master data preparation and processing techniques essential for effective AI automation.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop",
    students: 175,
    duration: "7 weeks",
    isPremium: true,
    category: "intermediate"
  },
  {
    id: 6,
    title: "Enterprise AI Integration",
    description: "Learn strategies for successfully integrating AI automation into enterprise environments.",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1000&auto=format&fit=crop",
    students: 128,
    duration: "9 weeks",
    isPremium: true,
    category: "advanced"
  }
];

const CoursesSection = () => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const handleEnroll = (courseId: number) => {
    setSelectedCourse(courseId);
    setShowSubscriptionModal(true);
  };

  const handleSubscribe = () => {
    // This would be connected to a payment gateway in a real implementation
    toast.success("Subscription successful! You now have access to all premium courses.");
    setShowSubscriptionModal(false);
  };

  const handleCloseModal = () => {
    setShowSubscriptionModal(false);
  };

  return (
    <div className="neuxtrek-container neuxtrek-section">
      <div className="text-center mb-12">
        <h2 className="neuxtrek-heading mb-4">AI Automation <span className="gold-text">Courses</span></h2>
        <p className="neuxtrek-paragraph max-w-2xl mx-auto">
          Master the latest AI automation techniques with our expert-led courses.
          Join our community of AI professionals and take your skills to the next level.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-12">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-neuxtrek-silver/5 border border-neuxtrek-silver/20">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map(course => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                students={course.students}
                duration={course.duration}
                isPremium={course.isPremium}
                onEnroll={() => handleEnroll(course.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="beginner" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData
              .filter(course => course.category === "beginner")
              .map(course => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  students={course.students}
                  duration={course.duration}
                  isPremium={course.isPremium}
                  onEnroll={() => handleEnroll(course.id)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="intermediate" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData
              .filter(course => course.category === "intermediate")
              .map(course => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  students={course.students}
                  duration={course.duration}
                  isPremium={course.isPremium}
                  onEnroll={() => handleEnroll(course.id)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData
              .filter(course => course.category === "advanced")
              .map(course => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  students={course.students}
                  duration={course.duration}
                  isPremium={course.isPremium}
                  onEnroll={() => handleEnroll(course.id)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gradient-to-r from-neuxtrek-silver/10 to-black border border-neuxtrek-silver/20 rounded-xl p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Premium <span className="gold-text">Subscription</span></h3>
            <p className="mb-4 text-neuxtrek-silver/80">Get unlimited access to all our premium courses and future releases</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-neuxtrek-gold">✓</span>
                <span>All premium courses included</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neuxtrek-gold">✓</span>
                <span>Expert instructor support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neuxtrek-gold">✓</span>
                <span>Completion certificates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neuxtrek-gold">✓</span>
                <span>Access to community forum</span>
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="text-neuxtrek-gold text-4xl font-bold mb-2">$50</div>
            <div className="text-neuxtrek-silver/70 mb-4">per month</div>
            <Button 
              className="bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black"
              size="lg"
              onClick={() => setShowSubscriptionModal(true)}
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-neuxtrek-black border border-neuxtrek-silver/30 rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-neuxtrek-silver/70 hover:text-neuxtrek-silver"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Subscribe to <span className="gold-text">Premium</span>
            </h3>
            <p className="mb-6 text-center text-neuxtrek-silver/80">
              {selectedCourse 
                ? `Get access to "${coursesData.find(c => c.id === selectedCourse)?.title}" and all other premium courses for $50/month`
                : "Get unlimited access to all premium courses for $50/month"}
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between p-4 border border-neuxtrek-silver/20 rounded-md bg-neuxtrek-silver/5">
                <span>Monthly Subscription</span>
                <span className="font-bold">$50.00</span>
              </div>
              <div className="flex justify-between p-4 border border-neuxtrek-gold/30 rounded-md bg-neuxtrek-gold/5">
                <span>Total Today</span>
                <span className="font-bold text-neuxtrek-gold">$50.00</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black mb-4"
              size="lg"
              onClick={handleSubscribe}
            >
              Subscribe Now
            </Button>
            <p className="text-xs text-neuxtrek-silver/60 text-center">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
              You can cancel your subscription anytime.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
