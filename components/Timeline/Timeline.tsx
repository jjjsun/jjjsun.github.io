import * as styles from "./Timeline.css";
import TimelineItem, { ITimelineItem } from "./TimelineItem";

const TIMELINE: ITimelineItem[] = [
  { period: "2026.09", title: "TOEIC Speaking IH 취득", category: "수상 & 자격" },
  { period: "2026.05 - 2026.08", title: "모두의 창업 1기 선정", category: "수상 & 자격" },
  { period: "2026.05", title: "정보처리기사 필기 합격", category: "수상 & 자격" },
  { period: "2026.05", title: "상명 창업아이디어경진대회 대상(PT발표)", category: "수상 & 자격" },
  { period: "2026.01 - 2026.02", title: "Eatsfine 프로젝트", category: "Projects & 활동" },
  { period: "2025.12", title: "WISET 올해의 멘티상(이사장상)", category: "수상 & 자격" },
  { period: "2025.11 - 2026.09", title: "WhereYouAd 프로젝트", category: "Projects & 활동" },
  {
    period: "2025.09 - 2026.02",
    title: "UMC IT 연합동아리(Frontend)",
    category: "Projects & 활동",
  },
  {
    period: "2025.04 - 2025.10",
    title: "2025 WISET-해커스페이스 취업탐색 멘토링",
    category: "Projects & 활동",
  },
  {
    period: "2025.03 - 2026.02",
    title: "두산베어스 야구직관 동아리 잠실의 주인(집행부)",
    category: "Projects & 활동",
  },
  { period: "2024.02 - 2025.02", title: "스타벅스 국회의사당역점 바리스타", category: "Work" },
  {
    period: "2023.02 - 2024.01",
    title: "메가커피 대흥역점 주말 오픈 아르바이트",
    category: "Work",
  },
  { period: "2022.08 - 2023.02", title: "수학학원 고1/고2 질의응답 조교", category: "Work" },
  { period: "2022.07 - 2023.01", title: "설빙 마포공덕점 주말 마감 아르바이트", category: "Work" },
  { period: "2022.06", title: "SM Learning Fair 수상", category: "수상 & 자격" },
  {
    period: "2022.03 - 2024.02",
    title: "컴퓨터과학전공 학생회(총무)",
    category: "Projects & 활동",
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
