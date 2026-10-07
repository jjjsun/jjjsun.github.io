import * as styles from "./Hero.css";
import HeroIntro from "./HeroIntro";
import HeroStatement from "./HeroStatement";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.sky} aria-hidden="true">
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>
      <div className={styles.content}>
        <HeroIntro />
        <HeroStatement />
      </div>
    </section>
  );
}
