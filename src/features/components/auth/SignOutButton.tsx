"use client";

import { signOut } from "next-auth/react";

export const SignOutButton = () => (
  <button onClick={() => signOut()}>Sign out</button>
);
