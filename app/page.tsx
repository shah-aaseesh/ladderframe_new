import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LadderFrame Advisors — Home',
  description: 'We work with CEOs and leadership teams when a business is entering its next phase and the decisions around growth, markets, major opportunities, operating capability and economics need greater clarity and senior attention.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section hero-home">
        <div className="container">
          <div className="hero-split-grid">
            
            {/* Left Column: Core Advisory Statement */}
            <div className="hero-copy">
              <div className="eyebrow">LadderFrame Advisors</div>
              <h1>Advisory for the next phase of <span>growth.</span></h1>
              <p>
                We work with CEOs and leadership teams when a business is entering its next phase and the decisions around growth, markets, major opportunities, operating capability and economics need greater clarity and senior attention.
              </p>

              <div className="hero-actions-group">
                <Link href="/contact#start" className="btn btn-primary">
                  Let’s Talk <span className="btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Seamless Architectural Visual */}
            <div className="hero-visual-wrapper">
              <div className="hero-visual-blend">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/hero-structure.jpg" 
                  alt="LadderFrame Advisors — Strategic Architecture and Operating Foundations" 
                  className="hero-visual-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Proof Strip */}
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

      {/* Who We Work With */}
      <section className="section light">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Who we work with</div>
            <h2 className="section-title">Leaders building what comes next.</h2>
            <p className="lead">
              LadderFrame is most relevant to businesses where growth is creating a new level of commercial, operating or leadership complexity.
            </p>
          </div>

          <div className="segment-grid">
            <div className="segment">
              <h3>Founder-led &amp; growth-stage SMBs</h3>
              <p>Businesses moving from founder-led growth toward a more scalable growth model.</p>
            </div>

            <div className="segment">
              <h3>Technology &amp; IT services</h3>
              <p>Companies building stronger GTM, enterprise sales, partnerships or new regions.</p>
            </div>

            <div className="segment">
              <h3>Data, AI &amp; emerging technology</h3>
              <p>Businesses translating technology capability into market relevance and growth.</p>
            </div>

            <div className="segment">
              <h3>Selected established enterprises</h3>
              <p>Business units entering a new phase of growth, expansion or transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Growth Inflection */}
      <section className="section">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">The growth inflection</div>
            <h2 className="section-title">When the business changes, the questions change.</h2>
            <p className="lead">
              Leadership needs sharper choices across the areas that determine whether the next phase can be built and sustained.
            </p>
          </div>

          <div className="question-grid">
            <div className="question">
              <div className="num">01 · GROW</div>
              <h3>Where will the next growth come from?</h3>
              <p>Clarify priorities across markets, customers, commercial model and sales execution.</p>
            </div>

            <div className="question">
              <div className="num">02 · EXPAND</div>
              <h3>Where should we expand?</h3>
              <p>Test new geographies, segments and adjacencies and shape the route to market.</p>
            </div>

            <div className="question">
              <div className="num">03 · WIN</div>
              <h3>How do we win the opportunities that matter?</h3>
              <p>Bring account intelligence, stakeholder strategy, proposition, pricing and pursuit governance together.</p>
            </div>

            <div className="question">
              <div className="num">04 · BUILD</div>
              <h3>What needs to change inside the business?</h3>
              <p>Align leadership, organisation, decision rights and operating disciplines to the next phase.</p>
            </div>

            <div className="question">
              <div className="num">05 · TRANSFORM</div>
              <h3>How should AI and transformation create value?</h3>
              <p>Connect priorities to revenue, customer value, productivity and operating performance.</p>
            </div>

            <div className="question">
              <div className="num">06 · PERFORM</div>
              <h3>How do we strengthen the economics of growth?</h3>
              <p>Focus pricing, delivery economics, portfolio choices and performance measures on the growth plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Proposition */}
      <section className="section light">
        <div className="container proposition">
          <div>
            <div className="eyebrow">The proposition</div>
            <h2>We help leadership teams make the decisions behind the growth number.</h2>
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

      {/* What We Help With */}
      <section className="section dark">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">What we help with</div>
            <h2 className="section-title">Six capabilities. One growth agenda.</h2>
            <p className="lead">
              Each capability answers a business question. Together they provide the connected advisory lens required for the next phase.
            </p>
          </div>

          <div className="cap-grid">
            <div className="cap">
              <div className="code">01 · GROW</div>
              <h3>Growth &amp; Revenue Strategy</h3>
              <p>Define where the next growth will come from and strengthen the commercial engine behind it.</p>
            </div>

            <div className="cap">
              <div className="code">02 · EXPAND</div>
              <h3>Market Expansion</h3>
              <p>Assess new geographies, segments and adjacencies and shape a practical route to market.</p>
            </div>

            <div className="cap">
              <div className="code">03 · WIN</div>
              <h3>Large Deal Structuring &amp; Pursuit</h3>
              <p>Bring structure to strategically important enterprise opportunities.</p>
            </div>

            <div className="cap">
              <div className="code">04 · BUILD</div>
              <h3>Operating Model &amp; Organisation</h3>
              <p>Align the operating model, organisation and management disciplines to the next scale.</p>
            </div>

            <div className="cap">
              <div className="code">05 · TRANSFORM</div>
              <h3>AI &amp; Business Transformation</h3>
              <p>Connect AI and transformation priorities to measurable business value.</p>
            </div>

            <div className="cap">
              <div className="code">06 · PERFORM</div>
              <h3>Profitability &amp; Performance</h3>
              <p>Strengthen the economics of growth across pricing, delivery and portfolio performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">How the capabilities are applied.</h2>
            <p className="lead">
              Customer identities are anonymised. The examples show the kinds of business situations LadderFrame works alongside.
            </p>
          </div>

          <div className="case-grid">
            <div className="case">
              <div className="meta">Case 01 · Pharma distribution</div>
              <h3>Forward integration into pharmacy retail</h3>
              <p>Advisory around forward integration, retail acquisition and partner development.</p>
              <div className="outcome">
                <strong>Outcome:</strong> Forward integration into pharmacy retail completed and new pharma partners onboarded. <strong>₹2.65 Cr · 6 weeks.</strong>
              </div>
            </div>

            <div className="case">
              <div className="meta">Case 02 · IT services</div>
              <h3>Growth, sales transformation, partnerships &amp; AI</h3>
              <p>Growth and commercial architecture for a ~₹120 Cr IT services business.</p>
              <div className="outcome">
                <strong>Current outcome focus:</strong> Building a scalable sales engine, partner-led GTM motion and AI-led market proposition.
              </div>
            </div>

            <div className="case">
              <div className="meta">Case 03 · Agri-tech &amp; rural impact</div>
              <h3>PMF, new business models &amp; investor narrative</h3>
              <p>Advisory across PMF, integrated dairy ecosystem, fundraising and market positioning.</p>
              <div className="outcome">
                <strong>Current outcome focus:</strong> Building new growth avenues and a stronger investor and market narrative.
              </div>
            </div>

            <div className="case">
              <div className="meta">Case 04 · Data &amp; AI</div>
              <h3>Fractional growth leadership — India &amp; APJ</h3>
              <p>Embedded leadership across PMF, GTM, expansion, partnerships and investor ecosystem.</p>
              <div className="outcome">
                <strong>Current outcome focus:</strong> Establishing the India/APJ growth platform.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="section light">
        <div className="container">
          <div className="section-header-block">
            <div className="eyebrow">How we engage</div>
            <h2 className="section-title">A senior advisory relationship, built around the business.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <h4>Diagnose</h4>
              <p>Understand the business situation and priorities.</p>
            </div>

            <div className="step">
              <div className="num">02</div>
              <h4>Advise</h4>
              <p>Make choices, priorities and trade-offs explicit.</p>
            </div>

            <div className="step">
              <div className="num">03</div>
              <h4>Enable</h4>
              <p>Build practical structures and capabilities.</p>
            </div>

            <div className="step">
              <div className="num">04</div>
              <h4>Challenge &amp; Coach</h4>
              <p>Work with the people responsible for progress.</p>
            </div>

            <div className="step">
              <div className="num">05</div>
              <h4>Monitor &amp; Course Correct</h4>
              <p>Stay close as the business evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta">
        <div className="container">
          <div className="eyebrow">Start with the business problem</div>
          <h2>Let’s talk.</h2>
          <p>
            Bring the business situation as it stands — a growth question, market opportunity, strategic pursuit, operating-model decision, AI opportunity or performance challenge.
          </p>
          <Link href="/contact#start" className="btn btn-primary">
            Start a Conversation <span className="btn-arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
