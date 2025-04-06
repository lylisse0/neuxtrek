
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-4">NeuxTrek AI Automation Agency</h1>
        <p className="text-xl text-gray-300 mb-8">
          Empowering businesses through advanced AI automation solutions
        </p>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
            <h2 className="text-2xl font-bold mb-3">AI Automation Training</h2>
            <p className="text-gray-300 mb-6">
              Join our premium courses and become an AI automation expert. Get access to our community-driven learning platform.
            </p>
            <Link to="/community">
              <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-bold py-3 px-8 rounded-md transition-all">
                Subscribe Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
