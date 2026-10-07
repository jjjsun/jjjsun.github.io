import * as styles from "./HeroIntro.css";

export default function HeroIntro() {
  return (
    <div className={styles.intro}>
      <p className={styles.label}>FRONTEND DEVELOPER</p>
      <h1 className={styles.title}>
        <span className={styles.name}>박재선</span>
        <span className={styles.nameEn}>PARK JAESEON</span>
      </h1>
      <p className={styles.school}>
        상명대학교 컴퓨터과학전공 [공학교육 인증 이수] • 2027.02 졸업예정
      </p>
      <p className={styles.scrollHint}>
        SCROLL <span className={styles.scrollArrow}>↓</span>
      </p>
    </div>
  );
}
