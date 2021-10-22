import { OAUTH2_CLIENT_SECRET, ROUTE_URL } from 'constant';
import React, { useEffect } from 'react';

const requestTokenByCodeGrant = async (code: string, clientId: string, redirectUri: string) => {
  // request Access token
  const formData = new FormData();
  formData.append('grant_type', 'authorization_code');
  formData.append('client_id', clientId);
  formData.append('client_secret', OAUTH2_CLIENT_SECRET);
  formData.append('code', code);
  formData.append('redirect_uri', redirectUri);

  const response = await fetch(`/oauth/token`, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    throw new Error('Authorization failed');
  }
  const response_json = await response.json();
  if ('access_token' in response_json) {
    // read tokens
    const accessToken = response_json['access_token'];
    const refreshToken = response_json['refresh_token'];
    const expiresDatetime = (new Date()).getTime() + response_json['expires_in'] * 1000;

    // save tokens to Localstrage
    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken);
    window.localStorage.setItem('expiresDatetime', `${expiresDatetime}`);
  } else {
    throw new Error('Authorization failed');
  }
};

const callback = async () => {
  console.group('Authorization Code Grant');

  // If you not have Client ID or Redirect URI, redirect route URL.
  const res1 = await fetch('/clouds/cloud_dashboard/config/client_id');
  const res2 = await fetch('/clouds/cloud_dashboard/config/callback_uri');
  if (!res1.ok || !res2.ok) {
    console.log('Client ID : No');
    console.error('Authorization failed.');
    console.groupEnd();
    window.location.href = ROUTE_URL;
    return;
  }
  const clientId = (await res1.json()).id;
  const redirectUri = (await res2.json()).uri;
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
  try {
    await requestTokenByCodeGrant(code, clientId, redirectUri);
    console.log('Access token : Yes');
    console.groupEnd();
    window.location.href = ROUTE_URL + '/aws_cloud/instance';
  } catch {
    console.log('Access token : No');
    console.error('Authorization failed.');
    console.groupEnd();
    window.location.href = ROUTE_URL;
  }
}

const CallbackView: React.VFC = () => {
  useEffect(() => {
    callback();
  }, []);

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h2>Please waiting...</h2>
      </div>
    </div>
  </div>;
}

export default CallbackView;
