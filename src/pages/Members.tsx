
import { useState } from "react";
import CommunityLayout from "@/components/layout/CommunityLayout";
import UserProfileCard from "@/components/members/UserProfileCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=5",
      level: 5,
      title: "Automation Expert",
      joinDate: "Jan 2023",
      points: 1430,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=12",
      level: 4,
      title: "AI Developer",
      joinDate: "Mar 2023",
      points: 890,
    },
    {
      id: 3,
      name: "Jessica Williams",
      avatar: "https://i.pravatar.cc/150?img=23",
      level: 3,
      title: "Content Creator",
      joinDate: "Jun 2023",
      points: 650,
    },
    {
      id: 4,
      name: "David Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=53",
      level: 6,
      title: "ML Engineer",
      joinDate: "Nov 2022",
      points: 1820,
    },
    {
      id: 5,
      name: "Emily Thompson",
      avatar: "https://i.pravatar.cc/150?img=32",
      level: 2,
      title: "Marketing Specialist",
      joinDate: "Aug 2023",
      points: 280,
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=65",
      level: 3,
      title: "Business Owner",
      joinDate: "Apr 2023",
      points: 520,
    },
    {
      id: 7,
      name: "Olivia Garcia",
      avatar: "https://i.pravatar.cc/150?img=18",
      level: 5,
      title: "Data Scientist",
      joinDate: "Feb 2023",
      points: 1250,
    },
    {
      id: 8,
      name: "Robert Kim",
      avatar: "https://i.pravatar.cc/150?img=27",
      level: 4,
      title: "Automation Consultant",
      joinDate: "May 2023",
      points: 960,
    },
  ];

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CommunityLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">Community Members</h1>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              type="search"
              placeholder="Search members..."
              className="pl-10 bg-zinc-800 border-zinc-700 text-white w-full focus-visible:ring-[#FFC107]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <UserProfileCard key={member.id} {...member} />
          ))}
        </div>
        
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">No members found matching your search.</p>
          </div>
        )}
      </div>
    </CommunityLayout>
  );
};

export default Members;
