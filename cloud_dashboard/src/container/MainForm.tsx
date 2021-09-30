import React, { useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import { Link } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';

const MainForm: React.VFC<{
  menuType: CloudServiceProvider,
  menuName: string
}> = ({ menuType, menuName }) => {
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

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiresDatetime');
    window.location.href = ROUTE_URL;
  };

  return <>
    <ul className="nav nav-tabs">
      <li role="presentation"
        className={menuType === 'aws_cloud' ? 'active' : ''}>
        <Link to={`${AWS_MENU_LIST[0].url}`}>
          AWS
        </Link>
      </li>
      <li role="presentation"
        className={menuType === 'k8s' ? 'active' : ''}>
        <Link to={`${K8S_MENU_LIST[0].url}`}>
          K8s
        </Link>
      </li>
    </ul>
    <ul className="nav nav-tabs">
      {(menuType === 'aws_cloud' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
        return <li key={menu.name} role="presentation"
          className={menu.name === menuName ? 'active' : ''}>
          <Link to={`${menu.url}`}>
          {menu.name}
          </Link>
        </li>;
      })}
      <li role="presentation">
        <a href="#" onClick={logout}>logout</a></li>
    </ul>
  </>;
}

export default MainForm;
