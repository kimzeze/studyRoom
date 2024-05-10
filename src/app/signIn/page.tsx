import SignInForm from "./_components/SignInForm";

export default function SignIn() {
  return (
    <main className="flex h-screen items-center justify-center bg-[#f1f1f1] pt-[50px]">
      <section className="flex flex-col items-center">
        <h2 className="h-[140px] w-screen content-center border-t-[1px] border-[#222] pl-[50px] pr-[50px] text-[100px] font-normal">
          Welcome,
        </h2>
        <h2 className="h-[140px] w-screen content-center border-t-[1px] border-black pl-[50px] pr-[50px] text-left text-[100px] font-bold text-[#FF451F]">
          ( Frontend - Developers )
        </h2>
        <h2 className="h-[140px] w-screen content-center border-t-[1px] border-black pl-[50px] pr-[50px] text-right text-[100px] font-regular">
          👀 Check out
        </h2>
        <h1 className="h-[140px] w-screen content-center border-t-[1px] border-black pl-[50px] pr-[50px] text-left text-[100px] font-bold">
          🚀 Our - DevCave 🕳️🏃🏻
        </h1>
        {/* 테스트 페이지 섹션 */}
        <div className="flex h-[140px] items-center justify-center border-black">
          {/* 로그인 */}
          <SignInForm />
        </div>
      </section>
    </main>
  );
}
