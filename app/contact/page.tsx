import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Contact',
  description: 'Bring the business situation as it stands. We can start with the question leadership is trying to answer and determine where LadderFrame can add value.',
};

export default function ContactPage() {
  const topics = [
    'The next growth agenda',
    'A new geography, segment or adjacency',
    'A strategic or complex enterprise opportunity',
    'The operating model for the next phase',
    'An AI or business transformation opportunity',
    'Profitability, pricing or performance',
    'A broader leadership question around the next phase',
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Start a conversation.</h1>
          <p>
            Bring the business situation as it stands. We can start with the question leadership is trying to answer and determine where LadderFrame can add value.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section" id="start">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">What we can discuss</div>
            <h2>Start with the business question.</h2>
            <p className="lead">
              A conversation can begin around the next growth agenda, a new market, a strategic opportunity, the operating model for the next phase, an AI or transformation opportunity, or the economics of growth.
            </p>
            <div className="topic-grid">
              {topics.map((topic, idx) => (
                <div key={idx} className="topic">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <h3>Anurag Verulkar</h3>
            <div className="row">
              <div className="label">Role</div>
              <div>Founder &amp; CEO</div>
            </div>
            <div className="row">
              <div className="label">Email</div>
              <a href="mailto:anurag@ladderframe.in">anurag@ladderframe.in</a>
            </div>
            <div className="row">
              <div className="label">Mobile</div>
              <a href="tel:+919930133194">+91-9930133194</a>
            </div>
            <div className="row">
              <div className="label">Location</div>
              <div>Mumbai, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta">
        <div className="container">
          <div className="eyebrow">Start with the business problem</div>
          <h2>Let’s talk.</h2>
          <p>
            Bring the business situation as it stands — a growth question, market opportunity, strategic pursuit, operating-model decision, AI opportunity or performance challenge.
          </p>
          <Link href="/contact#start" className="btn btn-primary">
            Start a Conversation <span className="btn-arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
