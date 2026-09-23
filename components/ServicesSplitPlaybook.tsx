'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export interface CapabilityItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  question: string;
  focus: string;
  work: string;
  outcome: string;
  evidence: string;
  evidenceContext: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'grow',
    code: '01',
    tag: 'GROW',
    title: 'Growth & Revenue Strategy',
    question: 'Where will the next growth come from?',
    focus: 'Growth roadmap, GTM architecture and ICP definition, customer segmentation, sales organisation design, pricing strategy and revenue planning.',
    work: 'Growth priorities, commercial model options, sales process optimization, revenue analytics and executive management rhythm.',
    outcome: 'A clear, prioritised growth agenda, sharper commercial choices and stronger management visibility into revenue drivers.',
    evidence: 'IT Services Company — growth, sales transformation, partnerships and AI strategy.',
    evidenceContext: 'IT Services Enterprise',
  },
  {
    id: 'expand',
    code: '02',
    tag: 'EXPAND',
    title: 'Market Expansion',
    question: 'Where should we expand?',
    focus: 'Market opportunity assessment, entry strategy, new-segment GTM, customer/partner/channel strategy and competitive positioning.',
    work: 'Forward integration and adjacency choices, investment logic, partner economics and route-to-market design.',
    outcome: 'A validated expansion thesis, practical investment choices and a de-risked route to market.',
    evidence: 'Pharma Distribution Company — forward integration into pharmacy retail.',
    evidenceContext: 'Pharma Retail Expansion',
  },
  {
    id: 'win',
    code: '03',
    tag: 'WIN',
    title: 'Large Deal Structuring & Pursuit',
    question: 'How do we win the opportunities that matter?',
    focus: 'Account intelligence, stakeholder architecture, competitive positioning, Price-to-Win discipline and proposition architecture.',
    work: 'Bid/No-Bid decision discipline, CRAFT pursuit methodology, governance gates, deal health reviews and delivery alignment.',
    outcome: 'A structured pursuit strategy, comprehensive stakeholder coverage and tight alignment between commercial promise and delivery.',
    evidence: 'IT Services Company — complex growth and high-value enterprise pursuit context.',
    evidenceContext: 'Enterprise Pursuit ($5M–$200M+)',
  },
  {
    id: 'build',
    code: '04',
    tag: 'BUILD',
    title: 'Operating Model & Organisation',
    question: 'What needs to change inside the business?',
    focus: 'Operating model architecture, organisation structure, decision rights allocation and executive management cadence.',
    work: 'Sales/pre-sales processes, critical capabilities, leadership structure, accountability matrices and talent priorities.',
    outcome: 'Clearer accountability, faster decision cycles and an operating model aligned to sustain the next scale.',
    evidence: 'Data & AI Platform Company — fractional growth leadership across India & APJ.',
    evidenceContext: 'Regional Scale Architecture',
  },
  {
    id: 'transform',
    code: '05',
    tag: 'TRANSFORM',
    title: 'AI & Business Transformation',
    question: 'How should AI and transformation change the business?',
    focus: 'AI opportunity assessment, business and revenue strategy, customer value proposition and use-case prioritisation.',
    work: 'AI-enabled service/offering design, technological prioritisation, delivery roadmap and commercialisation model.',
    outcome: 'A prioritised, executable transformation agenda directly linked to measurable business value and revenue.',
    evidence: 'IT Services Company — AI market positioning and AI-enabled service design.',
    evidenceContext: 'AI Commercialisation Motion',
  },
  {
    id: 'perform',
    code: '06',
    tag: 'PERFORM',
    title: 'Profitability & Performance',
    question: 'How do we strengthen the economics of growth?',
    focus: 'Gross and operating margins, pricing discipline, commercial contracting terms, delivery economics and cost-to-serve.',
    work: 'Utilisation rates, capacity planning, customer/portfolio economics and executive performance management rhythm.',
    outcome: 'Transparent unit economics, identified value levers and a practical, sustained performance agenda.',
    evidence: 'Pharma Distribution Company — economics alongside retail forward integration.',
    evidenceContext: 'Margin & Portfolio Economics',
  },
];

export default function ServicesSplitPlaybook() {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0].id);
  const isClickScrolling = useRef(false);

  // Set up scroll tracking to highlight the active capability in the sticky rail
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const offsets = CAPABILITIES.map((cap) => {
        const el = document.getElementById(`capability-${cap.id}`);
        if (!el) return { id: cap.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: cap.id, top: Math.abs(rect.top - 180) };
      });

      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0] && offsets[0].top < 650) {
        setActiveId(offsets[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCapability = (id: string) => {
    setActiveId(id);
    isClickScrolling.current = true;
    const el = document.getElementById(`capability-${id}`);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  const activeCapability = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];

  return (
    <div className="services-split-layout">
      {/* LEFT COLUMN: Sticky Executive Navigation Rail */}
      <aside className="split-sticky-rail" aria-label="Capabilities Navigation">
        <div className="sticky-rail-inner">
          
          <div className="rail-header">
            <span className="rail-eyebrow">Capabilities Index</span>
            <h3 className="rail-title">Strategic Matrix</h3>
            <p className="rail-desc">
              Six connected advisory disciplines addressing growth, scale, and enterprise value.
            </p>
          </div>

          <nav className="split-index-nav">
            {CAPABILITIES.map((cap) => {
              const isActive = cap.id === activeId;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => scrollToCapability(cap.id)}
                  className={`split-nav-item ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <div className="nav-item-marker">
                    <span className="nav-item-num">{cap.code}</span>
                  </div>
                  <div className="nav-item-content">
                    <span className="nav-item-tag">{cap.tag}</span>
                    <span className="nav-item-title">{cap.title}</span>
                  </div>
                  <span className="nav-item-arrow" aria-hidden="true">&rarr;</span>
                </button>
              );
            })}
          </nav>

          <div className="rail-active-scope-card">
            <div className="scope-badge">Active Focus &bull; {activeCapability.code}</div>
            <div className="scope-question">&ldquo;{activeCapability.question}&rdquo;</div>
            <Link href="/contact#start" className="btn btn-primary btn-pill rail-cta-btn">
              Inquire on {activeCapability.tag} <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>

        </div>
      </aside>

      {/* RIGHT COLUMN: Continuous Playbook Stream of Dossiers */}
      <div className="split-dossier-stream">
        {CAPABILITIES.map((cap, idx) => {
          return (
            <article 
              key={cap.id} 
              id={`capability-${cap.id}`}
              className="split-dossier-card"
            >
              {/* Header Section */}
              <div className="dossier-header-block">
                <div className="dossier-top-meta">
                  <span className="dossier-code-badge">{cap.code} / {cap.tag}</span>
                  <span className="dossier-counter">Capability 0{idx + 1} of 06</span>
                </div>
                <h2 className="dossier-card-title">{cap.title}</h2>
                <div className="dossier-card-question">&ldquo;{cap.question}&rdquo;</div>
              </div>

              {/* 3-Pillar Operating Engine */}
              <div className="dossier-pillars-container">
                
                <div className="dossier-pillar-box">
                  <div className="dossier-pillar-top">
                    <span className="pillar-index">01</span>
                    <span className="pillar-heading">Advisory Focus</span>
                  </div>
                  <p>{cap.focus}</p>
                </div>

                <div className="dossier-pillar-box">
                  <div className="dossier-pillar-top">
                    <span className="pillar-index">02</span>
                    <span className="pillar-heading">What We Work Through</span>
                  </div>
                  <p>{cap.work}</p>
                </div>

                <div className="dossier-pillar-box pillar-outcome-box">
                  <div className="dossier-pillar-top">
                    <span className="pillar-index">03</span>
                    <span className="pillar-heading">Delivered Outcome</span>
                  </div>
                  <p>{cap.outcome}</p>
                </div>

              </div>

              {/* Bottom Track Record & Inquiry Row */}
              <div className="dossier-bottom-bar">
                <div className="evidence-summary">
                  <span className="evidence-mini-badge">Selected Track Record</span>
                  <p className="evidence-text">
                    <strong>{cap.evidenceContext}:</strong> {cap.evidence}
                  </p>
                </div>
                <div className="evidence-action">
                  <Link href="/contact#start" className="btn btn-secondary btn-pill">
                    Inquire on this Scope <span className="btn-arrow">&rarr;</span>
                  </Link>
                </div>
              </div>

            </article>
          );
        })}
      </div>
    </div>
  );
}
