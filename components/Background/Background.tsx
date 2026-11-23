import * as styles from "./Background.css";

export default function Background() {
  return (
    <div className={styles.sky} aria-hidden="true">
      <span className={styles.blob1} />
      <span className={styles.blob2} />
      <span className={styles.blob3} />
    </div>
  );
}
