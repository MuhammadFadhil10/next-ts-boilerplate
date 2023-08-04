"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { useAuth } from "@/features";

export default function Page() {
  const { providers } = useAuth();

  return (
    <>
      {providers && (
        <>
          <h1>Signin page</h1>

          {Object.values(providers).map((provider) => (
            <button key={provider.name} onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          ))}
        </>
      )}
    </>
  );
}
