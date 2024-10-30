'use client';

import SparklesText from '@/components/acernity/sparkles-text';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const videos = ['/hero/expertise/video1.mp4', '/hero/expertise/video2.mp4'];
const videoTiming = [9000, 16000];

const StackBox = ({ icon, bgcolor, color }: any) => {
  return (
    <div
      className="relative p-[1px] z-10 h-[3rem] w-[11rem] rounded-lg"
      style={{
        background: `linear-gradient(${bgcolor}, ${bgcolor}), 
                  linear-gradient(to bottom, ${color}, ${bgcolor})`,
        border: 'double 2px transparent',
        borderRadius: 7,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon
        icon={icon}
        className="size-7 text-white transition-transform duration-200 hover:scale-110 cursor-pointer"
      />
    </div>
  );
};

const useInView = (margin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: margin },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [margin]);

  return [elementRef, isVisible];
};

export default function Expertise() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [ref, isInView] = useInView('0px');

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
        duration: 0.2, // Increased animation duration
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
            ref={ref as any}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4, // Increased stagger time between elements
                },
              },
            }}
            className="space-y-8 max-w-xl"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="lg:text-4xl md:text-4xl xl:text-4xl sm:text-4xl xs:text-4xl text-2xl font-bold mb-6">
                Des interfaces uniques et{' '}
                <SparklesText
                  text="époustouflantes."
                  className="text-black text-5xl mt-2"
                />
              </h2>
              <p className="text-gray-500 leading-relaxed">
                De la fintech au e-commerce, en passant par les solutions
                métier, nous concevons des interfaces SaaS qui allient
                performance et élégance. Notre expertise en UI/UX nous permet de
                créer des expériences utilisateur intuitives et engageantes,
                adaptées à chaque secteur d'activité.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-start space-x-3">
                <StackBox
                  icon={'noto:headphone'}
                  color="#E5E5E5"
                  bgcolor="#F1F1F1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    En contact permanent
                  </h3>
                  <p className="text-gray-500">
                    Nous savons que chaque entreprise est unique. C'est pourquoi
                    notre équipe met un point d'honneur à établir une
                    collaboration étroite et transparente tout au long du
                    développement de votre solution. De l'immersion initiale au
                    lancement, nous restons alignés sur vos objectifs.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="border-b border-gray-200"></div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-start space-x-3">
                <StackBox
                  icon={'noto:horse'}
                  color="#E5E5E5"
                  bgcolor="#F1F1F1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Rapidité et efficacité : notre signature
                  </h3>
                  <p className="text-gray-500">
                    Notre méthodologie agile, associée à notre maîtrise des
                    dernières technologies front-end, garantit la livraison
                    d'interfaces performantes et évolutives. Chaque pixel est
                    pensé pour offrir une expérience utilisateur exceptionnelle,
                    quel que soit votre secteur d'activité.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Video Section */}
          <div className="relative h-[600px] w-full rounded-lg">
            <div className="relative lg:w-[50rem] md:w-[40rem] sm:w-[30rem] w-full h-full brightness-100 rounded-lg shadow-xl">
              <div className="absolute hidden sm:block sm:-top-10 sm:-right-10 xs:top-0 xs:right-0 top-1/2 right-1/2 z-40 -mt-4 rotate-6">
                <div className="p-8 bg-white rounded-xl shadow-2xl">
                  <div className="p-6 bg-white rounded-lg shadow-xl drop-shadow-lg">
                    <img
                      src="/logo/brand-logo.png"
                      alt="Title"
                      className="lg:size-10 md:size-8 size-6 object-contain"
                    />
                  </div>
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
                Votre navigateur ne prend pas en charge la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
