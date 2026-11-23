import { TECH } from "./constants";
import * as styles from "./TechBadge.css";

type TTechBadgeProps = {
  name: string;
};

export default function TechBadge({ name }: TTechBadgeProps) {
  const hasIcon = name in TECH;
  return (
    <span className={styles.badge}>
      {hasIcon && <span aria-hidden className={`${styles.glyph} ${styles.glyphOf[name]}`} />}
      {name}
    </span>
  );
}
