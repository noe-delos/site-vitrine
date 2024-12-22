'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface GptPopupProps {
	lang: string;
}

const GptPopup = ({ lang }: GptPopupProps) => {
	const router = useRouter();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsVisible(scrollY > 0);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => {
		router.push(`/${lang}/ks-gpt`);
	};

	return (
		<div
			className={`fixed bottom-6 right-6 z-50 hidden md:block ${isVisible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-in-out' : 'opacity-0 translate-y-10 pointer-events-none transition-all duration-150 ease-in-out'}`}
		>
			<style jsx>{`
				@keyframes ripple {
					0% {
						transform: scale(1);
						opacity: 0.4;
					}
					100% {
						transform: scale(1.5);
						opacity: 0;
					}
				}

				.ripple-effect::before,
				.ripple-effect::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					border-radius: 50%;
					background: rgba(59, 130, 246, 0.5);
					animation: ripple 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
				}

				.ripple-effect::after {
					animation-delay: 1s;
				}
			`}</style>

			<div className="relative">
				{/* Ripple effect container */}
				<div className="absolute inset-0 ripple-effect" />

				{/* Main button - removed animate-pulse and hover effects */}
				<div
					onClick={handleClick}
					className="relative w-16 h-16 rounded-full bg-black shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center"
				>
					<Image
						src="/fr/logo/brand-logo-white.png"
						alt="Circle Button Icon"
						width={32}
						height={32}
						className="transition-transform duration-300 ease-in-out"
					/>
				</div>
			</div>
		</div>
	);
};

export default GptPopup;
