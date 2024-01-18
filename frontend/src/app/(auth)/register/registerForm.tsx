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

interface RegisterFormProps {
  // Add your prop types here
}

const RegisterFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    username: z.string().min(2, "Username must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    passwordConfirmation: z.string().min(6, "Please confirm your password"),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
      });
    }
  });

const RegisterForm: FC<RegisterFormProps> = () => {
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
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
          <div className="flex flex-row space-x-4">
            <AuthInputField
              control={form.control}
              name="firstName"
              placeholder="First Name"
            />
            <AuthInputField
              control={form.control}
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <AuthInputField
            control={form.control}
            name="username"
            placeholder="Username"
          />
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
          <AuthInputField
            control={form.control}
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
          {/* <div className="flex flex-row items-center space-x-4">
              <Image
                src={avatarChanged ? avatar : "/avatar_placeholder.png"}
                width={50}
                height={50}
                className="object-cover w-16 h-16 col-span-1 rounded-full"
                alt="Avatar"
              />
              <Label htmlFor="picture" className="col-span-1">
                <div className="flex items-center h-10 px-6 py-2 transition-all duration-200 border rounded-md cursor-pointer text-muted-foreground/50 hover:border-primary hover:text-muted-foreground/80">
                  Upload
                </div>
              </Label>
              <Input
                id="picture"
                type="file"
                className="hidden col-span-3"
                onChange={handleAvatarChange}
              />
            </div> */}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
