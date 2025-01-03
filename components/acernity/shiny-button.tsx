"use client";

import { cn } from "@/utils/cn";
import {
  motion,
  type AnimationProps,
  type HTMLMotionProps,
} from "framer-motion";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      mass: 0.3,
    },
  },
} as AnimationProps;

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-md px-6 py-2 font-medium backdrop-blur-xl transition-all duration-300 ease-in-out hover:shadow",
          "bg-gradient-to-b from-zinc-600 to-zinc-950 dark:bg-gradient-to-b dark:from-zinc-600 dark:to-zinc-950",
          "hover:dark:bg-gradient-to-b hover:dark:from-zinc-700 hover:dark:to-zinc-900",
          "dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
          className
        )}
      >
        <span
          className="relative block size-full text-md text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
          style={{
            maskImage:
              "linear-gradient(-75deg,rgb(255,255,255) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),rgb(255,255,255) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) content-box,linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(90,90,90,0.2)_calc(var(--x)+20%),rgba(120,120,120,0.4)_calc(var(--x)+25%),rgba(90,90,90,0.2)_calc(var(--x)+100%))] p-px border border-zinc-800 dark:hover:border-zinc-600"
        ></span>
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export { ShinyButton };
