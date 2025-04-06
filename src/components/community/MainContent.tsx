
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for posts
const communityPosts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    profilePic: '/placeholder.svg',
    status: '8d - Wins',
    title: 'Finally completed my AI automation workflow! 🎉',
    content: 'After weeks of testing, I finally got my email automation workflow working with 95% accuracy. The key was using better prompt engineering techniques from the course module 3! 🚀',
    likes: 317,
    comments: 234,
    lastComment: '5m'
  },
  {
    id: 2,
    author: 'Michael Chen',
    profilePic: '/placeholder.svg',
    status: '2d - Questions',
    title: 'Help needed with API integration 🤔',
    content: 'I\'m trying to connect my workflow to the OpenAI API but keep getting rate limit errors. Has anyone found a good way to handle this in production?',
    likes: 126,
    comments: 89,
    lastComment: '1h'
  },
  {
    id: 3,
    author: 'Alex Rodriguez',
    profilePic: '/placeholder.svg',
    status: '1d - Resources',
    title: 'Shared my AI prompt cheatsheet!',
    content: 'For everyone struggling with prompt engineering, I made a comprehensive cheatsheet based on course materials and my own research. Feel free to use it! 📄✨',
    likes: 425,
    comments: 103,
    lastComment: '15m'
  }
];

// Mock data for courses
const courses = [
  {
    id: 1,
    title: 'AI Prompt Engineering Masterclass',
    thumbnail: '/placeholder.svg',
    description: 'Learn the art of crafting effective prompts for AI models',
    progress: 65,
    tag: 'NXT+'
  },
  {
    id: 2,
    title: 'AI Automation Workflows',
    thumbnail: '/placeholder.svg',
    description: 'Build end-to-end automation workflows using AI',
    progress: 42,
    tag: 'NXT+'
  },
  {
    id: 3,
    title: 'Advanced AI Integration',
    thumbnail: '/placeholder.svg',
    description: 'Connect AI models to existing applications',
    progress: 0,
    tag: 'NXT+'
  },
  {
    id: 4,
    title: 'AI for Business Leaders',
    thumbnail: '/placeholder.svg',
    description: 'Strategic implementation of AI technologies',
    progress: 0,
    tag: 'NXT+'
  }
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('community');
  const [coursesPage, setCoursesPage] = useState(1);
  const coursesPerPage = 2;
  
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const currentCourses = courses.slice(
    (coursesPage - 1) * coursesPerPage, 
    coursesPage * coursesPerPage
  );

  return (
    <div className="w-full lg:w-2/4">
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full bg-[#222222] mb-6">
          <TabsTrigger 
            value="community" 
            className="flex-1 data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold"
          >
            Community
          </TabsTrigger>
          <TabsTrigger 
            value="classroom" 
            className="flex-1 data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold"
          >
            Classroom
          </TabsTrigger>
        </TabsList>

        <TabsContent value="community" className="space-y-6 mt-0">
          {communityPosts.map(post => (
            <Card key={post.id} className="bg-[#333333] border-neuxtrek-silver/20 hover:border-neuxtrek-gold/30 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border-2 border-neuxtrek-gold overflow-hidden">
                    <img
                      src={post.profilePic}
                      alt={post.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neuxtrek-silver">{post.author}</h3>
                    <p className="text-xs text-neuxtrek-silver/50">{post.status}</p>
                  </div>
                </div>
                <CardTitle className="text-xl mt-3 text-neuxtrek-silver">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-neuxtrek-silver/70">{post.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors">
                    <Heart size={16} />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors">
                    <MessageSquare size={16} />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
                <a href="#" className="text-sm text-neuxtrek-gold hover:text-neuxtrek-gold/80 transition-colors">
                  New comment {post.lastComment} ago
                </a>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="classroom" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentCourses.map(course => (
              <Card key={course.id} className="bg-gradient-to-b from-[#333333] to-[#222222] border-neuxtrek-silver/20 hover:border-neuxtrek-gold/30 transition-all overflow-hidden">
                <div className="relative h-32 bg-[#222]">
                  <img 
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-neuxtrek-gold text-black font-medium">
                      {course.tag}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-neuxtrek-silver">{course.title}</CardTitle>
                  <CardDescription className="text-neuxtrek-silver/70">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neuxtrek-silver/70">Progress</span>
                      <span className="text-xs text-neuxtrek-gold">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#555] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neuxtrek-gold rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full neuxtrek-btn-primary">
                    {course.progress > 0 ? 'Continue' : 'Start'} Course
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCoursesPage(p => Math.max(1, p - 1))}
              disabled={coursesPage === 1}
              className="border-neuxtrek-gold/40 text-neuxtrek-silver hover:bg-neuxtrek-gold/10 hover:text-neuxtrek-gold"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="sm"
                  onClick={() => setCoursesPage(i + 1)}
                  className={`size-8 p-0 ${
                    i + 1 === coursesPage
                      ? 'bg-neuxtrek-gold text-black'
                      : 'text-neuxtrek-silver hover:text-neuxtrek-gold hover:bg-neuxtrek-gold/10'
                  }`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCoursesPage(p => Math.min(totalPages, p + 1))}
              disabled={coursesPage === totalPages}
              className="border-neuxtrek-gold/40 text-neuxtrek-silver hover:bg-neuxtrek-gold/10 hover:text-neuxtrek-gold"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContent;
