// components/Footer.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	const fadeInUpVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	return (
		<motion.footer
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="bg-gradient-to-br from-gray-50 via-white to-gray-50"
		>
			{/* Decorative Top Border */}
			<div className="h-[0.35px] w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-200" />

			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-6 py-16">
				<motion.div
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
				>
					{/* Company Info */}
					<motion.div variants={fadeInUpVariants} className="space-y-6">
						<Link
							href="/"
							className="flex items-center space-x-3 group relative"
						>
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
						<p className="text-gray-600 max-w-sm">
							Créons ensemble les solutions digitales de demain. Notre expertise
							en SaaS et en IA au service de votre réussite.
						</p>
						<div className="flex space-x-4">
							{[
								{ icon: Facebook, href: '#' },
								{ icon: Twitter, href: '#' },
								{ icon: Linkedin, href: '#' },
								{ icon: Instagram, href: '#' },
							].map((social, index) => (
								<motion.a
									key={index}
									href={social.href}
									whileHover={{ y: -3, scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									className="text-gray-400 hover:text-blue-600 transition-colors"
								>
									<social.icon className="h-5 w-5" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div variants={fadeInUpVariants} className="space-y-6">
						<h3 className="text-lg font-semibold text-gray-900">Services</h3>
						<motion.ul variants={containerVariants} className="space-y-3">
							{[
								'SaaS Development',
								'AI Integration',
								'Web Development',
								'Cloud Solutions',
								'UI/UX Design',
							].map((item, index) => (
								<motion.li
									key={index}
									variants={fadeInUpVariants}
									whileHover={{ x: 5 }}
								>
									<Link
										href="#"
										className="text-gray-600 hover:text-blue-600 transition-colors"
									>
										{item}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div variants={fadeInUpVariants} className="space-y-6">
						<h3 className="text-lg font-semibold text-gray-900">Contact</h3>
						<ul className="space-y-4">
							{[
								{
									icon: MapPin,
									text: 'Paris, France',
									motion: { x: 5 },
								},
								{
									icon: Phone,
									text: '+33 1 23 45 67 89',
									motion: { x: 5 },
								},
								{
									icon: Mail,
									text: 'contact@finpay.com',
									motion: { x: 5 },
								},
							].map((item, index) => (
								<motion.li
									key={index}
									whileHover={item.motion}
									className="flex items-center space-x-3 text-gray-600"
								>
									<item.icon className="h-5 w-5 text-blue-600" />
									<span>{item.text}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Newsletter */}
					<motion.div variants={fadeInUpVariants} className="space-y-6">
						<h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
						<p className="text-gray-600">
							Restez informé de nos dernières innovations et actualités.
						</p>
						<motion.form
							onSubmit={(e) => e.preventDefault()}
							className="space-y-3"
						>
							<div className="relative">
								<input
									type="email"
									placeholder="Votre email"
									className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600 placeholder-gray-400"
								/>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors"
								>
									OK
								</motion.button>
							</div>
						</motion.form>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom Bar */}
			<motion.div
				variants={fadeInUpVariants}
				className="border-t border-gray-200 bg-white"
			>
				<div className="max-w-7xl mx-auto px-6 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<motion.p
							variants={fadeInUpVariants}
							className="text-gray-600 text-sm"
						>
							© 2024 Finpay. Tous droits réservés.
						</motion.p>
						<motion.div
							variants={containerVariants}
							className="flex space-x-6 text-sm"
						>
							{[
								'Mentions légales',
								'Politique de confidentialité',
								"Conditions d'utilisation",
							].map((item, index) => (
								<motion.a
									key={index}
									href="#"
									variants={fadeInUpVariants}
									whileHover={{ color: '#2563EB' }}
									className="text-gray-600 hover:text-blue-600 transition-colors"
								>
									{item}
								</motion.a>
							))}
						</motion.div>
					</div>
				</div>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;
