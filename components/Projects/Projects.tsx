import Reveal from "@/components/Reveal/Reveal";

import ProjectCard, { IProject } from "./ProjectCard";
import * as styles from "./Projects.css";

const PROJECTS: IProject[] = [
  {
    name: "WhereYouAd",
    period: "2025.11 - 2026.09",
    org: "2026 졸업프로젝트",
    summary: "온라인 광고 성과 모니터링/분석 B2B 웹 플랫폼",
    metric: "워크스페이스 • 알림 • 타임라인 FE 개발 + 팀 리딩",
    role: "Team Leader, Frontend",
    stack: ["React", "TypeScript", "TailwindCSS", "ApexCharts", "Storybook"],
  },
  {
    name: "Eatsfine",
    period: "2026.01 - 2026.02",
    org: "UMC IT 연합동아리",
    summary: "지도 기반 레스토랑 자리 예약 웹 서비스",
    metric: "식당 검색부터 예약 • 결제까지 사용자 흐름 전담 + FE 리딩",
    role: "Frontend Leader",
    stack: ["React", "TypeScript", "TailwindCSS", "Shadcn/ui", "Tanstack Query"],
  },
  {
    name: "개인 포트폴리오",
    period: "2026.09 - 2026.10",
    org: "개인 프로젝트",
    summary: "지금 보고 계신 이 사이트입니다",
    metric: "반응형 기반 포트폴리오 구현",
    role: "기획 • 디자인 • 개발 전체",
    stack: ["Next.js", "TypeScript", "vanilla-extract", "GSAP", "Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Reveal className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>PROJECTS • 프로젝트</p>
          <h1 className={styles.title}>코드로 남긴 이야기</h1>
        </header>
        <ul className={styles.list}>
          {PROJECTS.map((project, index) => (
            <li key={project.name} className={styles.item}>
              <ProjectCard project={project} index={index} total={PROJECTS.length} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
