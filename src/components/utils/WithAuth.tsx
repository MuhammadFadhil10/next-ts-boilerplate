"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode;
  redirectUrl?: string;
}

const Component = ({ children, redirectUrl = "/auth/signin" }: Props) => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (!session && status !== "loading") {
    push(redirectUrl);
  }

  return <>{children}</>;
};

export const WithAuth = React.memo(Component);
