import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fa', 'en'],
  defaultLocale: 'fa',
  localePrefix: 'always', // URL همیشه /fa/... یا /en/...
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // همه‌ی مسیرها به جز assets
};
