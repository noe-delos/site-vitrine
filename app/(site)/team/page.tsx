import Image from 'next/image';

const teamMembers = [
	{
		name: 'Alexandre Martin',
		role: 'CEO & Lead Developer',
		expertise: [
			'Full-Stack Development',
			'AI Integration',
			'System Architecture',
		],
		image: '/api/placeholder/400/400',
		description:
			'Passionate about merging cutting-edge AI with practical business solutions.',
	},
	{
		name: 'Sophie Chen',
		role: 'CTO & AI Specialist',
		expertise: ['Machine Learning', 'SaaS Development', 'Cloud Architecture'],
		image: '/api/placeholder/400/400',
		description:
			'Expert in developing scalable AI solutions for enterprise applications.',
	},
	{
		name: 'Thomas Weber',
		role: 'Lead Designer & UX Strategist',
		expertise: ['UI/UX Design', 'Brand Identity', 'User Research'],
		image: '/api/placeholder/400/400',
		description: 'Creating intuitive and beautiful interfaces that users love.',
	},
	{
		name: 'Marie Lambert',
		role: 'Product Manager',
		expertise: ['Product Strategy', 'Client Relations', 'Agile Management'],
		image: '/api/placeholder/400/400',
		description:
			'Bridging the gap between technical innovation and business needs.',
	},
];

export default function OurTeam() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl font-bold text-gray-900 mb-6">
						Meet Our Exceptional Team
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Young, ambitious, and driven by excellence. We're a team of
						innovators passionate about creating cutting-edge SaaS solutions
						that transform businesses.
					</p>
				</div>
			</section>

			{/* Team Grid */}
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
						{teamMembers.map((member) => (
							<div key={member.name} className="group">
								<div className="relative overflow-hidden rounded-2xl mb-6">
									<Image
										src={member.image}
										alt={member.name}
										width={400}
										height={400}
										className="w-full object-cover transition duration-300 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{member.name}
								</h3>
								<p className="text-blue-600 font-medium mb-3">{member.role}</p>
								<p className="text-gray-600 mb-4">{member.description}</p>
								<div className="space-y-2">
									{member.expertise.map((skill) => (
										<span
											key={skill}
											className="inline-block mr-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-16">
						Our Core Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">Innovation First</h3>
							<p className="text-gray-600">
								We push boundaries and embrace new technologies to deliver
								cutting-edge solutions.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">Client Success</h3>
							<p className="text-gray-600">
								Your success is our success. We're committed to delivering
								exceptional results.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">Quality Guaranteed</h3>
							<p className="text-gray-600">
								We maintain the highest standards in every project we undertake.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
					<p className="text-xl text-gray-600 mb-8">
						Let's transform your ideas into reality. Our team is ready to help
						you build the next big thing.
					</p>
					<a
						href="/contact-us"
						className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition"
					>
						Get in Touch
					</a>
				</div>
			</section>
		</div>
	);
}
