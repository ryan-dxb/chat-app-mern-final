import React, { FC } from "react";
import Navbar from "../navbar/page";
import Sidebar from "../sidebar/page";

interface AppWrapperProps {
  // Add your prop types here
  children: React.ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <main className="flex flex-row h-[100vh] overflow-hidden">
      <div className="flex flex-row">
        <Navbar />
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default AppWrapper;
