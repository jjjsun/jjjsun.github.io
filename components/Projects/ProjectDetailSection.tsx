import { ReactNode } from "react";

import * as styles from "./ProjectModal.css";

type TProjectDetailSectionProps = {
  title: string;
  children: ReactNode;
};

export default function ProjectDetailSection({ title, children }: TProjectDetailSectionProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      {children}
    </section>
  );
}
