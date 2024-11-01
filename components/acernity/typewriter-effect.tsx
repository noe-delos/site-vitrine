'use client';

import { cn } from '@/utils/cn';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        },
      );
    } else {
      animate(
        'span',
        {
          display: 'none',
          opacity: 0,
        },
        {
          duration: 0.1,
        },
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`text-black opacity-0 hidden`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-center',
        className,
      )}
    >
      {renderWords()}
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      // Reset the animation state
      animate(scope.current, { width: '0%' });

      // Start the typing animation
      animate(
        scope.current,
        { width: 'fit-content' },
        {
          duration: 2,
          delay: 0.2,
        },
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-black`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div ref={containerRef} className={cn('flex space-x-1 my-6', className)}>
      <motion.div
        ref={scope}
        className="overflow-hidden pb-2"
        initial={{
          width: '0%',
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500',
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};

export default TypewriterEffectSmooth;
