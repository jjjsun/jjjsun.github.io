import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

import { TECH } from "./constants";

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[8],
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[8],
  padding: `${vars.space[4]} ${vars.space[16]} ${vars.space[8]} ${vars.space[12]}`,
  borderRadius: vars.radius.pill,
  background: `color-mix(in srgb, ${vars.color.brand.pale} 40%, white)`,
  boxShadow: vars.shadow.pill,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.normal,
  color: vars.color.text.strong,
  whiteSpace: "nowrap",
});

export const glyph = style({
  flex: "none",
  width: "16px",
  height: "16px",
  marginTop: "1px",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "contain",
});

export const glyphOf = styleVariants(TECH, ({ icon, color }) => ({
  backgroundColor: color,
  maskImage: `url("/icons/tech/${icon}.svg")`,
}));
