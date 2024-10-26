import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const navItems = [
    { label: 'Notre équipe', href: '/team' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Nous contacter', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/60 backdrop-blur-xl z-[9999] py-4 px-6 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/brand-logo.png"
              alt="Finpay Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold text-gray-900 p-0 m-0">
                Consulting
              </span>
              <span className="text-sm text-gray-600 p-0 m-0 -mt-1">
                software solutions
              </span>
            </div>
          </Link>
          <div />
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
      </nav>
    </header>
  );
};

export default Header;
