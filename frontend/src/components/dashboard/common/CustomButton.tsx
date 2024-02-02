import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface CustomButtonProps {
  // Add your prop types here
  className: string;
  icon: IconType;
}

const CustomButton: FC<CustomButtonProps> = ({ className, icon: Icon }) => {
  return (
    <Button
      className={cn(
        "p-0 rounded-md bg-slate-100 text-slate-600 hover:text-primary-foreground hover:bg-primary transition duration-300 ease-in-out ",
        className
      )}
    >
      <Icon className="w-5 h-5 " />
    </Button>
  );
};

export default CustomButton;
