import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const statement = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[40],
  padding: `${vars.space[24]} ${vars.layout.pageX} ${vars.layout.sectionY}`,
  textAlign: "center",
});

export const head = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[20],
});

export const title = style({
  fontSize: vars.font.size.heroTitle,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.heading,

  textWrap: "balance",
});

export const lead = style({
  maxWidth: "760px",
  fontSize: vars.font.size.titleM,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.body,
  textWrap: "pretty",
});

export const hanjaRow = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: `${vars.space[32]} ${vars.space[40]}`,
});

export const hanja = style({
  fontSize: vars.font.size.displayM,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.tight,
  letterSpacing: vars.font.letterSpacing.tight,
});

export const meanings = style({
  "display": "flex",
  "gap": vars.space[40],
  "listStyle": "none",
  "textAlign": "left",
  "@media": {
    [mobile]: { gap: vars.space[24] },
  },
});

export const meaning = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
});

export const bar = style({
  width: "28px",
  height: "2px",
  background: vars.color.brand.primary,
});

export const hun = style({
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.medium,
});

export const desc = style({
  fontSize: vars.font.size.sm,
  color: vars.color.text.secondary,
});

export const closing = style({
  fontSize: vars.font.size.lead,
  lineHeight: vars.font.lineHeight.normal,
});

export const accent = style({
  color: vars.color.brand.primary,
});
