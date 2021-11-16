import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AWS_ENTITY_INFO_LIST, AWS_MENU_LIST, K8S_ENTITY_INFO_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';

import { AppContext, useAppState } from 'service/state';
import { getEntityTypeId, getEntityListViewUrl, getLaunchTemplateViewUrl, getProjectViewUrl } from 'service/utility';

import CallbackPage from 'pages/CallbackPage';
import EntityInfoPage from 'pages/EntityInfoPage';
import EntityPage from 'pages/EntityPage';
import K8sCostPage from 'pages/K8sCostPage';
import K8sNamespaceResourcePage from 'pages/K8sNamespaceResourcePage';
import K8sNodeResourcePage from 'pages/K8sNodeResourcePage';
import K8sPodResourcePage from 'pages/K8sPodResourcePage';
import LaunchTemplatePage from 'pages/LaunchTemplatePage';
import LoginPage from 'pages/LoginPage';
import ProjectPage from 'pages/ProjectPage';
import ProviderPage from 'pages/ProviderPage';

import 'leaflet/dist/leaflet.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
          [...AWS_ENTITY_INFO_LIST, ...K8S_ENTITY_INFO_LIST].map((record) => {
            return <Route exact
              path={`/${record.cloudServiceProvider}/${record.entityName}/:uuid`}
              key={`/${record.cloudServiceProvider}/${record.entityName}`}>
              <EntityInfoPage entityInfoTemplate={record} />
            </Route>;
          })
        }
        {
          ([...AWS_MENU_LIST, ...K8S_MENU_LIST]).map((record) => {
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
          appState.cloudContextList.filter((r) => {
            return r.cloudServiceProvider === 'k8s';
          }).map((cloudContext) => {
            return <Route
              path={getProjectViewUrl(cloudContext)}
              key={cloudContext.labelName}
            >
              <ProjectPage cloudContext={cloudContext} />
            </Route>;
          })
        }
        <Route path="/k8s_cost_store">
          <K8sCostPage />
        </Route>
        <Route path="/k8s_namespace_resource_store">
          <K8sNamespaceResourcePage />
        </Route>
        <Route path="/k8s_node_resource_store">
          <K8sNodeResourcePage />
        </Route>
        <Route path="/k8s_pod_resource_store">
          <K8sPodResourcePage />
        </Route>
      </AppContext.Provider>
    </Switch>
  </BrowserRouter>;
}

export default App;
