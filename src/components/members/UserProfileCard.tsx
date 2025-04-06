
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserProfileCardProps {
  name: string;
  avatar: string;
  level: number;
  title: string;
  joinDate: string;
  points: number;
}

const UserProfileCard = ({
  name,
  avatar,
  level,
  title,
  joinDate,
  points,
}: UserProfileCardProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 hover:border-[#FFC107] transition-all">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="relative mb-3">
          <div className="h-20 w-20 rounded-full border-2 border-[#FFC107] overflow-hidden">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <Badge className="absolute -bottom-1 -right-1 h-6 w-6 bg-[#FFC107] text-black flex items-center justify-center p-0 rounded-full">
            {level}
          </Badge>
        </div>
        
        <h3 className="font-bold text-white text-lg">{name}</h3>
        <p className="text-sm text-zinc-400">{title}</p>
        
        <div className="mt-3 flex items-center justify-between w-full">
          <span className="text-xs text-zinc-400">Joined {joinDate}</span>
          <span className="text-xs font-medium text-[#FFC107]">{points} points</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
