import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300 p-6">
      <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Welcome
      </h1>
      <div className="mt-8 flex gap-4">
        <Link
          href="/dashboard"
          className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-semibold px-6 py-2.5 text-sm transition-all shadow-md"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
