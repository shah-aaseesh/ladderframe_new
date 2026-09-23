'use client';

import { useState, useEffect } from 'react';
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

export default function ServicesConsole() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCap = CAPABILITIES[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CAPABILITIES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  };

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not focused on an input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="services-console-wrapper" id="console">
      
      {/* 1. Top Architectural Capability Selector Matrix */}
      <div className="console-matrix-grid" role="tablist" aria-label="Capabilities Selector">
        {CAPABILITIES.map((cap, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={cap.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`dossier-${cap.id}`}
              id={`tab-${cap.id}`}
              onClick={() => setActiveIdx(idx)}
              className={`console-matrix-tab ${isActive ? 'active' : ''}`}
            >
              <div className="tab-code">
                <span className="tab-num">{cap.code}</span>
                <span className="tab-tag">/ {cap.tag}</span>
              </div>
              <div className="tab-title">{cap.title}</div>
              <div className="tab-indicator" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      {/* 2. Active Deep-Dive Dossier Display */}
      <div 
        className="console-dossier-card"
        id={`dossier-${activeCap.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCap.id}`}
        key={activeCap.id}
      >
        
        {/* Split Header: Left Title + Right Evidence & CTA */}
        <div className="console-dossier-split-header">
          
          <div className="dossier-main-copy">
            <div className="dossier-meta-group">
              <span className="dossier-index-badge">
                {activeCap.code} &bull; {activeCap.tag}
              </span>
              <span className="dossier-sequence-count">
                Capability {activeIdx + 1} of {CAPABILITIES.length}
              </span>
            </div>

            <h2 className="dossier-title">{activeCap.title}</h2>
            <div className="dossier-question">
              &ldquo;{activeCap.question}&rdquo;
            </div>
          </div>

          <div className="dossier-evidence-sidecard">
            <div className="evidence-side-header">
              <span className="evidence-badge">Selected Evidence</span>
              <span className="evidence-context-tag">{activeCap.evidenceContext}</span>
            </div>
            <p className="evidence-side-text">{activeCap.evidence}</p>
            <div className="evidence-side-action">
              <Link href="/contact#start" className="btn btn-primary btn-pill">
                Inquire on this Capability <span className="btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

        {/* 3-Pillar Connected Operating Engine */}
        <div className="console-pillars-grid">
          
          <div className="console-pillar-card">
            <div className="pillar-header">
              <span className="pillar-num">01</span>
              <span className="pillar-label">Advisory Focus</span>
            </div>
            <p>{activeCap.focus}</p>
          </div>

          <div className="console-pillar-card">
            <div className="pillar-header">
              <span className="pillar-num">02</span>
              <span className="pillar-label">What We Work Through</span>
            </div>
            <p>{activeCap.work}</p>
          </div>

          <div className="console-pillar-card pillar-outcome">
            <div className="pillar-header">
              <span className="pillar-num">03</span>
              <span className="pillar-label">Delivered Outcome</span>
            </div>
            <p>{activeCap.outcome}</p>
          </div>

        </div>

        {/* Dossier Navigation Controls */}
        <div className="console-dossier-footer">
          <div className="dossier-step-dots" aria-hidden="true">
            {CAPABILITIES.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`step-dot ${i === activeIdx ? 'active' : ''}`}
                title={`Go to ${c.title}`}
                aria-label={`Go to ${c.title}`}
              />
            ))}
          </div>

          <div className="dossier-nav-actions">
            <button 
              type="button" 
              onClick={handlePrev} 
              className="console-nav-btn"
              aria-label="Previous capability"
              title="Previous capability"
            >
              &larr; Prev
            </button>
            <button 
              type="button" 
              onClick={handleNext} 
              className="console-nav-btn"
              aria-label="Next capability"
              title="Next capability"
            >
              Next &rarr;
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

