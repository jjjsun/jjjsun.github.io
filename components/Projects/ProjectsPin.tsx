"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

import { PINNED_QUERY } from "../Hero/Hero.css";
import Reveal from "../Reveal/Reveal";
import * as styles from "./Projects.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TProjectsPinProps = {
  header: React.ReactNode;
  names: string[];
  children: React.ReactNode;
};

//카드 1장당 스크롤 길이(vh %)
const SCROLL_PER_CARD = 100;
//카드가 머무는 비율
const HOLD = 0.6;
//전환 비율 (HOLD + FADE = 1)
const FADE = 0.4;
const OFFSET_Y = 60;

export default function ProjectsPin({ header, names, children }: TProjectsPinProps) {
  const roofRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = names.length;

  useGSAP(
    () => {
      const root = roofRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add(PINNED_QUERY, () => {
        const items = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.item}`));
        const count = items.length;

        const tl = gsap.timeline({
          defaults: { ease: "power1.inOut" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: `+=${count * SCROLL_PER_CARD}%`,
            pin: true,
            scrub: 1,
            onUpdate: (self) =>
              setActiveIndex(Math.min(count - 1, Math.floor(self.progress * count + 0.2))),
          },
        });
        items.slice(0, -1).forEach((item, i) => {
          const at = i + HOLD;
          tl.to(item, { autoAlpha: 0, y: -OFFSET_Y, duration: FADE }, at).fromTo(
            items[i + 1],
            { autoAlpha: 0, y: OFFSET_Y },
            { autoAlpha: 1, y: 0, duration: FADE },
            at,
          );
        });

        //타임라인 총 길이를 카드 개수로 고정해야지 진행도랑 구간 비율이 일치함
        tl.to({}, { duration: 0 }, count);

        triggerRef.current = tl.scrollTrigger ?? null;
        return () => {
          triggerRef.current = null;
          setActiveIndex(0);
        };
      });
      return () => mm.revert();
    },
    { scope: roofRef },
  );

  const handleNavClick = (index: number) => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const progress = (index + HOLD / 2) / total;
    window.scrollTo({
      top: trigger.start + (trigger.end - trigger.start) * progress,
      behavior: "smooth",
    });
  };

  return (
    <section ref={roofRef} id="projects" className={styles.projects}>
      <Reveal className={styles.container}>
        {header}
        <nav aria-label="프로젝트 바로가기" className={styles.nav}>
          {names.map((name, i) => (
            <button
              key={name}
              type="button"
              className={styles.navButton}
              aria-current={i === activeIndex}
              onClick={() => handleNavClick(i)}
            >
              <span className={styles.navOrder}>{String(i + 1).padStart(2, "0")}</span>
              {name}
            </button>
          ))}
        </nav>
        <ul className={styles.list}>{children}</ul>
      </Reveal>
    </section>
  );
}
