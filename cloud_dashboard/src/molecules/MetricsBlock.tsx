import React from 'react';
import EntityInfoRecordData from 'model/EntityInfoRecordData';
import { ChartData, Scatter } from "react-chartjs-2";
import * as chartjs from "chart.js";

const MetricsBlock = ({ record }: { record: EntityInfoRecordData }) => {
  if (record.type !== 'metrics') {
    return <></>;
  }

  const plotData: ChartData<Chart.ChartData>[] = record.record.map((record2, index) => {
    const colorText = index === 0 ? 'green' : 'blue';
    return {
      datasets: [
        {
          label: record2.title,
          backgroundColor: chartjs.helpers['color'](colorText).alpha(0.5).rgbString(),
          borderColor: colorText,
          data: record2.record.map((r) => {
            return {
              x: new Date(r.x * 1000),
              y: r.y
            };
          }),
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2,
          showLine: true,
        }
      ]
    };
  });
  const plotOption: Chart.ChartOptions[] = record.record.map((record2) => {
    return {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'hour',
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: record2.yLabel
          },
          ticks: {
            callback: (value: number) => {
              if (value >= 1024 * 1024 * 1024) {
                return `${Math.round(value / (1024 * 1024 * 1024) * 100) / 100} Gi`;
              } else if (value >= 1024 * 1024) {
                return `${Math.round(value / (1024 * 1024))} Mi`;
              } else if (value >= 1024) {
                return `${Math.round(value / (1024))} Ki`;
              } else {
                return `${Math.round(value * 10000) / 10000}`;
              }
            }
          }
        }]
      },
    };
  });

return <div className="row">
    <div className="col-md-6">
      <Scatter data={plotData[0]} options={plotOption[0]} />
    </div>
    <div className="col-md-6">
      <Scatter data={plotData[1]} options={plotOption[1]} />
    </div>
  </div>;
}

export default MetricsBlock;
