import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface NavbarButtonProps {
  // Add your prop types here
  className: string;
  icon: IconType;
}

const NavbarButton: FC<NavbarButtonProps> = ({ className, icon: Icon }) => {
  return (
    <Button
      className={cn(
        "h-11 w-11 p-0 rounded-md bg-slate-100 text-slate-600 hover:text-primary-foreground hover:bg-primary transition duration-300 ease-in-out ",
        className
      )}
    >
      <Icon className="w-5 h-5 " />
    </Button>
  );
};

export default NavbarButton;
