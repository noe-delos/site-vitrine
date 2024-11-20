'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Header = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated navItems to include language prefix
  const navItems = [
    { label: dictionary.header.navigation.home, href: `/${lang}` },
    { label: dictionary.header.navigation.team, href: `/${lang}/team` },
    {
      label: dictionary.header.navigation.portfolio,
      href: `/${lang}/portfolio`,
    },
  ];

  // Style with constant blur effect
  const headerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(15px) saturate(180%)',
    WebkitBackdropFilter: 'blur(15px) saturate(180%)', // Support Safari
    borderColor: 'rgba(255, 255, 255, 0.3)',
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper function to check if a path is active
  const isActivePath = (href: string) => {
    // Remove trailing slashes for comparison
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedHref = href.replace(/\/$/, '');
    return normalizedPathname === normalizedHref;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-[9999] h-[4.5rem] border-b" style={headerStyle}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
          <Link href={`/${lang}`} className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-8 h-8"
            >
              <Image
                src="/logo/brand-logo.png"
                alt="Finpay Logo"
                fill
                sizes="32px"
                priority
                className="object-contain"
              />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold text-gray-900">
                {dictionary.header.brand.title}
              </span>
              <span className="text-sm text-gray-600 -mt-1">
                {dictionary.header.brand.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href);

              return (
                <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link href={item.href} className="relative group px-2 py-1">
                    <span
                      className={`text-sm font-medium ${
                        isActive ? 'text-[#7066CB]' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {item.label}
                    </span>

                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7066CB] rounded-full"
                      initial={false}
                      animate={{
                        width: isActive ? '100%' : '0%',
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                    />

                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gray-200 rounded-full"
                      initial={{ width: '0%' }}
                      whileHover={{
                        width: !isActive ? '100%' : '0%',
                        transition: { duration: 0.3 },
                      }}
                    />

                    <motion.span
                      className="absolute inset-0 -z-10 rounded-lg opacity-0 bg-white/10"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex flex-row items-center gap-4">
            <motion.button
              className="relative overflow-hidden px-6 py-1.5 rounded-lg group border-2 border-[#7066CB]/30"
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(`/${lang}/contact`)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

              <motion.div
                className="absolute inset-0 bg-white"
                initial={false}
                animate={{
                  x: ['0%', '100%'],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />

              <span className="relative font-medium text-gray-900 group-hover:text-white transition-colors duration-500">
                {dictionary.header.contact_btn}
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'linear',
                  }}
                />
              </div>

              <div className="absolute inset-0 border-2 border-[#7066CB] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.button>

            <button
              className="relative overflow-hidden px-4 py-1.5 flex flex-row items-center gap-2 rounded-lg group text-white bg-[#0869FA] hover:bg-[#2e7df3]"
              onClick={() => (window.location.href = 'https://calendly.com/contact-ks-entreprise')}
            >
              <img src="/en/logo/calendly.png" alt="Calendly logo" className="size-4" />
              <span className="relative font-medium text-white transition-colors duration-500">
                Calendly
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors mr-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[9999] md:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-[10000] md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-lg font-semibold text-gray-900">
                  {dictionary.header.mobile_menu.title}
                </span>
                <button
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col py-4">
                {navItems.map((item) => {
                  const isActive = isActivePath(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`px-6 py-3 text-sm font-medium transition-colors duration-200 relative ${
                        isActive
                          ? 'text-[#7066CB] bg-[#7066CB]/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-[#7066CB] rounded-r"
                          layoutId="activeNavIndicator"
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Contact Button */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
                <button
                  className="w-full bg-[#7066CB] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-[#7066CB]/90 active:scale-[0.98]"
                  onClick={() => {
                    router.push(`/${lang}/contact`);
                    closeMenu();
                  }}
                >
                  {dictionary.header.contact_btn}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
