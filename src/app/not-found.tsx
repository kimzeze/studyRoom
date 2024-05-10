import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-[20px]">
      <h1 className="text-[60px] font-semibold">
        Spelunking through this site? 👀
      </h1>
      <h1 className="text-[60px] font-semibold text-warning">
        Watch out for the 🕳️ 404 sinkholes!
      </h1>
      <Link
        className="mt-[80px] text-[40px] font-semibold hover:text-tertiary"
        href="/"
      >
        👉🏻 Return to base camp 🏃🏻
      </Link>
    </main>
  );
}
