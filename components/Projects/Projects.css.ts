import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const projects = style({
  background: vars.color.bg.page,
  padding: `${vars.layout.sectionY} ${vars.layout.pageX}`,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.layout.sectionGap,
  maxWidth: vars.layout.container,
  margin: "0 auto",
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

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.layout.sectionGap,
  listStyle: "none",
});

// 애니메이션 구현에서 겹침 배치(pin 스크롤)로 바꿀 때 list/item만 수정
export const item = style({});
