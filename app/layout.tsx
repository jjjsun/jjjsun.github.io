import "@/styles/global.css";

import { Metadata } from "next";

import Header from "@/components/Header/Header";

import { inter, pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "박재선 | Frontend Developer",
  description: "프론트엔드 개발자 박재선의 포트폴리오",
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
