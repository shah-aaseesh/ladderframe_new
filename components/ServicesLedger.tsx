'use client';

import { useState } from 'react';
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

export default function ServicesLedger() {
  const [openIds, setOpenIds] = useState<string[]>(['grow']);

  const toggleRow = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="services-ledger-container" id="capabilities-ledger">
      
      {/* Main Ledger Table */}
      <div className="ledger-table" role="region" aria-label="Capabilities Ledger">
        {CAPABILITIES.map((cap) => {
          const isOpen = openIds.includes(cap.id);
          
          return (
            <div 
              key={cap.id} 
              id={`ledger-item-${cap.id}`}
              className={`ledger-row ${isOpen ? 'is-open' : ''}`}
            >
              {/* Row Header Bar (Always Visible, Clickable) */}
              <button
                type="button"
                className="ledger-row-header"
                onClick={() => toggleRow(cap.id)}
                aria-expanded={isOpen}
                aria-controls={`drawer-${cap.id}`}
              >
                <div className="ledger-col-index">
                  <div className="ledger-code-pill">
                    <span className="ledger-num">{cap.code}</span>
                    <span className="ledger-tag-divider">/</span>
                    <span className="ledger-tag">{cap.tag}</span>
                  </div>
                </div>

                <div className="ledger-col-title">
                  <h2 className="ledger-title-text">{cap.title}</h2>
                </div>

                <div className="ledger-col-question">
                  <span className="ledger-question-quote">&ldquo;</span>
                  <span className="ledger-question-text">{cap.question}</span>
                  <span className="ledger-question-quote">&rdquo;</span>
                </div>

                <div className="ledger-col-toggle" aria-hidden="true">
                  <span className="ledger-toggle-circle">
                    <span className="ledger-toggle-symbol">{isOpen ? '−' : '+'}</span>
                  </span>
                </div>
              </button>

              {/* In-Place Expandable Drawer */}
              {isOpen && (
                <div 
                  className="ledger-row-drawer" 
                  id={`drawer-${cap.id}`}
                  role="region"
                >
                  <div className="drawer-inner">
                    
                    {/* 3-Pillar Execution Engine */}
                    <div className="ledger-pillars-grid">
                      
                      <div className="ledger-pillar-card">
                        <div className="pillar-header">
                          <span className="pillar-num">01</span>
                          <span className="pillar-label">Advisory Focus</span>
                        </div>
                        <p className="pillar-body">{cap.focus}</p>
                      </div>

                      <div className="ledger-pillar-card">
                        <div className="pillar-header">
                          <span className="pillar-num">02</span>
                          <span className="pillar-label">What We Work Through</span>
                        </div>
                        <p className="pillar-body">{cap.work}</p>
                      </div>

                      <div className="ledger-pillar-card pillar-outcome">
                        <div className="pillar-header">
                          <span className="pillar-num">03</span>
                          <span className="pillar-label">Delivered Outcome</span>
                        </div>
                        <p className="pillar-body">{cap.outcome}</p>
                      </div>

                    </div>

                    {/* Bottom Evidence & Engagement Strip */}
                    <div className="ledger-drawer-footer">
                      <div className="ledger-evidence-group">
                        <div className="ledger-evidence-header">
                          <span className="evidence-badge-icon">&bull;</span>
                          <span className="ledger-evidence-tag">Selected Track Record</span>
                          <span className="evidence-context-pill">{cap.evidenceContext}</span>
                        </div>
                        <p className="ledger-evidence-text">{cap.evidence}</p>
                      </div>
                      <div className="ledger-drawer-cta">
                        <Link href="/contact#start" className="btn btn-primary btn-pill">
                          Inquire on {cap.tag} Scope <span className="btn-arrow">&rarr;</span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}

