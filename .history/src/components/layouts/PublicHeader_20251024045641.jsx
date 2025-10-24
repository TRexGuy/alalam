// src/components/PublicHeader.js
'use client'; // اگه بخوای در آینده event داشته باشی (مثلاً منوی موبایل)

import Link from 'next/link';

export default function PublicHeader({ locale }) {
  return (
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
  );
}
