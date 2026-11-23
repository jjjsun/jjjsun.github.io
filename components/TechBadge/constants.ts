import { vars } from "@/styles/theme.css";

interface ITech {
  icon: string;
  color: string;
}

const { tech } = vars.color;

export const TECH: Record<string, ITech> = {
  "React": { icon: "react", color: tech.react },
  "Next.js": { icon: "nextdotjs", color: tech.nextjs },
  "TypeScript": { icon: "typescript", color: tech.typescript },
  "JavaScript": { icon: "javascript", color: tech.javascript },
  "HTML/CSS": { icon: "html5", color: tech.html },
  "TailwindCSS": { icon: "tailwindcss", color: tech.tailwind },
  "Tanstack Query": { icon: "reactquery", color: tech.tanstack },
  "Storybook": { icon: "storybook", color: tech.storybook },
  "GSAP": { icon: "gsap", color: tech.gsap },
  "Git": { icon: "git", color: tech.git },
  "GitHub": { icon: "github", color: tech.github },
  "Github Pages": { icon: "github", color: tech.github },
  "Github Actions": { icon: "githubactions", color: tech.githubActions },
  "Linear": { icon: "linear", color: tech.linear },
  "Figma": { icon: "figma", color: tech.figma },
};
