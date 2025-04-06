
import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { Link } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
  active: boolean;
}

const CommunityHeader = () => {
  const navigation: NavigationItem[] = [
    { name: 'Community', href: '#community', active: true },
    { name: 'Classroom', href: '#classroom', active: false },
    { name: 'Members', href: '#members', active: false },
    { name: 'Map', href: '#map', active: false },
    { name: 'Leaderboards', href: '#leaderboards', active: false },
    { name: 'About', href: '#about', active: false },
  ];

  return (
    <div className="w-full border-b border-neuxtrek-silver/10 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <Logo isScrolled={false} />
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neuxtrek-silver/70" />
              <Input 
                type="search" 
                placeholder="Search members..." 
                className="w-64 pl-10 bg-[#333333] border-[#555555] text-neuxtrek-silver placeholder:text-neuxtrek-silver/50"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative cursor-pointer">
                <Bell className="h-5 w-5 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neuxtrek-gold text-xs text-black font-medium">
                  83
                </span>
              </div>
              
              <div className="relative cursor-pointer">
                <MessageSquare className="h-5 w-5 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neuxtrek-gold text-xs text-black font-medium">
                  1
                </span>
              </div>
              
              <div className="h-8 w-8 rounded-full border-2 border-neuxtrek-gold overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <nav className="flex items-center space-x-6 mt-2 overflow-x-auto pb-2 scrollbar-none">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-1 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                item.active 
                  ? "text-neuxtrek-gold border-b-2 border-neuxtrek-gold" 
                  : "text-neuxtrek-silver hover:text-neuxtrek-gold"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CommunityHeader;
