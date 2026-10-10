import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const link = style({
  "position": "relative",
  "display": "grid",
  "gridTemplateColumns": "72px minmax(0, 1fr) auto 24px",
  "alignItems": "center",
  "gap": `${vars.space[12]} ${vars.space[32]}`,
  "padding": `${vars.space[24]} ${vars.space[8]}`,
  "borderRadius": vars.radius.lg,
  "color": vars.color.text.strong,
  "textDecoration": "none",
  "transition": `background ${vars.motion.duration.fast}, padding ${vars.motion.duration.fast}`,
  ":hover": {
    background: vars.color.bg.hover,
    paddingLeft: vars.space[16],
  },
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "1px",
    background: vars.gradient.borderFade,
  },
  "@media": {
    [mobile]: {
      gridTemplateColumns: "minmax(0, 1fr)",
    },
  },
});

export const number = style({
  fontSize: vars.font.size.metric,
  fontWeight: "300",
  lineHeight: vars.font.lineHeight.tight,
  letterSpacing: vars.font.letterSpacing.tight,
  color: vars.color.brand.dim,
  fontVariantNumeric: "tabular-nums",
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  minWidth: 0,
});

export const title = style({
  fontSize: vars.font.size.titleM,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.snug,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  textWrap: "pretty",
});

export const date = style({
  fontSize: vars.font.size.sm,
  color: vars.color.text.muted,
  fontVariantNumeric: "tabular-nums",
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: `${vars.space[4]} ${vars.space[12]}`,
});

export const tag = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.brand.primary,
});

export const hash = style({
  color: vars.color.brand.dim,
});

export const arrow = style({
  justifySelf: "end",
  fontSize: vars.font.size.xl,
  lineHeight: vars.font.lineHeight.tight,
  color: vars.color.brand.primary,
});
