"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useState } from "react";

import * as styles from "./Header.css";

const SHOW_ALWAYS_BELOW = 120;
const DIRECTION_THRESHOLD = 6;

export default function HeaderShell({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [isHidden, setIsHidden] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    //최상단 근처에서는 항상 표시
    if (current < SHOW_ALWAYS_BELOW) {
      setIsHidden(false);
      return;
    }

    const diff = current - (scrollY.getPrevious() ?? current);
    if (diff > DIRECTION_THRESHOLD) setIsHidden(true);
    else if (diff < -DIRECTION_THRESHOLD) setIsHidden(false);
  });

  return (
    <motion.header
      className={styles.header}
      initial={false}
      animate={{ y: isHidden && !isFocusWithin ? "-100%" : 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeInOut" }}
      onFocusCapture={() => {
        setIsFocusWithin(true);
        setIsHidden(false);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocusWithin(false);
        }
      }}
    >
      {children}
    </motion.header>
  );
}
