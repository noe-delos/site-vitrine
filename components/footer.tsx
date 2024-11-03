'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-50 via-white to-gray-50 "
    >
      {/* Decorative Top Border */}
      <div className="h-[0.05rem] w-full bg-gray-200" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUpVariants} className="space-y-6">
            <Link
              href="/"
              className="flex items-center space-x-3 group relative"
            >
              <div className="relative">
                <Image
                  src="/logo/brand-logo.png"
                  alt="KS Enterprise Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-semibold text-gray-900 p-0 m-0">
                  KS Enterprise
                </span>
                <span className="text-sm text-gray-600 p-0 m-0 -mt-1">
                  software solutions
                </span>
              </div>
            </Link>
            <p className="text-gray-600 max-w-sm">
              Créons ensemble les solutions digitales de demain. Notre expertise
              en SaaS et en IA au service de votre réussite.
            </p>
          </motion.div>

          {/* Pages */}
          <motion.div variants={fadeInUpVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Pages</h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {[
                { name: 'Menu', path: '/' },
                { name: 'Équipe', path: '/team' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUpVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-600 hover:text-[#7066CB] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUpVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <a
                  href="mailto:contact@ks-entreprise.com"
                  className="hover:text-[#7066CB] transition-colors"
                >
                  contact@ks-entreprise.com
                </a>
              </p>
              <p>
                <a
                  href="tel:0768566836"
                  className="hover:text-[#7066CB] transition-colors"
                >
                  07 68 56 68 36
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeInUpVariants}
        className="border-t border-gray-200 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <motion.p
            variants={fadeInUpVariants}
            className="text-gray-600 text-sm text-center"
          >
            © 2024 KS Enterprise. Tous droits réservés.
          </motion.p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
