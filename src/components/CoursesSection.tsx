
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ course }) => {
  const IconComponent = course.icon || BookOpen;
  const { t } = useTranslation();
  
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
          <span>{t('courses.level')}: {course.level}</span>
          <span>{course.modules} {t('courses.modules')}</span>
        </div>
        <div className="text-sm text-neuxtrek-silver/60">
          <span>{t('courses.duration')}: {course.duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-neuxtrek-silver/30 text-neuxtrek-silver hover:bg-neuxtrek-gold/10 hover:text-neuxtrek-gold hover:border-neuxtrek-gold/50">
          {t('courses.viewCourse')}
        </Button>
      </CardFooter>
    </Card>
  );
};

const SubscriptionCard = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
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
          <CardTitle className="text-xl text-neuxtrek-silver">{t('courses.premiumAccess')}</CardTitle>
          {isActive && <Badge className="bg-neuxtrek-gold text-black">{t('courses.active')}</Badge>}
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold text-neuxtrek-gold">$50</span>
          <span className="text-neuxtrek-silver/70 ml-1">/{t('courses.month')}</span>
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
            <span className="text-neuxtrek-silver/80">{t('courses.benefits.allCourses')}</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">{t('courses.benefits.community')}</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">{t('courses.benefits.qa')}</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">{t('courses.benefits.certificates')}</span>
          </li>
          <li className="flex items-center">
            <div className="h-5 w-5 rounded-full bg-neuxtrek-gold/20 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neuxtrek-gold">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-neuxtrek-silver/80">{t('courses.benefits.templates')}</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full neuxtrek-btn-primary bg-gradient-to-r from-neuxtrek-gold/80 to-neuxtrek-gold text-black"
          onClick={handleSubscribe}
        >
          {isActive ? t('courses.manageSubscription') : t('courses.subscribeNow')}
        </Button>
      </CardFooter>
    </Card>
  );
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useTranslation();

  // Translated course data
  const courses = [
    {
      id: 1,
      title: t('courses.coursesList.promptEngineering.title'),
      description: t('courses.coursesList.promptEngineering.description'),
      level: t('courses.levels.beginner'),
      modules: 8,
      duration: t('courses.coursesList.promptEngineering.duration'),
      image: "/placeholder.svg",
      tag: t('courses.tags.mostPopular'),
      icon: BookOpen
    },
    {
      id: 2,
      title: t('courses.coursesList.automation.title'),
      description: t('courses.coursesList.automation.description'),
      level: t('courses.levels.intermediate'),
      modules: 12,
      duration: t('courses.coursesList.automation.duration'),
      image: "/placeholder.svg",
      tag: t('courses.tags.new'),
      icon: Book
    },
    {
      id: 3,
      title: t('courses.coursesList.integration.title'),
      description: t('courses.coursesList.integration.description'),
      level: t('courses.levels.advanced'),
      modules: 15,
      duration: t('courses.coursesList.integration.duration'),
      image: "/placeholder.svg",
      tag: t('courses.tags.advanced'),
      icon: GraduationCap
    },
    {
      id: 4,
      title: t('courses.coursesList.business.title'),
      description: t('courses.coursesList.business.description'),
      level: t('courses.levels.intermediate'),
      modules: 6,
      duration: t('courses.coursesList.business.duration'),
      image: "/placeholder.svg",
      tag: null,
      icon: GraduationCap
    },
    {
      id: 5,
      title: t('courses.coursesList.agents.title'),
      description: t('courses.coursesList.agents.description'),
      level: t('courses.levels.advanced'),
      modules: 10,
      duration: t('courses.coursesList.agents.duration'),
      image: "/placeholder.svg",
      tag: t('courses.tags.hot'),
      icon: Book
    },
    {
      id: 6,
      title: t('courses.coursesList.ethics.title'),
      description: t('courses.coursesList.ethics.description'),
      level: t('courses.levels.allLevels'),
      modules: 7,
      duration: t('courses.coursesList.ethics.duration'),
      image: "/placeholder.svg",
      tag: null,
      icon: BookOpen
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neuxtrek-silver mb-4">
            {t('courses.masterTitle.part1')} <span className="text-neuxtrek-gold">{t('courses.masterTitle.part2')}</span> {t('courses.masterTitle.part3')}
          </h2>
          <p className="text-lg text-neuxtrek-silver/70">
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <div className="flex justify-between items-center mb-4">
                  <TabsList className="bg-neuxtrek-silver/10">
                    <TabsTrigger value="all" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">{t('courses.tabs.all')}</TabsTrigger>
                    <TabsTrigger value="beginner" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">{t('courses.levels.beginner')}</TabsTrigger>
                    <TabsTrigger value="intermediate" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">{t('courses.levels.intermediate')}</TabsTrigger>
                    <TabsTrigger value="advanced" className="data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold">{t('courses.levels.advanced')}</TabsTrigger>
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
                    {courses.filter(course => course.level === t('courses.levels.beginner') || course.level === t('courses.levels.allLevels')).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="intermediate" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.filter(course => course.level === t('courses.levels.intermediate') || course.level === t('courses.levels.allLevels')).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="advanced" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.filter(course => course.level === t('courses.levels.advanced') || course.level === t('courses.levels.allLevels')).map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-neuxtrek-silver mb-4">{t('courses.subscriptionPlan')}</h3>
              <SubscriptionCard isActive={isSubscribed} setIsActive={setIsSubscribed} />
              
              <Card className="mt-6 bg-gradient-to-b from-neuxtrek-silver/5 to-transparent border-neuxtrek-silver/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-neuxtrek-silver">{t('courses.needHelp')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neuxtrek-silver/70 mb-3">
                    {t('courses.helpText')}
                  </p>
                  <Button variant="outline" className="w-full border-neuxtrek-silver/30 text-neuxtrek-silver hover:bg-neuxtrek-gold/10 hover:text-neuxtrek-gold hover:border-neuxtrek-gold/50">
                    {t('courses.contactSupport')}
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

