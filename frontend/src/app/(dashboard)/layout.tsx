import AppWrapper from "@/components/dashboard/common/AppWrapper";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

export default Layout;
