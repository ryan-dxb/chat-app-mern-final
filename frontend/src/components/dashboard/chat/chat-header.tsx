import React, { FC } from "react";
import CustomButton from "../common/CustomButton";
import { MdMoreHoriz } from "react-icons/md";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { PiPhoneCall, PiVideoCamera } from "react-icons/pi";

interface ChatHeaderProps {
  // Add your prop types here
}

const ChatHeader: FC<ChatHeaderProps> = () => {
  return (
    <div className="flex flex-row h-20 border-b justify-between items-center px-10">
      <div className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 bg-gray-200 rounded-md">{/* Image */}</div>
        <div className="flex flex-col">
          <h2 className="font-bold text-sm">John Doe</h2>
          <span className="font-light text-muted-foreground text-xs">
            Active Now
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <CustomButton icon={PiPhoneCall} className="h-10 w-10" />
        <CustomButton icon={PiVideoCamera} className="h-10 w-10" />
        <CustomButton
          icon={BsLayoutSidebarInsetReverse}
          className="h-10 w-10"
        />
      </div>
    </div>
  );
};

export default ChatHeader;
