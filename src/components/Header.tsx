"use client";

import Image from "next/image";
import logo from "/public/logo.svg";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return pathname === "/signIn" ? (
    <></>
  ) : (
    <header className="flex justify-between items-center h-[80px] border-b-[1px] border-primary px-[30px]">
      <Image src={logo} alt="DevCave" width={181} height={48}></Image>
      <h1>header</h1>
    </header>
  );
}
