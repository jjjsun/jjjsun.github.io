import { VELOG_URL } from "./constants";
import { getVelogLogs } from "./getVelogLogs";
import LogItem from "./LogItem";
import * as styles from "./TechLog.css";

export default async function TechLog() {
  const logs = await getVelogLogs();
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
        {logs.map((log, index) => (
          <LogItem key={log.title} log={log} index={index} />
        ))}
      </ul>
    </div>
  );
}
