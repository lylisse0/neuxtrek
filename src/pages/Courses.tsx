
import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import SupportChat from "@/components/SupportChat";

const Courses = () => {
  return (
    <div className="min-h-screen bg-neuxtrek-black text-neuxtrek-silver">
      <Navbar />
      <div className="pt-24">
        <CoursesSection />
      </div>
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Courses;
