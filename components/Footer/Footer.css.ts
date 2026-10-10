import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const footer = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: vars.space[12],
  paddingTop: vars.space[24],
  borderTop: `1px solid ${vars.color.border.base}`,
  fontSize: vars.font.size.sm,
  color: vars.color.text.muted,
});
