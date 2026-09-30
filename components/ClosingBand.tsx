import Link from 'next/link';

export default function ClosingBand() {
  return (
    <section className="cta" aria-label="Closing Conversation">
      <div className="container">
        <h2>Facing a growth decision?</h2>
        <p>Tell us where your business stands and what needs deciding.</p>
        <Link href="/contact" className="btn btn-primary">
          Let’s Talk <span className="btn-arrow">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
