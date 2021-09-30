import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AWS_MENU_LIST, K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CallbackView from 'container/Callback';
import LoginForm from 'container/LoginForm';
import MainForm from 'container/MainForm';
import EntityForm from 'container/EntityForm';
import { getUrl } from 'service/utility';

const App: React.VFC = () => {
  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      {
        ([...AWS_MENU_LIST, ...K8S_MENU_LIST]).map((record) => {
          return <Route
            exact
            path={getUrl(record)}
            key={record.name}
          >
            <div className="container">
              <MainForm menuType={record.type} menuName={record.name} />
              <EntityForm
                entityTypeId={record.entityTypeId}
                column={record.column}
                cloudConfigType={record.type} />
            </div>
          </Route>;
        })
      }
      <Route exact path="/callback">
        <div className="container">
          <CallbackView />
        </div>
      </Route>
      <Route exact path="/">
        <div className="container">
          <LoginForm />
        </div>
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
