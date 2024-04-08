import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-[80px] font-bold">OUR STUDY ROOM</h1>
      <h1 className="text-[80px] font-bold text-[#E3E0D1]">OUR STUDY ROOM</h1>
      {/* 테스트 페이지 섹션 */}
      <section className="flex justify-center items-center flex-col pt-[100px]">
        {/* 로그인 */}
        <Link
          href={`/signIn`}
          className="text-[60px] font-bold hover:text-[#FF451F]"
        >
          LOGIN
        </Link>
        {/* 회원가입 */}
        <Link
          href={`/signUp`}
          className="text-[60px] font-bold hover:text-[#FF451F]"
        >
          SIGNUP
        </Link>
      </section>
    </main>
  );
}
