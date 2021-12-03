import EntityTab from 'atoms/EntityTab';
import Tab from 'bootstrap3-components/Tab';
import { AWS_MENU_LIST, K8S_MENU_LIST } from "constant/menu_template";
import CloudServiceProvider from 'model/CloudServiceProvider';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from 'service/state';
import { getEntityListViewUrl } from 'service/utility';

/**
 * Tab elements for entity view.
 *
 * @param tabColumnList List of tab columns.
 */
const EntityTabsImpl = ({ tabColumnList }: {
  tabColumnList: {
    isActive: boolean,
    location: string,
    children: React.ReactNode
  }[]
}) => {

  return <Tab.Group>
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
  </Tab.Group>;

}

/**
 * Tab elements for entity view.
 *
 * @param menuType Cloud service provider.
 * @param menuName Active tab name.
 */
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
