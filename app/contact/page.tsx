import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ContactChannels from '@/components/ContactChannels';

export const metadata: Metadata = {
  title: 'Contact — LadderFrame Advisors',
  description: 'Tell us where your business stands and what needs deciding. We reply within one business day.',
};

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper" id="start">
      <div className="container contact-editorial-wrap">
        
        {/* Left Column: Direct Info, Channels, What happens next */}
        <section className="contact-info-col">
          <p className="eyebrow">Contact</p>
          <h1 className="contact-main-heading">
            Start a <span>conversation.</span>
          </h1>
          <p className="contact-lede">
            Tell us where your business stands and what needs deciding.
          </p>

          <ContactChannels />

          <div className="what-next-block">
            <h2>What happens next</h2>
            <ol className="next-steps-list">
              <li>
                <span><b>We reply within one business day.</b></span>
              </li>
              <li>
                <span><b>A 30–45 minute call</b> to understand the situation.</span>
              </li>
              <li>
                <span><b>If there’s a fit,</b> a short note on how we would approach it.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Right Column: Interactive Note Form Card */}
        <section className="contact-card-col">
          <ContactForm />
        </section>

      </div>
    </div>
  );
}
