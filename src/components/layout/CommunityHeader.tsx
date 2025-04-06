
import { Link, useLocation } from "react-router-dom";
import { Bell, MessageCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const CommunityHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Community", path: "/community" },
    { name: "Classroom", path: "/classroom" },
    { name: "Members", path: "/members" },
    { name: "Map", path: "/map" },
    { name: "Leaderboards", path: "/leaderboards" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="border-b border-zinc-800 bg-black">
      <div className="container mx-auto">
        {/* Logo and main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">
              Neux<span className="text-[#FFC107]">T</span>rek
            </span>
            <span className="text-sm">AI Automation Agency</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPath === item.path
                    ? "text-[#FFC107] border-b-2 border-[#FFC107]"
                    : "text-white hover:text-[#FFC107]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-white" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 bg-[#FFC107] text-black flex items-center justify-center p-0 text-xs rounded-full">
                83
              </Badge>
            </div>
            <div className="relative">
              <MessageCircle className="h-5 w-5 text-white" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 bg-[#FFC107] text-black flex items-center justify-center p-0 text-xs rounded-full">
                1
              </Badge>
            </div>
            <Link to="/profile">
              <div className="h-8 w-8 rounded-full border-2 border-[#FFC107] overflow-hidden">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex justify-center py-3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              type="search"
              placeholder="Search members or content..."
              className="pl-10 bg-zinc-800 border-zinc-700 text-white w-full focus-visible:ring-[#FFC107]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommunityHeader;
