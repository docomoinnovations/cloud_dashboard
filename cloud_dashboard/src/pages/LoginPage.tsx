import React from 'react';
import LoginForm from 'organisms/LoginForm';
import D3HorizonChart from 'atoms/D3HorizonChart';

const LoginPage = () => {
  const dataSet: [Date, number][] = [
    [new Date(1637547922000), 1.0],
    [new Date(1637547923000), 3.0],
    [new Date(1637547924000), 5.0],
    [new Date(1637547925000), 2.0],
    [new Date(1637547926000), 4.0],
  ];

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <LoginForm />
        <D3HorizonChart id="horizon-chart" dataSet={dataSet} title="Sample Chart" />
      </div>
    </div>
  </div>;
}

export default LoginPage;
