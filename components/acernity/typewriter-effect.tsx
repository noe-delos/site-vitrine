'use client';

import { useEffect } from 'react';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';


/* eslint-disable @typescript-eslint/no-floating-promises */

export const TypewriterEffect = ({
  words,
  className,
  duration,
  onComplete,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  duration?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: (value: boolean) => void;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const animationPromise = animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: duration ?? 0.03,
          delay: stagger(duration ?? 0.03),
          ease: 'easeInOut',
        }
      );

      animationPromise.then(() => {
        if (onComplete) {
          onComplete(true);
        }
      });
    }
  }, [isInView, animate, onComplete]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{}}
              key={`char-${index}`}
              className={cn(`hidden opacity-0`, word.className)}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return <div className={cn('text-base', className)}>{renderWords()}</div>;
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  onComplete,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  onComplete?: (value: boolean) => void;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`text-black dark:text-white`, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('my-6 flex space-x-1', className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: '0%' }}
        whileInView={{ width: 'fit-content' }}
        transition={{
          duration: 0.3,
          ease: 'linear',
          delay: 0.1,
        }}
        onAnimationComplete={() => {
          if (onComplete) {
            onComplete(true);
          }
        }}
      >
        <div
          className="lg:text:3xl text-xs font-bold sm:text-base md:text-xl xl:text-5xl"
          style={{ whiteSpace: 'nowrap' }}
        >
          {renderWords()}{' '}
        </div>{' '}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn('block h-4 w-[4px] rounded-sm bg-blue-500 sm:h-6 xl:h-12', cursorClassName)}
      ></motion.span>
    </div>
  );
};
