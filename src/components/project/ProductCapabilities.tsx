
import { Button } from "@/components/ui/button";
import { Image, Text, Play } from 'lucide-react';

const ProductCapabilities = () => {
  return (
    <div className="bg-[#2E2E2E] p-6 rounded-lg mb-12">
      <div className="bg-neuxtrek-gold text-black p-3 mb-6 rounded">
        <p className="text-sm font-medium">Limited offer! Unlock a lifetime of creativity with 3 months at 100% off!</p>
        <Button variant="outline" size="sm" className="mt-2 bg-white text-black border-black">
          Login
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button className="flex-1 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90 h-auto py-4 flex flex-col">
          <Image size={24} className="mb-2" />
          <span>Create Image</span>
          <span className="text-xs mt-1">Edit Image</span>
        </Button>
        
        <Button className="flex-1 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90 h-auto py-4 flex flex-col">
          <Text size={24} className="mb-2" />
          <span>Create Character</span>
          <span className="text-xs mt-1">Create Video</span>
        </Button>
        
        <Button className="flex-1 bg-neuxtrek-gold text-black hover:bg-neuxtrek-gold/90 h-auto py-4 flex flex-col">
          <Play size={24} className="mb-2" />
          <span>Quick Start</span>
          <span className="text-xs mt-1">Explore Models</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCapabilities;
