import { OAUTH2_CLIENT_SECRET, ROUTE_URL } from 'constant';
import React, { useEffect } from 'react';

const CallbackView: React.VFC = () => {
  const requestTokenByCodeGrant = async (code: string, clientId: string, redirectUri :string) => {
    // request Access token
    const formData = new FormData();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', clientId);
    formData.append('client_secret', OAUTH2_CLIENT_SECRET);
    formData.append('code', code);
    formData.append('redirect_uri', redirectUri);

    const res = await fetch(`/oauth/token`, {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      throw new Error('Authorization failed');
    }
    const res2 = await res.json();
    if ('access_token' in res2) {
      // read tokens
      const accessToken = res2['access_token'];
      const refreshToken = res2['refresh_token'];
      const expiresDatetime = (new Date()).getTime() + res2['expires_in'] * 1000;

      // save tokens to Localstrage
      window.localStorage.setItem('accessToken', accessToken);
      window.localStorage.setItem('refreshToken', refreshToken);
      window.localStorage.setItem('expiresDatetime', `${expiresDatetime}`);
    } else {
      throw new Error('Authorization failed');
    }
  };

  useEffect(() => {
    console.group('Authorization Code Grant');

    // If you not have Client ID or Redirect URI, redirect route URL.
    const clientId = window.localStorage.getItem('clientId');
    const redirectUri = window.localStorage.getItem('redirectUri');
    if (clientId === null || redirectUri == null) {
      console.log('Client ID : No');
      console.error('Authorization failed.');
      console.groupEnd();
      window.location.href = ROUTE_URL;
      return;
    }
    console.log('Client ID : Yes');

    // If you don't have authorization code, redirect route URL.
    const params = new URL(window.location.href).searchParams;
    const code = params.get('code');
    if (code === null) {
      console.log('Authorization code : No');
      console.error('Authorization failed.');
      console.groupEnd();
      window.location.href = ROUTE_URL;
      return;
    }
    console.log('authorization code : Yes');

    // If you can't get the access token, redirect route URL.
    requestTokenByCodeGrant(code, clientId, redirectUri).then(() => {
      console.log('Access token : Yes');
      console.groupEnd();
      window.location.href = ROUTE_URL + '/main';
    }).catch(() => {
      console.log('Access token : No');
      console.error('Authorization failed.');
      console.groupEnd();
      window.location.href = ROUTE_URL;
    });
  }, []);

  return (
    <h2>Please waiting...</h2>
  );
}

export default CallbackView;
