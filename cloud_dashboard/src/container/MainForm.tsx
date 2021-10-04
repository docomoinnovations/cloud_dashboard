import React, { useContext, useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import { Link, useHistory } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { getUrl } from 'service/utility';
import CloudContextSelect2 from 'component/CloudContextSelect2';
import { AppContext } from 'service/state';

const MainForm: React.VFC<{
  menuType: CloudServiceProvider,
  menuName: string
}> = ({ menuType, menuName }) => {
  const { cloudContext, dispatch } = useContext(AppContext);
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
  }, [cloudContext]);

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiresDatetime');
    window.location.href = ROUTE_URL;
  };

  return <>
    <form>
      <CloudContextSelect2 cloudContext={cloudContext} setCloudContext={(c) => {
        dispatch({type: 'setCloudContext', message: c});
      }} />
    </form>
    <ul className="nav nav-tabs">
      {(menuType === 'aws_cloud' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
        return <li key={menu.labelName} role="presentation"
          className={menu.labelName === menuName ? 'active' : ''}>
          <Link to={getUrl(menu)}>
          {menu.labelName}
          </Link>
        </li>;
      })}
      <li role="presentation">
        <a href="#" onClick={logout}>logout</a></li>
    </ul>
  </>;
}

export default MainForm;
