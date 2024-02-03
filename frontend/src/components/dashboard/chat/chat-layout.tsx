import React, { FC } from "react";
import ChatHeader from "./chat-header";
import Chatbox from "./chat-box";
import ChatInput from "./chat-input";

interface ChatLayoutProps {
  // Add your prop types here
}

const ChatLayout: FC<ChatLayoutProps> = () => {
  return (
    <div className="flex flex-1 flex-col h-[calc(100vh-64px)]">
      <ChatHeader />
      <Chatbox />
      <ChatInput />
    </div>
  );
};

export default ChatLayout;
