// src/app/[locale]/public/layout.js
import Link from 'next/link';
import '@/styles/globals.css';

export default function PublicLayout({ children, params }) {
  const locale = params?.locale ?? 'en'; // fallback

  return (
    <div className='w-full p-3'>
      <header className="container py-4">
        <nav className="flex gap-4">
          <Link href={`/${locale}/public`}>Home</Link>
          <Link href={`/${locale}/public/about`}>About</Link>
          <Link href={`/${locale}/public/blogs`}>Blogs</Link>
          <Link href={`/${locale}/public/contact`}>Contact</Link>
          <Link href={`/${locale}/public/services`}>Services</Link>
          <Link href={`/${locale}/public/videos`}>Videos</Link>
        </nav>
      </header>

      <main className="container py-8">{children}</main>

      <footer className="container py-8">
        <small>© Alalam</small>
      </footer>
    </div>
  );
}
