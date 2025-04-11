
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

const ClassroomMain = () => {
  const [coursesPage, setCoursesPage] = useState(1);
  const { t } = useTranslation();
  
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: t('courses.promptEngineering.title'),
      thumbnail: '/placeholder.svg',
      description: t('courses.promptEngineering.description'),
      progress: 65,
      tag: 'NXT+'
    },
    {
      id: 2,
      title: t('courses.automation.title'),
      thumbnail: '/placeholder.svg',
      description: t('courses.automation.description'),
      progress: 42,
      tag: 'NXT+'
    },
    {
      id: 3,
      title: t('courses.integration.title'),
      thumbnail: '/placeholder.svg',
      description: t('courses.integration.description'),
      progress: 0,
      tag: 'NXT+'
    },
    {
      id: 4,
      title: t('courses.business.title'),
      thumbnail: '/placeholder.svg',
      description: t('courses.business.description'),
      progress: 0,
      tag: 'NXT+'
    }
  ];
  
  const coursesPerPage = 2;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const currentCourses = courses.slice(
    (coursesPage - 1) * coursesPerPage, 
    coursesPage * coursesPerPage
  );

  return (
    <div className="w-full lg:w-3/4">
      <h1 className="text-3xl font-bold mb-8 text-neuxtrek-gold">{t('navbar.courses')}</h1>
      
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
                  <span className="text-xs text-neuxtrek-silver/70">{t('common.progress')}</span>
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
                {course.progress > 0 ? t('common.continue') : t('common.start')} {t('courses.course')}
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
    </div>
  );
};

export default ClassroomMain;
