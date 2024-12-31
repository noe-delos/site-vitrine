'use client';
import { useRouter } from 'next/navigation';

export default function ContactUs({ dictionary }: { dictionary: any }) {
	const router = useRouter();
	return (
		<section className="w-full py-32 px-4">
			<div className="max-w-3xl mx-auto text-center">
				<div className="space-y-2 mb-16">
					<h3 className="text-sm font-medium text-violet-400 uppercase tracking-wider">
						Première consultation gratuite
					</h3>
					<h2 className="text-4xl font-bold text-[#1a1a1a]">
						Échangez avec KS Advisor, votre assistant IA dédié
					</h2>
					<p className="text-lg text-gray-600 mt-4">
						Une première approche personnalisée pour explorer vos besoins et
						obtenir des recommandations concrètes en quelques minutes
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-8 mb-12">
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-violet-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-gray-600">Disponible 24/7</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-violet-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-gray-600">Réponses instantanées</span>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-violet-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-gray-600">Recommandations sur mesure</span>
					</div>
				</div>

				<button
					onClick={() => {
						router.push('/advisor');
					}}
					className="group relative inline-flex items-center justify-center px-8 py-3.5
  text-base font-semibold rounded-full text-white
  bg-gradient-to-r from-violet-400 to-blue-500
  transition-all duration-300 ease-in-out
  shadow-[0_0_20px_rgba(167,139,250,0.3)]
  hover:shadow-[0_0_25px_rgba(167,139,250,0.45)]
  hover:-translate-y-0.5 mb-6"
				>
					<span className="flex items-center gap-3">
						Découvrir <span className="font-normal">KS</span>Advisor
					</span>
				</button>

				<p className="text-sm text-gray-500">
					Préférez un échange direct ?{' '}
					<button
						onClick={() => router.push('/contact')}
						className="text-violet-400 hover:text-violet-500 font-medium"
					>
						Réservez un appel
					</button>{' '}
					avec notre équipe
				</p>
			</div>
		</section>
	);
}
