import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const tablet = `screen and (max-width: ${breakpoint.tablet})`;
const narrow = `screen and (max-width: ${breakpoint.narrow})`;

export const contactCards = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[32],
  textAlign: "center",
});

export const label = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  letterSpacing: vars.font.letterSpacing.label,
  color: vars.color.brand.primary,
});

export const title = style({
  fontSize: vars.font.size.h2,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.heading,
  letterSpacing: vars.font.letterSpacing.heading,
  color: vars.color.text.heading,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  textWrap: "balance",
});

// 열 수: 4열 → 2열(1000px 이하) → 1열(560px 이하). 뒤에 선언한 narrow가 우선
export const list = style({
  "display": "grid",
  "gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
  "gap": vars.space[12],
  "width": "100%",
  "maxWidth": "1080px",
  "listStyle": "none",
  "@media": {
    [tablet]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    [narrow]: { gridTemplateColumns: "minmax(0, 1fr)" },
  },
});
