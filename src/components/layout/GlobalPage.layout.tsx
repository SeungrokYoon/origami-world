import { PropsWithChildren } from "react";

export default function GlobalPageLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full max-w-5xl">
      <nav className="flex h-20 w-full  justify-between bg-green-300 font-mono text-sm">
        <a href="/">Logo</a>
        <div className="flex">
          <a
            href="/signin"
            className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
          >
            signin
          </a>
          <a
            href="/signup"
            className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
          >
            signup
          </a>
        </div>
      </nav>
      {children}
    </main>
  );
}
