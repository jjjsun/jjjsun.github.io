import { VELOG_URL } from "./constants";
import ContactCard, { IContact } from "./ContactCard";
import * as styles from "./ContactCards.css";

const CONTACTS: IContact[] = [
  { id: "email", name: "Email", description: "메일 보내기", href: "mailto:ddorri83@naver.com" },
  { id: "github", name: "Github", description: "코드 보기", href: "https://github.com/jjjsun" },
  {
    id: "velog",
    name: "Velog",
    description: "기술 회고 읽기",
    href: VELOG_URL,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "경력 보기",
    href: "https://www.linkedin.com/in/%EC%9E%AC%EC%84%A0-%EB%B0%95-4507b4363/",
  },
];

export default function ContactCards() {
  return (
    <div className={styles.contactCards}>
      <p className={styles.label}>CONTACT • 연락</p>
      <h2 className={styles.title}>제가 더 궁금하시다면, 편하게 연락 주세요</h2>
      <ul className={styles.list}>
        {CONTACTS.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
