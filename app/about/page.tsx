import type { Metadata } from 'next';
import Link from 'next/link';
import ClosingBand from '@/components/ClosingBand';

export const metadata: Metadata = {
  title: 'About — LadderFrame Advisors',
  description: 'Advice from people who have run P&Ls, opened new regions and closed large deals. LadderFrame Advisors is a Mumbai-based advisory partnership.',
};

export default function AboutPage() {
  const leaders = [
    {
      name: 'Anurag Verulkar',
      title: 'Founder & CEO',
      bio: '27 years of sales and business experience at Bajaj, Cognizant, Ascendion and NTT, including opening new regions, building business units and scaling operations across India and APJ.',
      linkedin: 'https://www.linkedin.com/in/anuragverulkar?originalSubdomain=in',
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1>Experience from inside the <span>business.</span></h1>
          <p>
            Advice from people who have run P&amp;Ls, opened new regions and closed large deals.
          </p>
        </div>
      </section>

      {/* 2. The firm */}
      <section className="section white">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow">The firm</div>
            <h2>Led by operators.</h2>
          </div>
          <div className="about-intro-copy">
            <p>
              LadderFrame Advisors is a Mumbai-based advisory partnership. Its leadership brings 27 years of sales and business experience at Bajaj, Cognizant, Ascendion and NTT, including opening new regions, building business units and scaling operations across India and APJ.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Leadership */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Leadership</h2>
          </div>

          <div className="executive-profile-card">
            {/* Left: Identity & Connection */}
            <div className="executive-profile-sidebar">
              <div className="executive-profile-identity">
                <div className="executive-meta">
                  <h3 className="executive-name">
                    Anurag Verulkar
                  </h3>
                  <div className="executive-role">
                    Founder &amp; CEO
                  </div>
                  <div className="executive-org">
                    LadderFrame Advisors
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/anuragverulkar?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="executive-linkedin-btn"
                  >
                    <svg className="linkedin-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z" />
                    </svg>
                    LinkedIn Profile <span className="btn-arrow">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Operating Track Record & Bio */}
            <div className="executive-profile-main">
              <p className="executive-bio">
                27 years of sales and business experience at Bajaj, Cognizant, Ascendion and NTT, including opening new regions, building business units and scaling operations across India and APJ.
              </p>
              
              <div className="executive-credentials-pills">
                <span className="executive-cred-pill">27+ Years Leadership</span>
                <span className="executive-cred-pill">Bajaj · Cognizant · Ascendion · NTT</span>
                <span className="executive-cred-pill">India &amp; APJ Regional Scale</span>
                <span className="executive-cred-pill">P&amp;L &amp; Enterprise Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing band */}
      <ClosingBand />
    </>
  );
}
