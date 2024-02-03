import React, { FC } from "react";
import Logo from "../common/Logo";
import { Button } from "@/components/ui/button";
import NavbarButton from "./NavbarButton";
import { Separator } from "@/components/ui/separator";

import {
  MdOutlineManageAccounts,
  MdOutlineDashboardCustomize,
  MdNotificationsNone as MdNotifications,
  MdOutlineSettings,
  MdOutlineMessage,
} from "react-icons/md";
import ProfileAvatar from "../common/ProfileAvatar";
import ThemeToggle from "../common/ThemeToggle";

interface NavbarProps {
  // Add your prop types here
}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex flex-1 items-center pr-4 h-16 flex-shrink-0 border-b">
      <div className="flex flex-row flex-shrink-0 w-80 h-full border-r  items-center justify-center">
        <Logo />
      </div>
      <div className=" flex flex-row space-x-2 ml-4">
        <NavbarButton className="" icon={MdOutlineMessage} />
        <NavbarButton className="" icon={MdOutlineManageAccounts} />
      </div>

      <div className="ml-auto h-11 flex-row flex space-x-2">
        <NavbarButton className="" icon={MdOutlineDashboardCustomize} />
        <NavbarButton className="" icon={MdNotifications} />
        <NavbarButton className="" icon={MdOutlineSettings} />
        <ThemeToggle />
        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Navbar;
