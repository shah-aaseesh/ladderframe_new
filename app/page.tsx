import type { Metadata } from 'next';
import Link from 'next/link';
import MarqueeBanner from '@/components/MarqueeBanner';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Home',
  description: 'We work with CEOs and leadership teams when a business is entering its next phase and the decisions around growth, markets, major opportunities, operating capability and economics need greater clarity and senior attention.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section (Architectural Split Layout) */}
      <section className="section hero-home">
        <div className="container">
          <div className="hero-split-grid">
            
            {/* Left Column: Core Advisory Statement */}
            <div className="hero-copy">
              <div className="eyebrow">LadderFrame Advisors</div>
              <h1>ADVISORY FOR THE NEXT PHASE OF <span>GROWTH.</span></h1>
              <p>
                We work with CEOs and leadership teams when a business is entering its next phase and the decisions around growth, markets, major opportunities, operating capability and economics need greater clarity and senior attention.
              </p>

              <div className="hero-actions-group">
                <Link href="/contact#start" className="btn btn-primary">
                  LET’S TALK <span className="btn-arrow">&rarr;</span>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  EXPLORE CAPABILITIES
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Structural Visual */}
            <div className="hero-visual-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/hero-structure.jpg" 
                alt="LadderFrame Advisors — Strategic Architecture and Operating Foundations" 
                className="hero-visual-img"
              />
              <div className="hero-visual-badge">
                <span>Strategic Architecture</span>
                <strong>27 Years Operating Depth</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Executive Marquee Banner (White on Blue) */}
      <MarqueeBanner />

      {/* Operating Proof Strip */}
      <section className="proof-strip-section" aria-label="Operating Proof">
        <div className="container">
          <div className="proof-grid">
            <div className="proof-item">
              <div className="num">27+</div>
              <div className="proof-label">Years as an operator in leadership roles</div>
            </div>

            <div className="proof-item">
              <div className="num">$160M</div>
              <div className="proof-label">Business built as part of the core leadership &amp; execution team</div>
            </div>

            <div className="proof-item">
              <div className="num">$100M</div>
              <div className="proof-label">Portfolios managed in ASEAN–GCN</div>
            </div>

            <div className="proof-item">
              <div className="num">₹500 Cr</div>
              <div className="proof-label">Business transformed in India</div>
            </div>

            <div className="proof-item">
              <div className="num">$5M–$200M</div>
              <div className="proof-label">Multiple FOAK &amp; strategic deals</div>
            </div>

            <div className="proof-item">
              <div className="num">50+ · $2B+</div>
              <div className="proof-label">Complex enterprise deals · customer lifetime value delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With (Warm Sand Ruled Broadsheet) */}
      <section className="section sand">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Who we work with</div>
            <h2 className="section-title">LEADERS BUILDING WHAT COMES NEXT.</h2>
            <p className="lead">
              LadderFrame is most relevant to businesses where growth is creating a new level of commercial, operating or leadership complexity.
            </p>
          </div>

          <div className="segment-broadsheet">
            <div className="segment-col">
              <span className="segment-idx">01</span>
              <h3>Founder-led &amp; growth-stage SMBs</h3>
              <p>Businesses moving from founder-led growth toward a more scalable, structured commercial model.</p>
            </div>

            <div className="segment-col">
              <span className="segment-idx">02</span>
              <h3>Technology &amp; IT services</h3>
              <p>Companies building stronger GTM, enterprise sales engines, partnerships or scaling into new regions.</p>
            </div>

            <div className="segment-col">
              <span className="segment-idx">03</span>
              <h3>Data, AI &amp; emerging technology</h3>
              <p>Businesses translating deep technology capability into commercial market relevance and revenue growth.</p>
            </div>

            <div className="segment-col">
              <span className="segment-idx">04</span>
              <h3>Established enterprises</h3>
              <p>Business units and divisions entering a critical phase of growth, regional expansion or operating transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Growth Inflection (Executive Architectural Ledger) */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">The growth inflection</div>
            <h2 className="section-title">WHEN THE BUSINESS CHANGES, THE QUESTIONS CHANGE.</h2>
            <p className="lead">
              As a business scales, the strategic, commercial, and operational questions facing leadership evolve fundamentally at every inflection point.
            </p>
          </div>

          <div className="inflection-ledger">
            <div className="inflection-row">
              <div className="inflection-phase">
                <span className="inflection-num">01 / GROW</span>
              </div>
              <div className="inflection-headline">
                <h3>Where is the next engine of growth?</h3>
              </div>
              <div className="inflection-desc">
                <p>When existing channels mature, leadership must identify whether the next tier comes from enterprise accounts, adjacent verticals, or a sharpened revenue model.</p>
              </div>
            </div>

            <div className="inflection-row">
              <div className="inflection-phase">
                <span className="inflection-num">02 / EXPAND</span>
              </div>
              <div className="inflection-headline">
                <h3>How do we enter new geographies and adjacencies?</h3>
              </div>
              <div className="inflection-desc">
                <p>Expanding into new regional markets (India, APJ, ASEAN) or launching adjacent offerings requires localized GTM playbooks and strategic timing.</p>
              </div>
            </div>

            <div className="inflection-row">
              <div className="inflection-phase">
                <span className="inflection-num">03 / WIN</span>
              </div>
              <div className="inflection-headline">
                <h3>How do we win and structure larger deals?</h3>
              </div>
              <div className="inflection-desc">
                <p>Transitioning from transactional sales to high-value enterprise contracts ($5M–$200M+) demands executive deal leadership and commercial risk architecture.</p>
              </div>
            </div>

            <div className="inflection-row">
              <div className="inflection-phase">
                <span className="inflection-num">04 / BUILD</span>
              </div>
              <div className="inflection-headline">
                <h3>Can the organization support the next scale?</h3>
              </div>
              <div className="inflection-desc">
                <p>Structures and leadership bandwidth that worked at early stages frequently constrain growth at the next milestone without intentional realignment.</p>
              </div>
            </div>

            <div className="inflection-row">
              <div className="inflection-phase">
                <span className="inflection-num">05 / TRANSFORM</span>
              </div>
              <div className="inflection-headline">
                <h3>Where does AI create real business value?</h3>
              </div>
              <div className="inflection-desc">
                <p>Moving past experimentation to identify where AI and digital transformation directly improve operating productivity, delivery speed, and margin health.</p>
              </div>
            </div>

            <div className="inflection-row">
              <div className="inflection-phase">
                <span className="inflection-num">06 / PERFORM</span>
              </div>
              <div className="inflection-headline">
                <h3>How do we protect margins as complexity grows?</h3>
              </div>
              <div className="inflection-desc">
                <p>Balancing rapid growth with unit economics, commercial pricing discipline, and operating cost rationalization for sustained financial health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Proposition (Editorial Broadsheet Split) */}
      <section className="section">
        <div className="container proposition-layout">
          <div className="proposition-statement">
            <div className="eyebrow">The proposition</div>
            <h2>WE HELP LEADERSHIP TEAMS MAKE THE DECISIONS BEHIND THE GROWTH NUMBER.</h2>
          </div>
          <div className="proposition-copy">
            <p>
              Where to play. How to grow. Where to expand. How to win. What to build. Where AI and transformation can create value. How to strengthen the economics of growth.
            </p>
            <p>
              Our role is practical: <strong>diagnose</strong> the business situation, <strong>advise</strong> on the choices, <strong>enable</strong> the structures and capabilities required, work with the people responsible, and stay close enough to <strong>challenge and course-correct</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* What We Help With (Architectural Capability Framework Matrix) */}
      <section className="section dark-deep">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">What we help with</div>
            <h2 className="section-title">SIX CAPABILITIES. ONE GROWTH AGENDA.</h2>
            <p className="lead">
              Each capability answers a business question. Together they provide the connected advisory lens required for the next phase.
            </p>
          </div>

          <div className="cap-matrix">
            <div className="cap-cell">
              <div className="cap-cell-header">
                <span className="code">01 &bull; GROW</span>
                <span className="cap-cell-arrow">&rarr;</span>
              </div>
              <h3>Growth &amp; Revenue Strategy</h3>
              <p>Define where the next growth will come from and strengthen the commercial engine and cadence behind it.</p>
            </div>

            <div className="cap-cell">
              <div className="cap-cell-header">
                <span className="code">02 &bull; EXPAND</span>
                <span className="cap-cell-arrow">&rarr;</span>
              </div>
              <h3>Market Expansion</h3>
              <p>Assess new geographies, segments and adjacencies and shape a practical, de-risked route to market.</p>
            </div>

            <div className="cap-cell">
              <div className="cap-cell-header">
                <span className="code">03 &bull; WIN</span>
                <span className="cap-cell-arrow">&rarr;</span>
              </div>
              <h3>Large Deal Structuring &amp; Pursuit</h3>
              <p>Bring structure, strategy and pursuit governance to strategically important enterprise opportunities.</p>
            </div>

            <div className="cap-cell">
              <div className="cap-cell-header">
                <span className="code">04 &bull; BUILD</span>
                <span className="cap-cell-arrow">&rarr;</span>
              </div>
              <h3>Operating Model &amp; Organisation</h3>
              <p>Align the operating model, organisation architecture and management disciplines to the next scale.</p>
            </div>

            <div className="cap-cell">
              <div className="cap-cell-header">
                <span className="code">05 &bull; TRANSFORM</span>
                <span className="cap-cell-arrow">&rarr;</span>
              </div>
              <h3>AI &amp; Business Transformation</h3>
              <p>Connect AI and digital transformation priorities directly to measurable business value and revenue.</p>
            </div>

            <div className="cap-cell">
              <div className="cap-cell-header">
                <span className="code">06 &bull; PERFORM</span>
                <span className="cap-cell-arrow">&rarr;</span>
              </div>
              <h3>Profitability &amp; Performance</h3>
              <p>Strengthen the economics of growth across pricing architecture, delivery model and portfolio performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work (Editorial Case Dossiers) */}
      <section className="section">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">HOW THE CAPABILITIES ARE APPLIED.</h2>
            <p className="lead">
              Customer identities are anonymised. The examples show the kinds of business situations LadderFrame works alongside.
            </p>
          </div>

          <div className="case-dossier-layout">
            {/* Featured Primary Case Dossier */}
            <div className="case-hero-dossier">
              <div className="case-hero-main">
                <span className="case-tag-lead">Featured Engagement &bull; Case 01</span>
                <h3>Forward integration into pharmacy retail</h3>
                <p>Advisory around forward integration, retail acquisition logic, commercial terms and partner development for an expanding healthcare and pharmaceutical distribution network.</p>
              </div>
              <div className="case-hero-outcome-box">
                <div className="outcome-label">Delivered Outcome</div>
                <p>Forward integration into pharmacy retail successfully completed with institutional commercial terms and new pharma partners fully onboarded.</p>
                <div className="metric-highlight">₹2.65 Cr &bull; Executed in 6 weeks</div>
              </div>
            </div>

            {/* Secondary 3-Column Case Dossier Strip */}
            <div className="case-strip-grid">
              <div className="case-strip-item">
                <span className="meta">Case 02 &bull; IT Services</span>
                <h3>Growth, sales transformation &amp; AI</h3>
                <p>Growth and commercial architecture for a ~₹120 Cr IT services business scaling enterprise pursuits and positioning.</p>
                <div className="outcome-subtle">
                  <strong>Focus:</strong> Scalable sales engine, partner GTM motion and AI market proposition.
                </div>
              </div>

              <div className="case-strip-item">
                <span className="meta">Case 03 &bull; Agri-Tech &amp; Rural Impact</span>
                <h3>PMF, business models &amp; investor narrative</h3>
                <p>Advisory across product-market fit, integrated dairy ecosystem, fundraising and strategic market positioning.</p>
                <div className="outcome-subtle">
                  <strong>Focus:</strong> New growth avenues and establishing an institutional investor narrative.
                </div>
              </div>

              <div className="case-strip-item">
                <span className="meta">Case 04 &bull; Data &amp; AI Platform</span>
                <h3>Fractional growth leadership — India &amp; APJ</h3>
                <p>Embedded leadership across PMF, GTM architecture, expansion, partnerships and investor ecosystem.</p>
                <div className="outcome-subtle">
                  <strong>Focus:</strong> Scalable India/APJ growth platform and revenue operations cadence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage (Executive Advisory Progression Architecture) */}
      <section className="section sand">
        <div className="container">
          <div className="engage-split-layout">
            
            {/* Left Column: Strategic Stance & Mandate */}
            <div className="engage-mandate-column">
              <div className="eyebrow">How we engage</div>
              <h2 className="section-title">A SENIOR ADVISORY RELATIONSHIP, BUILT AROUND THE BUSINESS.</h2>
              <p className="lead">
                We work directly with executive leadership through an active, structured cadence &mdash; moving from baseline diagnosis to permanent capability enablement.
              </p>

              <div className="engage-stance-box">
                <span className="stance-label">Our Operating Stance</span>
                <p>
                  We don&rsquo;t drop disconnected strategy decks and walk away. We embed with leadership across the full lifecycle until structures, habits, and commercial outcomes are permanently established.
                </p>
                <div className="stance-action">
                  <Link href="/contact#start" className="btn btn-primary btn-pill">
                    Start a Conversation <span className="btn-arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: 5-Stage Architectural Progression */}
            <div className="engage-stages-column">
              
              <div className="engage-stage-row">
                <div className="engage-stage-num">01</div>
                <div className="engage-stage-body">
                  <h3>Diagnose</h3>
                  <p>Understand the business situation, operational realities, stakeholder dynamics and immediate leadership priorities.</p>
                </div>
              </div>

              <div className="engage-stage-row">
                <div className="engage-stage-num">02</div>
                <div className="engage-stage-body">
                  <h3>Advise</h3>
                  <p>Make strategic choices, critical priorities and commercial trade-offs explicit so leaders act with total conviction.</p>
                </div>
              </div>

              <div className="engage-stage-row">
                <div className="engage-stage-num">03</div>
                <div className="engage-stage-body">
                  <h3>Enable</h3>
                  <p>Build practical operating structures, functional capabilities, accountability cadences and governance mechanisms.</p>
                </div>
              </div>

              <div className="engage-stage-row">
                <div className="engage-stage-num">04</div>
                <div className="engage-stage-body">
                  <h3>Challenge &amp; Coach</h3>
                  <p>Work directly alongside the executives and team leads responsible for progress, testing assumptions and sharpening execution.</p>
                </div>
              </div>

              <div className="engage-stage-row">
                <div className="engage-stage-num">05</div>
                <div className="engage-stage-body">
                  <h3>Course-Correct</h3>
                  <p>Stay close to real-world operating feedback and market shifts as the business scales, protecting margins and trajectory.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Final CTA (Executive Conversion) */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-inner">
            <div className="eyebrow">Start with the business problem</div>
            <h2>LET’S TALK.</h2>
            <p>
              Bring the business situation as it stands &mdash; a growth question, market opportunity, strategic pursuit, operating-model decision, AI opportunity or performance challenge.
            </p>
            <div className="cta-actions">
              <Link href="/contact#start" className="btn btn-primary btn-pill">
                START A CONVERSATION <span className="btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
