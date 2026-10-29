import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

import { TTimelineFilter } from "./TimelineItem";

const FILTER_GRANDIENT: Record<TTimelineFilter, string> = {
  "All": vars.color.category.all.gradient,
  "Projects & 활동": vars.color.category.projects.gradient,
  "수상 & 자격": vars.color.category.awards.gradient,
  "Work": vars.color.category.work.gradient,
};

export const indicatorColor = styleVariants(FILTER_GRANDIENT, (gradient) => ({
  background: gradient,
}));

export const tabs = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[4],
  padding: vars.space[4],
  borderRadius: vars.radius.pill,
  background: vars.gradient.pillSurface,
  boxShadow: vars.shadow.sm,
});

export const tab = style({
  position: "relative",
  padding: `${vars.space[8]} ${vars.space[16]}`,
  border: 0,
  borderRadius: vars.radius.pill,
  background: "transparent",
  font: "inherit",
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.body,
  cursor: "pointer",
  transition: "color .35s ease",
  selectors: {
    "&[aria-pressed='true']": {
      color: vars.color.bg.surface,
    },
  },
});

export const indicator = style({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  borderRadius: vars.radius.pill,
  boxShadow: vars.shadow.xs,
});

export const label = style({
  position: "relative",
  zIndex: 1,
});
