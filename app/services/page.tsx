import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesLedger from '@/components/ServicesLedger';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Services & Capabilities',
  description: 'Six connected advisory capabilities: Growth & Revenue Strategy, Market Expansion, Large Deal Structuring (CRAFT), Operating Model & Organisation, AI & Business Transformation, and Profitability.',
};

export default function ServicesPage() {
  const craftDimensions = [
    {
      letter: 'C',
      title: 'Conviction',
      description: 'Building absolute clarity on why we are uniquely positioned to win and establishing unshakeable strategic value for the enterprise client.',
    },
    {
      letter: 'R',
      title: 'Readiness Intelligence',
      description: 'Rigorous deal qualification, competitive dynamics modeling, Price-to-Win architecture, and Bid/No-Bid pursuit governance.',
    },
    {
      letter: 'A',
      title: 'Authenticity',
      description: 'Aligning commercial promises and value propositions with realistic operating capability, delivery velocity, and risk posture.',
    },
    {
      letter: 'F',
      title: 'Full Stakeholder Architecture',
      description: 'Multi-threaded mapping and active coverage across economic decision-makers, executive sponsors, evaluators, and procurement.',
    },
    {
      letter: 'T',
      title: 'Team Continuity',
      description: 'Bridging the transition from sales pursuit to delivery leadership seamlessly to protect margin integrity and relationship trust.',
    },
  ];

  return (
    <>
      {/* Page Hero (Light Editorial Broadsheet) */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Services &amp; Capabilities</div>
          <h1>SIX CAPABILITIES. ONE CONNECTED GROWTH AGENDA.</h1>
          <p>
            Each capability answers a strategic business question as an organisation enters its next phase. Explore the practice ledger below to see where LadderFrame focuses, what leadership works through, and the delivered outcomes.
          </p>
        </div>
      </section>

      {/* Minimalist Executive Ledger */}
      <section className="section section-services-ledger">
        <div className="container">
          <ServicesLedger />
        </div>
      </section>

      {/* Large Deal Advisory: CRAFT Section (Deep Slate Navy) */}
      <section className="section dark-deep">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Strategic Enterprise Pursuit</div>
            <h2 className="section-title">CRAFT FOR COMPLEX PURSUITS.</h2>
            <p className="lead">
              For strategically vital enterprise opportunities ($5M–$200M+), LadderFrame deploys a disciplined pursuit framework across five mission-critical pillars:
            </p>
          </div>

          <div className="craft-monogram-grid">
            {craftDimensions.map((item) => (
              <div key={item.letter} className="craft-monogram-card">
                <div className="craft-big-letter">{item.letter}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Engagements Dossier Strip (Warm Sand Canvas) */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Selected Work</div>
            <h2 className="section-title">FOUR BUSINESS SITUATIONS. ONE ADVISORY APPROACH.</h2>
            <p className="lead">
              Customer identities are anonymised. These examples demonstrate how our capabilities combine in active executive contexts.
            </p>
          </div>

          <div className="case-dossier-layout">
            <div className="case-hero-dossier">
              <div className="case-hero-main">
                <span className="case-tag-lead">Case 01 &bull; Pharma Distribution</span>
                <h3>Forward integration into pharmacy retail</h3>
                <p>Advisory around forward integration, retail acquisition logic, commercial terms and partner development for an expanding healthcare and pharmaceutical distribution network.</p>
              </div>
              <div className="case-hero-outcome-box">
                <div className="outcome-label">Delivered Outcome</div>
                <p>Forward integration into pharmacy retail completed with institutional commercial terms and new pharma partners onboarded.</p>
                <div className="metric-highlight">₹2.65 Cr &bull; Executed in 6 weeks</div>
              </div>
            </div>

            <div className="case-strip-grid">
              <div className="case-strip-item">
                <span className="meta">Case 02 &bull; IT Services</span>
                <h3>Growth, sales transformation &amp; AI</h3>
                <p>Growth and commercial architecture for a ~₹120 Cr IT services business scaling enterprise pursuits and positioning.</p>
                <div className="outcome-subtle">
                  <strong>Focus:</strong> Scalable sales engine, partner GTM motion and AI market proposition.
                </div>
              </div>

              <div className="case-strip-item">
                <span className="meta">Case 03 &bull; Agri-Tech &amp; Rural Impact</span>
                <h3>PMF, business models &amp; investor narrative</h3>
                <p>Advisory across product-market fit, integrated dairy ecosystem, fundraising and strategic market positioning.</p>
                <div className="outcome-subtle">
                  <strong>Focus:</strong> New growth avenues and establishing an institutional investor narrative.
                </div>
              </div>

              <div className="case-strip-item">
                <span className="meta">Case 04 &bull; Data &amp; AI Platform</span>
                <h3>Fractional growth leadership — India &amp; APJ</h3>
                <p>Embedded leadership across PMF, GTM architecture, expansion, partnerships and investor ecosystem.</p>
                <div className="outcome-subtle">
                  <strong>Focus:</strong> Scalable India/APJ growth platform and revenue operations cadence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA (Executive Conversion) */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-inner">
            <div className="eyebrow">Start with the business problem</div>
            <h2>LET’S TALK.</h2>
            <p>
              Discuss how these capabilities apply to your current growth inflection point, enterprise pursuits, or operating roadmap.
            </p>
            <div className="cta-actions">
              <Link href="/contact#start" className="btn btn-primary btn-pill">
                START A CONVERSATION <span className="btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
