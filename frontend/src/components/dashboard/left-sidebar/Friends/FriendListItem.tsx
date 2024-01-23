import React, { FC } from "react";
import ProfileAvatar from "../../common/ProfileAvatar";

interface FriendListItemProps {
  // Add your prop types here
}

const FriendListItem: FC<FriendListItemProps> = () => {
  return (
    <div className="flex flex-row p-2 max-w-full w-full space-x-2 group hover:bg-slate-200 rounded-md hover:cursor-pointer">
      <div className="h-11 w-11 rounded-md bg-slate-100 flex flex-shrink-0"></div>
      <div className="flex justify-center flex-col space-y-[2px] w-full max-w-full">
        <div className="flex flex-row w-full justify-between items-center">
          <p className="font-semibold text-sm ">John Doe</p>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <p className="text-xs font-normal text-slate-400 line-clamp-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, nemo, voluptatum, quas voluptatem quia quibusdam
          voluptatibus quod dolorum quos doloremque? Quod, quibusdam. Quae
          voluptate, quia voluptas quos quod quibusdam!
        </p>
      </div>
    </div>
  );
};

export default FriendListItem;
