"use client";
import { Form } from "@/components/ui/form";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AuthInputField from "@/components/auth/common/AuthInputField";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginFormProps {
  // Add your prop types here
}

const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginForm: FC<LoginFormProps> = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    const { email, password } = values;

    // try {
    //   const response = await signIn({ email, password }).unwrap();

    //   if (response) {
    //     toast({
    //       title: "Success",
    //       description: response?.message + " !! Redirecting to home page...",
    //       className: "bg-green-500",
    //     });
    //   }
    // } catch (error: any) {
    //   console.log("error", error);

    //   toast({
    //     title: "Error",
    //     description: error?.message,
    //     variant: "destructive",
    //   });
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <AuthInputField
            control={form.control}
            name="email"
            placeholder="Email"
          />
          <AuthInputField
            control={form.control}
            name="password"
            placeholder="Password"
          />

          <div className="flex items-center justify-between mb-6 text-sm">
            <div className="flex items-center">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                className="border-muted-foreground"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-muted-foreground"
              >
                Remember me
              </label>
            </div>

            <Link
              href="/auth/forgot-password"
              className="text-sm transition-all duration-200 text-muted-foreground hover:text-blue-500"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
