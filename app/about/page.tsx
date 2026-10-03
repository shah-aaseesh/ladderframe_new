import type { Metadata } from 'next';
import ClosingBand from '@/components/ClosingBand';

export const metadata: Metadata = {
  title: 'About Leadership & Track Record — LadderFrame Advisors',
  description: 'Senior operating advisory led by Anurag Verulkar. 27+ years of experience scaling businesses, building business units, and closing large enterprise deals.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1>Experience from inside the <span>business.</span></h1>
          <p>
            Advice from an operator who has run large P&amp;Ls, built new regions and service lines, and won complex deals.
          </p>
        </div>
      </section>

      {/* 2. Leadership */}
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

            {/* Right: Operating Credentials */}
            <div className="executive-profile-main">
              <div className="executive-credentials-pills">
                <span className="executive-cred-pill">27+ years in leadership</span>
                <span className="executive-cred-pill">Bajaj · Cognizant · Ascendion · NTT</span>
                <span className="executive-cred-pill">Scaled across India &amp; APJ</span>
                <span className="executive-cred-pill">P&amp;L and enterprise growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Closing band */}
      <ClosingBand />
    </>
  );
}
