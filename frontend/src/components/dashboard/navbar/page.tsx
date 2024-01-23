import React, { FC } from "react";
import Logo from "../common/Logo";
import { Button } from "@/components/ui/button";
import NavbarButton from "./NavbarButton";
import { BiMessageDetail } from "react-icons/bi";

interface NavbarProps {
  // Add your prop types here
}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex flex-1 items-center px-4 h-16 flex-shrink-0 border-b">
      <div className="flex flex-row flex-shrink-0 items-center justify-center">
        <Logo />
      </div>

      <div className="ml-auto">
        <NavbarButton className="mr-2" icon={BiMessageDetail} />
      </div>
    </div>
  );
};

export default Navbar;
