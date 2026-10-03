import type { Metadata } from 'next';
import Link from 'next/link';
import ClosingBand from '@/components/ClosingBand';

export const metadata: Metadata = {
  title: 'Advisory Capabilities & Services — LadderFrame Advisors',
  description: 'Six connected advisory capabilities: Growth & revenue strategy, market expansion, large enterprise pursuits, operating models, AI transformation, and performance.',
};

export default function ServicesPage() {
  const capabilities = [
    {
      id: 'grow',
      label: '01 · Grow',
      name: 'Growth & Revenue Strategy',
      question: 'Where will the next growth come from?',
      caseLinks: [
        {
          text: 'Case: IT services growth & sales transformation',
          href: '/#case-it-services',
        },
        {
          text: 'Case: Agri-tech new business models & investor narrative',
          href: '/#case-agri-tech',
        },
      ],
      whatWeCover: 'Growth roadmap, ICP and segmentation, GTM, sales organisation, pricing and revenue planning.',
      whatYouGet: 'A prioritised growth agenda and clear visibility of the revenue engine.',
    },
    {
      id: 'expand',
      label: '02 · Expand',
      name: 'Market Expansion',
      question: 'Which markets should we enter, and how?',
      caseLinks: [
        {
          text: 'Case: Pharma forward integration',
          href: '/#case-pharma',
        },
        {
          text: 'Case: Fractional growth leadership',
          href: '/#case-fractional',
        },
      ],
      whatWeCover: 'Market assessment, entry strategy, adjacencies, partner and channel strategy, competitive positioning.',
      whatYouGet: 'A clear expansion case, the investment it needs and a route to market.',
    },
    {
      id: 'win',
      label: '03 · Win',
      name: 'Large Deal Structuring & Pursuit',
      question: 'How do we win the deals that matter?',
      caseLinks: [
        {
          text: 'Case: IT services growth & enterprise sales transformation',
          href: '/#case-it-services',
        },
      ],
      whatWeCover: 'Account intelligence, stakeholder mapping, Price-to-Win, proposition, Bid/No-Bid and pursuit governance using CRAFT.',
      whatYouGet: 'A focused pursuit, full stakeholder coverage and a deal your delivery team can honour.',
    },
    {
      id: 'build',
      label: '04 · Build',
      name: 'Operating Model & Organisation',
      question: 'What has to change inside the business?',
      caseLinks: [
        {
          text: 'Case: IT services sales engine & GTM transformation',
          href: '/#case-it-services',
        },
      ],
      whatWeCover: 'Operating model, structure, decision rights, management cadence, sales and pre-sales process, leadership and talent.',
      whatYouGet: 'Clear accountability and faster decisions.',
    },
    {
      id: 'transform',
      label: '05 · Transform',
      name: 'AI & Business Transformation',
      question: 'Where will AI create real value?',
      caseLinks: [
        {
          text: 'Case: IT services AI proposition',
          href: '/#case-it-services',
        },
      ],
      whatWeCover: 'AI opportunity assessment, use cases, AI-enabled offerings, roadmap and commercialisation.',
      whatYouGet: 'A prioritised AI agenda tied to revenue, margin or productivity.',
    },
    {
      id: 'perform',
      label: '06 · Perform',
      name: 'Profitability & Performance',
      question: 'How do we make growth pay?',
      caseLinks: [
        {
          text: 'Case: IT services growth & performance transformation',
          href: '/#case-it-services',
        },
      ],
      whatWeCover: 'Pricing, margin, commercial terms, delivery economics, utilisation, cost-to-serve and portfolio economics.',
      whatYouGet: 'Clear economics, the right value levers and a rhythm for tracking them.',
    },
  ];

  const craftItems = [
    {
      letter: 'C',
      title: 'Conviction',
      text: 'Why you are positioned to win, and why it matters to the buyer.',
    },
    {
      letter: 'R',
      title: 'Readiness',
      text: 'Qualification, competitive intelligence and Bid/No-Bid discipline.',
    },
    {
      letter: 'A',
      title: 'Authenticity',
      text: 'Promise only what delivery can carry.',
    },
    {
      letter: 'F',
      title: 'Full Stakeholder Coverage',
      text: 'Every decision-maker, influencer and sponsor mapped and engaged.',
    },
    {
      letter: 'T',
      title: 'Team Continuity',
      text: 'The pursuit team hands over to delivery without a gap.',
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1>Six capabilities. One connected growth <span>agenda.</span></h1>
          <p>
            Each capability answers one business question. Use them alone or together.
          </p>
        </div>
      </section>

      {/* 2. The Six Capabilities */}
      <section className="section services-stack-section">
        <div className="container">
          <div className="capabilities-stack-deck">
            {capabilities.map((srv, idx) => (
              <div 
                key={srv.id} 
                id={srv.id}
                className="capability-stack-card"
                style={{ '--card-idx': idx } as React.CSSProperties}
              >
                <div className="service-dossier-head">
                  <div className="service-dossier-code">{srv.label}</div>
                  <div>
                    <h2>{srv.name}</h2>
                    <div className="service-dossier-question">{srv.question}</div>
                  </div>
                </div>

                <div className="service-dossier-blocks">
                  <div className="service-block-cell">
                    <div className="block-label">What we cover</div>
                    <p>{srv.whatWeCover}</p>
                  </div>
                  <div className="service-block-cell outcome-cell">
                    <div className="block-label">What you get</div>
                    <p>{srv.whatYouGet}</p>
                  </div>
                </div>

                {srv.caseLinks && srv.caseLinks.length > 0 && (
                  <div className="service-cases-deck">
                    {srv.caseLinks.map((link, lIdx) => (
                      <Link 
                        key={lIdx}
                        href={link.href}
                        className="service-case-box"
                      >
                        <span className="case-box-text">{link.text}</span>
                        <span className="case-box-arrow">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CRAFT */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Large deal advisory</div>
            <h2 className="section-title">CRAFT for complex pursuits.</h2>
            <p className="lead">
              For strategically important enterprise deals, we use CRAFT &mdash; our structured pursuit method.
            </p>
          </div>

          <div className="craft-grid">
            {craftItems.map((item) => (
              <div key={item.letter} className="craft-card">
                <div className="craft-letter">{item.letter}</div>
                <div className="craft-title">{item.title}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing band */}
      <ClosingBand />
    </>
  );
}
