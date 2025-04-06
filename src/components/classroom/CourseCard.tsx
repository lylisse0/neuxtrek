
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  description: string;
  thumbnail: string;
  badge?: string;
  progress: number;
}

const CourseCard = ({
  title,
  description,
  thumbnail,
  badge,
  progress,
}: CourseCardProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-[#FFC107] transition-all">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
        {badge && (
          <Badge className="absolute top-3 right-3 bg-[#FFC107] text-black font-bold">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
        <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400">Progress</span>
            <span className="text-[#FFC107]">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5 bg-zinc-700">
            <div
              className="h-full bg-[#FFC107]"
              style={{ width: `${progress}%` }}
            ></div>
          </Progress>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
