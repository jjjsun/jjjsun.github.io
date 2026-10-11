import { globalStyle, style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

// 모달이 열려 있는 동안 배경 스크롤 잠금
globalStyle("body:has(dialog[open])", { overflow: "hidden" });

const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";
const FLIP_HIDDEN = "perspective(1600px) rotateY(-75deg)";
const FLIP_SHOWN = "perspective(1600px) rotateY(0)";

export const trigger = style({
  textAlign: "left",
  letterSpacing: "inherit",
  selectors: {
    "&::after": {
      content: "",
      position: "absolute",
      inset: 0,
      zIndex: 1,
      cursor: "pointer",
      borderRadius: vars.radius["2xl"],
    },
    "&:focus-visible::after": {
      outline: `2px solid ${vars.color.brand.primary}`,
      outlineOffset: vars.space[8],
    },
  },
});

export const dialog = style({
  "width": `min(calc(100% - 2 * ${vars.layout.pageX}), ${vars.layout.modalMaxWidth})`,
  "maxWidth": "none",
  "maxHeight": vars.layout.modalMaxHeight,
  "margin": "auto", // global reset(margin: 0)이 dialog 기본 중앙 정렬을 지우므로 복구
  "overflow": "hidden",
  "border": 0,
  "borderRadius": vars.radius["2xl"],
  "background": vars.color.bg.surface,
  "color": vars.color.text.body,
  "boxShadow": vars.shadow.modal,
  "opacity": 0,
  "transform": FLIP_HIDDEN,
  // display/overlay를 allow-discrete로 묶어야 transition이 끝난 뒤에 숨겨지고 top layer에서 빠짐
  "transition": [
    `opacity ${vars.motion.duration.base} ${vars.motion.easing.out}`,
    `transform ${vars.motion.duration.medium} ${vars.motion.easing.out}`,
    `display ${vars.motion.duration.medium} allow-discrete`,
    `overlay ${vars.motion.duration.medium} allow-discrete`,
  ].join(", "),
  "selectors": {
    // display는 [open]일 때만 지정해야 닫힌 dialog가 숨겨진 채로 유지됨
    "&[open]": {
      "display": "grid",
      "gridTemplateColumns": vars.layout.modalColumns,
      "gridTemplateRows": "minmax(0, 1fr)",
      "opacity": 1,
      "transform": FLIP_SHOWN,
      //showModal() 직후 출발점
      "@starting-style": {
        opacity: 0,
        transform: FLIP_HIDDEN,
      },
    },
    "&::backdrop": {
      background: vars.color.bg.scrim,
      backdropFilter: `blur(${vars.blur.scrim})`,
      opacity: 0,
      // dialog의 transition은 ::backdrop에 상속되지 않아서 따로 지정
      transition: [
        `opacity ${vars.motion.duration.base} ${vars.motion.easing.out}`,
        `display ${vars.motion.duration.base} allow-discrete`,
        `overlay ${vars.motion.duration.base} allow-discrete`,
      ].join(", "),
    },
    "&[open]::backdrop": {
      "opacity": 1,
      "@starting-style": { opacity: 0 },
    },
  },
  "@media": {
    [mobile]: {
      overflowY: "auto",
      selectors: {
        "&[open]": {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
        },
      },
    },
    [REDUCE_MOTION]: {
      transition: "none",
      selectors: {
        "&::backdrop": { transition: "none" },
      },
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: vars.space[16],
  right: vars.space[16],
  zIndex: 1,
  display: "grid",
  placeItems: "center",
  width: vars.space[40],
  height: vars.space[40],
  borderRadius: vars.radius.circle,
  background: vars.color.bg.surface,
  boxShadow: vars.shadow.xs,
  fontSize: vars.font.size.xl,
  lineHeight: vars.font.lineHeight.tight,
  color: vars.color.text.strong,
});

export const media = style({
  display: "flex",
  alignItems: "center",
  background: vars.color.bg.mediaDark,
});

export const video = style({
  width: "100%",
  aspectRatio: "16 / 9",
  border: 0,
});

export const body = style({
  "display": "flex",
  "flexDirection": "column",
  "gap": vars.space[16],
  "padding": `${vars.space[56]} ${vars.space[40]} ${vars.space[40]}`,
  "overflowY": "auto",
  "@media": {
    [mobile]: {
      padding: vars.space[24],
      overflowY: "visible",
    },
  },
});

export const description = style({
  fontSize: vars.font.size.md,
  lineHeight: vars.font.lineHeight.loose,
  color: vars.color.text.body,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  textWrap: "pretty",
});
