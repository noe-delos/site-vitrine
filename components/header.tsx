"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isServicesPage = pathname.includes("services");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: dictionary.header.navigation.home, href: `/${lang}` },
    { label: "Services", href: `/${lang}/services` },
    {
      label: "ksGPT",
      href: `/${lang}/ks-gpt`,
      isSpecial: true,
      hasSparkle: true,
    },
    { label: dictionary.header.navigation.team, href: `/${lang}/team` },
    { label: "Contact", href: `/${lang}/contact` },
  ];

  // Dynamic header style based on services page and scroll position
  const headerStyle = {
    ...(isServicesPage && !hasScrolled
      ? {
          backgroundColor: "rgb(165 180 252)", // bg-indigo-300
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          borderColor: "transparent",
        }
      : {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(15px) saturate(180%)",
          WebkitBackdropFilter: "blur(15px) saturate(180%)",
          borderColor: "rgba(255, 255, 255, 0.3)",
        }),
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (href: string) => {
    const normalizedPathname = pathname.replace(/\/$/, "");
    const normalizedHref = href.replace(/\/$/, "");
    return normalizedPathname === normalizedHref;
  };

  // Dynamic text color based on services page and scroll position
  const getTextColor = (isActive: boolean, isSpecial?: boolean) => {
    if (isServicesPage && !hasScrolled) {
      return "text-white hover:text-white/90";
    }
    if (isSpecial) {
      return "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-90";
    }
    return "text-gray-600 hover:text-gray-900";
  };

  if (pathname.includes("ks-gpt")) return <></>;

  return (
    <>
      <header
        className="fixed top-0 w-full z-[9999] h-[4.5rem] border-b"
        style={headerStyle}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
          {isServicesPage && (
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
              <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-indigo-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute left-0 bottom-0 w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
            </div>
          )}
          <Link href={`/${lang}`} className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-8 h-8"
            >
              <Image
                src={
                  isServicesPage && !hasScrolled
                    ? "/fr/logo/brand-logo-white.png"
                    : "/logo/brand-logo.png"
                }
                alt="Finpay Logo"
                fill
                sizes="32px"
                priority
                className="object-contain"
              />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-xl font-semibold ${isServicesPage && !hasScrolled ? "text-white" : "text-gray-900"}`}
              >
                {dictionary.header.brand.title}
              </span>
              <span
                className={`text-sm -mt-1 ${isServicesPage && !hasScrolled ? "text-white/90" : "text-gray-600"}`}
              >
                {dictionary.header.brand.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href);

              return (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative group px-2 py-1 ${
                      isActive
                        ? `underline underline-offset-4 ${
                            isServicesPage && !hasScrolled
                              ? "decoration-white"
                              : "decoration-gray-600"
                          }`
                        : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`text-sm font-medium ${getTextColor(isActive, item.isSpecial)} transition-colors duration-200`}
                      >
                        {item.label}
                      </span>
                      {item.hasSparkle && (
                        <img
                          src="/fr/hero/aiStar.png"
                          alt=""
                          className="w-fit h-2.5 ml-0.5 mb-1.5 self-end bottom-0 object-contain hidden lg:block"
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex flex-row items-center gap-4">
            <motion.button
              className={`relative overflow-hidden px-6 py-1.5 rounded-lg group ${
                isServicesPage && !hasScrolled
                  ? "border-2 border-white/30"
                  : "border-2 border-[#7066CB]/30"
              }`}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                (window.location.href =
                  "https://calendly.com/contact-ks-entreprise")
              }
            >
              <div
                className={`absolute inset-0 ${
                  isServicesPage && !hasScrolled
                    ? "bg-white"
                    : "bg-gradient-to-r from-[#7066CB] to-blue-500"
                } opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`}
              />

              <motion.div
                className="absolute inset-0 bg-white"
                initial={false}
                animate={{
                  x: ["0%", "100%"],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />

              <span
                className={`relative font-medium ${
                  isServicesPage && !hasScrolled
                    ? "text-white group-hover:text-indigo-300"
                    : "text-gray-900 group-hover:text-white"
                } transition-colors duration-500`}
              >
                {dictionary.header.rdv}
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  }}
                />
              </div>

              <div
                className={`absolute inset-0 border-2 ${
                  isServicesPage && !hasScrolled
                    ? "border-white"
                    : "border-[#7066CB]"
                } rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-2 ${
              isServicesPage && !hasScrolled
                ? "text-white hover:text-white/80"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors mr-3`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[9999] md:hidden"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-[10000] md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
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
                          ? "bg-gray-50 underline underline-offset-4"
                          : ""
                      } ${
                        item.isSpecial
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        {item.label}
                        {item.hasSparkle && (
                          <img
                            src="/fr/hero/aiStar.png"
                            alt=""
                            className="size-3 ml-1 mb-1.5 self-end object-contain"
                          />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

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
