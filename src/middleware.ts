import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { validadeSession } from './app/api/_utils';
import { routing } from './lib/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  await validadeSession(req)

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
