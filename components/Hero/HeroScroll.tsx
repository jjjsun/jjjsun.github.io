"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import * as styles from "./Hero.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type THeroScrollProps = {
  children: React.ReactNode;
  intro: React.ReactNode;
  statement: React.ReactNode;
};

const PIN_LENGTH = "+=140%";
const INTRO = { start: 0.22, duration: 0.3, y: -250 };
const STATEMENT = { start: 0.42, duration: 0.36, y: 330 };

export default function HeroScroll({ children, intro, statement }: THeroScrollProps) {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(styles.PINNED_QUERY, () => {
        const tl = gsap.timeline({
          defaults: { ease: "power1.inOut" },
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: PIN_LENGTH,
            pin: true,
            scrub: 1,
          },
        });

        tl.to(
          introRef.current,
          {
            y: INTRO.y,
            opacity: 0,
            duration: INTRO.duration,
          },
          INTRO.start,
        )
          .fromTo(
            statementRef.current,
            { y: STATEMENT.y, opacity: 0 },
            { y: 0, opacity: 1, duration: STATEMENT.duration },
            STATEMENT.start,
          )
          //타임라인 총길이를 1로 고정해야지만 위 구간 비율이 스크롤 진행도랑 일치함
          .to({}, { duration: 0 }, 1);
      });
      return () => mm.revert();
    },
    {
      scope: rootRef,
    },
  );

  return (
    <section ref={rootRef} className={styles.hero}>
      {children}
      <div className={styles.content}>
        <div ref={introRef} className={styles.introLayer}>
          {intro}
        </div>
        <div ref={statementRef} className={styles.statementLayer}>
          {statement}
        </div>
      </div>
    </section>
  );
}
