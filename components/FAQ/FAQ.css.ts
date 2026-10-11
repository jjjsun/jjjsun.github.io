import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const faq = style({
  background: vars.gradient.faq,
  padding: `${vars.layout.sectionY} ${vars.layout.pageX}`,
});

export const container = style({
  "display": "grid",
  "gridTemplateColumns": "minmax(0, 1fr) minmax(0, 1fr)",
  "gap": `${vars.space[48]} ${vars.space[72]}`,
  "alignItems": "start",
  "maxWidth": vars.layout.container,
  "margin": "0 auto",
  "@media": {
    [mobile]: {
      gridTemplateColumns: "minmax(0, 1fr)",
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
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.heading,
  color: vars.color.text.heading,
});

export const description = style({
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.relaxed,
  color: vars.color.text.secondary,
});

export const list = style({
  listStyle: "none",
  borderTop: `1px solid ${vars.color.border.base}`,
});
