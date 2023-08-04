"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
// import { WithAuth } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        {/* <WithAuth> */}
        <body>{children}</body>
        {/* </WithAuth> */}
      </SessionProvider>
    </html>
  );
}
