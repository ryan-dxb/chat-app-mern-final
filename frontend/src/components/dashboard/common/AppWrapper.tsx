"use client";

import React, { FC } from "react";
import Navbar from "../navbar/page";
import Sidebar from "../left-sidebar/page";
import LeftSidebar from "../left-sidebar/page";
import RightSidebar from "../right-sidebar/page";
import { Button } from "@/components/ui/button";

interface AppWrapperProps {
  // Add your prop types here
  children: React.ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  console.log("open", open);

  return (
    <main className="flex flex-col h-[100vh] overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <div className="flex h-full flex-row">
        <LeftSidebar />
        <div className="flex-1">{children}</div>
        <RightSidebar open={open} />
      </div>
    </main>
  );
};

export default AppWrapper;
