// src/app/[locale]/layout.js
export const dynamic = 'error';

export default function LocaleRootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}

// فعلاً فقط en رو بیلد کن؛ بعداً fa رو اضافه می‌کنی
export function generateStaticParams() {
  return [{ locale: 'en' }];
}
