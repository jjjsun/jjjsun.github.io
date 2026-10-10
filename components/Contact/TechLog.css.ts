import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const techLogs = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[24],
});

export const header = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: vars.space[16],
});

export const label = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  letterSpacing: vars.font.letterSpacing.label,
  color: vars.color.brand.primary,
});

export const button = style({
  "display": "inline-flex",
  "alignItems": "center",
  "gap": vars.space[12],
  "padding": `${vars.space[4]} ${vars.space[4]} ${vars.space[4]} ${vars.space[20]}`,
  "borderRadius": vars.radius.pill,
  "fontSize": vars.font.size.sm,
  "fontWeight": vars.font.weight.medium,
  "color": vars.color.text.strong,
  "whiteSpace": "nowrap",
  "textDecoration": "none",
  "background": vars.gradient.pillSurface,
  "boxShadow": vars.shadow.pill,
  "transition": `background ${vars.motion.duration.base}, box-shadow ${vars.motion.duration.base}`,
  ":hover": {
    background: vars.gradient.pillSurfaceHover,
    boxShadow: vars.shadow.pillHover,
  },
});

export const buttonIcon = style({
  display: "grid",
  placeItems: "center",
  width: "30px",
  height: "30px",
  borderRadius: vars.radius.circle,
  fontSize: vars.font.size.md,
  color: vars.color.bg.surface,
  background: vars.gradient.brand,
});

export const list = style({
  "position": "relative",
  "display": "flex",
  "flexDirection": "column",
  "listStyle": "none",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: vars.gradient.borderFade,
  },
});
