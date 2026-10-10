"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { MENU_ITEMS } from "./constants";
import * as styles from "./Header.css";

export default function NavLinks() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    //화면 위에서 40%에 얇은 띠에 걸친 섹션이 활성화
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
          if (isIntersecting) {
            setActiveId(target.id);
            return;
          }
          //활성 섹션이 띠 아래로 빠지면 Hero 구간으로 복귀
          if (boundingClientRect.top > 0) {
            setActiveId((prev) => (prev === target.id ? null : prev));
          }
        });
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    MENU_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="주 메뉴">
      <ul className={styles.list}>
        {MENU_ITEMS.map(({ id, label, ko }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={styles.link}
              aria-current={activeId === id ? "location" : undefined}
            >
              {label} <span className={styles.ko}>{ko}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
