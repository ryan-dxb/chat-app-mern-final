import React, { FC } from "react";
import AuthFormTitle from "./AuthFormTitle";
import AuthFormFooter from "./AuthFormFooter";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

interface AuthFormLayoutProps {
  children: React.ReactNode;
  social?: boolean;
  title: string;
  subtitle: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
}

const AuthFormLayout: FC<AuthFormLayoutProps> = ({
  children,
  social,
  title,
  subtitle,
  footerText,
  footerLink,
  footerLinkText,
}) => {
  return (
    <div className="w-full px-4 sm:px-0 sm:mx-auto sm:max-w-md">
      <div className="border rounded-md p-2">
        <div className="py-4 px-2">
          <AuthFormTitle title={title} subtitle={subtitle} />
        </div>
        <div className="p-6 rounded-md  text-muted-foreground border-t">
          {social && (
            <>
              <div className="flex flex-row gap-3">
                <AuthSocialButton icon={BsGithub} message="Github" />
                <AuthSocialButton icon={BsGoogle} message="Google" />
              </div>
              <div className="w-full relative mt-6 mx-auto">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted-foreground " />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-muted-foreground bg-background ">
                    Or continue with
                  </span>
                </div>
              </div>
            </>
          )}
          {children}
          <AuthFormFooter
            footerText={footerText}
            footerLink={footerLink}
            footerLinkText={footerLinkText}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
