'use client';

import { useState } from 'react';

export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = 'anurag@ladderframe.in';
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="contact-direct-table">
      <div className="direct-row">
        <span className="direct-label">Email</span>
        <span className="direct-val">
          <a href="mailto:anurag@ladderframe.in">anurag@ladderframe.in</a>
        </span>
        <button
          type="button"
          className="btn-copy"
          onClick={handleCopyEmail}
          aria-label="Copy email address"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="direct-row">
        <span className="direct-label">WhatsApp</span>
        <span className="direct-val">
          <a
            href="https://wa.me/919930133194"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 99301 33194
          </a>
        </span>
      </div>

      <div className="direct-row">
        <span className="direct-label">LinkedIn</span>
        <span className="direct-val">
          <a
            href="https://www.linkedin.com/company/ladderframe-advisors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LadderFrame Advisors
          </a>
        </span>
      </div>
    </div>
  );
}
