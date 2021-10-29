import React, { useContext, useEffect } from 'react';
import EntityTab from 'atoms/EntityTab';
import { AWS_MENU_LIST, K8S_MENU_LIST } from 'constant';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { useHistory } from 'react-router';
import { AppContext } from 'service/state';
import { getEntityListViewUrl } from 'service/utility';

const EntityTabsImpl = ({ tabColumnList }: {
  tabColumnList: {
    isActive: boolean,
    location: string,
    children: React.ReactNode
  }[]
}) => {
  return <nav className="tabs" role="navigation" aria-label="Tabs">
    <ul className="tabs--primary nav nav-tabs">
      {
        tabColumnList.map((tabColumn, index) => {
          return <EntityTab
            key={index}
            isActive={tabColumn.isActive}
            location={tabColumn.location}
            children={tabColumn.children}
          />;
        })
      }
    </ul>
  </nav>;
}

const EntityTabs = ({ menuType, menuName }: {
  menuType: CloudServiceProvider,
  menuName: string
}) => {

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

  const tabColumnList = (menuType === 'aws_cloud' ? AWS_MENU_LIST : K8S_MENU_LIST).map((menu) => {
    return {
      isActive: menu.labelName === menuName,
      location: getEntityListViewUrl(menu),
      children: menu.labelName,
    };
  });

  return <EntityTabsImpl tabColumnList={tabColumnList} />;
}

export default EntityTabs;
