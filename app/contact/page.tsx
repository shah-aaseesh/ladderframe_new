import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ContactChannels from '@/components/ContactChannels';

export const metadata: Metadata = {
  title: 'Contact LadderFrame Advisors — Start a Conversation',
  description: 'Connect with LadderFrame Advisors to discuss your business situation and growth decisions. We arrange a 30-minute introductory call within one business day.',
};

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper" id="start">
      <div className="container contact-editorial-wrap">
        
        {/* Left Column: Direct Info, Channels, Reply Note */}
        <section className="contact-info-col">
          <p className="eyebrow">Contact</p>
          <h1 className="contact-main-heading">
            Start a <span>conversation.</span>
          </h1>
          <p className="contact-lede">
            Tell us about your business and the decisions in front of you. We&apos;ll arrange a 30-minute conversation to explore how we can help.
          </p>

          <ContactChannels />

          <p className="contact-response-note" style={{ marginTop: '2rem', color: 'var(--color-charcoal-muted)', fontSize: '0.95rem' }}>
            We reply within one business day.
          </p>
        </section>

        {/* Right Column: Interactive Note Form Card */}
        <section className="contact-card-col">
          <ContactForm />
        </section>

      </div>
    </div>
  );
}
