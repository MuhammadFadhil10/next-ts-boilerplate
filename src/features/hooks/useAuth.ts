import * as React from "react";
import { ClientSafeProvider, getProviders } from "next-auth/react";

export const useAuth = () => {
  const [providers, setProviders] = React.useState<ClientSafeProvider>();

  const getDataProviders = React.useCallback(async () => {
    const data = await getProviders();

    setProviders(data as unknown as ClientSafeProvider);
  }, []);

  React.useEffect(() => {
    getDataProviders();
  }, [getDataProviders]);

  return {
    providers,
  };
};
