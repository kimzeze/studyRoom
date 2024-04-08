import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-[80px] font-bold">OUR STUDY ROOM</h1>
      <h1 className="text-[80px] font-bold text-[#E3E0D1]">OUR STUDY ROOM</h1>
      <Link
        href={`/signIn`}
        className="text-[60px] font-bold hover:text-[#FF451F]"
      >
        LOGIN
      </Link>
      <Link
        href={`/signUp`}
        className="text-[60px] font-bold hover:text-[#FF451F]"
      >
        SIGNUP
      </Link>
    </main>
  );
}
