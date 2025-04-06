
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Flame } from "lucide-react";

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  points: number;
}

interface LeaderboardTableProps {
  weekly: LeaderboardUser[];
  monthly: LeaderboardUser[];
  allTime: LeaderboardUser[];
}

const LeaderboardTable = ({ weekly, monthly, allTime }: LeaderboardTableProps) => {
  const renderMedal = (rank: number) => {
    if (rank === 1) return <span className="text-yellow-500">🥇</span>;
    if (rank === 2) return <span className="text-gray-300">🥈</span>;
    if (rank === 3) return <span className="text-amber-600">🥉</span>;
    return <span className="text-zinc-500">{rank}</span>;
  };

  const renderTable = (data: LeaderboardUser[]) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400">RANK</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-400">USER</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-zinc-400">POINTS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.rank} className="border-b border-zinc-700/50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white w-12">
                  {renderMedal(user.rank)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                      <img src={user.avatar} alt={user.name} />
                    </div>
                    <div className="flex items-center">
                      <span className="text-white font-medium">{user.name}</span>
                      {user.rank === 1 && (
                        <Flame className="h-4 w-4 ml-2 text-[#FFC107]" />
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-[#FFC107]">
                  {user.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Card className="bg-zinc-800 border-zinc-700">
      <CardHeader className="pb-0">
        <h2 className="text-xl font-bold text-white">Leaderboards</h2>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4 bg-zinc-900">
            <TabsTrigger 
              value="weekly" 
              className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black"
            >
              7-day
            </TabsTrigger>
            <TabsTrigger 
              value="monthly" 
              className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black"
            >
              30-day
            </TabsTrigger>
            <TabsTrigger 
              value="allTime" 
              className="data-[state=active]:bg-[#FFC107] data-[state=active]:text-black"
            >
              All-time
            </TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            {renderTable(weekly)}
          </TabsContent>
          <TabsContent value="monthly">
            {renderTable(monthly)}
          </TabsContent>
          <TabsContent value="allTime">
            {renderTable(allTime)}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LeaderboardTable;
