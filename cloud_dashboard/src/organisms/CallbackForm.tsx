import React, { useEffect } from 'react';
import { ROUTE_URL } from 'constant';
import { requestTokenByCodeGrant } from 'service/utility';

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

const CallbackForm: React.VFC = () => {
  useEffect(() => {
    callback();
  }, []);

  return <form>
      <h2>Please waiting...</h2>
    </form>;
}

export default CallbackForm;
