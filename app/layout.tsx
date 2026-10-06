import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollInteractions from '@/components/ScrollInteractions';
import ScrollToHash from '@/components/ScrollToHash';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ladderframe.in'),
  title: {
    default: 'LadderFrame Advisors — Strategic & Operating Advisory for Business Growth',
    template: '%s | LadderFrame Advisors',
  },
  description: 'Advisory for CEOs, founders and leadership teams navigating growth inflection points, regional expansion, complex enterprise pursuits and operating models.',
  keywords: [
    'management consulting',
    'growth strategy',
    'operating advisory',
    'APAC expansion',
    'enterprise deals',
    'business transformation',
    'LadderFrame Advisors',
    'Anurag Verulkar',
  ],
  authors: [{ name: 'LadderFrame Advisors' }, { name: 'Anurag Verulkar' }],
  creator: 'LadderFrame Advisors',
  publisher: 'LadderFrame Advisors',
  openGraph: {
    title: 'LadderFrame Advisors — Strategic & Operating Advisory for Business Growth',
    description: 'Advisory for CEOs, founders and leadership teams navigating growth inflection points, regional expansion, complex enterprise pursuits and operating models.',
    url: 'https://ladderframe.in',
    siteName: 'LadderFrame Advisors',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LadderFrame Advisors — Strategic & Operating Advisory for Business Growth',
    description: 'Advisory for CEOs, founders and leadership teams navigating growth inflection points, regional expansion, complex enterprise pursuits and operating models.',
  },
  icons: {
    icon: '/assets/favicon.svg',
    apple: '/assets/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'LadderFrame Advisors',
    url: 'https://ladderframe.in',
    logo: 'https://ladderframe.in/logo/logo-primary.svg',
    description: 'Advisory for CEOs, founders and leadership teams navigating growth inflection points, regional expansion, complex enterprise pursuits and operating models.',
    founder: {
      '@type': 'Person',
      name: 'Anurag Verulkar',
      jobTitle: 'Founder & CEO',
      sameAs: 'https://www.linkedin.com/in/anuragverulkar',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollInteractions />
        <ScrollToHash />
        <div className="page-wrapper">
          <div className="editorial-content-frame">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
