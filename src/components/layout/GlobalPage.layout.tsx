"use client";

import { useFireBaseAuthContext } from "@/context/FirebaseContextProvider";
import signOut from "@/firebase/auth/sign-out";
import { PropsWithChildren } from "react";

export default function GlobalPageLayout({ children }: PropsWithChildren) {
  const { loggedIn } = useFireBaseAuthContext();

  return (
    <main className="min-h-screen w-full max-w-5xl">
      <nav className="flex h-20 w-full  justify-between bg-green-300 font-mono text-sm">
        <a href="/">Logo</a>
        <div className="flex">
          {!loggedIn ? (
            <>
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
            </>
          ) : (
            <button
              className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
              onClick={() => signOut()}
            >
              signout
            </button>
          )}
          <a
            href="/workspace"
            className="inline-flex w-fit items-center justify-center p-2 text-center hover:bg-slate-500 hover:text-white"
          >
            workspace
          </a>
        </div>
      </nav>
      {children}
    </main>
  );
}
