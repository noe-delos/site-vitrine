// app/portfolio/page.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

// Types
interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	category: string;
	technologies: string[];
	link?: string;
	github?: string;
	client: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Plateforme E-commerce IA',
		description:
			"Une plateforme e-commerce intelligente utilisant l'IA pour personnaliser l'expérience utilisateur et optimiser les ventes.",
		image: '/projects/ecommerce.jpg', // Placez vos images dans public/projects/
		category: 'E-commerce',
		technologies: ['Next.js', 'Node.js', 'TensorFlow', 'AWS'],
		client: 'MegaShop France',
	},
	{
		id: 2,
		title: 'Application de Gestion RH',
		description:
			'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
		image: '/projects/hrm.jpg',
		category: 'SaaS',
		technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
		client: 'Tech Industries',
	},
	// Ajoutez plus de projets selon vos besoins
];

const categories = ['Tous', 'E-commerce', 'SaaS', 'IA', 'Mobile'];

const PortfolioPage = () => {
	const [selectedCategory, setSelectedCategory] = useState('Tous');
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

	const filteredProjects = projects.filter(
		(project) =>
			selectedCategory === 'Tous' || project.category === selectedCategory
	);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const projectVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-24">
			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto"
				>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						Nos Réalisations
					</h1>
					<p className="text-lg text-gray-600 mb-12">
						Découvrez comment nous transformons les idées innovantes en
						solutions digitales performantes pour nos clients du monde entier.
					</p>
				</motion.div>

				{/* Filtres */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="flex flex-wrap justify-center gap-4 mb-16"
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-6 py-2 rounded-full transition-all duration-300 ${
								selectedCategory === category
									? 'bg-gradient-to-r from-[#7066CB] to-blue-500 text-white shadow-lg'
									: 'bg-white text-gray-600 hover:bg-gray-100'
							}`}
						>
							{category}
						</button>
					))}
				</motion.div>

				{/* Grille de Projets */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{filteredProjects.map((project) => (
						<motion.div
							key={project.id}
							variants={projectVariants}
							className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
							onHoverStart={() => setHoveredProject(project.id)}
							onHoverEnd={() => setHoveredProject(null)}
						>
							{/* Image du projet */}
							<div className="relative h-64 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transform group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Contenu */}
							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<span className="text-sm font-medium text-[#7066CB]">
										{project.category}
									</span>
									<span className="text-sm text-gray-500">
										{project.client}
									</span>
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{project.title}
								</h3>

								<p className="text-gray-600 mb-4">{project.description}</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Liens */}
								<div className="flex items-center space-x-4">
									<motion.a
										href="#"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="inline-flex items-center space-x-2 text-[#7066CB] hover:text-blue-500"
									>
										<span>Voir le projet</span>
										<ArrowRight className="w-4 h-4" />
									</motion.a>

									{project.github && (
										<motion.a
											href={project.github}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
											className="text-gray-400 hover:text-gray-600"
										>
											<Github className="w-5 h-5" />
										</motion.a>
									)}

									{project.link && (
										<motion.a
											href={project.link}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
											className="text-gray-400 hover:text-gray-600"
										>
											<ExternalLink className="w-5 h-5" />
										</motion.a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* Section Statistiques */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-4 gap-8"
					>
						{[
							{ number: '50+', label: 'Projets Réalisés' },
							{ number: '30+', label: 'Clients Satisfaits' },
							{ number: '5+', label: "Années d'Expérience" },
							{ number: '100%', label: 'Satisfaction Client' },
						].map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-4xl font-bold text-[#7066CB] mb-2">
									{stat.number}
								</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Section CTA */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto text-center px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-2xl p-12 text-white"
					>
						<h2 className="text-3xl font-bold mb-4">
							Prêt à Concrétiser Votre Projet ?
						</h2>
						<p className="text-lg mb-8 opacity-90">
							Discutons ensemble de vos idées et transformons-les en réalité.
						</p>
						<motion.a
							href="/contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-block bg-white text-[#7066CB] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
						>
							Contactez-nous
						</motion.a>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioPage;
