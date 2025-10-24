// src/app/[locale]/layout.js  (JS)
export const dynamic = 'error'; // کمک می‌کنه خروجی استاتیک بمونه

export default function LocaleLayout({children, params: {locale}}) {
  // فعلاً فقط en داریم
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}

// فعلاً فقط en رو می‌سازیم؛ بعداً fa رو اضافه می‌کنی
export function generateStaticParams() {
  return [{ locale: 'en' }];
}
