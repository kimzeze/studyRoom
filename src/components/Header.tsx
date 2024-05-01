import Image from "next/image";
import logo from "/public/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] border-b-[1px] border-primary px-[30px]">
      <Image src={logo} alt="DevCave" width={181} height={48}></Image>
      <h1>header</h1>
    </header>
  );
}
