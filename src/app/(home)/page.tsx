import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <h2 className="text-[80px] font-bold">메인 페이지</h2>
      <Link href="/signIn">
        <button className="text-[30px] w-[400px] font-normal hover:underline border-[#2B91FE] p-[10px] border-[2px] rounded-full">
          👉🏻 👉🏻 👉🏻 👉🏻 Login Page
        </button>
      </Link>
    </main>
  );
}
