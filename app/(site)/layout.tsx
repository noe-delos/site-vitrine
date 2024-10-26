import Header from '@/components/header';
import Footer from '@/components/footer';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<Header />
			<main className="pt-16">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
