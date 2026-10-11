import { globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  "WebkitTextSizeAdjust": "100%",
  "@media": {
    "(prefers-reduced-motion: no-preference)": { scrollBehavior: "smooth" },
  },
});

globalStyle("body", {
  fontFamily: vars.font.family.sans,
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.strong,
  background: vars.color.bg.page,
  WebkitFontSmoothing: "antialiased",
  paddingTop: vars.layout.headerHeight,
});

globalStyle("a", { color: "inherit", textDecoration: "none" });

globalStyle("button", {
  font: "inherit",
  color: "inherit",
  background: "none",
  border: 0,
  cursor: "pointer",
});

globalStyle("img, svg, video", { display: "block", maxWidth: "100%" });
