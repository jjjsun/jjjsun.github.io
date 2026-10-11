import * as styles from "./HeroStatement.css";

interface IHanjaMeaning {
  char: string;
  hun: string;
  meaning: string;
}

const HANJA_MEANINGS: IHanjaMeaning[] = [
  { char: "在", hun: "있을 재", meaning: "머무르다, 자리를 지키다" },
  { char: "宣", hun: "베풀 선", meaning: "베풀다, 이롭게 하다" },
];
export default function HeroStatement() {
  return (
    <div className={styles.statement}>
      <div className={styles.head}>
        <h2 className={styles.title}>Fast Follower에서 First Mover로</h2>
        <p className={styles.lead}>
          사용자가 불편해하는 곳을 먼저 찾고, 먼저 움직이는 프론트엔드 개발자 박재선입니다.
        </p>
      </div>
      <div className={styles.hanjaRow}>
        <p className={styles.hanja}>朴在宣</p>
        <ul className={styles.meanings}>
          {HANJA_MEANINGS.map(({ char, hun, meaning }) => (
            <li key={char} className={styles.meaning}>
              <span className={styles.bar} />
              <span className={styles.hun}>
                {char} • {hun}
              </span>
              <span className={styles.desc}>{meaning}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.closing}>
        하면 된다, 할 수 있다, 나는 된다. <span className={styles.accent}>Just do IT!</span>
      </p>
    </div>
  );
}
