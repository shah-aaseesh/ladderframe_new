import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Main Footer Architectural Grid */}
        <div className="footer-main-grid">
          
          {/* Brand Dossier Column */}
          <div className="footer-brand-column">
            <Link href="/" className="footer-brand-link" aria-label="LadderFrame Advisors Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo/logo-reverse.svg" 
                alt="LadderFrame Advisors" 
                className="footer-brand-logo-img"
                width="190"
                height="44"
              />
            </Link>
            <p className="footer-brand-tagline">
              Senior advisory for leadership teams making the critical decisions behind the growth number.
            </p>
            <div className="footer-entity-tag">
              Executive Advisory Practice &bull; Mumbai, India
            </div>
          </div>

          {/* Quick Advisory Navigation */}
          <div className="footer-nav-column">
            <span className="footer-col-heading">Navigation</span>
            <nav className="footer-links-list">
              <Link href="/">Home</Link>
              <Link href="/services">Capabilities &amp; Services</Link>
              <Link href="/about">Operating Pedigree &amp; Team</Link>
              <Link href="/contact">Direct Engagement</Link>
            </nav>
          </div>

          {/* Direct Executive Desk */}
          <div className="footer-contact-column">
            <span className="footer-col-heading">Executive Desk</span>
            <div className="footer-contact-details">
              <div className="footer-contact-row">
                <span className="footer-contact-label">Direct Inquiry</span>
                <a href="mailto:anurag@ladderframe.in" className="footer-contact-val">
                  anurag@ladderframe.in
                </a>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-label">Direct Phone</span>
                <a href="tel:+919930133194" className="footer-contact-val">
                  +91-9930133194
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Hairline Baseline Bar */}
        <div className="footer-baseline-bar">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} LadderFrame Advisors LLP. All rights reserved.
          </div>
          <div className="footer-confidentiality">
            Confidential Senior Advisory &bull; Mumbai &bull; India &bull; Global
          </div>
        </div>

      </div>
    </footer>
  );
}
