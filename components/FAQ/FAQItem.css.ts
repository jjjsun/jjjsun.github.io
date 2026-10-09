import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

const ROW_COLUMNS = "36px minmax(0, 1fr) 28px";

export const item = style({
  borderBottom: `1px solid ${vars.color.border.base}`,
});

export const question = style({
  display: "grid",
  gridTemplateColumns: ROW_COLUMNS,
  alignItems: "baseline",
  gap: vars.space[8],
  padding: `${vars.space[24]} 0`,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.strong,
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

//TODO: 현재는 열린 상태로 고정. 애니메이션 구현 단계에서 trnasform을 motion으로 제어 예정
export const chevron = style({
  justifySelf: "end",
  alignSelf: "center",
  width: "10px",
  height: "10px",
  marginRight: vars.space[4],
  borderRight: `2px solid ${vars.color.brand.primary}`,
  borderBottom: `2px solid ${vars.color.brand.primary}`,
  transform: "translateY(3px) rotate(225deg)",
});

export const answer = style({
  display: "grid",
  gridTemplateColumns: ROW_COLUMNS,
  gap: vars.space[8],
  paddingBottom: vars.space[32],
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
