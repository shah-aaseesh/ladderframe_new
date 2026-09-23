'use client';

import { useState } from 'react';

const TOPICS = [
  'The next growth agenda',
  'A new geography, segment or adjacency',
  'A strategic or complex enterprise opportunity',
  'The operating model for the next phase',
  'An AI or business transformation opportunity',
  'Profitability, pricing or performance',
  'A broader leadership question around the next phase',
];

export default function ContactForm() {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);

  return (
    <div>
      <div className="eyebrow">What we can discuss</div>
      <h2 className="section-title">START WITH THE BUSINESS QUESTION.</h2>
      <p className="lead">
        A conversation can begin around the next growth agenda, a new market, a strategic opportunity, the operating model for the next phase, an AI or transformation opportunity, or the economics of growth.
      </p>

      <div className="topic-pills-wrap">
        {TOPICS.map((topic) => (
          <button
            key={topic}
            type="button"
            className={`topic-pill ${selectedTopic === topic ? 'selected' : ''}`}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="inquiry-form-card" id="inquiryFormCard">
        <h3>Direct Advisory Inquiry</h3>
        <p>Provide brief context on your business situation. We treat all inquiries with strict confidentiality.</p>

        <form action="mailto:anurag@ladderframe.in" method="POST" encType="text/plain">
          <div className="form-grid">
            <div>
              <label className="form-label" htmlFor="inquiryName">Your Name</label>
              <input 
                type="text" 
                id="inquiryName" 
                name="name" 
                className="form-input" 
                placeholder="e.g. Anurag Verulkar" 
                required 
              />
            </div>

            <div>
              <label className="form-label" htmlFor="inquiryEmail">Work Email</label>
              <input 
                type="email" 
                id="inquiryEmail" 
                name="email" 
                className="form-input" 
                placeholder="name@company.com" 
                required 
              />
            </div>

            <div className="form-group-full">
              <label className="form-label" htmlFor="inquiryCompany">Organization / Business</label>
              <input 
                type="text" 
                id="inquiryCompany" 
                name="company" 
                className="form-input" 
                placeholder="Company name and current scale" 
                required 
              />
            </div>

            <div className="form-group-full">
              <label className="form-label" htmlFor="inquiryTopic">Discussion Area</label>
              <select 
                id="inquiryTopic" 
                name="topic" 
                className="form-select"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group-full">
              <label className="form-label" htmlFor="inquiryMessage">The Business Question / Context</label>
              <textarea 
                id="inquiryMessage" 
                name="message" 
                className="form-textarea" 
                placeholder="Briefly describe the growth question, market opportunity or operating challenge..."
              />
            </div>

            <div className="form-group-full">
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                SUBMIT INQUIRY &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
