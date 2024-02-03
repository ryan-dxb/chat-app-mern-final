import React from "react";
import { NextPage } from "next";
import ChatLayout from "@/components/dashboard/chat/chat-layout";

interface HomeProps {
  // Add your prop types here
}

const Home: NextPage<HomeProps> = () => {
  return (
    <div className="">
      <ChatLayout />
    </div>
  );
};

export default Home;
