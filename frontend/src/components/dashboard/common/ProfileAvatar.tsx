import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ProfileAvatarProps {
  // Add your prop types here
  size?: "sm" | "md" | "lg";
}

const ProfileAvatar: FC<ProfileAvatarProps> = ({ size = "md" }) => {
  return (
    <Button
      className={cn(
        "flex flex-shrink-0 items-center justify-center bg-transparent",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-11 w-11",
        size === "lg" && "h-12 w-12"
      )}
    >
      <Avatar
        className={cn(
          "p-0 rounded-md bg-slate-100 text-slate-600",
          size === "sm" && "h-8 w-8",
          size === "md" && "h-11 w-11",
          size === "lg" && "h-12 w-12"
        )}
      >
        <AvatarFallback className="rounded-md hover:text-primary-foreground hover:bg-primary transition duration-300 ease-in-out">
          <span>JD</span>
        </AvatarFallback>
      </Avatar>
    </Button>
  );
};

export default ProfileAvatar;
