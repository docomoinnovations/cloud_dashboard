import React, { useContext, useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST } from 'constant';
import { useHistory } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { getUrl } from 'service/utility';
import { AppContext } from 'service/state';
import EntityTab from 'component/EntityTab';

const EntityTabs: React.VFC<{
  menuType: CloudServiceProvider,
  menuName: string
}> = ({ menuType, menuName }) => {
  const { cloudContext } = useContext(AppContext);
  const history = useHistory();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext]);

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <ul className="nav nav-tabs">
          {(menuType === 'aws_cloud' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
            return <EntityTab
              key={menu.labelName}
              isActive={menu.labelName === menuName}
              location={getUrl(menu)}
              labelName={menu.labelName}
            />;
          })}
        </ul>
      </div>
    </div>
  </div>;
}

export default EntityTabs;
