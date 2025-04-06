
import CommunityLayout from "@/components/layout/CommunityLayout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <CommunityLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">About AI Automation Society</h1>
        
        <Card className="bg-zinc-800 border-zinc-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <div className="rounded-md overflow-hidden border-2 border-[#FFC107]">
                  <img
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"
                    alt="Community banner"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-zinc-300 mb-4">
                  The AI Automation Society is a premium community dedicated to helping professionals master 
                  the art and science of AI-powered automation. Our mission is to create a supportive environment 
                  where members can learn, grow, and achieve mastery in automation technologies that drive business success.
                </p>
                <p className="text-zinc-300">
                  Founded by NeuxTrek AI Automation Agency in 2023, we've grown to over 38,000 members worldwide,
                  all working together to advance their careers and businesses through the power of AI automation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What We Offer</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Premium courses taught by industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Active community of practice for peer learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Weekly live workshops and Q&A sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Resource library with scripts, templates and guides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Mentorship opportunities with automation leaders</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Community Values</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Collaboration over competition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Continuous learning and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Responsible and ethical use of AI technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Knowledge sharing and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC107] mr-2">•</span>
                  <span>Inclusivity and respect for all members</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-zinc-800 border-zinc-700">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Meet the Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="text-center">
                  <div className="h-20 w-20 rounded-full border-2 border-[#FFC107] overflow-hidden mx-auto mb-2">
                    <img
                      src={`https://i.pravatar.cc/150?img=${num + 10}`}
                      alt="Team member"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-white">Team Member {num}</h4>
                  <p className="text-xs text-zinc-400">Role Title</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </CommunityLayout>
  );
};

export default About;
