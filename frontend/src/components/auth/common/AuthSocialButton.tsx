import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  message?: string;
  onClick?: () => void;
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon: Icon,
  message,
  onClick,
}) => {
  return (
    <Button
      className="h-10 w-full bg-transparent border border-primary/60 hover:bg-primary/10 hover:border-primary/80 transition-colors duration-200"
      variant="outline"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <Icon className="w-5 h-5 mr-2" />
        <span>{message}</span>
      </div>
    </Button>
  );
};

export default AuthSocialButton;
