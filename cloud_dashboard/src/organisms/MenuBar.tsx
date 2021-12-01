import MenuAnchor from 'atoms/MenuAnchor';
import MenuLink from 'atoms/MenuLink';
import { AWS_MENU_LIST, K8S_MENU_LIST } from 'constant';
import useDrupalJsonApi from 'hooks/drupal_jsonapi';
import useDrupalOAuth2 from 'hooks/drupal_oauth2';
import CloudContext from 'model/CloudContext';
import DropdownLinkMenu from 'molecules/DropdownLinkMenu';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from 'service/state';
import { getEntityListViewUrl, getLaunchTemplateViewUrl, getProjectViewUrl } from 'service/utility';

/**
 * Menu bar component.
 */
const MenuBar = () => {

  const { cloudContext, cloudContextList, dispatch } = useContext(AppContext);
  const { checkAndRefreshToken, logout: removeTokenAndLogout } = useDrupalOAuth2();
  const { removeJsonapiServerUri } = useDrupalJsonApi();
  const { t } = useTranslation();

  useEffect(() => {
    const init = async () => {
      await checkAndRefreshToken();
    }
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCloudContext = (cloudContext: CloudContext) => {
    dispatch({ type: 'setCloudContext', message: cloudContext });
  };

  const logout = async () => {
    removeJsonapiServerUri();
    await removeTokenAndLogout();
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
              <DropdownLinkMenu menuName="Project" linkPropsList={
                cloudContextList.filter((r) => {
                  return r.cloudServiceProvider === 'k8s';
                }).map((r) => {
                  return {
                    to: getProjectViewUrl(r),
                    onClick: () => setCloudContext(r),
                    children: r.labelName
                  };
                })
              } />
              <DropdownLinkMenu menuName="Resource" linkPropsList={
                [
                  { to: '/k8s_cost_store', children: 'K8s cost store' },
                  { to: '/k8s_namespace_resource_store', children: 'K8s namespace resource store' },
                  { to: '/k8s_node_resource_store', children: 'K8s node resource store' },
                  { to: '/k8s_pod_resource_store', children: 'K8s pod resource store' },
                ]
              } />
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
