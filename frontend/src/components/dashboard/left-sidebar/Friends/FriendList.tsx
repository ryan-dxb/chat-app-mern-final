import React, { FC } from "react";
import FriendListItem from "./FriendListItem";

interface FriendListProps {
  // Add your prop types here
}

const FriendList: FC<FriendListProps> = () => {
  return <FriendListItem />;
};

export default FriendList;
