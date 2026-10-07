import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const timeline = style({
  background: vars.color.bg.page,
  padding: `${vars.layout.sectionY} ${vars.layout.pageX}`,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[40],
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
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.heading,
  color: vars.color.text.heading,
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
});
