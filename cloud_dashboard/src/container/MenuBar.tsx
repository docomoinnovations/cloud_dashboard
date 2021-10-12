import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CloudContext from 'model/CloudContext';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'service/state';
import { getUrl } from 'service/utility';

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

    // If the access token has expired, redirect route URL.
    const now = (new Date()).getTime();
    if (now > parseInt(expiresDatetime, 10)) {
      window.location.href = ROUTE_URL;
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
