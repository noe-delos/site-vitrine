'use client';
import { cn } from '@/utils/cn';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn('absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l')}
        ></div>
        <div className={cn('flex flex-row justify-start gap-4 pl-4', 'max-w-7xl mx-auto')}>
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 * index, ease: 'easeOut' },
              }}
              key={'card' + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

interface CardProps {
  card: {
    src: string;
    title: string;
    category: string;
    description?: string;
    className?: string;
  };
}

export const Card = ({ card }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mock detailed description for each card if not provided
  const detailedDescription =
    card.description ||
    `Discover more about ${card.title}. This ${card.category} offering brings you an exceptional.`;

  return (
    <div
      className="rounded-3xl bg-gray-100 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-6">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className="text-white text-sm md:text-base font-medium font-sans text-left">
                {card.category}
              </p>
              <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
                {card.title}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="detailed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <p className="text-white text-base md:text-lg font-normal max-w-xl text-left [text-wrap:balance] font-sans mt-2">
                {detailedDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Image
        src={card.src}
        alt={card.title}
        width={500}
        height={500}
        quality={100}
        className={cn(
          'absolute inset-0 z-10 transition duration-300 group-hover:scale-105',
          'w-full h-full object-cover left-[15%] top-[40%]',
          'sm:w-[90%] sm:h-[85%] sm:top-[15%]',
          'md:w-[80%] md:h-[75%] md:top-[25%]',
          'lg:w-[100%] lg:h-[75%]',
          card.className
        )}
      />
    </div>
  );
};
