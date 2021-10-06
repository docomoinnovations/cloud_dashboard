import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CallbackView from 'container/Callback';
import LoginForm from 'container/LoginForm';
import MainForm from 'container/MainForm';
import EntityForm from 'container/EntityForm';
import { getEntityTypeId, getUrl } from 'service/utility';
import { AppContext, useAppState } from 'service/state';

const App: React.VFC = () => {
  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      <Route exact path="/">
        <div className="container">
          <LoginForm />
        </div>
      </Route>
      <Route path="/callback">
        <div className="container">
          <CallbackView />
        </div>
      </Route>
      <AppContext.Provider value={useAppState()}>
        {
          ([...AWS_MENU_LIST, ...K8S_MENU_LIST]).map((record) => {
            return <Route
              path={getUrl(record)}
              key={getEntityTypeId(record)}
            >
              <div className="container">
                <MainForm menuType={record.cloudServiceProvider} menuName={record.labelName} />
                <EntityForm
                  entityTypeId={getEntityTypeId(record)}
                  column={record.entityColumn}
                  cloudServiceProvider={record.cloudServiceProvider} />
              </div>
            </Route>;
          })
        }
      </AppContext.Provider>
    </Switch>
  </BrowserRouter>;
}

export default App;
