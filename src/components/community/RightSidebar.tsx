
import React, { useState } from 'react';
import { Rocket, Scroll, Flame } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for leaderboard
const leaderboardUsers = [
  { id: 1, name: 'Alex Chen', points: 1245, rank: 1, avatar: '/placeholder.svg' },
  { id: 2, name: 'Maria Garcia', points: 1120, rank: 2, avatar: '/placeholder.svg' },
  { id: 3, name: 'James Wilson', points: 980, rank: 3, avatar: '/placeholder.svg' },
  { id: 4, name: 'Emma Lee', points: 875, rank: 4, avatar: '/placeholder.svg' },
  { id: 5, name: 'Robert Brown', points: 750, rank: 5, avatar: '/placeholder.svg' },
];

const RightSidebar = () => {
  const [leaderboardPeriod, setLeaderboardPeriod] = useState('7-day');
  
  return (
    <div className="w-full lg:w-1/4 space-y-6">
      {/* Community Info Card */}
      <Card className="bg-[#333333] border-neuxtrek-gold/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-neuxtrek-silver">AI Automation Society</CardTitle>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="mb-4">
            <img
              src="/placeholder.svg"
              alt="Community"
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <p className="text-sm text-neuxtrek-silver/70">
              A community for mastering AI automation workflows and prompt engineering techniques. Connect with fellow automation experts and level up your skills!
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 mr-2 text-neuxtrek-gold">👥</div>
              <span className="text-neuxtrek-silver">38,574 Members</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 mr-2 text-neuxtrek-gold">🟢</div>
              <span className="text-neuxtrek-silver">142 Online</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 mr-2 text-neuxtrek-gold">👑</div>
              <span className="text-neuxtrek-silver">5 Admins</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full neuxtrek-btn-primary">
            INVITE PEOPLE
          </Button>
        </CardFooter>
      </Card>
      
      {/* User Profile */}
      <Card className="bg-[#333333] border-neuxtrek-silver/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-full border-2 border-neuxtrek-gold overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-neuxtrek-gold text-xs text-black font-medium">
                1
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium text-neuxtrek-silver">Your Name</h3>
              <p className="text-xs text-neuxtrek-silver/70">Level 1 - Explorer</p>
              <p className="text-xs text-neuxtrek-gold">5 points to level up</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-neuxtrek-silver/70">Progress to Level 2</span>
              <span className="text-xs text-neuxtrek-gold">45/50 points</span>
            </div>
            <div className="h-2 bg-[#555] rounded-full overflow-hidden">
              <div 
                className="h-full bg-neuxtrek-gold rounded-full"
                style={{ width: `90%` }}
              ></div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-xs text-neuxtrek-silver/50">
          Last updated: April 6, 2025
        </CardFooter>
      </Card>
      
      {/* Links */}
      <Card className="bg-[#333333] border-neuxtrek-silver/20">
        <CardContent className="py-4">
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2 text-sm text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors">
              <Rocket size={16} className="text-neuxtrek-gold" />
              <span>Upgrade to NXT+</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors">
              <Scroll size={16} className="text-neuxtrek-gold" />
              <span>Rules and Guidelines</span>
            </a>
          </div>
        </CardContent>
      </Card>
      
      {/* Leaderboards */}
      <Card className="bg-[#333333] border-neuxtrek-silver/20">
        <CardHeader>
          <CardTitle className="text-lg text-neuxtrek-silver flex items-center gap-2">
            <Flame size={20} className="text-neuxtrek-gold" /> 
            Leaderboards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={leaderboardPeriod} value={leaderboardPeriod} onValueChange={setLeaderboardPeriod}>
            <TabsList className="w-full bg-[#222222] mb-4">
              <TabsTrigger 
                value="7-day" 
                className="flex-1 data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold"
              >
                7-day
              </TabsTrigger>
              <TabsTrigger 
                value="30-day" 
                className="flex-1 data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold"
              >
                30-day
              </TabsTrigger>
              <TabsTrigger 
                value="all-time" 
                className="flex-1 data-[state=active]:bg-neuxtrek-gold/20 data-[state=active]:text-neuxtrek-gold"
              >
                All-time
              </TabsTrigger>
            </TabsList>
            
            {['7-day', '30-day', 'all-time'].map((period) => (
              <TabsContent key={period} value={period} className="mt-0">
                <ol className="space-y-3">
                  {leaderboardUsers.map((user) => (
                    <li key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-5">
                          {user.rank === 1 && <span className="text-yellow-300">🥇</span>}
                          {user.rank === 2 && <span className="text-gray-300">🥈</span>}
                          {user.rank === 3 && <span className="text-amber-700">🥉</span>}
                          {user.rank > 3 && <span className="text-xs text-neuxtrek-silver/70">{user.rank}</span>}
                        </div>
                        <div className="h-6 w-6 rounded-full border border-neuxtrek-gold/50 overflow-hidden">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-neuxtrek-silver">{user.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-neuxtrek-gold">{user.points}</span>
                        {user.rank === 1 && <span className="text-xs">🔥</span>}
                      </div>
                    </li>
                  ))}
                </ol>
                <a href="#" className="block text-center text-sm text-neuxtrek-gold hover:text-neuxtrek-gold/80 mt-4">
                  View full leaderboard
                </a>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
