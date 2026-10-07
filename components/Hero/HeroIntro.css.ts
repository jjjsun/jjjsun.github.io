import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const intro = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[24],
  padding: `${vars.space[24]} ${vars.layout.pageX} ${vars.space[72]}`,
  textAlign: "center",
});

export const label = style({
  fontSize: vars.font.size.titleM,
  letterSpacing: vars.font.letterSpacing.label,
  color: vars.color.brand.primary,
});

export const title = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: `clamp(${vars.space[12]}, 1.5vw, ${vars.space[24]})`,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.tight,
});

export const name = style({
  fontSize: vars.font.size.displayXl,
  letterSpacing: vars.font.letterSpacing.tight,
});

export const nameEn = style({
  fontSize: vars.font.size.displayL,
  letterSpacing: vars.font.letterSpacing.heading,
  background: vars.gradient.nameText,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
});

export const school = style({
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.normal,
  color: vars.color.text.secondary,
  textWrap: "balance",
});

export const scrollHint = style({
  "position": "absolute",
  "left": 0,
  "right": 0,
  "bottom": vars.space[24],
  "textAlign": "center",
  "fontSize": vars.font.size.sm,
  "fontWeight": vars.font.weight.semibold,
  "letterSpacing": vars.font.letterSpacing.label,
  "color": vars.color.text.secondary,
  "@media": {
    [mobile]: { display: "none" },
  },
});

//TODO: 스크롤 바운스 줄 곳
export const scrollArrow = style({
  display: "inline-block",
});
