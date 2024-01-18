import React from "react";
import { NextPage } from "next";

interface SidebarProps {
  // Add your prop types here
}

const Sidebar: NextPage<SidebarProps> = () => {
  return <div className="w-64 border-r bg-secondary shadow-md"></div>;
};

export default Sidebar;
