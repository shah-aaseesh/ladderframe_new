import Link from 'next/link';

export default function ClosingBand() {
  return (
    <section className="cta" aria-label="Closing Conversation">
      <div className="container">
        <h2>Have a growth question on the table?</h2>
        <p>Tell us where your business stands and what needs deciding.</p>
        <Link href="/contact#start" className="btn btn-primary">
          Start a conversation <span className="btn-arrow">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
