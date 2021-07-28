import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTE_URL } from 'constant';
import CallbackView from 'container/Callback';
import LoginForm from 'container/LoginForm';
import MainForm from 'container/MainForm';
import K8sPodForm from 'container/K8sPodForm';
import AwsInstanceForm from 'container/AwsInstanceForm';

const App: React.VFC = () => {
  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      <Route exact path="/aws_cloud/instance">
        <div className="container">
          <MainForm selectedMenuName="AWS instance" />
          <AwsInstanceForm />
        </div>
      </Route>
      <Route exact path="/callback">
        <div className="container">
          <CallbackView />
        </div>
      </Route>
      <Route exact path="/k8s/pod">
        <div className="container">
          <MainForm selectedMenuName="K8s Pod"/>
          <K8sPodForm />
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
