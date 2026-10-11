import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const skills = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[24],
});

export const divider = style({
  border: 0,
  height: "1px",
  background: vars.color.border.base,
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const row = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: `${vars.space[4]} ${vars.space[24]}`,
});

export const label = style({
  "flex": "none",
  "width": "120px",
  "fontSize": vars.font.size.sm,
  "fontWeight": vars.font.weight.semibold,
  "color": vars.color.text.muted,
  "@media": {
    [mobile]: { width: "100%" },
  },
});

export const text = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.strong,
});
