import "@/styles/global.css";

import { Metadata } from "next";

import Header from "@/components/Header/Header";

import { inter, pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "박재선 | Frontend Developer ",
  description: "사용자 문제를 직접 정의하고 구현하는 박재선의 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${pretendard.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
