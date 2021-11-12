import React, { useEffect, useState } from 'react';

const LoginForm = () => {
  const [clientId, setClientId] = useState('');
  const [redirectUri, setRedirectUri] = useState('');

  const init = async () => {
    window.localStorage.removeItem('jsonapiServerUri');
    const clientIdResponse = await fetch('/clouds/cloud_dashboard/config/client_id');
    const callbackUriResponse = await fetch('/clouds/cloud_dashboard/config/callback_uri');
    if (clientIdResponse.ok && callbackUriResponse.ok) {
      setClientId((await clientIdResponse.json()).id);
      setRedirectUri((await callbackUriResponse.json()).uri);
    }
  };

  const login = () => {
    // location transition for OAuth2 authorization code grant
    const url = `/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = url;
  };

  useEffect(() => {
    init();
  }, []);

  return <form>
    <button type="button" className="btn btn-default"
      onClick={login}
      disabled={clientId === ''}>Log in</button>
  </form>;
}

export default LoginForm;
