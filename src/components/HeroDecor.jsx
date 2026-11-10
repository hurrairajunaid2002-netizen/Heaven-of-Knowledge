"use client";

import { motion, useReducedMotion } from "framer-motion";

// Purely decorative floating shapes behind the hero content.
// Animation is skipped entirely when the visitor prefers reduced motion.
export default function HeroDecor() {
  const prefersReducedMotion = useReducedMotion();

  const float = (distance, duration) =>
    prefersReducedMotion
      ? {}
      : {
          animate: { y: [0, distance, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-sky/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-terracotta/15 blur-3xl" />

      <motion.div
        className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-gold/70"
        {...float(-16, 6)}
      />
      <motion.div
        className="absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-sky/50"
        {...float(14, 7)}
      />
      <motion.div
        className="absolute right-[30%] top-[14%] h-4 w-4 rounded-full border border-gold/60"
        {...float(-10, 8)}
      />
      <motion.div
        className="absolute left-[22%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-terracotta/60"
        {...float(12, 9)}
      />
    </div>
  );
}
