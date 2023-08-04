import * as React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
  redirectUrl?: string;
}

export default async function WithAuthPage({
  children,
  redirectUrl = "/auth/signin",
}: Props) {
  const session = await getSession();

  if (!session) {
    redirect(redirectUrl);
  }

  return <>{children}</>;
}

async function getSession() {
  return await getServerSession();
}
