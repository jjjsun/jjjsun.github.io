import * as styles from "./LogItem.css";

export interface ILog {
  title: string;
  date: string;
  tags: string[];
  href: string;
}

type TLogItemProps = {
  log: ILog;
  index: number;
};

export default function LogItem({ log, index }: TLogItemProps) {
  const { title, date, tags, href } = log;
  return (
    <li>
      <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
        <span className={styles.number} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={styles.body}>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>{date}</span>
        </span>
        <span className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              <span className={styles.hash}>#</span>
              {tag}
            </span>
          ))}
        </span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </a>
    </li>
  );
}
