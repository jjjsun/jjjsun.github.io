import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const section = style({
  position: "relative",
  height: "100vh",
  overflow: "hidden",
});

export const panel = style({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.text,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
});

export const after = style({
  height: "100vh",
});
