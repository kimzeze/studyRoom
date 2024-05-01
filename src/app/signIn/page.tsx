import SignInForm from "./_components/SignInForm";

export default function SignIn() {
  return (
    <main className="flex items-center h-screen justify-center pt-[50px] bg-[#f1f1f1]">
      <section className="flex flex-col items-center">
        <h2 className="text-[100px] w-screen h-[140px] border-t-[1px] border-[#222] font-normal content-center pl-[50px] pr-[50px]">
          Welcome,
        </h2>
        <h2 className="text-[100px] w-screen h-[140px] border-t-[1px] border-black font-bold text-[#FF451F] content-center pl-[50px] pr-[50px] text-left">
          ( Frontend - Developers )
        </h2>
        <h2 className="text-[100px] w-screen h-[140px] border-t-[1px] border-black font-regular content-center pl-[50px] pr-[50px] text-right">
          👀 Check out
        </h2>
        <h1 className="text-[100px] w-screen h-[140px] border-t-[1px] border-black font-bold content-center pl-[50px] pr-[50px] text-left">
          🚀 Our - DevCave 🕳️🏃🏻
        </h1>
        {/* 테스트 페이지 섹션 */}
        <div className="flex justify-center items-center h-[140px] border-black">
          {/* 로그인 */}
          <SignInForm />
        </div>
      </section>
    </main>
  );
}
