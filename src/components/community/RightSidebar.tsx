
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Rocket, Scroll } from "lucide-react";

const RightSidebar = () => {
  return (
    <aside className="w-72 border-l border-zinc-800 p-4 hidden lg:block overflow-y-auto">
      {/* Pinned Post / About Community */}
      <Card className="bg-zinc-800 border-[#FFC107] mb-6">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-12 w-12 rounded-full border-2 border-[#FFC107] overflow-hidden">
              <img
                src="https://i.pravatar.cc/100?img=2"
                alt="Founder"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-white">AI Automation Society</h3>
              <p className="text-xs text-zinc-400">Founded by NeuxTrek</p>
            </div>
          </div>
          <p className="text-sm text-zinc-300 mb-4">
            A community for mastering AI automation techniques, connecting with experts, and sharing your achievements.
          </p>
          <div className="space-y-1 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Members</span>
              <span className="text-white">38,452</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Online</span>
              <span className="text-white">1,283</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Admins</span>
              <span className="text-white">5</span>
            </div>
          </div>
          <Button className="w-full bg-[#FFC107] text-black hover:bg-[#FFD54F] font-medium">
            INVITE PEOPLE
          </Button>
        </CardContent>
      </Card>

      {/* Links & Options */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-zinc-400 mb-2">OPTIONS</h3>
        <a href="#" className="flex items-center space-x-2 text-sm text-white hover:text-[#FFC107]">
          <Rocket className="h-4 w-4 text-[#FFC107]" />
          <span>Upgrade to NeuxTrek+</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-sm text-white hover:text-[#FFC107]">
          <Scroll className="h-4 w-4 text-[#FFC107]" />
          <span>Rules and Guidelines</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-sm text-white hover:text-[#FFC107]">
          <Flame className="h-4 w-4 text-[#FFC107]" />
          <span>Trending Topics</span>
        </a>
      </div>
    </aside>
  );
};

export default RightSidebar;
