'use client';

import { BentoCard, BentoGrid } from '@/components/acernity/bento-grid';
import { Compare } from '@/components/acernity/compare';
import { GlobeDemo } from '@/components/acernity/globe-demo';
import { cn } from '@/utils/cn';
import { motion as m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Dictionary {
	bento: {
		approach: string;
		title: {
			part1: string;
			part2: string;
		};
		description: string;
		features: {
			immersion: {
				name: string;
				description: string;
				cta: string;
			};
			conception: {
				name: string;
				description: string;
				cta: string;
			};
			development: {
				name: string;
				description: string;
				cta: string;
			};
			launch: {
				name: string;
				description: string;
				cta: string;
			};
			monitoring: {
				name: string;
				description: string;
				cta: string;
			};
		};
	};
}

const useInView = (margin = '0px') => {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ rootMargin: margin }
		);

		const currentElement = elementRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [margin]);

	return [elementRef, isVisible];
};

const SpaceBackground = () => {
	const [stars, setStars] = useState([]);

	useEffect(() => {
		const generateStars = () => {
			const newStars = [];
			for (let i = 0; i < 200; i++) {
				newStars.push({
					id: i,
					x: Math.random() * 100,
					y: Math.random() * 100,
					size: Math.random() * 2 + 1,
					opacity: Math.random() * 0.5 + 0.5,
					twinkleSpeed: Math.random() * 3 + 1,
				});
			}
			setStars(newStars as any);
		};

		generateStars();
	}, []);

	return (
		<div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950 to-purple-950 overflow-hidden">
			{/* Stars */}
			{stars.map((star: any) => (
				<div
					key={star.id}
					className="absolute rounded-full bg-white animate-twinkle"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
						opacity: star.opacity,
						animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite`,
					}}
				/>
			))}

			{/* Nebula effect */}
			<div
				className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"
				style={{
					transform: 'translate(-30%, -30%)',
					width: '160%',
					height: '160%',
				}}
			/>

			{/* Content overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 pointer-events-none" />

			<style jsx>{`
				@keyframes twinkle {
					0%,
					100% {
						opacity: 0.4;
					}
					50% {
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
};

const FloatingIconsBackground = () => {
	const icons = [
		{
			id: 0,
			bottom: '10%',
			right: '70%',
			size: 'w-[18%] h-[24%]',
			src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png',
		},
		{
			id: 1,
			bottom: '60%',
			right: '70%',
			size: 'w-[18%] h-[24%]',
			src: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/uosng4omsipht7cpvbi8',
		},
		{
			id: 2,
			bottom: '85%',
			right: '40%',
			size: 'w-[18%] h-[24%]',
			src: 'https://companieslogo.com/img/orig/stripe-1e3d81f8.png?t=1720244494',
		},
		{
			id: 3,
			bottom: '42%',
			right: '40%',
			size: 'w-[18%] h-[24%]',
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gV071l8VQBqOvaWyMctGOQ7zD30Z77Swyg&s',
		},
		{
			id: 4,
			bottom: '0%',
			right: '40%',
			size: 'w-[18%] h-[24%]',
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png',
		},
		{
			id: 5,
			bottom: '10%',
			right: '10%',
			size: 'w-[18%] h-[24%]',
			src: 'https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo.png',
		},
		{
			id: 6,
			bottom: '60%',
			right: '10%',
			size: 'w-[18%] h-[24%]',
			src: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
		},
	];

	return (
		<div className="absolute inset-0 overflow-hidden h-1/2">
			{/* Floating circles background */}
			<div className="absolute inset-0">
				{icons.map((icon) => (
					<div
						key={icon.id}
						className={`absolute p-3 py-7 rounded-full ${icon.size} opacity-100 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] flex items-center justify-center`}
						style={{
							right: icon.right,
							bottom: icon.bottom,
						}}
					>
						<img src={icon.src} alt="Floating icon" className="object-cover" />
					</div>
				))}
			</div>

			{/* Gradient overlay */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
				<div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent" />
				<div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent" />
			</div>
		</div>
	);
};

export default function BentoGridSection({
	dictionary,
}: {
	dictionary: Dictionary;
}) {
	const [containerRef, isVisible] = useInView('-100px');

	const features = [
		{
			id: 0,
			Icon: null,
			name: dictionary.bento.features.immersion.name,
			description: dictionary.bento.features.immersion.description,
			href: '#immersion',
			cta: dictionary.bento.features.immersion.cta,
			className: 'col-span-2 lg:col-span-1',
			background: <FloatingIconsBackground />,
		},
		{
			id: 1,
			Icon: null,
			name: dictionary.bento.features.conception.name,
			description: dictionary.bento.features.conception.description,
			href: '#conception',
			cta: dictionary.bento.features.conception.cta,
			className: 'col-span-3 lg:col-span-3',
			background: (
				<div className="absolute inset-0 overflow-hidden">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover"
					>
						<source src="/hero/video.mp4" type="video/mp4" />
					</video>
					<div className="absolute inset-0 bg-white/60 backdrop-blur-xs" />
				</div>
			),
		},
		{
			id: 2,
			Icon: null,
			name: dictionary.bento.features.development.name,
			description: dictionary.bento.features.development.description,
			href: '#developpement',
			cta: dictionary.bento.features.development.cta,
			className: 'col-span-3 lg:col-span-2 border-none',
			background: (
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute left-0 top-0 w-full h-[50%] border-b-none">
						<Compare
							firstImage="https://assets.aceternity.com/code-solution.png"
							secondImage="https://www.datocms-assets.com/48294/1658500041-dashboard-design-19-wallq-wallet-concept-dashboard-dribbble.jpeg?auto=format"
							firstImageClassName="object-cover object-left-top"
							secondImageClassname="object-cover object-left-top"
							className="w-full h-full"
							slideMode="hover"
						/>
					</div>
				</div>
			),
		},
		{
			id: 3,
			Icon: null,
			name: dictionary.bento.features.launch.name,
			description: dictionary.bento.features.launch.description,
			href: '#lancement',
			cta: dictionary.bento.features.launch.cta,
			className: 'col-span-3 lg:col-span-1 border-none text-white',
			textClassName: 'text-white',
			background: (
				<div ref={containerRef as any} className="min-h-screen relative z-0">
					<div className="absolute pointer-events-none z-50 h-full border-white transform-gpu flex-col gap-1 p-4 sm:p-6">
						<div className="flex-1 h-28" />
						<div
							className={cn(
								'h-10 w-10 sm:h-12 text-white sm:w-12 pb-2 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75'
							)}
						/>
						<h3
							className={cn(
								'text-lg sm:text-xl border-white font-semibold text-white'
							)}
						>
							{dictionary.bento.features.launch.name}
						</h3>
						<p
							className={cn(
								'max-w-lg text-sm sm:text-base text-white border-white'
							)}
						>
							{dictionary.bento.features.launch.description}
						</p>
					</div>
					{isVisible && (
						<div className="z-10">
							<GlobeDemo />
							<m.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								className="z-0 m-0 p-0"
							>
								<SpaceBackground />
							</m.div>
						</div>
					)}
				</div>
			),
		},
		{
			id: 4,
			Icon: null,
			name: dictionary.bento.features.monitoring.name,
			description: dictionary.bento.features.monitoring.description,
			href: '#monitoring',
			cta: dictionary.bento.features.monitoring.cta,
			className: 'col-span-3 lg:col-span-1 border-none',
			background: (
				<div className="absolute inset-0 overflow-hidden h-2/3">
					<div className="relative w-full h-full flex flex-col">
						<img
							src="/hero/stat.png"
							alt="Chart"
							className="w-full h-full object-cover"
						/>
						<div
							className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"
							aria-hidden="true"
						/>
					</div>
				</div>
			),
		},
	];

	return (
		<div className="relative bg-white overflow-hidden pb-56 pt-20">
			{/* Image gradient background */}
			<div className="absolute top-2/3 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[1700px] h-[1100px] opacity-30">
				<img
					src="/hero/gradient1.png"
					alt="Gradient background"
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="relative container mx-auto w-fit py-24 px-4 items-center justify-center flex flex-col">
				<div className="max-w-7xl mb-16 space-y-4 self-center md:self-start">
					<div className="flex flex-col gap-6">
						<p className="text-sm uppercase tracking-wider text-gray-500">
							{dictionary.bento.approach}
						</p>
						<h2 className="text-5xl font-extrabold">
							{dictionary.bento.title.part1}{' '}
							<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
								{dictionary.bento.title.part2}
							</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl">
							{dictionary.bento.description}
						</p>
					</div>
				</div>

				<div className="relative max-w-7xl">
					<BentoGrid className="mb-4">
						{features.map((feature) => (
							<BentoCard
								key={feature.id}
								{...feature}
								textClassName={feature.textClassName}
							/>
						))}
					</BentoGrid>
				</div>
			</div>
		</div>
	);
}
