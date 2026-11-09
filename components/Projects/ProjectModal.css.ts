import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

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
  color: vars.color.text.strong,
  transition: `box-shadow ${vars.motion.duration.fast} ${vars.motion.easing.out}`,
  selectors: {
    "&:is(:hover, :focus-visible)": {
      boxShadow: vars.shadow.md,
    },
  },
});

export const closeIcon = style({
  width: vars.space[24],
  height: vars.space[24],
  backgroundColor: "currentColor",
  maskImage: `url("/icons/x.svg")`,
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "contain",
});

export const media = style({
  "display": "flex",
  "flexDirection": "column",
  "overflowX": "hidden",
  "overflowY": "auto", // 데스크톱: 정보가 길면 이 컬럼만 스크롤
  "background": vars.color.bg.mediaDark,
  "selectors": {
    // 스페이서: 위는 기준 0, 아래는 기준 24px
    // 남는 공간이 24px 이하면 전부 아래로 가서 영상이 맨 위에 붙음
    "&::before": { content: '""', flex: "1 1 0" },
    "&::after": { content: '""', flex: "1 1 24px" },
  },
  "@media": {
    [mobile]: {
      overflowX: "clip",
      overflowY: "visible",
      selectors: {
        "&::before": { display: "none" },
        "&::after": { display: "none" },
      },
    },
  },
});

// iframe이 언마운트돼도(닫힐 때) 16:9 자리는 유지해서 레이아웃이 튀지 않게 함
export const videoFrame = style({
  flex: "none",
  aspectRatio: "16 / 9",
  width: "100%",
});

export const video = style({
  width: "100%",
  height: "100%",
  border: 0,
});

export const mediaInfo = style({
  "flex": "none",
  "display": "flex",
  "flexDirection": "column",
  "gap": vars.space[16],
  "padding": `${vars.space[32]} ${vars.space[40]}`,
  "@media": {
    [mobile]: { padding: vars.space[24] },
  },
});

export const mediaInfoRow = style({
  display: "flex",
  alignItems: "baseline",
  gap: vars.space[24],
});

export const mediaInfoLabel = style({
  flex: "none",
  width: "72px",
  fontSize: vars.font.size.sm,
  color: vars.color.brand.pale,
});

export const mediaInfoText = style({
  fontSize: vars.font.size.sm,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.onDark,
  minWidth: 0,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
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

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  paddingTop: vars.space[24],
  borderTop: `1px solid ${vars.color.border.base}`,
});

export const sectionTitle = style({
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.bold,
  color: vars.color.text.strong,
});

export const itemName = style({
  display: "block",
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.strong,
});

export const itemText = style({
  fontSize: vars.font.size.sm,
  lineHeight: vars.font.lineHeight.body,
  color: vars.color.text.body,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  whiteSpace: "pre-line",
});

export const itemList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[16],
  padding: 0,
  listStyle: "none",
});

export const bulletList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
  paddingLeft: vars.space[16],
  listStyle: "disc",
  wordBreak: "keep-all",
  textWrap: "pretty",
});

export const links = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[16],
  padding: 0,
  listStyle: "none",
});

export const link = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[8],
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.brand.primary,
  textDecoration: "underline",
  textUnderlineOffset: vars.space[4],
});
export const linkIcon = style({
  flex: "none",
  width: vars.space[16],
  height: vars.space[16],
  backgroundColor: "currentColor",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "contain",
});

export const linkIconImage = styleVariants(
  {
    github: "/icons/github.svg",
    demo: "/icons/screen-share.svg",
  },
  (path) => ({ maskImage: `url("${path}")` }),
);

export const linkDisabeld = style([
  link,
  {
    color: vars.color.text.disabled,
    cursor: "not-allowed",
  },
]);
export const steps = style({
  display: "flex",
  flexDirection: "column",
  marginTop: vars.space[12],
  padding: 0,
  listStyle: "none",
});

export const step = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
  paddingLeft: vars.space[24],
  paddingBottom: vars.space[20],
  selectors: {
    // 이 점 아래에서 다음 단계의 점까지 이어지는 세로선
    "&::before": {
      content: '""',
      position: "absolute",
      top: vars.space[16],
      bottom: `calc(${vars.space[4]} * -1)`,
      left: `calc(${vars.space[12]} / 2 - 1px)`,
      width: "2px",
      background: vars.color.brand.primary,
      opacity: 0.55,
    },
    "&:last-child": {
      paddingBottom: 0,
    },
    "&:last-child::before": {
      display: "none",
    },
  },
});

export const stepDot = style({
  position: "absolute",
  top: vars.space[4],
  left: 0,
  zIndex: 1,
  width: vars.space[12],
  height: vars.space[12],
  borderRadius: vars.radius.circle,
  background: vars.color.brand.primary,
});

export const stepLabel = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.bold,
  color: vars.color.brand.primary,
});
