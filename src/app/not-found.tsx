import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-[20px]">
      <h1 className="text-[60px] font-semibold">
        Spelunking through this site? 👀
      </h1>
      <h1 className="text-[60px] font-semibold text-warning">
        Watch out for the 🕳️ 404 sinkholes!
      </h1>
      <Link
        className="text-[40px] font-semibold hover:text-tertiary mt-[80px]"
        href="/"
      >
        👉🏻 Return to base camp 🏃🏻
      </Link>
    </main>
  );
}
