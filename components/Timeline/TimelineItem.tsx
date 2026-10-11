import * as styles from "./TimelineItem.css";

export type TTimelineCategory = "수상 & 자격" | "Projects & 활동" | "Work";

export interface ITimelineItem {
  period: string;
  title: string;
  category: TTimelineCategory;
}

type TTimelineItemProps = {
  item: ITimelineItem;
};

export default function TimelineItem({ item }: TTimelineItemProps) {
  const { period, title, category } = item;

  return (
    <li className={`${styles.item} ${styles.categoryColor[category]}`}>
      <span className={styles.dot} />
      <span className={styles.period}>{period}</span>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </li>
  );
}
