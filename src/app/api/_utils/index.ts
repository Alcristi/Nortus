import { routing } from "@/lib/i18n/routing";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function validadeSession(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    const locale = routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) || routing.defaultLocale;

    const isLoginPage = pathname.includes('/login');

    if (token && isLoginPage) {
        return Response.redirect(new URL(`/${locale}/dashboard`, req.url));
    }

    if (!token && !isLoginPage) {
        return Response.redirect(new URL(`/${locale}/login`, req.url));

    }

}