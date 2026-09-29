import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ color: 'var(--color-red)' }}>404 · Page Not Found</div>
        <h1 style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-navy)', fontSize: '2.5rem', margin: '1rem 0' }}>
          The page you are looking for does not exist.
        </h1>
        <p style={{ color: 'var(--color-charcoal-muted)', marginBottom: '2rem' }}>
          Please check the URL or return to the home page.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
