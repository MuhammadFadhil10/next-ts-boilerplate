"use client";

import * as React from "react";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";

export default function Page() {
  const [providers, setProviders] = React.useState<ClientSafeProvider>();

  const getDataProviders = React.useCallback(async () => {
    const data = await getProviders();

    setProviders(data as unknown as ClientSafeProvider);
  }, []);

  React.useEffect(() => {
    getDataProviders();
  }, [getDataProviders]);

  return (
    <>
      {providers && (
        <>
          <h1>Signin page</h1>

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
}
