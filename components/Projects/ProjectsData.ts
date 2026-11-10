import { IProject } from "./types";

export const PROJECTS: IProject[] = [
  {
    name: "WhereYouAd",
    period: "2025.11 - 2026.09",
    org: "2026 졸업프로젝트",
    summary: "온라인 광고 성과 모니터링/분석 B2B 웹 플랫폼",
    metric: "상명창업아이디어 경진대회 대상 • 모두의 창업 1기 1라운드 진출",
    role: "Team Leader • Frontend Developer",
    team: "FE 3명 • BE 3명",
    contributions: [
      "팀 리더: 기획•개발 방향 설정, 팀원 역할분담, 회의 주도, 교수님 월말 면담 준비 및 발표",
      "대외 소통: 교내외 활동 발표와 외부 의사소통, 졸업프로젝트•대외활동 행정 및 서류처리",
      "워크스페이스•멤버 관리 기능: 생성/수정/삭제, 초대 메일, 권한 변경",
      "ADMIN/MEMBER 권한 분기(RBAC): 워크스페이스별 역할에 따라 메뉴•라우트 접근 제어",
      "알림•설정: 내 알림, 팀원 알림 현황, Slack/Discord 설정, 브라우저 푸시 구독, 개인 정보 수정 및 회원탈퇴",
      "타임라인: 타임라인 바, 성과 요약 패널, 일별 추이 차트(ApexCharts), AI요약 연동",
    ],
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "ApexCharts",
      "Storybook",
      "Tanstack Query",
      "Agile 방법론(Scrum)",
    ],
    description:
      "마케터가 온라인의 여러 채널에 흩어진 광고 성과를 대시보드를 통해 모니터링하고 분석가능한 B2B 웹 플랫폼입니다.",
    links: [
      { label: "GitHub", href: "https://github.com/jjjsun/WhereYouAd-Frontend", icon: "github" },
      { label: "LIVE DEMO", href: "https://www.whereyouad.com/", icon: "demo" },
    ],
    troubleshootings: [
      {
        title: "처음 구현한 브라우저 푸시, 화면 밖 코드 구현",
        problem:
          "브라우저 푸시는 처음 구현해 보는 기능이라 Service Worker가 어떻게 동작하는지 감이 없었습니다. 설정 상태값을 변경하면 알림이 오는 것이라고 생각했는데, 실제로는 알림 권한, Service Worker, VAPID 키, 서버에 등록하는 구독 정보가 각각 따로 필요했습니다.",
        reason:
          "Service Worker와 구독은 React 화면과 별개로 브라우저가 관리하는 상태입니다. Service Worker는 이벤트 처리가 끝났다고 판단되면 스스로 종료하고, 등록되어 있다는 보장도 없습니다. 이부분을 화면 안의 state처럼 생각하고 코드를 짜고 있었습니다.",
        solution:
          "구조를 하나씩 이해하면서 고쳤습니다. 토글은 화면 값만 바꾸고 구독은 저장 버튼을 눌렀을 때만 바꾸도록 나눴고, 알림을 띄우는 비동기 코드는 Promise로 넘겨서 Service Worker가 도중에 종료되지 않게 했으며, Service Worker가 없는 경우에도 설정 저장이 멈추지 않도록 확인하는 방식으로 바꿨습니다.",
        result:
          "푸시 구독부터 알림 표시, 열린 탭의 알림 목록 갱신까지 흐름을 완성했습니다. 화면 밖에서 도는 코드는 화면 state와는 다른 규칙으로 움직인다는걸 새로 배웠습니다.",
      },
      {
        title: "팀장으로서 10개월 장기 프로젝트의 팀 체계 구축",
        problem:
          "첫 팀 리더를 맡았고, 팀원 모두 첫 장기 프로젝트였습니다. 10개월동안 서로를 믿고 서비스를 완성하기 위해서는 함께 지킬 규칙이 필요했습니다.",
        reason:
          "규칙 없이 각자 개발하면 막힌 부분이나 피드백이 늦게 나타나고, 기간이 길수록 팀원간의 진행 속도 차이도 벌어진다고 생각했습니다. 팀원 모두 처음이기에 서로의 선을 지키기 위한 기준이 먼저 필요했습니다.",
        solution:
          "이슈에 빠르게 대응하고 피드백 보완을 위해 2주 스프린트와 주2회 스크럼을 도입했습니다. 스크럼에서는 각자의 개발 현황을 공유하도록 이끌었습니다.",
        result:
          "개발 현황을 꾸준히 공유하여 최종 마감 안에 서비스를 완성했습니다. 이 서비스로 상명창업아이디어 경진대회 대상, 모두의 창업 1기 선정이라는 성과를 냈습니다.",
      },
    ],
    retrospective: {
      learned:
        "리더를 맡으며 제 강점이 어디서 나오는지 알게 되었습니다. 앞에서 끌기보다는 뒤에서 받쳐 주는 방식이 저와 더 잘 맞았습니다. 팀원들이 개발에만 집중할 수 있도록 그 이외의 일을 맡아 진행할 때 가장 힘이 났고, 발표에서도 저만의 강점을 발견했습니다. \n프론트엔드 개발자로서는 모르는 내용을 직접 찾아 이해하고 적용한 뒤, 다른 작업에서 다시 쓰는 과정에서 개발의 흥미를 느꼈습니다.\n기획부터 디자인, 개발, 팀 리딩까지 경험하며 프로젝트 전체 과정을 알게 되었습니다. 특히 타겟인 마케터의 사용 후기와 인터뷰를 들으며 어떻게 하면 사용자의 불편함을 해결할 수 있을지 가장 많이 고민했습니다. 또 기획이 탄탄하지 않으면 개발 단계에서 그만큼, 때로는 그 이상의 시간이 든다는 것을 깨달았습니다.",
      apply:
        "기능을 만들기 전에 이게 왜 필요한지, 어떤 문제를 실제로 해결하는지부터 질문하겠습니다.\n기획은 작은 부분까지 세세하게 정하고 개발에 들어가, 전체 소요시간을 줄이겠습니다. \n리더가 아니더라도 내가 만약 리더라면 팀을 어떻게 이끌지 생각하고, 놓치는 부분을 먼저 챙기는 팀원이 되겠습니다.",
    },
    videoUrl: "https://www.youtube.com/embed/6DUy4zXI37I",
    thumbnail: "/images/whereyouad.png",
  },
  {
    name: "Eatsfine",
    period: "2026.01 - 2026.02",
    org: "UMC IT 연합동아리",
    summary: "지도 기반 레스토랑 자리 예약 웹 서비스",
    metric: "검색부터 결제까지 이어지는 예약 서비스 구현",
    role: "Frontend Leader",
    team: "PM 1명 • BE 5명 • FE 3명",
    contributions: [
      "FE Lead: 프론트엔드 개발 방향 및 구현 과정 조율, 팀원 간 개발 진행 관리",
      "식당 검색 • 상세: 검색 페이지, 카카오맵 마커 연동, 식당 상세 모달",
      "예약 플로우 : 예약 정보 입력, 메뉴 선택, 예약 확인 단계별 모달과 예약 API 연동",
      "토스 결제: 결제 모달부터 결제 성공, 예약 완료 화면까지 연결",
      "마이페이지 • 설정: 내 정보 조회, 수정, 비밀번호 변경, 회원 탈퇴, 설정 화면",
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Tanstack Query"],
    description:
      "사용자가 식당 정보를 탐색하고 원하는 매장을 예약할 수 있는 식당 예약 서비스입니다. 식당 상세 정보부터 예약 메뉴 선택, 예약 확인, 토스 결제, 예약 완료까지 이어지는 예약 및 결제 플로우를 제공합니다.",
    links: [
      { label: "GitHub", href: "https://github.com/Eatsfine/FE", icon: "github" },
      {
        label: "LIVE DEMO",
        href: "https://www.eatsfine.co.kr",
        icon: "demo",
        disabledReason: "현재 서버를 운영하지 않습니다.",
      },
    ],
    troubleshootings: [
      {
        title: "여러 모달로 이어진 예약 정보 유지",
        problem:
          "예약은 상세 모달에서 시작해 예약 정보 입력, 메뉴 선택, 확인, 결제까지 모달 여러 개를 거칩니다. 각 모달은 자기 입력값을 따로 들고 있어서, 다음 단계로 넘어가거나 이전 단계로 돌아올때 값이 이어지지 않았습니다.",
        reason:
          "모달마다 컴포넌트가 달라 입력값이 각자 state에 흩어져 있었고, 모달이 닫히면 그 값도 같이 사라지는 구조였습니다.",
        solution:
          "예약 정보를 상위 SearchPage에서 draft 하나로 관리하도록 바꿨습니다. 각 모달은 draft를 props로 받고, 다음 단계로 갈 때 값을 올려 보냅니다. 이전 단계로 돌아가면 저장된 draft로 입력값 상태를 복원하고, 다른 식당을 선택하면 draft를 초기화했습니다.",
        result:
          "상세 정보 확인부터 메뉴 선택, 예약 확인, 결제까지 단계를 이동해도 선택 정보가 유지되는 예약 플로우를 완성했습니다.",
      },
    ],
    retrospective: {
      learned:
        "FE 리더로서 팀원들의 구현 진행을 살피며 팀 단위로 개발하는 과정을 경험했습니다. 상세 정보부터 예약, 메뉴 선택, 결제까지 이어지는 핵심 흐름을 만들면서 여러 화면의 상태가 서로 연결되는 구조를 직접 설계했습니다. 토스페이먼츠를 연동하며 외부 결제 시스템이 프론트엔드와 이어지는 과정도 새로 익히게 되었습니다.",
      apply:
        "기능을 만들 때 화면만 보는 것이 아니라 사용자의 시선에서 흐름 전체를 먼저 그려보는 과정을 거치겠습니다. 여러 단계로 이어지는 기능은 중간에 나가거나 실패하는 경우가 있어 예외 처리까지 미리 체크하여 설계하겠습니다.",
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
        "TailwindCSS는 요소를 만들면서 바로 className으로 스타일링을 쓸 수 있어서 빠르지만, 마크업과 스타일링이 하나의 파일에 같이 있어서 코드가 길어지고 수정할때 여러 곳을 일일이 고치는 단점이 있었습니다. \n반면에 vanilla-extract는 스타일링을 css.ts로 분리해서 요소 코드에서는 className만 불러 쓰면 되기에 유지보수는 더 간편했습니다. 하지만 컴포넌트마다 css.ts 파일을 만들어야하기 때문에 파일 수가 늘어난다는 점이 번거로웠습니다.",
      apply:
        "어떤 스타일링을 쓰든, 기획 단계에서 디자인 토큰을 먼저 정의하고 그 안에서만 쓰는 것이 일관성과 유지보수를 위해 가장 중요하다고 느꼈습니다. 이후 프로젝트 개발에서도 코드 개발 전 토큰부터 정리하고 시작하려 합니다.",
    },
    videoUrl: "https://www.youtube.com/embed/uhc24gDsxKU",
    thumbnail: "/images/portfolio.png",
  },
];
