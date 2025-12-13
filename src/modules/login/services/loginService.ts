import { nextSignInProvider } from "@/lib/auth/providers/nextSignInProvider";
import { AuthProvider, LoginFormSchema, LoginService } from "../types";

const createLoginService = (authProvider: AuthProvider): LoginService => {
  const executeLogin = async (data: LoginFormSchema) => {
    await authProvider.signIn({
      username: data.username,
      password: data.password,
    });
  };

  return { executeLogin };
};

export default createLoginService(nextSignInProvider)