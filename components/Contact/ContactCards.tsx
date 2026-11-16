import { EMAIL, GITHUB_URL, LINKEDIN_URL, VELOG_URL } from "./constants";
import ContactCard, { IContact } from "./ContactCard";
import * as styles from "./ContactCards.css";

const CONTACTS: IContact[] = [
  { id: "email", name: "Email", description: "메일 보내기", href: `mailto:${EMAIL}` },
  { id: "github", name: "Github", description: "코드 보기", href: GITHUB_URL },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "경력 보기",
    href: LINKEDIN_URL,
  },
  {
    id: "velog",
    name: "Velog",
    description: "기술 회고 읽기",
    href: VELOG_URL,
  },
];

export default function ContactCards() {
  return (
    <div className={styles.contactCards}>
      <p className={styles.label}>
        CONTACT <span className={styles.labelKo}>연락</span>
      </p>
      <h2 className={styles.title}>더 자세한 내용은 아래에서 확인해 주세요</h2>
      <ul className={styles.list}>
        {CONTACTS.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
