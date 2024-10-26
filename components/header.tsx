'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollY } = useScroll();

	// Effet de scroll pour le background
	useEffect(() => {
		const updateScrolled = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', updateScrolled);
		return () => window.removeEventListener('scroll', updateScrolled);
	}, []);
	const navItems = [
		{ label: 'Notre équipe', href: '/team' },
		{ label: 'Portfolio', href: '#portfolio' },
		{ label: 'Nous contacter', href: '#contact' },
	];

	// Animation de l'opacité du background
	const headerStyle = {
		backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
		backdropFilter: isScrolled ? 'blur(10px)' : 'none',
		boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
		transition: 'all 0.3s ease-in-out',
	};

	return (
		<header className="fixed top-0 w-full z-[9999]" style={headerStyle}>
			<nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Link href="/" className="flex items-center space-x-3 group relative">
						<div className="relative">
							<Image
								src="/logo/brand-logo.png"
								alt="Finpay Logo"
								width={32}
								height={32}
								className="rounded-md"
							/>
						</div>
						<div className="flex flex-col leading-tight">
							<span className="text-xl font-semibold text-gray-900 p-0 m-0">
								Consulting
							</span>
							<span className="text-sm text-gray-600 p-0 m-0 -mt-1">
								software solutions
							</span>
						</div>
					</Link>
				</motion.div>

				<div className="hidden md:flex items-center space-x-8">
					{navItems.map((item) => {
						const isActive = pathname === item.href;

						return (
							<Link key={item.href} href={item.href} className="relative group">
								<span
									className={`text-sm font-medium ${
										isActive
											? 'text-[#7066CB]'
											: 'text-gray-600 hover:text-gray-900'
									} transition-colors duration-200`}
								>
									{item.label}
								</span>

								{/* Ligne d'indication active avec animation */}
								<motion.span
									className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-full"
									initial={false}
									animate={{
										width: isActive ? '100%' : '0%',
										opacity: isActive ? 1 : 0,
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
									}}
								/>

								{/* Animation au hover */}
								<motion.span
									className="absolute -bottom-1 left-0 h-0.5 bg-gray-200 rounded-full"
									initial={{ width: '0%' }}
									whileHover={{
										width: !isActive ? '100%' : '0%',
										transition: { duration: 0.3 },
									}}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
									}}
								/>
							</Link>
						);
					})}
				</div>

				<div className="flex items-center space-x-4">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
					>
						Login
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-[#7066CB] to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition font-medium"
					>
						Sign Up
					</motion.button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
