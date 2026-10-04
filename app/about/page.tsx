import type { Metadata } from 'next';
import ClosingBand from '@/components/ClosingBand';

export const metadata: Metadata = {
  title: 'About Leadership & Track Record — LadderFrame Advisors',
  description: 'Senior operating advisory led by Anurag Verulkar. Nearly three decades of experience shaping businesses, entering new markets, and leading growth across India and APAC.',
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
          <div className="section-header-block" style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow">Leadership</div>
            <h2 className="section-title">Executive Profile</h2>
          </div>

          <div className="executive-profile-card">
            {/* Left: Portrait, Identity & LinkedIn */}
            <div className="executive-profile-sidebar">
              <div className="executive-photo-wrap">
                <img
                  src="/assets/Anurag Verulkar.jpeg"
                  alt="Anurag Verulkar — Founder & CEO, LadderFrame Advisors"
                  className="executive-photo"
                />
              </div>

              <div className="executive-profile-meta">
                <h3 className="executive-name">
                  Anurag Verulkar
                </h3>
                <div className="executive-role">
                  Founder &amp; CEO
                </div>
                <div className="executive-subtitle">
                  Business Leader &amp; Growth Advisor · Executive Coach
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

            {/* Right: Full Bio & Credentials */}
            <div className="executive-profile-main">
              <div className="executive-bio-copy">
                <p className="executive-bio-text">
                  Anurag Verulkar is a business leader and growth advisor with nearly three decades of experience, having shaped businesses through defining moments across India and APAC. His experience spans creating new businesses and propositions, entering new markets, building client relationships and strengthening the capabilities needed to take businesses to their next stage.
                </p>
                <p className="executive-bio-text">
                  Through LadderFrame, he brings this operator perspective to founders and leadership teams navigating important business decisions. Alongside his advisory work, Anurag is developing his practice as an executive coach, supporting leaders and entrepreneurs as they approach their next leadership or business inflection point.
                </p>
                <p className="executive-bio-text">
                  His focus is simple: bring experience, perspective and constructive challenge to decisions that matter.
                </p>
              </div>

              <div className="executive-highlights-grid">
                <div className="executive-highlight-box">
                  <span className="highlight-box-num">01</span>
                  <div className="highlight-box-content">
                    <div className="highlight-box-heading">27+ Years</div>
                    <div className="highlight-box-supporting">Executive &amp; operating experience</div>
                  </div>
                </div>

                <div className="executive-highlight-box">
                  <span className="highlight-box-num">02</span>
                  <div className="highlight-box-content">
                    <div className="highlight-box-heading">Bajaj · Cognizant · Ascendion · NTT</div>
                    <div className="highlight-box-supporting">Multiple leadership mandates</div>
                  </div>
                </div>

                <div className="executive-highlight-box">
                  <span className="highlight-box-num">03</span>
                  <div className="highlight-box-content">
                    <div className="highlight-box-heading">India &amp; APAC</div>
                    <div className="highlight-box-supporting">New markets, clients &amp; partnerships</div>
                  </div>
                </div>

                <div className="executive-highlight-box">
                  <span className="highlight-box-num">04</span>
                  <div className="highlight-box-content">
                    <div className="highlight-box-heading">P&amp;L and Enterprise Growth</div>
                    <div className="highlight-box-supporting">Scale, transformation &amp; performance</div>
                  </div>
                </div>
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
