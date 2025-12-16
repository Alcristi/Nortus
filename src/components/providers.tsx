"use client";

import { StoreProvider } from "@/context/StoreContext/StoreContext";
import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {

    return (
        <SessionProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </SessionProvider>);
}
