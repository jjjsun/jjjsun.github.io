import Reveal from "@/components/Reveal/Reveal";

import * as styles from "./FAQ.css";
import FAQItem, { IFaq } from "./FAQItem";

const FAQS: IFaq[] = [
  {
    question: "상대와 의견 충돌이 생기면 어떻게 하나요?",
    answer:
      "먼저 상대가 왜 그렇게 생각하는지 끝까지 듣습니다. 의견 충돌은 대부분 서로 다른 시야로 같은 문제를 바라보기 때문에 생긴다고 생각합니다. 그래서 상대의 입장에서 한 번 더 생각해 본 뒤, 더 넓은 시야에서 두 의견을 비교하여 효율이 높은 쪽으로 결정합니다.",
  },
  {
    question: "어떤 동료와 일할 때 가장 즐거운가요?",
    answer:
      "배려할 줄 아는 동료와 일할 때 가장 즐겁습니다. 자신의 일을 책임지고 제한 시간 안에 끝내고, 어려워하는 동료가 있으면 먼저 도우며 팀의 공동 목표를 가장 우선에 두는 동료를 선호합니다. 이런 동료와 함께할 때 서로 부담을 나누고 기분 좋게 일하게 되어 팀의 효율이 높아지는 경험을 했습니다. 팀 프로젝트의 성공은 결국 사람 사이의 관계에 달려 있다고 생각하기에, 서로 배려하는 태도가 가장 중요하다고 생각합니다.",
  },

  {
    question: "팀에서 주로 어떤 역할을 맡나요?",
    answer:
      "주로 팀의 리더를 맡거나, 리더 옆에서 놓친 부분을 챙기는 역할을 합니다. 모두가 부담스러워할 수 있는 작은 일도 제가 먼저 나서서 해결하는 편입니다. 일이 매끄럽게 진행될 때 팀 전체가 편안하게 일할 수 있다고 생각하기 때문입니다. 그래서 어려운 일도 먼저 맡아 해결하고, 리더가 중요한 결정에 집중할 수 있도록 돕습니다. 제가 리더일 때는 부수적인 일을 먼저 정리해서, 팀원들이 본질적인 일에 집중할 수 있는 환경을 만들려고 합니다.",
  },
  // {
  //   question: "가장 끈질기게 붙잡았던 문제는 무엇인가요?",
  //   answer: "리더로 진행했을때 가장 많은 어려움을 겪었습니다.",
  // },
  {
    question: "지쳤을 때 어떻게 회복하나요?",
    answer:
      "머리가 지쳤을 때는 수영을, 몸이 지쳤을 때는 맛있는걸 먹으며 회복합니다. 수영을 할 때는 오로지 수영에만 집중할 수 있어서, 물에서 나오면 복잡했던 생각이 정리되는 느낌이 들고 지친 하루가 풀립니다. 몸이 힘들 때는 맛있는 음식을 먹으며 피곤했던 하루에 대한 보상으로 저 스스로를 챙깁니다.",
  },
  {
    question: "쉬는 날에는 무엇을 하나요?",
    answer:
      "쉬는 날에는 취미인 야구 직관을 갑니다. 목청껏 응원하다 보면 쌓였던 스트레스가 풀리고, 맛있는 음식을 먹으며 경기를 분석하고 관람하다 보면 복잡했던 머릿속도 정리됩니다. 많은 사람들과 한 팀을 함께 응원하며 느끼는 소속감 덕분에 우리 팀이라는 마음으로 목이 쉬도록 열정적으로 응원하게 됩니다. 응원한 팀이 이기면 제 응원이 힘이 된 것 같은 뿌듯함을 안고 기분 좋게 돌아옵니다.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <Reveal className={styles.container}>
        <header className={styles.header}>
          <p className={styles.label}>FAQ • 인터뷰</p>
          <h2 className={styles.title}>코드에는 없는 이야기</h2>
          <p className={styles.description}>기술 말고, 저라는 사람에 대한 질문이에요</p>
        </header>
        <ul className={styles.list}>
          {FAQS.map((item, index) => (
            <FAQItem key={item.question} item={item} index={index} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
