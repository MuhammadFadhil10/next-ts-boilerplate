"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log("session: ", session);

  return (
    <main>
      <div>
        <h1>Your boilerplate!</h1>

        <button onClick={() => signIn()}>Sign in</button>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </main>
  );
}
