'use client';

import {
	getFAQData,
	getServiceData,
	getStepData,
} from '@/components/sections/services/dalat';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface ServicesSectionProps {
	imageOnLeft?: boolean;
	label: string;
	title: string;
	description: string;
	features: Array<{
		icon: string;
		text: string;
	}>;
	imageSrc: string;
}

interface FAQItem {
	question: string;
	answer: string;
}

const HeroSection = () => {
	const [expandedSection, setExpandedSection] = React.useState<
		'grapho' | 'vectra' | null
	>('grapho');

	const stats = [
		{ value: '150k+', label: 'Active Users' },
		{ value: '4.9', label: 'Rating out of 5' },
		{ value: '99k+', label: 'Positive Reviews' },
		{ value: '85k+', label: 'Users Satisfied' },
	];

	return (
		<div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
				<div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-indigo-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
				<div className="absolute left-0 bottom-0 w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
			</div>

			<div className="relative w-full max-w-7xl mx-auto px-4 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
					<div className="space-y-12">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
						>
							<Icon
								icon="material-symbols:rocket-launch"
								className="text-indigo-600"
							/>
							<span className="text-sm font-medium text-gray-600">
								Solutions d'Intelligence Artificielle
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-5xl lg:text-6xl font-bold leading-tight"
						>
							Transformez votre{' '}
							<span className="text-indigo-600">entreprise</span> avec l'IA
						</motion.h1>

						<div className="h-[10rem] mt-4">
							<motion.div
								className="cursor-pointer"
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								<div
									onClick={() => setExpandedSection('grapho')}
									className={`relative pl-4 border-b border-gray-200 pb-4`}
								>
									<div
										className={`absolute left-0 top-0 h-full w-0.5 transition-colors duration-300 ${
											expandedSection === 'grapho'
												? 'bg-indigo-600'
												: 'bg-gray-200'
										}`}
									/>
									<h2 className="text-2xl font-medium">Grapho AI</h2>
									<AnimatePresence>
										{expandedSection === 'grapho' && (
											<motion.p
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												className="text-gray-500 mt-2"
											>
												That's Why We Leverage AI to Create Impactful, Lasting
												Experiences that Engage, and Transform Every
												Interaction.
											</motion.p>
										)}
									</AnimatePresence>
								</div>
							</motion.div>

							<motion.div
								className="cursor-pointer"
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div
									onClick={() => setExpandedSection('vectra')}
									className="relative pl-4 pb-4 pt-4"
								>
									<div
										className={`absolute left-0 top-0 h-full w-0.5 transition-colors duration-300 ${
											expandedSection === 'vectra'
												? 'bg-indigo-600'
												: 'bg-gray-200'
										}`}
									/>
									<h2 className="text-2xl font-medium">VectraOps</h2>
									<AnimatePresence>
										{expandedSection === 'vectra' && (
											<motion.p
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												className="text-gray-500 mt-2"
											>
												34% increase in online sales.
											</motion.p>
										)}
									</AnimatePresence>
								</div>
							</motion.div>
						</div>

						<motion.div
							className="relative flex items-center justify-between max-w-xl px-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-3xl font-bold mb-1">{stat.value}</div>
									<div className="text-gray-500 text-sm">{stat.label}</div>
								</div>
							))}
							<div
								className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"
								style={{ transform: 'translateX(-50%)' }}
							/>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="relative lg:ml-12"
					>
						<div className="relative w-[90%] aspect-square">
							<div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl transform rotate-3 opacity-10" />
							<img
								src="/fr/ceciestuntest.png"
								alt="AI Solutions"
								className="relative w-full h-full z-10 object-contain rounded-2xl"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
const FAQSection = ({ dictionary }: { dictionary: any }) => {
	const [openIndex, setOpenIndex] = React.useState<number | null>(null);

	const faqData: FAQItem[] = getFAQData(dictionary);

	return (
		<div className="relative w-full py-[9rem] pb-5 overflow-hidden">
			<img
				src="/en/blob.png"
				alt="hero"
				className="absolute top-10 left-[10%] w-fit h-[40rem] object-cover opacity-10 rotate-180"
			/>

			<div className="relative w-full max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-12 gap-8">
					<div className="col-span-3">
						<div className="">
							<div className="flex items-center gap-2 text-indigo-600 text-sm font-medium mb-4">
								<Icon icon="material-symbols:quiz" className="text-base" />
								<span>FAQ</span>
							</div>
							<h2 className="text-[2.5rem] leading-[1.1] font-semibold">
								Vos questions
								<br />
								fréquentes
							</h2>
						</div>
					</div>

					<div className="col-span-9">
						<div className="space-y-10">
							{faqData.map((faq, index) => (
								<div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-200 overflow-hidden">
									<button
										onClick={() =>
											setOpenIndex(openIndex === index ? null : index)
										}
										className="w-full px-6 py-4 flex justify-between items-center text-left"
									>
										<span className="font-normal text-gray-900">
											{faq.question}
										</span>
										<motion.div
											animate={{ rotate: openIndex === index ? 180 : 0 }}
											transition={{ duration: 0.2 }}
										>
											<Icon
												icon="material-symbols:expand-more"
												className="w-6 h-6 text-gray-500"
											/>
										</motion.div>
									</button>

									<AnimatePresence initial={false}>
										{openIndex === index && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.2 }}
											>
												<div className="px-6 pb-4 text-gray-400 text-sm">
													{faq.answer}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const ProgressSection = ({ dictionary }: { dictionary: any }) => {
	const steps = getStepData(dictionary);

	const [activeStep, setActiveStep] = React.useState(0);
	const [key, setKey] = React.useState(0);

	const resetProgress = React.useCallback(() => {
		setKey((k) => k + 1);
		setActiveStep(0);
	}, []);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setActiveStep((prev) => {
				if (prev === 4) {
					setKey((k) => k + 1);
					return 0;
				}
				return prev + 1;
			});
		}, 3000);

		const handleFocus = () => {
			resetProgress();
		};

		window.addEventListener('focus', handleFocus);

		return () => {
			clearInterval(timer);
			window.removeEventListener('focus', handleFocus);
		};
	}, [resetProgress]);

	return (
		<div className="w-full max-w-7xl mx-auto px-4 py-20">
			<div className="mb-12">
				<div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full">
					<Icon
						icon="material-symbols:magic-button"
						className="text-indigo-600"
					/>
					<span className="text-sm font-medium text-indigo-600">
						Notre méthode
					</span>
				</div>
				<h2 className="text-4xl font-bold mt-4 mb-2">
					De l'IA au Produit Commercial
				</h2>
				<p className="text-lg text-gray-600">
					Cinq étapes pour un ROI garanti : analyse, co-construction, conception
					sur mesure, déploiement, et accompagnement.
				</p>
			</div>

			<div key={key} className="grid grid-cols-5 gap-6">
				{steps.map((step, index) => (
					<div key={index} className="flex flex-col space-y-4">
						<div className="h-1 bg-gray-100 rounded-full overflow-hidden relative">
							{activeStep === index && (
								<motion.div
									className="h-full bg-indigo-600 absolute top-0 left-0"
									initial={{ width: '0%' }}
									animate={{ width: '100%' }}
									transition={{
										duration: 2,
										ease: 'easeInOut',
									}}
									style={{
										boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)',
									}}
								/>
							)}
						</div>
						<div className="text-left">
							<div className="text-lg font-medium text-gray-400 mb-2">
								{step.number}
							</div>
							<h3 className="font-semibold mb-1">{step.title}</h3>
							<AnimatePresence mode="wait">
								{activeStep === index && (
									<motion.p
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.2 }}
										className="text-sm text-gray-600 overflow-hidden"
									>
										{step.description}
									</motion.p>
								)}
							</AnimatePresence>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const ServicesSection: React.FC<ServicesSectionProps> = ({
	imageOnLeft = true,
	label,
	title,
	description,
	features,
	imageSrc,
}) => {
	const contentOrder = imageOnLeft ? 'lg:order-2' : 'lg:order-1';
	const imageOrder = imageOnLeft ? 'lg:order-1' : 'lg:order-2';

	return (
		<div className="w-full max-w-7xl mx-auto px-4 py-20">
			<div className="flex flex-col lg:flex-row items-center gap-12">
				<div className={`w-full lg:w-1/2 ${contentOrder}`}>
					<div className="space-y-6">
						<span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
							{label}
						</span>

						<h2 className="text-4xl font-bold text-gray-900">{title}</h2>

						<p className="text-lg text-gray-600">{description}</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{features.map((feature, index) => (
								<div key={index} className="flex items-start gap-3">
									<Icon
										icon={feature.icon}
										className="w-6 h-6 text-indigo-600 flex-shrink-0"
									/>
									<span className="text-gray-700">{feature.text}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className={`w-full lg:w-1/2 ${imageOrder}`}>
					<div className="p-2 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]">
						<img
							src={imageSrc}
							alt="Service illustration"
							className="w-full h-auto rounded-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function ServicesPage({ dictionary }: { dictionary: any }) {
	const [serviceData1, serviceData2] = getServiceData(dictionary);

	return (
		<div className="min-h-screen bg-white space-y-20 pb-[20rem]">
			<HeroSection />
			<ServicesSection imageOnLeft={true} {...serviceData1} />
			<ServicesSection imageOnLeft={false} {...serviceData2} />
			<ProgressSection dictionary={dictionary} />
			<FAQSection dictionary={dictionary} />
		</div>
	);
}
