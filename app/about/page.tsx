import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — About the Firm & Leadership',
  description: 'LadderFrame is a senior advisory partnership led by Anurag Verulkar, bringing 27 years of deep operating leadership, P&L stewardship and executive judgement to leadership teams building the next phase of their business.',
};

export default function AboutPage() {
  const metrics = [
    {
      num: '27+',
      label: 'Years as an operator in leadership and executive general management roles.',
    },
    {
      num: '$160M',
      label: 'Business built as part of the core leadership and execution team.',
    },
    {
      num: '$100M',
      label: 'Portfolios managed across ASEAN–GCN regional markets.',
    },
    {
      num: '₹500 Cr',
      label: 'Business portfolio transformed in India across multiple market verticals.',
    },
    {
      num: '$5M–$200M',
      label: 'Multiple first-of-a-kind (FOAK) and complex strategic enterprise deal wins.',
    },
    {
      num: '50+ · $2B+',
      label: 'Complex enterprise pursuits led and customer lifetime value delivered.',
    },
  ];

  const principles = [
    {
      step: '01 / 03',
      title: 'Start with the business question',
      desc: 'Understand the commercial situation, structural constraints, and strategic context before defining the advisory roadmap.',
    },
    {
      step: '02 / 03',
      title: 'Get into the operating detail',
      desc: 'Connect high-level strategic choices directly to customers, sales disciplines, delivery capability, people, workflows and unit economics.',
    },
    {
      step: '03 / 03',
      title: 'Build leadership capability',
      desc: 'Work directly with the executives responsible so the business internalizes capabilities and can carry the next phase with confidence.',
    },
  ];

  const focusAreas = [
    'Growth & Revenue Architecture',
    'India, APJ & Regional Market Expansion',
    'Complex Enterprise Deal Structuring ($5M–$200M+)',
    'Operating Model & Leadership Cadence',
    'AI & Digital Transformation Value Realization',
    'P&L Margin Optimization & Unit Economics',
  ];

  return (
    <>
      {/* Page Hero (Light Editorial Broadsheet) */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About the Firm</div>
          <h1>Experience from inside the business.</h1>
          <p>
            LadderFrame is a senior advisory partnership led by Anurag Verulkar, bringing 27 years of operating experience, P&amp;L leadership, and senior advisory judgement to leadership teams building the next phase of their business.
          </p>
        </div>
      </section>

      {/* The Firm Operating Thesis (Editorial Broadsheet Split) */}
      <section className="section">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow">The Operating Thesis</div>
            <h2>Led by an operator who has built, expanded and transformed businesses.</h2>
          </div>
          <div className="about-intro-copy">
            <p>
              LadderFrame is led by Anurag, who has a proven track record of executing high-growth business plans, establishing new regional markets, and scaling complex commercial operations across India and APJ.
            </p>
            <p>
              With 27 years of leadership experience at world-class organisations, he brings direct operating judgement to the decisions behind commercial growth, organizational structure, and enterprise deal pursuit.
            </p>

            <div className="pedigree-strip">
              <span className="pedigree-label">Operating Pedigree</span>
              <div className="pedigree-badges">
                <span className="pedigree-pill">Bajaj</span>
                <span className="pedigree-pill">Cognizant</span>
                <span className="pedigree-pill">Ascendion</span>
                <span className="pedigree-pill">NTT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Experience Proof Wall (Rich Dark Navy Executive Background) */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Scale &amp; Track Record</div>
            <h2 className="section-title">The scale of experience brought to the table.</h2>
            <p className="lead">
              Decades of direct accountability across business building, P&amp;L management, enterprise sales, and organizational transformation.
            </p>
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

      {/* Why the Experience Matters (Warm Sand Editorial Broadsheet) */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Operating Stance</div>
            <h2 className="section-title">Strategy has to work through the business.</h2>
            <p className="lead">
              Growth decisions connect commercial strategy, customer relationships, operating model, people, management cadence and economics. LadderFrame brings these dimensions together so leadership can make choices with a clearer view of the business they are building.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((pr, idx) => (
              <div key={idx} className="principle-card">
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '0.725rem', fontWeight: 650, letterSpacing: '0.12em', color: 'var(--color-red)', marginBottom: '0.65rem' }}>
                  {pr.step}
                </div>
                <h3>{pr.title}</h3>
                <p>{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Executive Dossier Section (Deep Dark Slate Navy) */}
      <section className="section dark-deep">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Firm Leadership</div>
            <h2 className="section-title">Executive Profile</h2>
            <p className="lead">
              Senior advisory stewardship rooted in 27 years of enterprise general management and commercial execution.
            </p>
          </div>

          <div className="executive-leadership-dossier">
            <div className="leadership-bio">
              <h3>Anurag Verulkar</h3>
              <span className="leadership-role-tag">Founder &amp; CEO &bull; LadderFrame Advisors</span>
              <p>
                Anurag brings 27 years of deep operating leadership spanning India, Singapore, and APJ. His career encompasses full P&amp;L accountability, building businesses from scratch to $160M scale, managing regional portfolios of $100M+, and transforming ₹500 Cr Indian corporate operations.
              </p>
              <p>
                He has led multiple first-of-a-kind (FOAK) deals, structured 50+ major enterprise pursuits delivering over $2B in customer lifetime value, and established scalable go-to-market systems across Technology, AI, Healthcare, and Growth-Stage enterprises.
              </p>
            </div>

            <div className="leadership-focus-box">
              <h4>Core Advisory Focus Areas</h4>
              <ul className="leadership-focus-list">
                {focusAreas.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA (Executive Conversion) */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-inner">
            <div className="eyebrow">Start with the business problem</div>
            <h2>Let’s talk.</h2>
            <p>
              Schedule an executive conversation around the growth choices, operating transitions, or enterprise pursuits in front of your business.
            </p>
            <div className="cta-actions">
              <Link href="/contact#start" className="btn btn-primary btn-pill">
                Start a Conversation <span className="btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
