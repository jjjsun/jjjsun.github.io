import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/Reveal/Reveal";

import * as styles from "./Contact.css";
import ContactCards from "./ContactCards";
import TechLog from "./TechLog";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Reveal className={styles.container}>
        <TechLog />
        <ContactCards />
        <Footer />
      </Reveal>
    </section>
  );
}
