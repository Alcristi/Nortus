import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  const locale = routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) || routing.defaultLocale;

  const isLoginPage = pathname.includes('/login');
  console.log(pathname)
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
  }

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
