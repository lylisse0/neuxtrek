
import { FC, ReactNode } from "react";
import CommunityHeader from "./CommunityHeader";
import LeftSidebar from "../community/LeftSidebar";
import RightSidebar from "../community/RightSidebar";

interface CommunityLayoutProps {
  children: ReactNode;
  showSidebars?: boolean;
}

const CommunityLayout: FC<CommunityLayoutProps> = ({ children, showSidebars = true }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <CommunityHeader />
      <div className="flex flex-1 overflow-hidden">
        {showSidebars && <LeftSidebar />}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
        {showSidebars && <RightSidebar />}
      </div>
    </div>
  );
};

export default CommunityLayout;
