import React, { FC } from "react";

interface AuthFormTitleProps {
  title?: string;
  subtitle?: string;
}

const AuthFormTitle: FC<AuthFormTitleProps> = ({
  title = "Welcome Back!",
  subtitle = "Enter your credentials to continue",
}) => {
  return (
    <div className="flex flex-col items-start ">
      <h1 className="text-xl font-bold tracking-tight text-center text-primary">
        {title}
      </h1>
      <p className="text-center text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default AuthFormTitle;
