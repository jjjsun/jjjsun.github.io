import { style } from "@vanilla-extract/css";

import { breakpoint } from "@/styles/theme.css";

//CSS랑 GSAP가 같은 조건 쓰도록 공유
export const PINNED_QUERY = `(min-width: ${parseInt(breakpoint.mobile, 10) + 1}px) and (prefers-reduced-motion: no-preference)`;

const pinned = `screen and ${PINNED_QUERY}`;

export const hero = style({
  "position": "relative",
  "@media": {
    [pinned]: { height: "100vh", overflow: "hidden" },
  },
});

//원보다 위에 그려지도록  positioned 처리
export const content = style({
  "position": "relative",
  "@media": {
    [pinned]: { height: "100%" },
  },
});

//pin 모드에서만 Intro/Statement를 같은 자리에 겹침
export const introLayer = style({
  "@media": {
    [pinned]: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
});

//초기 y 오프셋은 GSAP fromTo가 담당, CSS는 깜빡임 방지용 opacity만
export const statementLayer = style([
  introLayer,
  {
    "@media": {
      [pinned]: { opacity: 0 },
    },
  },
]);
