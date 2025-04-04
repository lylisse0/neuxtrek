
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoursesSection from '@/components/CoursesSection';
import SupportChat from '@/components/SupportChat';

const Courses = () => {
  return (
    <div className="min-h-screen bg-neuxtrek-black text-neuxtrek-silver">
      <Navbar />
      <div className="pt-28">
        <CoursesSection />
      </div>
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Courses;
