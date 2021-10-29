import { AWS_MENU_LIST, K8S_MENU_LIST, OAUTH2_CLIENT_SECRET, ROUTE_URL } from 'constant';
import CloudContext from 'model/CloudContext';
import React, { useContext, useEffect } from 'react';
import { AppContext } from 'service/state';
import { getEntityListViewUrl, getLaunchTemplateViewUrl } from 'service/utility';
import { useTranslation } from 'react-i18next';
import MenuLink from 'atoms/MenuLink';
import MenuAnchor from 'atoms/MenuAnchor';

const refreshTokenByCodeGrant = async (clientId: string, refreshToken: string) => {
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
    throw new Error('Refresh failed');
  }
  const response_json = await response.json();
  if ('access_token' in response_json) {
    // read tokens
    const accessToken = response_json['access_token'];
    const refreshToken2 = response_json['refresh_token'];
    const expiresDatetime = (new Date()).getTime() + response_json['expires_in'] * 1000;

    // save tokens to Localstrage
    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', refreshToken2);
    window.localStorage.setItem('expiresDatetime', `${expiresDatetime}`);
  } else {
    throw new Error('Refresh failed');
  }
};

const checkAndRefreshToken = async () => {
  // If you don't have the access token, redirect route URL.
  const accessToken = window.localStorage.getItem('accessToken');
  const expiresDatetime = window.localStorage.getItem('expiresDatetime');
  if (accessToken === null || expiresDatetime == null) {
    window.location.href = ROUTE_URL;
    return;
  }

  // If the information required to update the token cannot be loaded,
  // redirect route URL.
  console.group('Authorization Code Grant');
  const res1 = await fetch('/clouds/cloud_dashboard/config/client_id');
  const refreshToken = window.localStorage.getItem('refreshToken');
  if (!res1.ok || refreshToken === null) {
    console.log('Client ID : No');
    console.error('Authorization failed.');
    console.groupEnd();
    window.location.href = ROUTE_URL;
    return;
  }
  const clientId = (await res1.json()).id;
  console.log('Client ID : Yes');

  // If the access token has expired, update it.
  const now = (new Date()).getTime();
  if (now <= parseInt(expiresDatetime, 10)) {
    console.log('Token expired : No');
    console.groupEnd();
    return;
  }
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
};

const MenuBar: React.VFC = () => {
  const { cloudContext, cloudContextList, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    const init = async () => {
      await checkAndRefreshToken();
      if (window.localStorage.getItem('jsonapiServerUri') === null) {
        const res = await fetch('/clouds/cloud_dashboard/config/jsonapi_server_uri');
        if (res.ok) {
          window.localStorage.setItem('jsonapiServerUri', (await res.json()).uri);
        }
      }
    }
    init();
  }, []);

  const setCloudContext = (cloudContext: CloudContext) => {
    dispatch({ type: 'setCloudContext', message: cloudContext });
  };

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiresDatetime');
  };

  return <header className="navbar navbar-default navbar-fixed-top" role="banner">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="region region-navigation">
          <a className="logo navbar-btn pull-left" href="/" title={t('Home')} rel="home">
            <img src="/themes/contrib/bootstrap_cloud/logo.svg" alt={t('Home')} />
          </a>
        </div>
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse">
        <div className="region region-navigation-collapsible">
          <nav role="navigation" className="contextual-region">
            <h2 className="sr-only">Main navigation</h2>
            <ul className="nav navbar-nav" role="menu">
              <MenuLink to="/providers">{t('Home')}</MenuLink>
              <li className="dropdown">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {
                    `${cloudContext.labelName}`
                  } <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    cloudContextList.map((r, index) => {
                      const list = r.cloudServiceProvider === 'aws_cloud'
                        ? AWS_MENU_LIST : K8S_MENU_LIST;
                      return <MenuLink key={index}
                        to={getEntityListViewUrl(list[0])} onClick={
                        () => setCloudContext(r)
                      }>{`${r.labelName}`}</MenuLink>;
                    })
                  }
                </ul>
              </li>
              <li className="dropdown">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Launch template <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  {
                    cloudContextList.map((r, index) => {
                      return <MenuLink key={index}
                        to={getLaunchTemplateViewUrl(r)} onClick={
                        () => setCloudContext(r)
                      }>{`${r.labelName}`}</MenuLink>;
                    })
                  }
                </ul>
              </li>
              <li className="dropdown">
                <a href="/clouds/design" className="dropdown-toggle" data-toggle="dropdown">Design <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-submenu">
                    <a href="/clouds" className="dropdown-submenu-toggle">Projects <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                      {
                        cloudContextList.filter((r) => {
                          return r.cloudServiceProvider === 'k8s' && r.name !== 'ALL';
                        }).map((r, index) => {
                          return <MenuAnchor key={index} href={`/clouds/design/project/${r.name}`}>{r.labelName}</MenuAnchor>;
                        })
                      }
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="/clouds" className="dropdown-submenu-toggle">Stores <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                      <MenuAnchor href="/clouds/design/store/k8s_cost_store">K8s cost store</MenuAnchor>
                      <MenuAnchor href="/clouds/design/store/k8s_namespace_resource_store">K8s namespace resource store</MenuAnchor>
                      <MenuAnchor href="/clouds/design/store/k8s_node_resource_store">K8s node resource store</MenuAnchor>
                      <MenuAnchor href="/clouds/design/store/k8s_pod_resource_store">K8s pod resource store</MenuAnchor>
                    </ul>
                  </li>
                </ul>
              </li>
              <MenuAnchor href="/admin/structure/cloud_config">{t('CloudConfig')}</MenuAnchor>
            </ul>
          </nav>
          <nav role="navigation" className="contextual-region">
            <h2 className="sr-only">User account menu</h2>
            <ul className="menu menu--account nav navbar-nav navbar-right">
              <MenuAnchor className="first" href="/user">{t('User')}</MenuAnchor>
              <MenuLink className="last" to="/" onClick={logout}>{t('Logout')}</MenuLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>;
}

export default MenuBar;
