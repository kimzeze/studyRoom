import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link
        href={`/quiz/0`}
        className="border px-[16px] py-[4px] rounded-[8px] hover:bg-[#454545]"
      >
        시작하기
      </Link>
    </main>
  );
}
