import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-[20px]">
      <p className="text-[24px]">미지의 공간을 발견하셨습니다!</p>
      <Link href="/">지구로 무사 귀환하기</Link>
    </main>
  );
}
