import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
