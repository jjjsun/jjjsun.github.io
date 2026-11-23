import TechBadge from "./TechBadge";
import * as styles from "./TechBadge.css";

type TTechBadgeListProps = {
  items: string[];
};

export default function TechBadgeList({ items }: TTechBadgeListProps) {
  return (
    <ul className={styles.list}>
      {items.map((name) => (
        <li key={name}>
          <TechBadge name={name} />
        </li>
      ))}
    </ul>
  );
}
