import React, { useEffect, useState } from 'react';

const LoginForm: React.VFC = () => {
  const [clientId, setClientId] = useState('');
  const [redirectUri, setRedirectUri] = useState('');

  const init = async () => {
    window.localStorage.removeItem('jsonapiServerUri');
    const res1 = await fetch('/clouds/cloud_dashboard/config/client_id');
    const res2 = await fetch('/clouds/cloud_dashboard/config/callback_uri');
    if (res1.ok && res2.ok) {
      setClientId((await res1.json()).id);
      setRedirectUri((await res2.json()).uri);
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
      disabled={clientId === ''}>login</button>
  </form>;
}

export default LoginForm;
