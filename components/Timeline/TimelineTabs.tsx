import { motion } from "motion/react";

import { TTimelineFilter } from "./TimelineItem";
import * as styles from "./TimelineTabs.css";

const FILTERS: TTimelineFilter[] = ["All", "Projects & 활동", "수상 & 자격", "Work"];

type TTimelineTabsProps = {
  selected: TTimelineFilter;
  onSelect: (filter: TTimelineFilter) => void;
};

export default function TimelineTabs({ selected, onSelect }: TTimelineTabsProps) {
  return (
    <div className={styles.tabs} role="group" aria-label="타임라인 카테고리 필터">
      {FILTERS.map((filter) => {
        const isActive = selected === filter;

        return (
          <button
            key={filter}
            type="button"
            className={styles.tab}
            aria-pressed={isActive}
            onClick={() => onSelect(filter)}
          >
            {isActive && (
              <motion.span
                layoutId="timeline-tab-indicator"
                transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                className={`${styles.indicator} ${styles.indicatorColor[filter]}`}
              />
            )}
            <span className={styles.label}>{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
