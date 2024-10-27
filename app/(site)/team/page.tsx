'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
	{
		name: 'Noé Campo',
		role: 'Full-Stack Gen-AI Engineer',
		education: 'EPITECH - Master Software Architecture',
		expertise: [
			'Full-Stack Development',
			'AI Integration',
			'System Architecture',
		],
		image: '/team/noe.jpg',
		description:
			'Passionate about merging cutting-edge AI with practical business solutions.',
		linkedin: 'https://linkedin.com/in/noe-campo',
	},
	{
		name: 'Hugo Pradier',
		role: 'DevOps Engineer',
		education: 'EPITECH - Master Cloud Architecture',
		expertise: ['DevOps', 'SaaS Development', 'Cloud Architecture'],
		image: '/team/hugo.jpg',
		description:
			'Expert in developing scalable cloud infrastructures and ensuring smooth deployment pipelines.',
		linkedin: 'https://linkedin.com/in/hugo-pradier',
	},
	{
		name: 'Maxime Cividini',
		role: 'Commercial',
		education: 'ESSEC Business School - Business Development',
		expertise: ['Business Strategy', 'Client Relations', 'Sales Management'],
		image: '/team/maxime.jpg',
		description:
			'Driving business growth through strategic partnerships and client relationships.',
		linkedin: 'https://linkedin.com/in/nicolas-henaux',
	},
	{
		name: 'Julien Bergerot',
		role: 'Commercial',
		education: 'ESSEC Business School - Business Development',
		expertise: ['Business Strategy', 'Client Relations', 'Sales Management'],
		image: '/team/julien.jpg',
		description:
			'Driving business growth through strategic partnerships and client relationships.',
		linkedin: 'https://linkedin.com/in/nicolas-henaux',
	},
	{
		name: 'Mélissa Naruto',
		role: 'UI/UX Engineer',
		education: 'Gobelins - Digital Design',
		expertise: ['UI/UX Design', 'Brand Identity', 'User Research'],
		image: '/team/woman.jpg',
		description:
			'Creating beautiful and intuitive user experiences that delight and engage.',
		linkedin: 'https://linkedin.com/in/melissa-naruto',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

export default function OurTeam() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white"
			>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl lg:text-7xl font-bold leading-tight">
						<span>Une équipe d'</span>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7066CB] to-blue-500">
							experts
						</span>
						<br />à votre écoute
						<br />
					</h1>
					<br />
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Jeune, ambitieux et animé par l'excellence. Nous sommes une équipe
						d'innovateurs passionnés par la création de solutions SaaS de pointe
						qui transforment les entreprises.
					</p>
				</div>
			</motion.section>

			{/* Team Grid */}
			<section className="py-20 px-6">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="max-w-7xl mx-auto"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover object-center group-hover:scale-105 transition duration-300"
									/>
								</div>
								<div className="space-y-4">
									<div className="flex items-start justify-between">
										<div>
											<h3 className="text-xl font-semibold text-gray-900">
												{member.name}
											</h3>
											<p className="text-blue-600 font-medium">{member.role}</p>
										</div>
										<motion.a
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
											href={member.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 hover:text-blue-600 transition"
										>
											<Linkedin className="w-6 h-6" />
										</motion.a>
									</div>

									<div className="space-y-2">
										<div className="flex items-center text-gray-600">
											<svg
												className="w-5 h-5 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
												/>
											</svg>
											{member.education}
										</div>
										<p className="text-gray-600">{member.description}</p>
									</div>

									<div className="flex flex-wrap gap-2">
										{member.expertise.map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Values Section with animations */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="py-20 px-6 bg-gray-50"
			>
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-16">
						Our Core Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{[
							{
								icon: '⚡',
								title: 'Innovation First',
								description:
									'We push boundaries and embrace new technologies to deliver cutting-edge solutions.',
							},
							{
								icon: '🤝',
								title: 'Client Success',
								description:
									"Your success is our success. We're committed to delivering exceptional results.",
							},
							{
								icon: '✨',
								title: 'Quality Guaranteed',
								description:
									'We maintain the highest standards in every project we undertake.',
							},
						].map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="text-4xl mb-6">{value.icon}</div>
								<h3 className="text-xl font-semibold mb-4">{value.title}</h3>
								<p className="text-gray-600">{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="py-20 px-6"
			>
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
					<p className="text-xl text-gray-600 mb-8">
						Let's transform your ideas into reality. Our team is ready to help
						you build the next big thing.
					</p>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="/contact-us"
						className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition"
					>
						Get in Touch
					</motion.a>
				</div>
			</motion.section>
		</div>
	);
}
