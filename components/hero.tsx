'use client';

import { ShineBorder } from '@/components/acernity/border';
import { FollowerPointerCard } from '@/components/acernity/following-pointer';
import Press from '@/components/socials';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const LeftSection: React.FC = () => {
  return (
    <div className="flex-1 space-y-6 lg:space-y-8 px-4 lg:pr-8 text-center lg:text-left mt-10 lg:mt-0">
      <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
        <span>Votre </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7066CB] to-blue-500">
          idée.
        </span>
        <br />
        Votre solution{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7066CB] to-blue-500">
          Saas.
        </span>
        <br />
      </h1>

      <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
        De la conception à la réalisation, nous donnons vie à votre application
        avec une expertise technique sur mesure et un accompagnement dédié.
      </p>

      <div className="pt-8 lg:pt-16 w-full flex flex-col mt-4 lg:mt-8">
        <p className="text-sm text-gray-500 mb-4 lg:mb-6 self-center">
          Ces entreprises nous font confiance
        </p>
        <Press
          images={[
            '/socials/logo0.png',
            '/socials/logo1.png',
            '/socials/logo2.png',
            '/socials/logo3.png',
          ]}
          title=""
        />
      </div>
    </div>
  );
};

const MobileImageStack: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-4">
        {[0, 1].map((index: number) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <FollowerPointerCard>
              {index === 1 ? (
                <ShineBorder
                  className="relative size-full border rounded-full"
                  color={['#6BA1FA', '#266CDE', '#0945A7']}
                >
                  <div className="relative h-[250px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
                    <Image
                      src={`/hero/hero${index}.png`}
                      alt="Hero illustration"
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </ShineBorder>
              ) : (
                <div className="relative h-[250px] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
                  <Image
                    src={`/hero/hero${index}.png`}
                    alt="Hero illustration"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </FollowerPointerCard>
          </motion.div>
        ))}
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative w-full mt-4"
      >
        <div className="relative h-[150px] w-full rounded-xl overflow-hidden group">
          {/* Outer Border */}
          <div className="absolute inset-0 rounded-xl border border-blue-100">
            <div className="absolute inset-[1px] rounded-lg bg-white/5 backdrop-blur-[4px]">
              <div className="absolute inset-[6px] rounded-lg border border-gradient-to-r from-blue-100/50 via-purple-200/50 to-pink-100/50">
                <div className="w-full h-full rounded-lg backdrop-blur-[6px] bg-white/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    whileHover={{ scale: 1.4 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.8,
                      scale: {
                        duration: 4,
                        ease: 'easeOut',
                      },
                      hover: {
                        duration: 1,
                        ease: 'easeOut',
                      },
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/hero/llms.png"
                      alt="LLMs Hero"
                      fill
                      sizes="100vw"
                      className="object-cover rounded-lg blur-[1px]"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <motion.span className="px-6 py-3 text-2xl font-bold rounded-lg text-gray-800 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <span className="relative z-10">
                        intégrez l'
                        <span className="bg-gradient-to-r font-extrabold from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          IA
                        </span>
                        .
                      </span>
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ImageStack: React.FC = () => {
  return (
    <div className="relative w-full h-[600px]">
      {[0, 1].map((index: number) => (
        <motion.div
          key={index}
          className="md:absolute w-full left-0 md:left-15 lg:left-15 xl:left-15 top-15 md:-translate-x-1/2 lg:-translate-x-1/2 xl:-translate-x-1/2 -translate-y-1/2"
          initial={{
            opacity: 0,
            x: -100,
            y: index * 100,
          }}
          animate={{
            opacity: 1,
            x: index * 120,
            y: index * 100,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <FollowerPointerCard>
            {index === 1 ? (
              <ShineBorder
                className="relative size-full border rounded-full"
                color={['#6BA1FA', '#266CDE', '#0945A7']}
              >
                <div className="relative size-[20rem] md:w-[700px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />{' '}
                  <Image
                    src={`/hero/hero${index}.png`}
                    alt="Hero illustration"
                    fill
                    sizes="700px"
                    className={cn('object-cover')}
                  />
                </div>{' '}
              </ShineBorder>
            ) : (
              <div className="relative h-[20rem] w-full md:w-[700px] md:h-[450px] bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />{' '}
                <Image
                  src={`/hero/hero${index}.png`}
                  alt="Hero illustration"
                  fill
                  sizes="700px"
                  className="object-cover md:object-none"
                />
              </div>
            )}
          </FollowerPointerCard>
        </motion.div>
      ))}

      {/* Decorative Element */}
      <div className="absolute bottom-10 lg:right-0 md:right-0 translate-y-1/4 lg:translate-x-1/4 md:lg:translate-x-1/4">
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 180 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative w-[300px] h-[200px] rounded-xl overflow-hidden group"
        >
          {/* Outer Border */}
          <div className="absolute inset-0 rounded-xl border border-blue-100">
            {/* Semi-transparent space between borders */}
            <div className="absolute inset-[1px] rounded-lg bg-white/5 backdrop-blur-[4px]">
              {/* Inner Border with Gradient */}
              <div className="absolute inset-[6px] rounded-lg border border-gradient-to-r from-blue-100/50 via-purple-200/50 to-pink-100/50">
                {/* Content Container */}
                <div className="w-full h-full rounded-lg backdrop-blur-[6px] bg-white/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    whileHover={{ scale: 1.4 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.8,
                      scale: {
                        duration: 4,
                        ease: 'easeOut',
                      },
                      hover: {
                        duration: 1,
                        ease: 'easeOut',
                      },
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/hero/llms.png"
                      alt="LLMs Hero"
                      fill
                      sizes="300px"
                      className="object-cover rounded-lg blur-[1px]"
                    />
                  </motion.div>
                  {/* Text Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <motion.span className="px-8 py-4 text-3xl font-bold rounded-lg text-gray-800 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <span className="relative z-10">
                        intégrez l'
                        <span className="bg-gradient-to-r font-extrabold from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          IA
                        </span>
                        .
                      </span>
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const RightSection: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center lg:justify-start">
      <div className="block lg:hidden w-full px-4">
        <MobileImageStack />
      </div>
      <div className="hidden lg:flex-1 lg:flex items-center justify-center lg:justify-start">
        <ImageStack />
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[85rem] w-full mx-auto lg:mx-0 lg:ml-32 z-50">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xs:mt-10">
          <LeftSection />
          <RightSection />
        </div>
      </div>
      <div className="absolute z-0 top-15 -right-32 hidden lg:block">
        <img
          src="/logo/brand-logo-white.png"
          alt="Logo"
          className="w-[32rem] h-fit object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
