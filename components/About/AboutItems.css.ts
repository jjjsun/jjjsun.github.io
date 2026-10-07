import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.layout.aboutItemGap,
  listStyle: "none",
});

export const item = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: `${vars.space[8]} ${vars.space[24]}`,
});

export const label = style({
  "flex": "none",
  "width": "150px",
  "fontSize": vars.font.size.md,
  "fontWeight": vars.font.weight.semibold,
  "color": vars.color.text.muted,
  "@media": {
    [mobile]: { width: "100%" },
  },
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: vars.space[8],
  minWidth: "min(100%, 280px)",
});

export const big = style({
  alignSelf: "flex-start",
  fontSize: vars.font.size.lead,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.snug,
  letterSpacing: vars.font.letterSpacing.tight,
  color: vars.color.text.strong,
  textWrap: "pretty",
});

export const fact = style({
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.secondary,
  textWrap: "pretty",
});

export const src = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.subtle,
});
