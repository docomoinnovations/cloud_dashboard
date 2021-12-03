import NavBar from 'bootstrap3-components/NavBar';
import { getMenuTemplateList } from 'constant/menu_template';
import { PROJECT_CLOUD_CONTEXT_LIST } from 'constant/project_template';
import useDrupalJsonApi from 'hooks/drupal_jsonapi';
import useDrupalOAuth2 from 'hooks/drupal_oauth2';
import CloudContext from 'model/CloudContext';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

  return <NavBar className="navbar-fixed-top" role="banner">
    <NavBar.Header>
      <a className="logo navbar-btn pull-left" href="/" title={t('Home')} rel="home">
        <img src="/themes/contrib/bootstrap_cloud/logo.svg" alt={t('Home')} />
      </a>
    </NavBar.Header>
    <NavBar.Body>
      <NavBar.Block>
        <NavBar.Item>
          <Link to="/providers">{t('Home')}</Link>
        </NavBar.Item>
        <NavBar.Dropdown menuName={cloudContext.labelName}>
          {
            cloudContextList.map((r, index) => {
              return <NavBar.Item key={index}>
                <Link to={getEntityListViewUrl(getMenuTemplateList(r.cloudServiceProvider)[0])}
                  onClick={() => setCloudContext(r)}>
                  {r.labelName}
                </Link>
              </NavBar.Item>;
            })
          }
        </NavBar.Dropdown>
        <NavBar.Dropdown menuName="Launch template">
          {
            cloudContextList.map((r, index) => {
              return <NavBar.Item key={index}>
                <Link to={getLaunchTemplateViewUrl(r)}
                  onClick={() => setCloudContext(r)}>
                  {r.labelName}
                </Link>
              </NavBar.Item>;
            })
          }
        </NavBar.Dropdown>
        <NavBar.Dropdown menuName="Project">
          {
            cloudContextList.filter((r) => {
              return PROJECT_CLOUD_CONTEXT_LIST.includes((r.cloudServiceProvider));
            }).map((r, index) => {
              return <NavBar.Item key={index}>
                <Link to={getProjectViewUrl(r)}
                  onClick={() => setCloudContext(r)}>
                  {r.labelName}
                </Link>
              </NavBar.Item>;
            })
          }
        </NavBar.Dropdown>
        <NavBar.Dropdown menuName="Resource">
          {
            [
              { to: '/k8s_cost_store', children: 'K8s cost store' },
              { to: '/k8s_namespace_resource_store', children: 'K8s namespace resource store' },
              { to: '/k8s_node_resource_store', children: 'K8s node resource store' },
              { to: '/k8s_pod_resource_store', children: 'K8s pod resource store' },
            ].map((r, index) => {
              return <NavBar.Item key={index}>
                <Link to={r.to}>
                  {r.children}
                </Link>
              </NavBar.Item>;
            })
          }
        </NavBar.Dropdown>
        <NavBar.Item>
          <a href="/admin/structure/cloud_config">{t('CloudConfig')}</a>
        </NavBar.Item>
      </NavBar.Block>
      <NavBar.Block position="right">
        <NavBar.Item className="first">
          <a href="/user">{t('User')}</a>
        </NavBar.Item>
        <NavBar.Item className="last">
          <Link to="/" onClick={logout}>{t('Logout')}</Link>
        </NavBar.Item>
      </NavBar.Block>
    </NavBar.Body>
  </NavBar>;

}

export default MenuBar;
