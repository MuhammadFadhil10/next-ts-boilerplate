// "use client";

import { SignOutButton } from "@/components";
import WithAuthPage from "@/components/utils/WithAuthPage";

export default function Home() {
  return (
    <WithAuthPage>
      <main>
        <div>
          <h1>Your boilerplate!</h1>

          <SignOutButton />
        </div>
      </main>
    </WithAuthPage>
  );
}
