import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.REACT_APP_AUTH0_REDIRECT_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error(
      'Please define REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID, and REACT_APP_AUTH0_REDIRECT_URI in your .env file'
    );
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}>
      {children}
    </Auth0Provider>
  );
};

export default Provider;
