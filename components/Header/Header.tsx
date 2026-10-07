import Link from "next/link";

import * as styles from "./Header.css";

interface IMenuItem {
  id: string;
  label: string;
  ko: string;
}

const MENU_ITEMS: IMenuItem[] = [
  { id: "about", label: "About", ko: "소개" },
  { id: "projects", label: "Projects", ko: "프로젝트" },
  { id: "timeline", label: "Timeline", ko: "연혁" },
  { id: "faq", label: "FAQ", ko: "인터뷰" },
  { id: "contact", label: "Contact", ko: "연락" },
];

//TODO: 이력서 PDF를 public/에 넣어서 실제 경로로 추후 교체하기
const RESUME_HREF = "#";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="#" className={styles.logo}>
        JAESEON
      </Link>
      <nav className={styles.nav} aria-label="주 메뉴">
        <ul className={styles.list}>
          {MENU_ITEMS.map(({ id, label, ko }) => (
            <li key={id}>
              <Link href={`#${id}`} className={styles.link}>
                {label}
                <span className={styles.ko}>{ko}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a href={RESUME_HREF} className={styles.resume}>
        이력서 PDF
        <span className={styles.resumeIcon}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
          </svg>
        </span>
      </a>
    </header>
  );
}
