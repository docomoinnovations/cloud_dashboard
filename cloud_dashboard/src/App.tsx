import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { K8S_MENU_LIST, ROUTE_URL } from 'constant';
import CallbackView from 'container/Callback';
import LoginForm from 'container/LoginForm';
import MainForm from 'container/MainForm';
import AwsCloudInstanceForm from 'container/AwsInstanceForm';
import K8sEntityForm from 'container/K8sEntityForm';

const App: React.VFC = () => {
  return <BrowserRouter basename={ROUTE_URL}>
    <Switch>
      <Route exact path="/aws_cloud/instance">
        <div className="container">
          <MainForm menuType="AWS" menuName="Cloud instance" />
          <AwsCloudInstanceForm />
        </div>
      </Route>
      <Route exact path="/callback">
        <div className="container">
          <CallbackView />
        </div>
      </Route>
      {
        K8S_MENU_LIST.map((record) => {
          return <Route exact path={record.url} key={record.name}>
            <div className="container">
              <MainForm menuType="K8s" menuName={record.name} />
              <K8sEntityForm
                entityTypeId={record.entityTypeId}
                column={record.column} />
            </div>
          </Route>;
        })
      }
      <Route exact path="/">
        <div className="container">
          <LoginForm />
        </div>
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
