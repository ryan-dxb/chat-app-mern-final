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
import { BsPersonAdd } from "react-icons/bs";

import ProfileAvatar from "../common/ProfileAvatar";
import ThemeToggle from "../common/ThemeToggle";
import FriendRequestModal from "@/components/modals/FriendRequestModal";

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
        <FriendRequestModal>
          {/* <NavbarButton className="" icon={BsPersonAdd} /> */}
          <Button className="h-11 w-11 p-0 rounded-md bg-slate-100 text-slate-600 hover:text-primary-foreground hover:bg-primary transition duration-300 ease-in-out ">
            <BsPersonAdd className="w-5 h-5 " />
          </Button>
        </FriendRequestModal>
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
