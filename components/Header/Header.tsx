import Link from "next/link";

import * as styles from "./Header.css";
import HeaderShell from "./HeaderShell";
import NavLinks from "./NavLinks";

//TODO: 이력서 PDF를 public/에 넣어서 실제 경로로 추후 교체하기
const RESUME_HREF = "#";

export default function Header() {
  return (
    <HeaderShell>
      <Link href="#" className={styles.logo}>
        JAESEON
      </Link>
      <NavLinks />
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
    </HeaderShell>
  );
}
