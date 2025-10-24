import '@/styles/globals.css';

// src/app/[locale]/layout.js
export const dynamic = 'error';
export const dynamicParams = false;

export default function LocaleRootLayout({ children, params: { locale } }) {
    return (
        <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <body className="w-full antialiased">{children}</body>
        </html>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }];
}
