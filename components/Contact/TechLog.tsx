import { VELOG_URL } from "./constants";
import { getVelogLogs } from "./getVelogLogs";
import LogItem from "./LogItem";
import * as styles from "./TechLog.css";

// //TODO: 현재 하드코딩중 추후 RSS연동 예정
// const LOGS: ILog[] = [
//   {
//     title: "Tanstack Query 핵심 정리",
//     date: "2026.09.02",
//     tags: ["Tanstack Query", "WhereYouAd"],
//     href: "https://velog.io/@jjjsun/Tanstack-Query-%ED%95%B5%EC%8B%AC-%EC%A0%95%EB%A6%AC",
//   },
//   {
//     title: "[Next.js] SSR, ISR, PPR, Cache 전략",
//     date: "2026.03.25",
//     tags: ["Next.js", "SSR", "ISR", "PPR", "Cache"],
//     href: "https://velog.io/@jjjsun/Next.js-3%EC%A3%BC%EC%B0%A8SSR-ISR-PPR-Cache-%EC%A0%84%EB%9E%B5-6xuzo9pm#ppr-partial-pre-rendering",
//   },
//   {
//     title: "[Next.js] CSR vs SSR",
//     date: "2026.03.11",
//     tags: ["Next.js", "CSR", "SSR"],
//     href: "https://velog.io/@jjjsun/Next.js-1%EC%A3%BC%EC%B0%A8CSR-vs-SSR",
//   },
//   {
//     title: "팀 프로젝트 FE 초기세팅2",
//     date: "2026.01.08",
//     tags: ["Eatsfine", "Git", "github"],
//     href: "https://velog.io/@jjjsun/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8FE%EC%B4%88%EA%B8%B0%EC%84%B8%ED%8C%852",
//   },
// ];

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
