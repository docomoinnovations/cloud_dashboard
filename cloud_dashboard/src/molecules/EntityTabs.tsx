import EntityTab from 'atoms/EntityTab';
import Tab from 'bootstrap3-components/Tab';
import { getMenuTemplateList } from "constant/menu_template";
import CloudServiceProvider from 'model/CloudServiceProvider';
import React, { useContext, useEffect, useState } from 'react';
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
  const [tabColumnList, setTabColumnList] = useState<{
    isActive: boolean;
    location: string;
    children: string;
  }[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (cloudContext.cloudServiceProvider !== menuType) {
      history.push(
        getEntityListViewUrl(
          getMenuTemplateList(cloudContext.cloudServiceProvider)[0]
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext]);

  useEffect(() => {
    setTabColumnList(
      getMenuTemplateList(menuType)
        .map((menu) => {
          return {
            isActive: menu.labelName === menuName,
            location: getEntityListViewUrl(menu),
            children: menu.labelName,
          };
        })
    );
  }, [menuType, menuName]);

  return <EntityTabsImpl tabColumnList={tabColumnList} />;

}

export default EntityTabs;
