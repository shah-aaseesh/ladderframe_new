import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — About',
  description: 'LadderFrame is a partnership firm led by Anurag, bringing operating experience and senior advisory judgement to leadership teams building the next phase of their business.',
};

export default function AboutPage() {
  const metrics = [
    {
      num: '27+',
      label: 'Years as an operator in leadership roles.',
    },
    {
      num: '$160M',
      label: 'Business built as part of the core leadership & execution team.',
    },
    {
      num: '$100M',
      label: 'Portfolios managed in ASEAN–GCN.',
    },
    {
      num: '₹500 Cr',
      label: 'Business transformed in India.',
    },
    {
      num: '$5M–$200M',
      label: 'Multiple FOAK & strategic deals.',
    },
    {
      num: '50+ · $2B+',
      label: 'Complex enterprise deals and customer lifetime value delivered.',
    },
  ];

  const principles = [
    {
      title: 'Start with the business question',
      desc: 'Understand the situation and context before defining the advisory path.',
    },
    {
      title: 'Get into the operating detail',
      desc: 'Connect strategic choices to customers, sales, people, processes and economics.',
    },
    {
      title: 'Build leadership capability',
      desc: 'Work with the people responsible so the business can carry the next phase with confidence.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1>Experience from inside the business.</h1>
          <p>
            LadderFrame is a partnership firm led by Anurag, bringing operating experience and senior advisory judgement to leadership teams building the next phase of their business.
          </p>
        </div>
      </section>

      {/* The Firm Intro */}
      <section className="section">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow">The firm</div>
            <h2>LadderFrame is led by an operator who has built, expanded and transformed businesses.</h2>
          </div>
          <div className="about-intro-copy">
            <p>
              LadderFrame is a partnership firm led by Anurag, who has a proven track record of executing high-growth business plans, establishing new regions and business units, and scaling operations across India and APJ.
            </p>
            <p>
              With 27 years of experience in sales and business management at world-class organisations such as Bajaj, Cognizant, Ascendion and NTT, he has consistently demonstrated his expertise in building best-in-class businesses in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Experience Proof Wall */}
      <section className="section light">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Operating experience</div>
            <h2 className="section-title">The scale of experience brought to the table.</h2>
          </div>

          <div className="proof-wall">
            {metrics.map((metric, idx) => (
              <div key={idx} className="proof-card">
                <div className="big">{metric.num}</div>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why the Experience Matters */}
      <section className="section">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Why the experience matters</div>
            <h2 className="section-title">Strategy has to work through the business.</h2>
            <p className="lead">
              Growth decisions connect commercial strategy, customer relationships, operating model, people, management cadence and economics. LadderFrame brings these dimensions together so leadership can make choices with a clearer view of the business they are building.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((pr, idx) => (
              <div key={idx} className="principle-card">
                <h3>{pr.title}</h3>
                <p>{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Leadership</div>
            <h2 className="section-title">Anurag Verulkar · Founder &amp; CEO</h2>
            <p className="lead">
              27 years across India and APJ spanning sales and business management, growth, P&amp;L, market expansion, complex enterprise pursuits, organisation building, transformation and performance.
            </p>
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
