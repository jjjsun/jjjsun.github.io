import "@/styles/global.css";

import Header from "@/components/Header/Header";

import { inter, pretendard } from "./fonts";

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
