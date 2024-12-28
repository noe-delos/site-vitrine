import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import CookieConsent from '@/components/cookies';
import GptPopup from '@/components/gpt-popup';
import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import '../globals.css';

const airbnbCereal = localFont({
	src: [
		{
			path: '../fonts/AirbnbCereal_W_Bk.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../fonts/AirbnbCereal_W_Md.otf',
			weight: '800',
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

const Layout = async (props: LayoutProps) => {
	const resolvedParams = await Promise.resolve(props.params);
	const lang = resolvedParams.lang;
	const dictionary = await getDictionary(lang);

	return (
		<html lang={lang}>
			<body
				className={`${airbnbCereal.variable} font-sans antialiased overflow-x-hidden`}
			>
				<Analytics />
				<SpeedInsights />
				<div className="min-h-screen">
					<Header dictionary={dictionary} lang={lang} />
					<main>{props.children}</main>
					<GptPopup lang={lang} />
					<CookieConsent dictionary={dictionary} />
					<Footer dictionary={dictionary} />
				</div>
				<Toaster richColors={true} position="top-center" />
			</body>
		</html>
	);
};

export default Layout;
