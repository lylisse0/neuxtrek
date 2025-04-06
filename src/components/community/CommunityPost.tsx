
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2 } from "lucide-react";

interface CommunityPostProps {
  author: {
    name: string;
    image: string;
    timeAgo: string;
    badge?: string;
  };
  content: {
    title: string;
    text: string;
    image?: string;
  };
  engagement: {
    likes: number;
    comments: number;
    lastComment?: string;
  };
}

const CommunityPost = ({ author, content, engagement }: CommunityPostProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 mb-4">
      <CardContent className="p-4">
        {/* Author info */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="h-10 w-10 rounded-full border-2 border-[#FFC107] overflow-hidden">
            <img
              src={author.image}
              alt={author.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="font-bold text-white">{author.name}</h3>
              {author.badge && (
                <span className="ml-2 px-1.5 py-0.5 bg-[#FFC107] text-black text-xs rounded">
                  {author.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-400">{author.timeAgo}</p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-white mb-2">{content.title}</h4>
          <p className="text-zinc-300">{content.text}</p>
          {content.image && (
            <div className="mt-3 rounded-md overflow-hidden">
              <img
                src={content.image}
                alt="Post image"
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between border-t border-zinc-700 pt-3">
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-[#FFC107]">
              <Heart className="h-4 w-4 mr-1" />
              <span>{engagement.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-[#FFC107]">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{engagement.comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-[#FFC107]">
              <Share2 className="h-4 w-4 mr-1" />
              <span>Share</span>
            </Button>
          </div>
          {engagement.lastComment && (
            <span className="text-xs text-[#FFC107]">{engagement.lastComment}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityPost;
