import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

import { PINNED_QUERY } from "../Hero/Hero.css";

const pinned = `screen and ${PINNED_QUERY}`;

export const projects = style({
  "background": vars.color.bg.page,
  "padding": `${vars.layout.sectionY} ${vars.layout.pageX}`,
  "@media": {
    [pinned]: {
      boxSizing: "border-box",
      height: "100vh",
      paddingTop: vars.layout.headerHeight,
      paddingBottom: vars.space[40],
    },
  },
});

export const container = style({
  "display": "flex",
  "flexDirection": "column",
  "gap": vars.layout.sectionGap,
  "maxWidth": vars.layout.container,
  "margin": "0 auto",
  "@media": {
    [pinned]: {
      height: "100%",
      justifyContent: "center",
      gap: vars.space[32],
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[16],
});

export const label = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  letterSpacing: vars.font.letterSpacing.label,
  color: vars.color.brand.primary,
});

export const title = style({
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.heading,
  color: vars.color.text.strong,
});

export const nav = style({
  "display": "none",
  "@media": {
    [pinned]: {
      display: "flex",
      flexWrap: "wrap",
      gap: vars.space[56],
    },
  },
});

export const navButton = style({
  display: "inline-flex",
  alignItems: "baseline",
  gap: vars.space[4],
  padding: 0,
  border: "none",
  background: "none",
  fontFamily: "inherit",
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.disabled,
  cursor: "pointer",
  transition: `color ${vars.motion.duration.fast} ${vars.motion.easing.out}`,
  selectors: {
    "&:hover": { color: vars.color.text.body },
    '&[aria-current="true"]': { color: vars.color.text.strong },
  },
});

export const navOrder = style({
  fontWeight: vars.font.weight.bold,
  letterSpacing: vars.font.letterSpacing.eyebrow,
  color: vars.color.brand.primary,
});

export const list = style({
  "display": "flex",
  "flexDirection": "column",
  "gap": vars.layout.sectionGap,
  "listStyle": "none",
  "@media": {
    [pinned]: {
      display: "grid",
      alignItems: "center",
      gap: 0,
    },
  },
});

// 애니메이션 구현에서 겹침 배치(pin 스크롤)로 바꿀 때 list/item만 수정
export const item = style({
  "@media": {
    [pinned]: {
      gridArea: "1 / 1",
      selectors: {
        //첫 카드 외에는 JS(GSAP)가 켜기 전까지 숨겨서 겹침 깜빡이 방지
        "&:not(:first-child)": {
          opacity: 0,
          visibility: "hidden",
        },
      },
    },
  },
});
