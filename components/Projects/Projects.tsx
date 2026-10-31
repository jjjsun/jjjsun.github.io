import ProjectCard, { IProject } from "./ProjectCard";
import * as styles from "./Projects.css";
import ProjectsPin from "./ProjectsPin";

const PROJECTS: IProject[] = [
  {
    name: "WhereYouAd",
    period: "2025.11 - 2026.09",
    org: "2026 졸업프로젝트",
    summary: "온라인 광고 성과 모니터링/분석 B2B 웹 플랫폼",
    metric: "워크스페이스 • 알림 • 타임라인 FE 개발 + 팀 리딩",
    role: "Team Leader, Frontend",
    stack: ["React", "TypeScript", "TailwindCSS", "ApexCharts", "Storybook"],
    description:
      "마케터가 흩어진 광고 성과를 한곳에서 모니터링하고 분석할 수 있는 B2B 웹 플랫폼입니다. 팀 리더로서 일정 관리, 의견 조율, 발표를 맡았고, 프론트엔드에서는 워크스페이스, 알림, 설정, 타임라인 화면을 개발했습니다. 처음 써 보는 Service Worker로 탭을 닫아도 울리는 브라우저 푸시 알림을 구현했습니다. 이때 설정 토글이 켜진 것과 브라우저가 실제로 구독된 것은 다른 상태라는 점을 알고, 저장할 때만 구독이 반영되게 나눴습니다.",
    videoUrl: "https://www.youtube.com/embed/6DUy4zXI37I",
    thumbnail: "/images/whereyouad.png",
  },
  {
    name: "Eatsfine",
    period: "2026.01 - 2026.02",
    org: "UMC IT 연합동아리",
    summary: "지도 기반 레스토랑 자리 예약 웹 서비스",
    metric: "식당 검색부터 예약 • 결제까지 사용자 흐름 전담 + FE 리딩",
    role: "Frontend Leader",
    stack: ["React", "TypeScript", "TailwindCSS", "Shadcn/ui", "Tanstack Query"],
    description:
      "지도에서 식당을 찾아 예약하는 웹 서비스입니다. 프론트엔드 리더로서 식당 검색부터 메뉴, 시간, 자리 선택, 결제, 결제 확인까지 이어지는 사용자 흐름 전체를 맡아 개발했습니다.",
    videoUrl: "https://www.youtube.com/embed/Nk1_28zSJaQ",
    thumbnail: "/images/eatsfine.png",
  },
  {
    name: "개인 포트폴리오",
    period: "2026.09 - 2026.10",
    org: "개인 프로젝트",
    summary: "지금 보고 계신 이 사이트입니다",
    metric: "반응형 기반 포트폴리오 구현",
    role: "기획 • 디자인 • 개발 전체",
    stack: ["Next.js", "TypeScript", "vanilla-extract", "GSAP", "Motion"],
    description: "보고 계신 이 사이트입니다",
    videoUrl: "https://www.youtube.com/embed/a", //임시.  개발완료 후 실제 URL로 교체 예정
    thumbnail: "/images/portfolio.png",
  },
];

export default function Projects() {
  return (
    <ProjectsPin
      names={PROJECTS.map((project) => project.name)}
      header={
        <header className={styles.header}>
          <p className={styles.label}>PROJECTS • 프로젝트</p>
          <h1 className={styles.title}>코드로 남긴 이야기</h1>
        </header>
      }
    >
      {PROJECTS.map((project, index) => (
        <li key={project.name} className={styles.item}>
          <ProjectCard project={project} index={index} total={PROJECTS.length} />
        </li>
      ))}
    </ProjectsPin>
  );
}
