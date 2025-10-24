import '@/styles/globals.css';

export const dynamic = 'error';  // static UI
export const dynamicParams = false;  // static UI

export default function LocaleRootLayout({ children, params: { locale } }) {
    return (
        <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
            <body className="w-full antialiased">{children}</body>
        </html>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }];  // static UI
}
