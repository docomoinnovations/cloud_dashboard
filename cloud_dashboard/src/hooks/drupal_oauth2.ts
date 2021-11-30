import { OAUTH2_CLIENT_SECRET, ROUTE_URL } from "constant";
import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "service/utility";

const LOGIN_FORM_URI = ROUTE_URL;
const ENTER_URI = ROUTE_URL + '/aws_cloud/instance';

/**
 * Show error dialog utility.
 */
const showErrorDialog = (message: string) => {
  window.alert(`Error: ${message}`);
  console.error(`Error: ${message}`);
}

/**
 * Go to callback URL for OAuth2 authorization code grant.
 */
const toCallbackUrl = async () => {
  try {
    // Load config.
    const clientIdResponse = await fetch('/clouds/cloud_dashboard/config/client_id');
    const callbackUriResponse = await fetch('/clouds/cloud_dashboard/config/callback_uri');
    if (!clientIdResponse.ok || !callbackUriResponse.ok) {
      showErrorDialog('Could not obtain the information required for login.');
      return;
    }
    const clientId = (await clientIdResponse.json()).id;
    const redirectUri = (await callbackUriResponse.json()).uri;

    // Location transition for OAuth2 authorization code grant.
    const url = `/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = url;
  } catch (e) {
    showErrorDialog('Could not obtain the information required for login.');
    console.error(e);
  }
}

/**
 * Get tokens by Oauth2 Authorization Code Grant.
 *
 * @returns Tokens.
 */
const getTokenByAuthorizationCodeGrantImpl = async () => {
  console.group('Authorization Code Grant');

  // If you not have Client ID or Redirect URI, redirect route URL.
  const clientIdResponse = await fetch('/clouds/cloud_dashboard/config/client_id');
  const callbackUriResponse = await fetch('/clouds/cloud_dashboard/config/callback_uri');
  if (!clientIdResponse.ok || !callbackUriResponse.ok) {
    console.log('Client ID : No');
    console.error('Authorization failed.');
    console.groupEnd();
    return null;
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
    return null;
  }
  console.log('Authorization code : Yes');

  // If you can't get the access token, redirect route URL.
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
    console.log('Token Request : No');
    console.error('Authorization failed.');
    console.groupEnd();
    return null;
  }
  console.log('Token Request : Yes');

  const response_json = await response.json();
  if (!('access_token' in response_json)) { 
    console.log('Access Token : No');
    console.error('Authorization failed.');
    console.groupEnd();
    return null;
  }
  console.log('Access Token : Yes');
  console.groupEnd();
  const accessToken = response_json['access_token'];
  const refreshToken = response_json['refresh_token'];
  const expiresDatetime = (new Date()).getTime() + response_json['expires_in'] * 1000;

  return {
    accessToken,
    refreshToken,
    expiresDatetime: `${expiresDatetime}`,
  };
}

/**
 * Get tokens by refresh token.
 * @param refreshToken Refresh token.
 * @returns Tokens.
 */
const refreshTokenFunction = async (refreshToken: string) => {
  console.group('Authorization Code Grant');

  // If the information required to update the token cannot be loaded,
  // redirect route URL.
  const clientIdResponse = await fetch('/clouds/cloud_dashboard/config/client_id');
  if (!clientIdResponse.ok) {
    console.log('Client ID : No');
    console.error('Authorization failed.');
    return null;
  }
  const clientId = (await clientIdResponse.json()).id;
  console.log('Client ID : Yes');

  // If you can't get the access token, redirect route URL.
  const formData = new FormData();
  formData.append('grant_type', 'refresh_token');
  formData.append('client_id', clientId);
  formData.append('client_secret', OAUTH2_CLIENT_SECRET);
  formData.append('refresh_token', refreshToken);

  const response = await fetch(`/oauth/token`, {
    method: 'POST',
    body: formData
  });
  if (!response.ok) {
    console.log('Token Request : No');
    console.error('Refresh failed.');
    console.groupEnd();
    return null;
  }
  console.log('Token Request : Yes');

  const response_json = await response.json();
  if (!('access_token' in response_json)) { 
    console.log('Access Token : No');
    console.error('Authorization failed.');
    console.groupEnd();
    return null;
  }
  console.log('Access Token : Yes');
  console.groupEnd();
  const accessToken = response_json['access_token'];
  const refreshTokenFromJson = response_json['refresh_token'];
  const expiresDatetime = (new Date()).getTime() + response_json['expires_in'] * 1000;

  return {
    accessToken,
    refreshToken: refreshTokenFromJson,
    expiresDatetime: `${expiresDatetime}`,
  };
}

/**
 * Logout from this application.
 */
const logout = () => {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
  window.localStorage.removeItem('expiresDatetime');
  window.location.href = LOGIN_FORM_URI;
}

const useDrupalOAuth2 = () => {
  const [accessToken, setAccessToken] = useState(
    getLocalStorageItem('accessToken', '')
  );
  const [refreshToken, setRefreshToken] = useState(
    getLocalStorageItem('refreshToken', '')
  );
  const [expiresDatetime, setExpiresDatetime] = useState(
    getLocalStorageItem('expiresDatetime', '')
  );

  useEffect(() => {
    console.group('Token status');
    console.log('accessToken=', accessToken);
    console.log('refreshToken=', refreshToken);
    console.log('expiresDatetime=', expiresDatetime);
    console.groupEnd();
  }, [accessToken, refreshToken, expiresDatetime]);

  const getTokenByAuthorizationCodeGrant = async () => {
    try {
      const result = await getTokenByAuthorizationCodeGrantImpl();
      if (result !== null) {
        setLocalStorageItem('accessToken', result.accessToken);
        setLocalStorageItem('refreshToken', result.refreshToken);
        setLocalStorageItem('expiresDatetime', result.expiresDatetime);
        setAccessToken(result.accessToken);
        setRefreshToken(result.refreshToken);
        setExpiresDatetime(result.expiresDatetime);
        window.location.href = ENTER_URI;
      } else {
        showErrorDialog('Could not obtain the information required for login.');
        window.location.href = LOGIN_FORM_URI;
      }
    } catch (e) {
      showErrorDialog('Could not obtain the information required for login.');
      console.error(e);
      window.location.href = LOGIN_FORM_URI;
    }
  }

  const checkAndRefreshToken = async () => {
    // Log out when the token is not loaded.
    if (accessToken === '' || refreshToken === '' || expiresDatetime === '') {
      logout();
      return;
    }

    // Check the expiration date of the token,
    // and if it is still valid, do nothing.
    const now = (new Date()).getTime();
    if (now <= parseInt(expiresDatetime, 10)) {
      return;
    }

    // Update the token.
    try {
      const result = await refreshTokenFunction(refreshToken);
      if (result !== null) {
        setLocalStorageItem('accessToken', result.accessToken);
        setLocalStorageItem('refreshToken', result.refreshToken);
        setLocalStorageItem('expiresDatetime', result.expiresDatetime);
        setAccessToken(result.accessToken);
        setRefreshToken(result.refreshToken);
        setExpiresDatetime(result.expiresDatetime);
      } else {
        showErrorDialog('Could not renew token expiration date.');
        logout();
      }
    } catch (e) {
      showErrorDialog('Could not renew token expiration date.');
      console.error(e);
      logout();
    }
  }

  return {
    toCallbackUrl,
    getTokenByAuthorizationCodeGrant,
    checkAndRefreshToken,
    logout,
  }
}

export default useDrupalOAuth2;
