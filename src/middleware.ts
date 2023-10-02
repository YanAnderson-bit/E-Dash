import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const hasSession = request.cookies.has('session');
  const pathname = request.nextUrl.pathname;

  if (pathname === '/login' && hasSession) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!hasSession && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/products', '/map', '/login'],
};
