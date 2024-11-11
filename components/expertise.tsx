'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const videos = ['/hero/expertise/video1.mp4', '/hero/expertise/video2.mp4'];
const videoTiming = [9000, 16000];

const FeatureGrid = ({ dictionary }: { dictionary: any }) => {
  const features = [
    {
      title: dictionary.expertise.keyFeatures.ft1,
      icon: 'tabler:user-filled',
    },
    {
      title: dictionary.expertise.keyFeatures.ft2,
      icon: 'ant-design:thunderbolt-filled',
    },
    {
      title: dictionary.expertise.keyFeatures.ft3,
      icon: 'mdi:ruler',
    },
    {
      title: dictionary.expertise.keyFeatures.ft4,
      icon: 'si:target-fill',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-md">
      {features.map((feature, index) => (
        <div
          key={index}
          className=" gap-2 p-2 flex flex-row items-center justify-start"
        >
          <Icon icon={feature.icon} className="size-4 text-black" />
          <span className="text-gray-800 text-sm">{feature.title}</span>
        </div>
      ))}
    </div>
  );
};

export default function Expertise({ dictionary }: { dictionary: any }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, videoTiming[currentVideoIndex]);

    return () => clearInterval(intervalId);
  }, [currentVideoIndex]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-white w-full py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center tracking-normal">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
            className="space-y-8 max-w-xl"
          >
            <motion.div variants={fadeInUp}>
              <div className="lg:text-4xl md:text-4xl flex flex-col xl:text-5xl sm:text-4xl xs:text-4xl text-2xl font-bold mb-6">
                {dictionary.expertise.title.part1}{' '}
                <span className="bg-gradient-to-r mt-2 from-blue-500 to-violet-300 bg-clip-text text-transparent">
                  {dictionary.expertise.title.part2}
                </span>
              </div>
              <p className="leading-relaxed">
                <span className="text-gray-700 ">
                  {dictionary.expertise.description}
                </span>{' '}
                <span className="text-gray-400">
                  {dictionary.expertise.description2}
                </span>
              </p>
            </motion.div>
            <FeatureGrid dictionary={dictionary} />
          </motion.div>

          {/* Right Video Section */}
          <div className="relative h-[600px] w-full rounded-lg">
            <div className="relative lg:w-[50rem] md:w-[40rem] sm:w-[30rem] w-full h-full brightness-100 rounded-lg shadow-xl">
              <div className="absolute hidden lg:block -top-10 -right-7 z-40 -mt-0 rotate-6">
                <div className="p-6 bg-white rounded-lg shadow-xl drop-shadow-lg">
                  <img
                    src="/logo/brand-logo.png"
                    alt="Title"
                    className="lg:size-10 md:size-8 size-6 object-contain"
                  />
                </div>
              </div>
              <video
                key={currentVideoIndex}
                className="w-full h-full object-cover scale-100 overflow-hidden rounded-lg"
                autoPlay
                muted
                onEnded={() =>
                  setCurrentVideoIndex(
                    (prevIndex) => (prevIndex + 1) % videos.length,
                  )
                }
              >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                {dictionary.expertise.video_fallback}
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
