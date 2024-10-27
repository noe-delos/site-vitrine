'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const updateScrolled = () => {
			if (timeoutId) clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				setIsScrolled(window.scrollY > 20);
			}, 10);
		};

		window.addEventListener('scroll', updateScrolled, { passive: true });
		return () => {
			window.removeEventListener('scroll', updateScrolled);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, []);

	const navItems = [
		{ label: 'Accueil', href: '/' },
		{ label: 'Notre équipe', href: '/team' },
		{ label: 'Portfolio', href: '#portfolio' },
		{ label: 'Nous contacter', href: '#contact' },
	];

	// Mise à jour du style avec un effet blur plus prononcé
	const headerStyle = {
		backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
		backdropFilter: isScrolled ? 'blur(15px) saturate(180%)' : 'none',
		WebkitBackdropFilter: isScrolled ? 'blur(15px) saturate(180%)' : 'none', // Support Safari
		boxShadow: isScrolled ? 'rgba(17, 12, 46, 0.1) 0px 2px 20px 0px' : 'none',
		transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
	};

	const navVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
	};

	return (
		<motion.header
			className="fixed top-0 w-full z-[9999] h-[4.5rem] border-b border-transparent transition-colors"
			style={{
				...headerStyle,
				borderColor: isScrolled ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
			}}
		>
			<nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<Link href="/" className="flex items-center space-x-3 group">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className="relative"
						>
							<Image
								src="/logo/brand-logo.png"
								alt="Finpay Logo"
								width={32}
								height={32}
								className="rounded-md"
							/>
						</motion.div>
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

				<motion.div
					variants={navVariants}
					initial="hidden"
					animate="visible"
					className="hidden md:flex items-center space-x-8"
				>
					{navItems.map((item) => {
						const isActive = pathname === item.href;

						return (
							<motion.div
								key={item.href}
								variants={itemVariants}
								whileHover={{ y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<Link href={item.href} className="relative group px-2 py-1">
									<span
										className={`text-sm font-medium ${
											isActive
												? 'text-[#7066CB]'
												: 'text-gray-600 hover:text-gray-900'
										} transition-colors duration-200`}
									>
										{item.label}
									</span>

									{/* Indicateur actif avec effet gradient */}
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

									{/* Animation hover */}
									<motion.span
										className="absolute -bottom-1 left-0 h-0.5 bg-gray-200 rounded-full"
										initial={{ width: '0%' }}
										whileHover={{
											width: !isActive ? '100%' : '0%',
											transition: { duration: 0.3 },
										}}
									/>

									{/* Effet de brillance au hover */}
									<motion.span
										className="absolute inset-0 -z-10 rounded-lg opacity-0 bg-white/10"
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.2 }}
									/>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.div variants={itemVariants} initial="hidden" animate="visible">
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						transition={{ duration: 0.2 }}
						className="relative inline-flex items-center"
					>
						{/* Gradient border container */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300 group-hover:opacity-90" />

						{/* White background and content */}
						<div className="relative bg-white rounded-[5px] m-[1px] px-6 py-2 transition-all duration-300 hover:bg-gray-50">
							<span className="text-gray-900 font-medium whitespace-nowrap">
								Nous contacter
							</span>
						</div>

						{/* Shine effect */}
						<div className="absolute inset-0 rounded-md overflow-hidden">
							<div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
						</div>
					</motion.button>
				</motion.div>
			</nav>
		</motion.header>
	);
};

export default Header;
