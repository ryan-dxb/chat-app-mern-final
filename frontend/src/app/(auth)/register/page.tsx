import React from "react";
import { NextPage } from "next";
import AuthFormLayout from "@/components/auth/common/AuthFormLayout";
import RegisterForm from "./registerForm";

interface RegisterPageProps {
  // Add your prop types here
}

const RegisterPage: NextPage<RegisterPageProps> = () => {
  return (
    <AuthFormLayout
      title="New here?"
      subtitle="Create an account to get started or continue with your social media account"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
      social
    >
      <div className="my-6">
        <RegisterForm />
      </div>
      {/* Add your page content here */}
    </AuthFormLayout>
  );
};

export default RegisterPage;
