import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevCave",
  description: "소규모의 스터디 그룹을 위한 협업 및 학습관리 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
