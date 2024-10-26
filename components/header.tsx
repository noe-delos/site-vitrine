import Link from 'next/link';

const Header = () => {
	const navItems = [
		{ label: 'Products', href: '#products' },
		{ label: 'Portfolio', href: '#portfolio' },
		{ label: 'Our Team', href: '/team' },
		{ label: 'Contact Us', href: '#contact' },
	];

	return (
		<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 py-4 px-6 border-b border-gray-100">
			<nav className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center space-x-12">
					<Link href="/" className="flex items-center space-x-2">
						<div className="h-8 w-8 bg-blue-900 rounded-md"></div>
						<span className="text-xl font-semibold text-gray-900">Finpay</span>
					</Link>

					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-gray-600 hover:text-gray-900"
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>

				<div className="flex items-center space-x-4">
					<button className="text-gray-600 hover:text-gray-900 font-medium">
						Login
					</button>
					<button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition font-medium">
						Sign Up
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
