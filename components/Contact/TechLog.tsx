import { VELOG_URL } from "./constants";
import LogItem, { ILog } from "./LogItem";
import * as styles from "./TechLog.css";

//TODO: Velog 연동 이슈때 실제 글 데이터와 글별URL로 교체
const LOGS: ILog[] = [
  {
    title: "Next.js 첫 도전",
    date: "2026.09.30",
    tags: ["Next.js", "포트폴리오"],
    href: VELOG_URL,
  },
  {
    title: "Tanstack Query 정리",
    date: "2026.08.22",
    tags: ["Tanstack Query", "WhereYouAd"],
    href: VELOG_URL,
  },
  {
    title: "AI 스킬 정리",
    date: "2026.08.10",
    tags: ["AI", "Claude", "Cursor"],
    href: VELOG_URL,
  },
  {
    title: "CodeRabbit 도입",
    date: "2026.06.05",
    tags: ["CodeRabbit", "Eatsfine"],
    href: VELOG_URL,
  },
];

export default function TechLog() {
  return (
    <div className={styles.techLogs}>
      <header className={styles.header}>
        <p className={styles.label}>TECH LOGS • 최근 글</p>
        <a className={styles.button} href={VELOG_URL} target="_blank" rel="noopener noreferrer">
          Velog 전체 글 보러가기
          <span className={styles.buttonIcon} aria-hidden="true">
            ↗
          </span>
        </a>
      </header>
      <ul className={styles.list}>
        {LOGS.map((log, index) => (
          <LogItem key={log.title} log={log} index={index} />
        ))}
      </ul>
    </div>
  );
}
