import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CallbackPage from 'pages/CallbackPage';
import EntityForm from 'container/EntityForm';
import { getEntityTypeId, getEntityListViewUrl, getLaunchTemplateViewUrl } from 'service/utility';
import { AppContext, useAppState } from 'service/state';
import MenuBar from 'organisms/MenuBar';
import ProviderPage from 'pages/ProviderPage';
import LaunchTemplateView from 'container/LaunchTemplateView';
import 'leaflet/dist/leaflet.css';
import EntityTabs from 'molecules/EntityTabs';
import LoginPage from 'pages/LoginPage';

const App: React.VFC = () => {
  const appState = useAppState();

  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/callback">
        <CallbackPage />
      </Route>
      <AppContext.Provider value={appState}>
        <Route path="/providers">
          <ProviderPage />
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
