
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  students: number;
  duration: string;
  isPremium?: boolean;
  onEnroll: () => void;
}

const CourseCard = ({
  title,
  description,
  image,
  students,
  duration,
  isPremium = false,
  onEnroll
}: CourseCardProps) => {
  return (
    <Card className={cn(
      "h-full overflow-hidden neuxtrek-card transition-all duration-300 hover:scale-[1.02]",
      isPremium && "relative border-neuxtrek-gold/40 hover:border-neuxtrek-gold"
    )}>
      {isPremium && (
        <div className="absolute top-3 right-3 bg-neuxtrek-gold text-black text-xs font-bold px-2 py-0.5 rounded-full">
          PREMIUM
        </div>
      )}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-3 text-xs text-neuxtrek-silver/70">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{duration}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-neuxtrek-silver/80">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onEnroll}
          className={cn(
            "w-full",
            isPremium 
              ? "bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black" 
              : "bg-neuxtrek-silver/10 hover:bg-neuxtrek-silver/20 text-neuxtrek-silver"
          )}
        >
          {isPremium ? "Enroll Now" : "Learn More"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
