import * as styles from "./About.css";
import AboutItems from "./AboutItems";
import AboutSkills from "./AboutSkills";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.label}>ABOUT</h2>
        <AboutItems />
        <AboutSkills />
      </div>
    </section>
  );
}
