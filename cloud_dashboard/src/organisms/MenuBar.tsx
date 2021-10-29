import React, { useContext, useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST } from 'constant';
import CloudContext from 'model/CloudContext';
import { AppContext } from 'service/state';
import { checkAndRefreshToken, getEntityListViewUrl, getLaunchTemplateViewUrl } from 'service/utility';
import { useTranslation } from 'react-i18next';
import MenuLink from 'atoms/MenuLink';
import MenuAnchor from 'atoms/MenuAnchor';
import DropdownLinkMenu from 'molecules/DropdownLinkMenu';
import DropdownAnchorMenu from 'molecules/DropdownAnchorMenu';

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
              <DropdownLinkMenu menuName={cloudContext.labelName} linkPropsList={
                cloudContextList.map((r) => {
                  const list = r.cloudServiceProvider === 'aws_cloud'
                    ? AWS_MENU_LIST : K8S_MENU_LIST;
                  return {
                    to: getEntityListViewUrl(list[0]),
                    onClick: () => setCloudContext(r),
                    children: r.labelName
                  };
                })
              } />
              <DropdownLinkMenu menuName="Launch template" linkPropsList={
                cloudContextList.map((r) => {
                  return {
                    to: getLaunchTemplateViewUrl(r),
                    onClick: () => setCloudContext(r),
                    children: r.labelName
                  };
                })
              } />
              <li className="dropdown">
                <a href="/clouds/design" className="dropdown-toggle" data-toggle="dropdown">Design <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-submenu">
                    <a href="/clouds" className="dropdown-submenu-toggle">Projects <span className="caret"></span></a>
                    <DropdownAnchorMenu anchorPropsList={
                      cloudContextList.filter((r) => {
                        return r.cloudServiceProvider === 'k8s' && r.name !== 'ALL';
                      }).map((r) => {
                        return {
                          href: `/clouds/design/project/${r.name}`,
                          children: r.labelName
                        };
                      })
                    } />
                  </li>
                  <li className="dropdown-submenu">
                    <a href="/clouds" className="dropdown-submenu-toggle">Stores <span className="caret"></span></a>
                    <DropdownAnchorMenu anchorPropsList={
                      [
                        { href: '/clouds/design/store/k8s_cost_store', children: 'K8s cost store' },
                        { href: '/clouds/design/store/k8s_namespace_resource_store', children: 'K8s namespace resource store' },
                        { href: '/clouds/design/store/k8s_node_resource_store', children: 'K8s node resource store' },
                        { href: '/clouds/design/store/k8s_pod_resource_store', children: 'K8s pod resource store' },
                      ]
                    } />
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
