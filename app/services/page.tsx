import type { Metadata } from 'next';
import Link from 'next/link';
import ClosingBand from '@/components/ClosingBand';

export const metadata: Metadata = {
  title: 'Advisory Capabilities & Services — LadderFrame Advisors',
  description: 'Six connected advisory capabilities: Growth & revenue strategy, market expansion, large enterprise pursuits, operating models, AI transformation, and performance.',
};

function getCapabilityIcon(id: string) {
  switch (id) {
    case 'grow':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case 'expand':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <line x1="3.6" y1="9" x2="20.4" y2="9" />
          <line x1="3.6" y1="15" x2="20.4" y2="15" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      );
    case 'win':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'build':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case 'transform':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'perform':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    default:
      return null;
  }
}

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
      whatWeCover: 'Account intelligence, stakeholder mapping, Bid/No-Bid, Price-to-Win, value proposition and pursuit governance using CRAFT.',
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
      whatWeCover: 'Operating model, structure, decision rights, management cadence, sales & pre-sales, leadership & talent.',
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
                  <div className="service-dossier-code">
                    <span className="dossier-icon">{getCapabilityIcon(srv.id)}</span>
                    <span>{srv.label}</span>
                  </div>
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
