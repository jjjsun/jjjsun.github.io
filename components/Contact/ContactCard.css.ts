import { createVar, style, styleVariants } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

const hoverGradient = createVar();
const hoverColor = createVar();

const TONES = {
  email: vars.color.external.naver,
  github: vars.color.external.github,
  linkedin: vars.color.external.linkedin,
  velog: vars.color.external.velog,
};

//카드별 호버 색을 CSS 변수로 넣기. 아이콘/화살표가 읽어감
export const tone = styleVariants(TONES, ({ main, gradient }) => ({
  vars: {
    [hoverGradient]: gradient,
    [hoverColor]: main,
  },
}));

export const card = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[16],
  padding: `${vars.space[20]} ${vars.space[24]}`,
  borderRadius: vars.radius.pill,
  textAlign: "left",
  color: vars.color.text.strong,
  textDecoration: "none",
  transition: `background ${vars.motion.duration.base}`,
  selectors: {
    "&:is(:hover, :focus-visible)": {
      background: vars.color.bg.hoverStrong,
    },
  },
});

export const icon = style({
  flex: "none",
  display: "grid",
  placeItems: "center",
  width: "52px",
  height: "52px",
  borderRadius: vars.radius.circle,
  color: vars.color.brand.primary,
  background: vars.gradient.pillSurfaceHover,
  boxShadow: vars.shadow.sm,
  transition: `background ${vars.motion.duration.base}, color ${vars.motion.duration.base}`,
  selectors: {
    [`${card}:is(:hover, :focus-visible) &`]: {
      color: vars.color.bg.surface,
      background: hoverGradient,
    },
  },
});

export const glyph = style({
  width: "24px",
  height: "24px",
  backgroundColor: "currentColor",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "contain",
});

export const glyphImage = styleVariants(
  {
    email: "/icons/mail.svg",
    github: "/icons/github.svg",
    linkedin: "/icons/linkedin.svg",
    velog: "/icons/velog.svg",
  },
  (path) => ({ maskImage: `url("${path}")` }),
);

export const text = style({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

export const name = style({
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.medium,
});

export const description = style({
  fontSize: vars.font.size.sm,
  color: vars.color.text.muted,
});

export const arrow = style({
  flex: "none",
  fontSize: vars.font.size.lg,
  color: vars.color.brand.primary,
  opacity: 0.35,
  transition: `opacity ${vars.motion.duration.base}, color ${vars.motion.duration.base}`,
  selectors: {
    [`${card}:is(:hover, :focus-visible) &`]: {
      color: hoverColor,
      opacity: 1,
    },
  },
});
