import * as styles from "./AboutItems.css";

interface IAboutItem {
  label: string;
  big: string;
  fact: string;
  src: string;
}

const ABOUT_ITEMS: IAboutItem[] = [
  {
    label: "문제를 만나면",
    big: "회원가입을 끝내도 로그인 페이지로 넘어가지 않는 버그의 원인을 찾아 고쳤습니다",
    fact: "이동하기 전에 이메일 상태를 먼저 비워서, 같은 화면의 가드가 사용자를 가입 페이지로 되돌려 보내는 문제가 있었습니다.",
    src: "WhereYouAd • Frontend",
  },
  {
    label: "처음 보는 기술이면",
    big: "써 본 적 없는 Service Workers를 익혀, 탭을 닫아도 울리는 브라우저 푸시 알림을 만들었습니다",
    fact: "설정 토글이 켜진 것과 브라우저가 실제로 구독된 것이 다른 상태라는 걸 알고, 저장할 때만 구독이 반영되게 나눴습니다.",
    src: "WhereYouAd • Frontend",
  },
  {
    label: "팀을 맡으면",
    big: "일정, 의견 조율, 발표, 행정을 도맡아 팀원이 개발에만 집중하게 했습니다",
    fact: "앞에서 끌기보다 뒤에서 받쳐주는 팀장이었습니다. 팀원이 막히면 같이 보고, 말하기 전에 필요한 걸 먼저 챙겼습니다.",
    src: "WhereYouAd • Team Leader",
  },
  {
    label: "기능을 맡으면",
    big: "식당 검색부터 예약, 결제, 결제 확인까지 사용자 흐름 전체를 만들었습니다",
    fact: "지도에서 식당을 찾고, 메뉴와 시간, 자리를 고른 뒤 실제 결제까지 이어집니다.",
    src: "Eatsfine • Frontend Leader",
  },
  {
    label: "일을 맡기면",
    big: "1년 동안 다른 매장 5곳에 파견될 만큼, 믿고 일을 맡길 수 있는 파트너였습니다",
    fact: "파견은 본 매장을 대표해 나가는 자리였습니다. 닉네임은 뚜리였습니다.",
    src: "스타벅스 국회의사당역점 • 바리스타",
  },
];
export default function AboutItems() {
  return (
    <ul className={styles.list}>
      {ABOUT_ITEMS.map(({ label, big, fact, src }) => (
        <li key={label} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <div className={styles.body}>
            <p className={styles.big}>{big}</p>
            <p className={styles.fact}>{fact}</p>
            <p className={styles.src}>{src}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
