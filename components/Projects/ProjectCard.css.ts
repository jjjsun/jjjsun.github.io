import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const card = style({
  "display": "grid",
  "gridTemplateColumns": "5fr 7fr",
  "gap": vars.space[72],
  "alignItems": "center",
  "@media": {
    [mobile]: {
      gridTemplateColumns: "1fr",
      gap: vars.space[32],
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[16],
});

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: `${vars.space[4]} ${vars.space[12]}`,
  fontSize: vars.font.size.sm,
});

export const order = style({
  fontWeight: vars.font.weight.bold,
  letterSpacing: vars.font.letterSpacing.eyebrow,
  color: vars.color.brand.primary,
});

export const period = style({
  color: vars.color.text.muted,
});

export const name = style({
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.heading,
  color: vars.color.text.strong,
});

export const summary = style({
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.body,
});

export const metricBox = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  padding: `${vars.space[20]} 0`,
  borderTop: `1px solid ${vars.color.border.base}`,
  borderBottom: `1px solid ${vars.color.border.base}`,
});

export const metricLabel = style({
  fontSize: vars.font.size.xs,
  color: vars.color.text.muted,
});

export const metric = style({
  fontSize: vars.font.size.metric,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.tight,
  color: vars.color.brand.primary,
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
});

export const infoRow = style({
  display: "flex",
  alignItems: "baseline",
  gap: vars.space[24],
});

export const infoLabel = style({
  flex: "none",
  width: "72px",
  fontSize: vars.font.size.sm,
  color: vars.color.text.muted,
});

export const infoText = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.strong,
});

export const hint = style({
  fontSize: vars.font.size.xs,
  color: vars.color.text.subtle,
});

export const thumbnail = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: vars.space[4],
  aspectRatio: "16 / 10",
  padding: vars.space[20],
  borderRadius: vars.radius["2xl"],
  boxShadow: vars.shadow.lg,
  background: `repeating-linear-gradient(135deg, ${vars.color.bg.surface} 0 16px, ${vars.color.bg.sky400} 16px 32px)`,
});

export const thumbnailTag = style({
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.bold,
  letterSpacing: vars.font.letterSpacing.eyebrow,
  color: vars.color.brand.primary,
});

export const thumbnailCaption = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.text.heading,
});
