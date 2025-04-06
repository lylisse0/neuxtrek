
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunityHeader from '@/components/community/CommunityHeader';
import CommunityContent from '@/components/community/CommunityContent';
import SupportChat from '@/components/SupportChat';

const Community = () => {
  return (
    <div className="min-h-screen bg-neuxtrek-black text-neuxtrek-silver">
      <Navbar />
      <div className="pt-28">
        <CommunityHeader />
        <CommunityContent />
      </div>
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Community;
