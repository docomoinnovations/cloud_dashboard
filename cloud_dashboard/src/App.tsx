import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CallbackView from 'container/Callback';
import LoginForm from 'container/LoginForm';
import EntityForm from 'container/EntityForm';
import { getEntityTypeId, getEntityListViewUrl, getLaunchTemplateViewUrl } from 'service/utility';
import { AppContext, useAppState } from 'service/state';
import MenuBar from 'organisms/MenuBar';
import ProviderView from 'container/ProviderView';
import LaunchTemplateView from 'container/LaunchTemplateView';
import 'leaflet/dist/leaflet.css';
import EntityTabs from 'molecules/EntityTabs';

const App: React.VFC = () => {
  const appState = useAppState();

  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/callback">
        <CallbackView />
      </Route>
      <AppContext.Provider value={appState}>
        <Route path="/providers">
          <MenuBar />
          <ProviderView />
        </Route>
        {
          ([...AWS_MENU_LIST, ...K8S_MENU_LIST]).map((record) => {
            return <Route
              path={getEntityListViewUrl(record)}
              key={getEntityTypeId(record)}
            >
              <MenuBar />
              <EntityTabs menuType={record.cloudServiceProvider} menuName={record.labelName} />
              <EntityForm
                entityTypeId={getEntityTypeId(record)}
                column={record.entityColumn} />
              <hr />
            </Route>;
          })
        }
        {
          appState.cloudContextList.map((cloudContext) => {
            return <Route
              path={getLaunchTemplateViewUrl(cloudContext)}
              key={cloudContext.labelName}
            >
              <MenuBar />
              <LaunchTemplateView cloudContext={cloudContext} />
            </Route>;
          })
        }
      </AppContext.Provider>
    </Switch>
  </BrowserRouter>;
}

export default App;
