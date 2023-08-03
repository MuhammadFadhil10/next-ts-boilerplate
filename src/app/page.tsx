"use client";

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Your boilerplate!</h1>

        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </main>
  );
}
