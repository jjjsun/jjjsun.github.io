import * as styles from "./Hero.css";
import HeroIntro from "./HeroIntro";
import HeroScroll from "./HeroScroll";
import HeroStatement from "./HeroStatement";

export default function Hero() {
  return (
    <HeroScroll intro={<HeroIntro />} statement={<HeroStatement />}>
      <div className={styles.sky} aria-hidden="true">
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>
    </HeroScroll>
  );
}
