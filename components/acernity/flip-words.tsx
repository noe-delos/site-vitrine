"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentSentence, setCurrentSentence] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextSentence = words[words.indexOf(currentSentence) + 1] || words[0];
    setCurrentSentence(nextSentence);
    setIsAnimating(true);
  }, [currentSentence, words]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div className="relative inline-block">
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 2,
            position: "absolute",
          }}
          className={cn("inline-block text-left text-neutral-900", className)}
          key={currentSentence}
        >
          <motion.span
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block whitespace-nowrap"
          >
            {currentSentence.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.2,
                }}
                className="inline-block"
                style={{
                  marginRight: char === " " ? "0em" : "0",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FlipWords;
