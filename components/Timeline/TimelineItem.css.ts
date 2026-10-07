import { createVar, style, styleVariants } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

import type { TTimelineCategory } from "./TimelineItem";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

const accent = createVar();

const CATEGORY_COLOR: Record<TTimelineCategory, string> = {
  "수상 & 자격": vars.color.category.awards.main,
  "Projects & 동아리": vars.color.category.projects.main,
  "Work": vars.color.category.work.main,
};

export const categoryColor = styleVariants(CATEGORY_COLOR, (color) => ({
  vars: { [accent]: color },
}));

export const item = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.space[16],
  padding: `${vars.space[20]} 0`,
  selectors: {
    // 항목 중앙에서 다음 항목 중앙까지 이어지는 세로선
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: `calc(${vars.space[16]} + ${vars.space[12]} / 2 - 1px)`,
      width: "2px",
      height: "100%",
      background: accent,
      opacity: 0.55,
    },
    "&:last-child::before": {
      display: "none",
    },
  },
});

export const dot = style({
  position: "relative",
  zIndex: 1,
  flex: "none",
  width: vars.space[12],
  height: vars.space[12],
  marginLeft: vars.space[16],
  borderRadius: vars.radius.circle,
  background: accent,
});

export const period = style({
  "flex": "none",
  "width": "150px",
  "fontSize": vars.font.size.sm,
  "fontWeight": vars.font.weight.semibold,
  "fontVariantNumeric": "tabular-nums",
  "color": accent,
  "@media": {
    [mobile]: {
      width: "92px",
    },
  },
});

export const body = style({
  "flex": 1,
  "minWidth": 0,
  "display": "flex",
  "flexDirection": "column",
  "gap": vars.space[4],
  "marginLeft": vars.space[32],
  "@media": {
    [mobile]: {
      marginLeft: 0,
    },
  },
});

export const title = style({
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.snug,
  color: vars.color.text.strong,
});

export const category = style({
  fontSize: vars.font.size.sm,
  lineHeight: vars.font.lineHeight.normal,
  color: vars.color.text.muted,
});
