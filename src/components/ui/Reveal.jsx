"use client";

import { motion, useReducedMotion } from "framer-motion";

const DIRECTIONS = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { y: 0, x: 24 },
  right: { y: 0, x: -24 },
  none: { y: 0, x: 0 },
};

// Scroll-triggered fade/slide reveal. Renders content in its final state
// immediately when the visitor prefers reduced motion.
export default function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;
  const MotionTag = motion[Tag] ?? motion.div;

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
