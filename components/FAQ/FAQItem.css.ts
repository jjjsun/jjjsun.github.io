import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

const ROW_COLUMNS = "36px minmax(0, 1fr) 28px";
const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";

export const item = style({
  borderBottom: `1px solid ${vars.color.border.base}`,
});

const isOpen = `${item}[data-open="true"] &`;

export const question = style({
  display: "grid",
  gridTemplateColumns: ROW_COLUMNS,
  alignItems: "baseline",
  gap: vars.space[8],
  width: "100%",
  padding: `${vars.space[24]} 0`,
  background: "none",
  border: "none",
  font: "inherit",
  fontWeight: vars.font.weight.medium,
  textAlign: "left",
  color: vars.color.text.strong,
  cursor: "pointer",
});

export const number = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.brand.primary,
});

export const questionText = style({
  fontSize: vars.font.size.titleM,
  lineHeight: vars.font.lineHeight.snug,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  textWrap: "pretty",
});

export const chevron = style({
  "justifySelf": "end",
  "alignSelf": "center",
  "width": "10px",
  "height": "10px",
  "marginRight": vars.space[4],
  "borderRight": `2px solid ${vars.color.brand.primary}`,
  "borderBottom": `2px solid ${vars.color.brand.primary}`,
  "transform": "translateY(3px) rotate(45deg)",
  "transition": `transform ${vars.motion.duration.base} ${vars.motion.easing.out}`,
  "selectors": {
    [isOpen]: { transform: "translateY(3px) rotate(225deg)" },
  },
  "@media": {
    [REDUCE_MOTION]: { transition: "none" },
  },
});

export const answerWrap = style({
  "display": "grid",
  "gridTemplateRows": "0fr",
  "transition": `grid-template-rows ${vars.motion.duration.medium} ${vars.motion.easing.out}`,
  "selectors": {
    [isOpen]: { gridTemplateRows: "1fr" },
  },
  "@media": {
    [REDUCE_MOTION]: { transition: "none" },
  },
});

export const answerClip = style({
  "minHeight": 0,
  "overflow": "hidden",
  "visibility": "hidden",
  "transition": `visibility 0s linear ${vars.motion.duration.medium}`,
  "selectors": {
    [isOpen]: { visibility: "visible", transition: "visibility 0s" },
  },
  "@media": {
    [REDUCE_MOTION]: { transition: "none" },
  },
});

export const answer = style({
  "display": "grid",
  "gridTemplateColumns": ROW_COLUMNS,
  "gap": vars.space[8],
  "paddingBottom": vars.space[32],
  "opacity": 0,
  "transform": "translateY(-8px)",
  "transition": `opacity ${vars.motion.duration.base} ${vars.motion.easing.out}, transform ${vars.motion.duration.base} ${vars.motion.easing.out}`,
  "selectors": {
    [isOpen]: { opacity: 1, transform: "translateY(0)" },
  },
  "@media": {
    [REDUCE_MOTION]: { transition: "none" },
  },
});

export const answerMark = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.text.muted,
});

export const answerText = style({
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.loose,
  color: vars.color.text.body,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  textWrap: "pretty",
});
