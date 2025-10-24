import Link from 'next/link';

export default function PublicLayout({ children, params }) {
  const locale = params?.locale ?? 'en'; // fallback (static)

  return (
    <div className='w-full p-3'>
      <

      <main className="container py-8">{children}</main>

      <footer className="container py-8">
        <small>© Alalam</small>
      </footer>
    </div>
  );
}
