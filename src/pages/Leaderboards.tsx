
import CommunityLayout from "@/components/layout/CommunityLayout";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Leaderboards = () => {
  // Sample leaderboard data
  const leaderboardData = {
    weekly: [
      { rank: 1, name: "Sarah Johnson", avatar: "https://i.pravatar.cc/150?img=5", points: 320 },
      { rank: 2, name: "Michael Chen", avatar: "https://i.pravatar.cc/150?img=12", points: 285 },
      { rank: 3, name: "Jessica Williams", avatar: "https://i.pravatar.cc/150?img=23", points: 260 },
      { rank: 4, name: "David Rodriguez", avatar: "https://i.pravatar.cc/150?img=53", points: 210 },
      { rank: 5, name: "Emily Thompson", avatar: "https://i.pravatar.cc/150?img=32", points: 185 },
    ],
    monthly: [
      { rank: 1, name: "David Rodriguez", avatar: "https://i.pravatar.cc/150?img=53", points: 980 },
      { rank: 2, name: "Sarah Johnson", avatar: "https://i.pravatar.cc/150?img=5", points: 870 },
      { rank: 3, name: "Olivia Garcia", avatar: "https://i.pravatar.cc/150?img=18", points: 740 },
      { rank: 4, name: "Michael Chen", avatar: "https://i.pravatar.cc/150?img=12", points: 690 },
      { rank: 5, name: "Robert Kim", avatar: "https://i.pravatar.cc/150?img=27", points: 580 },
    ],
    allTime: [
      { rank: 1, name: "David Rodriguez", avatar: "https://i.pravatar.cc/150?img=53", points: 5240 },
      { rank: 2, name: "Sarah Johnson", avatar: "https://i.pravatar.cc/150?img=5", points: 4620 },
      { rank: 3, name: "Olivia Garcia", avatar: "https://i.pravatar.cc/150?img=18", points: 3895 },
      { rank: 4, name: "Michael Chen", avatar: "https://i.pravatar.cc/150?img=12", points: 3150 },
      { rank: 5, name: "Jessica Williams", avatar: "https://i.pravatar.cc/150?img=23", points: 2780 },
    ],
  };

  // Level system data
  const levels = [
    { level: 1, name: "Explorer", emoji: "🔍", percentage: 90, unlocked: true },
    { level: 2, name: "Novice", emoji: "🌱", percentage: 5, unlocked: true },
    { level: 3, name: "Apprentice", emoji: "🛠️", percentage: 0, unlocked: false },
    { level: 4, name: "Specialist", emoji: "🤖", percentage: 0, unlocked: false },
    { level: 5, name: "Expert", emoji: "⭐", percentage: 0, unlocked: false },
  ];

  return (
    <CommunityLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Achievements & Rankings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Leaderboard Column */}
          <div className="lg:col-span-2">
            <LeaderboardTable 
              weekly={leaderboardData.weekly} 
              monthly={leaderboardData.monthly} 
              allTime={leaderboardData.allTime} 
            />
          </div>
          
          {/* User Progress Column */}
          <div className="space-y-6">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader className="pb-0">
                <h2 className="text-xl font-bold text-white">Your Progress</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <div className="h-16 w-16 rounded-full border-2 border-[#FFC107] overflow-hidden">
                      <img
                        src="https://i.pravatar.cc/150?img=2"
                        alt="Your profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-[#FFC107] text-black flex items-center justify-center rounded-full text-sm font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Your Account</h3>
                    <p className="text-sm text-zinc-400">Level 2 - Novice</p>
                    <p className="text-xs text-[#FFC107]">45 points to level up</p>
                  </div>
                </div>
                
                <div className="text-xs text-zinc-400 mt-4 mb-1">
                  Last updated: April 6, 2025
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-bold text-white">Level System</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {levels.map((level) => (
                    <div key={level.level} className="flex items-center">
                      <div className="w-8 text-center mr-2">
                        {level.unlocked ? (
                          <span className="text-lg">{level.emoji}</span>
                        ) : (
                          <span className="text-zinc-600">🔒</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className={level.unlocked ? "text-white" : "text-zinc-600"}>
                            Level {level.level} - {level.name}
                          </span>
                          <span className={level.unlocked ? "text-zinc-400" : "text-zinc-600"}>
                            {level.percentage}%
                          </span>
                        </div>
                        <Progress value={level.percentage} className="h-1.5 bg-zinc-700">
                          <div
                            className="h-full bg-[#FFC107]"
                            style={{ width: `${level.percentage}%` }}
                          ></div>
                        </Progress>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CommunityLayout>
  );
};

export default Leaderboards;
