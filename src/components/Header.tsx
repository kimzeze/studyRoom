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
    <header className="flex justify-between items-center h-[80px] border-b-[1px] border-primary px-[30px] w-screen text-24 font-medium">
      {/* 헤더 로고 이미지 */}
      <Link href={"/"}>
        <Image
          className="border border-primary"
          src={logo}
          alt="DevCave"
          width={200}
        ></Image>
      </Link>
      {/* 네비게이션 */}
      <nav className="border border-primary w-[800px]">
        <ul className="flex flex-row justify-between">
          <li>테스트</li>
          <li>테스트</li>
          <li>테스트</li>
          <li>테스트</li>
        </ul>
      </nav>
      {/* 사용자 상호작용 */}
      <div className="border border-primary w-[200px] flex flex-row justify-between">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </header>
  );
}
