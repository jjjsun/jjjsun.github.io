import { IProject } from "./types";

export const PROJECTS: IProject[] = [
  {
    name: "WhereYouAd",
    period: "2025.11 - 2026.09",
    org: "2026 졸업프로젝트",
    summary: "온라인 광고 성과 모니터링/분석 B2B 웹 플랫폼",
    metric: "워크스페이스 • 알림 • 타임라인 FE 개발 + 팀 리딩",
    role: "Team Leader, Frontend",
    team: "example",
    contributions: ["a", "b"],
    stack: ["React", "TypeScript", "TailwindCSS", "ApexCharts", "Storybook"],
    description:
      "마케터가 흩어진 광고 성과를 한곳에서 모니터링하고 분석할 수 있는 B2B 웹 플랫폼입니다. 팀 리더로서 일정 관리, 의견 조율, 발표를 맡았고, 프론트엔드에서는 워크스페이스, 알림, 설정, 타임라인 화면을 개발했습니다. 처음 써 보는 Service Worker로 탭을 닫아도 울리는 브라우저 푸시 알림을 구현했습니다. 이때 설정 토글이 켜진 것과 브라우저가 실제로 구독된 것은 다른 상태라는 점을 알고, 저장할 때만 구독이 반영되게 나눴습니다.",
    links: [
      { label: "GitHub", href: "aa", icon: "github" },
      { label: "LIVE DEMO", href: "bb", icon: "demo" },
    ],
    techChoices: [
      {
        tech: "ApexCharts",
        reason: "reason",
      },
      { tech: "TailwindCSS", reason: "reason" },
    ],
    troubleshootings: [
      {
        title: "aexample",
        problem: "a",
        reason: "a",
        solution: "a",
        result: "a",
      },
    ],
    retrospective: {
      learned: "a",
      apply: "a",
    },
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
    team: "example",
    contributions: ["a", "b"],
    stack: ["React", "TypeScript", "TailwindCSS", "Shadcn/ui", "Tanstack Query"],
    description:
      "지도에서 식당을 찾아 예약하는 웹 서비스입니다. 프론트엔드 리더로서 식당 검색부터 메뉴, 시간, 자리 선택, 결제, 결제 확인까지 이어지는 사용자 흐름 전체를 맡아 개발했습니다.",
    links: [
      { label: "GitHub", href: "cc", icon: "github" },
      { label: "LIVE DEMO", href: "dd", icon: "demo" },
    ],
    techChoices: [
      {
        tech: "ApexCharts",
        reason: "reason",
      },
      { tech: "TailwindCSS", reason: "reason" },
    ],
    troubleshootings: [
      {
        title: "aexample",
        problem: "a",
        reason: "a",
        solution: "a",
        result: "a",
      },
    ],
    retrospective: {
      learned: "a",
      apply: "a",
    },
    videoUrl: "https://www.youtube.com/embed/Nk1_28zSJaQ",
    thumbnail: "/images/eatsfine.png",
  },
  {
    name: "개인 포트폴리오",
    period: "2026.10 - 2026.11",
    org: "개인 프로젝트",
    summary: "지금 보고 계신 이 사이트입니다",
    metric: "반응형 기반 포트폴리오 구현",
    role: "기획 • 디자인 • 개발 전체",
    team: "1인 (개인 프로젝트)",
    contributions: [
      "Next.js와 TypeScript 기반 개발 환경 구축",
      "ESLint, Prettier, Husky, Github Actions로 코드 품질 관리",
      "vanilla-extract로 CSS 모듈화",
      "GSAP와 Motion으로 애니메이션 구현",
      "반응형 기반 포트폴리오 구현",
      "GitHub Pages로 자동배포",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "vanilla-extract",
      "GSAP",
      "Motion",
      "Github Pages",
      "Github Actions",
    ],
    description:
      "Frontend Developer 박재선의 소개 포트폴리오 사이트입니다. 개발 경험과 같이 어떤 개발자인지 확인할 수 있습니다.",
    links: [
      { label: "GitHub", href: "https://github.com/jjjsun/jjjsun.github.io", icon: "github" },
      { label: "LIVE DEMO", href: "https://jjjsun.github.io/", icon: "demo" },
    ],
    techChoices: [
      {
        tech: "Next.js",
        reason:
          "지금까지 React만 사용했어서 새로운 프레임워크를 써보고 싶어 선택했습니다. Server Component와 Client Component를 나눠 쓰면서 렌더링 방식의 차이점을 직접 경험하고 싶었습니다.",
      },
      {
        tech: "TypeScript",
        reason:
          "JavaScript에 타입 정의로 런타임 전에 오류를 잡고, 코드의 안정성을 확보하기 위해 선택했습니다.",
      },
      {
        tech: "vanilla-extract",
        reason:
          "지금까지 TailwindCSS만 써 와서, 다른 스타일링 방식과 비교해보고 싶어 선택했습니다. 두 방식의 장단점을 직접 경험하는 것이 목표였습니다.",
      },
      {
        tech: "GSAP",
        reason:
          "다른 사이트에서 만들고 싶은 연출을 발견하여 개발자 도구로 확인해 보니 GSAP를 사용하고 있어 직접 적용하고 싶어 선택했습니다.",
      },
      {
        tech: "Motion",
        reason:
          "애니메이션이 처음이라 React 컴포넌트에서 쉽게 시작할 수 있는 라이브러리로 선택했습니다.",
      },
      {
        tech: "Github Actions",
        reason: "PR 병합 전 lint 검사 자동 실행으로 코드 품질을 유지하기 위해 선택했습니다.",
      },
      {
        tech: "Github Pages",
        reason:
          "코드 관리에 Github 사용중이어서, main에 push하면 바로 배포까지 이어지는 간편함 때문에 선택했습니다.",
      },
    ],
    troubleshootings: [
      {
        title: "스크롤 핀 구간에서 활성 카드가 화면과 어긋나는 문제",
        problem:
          "Projects 섹션에서 스크롤을 빠르게 움직이면, 화면에는 이전 카드가 보이는데 이미 다음 카드가 활성 상태가 되어있었습니다. 이전 카드는 클릭과 포커스가 막히고, nav 번호도 먼저 바뀌어 있었습니다.",
        reason:
          "활성 카드를 스크롤 진행도로 계산했는데, scrub: 1 설정 때문에 애니메이션은 스크롤을 약 1초 늦게 따라갑니다. 그래서 스크롤 위치와 화면에 그려진 위치가 달랐고, 상태가 화면보다 앞서갔습니다.",
        solution:
          "스크롤 진행도 대신 타임라인의 실제 진행도를 기준으로, 타임라인의 onUpdate 콜백에서 활성 카드를 계산하도록 바꿨습니다.",
        result: "화면에 보이는 카드, 클릭이 가능한 카드, nav 표시가 항상 일치하게 되었습니다.",
      },
    ],
    retrospective: {
      learned:
        "TailwindCSS는 요소를 만들면서 바로 className으로 스타일링을 쓸 수 있어서 빠르지만, 마크업과 스타일링이 하나의 파일에 같이 있어서 코드가 길어지고 수정할때 여러 곳을 일일이 고치는 단점이 있었습니다. 반면에 vanilla-extract는 스타일링을 css.ts로 분리해서 요소 코드에서는 className만 불러 쓰면 되기에 유지보수는 더 간편했습니다. 하지만 컴포넌트마다 css.ts 파일을 만들어야하기 때문에 파일 수가 늘어난다는 점이 번거로웠습니다.",
      apply:
        "어떤 스타일링을 쓰든, 기획 단계에서 디자인 토큰을 먼저 정의하고 그 안에서만 쓰는 것이 일관성과 유지보수를 위해 가장 중요하다고 느꼈습니다. 이후 프로젝트 개발에서도 코드 개발 전 토큰부터 정리하고 시작하려 합니다.",
    },
    videoUrl: "https://www.youtube.com/embed/a", //임시.  개발완료 후 동영상 제작하여 실제 URL로 교체 예정
    thumbnail: "/images/portfolio.png",
  },
];
