"use client";

import Image from "next/image";
import logo from "/public/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  return pathname === "/signIn" ? (
    <></>
  ) : (
    <header className="flex h-[80px] w-screen items-center justify-between border-b-[1px] border-primary px-[30px] text-18 font-medium">
      {/* 헤더 로고 이미지 */}
      <Link href={"/"}>
        <Image
          className="border border-primary"
          src={logo}
          alt="DevCave"
          width={160}
        ></Image>
      </Link>
      {/* 네비게이션 */}
      <nav className="w-[800px] border border-primary">
        <ul className="flex flex-row justify-between">
          <li>테스트</li>
          <li>테스트</li>
          <li>테스트</li>
          <li>테스트</li>
        </ul>
      </nav>
      {/* 사용자 상호작용 */}
      <div className="flex w-[200px] flex-row justify-between border border-primary">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </header>
  );
}
