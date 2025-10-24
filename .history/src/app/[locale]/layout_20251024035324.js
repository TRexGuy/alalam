// src/app/[locale]/layout.js
export const dynamic = 'error';        // صفحه‌ها باید استاتیک باشن
export const dynamicParams = false;    // اجازه نده پارامتر ناشناخته بیاد

export default function LocaleRootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}

// 🔴 مهم: این دقیقا باید در همین سطح [locale] باشد، نه زیر public
export function generateStaticParams() {
  // فعلاً فقط en؛ وقتی fa رو خواستی اضافه کنی: [{locale:'en'}, {locale:'fa'}]
  return [{ locale: 'en' }];
}
