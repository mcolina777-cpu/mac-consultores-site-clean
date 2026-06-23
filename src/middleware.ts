import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignorar rutas estáticas y _next
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/Logo') ||
    pathname === '/favicon.ico' ||
    pathname === '/site.webmanifest'
  ) {
    return;
  }

  // Comprobar si el pathname ya tiene un locale soportado
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Si no tiene locale, redirigir al default (o reescribir)
  // Reescribimos internamente para que '/' sea '/es'
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
