import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const airbnbCereal = localFont({
	src: [
		{
			path: './fonts/AirbnbCereal_W_Bk.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/AirbnbCereal_W_Bk.otf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-airbnb-cereal',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'SK Software Consulting',
	description: 'Your Idea. Your saas.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${airbnbCereal.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
