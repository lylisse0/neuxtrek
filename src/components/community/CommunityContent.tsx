
import React from 'react';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import CommunityHeader from './CommunityHeader';

const CommunityContent = () => {
  return (
    <div className="min-h-screen bg-neuxtrek-black">
      <CommunityHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default CommunityContent;
