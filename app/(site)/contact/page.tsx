// app/contact/page.tsx
'use client';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, Phone, Users } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Import dynamique du globe pour éviter les erreurs SSR
const Globe3D = dynamic(() => import('@/components/Globe3D'), { ssr: false });

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Gérer la soumission du formulaire
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
			{/* Hero Section avec Globe */}
			<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0">
					<Globe3D />
				</div>

				<div className="relative z-10 text-center px-4">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
					>
						Connectons-nous
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
					>
						De Paris au reste du monde, nous créons des solutions innovantes
						pour des clients internationaux.
					</motion.p>
				</div>

				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
			</section>

			{/* Contact Form Section */}
			<section className="max-w-7xl mx-auto px-4 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Parlons de votre projet
							</h2>
							<p className="text-gray-600">
								Que vous soyez une startup ambitieuse ou une entreprise établie,
								nous sommes là pour transformer vos idées en réalité.
							</p>
						</div>

						<div className="space-y-6">
							{[
								{
									icon: MapPin,
									title: 'Notre bureau',
									content: 'Paris, France',
								},
								{
									icon: Globe,
									title: "Zone d'intervention",
									content: 'Mondiale',
								},
								{
									icon: Mail,
									title: 'Email',
									content: 'contact@consulting.com',
								},
								{
									icon: Phone,
									title: 'Téléphone',
									content: '+33 1 23 45 67 89',
								},
							].map((item, index) => (
								<motion.div
									key={index}
									whileHover={{ x: 5 }}
									className="flex items-start space-x-4"
								>
									<div className="p-3 rounded-lg bg-gradient-to-r from-[#7066CB]/10 to-blue-500/10">
										<item.icon className="w-6 h-6 text-[#7066CB]" />
									</div>
									<div>
										<h3 className="font-medium text-gray-900">{item.title}</h3>
										<p className="text-gray-600">{item.content}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="bg-white rounded-2xl shadow-xl p-8"
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Nom complet
									</label>
									<input
										type="text"
										id="name"
										className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="company"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Entreprise
									</label>
									<input
										type="text"
										id="company"
										className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={6}
									className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
									required
								/>
							</div>

							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								className="relative w-full group"
							>
								{/* Gradient border container */}
								<div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300" />

								{/* White background and content */}
								<div className="relative bg-white rounded-[5px] m-[1px] py-3 transition-all duration-300 hover:bg-gray-50">
									<span className="text-gray-900 font-medium">
										Envoyer le message
									</span>
								</div>

								{/* Shine effect */}
								<div className="absolute inset-0 rounded-md overflow-hidden">
									<div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
								</div>
							</motion.button>
						</form>
					</motion.div>
				</div>
			</section>

			{/* World Stats Section */}
			<section className="py-20 bg-gradient-to-b from-transparent to-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{[
							{
								number: '20+',
								label: 'Pays servis',
								icon: Globe,
							},
							{
								number: '150+',
								label: 'Projets réalisés',
								icon: Users,
							},
							{
								number: '24/7',
								label: 'Support client',
								icon: Phone,
							},
						].map((stat, index) => (
							<div
								key={index}
								className="text-center p-6 rounded-xl bg-white shadow-lg"
							>
								<div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#7066CB]/10 to-blue-500/10 flex items-center justify-center">
									<stat.icon className="w-6 h-6 text-[#7066CB]" />
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">
									{stat.number}
								</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
