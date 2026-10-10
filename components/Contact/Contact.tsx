import Footer from "../Footer/Footer";
import * as styles from "./Contact.css";
import ContactCards from "./ContactCards";
import TechLog from "./TechLog";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <TechLog />
        <ContactCards />
        <Footer />
      </div>
    </section>
  );
}
