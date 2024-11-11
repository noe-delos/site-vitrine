'use client';
import { cn } from '@/utils/cn';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
  threshold?: number;
}

export function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
  threshold = 0.5,
}: WordFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: threshold,
  });

  const _words = words.split(' ');

  return (
    <motion.h1
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(
        'font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm ',
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.h1>
  );
}
