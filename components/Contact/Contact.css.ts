import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const contact = style({
  background: vars.gradient.contact,
  padding: `${vars.layout.sectionY} ${vars.layout.pageX} ${vars.space[40]}`,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.layout.sectionY,
  maxWidth: vars.layout.container,
  margin: "0 auto",
});
