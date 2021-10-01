import React, { useEffect, useState } from 'react';
import { AWS_MENU_LIST, DEFAULT_CLOUD_CONTEXT, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import { Link } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { getUrl } from 'service/utility';
import CloudContext from 'model/CloudContext';
import HttpService from 'service/http';

const MainForm: React.VFC<{
  menuType: CloudServiceProvider,
  menuName: string
}> = ({ menuType, menuName }) => {
  const [cloudContextList, setCloudContextList] = useState<CloudContext[]>([DEFAULT_CLOUD_CONTEXT]);
  const [cloudContext, setCloudContext] = useState<CloudContext>(DEFAULT_CLOUD_CONTEXT);

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

  // Set cloud context list.
  useEffect(() => {
    const init = async () => {
      const cloudServiceProviderList = ['aws_cloud', 'k8s'];
      let newCloudContextList = [DEFAULT_CLOUD_CONTEXT];
      for (const cloudServiceProvider of cloudServiceProviderList) {
        const data = (await HttpService.getInstance().getJson<{data: any[]}>(
          `/jsonapi/cloud_config/${cloudServiceProvider}`
        )).data.map((record: any) => {
          return {
            cloudServiceProvider: cloudServiceProvider as CloudServiceProvider,
            name: record.attributes.cloud_context
          };
        });
        newCloudContextList = [...newCloudContextList, ...data];
      }
      setCloudContextList(newCloudContextList);
    };
    init();
  }, []);

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiresDatetime');
    window.location.href = ROUTE_URL;
  };

  return <>
    <form>
      <select
        className="form-select form-control"
        value={`${cloudContext.cloudServiceProvider} ${cloudContext.name}`}
        onChange={(e) => {
          const temp = e.currentTarget.value.split(' ');
          setCloudContext({
            cloudServiceProvider: temp[0] as CloudServiceProvider,
            name: temp[1]
          });
        }}>
        {cloudContextList.map((c) => {
          const key = `${c.cloudServiceProvider} ${c.name}`;
          const label = `[${c.cloudServiceProvider}] ${c.name}`;
          return <option
            value={key}
            key={key}
          >{label}</option>
        })}
      </select>
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
