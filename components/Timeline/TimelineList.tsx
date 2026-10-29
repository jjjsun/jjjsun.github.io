"use client";
import { MotionConfig } from "motion/react";
import { useState } from "react";

import * as styles from "./Timeline.css";
import TimelineItem, { ITimelineItem, TTimelineFilter } from "./TimelineItem";
import TimelineTabs from "./TimelineTabs";

type TTimelineListProps = {
  items: ITimelineItem[];
  children: React.ReactNode;
};

export default function TimelineList({ items, children }: TTimelineListProps) {
  const [filter, setFilter] = useState<TTimelineFilter>("All");

  const visibleItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.headerRow}>
        {children}
        <TimelineTabs selected={filter} onSelect={setFilter} />
      </div>
      <ul key={filter} className={styles.list}>
        {visibleItems.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </ul>
    </MotionConfig>
  );
}
