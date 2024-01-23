import React, { FC } from "react";
import { MdOutlineCastConnected } from "react-icons/md";

interface LogoProps {
  // Add your prop types here
}

const Logo: FC<LogoProps> = () => {
  return (
    <>
      <MdOutlineCastConnected className="h-6 w-6 text-primary" />
      <span className="ml-2 font-semibold text-primary">Let's Connect</span>
    </>
  );
};

export default Logo;
