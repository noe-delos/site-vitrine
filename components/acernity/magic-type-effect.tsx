'use client';

import { cn } from '@/utils/cn';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [i, setI] = useState<number>(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: '0px 0px -50px 0px', // starts animation slightly before element comes into view
  });

  useEffect(() => {
    // Reset animation when coming into view
    if (isInView) {
      setI(0);
      setDisplayedText('');
    }
  }, [isInView]);

  useEffect(() => {
    let typingEffect: NodeJS.Timeout;

    if (isInView) {
      typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          setI(i + 1);
        } else {
          clearInterval(typingEffect);
        }
      }, duration);
    }

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, isInView, text]);

  return (
    <h1
      ref={containerRef}
      className={cn(
        'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className,
      )}
    >
      {displayedText}
    </h1>
  );
}
