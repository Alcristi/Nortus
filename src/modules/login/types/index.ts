import { SignInResponse } from "next-auth/react";
import { z } from "zod";
import { loginSchema } from "../schema/loginSchema";

export type LoginFormSchema = z.infer<typeof loginSchema>;

export type AuthProvider = {
  signIn: (credentials: { username: string; password: string }) => Promise<SignInResponse | undefined>;
};

export type LoginService = {
  executeLogin: (data: LoginFormSchema) => Promise<void>;
};


export type LoginActionResponse = {
  success: boolean;
  message: string;
  remember?: boolean;
};