// src/app/[locale]/(marketing)/layout.js
import {NextIntlClientProvider, getMessages} from 'next-intl/server';
import '@/styles/globals.css';

export const dynamic = 'error';

export default async function MarketingLayout({children, params: {locale}}) {
  const messages = await getMessages(); // بر اساس locale فایل‌های JSON مناسب رو لود می‌کند

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="container py-4">
            {/* اگر منو ترجمه شدنیه، متن‌ها رو از t('...') در صفحه‌ها بگیر،
               یا اینجا یک Nav جدا با ترجمه بنویس */}
            <nav className="flex gap-4">
              <a href={`/${locale}`}>Home</a>
              <a href={`/${locale}/about`}>About</a>
              <a href={`/${locale}/blogs`}>Blogs</a>
              <a href={`/${locale}/contact`}>Contact</a>
              <a href={`/${locale}/services`}>Services</a>
              <a href={`/${locale}/videos`}>Videos</a>
            </nav>
          </header>

          <main className="container py-8">{children}</main>

          <footer className="container py-8">
            <small>© Alalam</small>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{locale: 'fa'}, {locale: 'en'}];
}
