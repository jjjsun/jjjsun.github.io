"use client";

import { motion, useReducedMotion } from "motion/react";

type TRevealProps = {
  children: React.ReactNode;
  className?: string;
};

const OFFSET_Y = 24;
const DURATION = 0.6;
const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function Reveal({ children, className }: TRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: OFFSET_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: DURATION, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
