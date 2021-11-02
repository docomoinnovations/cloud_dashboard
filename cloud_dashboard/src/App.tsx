import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CallbackPage from 'pages/CallbackPage';
import EntityPage from 'pages/EntityPage';
import { getEntityTypeId, getEntityListViewUrl, getLaunchTemplateViewUrl } from 'service/utility';
import { AppContext, useAppState } from 'service/state';
import ProviderPage from 'pages/ProviderPage';
import 'leaflet/dist/leaflet.css';
import LoginPage from 'pages/LoginPage';
import LaunchTemplatePage from 'pages/LaunchTemplatePage';
import 'App.css';

const App = () => {
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
              <EntityPage menuTemplate={record} />
            </Route>;
          })
        }
        {
          appState.cloudContextList.map((cloudContext) => {
            return <Route
              path={getLaunchTemplateViewUrl(cloudContext)}
              key={cloudContext.labelName}
            >
              <LaunchTemplatePage cloudContext={cloudContext} />
            </Route>;
          })
        }
      </AppContext.Provider>
    </Switch>
  </BrowserRouter>;
}

export default App;
