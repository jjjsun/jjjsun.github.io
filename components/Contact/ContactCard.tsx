import * as styles from "./ContactCard.css";

export type TContactId = "email" | "github" | "linkedin" | "velog";

export interface IContact {
  id: TContactId;
  name: string;
  description: string;
  href: string;
}

type TContactCardProps = {
  contact: IContact;
};

export default function ContactCard({ contact }: TContactCardProps) {
  const { id, name, description, href } = contact;
  const isExternal = href.startsWith("https");
  return (
    <li>
      <a
        className={`${styles.card} ${styles.tone[id]}`}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <span className={styles.icon}>
          <span className={`${styles.glyph} ${styles.glyphImage[id]}`} aria-hidden="true" />
        </span>
        <span className={styles.text}>
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
}
