'use client';

import { ShineBorder } from '@/components/acernity/border';
import { FollowerPointerCard } from '@/components/acernity/following-pointer';
import Press from '@/components/socials';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const LeftSection: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  return (
    <div className="flex-1 space-y-8 px-6 sm:px-8 lg:pr-8 text-center lg:text-left mt-10 lg:mt-0">
      <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight flex flex-col h-fit">
        <div className="flex flex-row justify-center lg:justify-start flex-wrap">
          <span>{dictionary.hero.title.part1}</span>
          <span className="bg-clip-text mx-2 text-transparent bg-gradient-to-r from-[#7066CB] to-blue-500 flex items-center">
            {dictionary.hero.title.part2}
          </span>
          <img
            src="/fr/hero/aiStar.png"
            alt=""
            className="size-4 ml-1 mb-2 self-end bottom-0 object-contain hidden lg:block"
          />
        </div>
        <div className="mt-2 lg:mt-0">
          {dictionary.hero.title.part3}
          <div className="flex flex-row justify-center lg:justify-start flex-wrap mt-2">
            {dictionary.hero.title.part4}
            <span className="bg-clip-text mx-2 text-transparent bg-gradient-to-r from-[#7066CB] to-blue-500">
              {dictionary.hero.title.part5}
            </span>
            <img
              src="/fr/hero/aiStar.png"
              alt=""
              className="size-4 ml-1 mb-2 self-end bottom-0 object-contain hidden lg:block"
            />
          </div>
        </div>
      </h1>

      <p className="text-sm px-20 sm:text-xl lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 sm:px-12 lg:px-0">
        {dictionary.hero.description}
      </p>

      <div className="pt-10 lg:pt-16 w-full flex flex-col">
        <p className="text-base sm:text-lg text-gray-500 mb-6 lg:mb-6 self-center">
          {dictionary.hero.trust}
        </p>
        <Press
          images={[
            '/fr/socials/logo0.png',
            '/fr/socials/logo1.png',
            '/fr/socials/logo2.png',
            '/fr/socials/logo3.png',
          ]}
          title=""
        />
      </div>
    </div>
  );
};
const MobileImageStack: React.FC<{ dictionary: any }> = ({ dictionary }) => {
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
                        {dictionary.hero.ai.part1}
                        <span className="bg-gradient-to-r font-extrabold from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          {dictionary.hero.ai.part2}
                        </span>
                        {dictionary.hero.ai.part3}
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

const ImageStack: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  return (
    <div className="relative w-full h-screen max-h-[600px]">
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          className="absolute left-15 top-15 -translate-x-1/2 -translate-y-1/2"
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
          {index === 1 ? (
            <ShineBorder
              className="relative size-full border rounded-full"
              color={['#6BA1FA', '#266CDE', '#0945A7']}
            >
              <div className="relative w-[35vw] h-[28vw] max-w-[700px] max-h-[450px] min-w-[280px] min-h-[180px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
                <Image
                  src={`/fr/hero/hero${index}.png`}
                  alt="Hero illustration"
                  fill
                  className={cn('object-cover')}
                />
              </div>
            </ShineBorder>
          ) : (
            <div className="relative w-[40vw] h-[28vw] max-w-[700px] max-h-[450px] min-w-[280px] min-h-[180px] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />
              <Image
                src={`/en/hero/hero${index}.png`}
                alt="Hero illustration"
                fill
                className={cn('object-cover')}
              />
            </div>
          )}
        </motion.div>
      ))}

      <div className="absolute bottom-10 lg:right-0 md:right-0 translate-y-1/4 lg:translate-x-1/4 md:lg:translate-x-1/4">
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 120 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative w-[15vw] h-[13vw] max-w-[300px] max-h-[200px] min-w-[200px] min-h-[133px] rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 rounded-xl border border-blue-100">
            <div className="absolute inset-[1px] rounded-lg bg-white/5 backdrop-blur-[4px]">
              <div className="absolute inset-[6px] rounded-lg border border-gradient-to-r from-blue-100/50 via-purple-200/50 to-pink-100/50">
                <div className="w-full h-full rounded-lg backdrop-blur-[6px] bg-white/10 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="/hero/llms.png"
                    alt="LLMs Hero"
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
                    className="w-full h-full object-cover rounded-lg blur-[1px]"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <motion.span className="px-4 py-2 text-[1.5vw] min-text-[16px] max-text-[24px] font-bold rounded-lg text-gray-800 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent backdrop-blur-md rounded-lg" />
                      <span className="relative z-10">
                        {dictionary.hero.ai.part1}
                        <span className="bg-gradient-to-r font-extrabold from-purple-600 to-blue-500 bg-clip-text text-transparent">
                          {dictionary.hero.ai.part2}
                        </span>
                        {dictionary.hero.ai.part3}
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

const RightSection: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  return (
    <div className="flex-1 flex items-center justify-center lg:justify-start">
      <div className="block lg:hidden w-full px-4">
        <MobileImageStack dictionary={dictionary} />
      </div>
      <div className="hidden lg:flex-1 lg:flex items-center justify-center lg:justify-start">
        <ImageStack dictionary={dictionary} />
      </div>
    </div>
  );
};

const Hero: React.FC<{ dictionary: any }> = ({ dictionary }) => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[85rem] w-full mx-auto z-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xs:mt-10">
          <LeftSection dictionary={dictionary} />
          <RightSection dictionary={dictionary} />
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
