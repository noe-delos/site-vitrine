'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = ({ dictionary }: { dictionary: any }) => {
	const pathname = usePathname();

	if (pathname.includes('ks-gpt')) return <></>;

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

	const navItems = [
		{ name: dictionary.footer.sections.pages.links.home, path: '/' },
		{
			name: dictionary.footer.sections.pages.links.services,
			path: '/services',
		},
		{ name: dictionary.footer.sections.pages.links.ksgpt, path: '/ks-gpt' },
		{ name: dictionary.footer.sections.pages.links.team, path: '/team' },
		{ name: dictionary.footer.sections.pages.links.contact, path: '/contact' },
		{ name: dictionary.footer.sections.pages.links.meeting, path: '/meeting' },
	];

	return (
		<motion.footer
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="bg-gradient-to-br from-gray-50 via-white to-gray-50"
		>
			{/* Decorative Top Border */}
			<div className="h-[0.05rem] w-full bg-gray-200" />

			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-6 py-16">
				<motion.div
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
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
									alt="KS Enterprise Logo"
									width={32}
									height={32}
								/>
							</div>
							<div className="flex flex-col leading-tight">
								<span className="text-xl font-semibold text-gray-900 p-0 m-0">
									{dictionary.footer.brand.title}
								</span>
								<span className="text-sm text-gray-600 p-0 m-0 -mt-1">
									{dictionary.footer.brand.subtitle}
								</span>
							</div>
						</Link>
						<p className="text-gray-600 max-w-sm">
							{dictionary.footer.description}
						</p>
					</motion.div>

					{/* Pages */}
					<motion.div variants={fadeInUpVariants} className="space-y-6">
						<h3 className="text-lg font-semibold text-gray-900">
							{dictionary.footer.sections.pages.title}
						</h3>
						<motion.ul variants={containerVariants} className="space-y-3">
							{navItems.map((item, index) => (
								<motion.li
									key={index}
									variants={fadeInUpVariants}
									whileHover={{ x: 5 }}
								>
									<Link
										href={item.path}
										className="text-gray-600 hover:text-[#7066CB] transition-colors"
									>
										{item.name}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div variants={fadeInUpVariants} className="space-y-6">
						<h3 className="text-lg font-semibold text-gray-900">
							{dictionary.footer.sections.contact.title}
						</h3>
						<div className="space-y-4 text-gray-600">
							<p>
								<a
									href={`mailto:${dictionary.footer.sections.contact.email}`}
									className="hover:text-[#7066CB] transition-colors"
								>
									{dictionary.footer.sections.contact.email}
								</a>
							</p>
							<p>
								<a
									href={`tel:${dictionary.footer.sections.contact.phone.replace(/\s/g, '')}`}
									className="hover:text-[#7066CB] transition-colors"
								>
									{dictionary.footer.sections.contact.phone}
								</a>
							</p>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom Bar */}
			<motion.div
				variants={fadeInUpVariants}
				className="border-t border-gray-200 bg-white"
			>
				<div className="max-w-7xl mx-auto px-6 py-6">
					<motion.p
						variants={fadeInUpVariants}
						className="text-gray-600 text-sm text-center"
					>
						{dictionary.footer.copyright}
					</motion.p>
				</div>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;
