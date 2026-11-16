import ProjectCard from "./ProjectCard";
import * as styles from "./Projects.css";
import { PROJECTS } from "./ProjectsData";
import ProjectsPin from "./ProjectsPin";

export default function Projects() {
  return (
    <ProjectsPin
      names={PROJECTS.map((project) => project.name)}
      header={
        <header className={styles.header}>
          <p className={styles.label}>
            PROJECTS<span className={styles.labelKo}>프로젝트</span>
          </p>
          <h1 className={styles.title}>코드로 남긴 기록</h1>
        </header>
      }
    >
      {PROJECTS.map((project, index) => (
        <li key={project.name} className={styles.item}>
          <ProjectCard project={project} index={index} total={PROJECTS.length} />
        </li>
      ))}
    </ProjectsPin>
  );
}
