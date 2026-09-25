import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollInteractions from '@/components/ScrollInteractions';

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
  title: 'LadderFrame Advisors — Strategic & Operating Advisory for Business Growth',
  description: 'Advisory for CEOs, founders and leadership teams navigating growth inflection points, regional expansion, complex enterprise pursuits and operating models.',
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
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <ScrollInteractions />
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
