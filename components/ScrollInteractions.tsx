'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollInteractions() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Viewport Scroll Progress & Back-to-Top Toggle
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setShowBackToTop(totalScroll > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. IntersectionObserver for Reveal Animations & Animated Counters on Route Change
  useEffect(() => {
    // Select animatable cards and sections
    const targetSelectors = [
      '.section-header-block',
      '.hero-copy',
      '.hero-visual-frame',
      '.proof-item',
      '.segment-col',
      '.inflection-row',
      '.cap-cell',
      '.case-hero-dossier',
      '.case-strip-item',
      '.engagement-stage-card',
      '.operating-stance-callout',
      '.service-dossier-card',
      '.craft-monogram-card',
      '.proof-card',
      '.principle-card',
      '.executive-leadership-dossier',
      '.leadership-card',
      '.contact-card-executive',
      '.inquiry-form-card',
    ];

    const elements = document.querySelectorAll(targetSelectors.join(', '));
    
    elements.forEach((el, idx) => {
      if (!el.classList.contains('reveal-init')) {
        el.classList.add('reveal-init');
        // Add stagger class if sibling
        const siblingIndex = idx % 5;
        if (siblingIndex > 0) {
          el.classList.add(`stagger-${siblingIndex}`);
        }
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Trigger counters inside if present
            const counterElements = entry.target.querySelectorAll('.exp-metric-num[data-target], .num[data-target], .big[data-target]');
            counterElements.forEach((counterEl) => animateCounter(counterEl as HTMLElement));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => revealObserver.observe(el));

    // Also observe any direct counters outside containers
    const standaloneCounters = document.querySelectorAll('.exp-metric-num[data-target], .num[data-target], .big[data-target]');
    standaloneCounters.forEach((c) => {
      if (!c.closest('.reveal-init')) {
        const counterObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounter(entry.target as HTMLElement);
                counterObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        counterObserver.observe(c);
      }
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]);

  // Smooth Counter Animation Function
  const animateCounter = (el: HTMLElement) => {
    if (el.dataset.hasAnimated === 'true') return;
    el.dataset.hasAnimated = 'true';

    const type = el.getAttribute('data-counter') || 'single';
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500; // ms
    const startTime = performance.now();

    if (type === 'single') {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      if (isNaN(target)) return;

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - rawProgress, 3);
        const currentVal = target * ease;

        if (rawProgress >= 1) {
          el.textContent = `${prefix}${decimals > 0 ? target.toFixed(decimals) : target}${suffix}`;
        } else {
          el.textContent = `${prefix}${decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal)}${suffix}`;
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    } else if (type === 'range') {
      const startTarget = parseFloat(el.getAttribute('data-start') || '0');
      const endTarget = parseFloat(el.getAttribute('data-end') || '0');

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - rawProgress, 3);
        const currentStart = startTarget * ease;
        const currentEnd = endTarget * ease;

        if (rawProgress >= 1) {
          el.textContent = `${prefix}${startTarget}–${endTarget}${suffix}`;
        } else {
          el.textContent = `${prefix}${Math.floor(currentStart)}–${Math.floor(currentEnd)}${suffix}`;
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Top Viewport Reading Progress Bar */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <button 
        type="button"
        className={`floating-back-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
