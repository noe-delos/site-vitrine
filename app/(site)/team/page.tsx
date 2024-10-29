'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface TeamMember {
	name: string;
	role: string;
	education: string;
	expertise: string[];
	image: string;
	description: string;
	linkedin: string;
}

interface Value {
	icon: string;
	title: string;
	description: string;
}

const teamMembers: TeamMember[] = [
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
	{
		name: 'Mélissa Naruto3',
		role: 'UI/UX Engineer',
		education: 'Gobelins - Digital Design',
		expertise: ['UI/UX Design', 'Brand Identity', 'User Research'],
		image: '/team/woman.jpg',
		description:
			'Creating beautiful and intuitive user experiences that delight and engage.',
		linkedin: 'https://linkedin.com/in/melissa-naruto',
	},
];

interface Card3DProps {
	member: TeamMember;
}

const Card3D: React.FC<Card3DProps> = ({ member }) => {
	const [rotation, setRotation] = useState({ x: 0, y: 0 });
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const card = cardRef.current;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = -((y - centerY) / centerY) * 10;
		const rotateY = ((x - centerX) / centerX) * 10;

		setRotation({ x: rotateX, y: rotateY });
	};

	const handleMouseLeave = () => {
		setRotation({ x: 0, y: 0 });
	};

	return (
		<motion.div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
				transformStyle: 'preserve-3d',
			}}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
		>
			<div
				className="relative aspect-square mb-6 overflow-hidden rounded-xl transform-gpu"
				style={{ transform: 'translateZ(20px)' }}
			>
				<Image
					src={member.image}
					alt={member.name}
					fill
					className="object-cover object-center group-hover:scale-105 transition duration-300"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			<div className="space-y-4" style={{ transform: 'translateZ(30px)' }}>
				<div className="flex items-start justify-between">
					<div>
						<h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
						<p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
							{member.role}
						</p>
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
					<div className="flex items-center text-gray-600 text-sm">
						<svg
							className="w-4 h-4 mr-2"
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
					<p className="text-gray-600 text-sm">{member.description}</p>
				</div>

				<div className="flex flex-wrap gap-2">
					{member.expertise.map((skill: string) => (
						<span
							key={skill}
							className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default function OurTeam() {
	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
	const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section with Parallax */}
			<motion.section
				ref={targetRef}
				style={{ opacity, scale, y }}
				className="relative h-screen flex items-center justify-center overflow-hidden"
			>
				{/* Background Gradient Image */}
				<div className="absolute inset-0">
					<Image
						src="/hero/gradient1.png"
						alt="Background Gradient"
						fill
						className="object-cover opacity-40"
					/>
				</div>

				<div className="relative max-w-7xl mx-auto text-center px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
							<span>Une équipe d'</span>
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								experts
							</span>
							<br />
							<span className="text-2xl lg:text-3xl font-medium text-gray-600 mt-4 block">
								L'excellence à la française
							</span>
						</h1>
						<div className="flex items-center justify-center gap-2 mb-8">
							<div className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
							<span className="text-lg text-gray-500 italic">
								French Tech Innovation
							</span>
							<div className="h-px w-12 bg-gradient-to-l from-blue-600 to-transparent" />
						</div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="flex justify-center items-center gap-[1px] mb-8"
						>
							<div className="w-6 h-4 bg-gradient-to-b from-blue-500/40 to-blue-500/60 rounded-l-sm shadow-sm" />
							<div className="w-6 h-4 bg-gradient-to-b from-gray-100 to-white shadow-sm" />
							<div className="w-6 h-4 bg-gradient-to-b from-red-500/40 to-red-500/60 rounded-r-sm shadow-sm" />
						</motion.div>
						<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
							Jeune, ambitieux et animé par l'excellence. Nous sommes une équipe
							d'innovateurs passionnés par la création de solutions SaaS de
							pointe qui transforment les entreprises.
						</p>
					</motion.div>
				</div>
			</motion.section>

			{/* Team Grid with 3D Cards */}
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
					{teamMembers.map((member) => (
						<Card3D key={member.name} member={member} />
					))}
				</div>
			</section>

			{/* Values Section with 3D Cards */}
			<section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-3xl font-bold text-center mb-16"
					>
						Nos Valeurs Fondamentales
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{[
							{
								icon: '⚡',
								title: 'Innovation First',
								description:
									'Nous repoussons les limites en embrassant les nouvelles technologies.',
							},
							{
								icon: '🤝',
								title: 'Satisfaction Client',
								description:
									'Votre réussite est notre priorité. Nous nous engageons à délivrer des résultats exceptionnels.',
							},
							{
								icon: '✨',
								title: 'Excellence Française',
								description:
									'Nous maintenons les plus hauts standards de qualité, fidèles à la tradition française.',
							},
						].map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white p-8 rounded-2xl shadow-lg text-center transform-gpu hover:shadow-xl transition-all duration-300"
							>
								<div className="text-4xl mb-6">{value.icon}</div>
								<h3 className="text-xl font-bold mb-4">{value.title}</h3>
								<p className="text-gray-600">{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-white">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center relative"
				>
					<h2 className="text-3xl font-bold mb-6 text-gray-900">
						Prêt à Innover Ensemble ?
					</h2>
					<p className="text-xl text-gray-600 mb-8">
						Transformons vos idées en réalité avec notre expertise française.
						Notre équipe est prête à vous accompagner dans la réalisation de
						votre prochain grand projet.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<motion.button
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
							className="relative inline-flex items-center"
						>
							{/* Gradient border container */}
							<div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300 group-hover:opacity-90" />

							{/* Colored background for first button */}
							<div className="relative bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-[5px] m-[1px] px-6 py-2 transition-all duration-300">
								<a
									href="/contact-us"
									className="text-white font-medium whitespace-nowrap"
								>
									Contactez-nous
								</a>
							</div>

							{/* Shine effect */}
							<div className="absolute inset-0 rounded-md overflow-hidden">
								<div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
							</div>
						</motion.button>

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
									Découvrir nos solutions
								</span>
							</div>

							{/* Shine effect */}
							<div className="absolute inset-0 rounded-md overflow-hidden">
								<div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
							</div>
						</motion.button>
					</div>
				</motion.div>
			</section>
		</div>
	);
}
