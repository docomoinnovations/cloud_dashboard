import React, { useEffect } from 'react';
import LoginForm from 'organisms/LoginForm';
import { HorizonChart } from 'src/../../d3-horizon-chart/dist/d3-horizon-chart';

const LoginPage = () => {
  const dataSet: [Date, number][] = [
    [new Date(1637547922000), 1.0],
    [new Date(1637547923000), 3.0],
    [new Date(1637547924000), 5.0],
    [new Date(1637547925000), 2.0],
    [new Date(1637547926000), 4.0],
  ];

  useEffect(() => {
    const horizonChart = new HorizonChart;
    horizonChart.setTitle('Sample Chart');
    horizonChart.setDataSet(dataSet);
    horizonChart.setSelector('#horizon-chart');
    horizonChart.draw();
  }, []);

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <LoginForm />
        <div id="horizon-chart"></div>
      </div>
    </div>
  </div>;
}

export default LoginPage;
