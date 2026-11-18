import "@/styles/global.css";

import { Metadata } from "next";

import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";

import { inter, pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "박재선 | 프론트엔드, IT 기획 ",
  description: "사용자 문제를 찾아 기획하고 구현하는 박재선의 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${pretendard.variable}`}>
      <body>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
