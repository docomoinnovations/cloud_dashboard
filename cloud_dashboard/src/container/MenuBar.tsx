import { AWS_MENU_LIST, K8S_MENU_LIST, OAUTH2_CLIENT_SECRET, ROUTE_URL } from 'constant';
import CloudContext from 'model/CloudContext';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'service/state';
import { getUrl } from 'service/utility';

const refreshTokenByCodeGrant = async (clientId: string, refreshToken: string) => {
  const formData = new FormData();
  formData.append('grant_type', 'refresh_token');
  formData.append('client_id', clientId);
  formData.append('client_secret', OAUTH2_CLIENT_SECRET);
  formData.append('refresh_token', refreshToken);

  const res = await fetch(`/oauth/token`, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) {
    throw new Error('Refresh failed');
  }
  const res2 = await res.json();
  if ('access_token' in res2) {
    // read tokens
    const accessToken = res2['access_token'];
    const refreshToken2 = res2['refresh_token'];
    const expiresDatetime = (new Date()).getTime() + res2['expires_in'] * 1000;

    // save tokens to Localstrage
    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken2);
    window.localStorage.setItem('expiresDatetime', `${expiresDatetime}`);
  } else {
    throw new Error('Refresh failed');
  }
};

const MenuBar: React.VFC = () => {
  const { cloudContext, cloudContextList, dispatch } = useContext(AppContext);

  useEffect(() => {
    // If you don't have the access token, redirect route URL.
    const accessToken = window.localStorage.getItem('accessToken');
    const expiresDatetime = window.localStorage.getItem('expiresDatetime');
    if (accessToken === null || expiresDatetime == null) {
      window.location.href = ROUTE_URL;
      return;
    }

    // If the access token has expired, update it.
    console.group('Authorization Code Grant');
    const clientId = window.localStorage.getItem('clientId');
    const refreshToken = window.localStorage.getItem('refreshToken');
    if (clientId === null || refreshToken === null) {
      console.log('Client ID : No');
      console.error('Authorization failed.');
      console.groupEnd();
      window.location.href = ROUTE_URL;
      return;
    }
    console.log('Client ID : Yes');

    const now = (new Date()).getTime();
    if (now > parseInt(expiresDatetime, 10)) {
      console.log('Token expired : Yes');
      refreshTokenByCodeGrant(clientId, refreshToken).then(() => {
        console.log('Access token : Yes');
        console.groupEnd();
      }).catch(() => {
        console.log('Access token : No');
        console.error('Authorization failed.');
        console.groupEnd();
        window.location.href = ROUTE_URL;
      });
    } else {
      console.log('Token expired : No');
      console.groupEnd();
    }
  }, []);

  const setCloudContext = (cloudContext: CloudContext) => {
    dispatch({ type: 'setCloudContext', message: cloudContext });
  };

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiresDatetime');
    window.location.href = ROUTE_URL;
  };

  return <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="region region-navigation">
          <a className="logo navbar-btn pull-left" href="/" title="ホーム" rel="home">
            <img src="/themes/contrib/bootstrap_cloud/logo.svg" alt="ホーム" />
          </a>
        </div>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded={false}>
              {`${cloudContext.labelName}`} <span className="caret"></span>
            </a>
            <ul className="dropdown-menu" role="menu">
              {
                cloudContextList.map((r, index) => {
                  const list = r.cloudServiceProvider === 'aws_cloud'
                    ? AWS_MENU_LIST : K8S_MENU_LIST;
                  return <li role="presentation" key={index}>
                    <Link to={getUrl(list[0])} onClick={
                      () => setCloudContext(r)
                    }>{`${r.labelName}`}</Link>
                  </li>;
                })
              }
            </ul>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={logout}>logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}

export default MenuBar;