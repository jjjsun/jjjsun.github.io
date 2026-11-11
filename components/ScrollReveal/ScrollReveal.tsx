"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type TScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
};

const OFFSET_Y = 40;
//요소 윗변이 뷰포트 90%지점에 닿을때 0, 60% 닿을때 1
const SCROLL_RANGE: ["start 90%", "start 60%"] = ["start 90%", "start 60%"];

export default function ScrollReveal({ children, className }: TScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: SCROLL_RANGE });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [OFFSET_Y, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={shouldReduceMotion ? undefined : { opacity, y }}
    >
      {children}
    </motion.div>
  );
}
