import React, { useContext, useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import { Link, useHistory } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { getUrl } from 'service/utility';
import { AppContext } from 'service/state';
import CloudContext from 'model/CloudContext';

const MainForm: React.VFC<{
  menuType: CloudServiceProvider,
  menuName: string
}> = ({ menuType, menuName }) => {
  const { cloudContext, cloudContextList, dispatch } = useContext(AppContext);
  const history = useHistory();

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

  useEffect(() => {
    if (cloudContext.cloudServiceProvider !== menuType) {
      switch (cloudContext.cloudServiceProvider) {
        case 'aws_cloud':
          history.push(getUrl(AWS_MENU_LIST[0]));
          break;
        case 'k8s':
          history.push(getUrl(K8S_MENU_LIST[0]));
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext]);

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiresDatetime');
    window.location.href = ROUTE_URL;
  };

  const setCloudContext = (cloudContext: CloudContext) => {
    dispatch({ type: 'setCloudContext', message: cloudContext });
  };

  return <>
    <nav className="navbar navbar-default">
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
    </nav>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ul className="nav nav-tabs">
            {(menuType === 'aws_cloud' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
              return <li key={menu.labelName} role="presentation"
                className={menu.labelName === menuName ? 'active' : ''}>
                <Link to={getUrl(menu)}>
                  {menu.labelName}
                </Link>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  </>;
}

export default MainForm;
