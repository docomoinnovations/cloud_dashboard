import React, { useEffect, useState } from 'react';
import { OAUTH2_CLIENT_LABEL } from 'constant';

const LoginForm: React.VFC = () => {
  const [clientId, setClientId] = useState('');
  const [redirectUri, setRedirectUri] = useState('');

  const init = async () => {
    // find OAuth2 client ID by JSON:API
    const res = await (await fetch('/jsonapi/consumer/consumer')).json();
    const temp = res.data.filter((record: any) => {
      return record.attributes.label === OAUTH2_CLIENT_LABEL;
    });
    if (temp.length >= 1) {
      // found
      setClientId(temp[0].id);
      setRedirectUri(temp[0].attributes.redirect);
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

  useEffect(() => {
    window.localStorage.setItem('clientId', clientId);
  }, [clientId]);

  useEffect(() => {
    window.localStorage.setItem('redirectUri', redirectUri);
  }, [redirectUri]);

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <form>
          <button type="button" className="btn btn-default"
            onClick={login}
            disabled={clientId === ''}>login</button>
        </form>
      </div>
    </div>
  </div>;
}

export default LoginForm;
