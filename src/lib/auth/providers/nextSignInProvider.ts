import { AuthProvider } from "@/modules/login/types";
import { signIn } from "next-auth/react";


export const nextSignInProvider: AuthProvider = {
    signIn: async (creds) => {
        return await signIn('credentials', {
            ...creds,
            redirect: false,
        });
    }
};