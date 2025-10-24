import { NextResponse } from 'next/server';

const LOCALES = ['en', 'fa'];
const DEFAULT_LOCALE = 'en';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const seg1 = pathname.split('/')[1];
  const hasLocale = LOCALES.includes(seg1);

  if (!hasLocale) {
    const url = req.nextUrl.clone();
    if (pathname === '/' || pathname === '') {
      url.pathname = `/${DEFAULT_LOCALE}/public`;
    } else {
      url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    }
    return NextResponse.redirect(url);
  }

  if (pathname === `/${seg1}` || pathname === `/${seg1}/`) {
    const url = req.nextUrl.clone();
    url.pathname = `/${seg1}/public`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
