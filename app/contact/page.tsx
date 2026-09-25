import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Direct Advisory Access',
  description: 'Connect directly with Anurag Verulkar to discuss enterprise pursuits, growth roadmaps, market expansion, or operating model transformation.',
};

export default function ContactPage() {
  const steps = [
    {
      num: '01 / 03',
      title: 'Initial Diagnostic Call',
      desc: 'A 45-minute confidential discussion with senior leadership to explore baseline realities, market conditions, and immediate strategic priorities.',
    },
    {
      num: '02 / 03',
      title: 'Situation Appraisal Memo',
      desc: 'A succinct executive memorandum outlining core strategic trade-offs, potential advisory scopes, and recommended engagement architecture.',
    },
    {
      num: '03 / 03',
      title: 'Advisory Cadence Kickoff',
      desc: 'Hands-on executive sparring, cadence setup, and active enablement working directly with the leaders responsible for driving growth.',
    },
  ];



  return (
    <>
      {/* Unified Direct Advisory Engagement Section (Deep Navy Slate) */}
      <section className="section dark contact-hero-section" id="start">
        <div className="container">
          
          {/* Header Tier */}
          <div className="contact-hero-header">
            <div className="eyebrow">Direct Advisory Engagement</div>
            <h1 className="contact-hero-title">Start with the strategic question.</h1>
            <p className="contact-hero-lead">
              LadderFrame engages directly with CEOs, Founders, Board Directors, and Growth Leaders. There are no junior intermediaries or intake funnels. Connect directly with Anurag Verulkar to evaluate strategic fit, board mandates, or commercial growth priorities.
            </p>
          </div>

          {/* Integrated Direct Access Dossier */}
          <div className="executive-access-wrapper">
            <div className="executive-access-card wide-card">
              
              {/* Header Tier: Practice Leadership */}
              <div className="dossier-header-tier">
                <div className="executive-role-tag">Practice Leader &bull; Direct Access</div>
                <h2 className="executive-name">Anurag Verulkar</h2>
                <div className="executive-title-sub">Founder &amp; Senior Advisory Partner &bull; LadderFrame Advisors</div>
              </div>

              {/* Middle Tier: 4-Column Direct Channel Ledger */}
              <div className="dossier-ledger-tier">
                <div className="ledger-col">
                  <span className="ledger-label">Direct Email</span>
                  <a href="mailto:anurag@ladderframe.in" className="ledger-val-link">
                    anurag@ladderframe.in
                  </a>
                </div>

                <div className="ledger-col">
                  <span className="ledger-label">Direct Phone / WhatsApp</span>
                  <a href="tel:+919930133194" className="ledger-val-link">
                    +91-9930133194
                  </a>
                </div>

                <div className="ledger-col">
                  <span className="ledger-label">Primary Practice Base</span>
                  <span className="ledger-val-text">
                    Mumbai, Maharashtra, India
                  </span>
                </div>

                <div className="ledger-col">
                  <span className="ledger-label">Regional Advisory Scope</span>
                  <span className="ledger-val-text">
                    India &bull; Singapore &bull; APJ
                  </span>
                </div>
              </div>

              {/* Bottom Tier: Confidentiality Banner + Instant Action Buttons */}
              <div className="dossier-action-tier">
                <div className="dossier-nda-box">
                  <div className="nda-badge">Confidentiality Standard</div>
                  <p className="nda-text">
                    All inquiries and discussions are held strictly confidential under executive NDA standards. We respond to verified executive inquiries within 24 business hours.
                  </p>
                </div>

                <div className="dossier-actions-group">
                  <a 
                    href="mailto:anurag@ladderframe.in?subject=Executive%20Advisory%20Inquiry%20%E2%80%94%20LadderFrame" 
                    className="btn btn-primary btn-pill"
                  >
                    Email Directly <span className="btn-arrow">&rarr;</span>
                  </a>
                  <a 
                    href="https://wa.me/919930133194?text=Hello%20Anurag%2C%20I%20would%20like%20to%20discuss%20an%20advisory%20engagement%20with%20LadderFrame." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-pill"
                  >
                    Message on WhatsApp <span className="btn-arrow">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Engagement Process Blueprint (Warm Sand Canvas) */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Engagement Blueprint</div>
            <h2 className="section-title">What happens next.</h2>
            <p className="lead">
              Our initial cadence is structured to give leadership rapid clarity without prolonged friction or unnecessary overhead.
            </p>
          </div>

          <div className="principles-grid">
            {steps.map((st, idx) => (
              <div key={idx} className="principle-card">
                <div className="principle-step-num">{st.num}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

