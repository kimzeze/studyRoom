import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-[80px] font-bold">메인 페이지</h2>
      <Link href="/signIn">
        <button className="w-[400px] rounded-full border-[2px] border-[#2B91FE] p-[10px] text-[30px] font-normal hover:underline">
          👉🏻 👉🏻 👉🏻 👉🏻 Login Page
        </button>
      </Link>
    </main>
  );
}
