import React from 'react';
import LoginForm from 'organisms/LoginForm';
import D3HorizonChartSampleBlock from 'molecules/D3HorizonChartSampleBlock';

const LoginPage = () => {
  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <LoginForm />
        <D3HorizonChartSampleBlock />
      </div>
    </div>
  </div>;
}

export default LoginPage;
