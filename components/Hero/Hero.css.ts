import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

//CSS랑 GSAP가 같은 조건 쓰도록 공유
export const PINNED_QUERY = `(min-width: ${parseInt(breakpoint.mobile, 10) + 1}px) and (prefers-reduced-motion: no-preference)`;

const pinned = `screen and ${PINNED_QUERY}`;

export const hero = style({
  "position": "relative",
  "@media": {
    [pinned]: { height: "100vh", overflow: "hidden" },
  },
});

export const sky = style({
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
  //블롭이 Hero경계에서 직선으로 잘려서 경계선처럼 보이는거 차단하기 위해 페이드 추가
  maskImage: "linear-gradient(to bottom, transparent, black 20%, black 70%, transparent)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 70%, transparent)",
});

const blob = style({
  position: "absolute",
  borderRadius: vars.radius.circle,
  filter: `blur(${vars.blur.heroBlob})`,
});

export const blob1 = style([
  blob,
  {
    left: "52%",
    top: "-12%",
    width: "62vw",
    height: "78vh",
    background: `radial-gradient(closest-side, ${vars.gradient.heroBlob1}, transparent)`,
  },
]);

export const blob2 = style([
  blob,
  {
    left: "-12%",
    top: "38%",
    width: "70vw",
    height: "88vh",
    background: `radial-gradient(closest-side, ${vars.gradient.heroBlob2}, transparent)`,
  },
]);

export const blob3 = style([
  blob,
  {
    left: "58%",
    top: "48%",
    width: "57vw",
    height: "80vh",
    background: `radial-gradient(closest-side, ${vars.gradient.heroBlob3}, transparent)`,
  },
]);

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
