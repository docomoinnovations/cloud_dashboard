import React, { useEffect } from 'react';
import { ROUTE_URL } from 'constant';
import { requestTokenByCodeGrant } from 'service/utility';
import Loader from 'react-loader-spinner';

const callback = async () => {
  console.group('Authorization Code Grant');

  // If you not have Client ID or Redirect URI, redirect route URL.
  const clientIdResponse = await fetch('/clouds/cloud_dashboard/config/client_id');
  const callbackUriResponse = await fetch('/clouds/cloud_dashboard/config/callback_uri');
  if (!clientIdResponse.ok || !callbackUriResponse.ok) {
    console.log('Client ID : No');
    console.error('Authorization failed.');
    console.groupEnd();
    window.location.href = ROUTE_URL;
    return;
  }
  const clientId = (await clientIdResponse.json()).id;
  const redirectUri = (await callbackUriResponse.json()).uri;
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

const CallbackForm = () => {
  useEffect(() => {
    callback();
  }, []);

  return <form>
    <div style={{ display: 'flex' }}>
      <Loader
        type="Grid"
        color="#00BFFF"
        height="3rem"
        width="3rem"
      />
      <span style={{
        fontSize: '2rem',
        marginLeft: '2rem'
      }}>Orchestrating the clouds...</span>
    </div>
  </form>;
}

export default CallbackForm;
