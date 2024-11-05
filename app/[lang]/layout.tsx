import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

import { i18n, Locale } from '@/i18n-config';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import '../globals.css';

const airbnbCereal = localFont({
  src: [
    {
      path: '../fonts/AirbnbCereal_W_Bk.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AirbnbCereal_W_Bk.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-airbnb-cereal',
  display: 'swap',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'consulting',
  description: 'Your Idea. Your saas.',
};
interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body className={`${airbnbCereal.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
        <Toaster richColors={true} position="top-center" />
      </body>
    </html>
  );
};

export default Layout;
