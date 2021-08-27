import React, { useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';

const MainForm: React.VFC<{
  menuType: string,
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
        className={menuType === 'AWS' ? 'active' : ''}>
        <a href={`${ROUTE_URL}/aws_cloud/instance`}>
          AWS
        </a>
      </li>
      <li role="presentation"
        className={menuType === 'K8s' ? 'active' : ''}>
        <a href={`${ROUTE_URL}${K8S_MENU_LIST[0].url}`}>
          K8s
        </a>
      </li>
    </ul>
    <ul className="nav nav-tabs">
      {(menuType === 'AWS' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
        return <li key={menu.name} role="presentation"
          className={menu.name === menuName ? 'active' : ''}>
          <a href={`${ROUTE_URL}${menu.url}`}>
            {menu.name}
          </a>
        </li>;
      })}
      <li role="presentation">
        <a href="#" onClick={logout}>logout</a></li>
    </ul>
  </>;
}

export default MainForm;
