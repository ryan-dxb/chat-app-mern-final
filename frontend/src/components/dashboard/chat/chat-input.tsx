import React, { FC } from "react";
import CustomButton from "../common/CustomButton";
import { MdOutlineAttachment } from "react-icons/md";
import { LuSmilePlus, LuSend } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { FaMicrophone } from "react-icons/fa";

interface ChatInputProps {
  // Add your prop types here
}

const ChatInput: FC<ChatInputProps> = () => {
  return (
    <div className="flex flex-row gap-4 h-20 border-t items-center px-10">
      <div className="flex flex-row gap-3">
        <CustomButton icon={MdOutlineAttachment} className="h-12 w-12" />
        <CustomButton icon={LuSmilePlus} className="h-12 w-12" />
      </div>
      <Input className="h-12" />
      <div className="flex flex-row gap-3">
        <CustomButton icon={FaMicrophone} className="h-12 w-12" />
        <CustomButton icon={LuSend} className="h-12 w-12" />
      </div>
    </div>
  );
};

export default ChatInput;
