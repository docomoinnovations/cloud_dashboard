import 'leaflet/dist/leaflet.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'App.css';

import ENTITY_INFO_LIST from 'constant/entity_info_template/entity_info_template';
import { MENU_TEMPLATE_LIST } from 'constant/menu_template';
import { ROUTE_URL } from 'constant/other';
import RESOURCE_STORE_LIST from 'constant/resource_store_template';
import CallbackPage from 'pages/CallbackPage';
import EntityInfoPage from 'pages/EntityInfoPage';
import EntityPage from 'pages/EntityPage';
import LaunchTemplatePage from 'pages/LaunchTemplatePage';
import LoginPage from 'pages/LoginPage';
import ProjectPage from 'pages/ProjectPage';
import ProviderPage from 'pages/ProviderPage';
import ResourceStorePage from 'pages/ResourceStorePage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContext, useAppState } from 'service/state';
import {
  getEntityListViewUrl, getEntityTypeId, getLaunchTemplateViewUrl, getProjectViewUrl
} from 'service/utility';

/**
 * Component for application route.
 */
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
          ENTITY_INFO_LIST.map((record) => {
            return <Route exact
              path={`/${record.cloudServiceProvider}/${record.entityName}/:uuid`}
              key={`/${record.cloudServiceProvider}/${record.entityName}`}>
              <EntityInfoPage entityInfoTemplate={record} />
            </Route>;
          })
        }
        {
          MENU_TEMPLATE_LIST.map((record) => {
            return <Route exact
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
        {
          appState.cloudContextList.map((cloudContext) => {
            return <Route
              path={getProjectViewUrl(cloudContext)}
              key={cloudContext.labelName}
            >
              <ProjectPage cloudContext={cloudContext} />
            </Route>;
          })
        }
        {
          RESOURCE_STORE_LIST.map((template) => {
            return <Route path={`/${template.bundleId}`} key={template.bundleId}>
              <ResourceStorePage template={template} />
            </Route>;
          })
        }
      </AppContext.Provider>
    </Switch>
  </BrowserRouter>;

}

export default App;
