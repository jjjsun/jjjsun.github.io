import * as styles from "./ProjectCard.css";

export interface IProject {
  name: string;
  period: string;
  org: string;
  summary: string;
  metric: string;
  role: string;
  stack: string[];
}

type TProjectCardProps = {
  project: IProject;
  index: number;
  total: number;
};

export default function ProjectCard({ project, index, total }: TProjectCardProps) {
  const { name, period, org, summary, metric, role, stack } = project;
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <p className={styles.meta}>
          <span className={styles.order}>
            {pad(index + 1)} / {pad(total)}
          </span>
          <span className={styles.period}>
            {period} • {org}
          </span>
        </p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.metricBox}>
          <p className={styles.metricLabel}>핵심 성과</p>
          <p className={styles.metric}>{metric}</p>
        </div>
        <dl className={styles.info}>
          <div className={styles.infoRow}>
            <dt className={styles.infoLabel}>역할</dt>
            <dd className={styles.infoText}>{role}</dd>
          </div>
          <div className={styles.infoRow}>
            <dt className={styles.infoLabel}>기술 스택</dt>
            <dd className={styles.infoText}>{stack.join(" • ")}</dd>
          </div>
        </dl>
        <p className={styles.hint}>카드를 누르면 상세 내용을 볼 수 있어요</p>
      </div>
      {/* TODO: 실제 이미지가 생기면 next/image로 교체, 모달 단계에서 button으로 변경 */}
      <div className={styles.thumbnail} aria-hidden="true">
        <span className={styles.thumbnailTag}>THUMBNAIL</span>
        <span className={styles.thumbnailCaption}>{name} 대표 화면</span>
      </div>
    </article>
  );
}
