
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LeftSidebar = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", name: "All" },
    { id: "general", name: "General Discussion" },
    { id: "resources", name: "Resources" },
    { id: "questions", name: "Q&A" },
    { id: "wins", name: "Wins" },
  ];

  return (
    <aside className="w-64 border-r border-zinc-800 p-4 hidden md:block overflow-y-auto">
      {/* Post Input */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full border-2 border-[#FFC107] overflow-hidden">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-white">Share something...</span>
        </div>
        <div className="relative">
          <Input
            placeholder="Write something..."
            className="bg-zinc-800 border-[#FFC107] text-white"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1 bg-[#FFC107] text-black hover:bg-[#FFD54F]"
          >
            Post
          </Button>
        </div>
      </div>

      {/* Content Filters */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-zinc-400 mb-2">FILTERS</h3>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
              activeFilter === filter.id
                ? "bg-[#FFC107] text-black font-medium"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
