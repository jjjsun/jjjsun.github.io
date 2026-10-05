"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import * as styles from "./PinTest.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PANELS = ["첫 번째 화면", "두 번째 화면", "세 번째 화면"];

export function PinTest() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (panels.length - 1)}`,
          pin: true,
          scrub: 0.4,
          markers: true,
        },
      });

      panels.slice(1).forEach((panel, index) => {
        tl.to(panels[index], { autoAlpha: 0, y: -40 }).fromTo(
          panel,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0 },
          "<",
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section ref={sectionRef} className={styles.section}>
        {PANELS.map((text) => (
          <div key={text} data-panel className={styles.panel}>
            {text}
          </div>
        ))}
      </section>
      <div className={styles.after}>고정이 풀린 뒤의 영역</div>
    </>
  );
}
