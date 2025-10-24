import PublicHeader from '@/components/layouts/PublicHeader';

export default function PublicLayout({ children, params }) {
  const locale = params?.locale ?? 'en'; // fallback (static)

  return (
    <div className='w-full p-3'>
      <PublicHeader locale={locale} />

      <main className="w-full">{children}</main>

      <footer className="container py-8">
        <small>© Alalam</small>
      </footer>
    </div>
  );
}
