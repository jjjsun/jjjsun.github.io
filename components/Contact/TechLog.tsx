import { VELOG_URL } from "./constants";
import { getVelogLogs } from "./getVelogLogs";
import LogItem, { ILog } from "./LogItem";
import * as styles from "./TechLog.css";

export default async function TechLog() {
  let logs: ILog[] = [];
  try {
    logs = await getVelogLogs();
  } catch (error) {
    //velog가 일시적으로 응답하지 않아도 빌드실패하지 않도록 빈목록으로 보이게
    console.warn("Velog 글을 불러오지 못했습니다", error);
  }
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
      {logs.length > 0 ? (
        <ul className={styles.list}>
          {logs.map((log, index) => (
            <LogItem key={log.title} log={log} index={index} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          최근 글을 불러오지 못했습니다. 전체보기 버튼으로 velog를 확인해주세요.
        </p>
      )}
    </div>
  );
}
