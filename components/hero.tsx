'use client';

import { ShineBorder } from '@/components/acernity/border';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const LeftSection: React.FC = () => {
  return (
    <div className="flex-1 space-y-8 pr-8">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Get paid early
        <br />
        save automatically
        <br />
        <span className="text-blue-900">all your pay.</span>
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Supports small businesses with simple financing, powerful integrations,
        and cash flow management tools.
      </p>

      <div className="flex items-center space-x-4 max-w-xl">
        <input
          type="email"
          placeholder="Your business email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        />
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium whitespace-nowrap">
          Get Started →
        </button>
      </div>

      <div className="pt-12">
        <p className="text-sm text-gray-500 mb-6">
          Trusted by leading companies
        </p>
        <div className="flex items-center space-x-12">
          <img
            src="/api/placeholder/120/40"
            alt="Klarna"
            className="h-8 opacity-40 hover:opacity-60 transition"
          />
          <img
            src="/api/placeholder/120/40"
            alt="Coinbase"
            className="h-8 opacity-40 hover:opacity-60 transition"
          />
          <img
            src="/api/placeholder/120/40"
            alt="Instacart"
            className="h-8 opacity-40 hover:opacity-60 transition"
          />
        </div>
      </div>
    </div>
  );
};

const ImageStack: React.FC = () => {
  return (
    <div className="relative w-full h-[600px]">
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
              color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            >
              <div className="relative w-[700px] h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />{' '}
                <Image
                  src={`/hero/hero${index}.png`}
                  alt="Hero illustration"
                  fill
                  className={cn('object-cover')}
                />
              </div>{' '}
            </ShineBorder>
          ) : (
            <div className="relative w-[700px] h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 backdrop-blur-sm border border-white/50 rounded-2xl" />{' '}
              <Image
                src={`/hero/hero${index}.png`}
                alt="Hero illustration"
                fill
                className={cn('object-cover')}
              />
            </div>
          )}
        </motion.div>
      ))}
      {/* Decorative Element */}
      <div className="absolute bottom-10  right-0 translate-y-1/4 translate-x-1/4">
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 180 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative w-[300px] h-[200px] rounded-xl overflow-hidden border-blue-100 border-[1px]"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-blue-100/50 via-purple-200/50 to-pink-100/50">
            {/* Content Container */}
            <div className="w-full h-full rounded-xl backdrop-blur-[6px] bg-white/10 p-6 flex items-center justify-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                2024
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const RightSection: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <ImageStack />
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
