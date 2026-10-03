import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ContactChannels from '@/components/ContactChannels';

export const metadata: Metadata = {
  title: 'Contact LadderFrame Advisors — Start a Conversation',
  description: 'Connect with LadderFrame Advisors to discuss your business situation and growth decisions. We will get back to you within one business day to arrange a conversation.',
};

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper" id="start">
      <div className="container contact-editorial-wrap">
        
        {/* Left Column: Direct Info, Channels */}
        <section className="contact-info-col">
          <p className="eyebrow">Contact</p>
          <h1 className="contact-main-heading">
            Start a <span>conversation.</span>
          </h1>
          <p className="contact-lede">
            Tell us about your business and the decisions in front of you. We&apos;ll get back to you within one business day to arrange a conversation.
          </p>

          <ContactChannels />
        </section>

        {/* Right Column: Interactive Note Form Card */}
        <section className="contact-card-col">
          <ContactForm />
        </section>

      </div>
    </div>
  );
}
