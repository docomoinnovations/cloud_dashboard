import React, { useEffect, useState } from 'react';
import { AWS_MENU_LIST, DEFAULT_CLOUD_CONTEXTS, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import { Link, useHistory } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { getUrl, usePrevious } from 'service/utility';
import CloudContext from 'model/CloudContext';
import CloudContextSelect2 from 'component/CloudContextSelect2';

const loadCloudContext = (c: CloudServiceProvider) => {
  // Load Cloud Context.
  const temp = localStorage.getItem('cloudContext');
  if (temp !== null) {
    const cloudContextTemp: CloudContext = JSON.parse(temp);
    if (cloudContextTemp.cloudServiceProvider === c) {
      return cloudContextTemp;
    }
  }
  return c === 'aws_cloud' ? DEFAULT_CLOUD_CONTEXTS[0]: DEFAULT_CLOUD_CONTEXTS[1];
};

const MainForm: React.VFC<{
  menuType: CloudServiceProvider,
  menuName: string
}> = ({ menuType, menuName }) => {
  const [cloudContext, setCloudContext] = useState<CloudContext>(loadCloudContext(menuType));
  const oldCloudContext = usePrevious(cloudContext);
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

    // Load Cloud Context.
    const temp = localStorage.getItem('cloudContext');
    if (temp !== null) {
      const cloudContextTemp: CloudContext = JSON.parse(temp);
      setCloudContext(cloudContextTemp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cloudContext', JSON.stringify(cloudContext));
    if (oldCloudContext === undefined
      || (oldCloudContext.cloudServiceProvider !== cloudContext.cloudServiceProvider)) {
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
      <CloudContextSelect2 cloudContext={cloudContext} setCloudContext={setCloudContext} />
    </form>
    <ul className="nav nav-tabs">
      <li role="presentation"
        className={menuType === 'aws_cloud' ? 'active' : ''}>
        <Link to={getUrl(AWS_MENU_LIST[0])}>
          AWS
        </Link>
      </li>
      <li role="presentation"
        className={menuType === 'k8s' ? 'active' : ''}>
        <Link to={getUrl(K8S_MENU_LIST[0])}>
          K8s
        </Link>
      </li>
    </ul>
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
