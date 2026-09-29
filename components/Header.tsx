'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-wrapper">
          <Link 
            href="/" 
            className="brand-card" 
            aria-label="LadderFrame Advisors — Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo/logo-primary.svg" 
              alt="LadderFrame Advisors" 
              className="brand-logo-img"
              width="190"
              height="44"
            />
          </Link>
        </div>

        <div className={`nav-links-wrap ${mobileNavOpen ? 'nav-open open' : ''}`} id="navLinksWrap">
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="header-actions">
            <Link 
              href="/contact#start" 
              className="btn btn-primary btn-pill"
              onClick={() => setMobileNavOpen(false)}
            >
              Let’s Talk <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>

        <button 
          type="button"
          className="mobile-nav-toggle" 
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle navigation menu" 
          aria-expanded={mobileNavOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileNavOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
