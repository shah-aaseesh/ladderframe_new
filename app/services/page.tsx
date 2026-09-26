import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Services',
  description: 'Each capability answers a business question that becomes important as an organisation enters its next phase. The sequence within each capability is deliberate: where LadderFrame focuses → what leadership works through → what the engagement is designed to strengthen.',
};

export default function ServicesPage() {
  const services = [
    {
      code: '01 · GROW',
      title: 'Growth & Revenue Strategy',
      question: 'Where will the next growth come from?',
      focus: 'Growth roadmap, GTM and ICP, segmentation, sales organisation, pricing and revenue planning.',
      work: 'Growth priorities, commercial model, sales process, revenue analytics and management rhythm.',
      outcome: 'A prioritised growth agenda, clearer commercial choices and stronger management visibility.',
      evidence: 'IT Services Company — growth, sales transformation, partnerships and AI strategy.',
    },
    {
      code: '02 · EXPAND',
      title: 'Market Expansion',
      question: 'Where should we expand?',
      focus: 'Market assessment, entry strategy, new-segment GTM, customer/partner/channel strategy and competitive positioning.',
      work: 'Forward integration and adjacency choices, investment logic and route-to-market design.',
      outcome: 'A clear expansion thesis, practical investment choices and a route to market.',
      evidence: 'Pharma Distribution Company — forward integration into pharmacy retail.',
    },
    {
      code: '03 · WIN',
      title: 'Large Deal Structuring & Pursuit',
      question: 'How do we win the opportunities that matter?',
      focus: 'Account intelligence, stakeholder architecture, competitive positioning, Price-to-Win and proposition architecture.',
      work: 'Bid/No-Bid discipline, CRAFT pursuit methodology, governance, health reviews and delivery alignment.',
      outcome: 'A more focused pursuit strategy, stronger stakeholder coverage and alignment between commercial promise and delivery.',
      evidence: 'IT Services Company — complex growth and enterprise pursuit context.',
    },
    {
      code: '04 · BUILD',
      title: 'Operating Model & Organisation',
      question: 'What needs to change inside the business?',
      focus: 'Operating model, organisation structure, decision rights and management cadence.',
      work: 'Sales/pre-sales processes, critical capabilities, leadership structure and talent priorities.',
      outcome: 'Clearer accountability, faster decisions and an organisation aligned to the next phase.',
      evidence: 'Data & AI Platform Company — fractional growth leadership across India & APJ.',
    },
    {
      code: '05 · TRANSFORM',
      title: 'AI & Business Transformation',
      question: 'How should AI and transformation change the business?',
      focus: 'AI opportunity assessment, business and revenue strategy, proposition and use-case definition.',
      work: 'AI-enabled service/offering design, prioritisation, roadmap and commercialisation.',
      outcome: 'A prioritised transformation agenda linked to measurable business value.',
      evidence: 'IT Services Company — AI market positioning and AI-enabled service design.',
    },
    {
      code: '06 · PERFORM',
      title: 'Profitability & Performance',
      question: 'How do we strengthen the economics of growth?',
      focus: 'Margin, pricing, commercial terms, delivery economics and cost-to-serve.',
      work: 'Utilisation, capacity, customer/portfolio economics and performance management rhythm.',
      outcome: 'Clearer economics, identified value levers and a practical performance agenda.',
      evidence: 'Pharma Distribution Company — economics alongside forward integration.',
    },
  ];

  const cases = [
    {
      meta: 'Pharma distribution company',
      title: 'Forward integration',
      desc: 'Expansion strategy, retail acquisition and partner development.',
      outcome: '₹2.65 Cr acquisition completed in 6 weeks; new pharma partners onboarded.',
      isOutcome: true,
    },
    {
      meta: 'IT services company',
      title: 'Growth & commercial transformation',
      desc: 'Sales organisation, partnerships, AI positioning and growth architecture.',
      outcome: 'Scalable sales engine, partner-led GTM and AI-led proposition.',
      isOutcome: false,
    },
    {
      meta: 'Agri-tech & rural impact company',
      title: 'PMF & new growth avenues',
      desc: 'New business models, integrated dairy ecosystem, fundraising and positioning.',
      outcome: 'New growth avenues and stronger investor/market narrative.',
      isOutcome: false,
    },
    {
      meta: 'Data & AI platform company',
      title: 'Fractional growth leadership',
      desc: 'India/APJ growth agenda, PMF, GTM, expansion and partnerships.',
      outcome: 'Establishing the India/APJ growth platform.',
      isOutcome: false,
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1>Six capabilities. One connected growth agenda.</h1>
          <p>
            Each capability answers a business question that becomes important as an organisation enters its next phase. The sequence within each capability is deliberate: where LadderFrame focuses &rarr; what leadership works through &rarr; what the engagement is designed to strengthen.
          </p>
        </div>
      </section>

      {/* The Six Services Flow (Stacking Cards Deck) */}
      <section className="section services-stack-section">
        <div className="container">
          <div className="capabilities-stack-deck">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                className="capability-stack-card"
                style={{ '--card-idx': idx } as React.CSSProperties}
              >
                <div className="service-dossier-head">
                  <div className="service-dossier-code">{srv.code}</div>
                  <div>
                    <h2>{srv.title}</h2>
                    <div className="service-dossier-question">{srv.question}</div>
                  </div>
                </div>

                <div className="service-dossier-blocks">
                  <div className="service-block-cell">
                    <div className="block-label">Advisory focus</div>
                    <p>{srv.focus}</p>
                  </div>
                  <div className="service-block-cell">
                    <div className="block-label">What we work through</div>
                    <p>{srv.work}</p>
                  </div>
                  <div className="service-block-cell outcome-cell">
                    <div className="block-label">Typical outcome</div>
                    <p>{srv.outcome}</p>
                  </div>
                </div>

                <div className="service-evidence-strip">
                  <strong>Selected evidence:</strong> {srv.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Deal Advisory (CRAFT Framework) */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Large deal advisory</div>
            <h2 className="section-title">CRAFT for complex pursuits.</h2>
            <p className="lead">
              For strategically important enterprise opportunities, LadderFrame brings a structured pursuit lens across Conviction, Readiness Intelligence, Authenticity, Full Stakeholder Architecture and Team Continuity.
            </p>
          </div>

          <div className="craft-grid">
            <div className="craft-card">
              <div className="craft-letter">C</div>
              <div className="craft-title">Conviction</div>
              <p>Building absolute clarity on why we are positioned to win and the strategic value to the client.</p>
            </div>
            <div className="craft-card">
              <div className="craft-letter">R</div>
              <div className="craft-title">Readiness Intelligence</div>
              <p>Rigorous qualification, competitive intelligence, and Bid/No-Bid pursuit governance.</p>
            </div>
            <div className="craft-card">
              <div className="craft-letter">A</div>
              <div className="craft-title">Authenticity</div>
              <p>Aligning the commercial promise and value proposition with realistic operating capabilities.</p>
            </div>
            <div className="craft-card">
              <div className="craft-letter">F</div>
              <div className="craft-title">Full Stakeholder Architecture</div>
              <p>Mapping and engaging decision-makers, influencers, procurement, and executive sponsors.</p>
            </div>
            <div className="craft-card">
              <div className="craft-letter">T</div>
              <div className="craft-title">Team Continuity</div>
              <p>Bridging the transition from sales pursuit to delivery leadership seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Engagements */}
      <section className="section light">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Selected engagements</div>
            <h2 className="section-title">Four business situations. One advisory approach.</h2>
          </div>

          <div className="case-grid">
            {cases.map((cs, idx) => (
              <div key={idx} className="case">
                <div className="meta">{cs.meta}</div>
                <h3>{cs.title}</h3>
                <p>{cs.desc}</p>
                <div className="outcome">
                  {cs.isOutcome ? (
                    <><strong>Outcome:</strong> {cs.outcome}</>
                  ) : (
                    <><strong>Current outcome focus:</strong> {cs.outcome}</>
                  )}
                </div>
              </div>
            ))}
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
