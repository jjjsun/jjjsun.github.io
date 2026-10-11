import * as styles from "./AboutSkills.css";

interface ISkillGroup {
  label: string;
  items: string[];
}

const SKILL_GROUPS: ISkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"] },
  { label: "Styling", items: ["TailwindCSS", "vanilla-extract"] },
  { label: "Animation", items: ["Motion", "GSAP"] },
  { label: "Collaboration", items: ["Git", "GitHub", "Linear", "Figma"] },
];

export default function AboutSkills() {
  return (
    <div className={styles.skills}>
      <hr className={styles.divider} />
      <dl className={styles.list}>
        {SKILL_GROUPS.map(({ label, items }) => (
          <div key={label} className={styles.row}>
            <dt className={styles.label}>{label}</dt>
            <dd className={styles.text}>{items.join(" • ")}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
