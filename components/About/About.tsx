import Reveal from "@/components/Reveal/Reveal";

import * as styles from "./About.css";
import AboutItems from "./AboutItems";
import AboutSkills from "./AboutSkills";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Reveal className={styles.container}>
        <h2 className={styles.label}>ABOUT</h2>
        <AboutItems />
        <AboutSkills />
      </Reveal>
    </section>
  );
}
