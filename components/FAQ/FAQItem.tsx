import * as styles from "./FAQItem.css";

export interface IFaq {
  question: string;
  answer: string;
}

type TFAQItemProps = {
  item: IFaq;
  index: number;
};

export default function FAQItem({ item, index }: TFAQItemProps) {
  const { question, answer } = item;
  return (
    <li className={styles.item}>
      <h3 className={styles.question}>
        <span className={styles.number}>Q{index + 1}</span>
        <span className={styles.questionText}>{question}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </h3>
      <div className={styles.answer}>
        <span className={styles.answerMark}>A.</span>
        <p className={styles.answerText}>{answer}</p>
      </div>
    </li>
  );
}
