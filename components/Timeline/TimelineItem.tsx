"use client";
import { motion } from "motion/react";

import * as styles from "./TimelineItem.css";

export type TTimelineCategory = "수상 & 자격" | "Projects & 활동" | "Work";
export type TTimelineFilter = "All" | TTimelineCategory;

export interface ITimelineItem {
  period: string;
  title: string;
  category: TTimelineCategory;
}

type TTimelineItemProps = {
  item: ITimelineItem;
  index: number;
};

const OFFSET_X = -24;
const DURATION = 0.6;
const STAGGER = 0.07;
const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function TimelineItem({ item, index }: TTimelineItemProps) {
  const { period, title, category } = item;

  return (
    <motion.li
      className={`${styles.item} ${styles.categoryColor[category]}`}
      initial={{ opacity: 0, x: OFFSET_X }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: DURATION, ease: EASE, delay: index * STAGGER }}
    >
      <span className={styles.dot} />
      <span className={styles.period}>{period}</span>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </motion.li>
  );
}
