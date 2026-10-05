import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const title = style({
  color: vars.color.text,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  textShadow: vars.shadow.glow,
});

export const discription = style({
  color: vars.color.text,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  textShadow: vars.shadow.glow,
});
