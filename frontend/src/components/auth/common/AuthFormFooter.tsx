import Link from "next/link";
import React, { FC } from "react";

interface AuthFormFooterProps {
  footerText: string;
  footerLink: string;
  footerLinkText: string;
}

const AuthFormFooter: FC<AuthFormFooterProps> = ({
  footerText,
  footerLink,
  footerLinkText,
}) => {
  return (
    <div className="flex justify-center items-center text-muted-foreground text-sm gap-2">
      <p>{footerText}</p>
      <Link
        href={footerLink}
        className="underline font-semibold text-primary/80 underline-offset-2 transition-colors duration-200 cursor-pointer hover:text-primary"
      >
        {footerLinkText}
      </Link>
    </div>
  );
};

export default AuthFormFooter;
