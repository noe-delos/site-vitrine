'use client';

import { FlipWords } from '@/components/acernity/flip-words';
import { TypingAnimation } from '@/components/acernity/magic-type-effect';
import { WordFadeIn } from '@/components/acernity/word-fade-in';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';
import { ArrowRight, ChevronRight, Shield } from 'lucide-react';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
interface ContentItem {
	title: ReactNode;
	titleImg: string;
	subtitle: string;
	description: ReactNode;
	rightContent: ReactNode;
}

const FeatureList = ({ items }: any) => (
	<div className="space-y-4">
		{items.map((item: any, index: any) => (
			<div key={index} className="space-y-1">
				<div className="flex items-center gap-2">
					<ArrowRight className="w-4 h-4 text-gray-500" />
					<span className="font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
						{item.title}
					</span>
				</div>
				<p className="text-gray-600 text-sm pl-6">{item.description}</p>
			</div>
		))}
	</div>
);

function PerformanceAnalyticsCard({ dictionary }: { dictionary: any }) {
	const features = {
		column1: [
			{
				title: dictionary.technologies.performance.instant_loading.title,
				description:
					dictionary.technologies.performance.instant_loading.description,
			},
		],
		column2: [
			{
				title: dictionary.technologies.performance.realtime_analytics.title,
				description:
					dictionary.technologies.performance.realtime_analytics.description,
			},
		],
		column3: [
			{
				title: dictionary.technologies.performance.advanced_monitoring.title,
				description:
					dictionary.technologies.performance.advanced_monitoring.description,
			},
		],
	};

	return (
		<div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50">
			<h3 className="text-2xl font-extrabold flex items-center gap-3 mb-6">
				<Shield className="w-7 h-7 text-gray-700" />
				<span className="bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent tracking-wide">
					{dictionary.technologies.performance.title}
				</span>
			</h3>

			<div className="grid grid-cols-3 gap-6">
				<div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white">
					<FeatureList items={features.column1} />
				</div>
				<div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white">
					<FeatureList items={features.column2} />
				</div>
				<div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white">
					<FeatureList items={features.column3} />
				</div>
			</div>
		</div>
	);
}

const Technologies = ({ dictionary }: { dictionary: any }) => {
	const [activeSection, setActiveSection] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const sectionRefs = useRef<HTMLDivElement[]>([]);

	const content: ContentItem[] = [
		{
			title: (
				<TypingAnimation
					className="text-4xl font-extrabold text-black"
					duration={100}
					text={dictionary.technologies.ai.title}
				/>
			),
			titleImg: '/technologies/scaleway2.png',
			subtitle: '',
			rightContent: (
				<div className="relative w-full h-full rounded-lg">
					<iframe
						src="https://player.vimeo.com/video/1015752276?h=2a0d0242ef&autoplay=1&muted=1&loop=1&controls=false"
						style={{ width: '100%', height: '100%', borderRadius: 10 }}
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
						className="rounded-xl"
					/>
				</div>
			),
			description: (
				<div className="space-y-0">
					<div className="my-0 py-0 grid grid-cols-1 gap-6">
						<div className="w-full relative">
							{/* Hero section */}
							<div className="mb-12">
								<p className="text-lg text-blue-500">
									{dictionary.technologies.ai.subtitle}{' '}
									<span className="text-gray-400">
										{dictionary.technologies.ai.subtitle2}
									</span>
								</p>
							</div>

							{/* Features grid */}
							<div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16">
								{/* Feature 1 */}
								<div>
									<div className="flex items-center gap-2 mb-2">
										<div className="relative flex items-center gap-0">
											<Icon
												icon="ri:gemini-fill"
												className="relative p-1 size-8 text-white bg-blue-500 rounded-full"
											/>
											<Icon
												icon="ri:claude-fill"
												className="relative -ml-3 p-1 size-8 text-white bg-[#E4805F] rounded-full"
											/>
											<Icon
												icon="simple-icons:openai"
												className="relative -ml-3 p-1 size-8 text-white bg-[#48AA83] rounded-full"
											/>
										</div>
										<h3 className="font-medium text-xl text-black ml-1">
											{dictionary.technologies.ai.LLmApis.title}
										</h3>
									</div>
									<p className="text-gray-400">
										{dictionary.technologies.ai.LLmApis.description}
									</p>
								</div>

								{/* Feature 2 */}
								<div>
									<div className="flex items-center gap-2 mb-2 relative">
										<h3 className="font-medium text-xl text-black relative">
											{dictionary.technologies.ai.advancedFeatures.title}
										</h3>
									</div>
									<p className="text-gray-400">
										{dictionary.technologies.ai.advancedFeatures.description}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative p-6 bg-gradient-to-br from-violet-400 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
						<div className="absolute inset-0 overflow-hidden left-60 -top-14">
							<img
								src="/technologies/scaleway5.webp"
								alt="Background"
								className="w-96 h-96 opacity-10 object-cover"
							/>
						</div>
						<div className="relative z-10">
							<h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
								{dictionary.technologies.ai.infrastructure.title}
							</h3>
							<div className="grid grid-cols-2 gap-6">
								<ul className="space-y-3">
									{dictionary.technologies.ai.infrastructure.features
										.slice(0, 4)
										.map((feature: string, index: number) => (
											<>
												<li
													key={index}
													className="flex items-center gap-3 group"
												>
													<Icon
														icon={
															dictionary.technologies.ai.infrastructure.icons[
																index
															]
														}
														className="size-5 text-white"
													/>
													<span className="text-white">{feature}</span>
												</li>
											</>
										))}
								</ul>
								<ul className="space-y-3">
									{dictionary.technologies.ai.infrastructure.features
										.slice(4)
										.map((feature: string, index: number) => (
											<li key={index} className="flex items-center gap-3 group">
												<Icon
													icon={
														dictionary.technologies.ai.infrastructure.icons[
															index + 4
														]
													}
													className="size-5 text-white"
												/>
												<span className="text-white">{feature}</span>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: (
				<p className="text-4xl font-extrabold">
					{dictionary.technologies.data.title.part1}{' '}
					<span className="bg-gradient-to-br from-violet-400 to-blue-500 inline-block text-transparent bg-clip-text">
						{dictionary.technologies.data.title.part2}
					</span>
				</p>
			),
			titleImg: '/technologies/scaleway1.png',
			subtitle: '',
			rightContent: (
				<div className="isolate relative w-full h-full">
					<video
						src="/technologies/supabase.webm"
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover rounded-xl z-30"
					/>
					<img
						src="/technologies/supabase.png"
						className="size-20 rounded-xl absolute z-40 -top-10 -right-10"
					/>
				</div>
			),
			description: (
				<div className="space-y-0">
					<div className="my-0 py-0 grid grid-cols-1 gap-6">
						<div className="w-full relative">
							{/* Hero section */}
							<div className="mb-12">
								<p className="text-lg text-black">
									{dictionary.technologies.data.subtitle}{' '}
									<span className="text-gray-400">
										{dictionary.technologies.data.subtitle2}
									</span>
								</p>
							</div>

							{/* Features grid */}
							<div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16">
								{/* Feature 1 */}
								<div>
									<div className="flex items-center gap-2 mb-2">
										<Icon icon="devicon:supabase" className="size-6" />
										<h3 className="font-medium text-xl text-black ml-1">
											{dictionary.technologies.data.Supabase.title}
										</h3>
									</div>
									<p className="text-gray-400">
										{dictionary.technologies.data.Supabase.description}
									</p>
								</div>

								{/* Feature 2 */}
								<div>
									<div className="flex items-center gap-2 mb-2 relative">
										<Icon icon="devicon:azure" className="size-6" />
										<h3 className="font-medium text-xl text-black relative">
											{dictionary.technologies.data.Azure.title}
											<Icon
												icon="ic:sharp-verified"
												className="absolute -top-1 -right-3 size-[0.8rem] text-blue-500"
											/>
										</h3>
									</div>
									<p className="text-gray-400">
										{dictionary.technologies.data.Azure.description}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-blue-500" />

						<div className="absolute inset-0 overflow-hidden -top-12">
							<img
								src="/technologies/scaleway5.png"
								alt="Background"
								className="size-96 opacity-10 object-cover"
							/>
						</div>

						<div className="relative z-10">
							<h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
								<Icon
									icon="material-symbols:star"
									className="size-6 text-green-400"
								/>
								{dictionary.technologies.data.realtime.title}
							</h3>
							<div className="grid grid-cols-2 gap-6">
								<ul className="space-y-3">
									{dictionary.technologies.data.realtime.features
										.slice(0, 2)
										.map((feature: string, index: number) => (
											<>
												<li
													key={index}
													className="flex items-center gap-3 group"
												>
													<Icon
														icon="radix-icons:dot-filled"
														className="size-6 text-green-400"
													/>
													<span className="text-white">{feature}</span>
												</li>
												{index === 0 && (
													<div className="flex flex-row gap-4 items-center ml-10">
														<Icon
															icon="flat-color-icons:google"
															className="size-5"
														/>
														<Icon
															icon="logos:microsoft-icon"
															className="size-4"
														/>
														<Icon icon="logos:meta-icon" className="size-6" />
													</div>
												)}
											</>
										))}
								</ul>
								<ul className="space-y-3">
									{dictionary.technologies.data.realtime.features
										.slice(2)
										.map((feature: string, index: number) => (
											<li key={index} className="flex items-center gap-3 group">
												<Icon
													icon="radix-icons:dot-filled"
													className="size-6 text-green-400"
												/>
												<span className="text-white">{feature}</span>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: (
				<WordFadeIn
					className="font-extrabold"
					words={dictionary.technologies.sites.title}
				/>
			),
			titleImg: '/technologies/scaleway4.png',
			subtitle: '',
			rightContent: (
				<div className="relative w-full h-full rounded-lg">
					<img
						src="/fr/technologies/qmslqmslqmsmq.png"
						alt="Next.js Benefits"
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
			),
			description: (
				<div className="space-y-0">
					<div className="my-0 py-0 grid grid-cols-1 gap-6">
						<div className="w-full relative">
							{/* Hero section */}
							<div className="mb-12">
								<p className="text-lg text-gray-900">
									{dictionary.technologies.sites.subtitle}{' '}
									<span className="text-white">
										{dictionary.technologies.sites.subtitle2}
									</span>
								</p>
							</div>

							{/* Features grid */}
							<div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16">
								{/* Feature 1 */}
								<div>
									<div className="flex items-center gap-2 mb-2">
										<h3 className="font-medium text-xl text-black ml-1">
											{dictionary.technologies.sites.perf.title}
										</h3>
									</div>
									<p className="text-white">
										{dictionary.technologies.sites.perf.description}
									</p>
								</div>

								{/* Feature 2 */}
								<div>
									<div className="flex items-center gap-2 mb-2 relative">
										<h3 className="font-medium text-xl text-black relative">
											{dictionary.technologies.sites.experience.title}
										</h3>
									</div>
									<p className="text-white">
										{dictionary.technologies.sites.experience.description}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative p-6 pb-0 rounded-xl shadow-lg hover:shadow-xl bg-gradient-to-br from-violet-400 to-blue-500 transition-shadow">
						<div className="absolute z-50 bottom-0 rounded-xl left-0 right-0 h-16 bg-gradient-to-t from-[#131313] to-transparent pointer-events-none" />

						<div className="absolute inset-0 overflow-hidden -top-10 left-80">
							<img
								src="/technologies/nextreal.png"
								alt="Background"
								className="size-80 opacity-10 object-contain"
							/>
						</div>

						<div className="relative overflow-y-scroll pb-10 max-h-[11rem] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
							<div className="relative z-10">
								<h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
									{dictionary.technologies.sites.infrastructure.title}
								</h3>

								<div className="grid grid-cols-2 gap-6 relative pb-10">
									{/* Vertical separator */}
									<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-500" />

									<div className="space-y-4">
										{dictionary.technologies.sites.infrastructure.features
											.slice(0, 3)
											.map((feature: any, index: number) => (
												<div key={index} className="space-y-2">
													<div className="flex items-center gap-2">
														<span className="font-medium text-sm text-white">
															{feature.gain1}
														</span>
														<ChevronRight className="h-4 w-4 text-gray-400" />
														<span className="font-medium text-white">
															{feature.gain2}
														</span>
													</div>
													<p className="text-gray-300 italic text-sm ml-4">
														{feature.explanation}
													</p>
												</div>
											))}
									</div>

									<div className="space-y-4">
										{dictionary.technologies.sites.infrastructure.features
											.slice(3)
											.map((feature: any, index: number) => (
												<div key={index} className="space-y-2">
													<div className="flex items-center gap-2">
														<span className="font-medium text-white">
															{feature.gain1}
														</span>
														<ChevronRight className="h-4 w-4 text-gray-400" />
														<span className="font-medium text-white">
															{feature.gain2}
														</span>
													</div>
													<p className="text-gray-300 italic text-sm ml-4">
														{feature.explanation}
													</p>
												</div>
											))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: (
				<h1 className="text-4xl m-0 p-0 font-extrabold">
					{dictionary.technologies.deployment.title.part1}{' '}
					<span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
						{dictionary.technologies.deployment.title.part2}
					</span>{' '}
					{dictionary.technologies.deployment.title.part3}{' '}
					<span className="border-b-2 border-blue-500 -mb-2">
						{dictionary.technologies.deployment.title.part4}
					</span>{' '}
					{dictionary.technologies.deployment.title.part5}
				</h1>
			),
			titleImg: '/technologies/scaleway3.png',
			subtitle: '',
			rightContent: (
				<div className="relative w-full h-full">
					<img
						src="/fr/technologies/cloud/background.png"
						alt="Scaleway Cloud"
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
			),
			description: (
				<div className="space-y-0">
					<div className="my-0 py-0 grid grid-cols-1 gap-6">
						<div className="w-full relative">
							{/* Hero section */}
							<div className="mb-12">
								<p className="text-lg text-gray-900">
									{dictionary.technologies.deployment.subtitle}{' '}
									<span className="text-gray-400">
										{dictionary.technologies.deployment.subtitle2}
									</span>
								</p>
							</div>

							{/* Features grid */}
							<div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16">
								{/* Feature 1 */}
								<div>
									<div className="flex items-center gap-2 mb-2">
										<h3 className="font-medium text-xl text-black ml-1">
											{dictionary.technologies.deployment.infrastructure.title}
										</h3>
									</div>
									<p className="text-gray-400">
										{
											dictionary.technologies.deployment.infrastructure
												.description
										}
									</p>
								</div>

								{/* Feature 2 */}
								<div>
									<div className="flex items-center gap-2 mb-2 relative">
										<h3 className="font-medium text-xl text-black relative">
											{dictionary.technologies.deployment.updates.title}
										</h3>
									</div>
									<p className="text-gray-400">
										{dictionary.technologies.deployment.updates.description}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative p-6 bg-gradient-to-br from-violet-400 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
						<div className="absolute inset-0 overflow-hidden z-50 -top-5 left-96">
							<img
								src="/technologies/scaleway6.png"
								alt="Background"
								className="size-[17rem] z-50 opacity-15 object-cover"
							/>
						</div>
						<div className="relative z-10">
							<h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
								{dictionary.technologies.deployment.tools.title}
							</h3>
							<div className="grid grid-cols-3 gap-6 pt-2">
								<ul className="space-y-6">
									{dictionary.technologies.deployment.tools.features
										.slice(0, 2)
										.map((feature: string, index: number) => (
											<li key={index}>
												<Image
													alt={`Feature ${index + 1}`}
													src={feature}
													width={100}
													height={100}
													className={cn(
														'object-contain h-5 w-auto',
														index === 1 && 'h-6'
													)}
													quality={100}
													priority
												/>
											</li>
										))}
								</ul>
								<ul className="space-y-6">
									{dictionary.technologies.deployment.tools.features
										.slice(2, 4)
										.map((feature: string, index: number) => (
											<li key={index}>
												<Image
													alt={`Feature ${index + 1}`}
													src={feature}
													width={100}
													height={100}
													className={cn(
														'object-contain h-5 w-auto',
														index === 0 && 'h-7'
													)}
													quality={100}
													priority
												/>
											</li>
										))}
								</ul>
								<ul className="space-y-6">
									{dictionary.technologies.deployment.tools.features
										.slice(4)
										.map((feature: string, index: number) => (
											<li key={index}>
												<Image
													alt={`Feature ${index + 1}`}
													src={feature}
													width={100}
													height={100}
													className={cn(
														'object-contain h-5 w-auto',
														index === 1 && 'h-6'
													)}
													quality={100}
													priority
												/>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				// <div className="space-y-6">
				//   <div className="relative p-6 bg-gradient-to-br from-blue-800 to-blue-400 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 overflow-hidden">
				//     <div className="absolute inset-0 overflow-hidden z-50 -top-5 left-96">
				//       <img
				//         src="/technologies/scaleway6.png"
				//         alt="Background"
				//         className="size-[17rem] z-50 opacity-15 object-cover"
				//       />
				//     </div>
				//     <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
				//       <Cloud className="w-5 h-5 text-white" />
				//       {dictionary.technologies.deployment.cloud.title}
				//     </h3>
				//     <div className="grid grid-cols-3 gap-6">
				//       <ul className="space-y-3">
				//         {dictionary.technologies.deployment.cloud.features
				//           .slice(0, 2)
				//           .map((feature: string, index: number) => (
				//             <li key={index} className="flex items-center gap-3 group">
				//               <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
				//               <span className="text-white">{feature}</span>
				//             </li>
				//           ))}
				//       </ul>
				//       <ul className="space-y-3">
				//         {dictionary.technologies.deployment.cloud.features
				//           .slice(2)
				//           .map((feature: string, index: number) => (
				//             <li key={index} className="flex items-center gap-3 group">
				//               <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
				//               <span className="text-white">{feature}</span>
				//             </li>
				//           ))}
				//       </ul>
				//       <ul className="space-y-3">
				//         <li className="flex items-center gap-3 group">
				//           <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
				//           <span className="text-white">Serverless</span>
				//         </li>
				//         <li className="flex items-center gap-3 group">
				//           <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
				//           <span className="text-white">Auto-scaling</span>
				//         </li>
				//       </ul>
				//     </div>
				//   </div>

				//   <div className="grid grid-cols-2 gap-6">
				//     <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
				//       <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
				//         <Shield className="w-5 h-5 text-gray-600" />
				//         {dictionary.technologies.deployment.security.title}
				//       </h3>
				//       <ul className="space-y-3">
				//         {dictionary.technologies.deployment.security.features.map(
				//           (feature: string, index: number) => (
				//             <li key={index} className="flex items-center gap-3 group">
				//               <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
				//               <span>{feature}</span>
				//             </li>
				//           ),
				//         )}
				//       </ul>
				//     </div>
				//     <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
				//       <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
				//         <Zap className="w-5 h-5 text-gray-600" />
				//         {dictionary.technologies.deployment.cicd.title}
				//       </h3>
				//       <ul className="space-y-3">
				//         {dictionary.technologies.deployment.cicd.features.map(
				//           (feature: string, index: number) => (
				//             <li key={index} className="flex items-center gap-3 group">
				//               <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
				//               <span>{feature}</span>
				//             </li>
				//           ),
				//         )}
				//       </ul>
				//     </div>
				//   </div>
				// </div>
			),
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			const container = containerRef.current;
			if (!container) return;

			const scrollPosition = window.scrollY + window.innerHeight / 2;

			sectionRefs.current.forEach((ref, index) => {
				if (!ref) return;

				const element = ref;
				const { top, bottom } = element.getBoundingClientRect();
				const elementPosition = window.scrollY + top;

				if (
					scrollPosition >= elementPosition &&
					scrollPosition <= window.scrollY + bottom
				) {
					setActiveSection(index);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className="bg-gradient-to-br from-gray-50 to-white w-full relative min-h-screen py-[13rem]"
			ref={containerRef}
		>
			<div className="max-w-[100rem] mx-auto">
				<div className="flex flex-col items-center justify-center mb-[12rem] w-full px-4">
					<div className="w-full max-w-4xl">
						<div className="flex flex-row gap-2 items-center">
							<Icon
								icon="heroicons:squares-plus-16-solid"
								className="size-4 text-black"
							/>
							<p>{dictionary.technologies.secret}</p>
						</div>
						<div className="flex flex-row gap-1 items-center mb-5 p-4 pl-0 w-fit">
							<h1 className="text-5xl font-extrabold text-gray-900 pr-3">
								{dictionary.technologies.main_title_2}
							</h1>
							<FlipWords
								words={[
									dictionary.technologies.word1,
									dictionary.technologies.word2,
									dictionary.technologies.word3,
								]}
								className="text-5xl font-extrabold text-gray-900"
							/>
						</div>
						<p className="leading-relaxed text-xl">
							<span className="text-gray-700 ">
								{dictionary.technologies.main_description}
							</span>{' '}
							<span className="text-gray-400">
								{dictionary.technologies.main_description2}
							</span>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-8">
					{/* Progress Indicator */}
					<div className="col-span-1 sticky top-24 h-screen flex items-center">
						<div className="space-y-8">
							{content.map((_, index) => (
								<div
									key={index}
									className={`size-1.5 rounded-full transition-all duration-300 cursor-pointer ${
										activeSection === index
											? 'bg-transparent scale-125'
											: 'bg-transparent'
									}`}
									onClick={() => {
										const element = sectionRefs.current[index];
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
										}
									}}
								/>
							))}
						</div>
					</div>

					<div className="col-span-5 py-24">
						{content.map((item, index) => (
							<div
								key={index}
								ref={(el: HTMLDivElement | null) => {
									if (el) sectionRefs.current[index] = el;
								}}
								className="min-h-[70vh] flex items-center"
							>
								<div className="w-full py-32">
									<div className="space-y-6">
										<div className="space-y-4">
											<div className="flex flex-row gap-2 items-center">
												<img
													src={item.titleImg}
													alt="title"
													className="size-16"
												/>
												{item.title}
											</div>

											<p className="text-lg text-gray-600 leading-relaxed">
												{item.subtitle}
											</p>
										</div>
										<div className="text-gray-600">{item.description}</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Sticky Right Content */}
					<div className="col-span-6 sticky top-52 h-[calc(100vh-24rem)] ml-14 z-10">
						<div className="w-full h-full rounded-xl mt-24 z-10">
							{content.map((item, index) => (
								<div
									key={index}
									className={`absolute inset-0 transition-opacity duration-500 z-10 ${
										activeSection === index ? 'opacity-100' : 'opacity-0'
									}`}
								>
									{item.rightContent}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
