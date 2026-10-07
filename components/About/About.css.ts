import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const about = style({
  background: vars.gradient.about,
  padding: `${vars.layout.sectionY} ${vars.layout.pageX}`,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.layout.sectionGap,
  maxWidth: vars.layout.container,
  margin: "0 auto",
});

export const label = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  letterSpacing: vars.font.letterSpacing.label,
  color: vars.color.brand.primary,
});
