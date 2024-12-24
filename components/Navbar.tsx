"use client";

import { log } from "console";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  return (
    <SessionProvider>
      <h1 className="justify-between">Mizer</h1>
      {session.data?.user && (
        <button
          className="bg-blue-500 rounded-2xl border-none p-2 m-3"
          onClick={() => signOut}
        >
          Log Out
        </button>
      )}
      {!session.data?.user && (
        <button
          className="bg-blue-500 rounded-2xl border-none p-2 m-3"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </SessionProvider>
  );
}
