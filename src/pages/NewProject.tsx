
import { useState, useEffect } from 'react';
import { 
  SidebarProvider, 
  SidebarContent, 
  Sidebar 
} from "@/components/ui/sidebar";

import Header from '@/components/project/Header';
import SidebarMenu from '@/components/project/SidebarMenu';
import WelcomeSection from '@/components/project/WelcomeSection';
import ProductCapabilities from '@/components/project/ProductCapabilities';
import ProjectDisplay from '@/components/project/ProjectDisplay';
import RightPanel from '@/components/project/RightPanel';
import { sidebarMenuItems, pageLinks } from '@/components/project/SidebarData';

const NewProject = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-black text-neuxtrek-silver flex flex-col w-full">
        {/* Header */}
        <Header isScrolled={isScrolled} />

        <div className="flex-grow flex">
          {/* Left Navigation Sidebar */}
          <Sidebar variant="sidebar" className="bg-[#2E2E2E] border-r border-neuxtrek-silver/10 w-64">
            <SidebarContent>
              <SidebarMenu menuItems={sidebarMenuItems} />
            </SidebarContent>
          </Sidebar>

          {/* Main content */}
          <div className="flex-grow flex flex-col">
            <div className="flex flex-grow">
              {/* Main Content Area */}
              <div className="w-3/4 p-8">
                {/* Main content sections */}
                <WelcomeSection />
                
                {/* Product Capabilities Section */}
                <ProductCapabilities />

                {/* Project Display Section */}
                <ProjectDisplay />
              </div>
              
              {/* Right Panel */}
              <RightPanel pageLinks={pageLinks} />
            </div>
          </div>
        </div>

        {/* Neural grid pattern background */}
        <div className="neural-lines fixed inset-0 opacity-10 pointer-events-none" aria-hidden="true"></div>
      </div>
    </SidebarProvider>
  );
};

export default NewProject;
