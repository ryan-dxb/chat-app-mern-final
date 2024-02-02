import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import React, { FC } from "react";
import FriendList from "./Friends/FriendList";

interface LeftSidebarProps {
  // Add your prop types here
}

const LeftSidebar: FC<LeftSidebarProps> = () => {
  return (
    <div className="flex flex-col flex-shrink-0 w-64 border-r p-4">
      <div className="flex flex-row justify-between w-full items-center ">
        <h3 className="text- font-semibold text-muted-foreground">Chats</h3>
        <div className="ml-auto">
          <Button
            variant="ghost"
            className="bg-transparent h-auto w-auto group hover:bg-transparent transition duration-300 ease-in-out px-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary transition duration-300 ease-in-out mr-[2px]" />
            <span className="text-muted-foreground text-xs group-hover:text-primary transition duration-300 ease-in-out">
              New Chat
            </span>
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <Input
          placeholder="Search friends / chat"
          className="placeholder:text-slate-300 focus:outline-primary focus:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <ScrollArea className="flex flex-col flex-1 mt-2 space-y-1">
        <FriendList />
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
