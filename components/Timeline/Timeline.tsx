import * as styles from "./Timeline.css";
import TimelineItem, { ITimelineItem } from "./TimelineItem";

const TIMELINE: ITimelineItem[] = [
  { period: "2026.09", title: "TOEIC Speaking IH 취득", category: "수상 & 자격" },
  { period: "2026.05 - 2026.08", title: "모두의 창업 1기 선정", category: "수상 & 자격" },
  { period: "2026.05", title: "정보처리기사 필기 합격", category: "수상 & 자격" },
  { period: "2026.05", title: "상명 창업아이디어경진대회 대상(PT발표)", category: "수상 & 자격" },
  { period: "2026.01 - 2026.02", title: "Eatsfine 프로젝트", category: "Projects & 동아리" },
  { period: "2024.02 - 2025.02", title: "스타벅스 국회의사당역점 바리스타", category: "Work" },
  {
    period: "2022.03 - 2024.02",
    title: "컴퓨터과학전공 학생회(총무)",
    category: "Projects & 동아리",
  },
  { period: "2022.03", title: "상명대학교 컴퓨터과학전공 입학", category: "수상 & 자격" },
];

export default function Timeline() {
  return (
    <section id="timeline" className={styles.timeline}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>TIMELINE • 연혁</p>
          <h2 className={styles.title}>2022년부터 지금까지</h2>
        </header>
        <ul className={styles.list}>
          {TIMELINE.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
