import { globalStyle, style } from "@vanilla-extract/css";

import { breakpoint, vars } from "@/styles/theme.css";

const mobile = `screen and (max-width: ${breakpoint.mobile})`;

// 모달이 열려 있는 동안 배경 스크롤 잠금
globalStyle("body:has(dialog[open])", { overflow: "hidden" });

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
  "selectors": {
    // display는 [open]일 때만 지정해야 닫힌 dialog가 숨겨진 채로 유지됨
    "&[open]": {
      display: "grid",
      gridTemplateColumns: vars.layout.modalColumns,
      gridTemplateRows: "minmax(0, 1fr)",
    },
    "&::backdrop": {
      background: vars.color.bg.scrim,
      backdropFilter: `blur(${vars.blur.scrim})`,
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
