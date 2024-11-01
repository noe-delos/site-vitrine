import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
