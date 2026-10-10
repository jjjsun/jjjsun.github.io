import { createGlobalTheme } from "@vanilla-extract/css";

// @media 안에서는 CSS 변수를 못 쓰므로 vars와 별도로 export
export const breakpoint = {
  mobile: "820px",
  tablet: "1000px",
  narrow: "560px",
};

export const vars = createGlobalTheme(":root", {
  color: {
    brand: {
      primary: "#2a5bd7",
      strong: "#1f47b0",
      light: "#5b8ff0",
      soft: "#7fb2ee",
      pale: "#9cc3f2",
      dim: "rgba(42,91,215,.35)",
    },
    text: {
      strong: "#14213a",
      heading: "#2b3445",
      body: "#2e3d58",
      secondary: "#3f4f6b",
      muted: "#56657f",
      subtle: "#687790",
      disabled: "#8592a8",
      onDark: "#e9eff8",
    },
    bg: {
      page: "#e1eaf5",
      sky100: "#e2ebf6",
      sky200: "#d9e5f4",
      sky300: "#d6e6f8",
      sky400: "#c4dcf5",
      surface: "#f6f8fb",
      header: "rgba(230,238,248,.8)",
      mediaDark: "#0f1726",
      mediaDark2: "#22324f",
      scrim: "rgba(20,33,58,.36)",
      hover: "rgba(255,255,255,.28)",
      hoverStrong: "rgba(255,255,255,.45)",
    },
    border: {
      subtle: "rgba(20,33,58,.08)",
      base: "rgba(20,33,58,.12)",
      accent: "rgba(42,91,215,.18)",
    },
    category: {
      awards: {
        main: "#2a5bd7",
        tint: "rgba(42,91,215,.1)",
        gradient: "linear-gradient(135deg,#2a5bd7,#5b8ff0)",
      },
      projects: {
        main: "#1f8a74",
        tint: "rgba(31,138,116,.1)",
        gradient: "linear-gradient(135deg,#1f8a74,#3fb39a)",
      },
      work: {
        main: "#b0632a",
        tint: "rgba(176,99,42,.1)",
        gradient: "linear-gradient(135deg,#b0632a,#d88a4e)",
      },
      all: {
        main: "#14213a",
        tint: "rgba(20,33,58,.08)",
        gradient: "linear-gradient(135deg,#14213a,#2e3d58)",
      },
    },
    status: {
      live: "#3fd18a",
      done: "#9cc3f2",
    },
    external: {
      naver: {
        main: "#03c75a",
        gradient: "linear-gradient(135deg,#03c75a,#2fdc7f)",
      },
      github: {
        main: "#0d1117",
        gradient: "linear-gradient(135deg,#0d1117,#24292f)",
      },
      linkedin: {
        main: "#0a66c2",
        gradient: "linear-gradient(135deg,#0a66c2,#378fe9)",
      },
      velog: {
        main: "#20c997",
        gradient: "linear-gradient(135deg,#20c997,#63e6be)",
      },
    },
  },

  gradient: {
    heroSky: "linear-gradient(180deg,#e2ebf6 0%,#d6e6f8 22%,#c4dcf5 100%)",
    about: "linear-gradient(180deg,#c4dcf5 0%,#d9e5f4 30%,#e1eaf5 100%)",
    faq: "linear-gradient(180deg,#e1eaf5,#d6e6f8)",
    contact: "linear-gradient(180deg,#d6e6f8,#c4dcf5)",
    nameText: "linear-gradient(100deg,#2a5bd7 0%,#5b8ff0 55%,#7fb2ee 100%)",
    pillSurface: "linear-gradient(135deg,rgba(255,255,255,.85),rgba(214,231,250,.75))",
    headerFade:
      "linear-gradient(to bottom,rgba(230,238,248,.8),rgba(230,238,248,.4) 60%,rgba(230,238,248,0))",
    mediaOverlay: "linear-gradient(to top,rgba(15,23,38,.85),rgba(15,23,38,0))",
    borderFade:
      "linear-gradient(to right,rgba(20,33,58,0),rgba(20,33,58,.13) 18%,rgba(20,33,58,.13) 82%,rgba(20,33,58,0))",
    // 배열은 테마에 못 넣어서 3개로 분리
    heroBlob1: "rgba(255,255,255,.45)",
    heroBlob2: "rgba(150,200,243,.75)",
    heroBlob3: "rgba(120,175,236,.6)",
    brand: "linear-gradient(135deg,#2a5bd7,#5b8ff0)",
    pillSurfaceHover: "linear-gradient(135deg,#ffffff,#d6e6fa)",
  },

  font: {
    family: {
      sans: "var(--font-inter), var(--font-pretendard), system-ui, sans-serif",
    },
    weight: { medium: "500", semibold: "600", bold: "700" },
    size: {
      // 화면 폭에 따라 변하는 큰 글자
      displayXl: "clamp(72px,11.3vw,163px)",
      displayL: "clamp(38px,6.4vw,92px)",
      displayM: "clamp(52px,5.6vw,80px)",
      heroTitle: "clamp(36px,4.75vw,68px)",
      h1: "clamp(36px,4.2vw,60px)",
      h2: "clamp(32px,3.8vw,54px)",
      h3: "clamp(34px,3.6vw,52px)",
      metric: "clamp(28px,2.8vw,40px)",
      lead: "clamp(20px,1.86vw,27px)",
      titleM: "clamp(17px,1.5vw,21px)",
      // 고정 크기
      xl: "22px",
      lg: "18px",
      md: "16px",
      sm: "14px",
      xs: "12px",
    },
    lineHeight: {
      tight: "1",
      heading: "1.18",
      snug: "1.45",
      normal: "1.5",
      body: "1.6",
      relaxed: "1.7",
      loose: "1.8",
    },
    letterSpacing: {
      display: "-.05em",
      heading: "-.03em",
      tight: "-.02em",
      label: ".16em",
      eyebrow: ".14em",
      logo: ".06em",
    },
  },

  radius: {
    "sm": "8px",
    "md": "10px",
    "lg": "12px",
    "xl": "14px",
    "2xl": "20px",
    "pill": "999px",
    "circle": "50%",
  },

  shadow: {
    xs: "0 2px 6px rgba(20,40,80,.10)",
    sm: "0 0 0 1px rgba(20,33,58,.05), 0 2px 8px rgba(40,80,140,.05)",
    md: "0 10px 26px rgba(20,40,80,.12)",
    pill: "0 0 0 1px rgba(42,91,215,.18), 0 6px 18px rgba(42,91,215,.10)",
    lg: "0 0 0 1px rgba(20,33,58,.07), 0 24px 60px rgba(40,80,140,.14)",
    modal: "0 0 0 1px rgba(20,33,58,.08), 0 40px 100px rgba(20,40,80,.3)",
    pillHover: "0 0 0 1px rgba(42,91,215,.18), 0 6px 18px rgba(42,91,215,.22)",
  },

  blur: { header: "14px", scrim: "8px", heroBlob: "60px" },

  space: {
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
    56: "56px",
    72: "72px",
  },

  layout: {
    container: "1328px",
    headerHeight: "96px",
    pageX: "clamp(20px,4vw,56px)",
    sectionY: "clamp(96px,10vw,160px)",
    sectionGap: "clamp(40px,5vw,64px)",
    aboutItemGap: "clamp(40px,4vw,56px)",
    modalMaxWidth: "1320px",
    modalMaxHeight: "min(820px, calc(100vh - 64px))",
    modalColumns: "13fr 11fr",
  },

  motion: {
    easing: {
      out: "cubic-bezier(.2,.7,.2,1)",
      outStrong: "cubic-bezier(.2,.8,.2,1)",
      spring: "cubic-bezier(.3,1.6,.5,1)",
      inOut: "cubic-bezier(.45,0,.55,1)",
    },
    duration: {
      fast: "200ms",
      base: "350ms",
      medium: "450ms",
      slow: "600ms",
      slower: "700ms",
      flip: "750ms",
    },
  },
});
