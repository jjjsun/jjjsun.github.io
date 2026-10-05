import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: { text: "#26d9ff" },
  fontSize: { lg: "30px", md: "24px" },
  fontWeight: { bold: "700" },
  shadow: { glow: "0 0 15px #26d9ff" },
});
