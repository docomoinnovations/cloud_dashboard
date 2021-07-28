import React, { useEffect, useState } from 'react';
import { MENU_LIST, ROUTE_URL } from 'constant';

const MainForm: React.VFC<{
  selectedMenuName: string
}> = ({selectedMenuName}) => {
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
      {MENU_LIST.map((menu) => {
        return <li key={menu.name} role="presentation"
          className={menu.name === selectedMenuName ? 'active' : ''}>
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
