import React from 'react';
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error('Invalid Configs');
  }

  const handleOnRedirectCallback = (appState?: AppState, user?: User) => {
    console.log('appState:', appState);
    console.log('user:', user);

    // window.history.replaceState(
    //   {},
    //   document.title,
    //   appState?.returnTo || window.location.pathname
    // );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={handleOnRedirectCallback}>
      {children}
    </Auth0Provider>
  );
};

export default Provider;
