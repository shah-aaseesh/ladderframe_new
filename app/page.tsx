import type { Metadata } from 'next';
import Link from 'next/link';
import ClosingBand from '@/components/ClosingBand';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Advisory for the next phase of growth',
  description: 'For CEOs and leadership teams making the decisions that growth now depends on: where to play, what to win and what to build.',
};

export default function HomePage() {
  const sixQuestions = [
    {
      label: '01 · Grow',
      question: 'Where will the next growth come from?',
      linkText: 'Growth & Revenue Strategy →',
      href: '/services#grow',
    },
    {
      label: '02 · Expand',
      question: 'Which markets should we enter, and how?',
      linkText: 'Market Expansion →',
      href: '/services#expand',
    },
    {
      label: '03 · Win',
      question: 'How do we win the deals that matter?',
      linkText: 'Large Deal Structuring & Pursuit →',
      href: '/services#win',
    },
    {
      label: '04 · Build',
      question: 'What has to change inside the business?',
      linkText: 'Operating Model & Organisation →',
      href: '/services#build',
    },
    {
      label: '05 · Transform',
      question: 'Where will AI create real value?',
      linkText: 'AI & Business Transformation →',
      href: '/services#transform',
    },
    {
      label: '06 · Perform',
      question: 'How do we make growth pay?',
      linkText: 'Profitability & Performance →',
      href: '/services#perform',
    },
  ];

  const whoWeWorkWith = [
    {
      title: 'Founder-led & growth-stage companies',
      text: 'Moving from founder-led growth to a scalable model.',
    },
    {
      title: 'Technology & IT services',
      text: 'Building GTM, enterprise sales, partnerships or new regions.',
    },
    {
      title: 'Data, AI & emerging tech',
      text: 'Turning capability into market traction.',
    },
    {
      title: 'Established enterprises',
      text: 'Business units entering a period of growth, expansion or transformation.',
    },
  ];

  const trackRecord = [
    {
      figure: '27+',
      caption: 'Years as an operator in leadership roles',
    },
    {
      figure: '$160M',
      caption: 'Business built as part of the core leadership & execution team',
    },
    {
      figure: '$100M',
      caption: 'Portfolios managed in ASEAN & Greater China',
    },
    {
      figure: '₹500 Cr',
      caption: 'Business transformed in India',
    },
    {
      figure: '$5M–$200M',
      caption: 'First-of-a-kind & strategic deals',
    },
    {
      figure: '50+ · $2B+',
      caption: 'Complex enterprise deals · customer lifetime value delivered',
    },
  ];

  const selectedWork = [
    {
      sector: 'Pharma distribution',
      status: 'Completed',
      title: 'Forward integration into pharmacy retail',
      text: 'Retail acquisition and partner development. ₹2.65 Cr acquisition closed in 6 weeks; new pharma partners onboarded.',
    },
    {
      sector: 'IT services · ~₹120 Cr',
      status: 'In progress',
      title: 'Growth & sales transformation',
      text: 'Sales engine, partner-led GTM and an AI-led proposition.',
    },
    {
      sector: 'Agri-tech & rural impact',
      status: 'In progress',
      title: 'New business models & investor narrative',
      text: 'PMF, an integrated dairy ecosystem and fundraising.',
    },
    {
      sector: 'Data & AI platform',
      status: 'In progress',
      title: 'Fractional growth leadership, India & APJ',
      text: 'GTM, expansion, partnerships and the investor ecosystem.',
    },
  ];

  const howWeEngage = [
    {
      step: '01',
      title: 'Diagnose',
      text: 'Understand the situation.',
    },
    {
      step: '02',
      title: 'Advise',
      text: 'Make the choices explicit.',
    },
    {
      step: '03',
      title: 'Enable',
      text: 'Build what’s needed.',
    },
    {
      step: '04',
      title: 'Challenge & Coach',
      text: 'Work with the people responsible.',
    },
    {
      step: '05',
      title: 'Monitor & Course-correct',
      text: 'Stay close as the plan plays out.',
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="section hero-home">
        <div className="container">
          <div className="hero-split-grid">
            <div className="hero-copy">
              <div className="eyebrow">LadderFrame Advisors</div>
              <h1>Advisory for the next phase of <span>growth.</span></h1>
              <p>
                For CEOs and leadership teams making the decisions that growth now depends on: where to play, what to win and what to build.
              </p>
              <div className="hero-actions-group">
                <Link href="/contact#start" className="btn btn-primary">
                  Let’s Talk <span className="btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="hero-visual-wrapper">
              <div className="hero-visual-blend">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/hero-structure.jpg" 
                  alt="LadderFrame Advisors — Strategic Architecture" 
                  className="hero-visual-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Six questions */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <h2 className="section-title">When the business changes, the questions change.</h2>
          </div>

          <div className="question-grid">
            {sixQuestions.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href} 
                className="question"
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer' 
                }}
              >
                <div className="num">{item.label}</div>
                <h3>{item.question}</h3>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <span style={{ color: 'var(--color-red-light)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    {item.linkText}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who we work with */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block">
            <h2 className="section-title">Leaders building what comes next.</h2>
          </div>

          <div className="segment-grid">
            {whoWeWorkWith.map((item, idx) => (
              <div key={idx} className="segment">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Track record */}
      <section className="proof-strip-section" aria-label="Founder’s operating track record">
        <div className="container">
          <div className="section-header-block" style={{ marginBottom: '2rem' }}>
            <div className="eyebrow" style={{ color: 'var(--color-red-light)' }}>
              Founder’s operating track record
            </div>
          </div>

          <div className="proof-grid">
            {trackRecord.map((item, idx) => (
              <div key={idx} className="proof-item">
                <div className="num">{item.figure}</div>
                <div className="proof-label">{item.caption}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link 
              href="/about" 
              className="btn"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.75rem 1.75rem',
                fontSize: '0.925rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              More about our leadership <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Selected work */}
      <section className="section white" id="selected-work">
        <div className="container">
          <div className="section-header-block">
            <h2 className="section-title">Selected work</h2>
            <p className="lead" style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
              Note: Client names are anonymised.
            </p>
          </div>

          <div className="case-grid">
            {selectedWork.map((cs, idx) => (
              <div key={idx} className="case">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="meta" style={{ marginBottom: 0 }}>{cs.sector}</span>
                  <span 
                    style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: cs.status === 'Completed' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                      color: cs.status === 'Completed' ? '#059669' : '#D97706'
                    }}
                  >
                    {cs.status}
                  </span>
                </div>
                <h3>{cs.title}</h3>
                <p>{cs.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How we engage */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block">
            <h2 className="section-title">How we engage</h2>
          </div>

          <div className="steps">
            {howWeEngage.map((st, idx) => (
              <div key={idx} className="step">
                <div className="num">{st.step}</div>
                <h4>{st.title}</h4>
                <p>{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing band */}
      <ClosingBand />
    </>
  );
}
