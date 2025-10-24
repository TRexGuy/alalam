// src/app/[locale]/public/layout.js
import Link from 'next/link';
import '@/styles/globals.css';

export const dynamic = 'error';

export default function PublicLayout({ children }) {
  return (
    <>
      <header className="container py-4">
        <nav className="flex gap-4">
          <Link href=".">Home</Link>            {/* /en/public */}
          <Link href="about">About</Link>       {/* /en/public/about */}
          <Link href="blogs">Blogs</Link>
          <Link href="contact">Contact</Link>
          <Link href="services">Services</Link>
          <Link href="videos">Videos</Link>

          <span className="mx-4 opacity-60">|</span>
          {/* این دو تا چون خارج از public هستن، مطلق باشن */}
          <Link href="/en/vendor">Vendor</Link>
          <Link href="/en/admin">Admin</Link>
        </nav>
      </header>

      <main className="container py-8">{children}</main>

      <footer className="container py-8">
        <small>© Alalam</small>
      </footer>
    </>
  );
}
