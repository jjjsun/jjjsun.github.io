import * as styles from "./FAQItem.css";

export interface IFaq {
  question: string;
  answer: string;
}

type TFAQItemProps = {
  item: IFaq;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

export default function FAQItem({ item, index, isOpen, onToggle }: TFAQItemProps) {
  const { question, answer } = item;
  const answerId = `faq-answer-${index}`;
  return (
    <li className={styles.item} data-open={isOpen}>
      <h3>
        <button
          type="button"
          className={styles.question}
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => onToggle(index)}
        >
          <span className={styles.number}>Q{index + 1}</span>
          <span className={styles.questionText}>{question}</span>
          <span className={styles.chevron} aria-hidden="true" />
        </button>
      </h3>
      <div id={answerId} className={styles.answerWrap}>
        <div className={styles.answerClip}>
          <div className={styles.answer}>
            <span className={styles.answerMark}>A.</span>
            <p className={styles.answerText}>{answer}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
