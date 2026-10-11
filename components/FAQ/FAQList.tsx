"use client";

import { useState } from "react";

import * as styles from "./FAQ.css";
import FAQItem, { IFaq } from "./FAQItem";

type TFAQListProps = {
  faqs: IFaq[];
};

export default function FAQList({ faqs }: TFAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handelToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className={styles.list}>
      {faqs.map((item, index) => (
        <FAQItem
          key={item.question}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={handelToggle}
        />
      ))}
    </ul>
  );
}
