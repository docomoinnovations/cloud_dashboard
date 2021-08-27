import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTE_URL } from 'constant';
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
          <MainForm selectedMenuName="AWS Cloud instance" />
          <AwsCloudInstanceForm />
        </div>
      </Route>
      <Route exact path="/callback">
        <div className="container">
          <CallbackView />
        </div>
      </Route>
      <Route exact path="/k8s/node">
        <div className="container">
          <MainForm selectedMenuName="K8s Node"/>
          <K8sEntityForm
            entityTypeId="k8s_node"
            namespaceFlg={false}
            column={[
              {labelName: 'Name', name: 'name', type: 'default'},
              {labelName: 'State', name: 'status', type: 'default'},
              {labelName: 'CPU (Request)', name: 'cpu_request', type: 'default'},
              {labelName: 'CPU (Limit)', name: 'cpu_limit', type: 'default'},
              {labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'default'},
              {labelName: 'Memory (Request)', name: 'memory_request', type: 'memory'},
              {labelName: 'Memory (Limit)', name: 'memory_limit', type: 'memory'},
              {labelName: 'Memory (Usage)', name: 'memory_usage', type: 'memory'},
              {labelName: 'Pods (Applcation)', name: 'pods_allocation', type: 'default'},
              {labelName: 'Created', name: 'created', type: 'datetime'}
            ]} />
        </div>
      </Route>
      <Route exact path="/k8s/pod">
        <div className="container">
          <MainForm selectedMenuName="K8s Pod"/>
          <K8sEntityForm
            entityTypeId="k8s_pod"
            namespaceFlg={true}
            column={[
              {labelName: 'Namespace', name: 'namespace', type: 'default'},
              {labelName: 'Name', name: 'name', type: 'default'},
              {labelName: 'Node', name: 'node_name', type: 'default'},
              {labelName: 'State', name: 'status', type: 'default'},
              {labelName: 'Restarts', name: 'restarts', type: 'default'},
              {labelName: 'CPU (Usage)', name: 'cpu_usage', type: 'default'},
              {labelName: 'Memory (Usage)', name: 'memory_usage', type: 'default'},
              {labelName: 'Created', name: 'created', type: 'datetime'}
            ]} />
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
