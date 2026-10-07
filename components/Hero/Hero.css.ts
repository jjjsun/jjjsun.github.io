import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const hero = style({
  position: "relative",
  background: vars.gradient.heroSky,
});

export const sky = style({
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
});

const blob = style({
  position: "absolute",
  borderRadius: vars.radius.circle,
  filter: `blur(${vars.blur.heroBlob})`,
});

export const blob1 = style([
  blob,
  {
    left: "52%",
    top: "-12%",
    width: "62vw",
    height: "78vh",
    background: `radial-gradient(closest-side, ${vars.gradient.heroBlob1}, transparent)`,
  },
]);

export const blob2 = style([
  blob,
  {
    left: "-12%",
    top: "38%",
    width: "70vw",
    height: "88vh",
    background: `radial-gradient(closest-side, ${vars.gradient.heroBlob2}, transparent)`,
  },
]);

export const blob3 = style([
  blob,
  {
    left: "58%",
    top: "48%",
    width: "57vw",
    height: "80vh",
    background: `radial-gradient(closest-side, ${vars.gradient.heroBlob3}, transparent)`,
  },
]);

//원보다 위에 그려지도록  positioned 처리
export const content = style({
  position: "relative",
});
