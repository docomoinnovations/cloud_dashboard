import React, { useContext, useEffect } from 'react';
import { AWS_MENU_LIST, K8S_MENU_LIST } from 'constant';
import { useHistory } from 'react-router-dom';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { getEntityListViewUrl } from 'service/utility';
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
          history.push(getEntityListViewUrl(AWS_MENU_LIST[0]));
          break;
        case 'k8s':
          history.push(getEntityListViewUrl(K8S_MENU_LIST[0]));
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext]);

  return <nav className="tabs" role="navigation" aria-label="Tabs">
    <ul className="tabs--primary nav nav-tabs">
      {(menuType === 'aws_cloud' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
        return <EntityTab
          key={menu.labelName}
          isActive={menu.labelName === menuName}
          location={getEntityListViewUrl(menu)}
          labelName={menu.labelName}
        />;
      })}
    </ul>
  </nav>;
}

export default EntityTabs;
