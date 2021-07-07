import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTE_URL } from 'constant';
import CallbackView from 'container/Callback';
import LoginForm from 'container/LoginForm';
import MainForm from 'container/MainForm';

const App: React.VFC = () => {
  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      <Route exact path="/callback">
        <div className="container">
          <div className="row">
            <div className="col">
              <CallbackView />
            </div>
          </div>
        </div>
      </Route>
      <Route exact path="/main">
        <div className="container">
          <MainForm />
        </div>
      </Route>
      <Route exact path="/">
        <div className="container">
          <div className="row">
            <div className="col">
              <LoginForm />
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
