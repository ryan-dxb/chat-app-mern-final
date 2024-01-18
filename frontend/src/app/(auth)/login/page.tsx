import React from "react";
import { NextPage } from "next";
import AuthFormLayout from "@/components/auth/common/AuthFormLayout";
import LoginForm from "./loginForm";

interface LoginPageProps {
  // Add your prop types here
}

const LoginPage: NextPage<LoginPageProps> = () => {
  return (
    <AuthFormLayout
      title="Welcome Back !"
      subtitle="Enter your credentials or use social login to continue..."
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Register"
      social
    >
      <div className="my-6">
        <LoginForm />
      </div>
      {/* Add your page content here */}
    </AuthFormLayout>
  );
};

export default LoginPage;
