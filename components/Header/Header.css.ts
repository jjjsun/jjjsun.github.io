import { style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

export const header = style({
  "position": "fixed",
  "top": 0,
  "left": 0,
  "right": 0,
  "zIndex": 100,
  "height": vars.layout.headerHeight,
  "display": "grid",
  "gridTemplateColumns": "1fr auto 1fr",
  "alignItems": "center",
  "gap": vars.space[24],
  "padding": `0 ${vars.layout.pageX} ${vars.space[20]}`,

  //배경층만 마스크로 페이드시키기 위해 ::before로 분리 (글자 영향없게)
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: -1,
    background: vars.gradient.headerFade,
    backdropFilter: `blur(${vars.blur.header})`,
    WebkitBackdropFilter: `blur(${vars.blur.header})`,
    maskImage: "linear-gradient(to bottom, black 45%, transparent)",
    WebkitMaskImage: "linear-gradient(to bottom, black 45%, transparent)",
  },
  "@media": {
    //nav가 display:none이 되면 열이 2개만 남으므로 열 수도 맞춘다
    [mobile]: { gridTemplateColumns: "1fr auto" },
  },
});

export const logo = style({
  justifySelf: "start",
  fontSize: vars.font.size.xl,
  fontWeight: vars.font.weight.medium,
  letterSpacing: vars.font.letterSpacing.logo,
  color: vars.color.text.strong,
});

export const nav = style({
  "@media": {
    [mobile]: { display: "none" },
  },
});

export const list = style({
  display: "flex",
  gap: `clamp(${vars.space[16]}, 2.5vw, ${vars.space[40]})`,
  listStyle: "none",
  fontSize: vars.font.size.sm,
  whiteSpace: "nowrap",
});

export const link = style({
  "position": "relative",
  "display": "flex",
  "alignItems": "baseline",
  "gap": vars.space[8],
  "color": vars.color.text.strong,
  "transition": `color ${vars.motion.duration.fast}`,

  //활성화된 상태 표시 밑줄
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-9px",
    width: "20px",
    height: "2px",
    background: vars.color.brand.primary,
    opacity: 0,
    transition: `opacity ${vars.motion.duration.fast}`,
  },

  "selectors": {
    '&[aria-current="page"]': { color: vars.color.brand.primary },
    '&[aria-current="page"]::after': { opacity: 1 },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.brand.primary}`,
      outlineOffset: "4px",
    },
  },
});

export const ko = style({
  fontSize: vars.font.size.xs,
  color: vars.color.text.disabled,

  selectors: {
    [`${link}[aria-current="page"] &`]: { color: vars.color.brand.primary },
  },
});

export const resume = style({
  justifySelf: "end",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[8],
  padding: `${vars.space[4]} ${vars.space[8]} ${vars.space[4]} ${vars.space[16]}`,
  borderRadius: vars.radius.pill,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.strong,
  whiteSpace: "nowrap",
  background: vars.gradient.pillSurface,
  boxShadow: vars.shadow.pill,
  transition: `transform ${vars.motion.duration.base} ${vars.motion.easing.out}, box-shadow ${vars.motion.duration.base}`,

  selectors: {
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: vars.shadow.pillHover,
      background: vars.gradient.pillSurfaceHover,
    },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.brand.primary}`,
      outlineOffset: "4px",
    },
  },
});

export const resumeIcon = style({
  display: "grid",
  placeItems: "center",
  width: "28px",
  height: "28px",
  borderRadius: vars.radius.circle,
  color: vars.color.bg.surface,
  background: vars.gradient.brand,
  transition: `transform ${vars.motion.duration.medium} ${vars.motion.easing.spring}`,

  selectors: {
    // 부모 버튼에 hover하면 아이콘이 아래로 살짝 내려감
    [`${resume}:hover &`]: { transform: "translateY(2px)" },
  },
});
