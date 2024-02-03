import { ScrollArea } from "@/components/ui/scroll-area";
import React, { FC } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

interface ChatboxProps {
  // Add your prop types here
}

const Chatbox: FC<ChatboxProps> = () => {
  return (
    <ScrollArea className="flex flex-1 flex-col px-4 py-4">
      <div className="relative bg-muted rounded-md xl:w-[60%] w-[80%] pl-8 p-4 mx-8 mb-12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          reprehenderit sint itaque delectus deleniti, odio neque maxime, nisi
          quis ex quod qui tempore ipsam cumque? Voluptates illo iure hic?
        </p>
        <div className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 ">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
        </div>
        <div className="absolute bottom-0 translate-y-[150%] flex flex-row gap-3">
          <span className="text-xs font-normal text-muted-foreground ">
            12:30 PM
          </span>
          <HiOutlineDotsHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="relative bg-muted rounded-md xl:w-[60%] w-[80%] pl-8 p-4 mx-8 mb-12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          reprehenderit sint itaque delectus deleniti, odio neque maxime, nisi
          quis ex quod qui tempore ipsam cumque? Voluptates illo iure hic?
        </p>
        <div className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 ">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-x-[40%] translate-y-[150%] flex flex-row gap-3">
          <span className="text-xs font-normal text-muted-foreground ">
            12:30 PM
          </span>
          <HiOutlineDotsHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="relative bg-primary text-primary-foreground rounded-md xl:w-[60%] w-[80%] pl-8 p-4 mx-8 mb-12 ml-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          reprehenderit sint itaque delectus deleniti, odio neque maxime, nisi
          quis ex quod qui tempore ipsam cumque? Voluptates illo iure hic?
        </p>
        <div className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 ">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
        </div>
        <div className="absolute bottom-0 right-0 -translate-x-[40%] translate-y-[150%] flex flex-row-reverse gap-3">
          <span className="text-xs font-normal text-muted-foreground ">
            12:30 PM
          </span>
          <HiOutlineDotsHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Chatbox;
