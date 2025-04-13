
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClassroomContent from '@/components/classroom/ClassroomContent';
import SupportChat from '@/components/SupportChat';

const Classroom = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <div className="pt-28">
        <ClassroomContent />
      </div>
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Classroom;
