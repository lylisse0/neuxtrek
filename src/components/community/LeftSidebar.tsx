
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LeftSidebar = () => {
  const filters = [
    { name: 'All', active: true },
    { name: 'General Discussion', active: false },
    { name: 'Resources', active: false },
    { name: 'Announcements', active: false },
    { name: 'Questions', active: false },
    { name: 'Wins', active: false }
  ];

  return (
    <div className="w-full lg:w-1/4 space-y-6">
      {/* Post Input */}
      <div className="bg-[#333333] rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full border-2 border-neuxtrek-gold overflow-hidden flex-shrink-0">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <Input 
            placeholder="Write something..." 
            className="bg-[#222222] border-neuxtrek-gold/30 focus:border-neuxtrek-gold text-neuxtrek-silver placeholder:text-neuxtrek-silver/50"
          />
        </div>
        <Button className="w-full neuxtrek-btn-primary">
          Create Post
        </Button>
      </div>

      {/* Content Filters */}
      <div className="bg-[#333333] rounded-lg p-4">
        <h3 className="text-lg font-medium text-neuxtrek-silver mb-4">Filters</h3>
        <div className="space-y-2">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors w-full text-left ${
                filter.active
                  ? 'bg-neuxtrek-gold text-black'
                  : 'bg-[#222222] text-neuxtrek-silver hover:bg-neuxtrek-gold/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Level System */}
      <div className="bg-[#333333] rounded-lg p-4">
        <h3 className="text-lg font-medium text-neuxtrek-silver mb-4">Level System</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-neuxtrek-gold">🔧</span>
              <span className="text-neuxtrek-silver">Level 1 - Explorer</span>
            </div>
            <span className="text-neuxtrek-silver/70">90%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-neuxtrek-silver/50">🤖</span>
              <span className="text-neuxtrek-silver/50">Level 2 - Novice</span>
            </div>
            <span className="text-neuxtrek-silver/50">5% 🔒</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-neuxtrek-silver/50">⚙️</span>
              <span className="text-neuxtrek-silver/50">Level 3 - Builder</span>
            </div>
            <span className="text-neuxtrek-silver/50">0% 🔒</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
