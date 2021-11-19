import React from 'react';
import EntityInfoPanelData from 'model/EntityInfoPanelData';
import EntityInfoRecordData from 'model/EntityInfoRecordData';
import { ChartData, Scatter } from "react-chartjs-2";
import * as chartjs from "chart.js";

const PanelHeadingTitle = ({ titleKey, title }: {
  titleKey: string,
  title: string
}) => {
  return <div className="panel-heading">
    <a aria-controls={titleKey} aria-expanded="true" aria-pressed="true"
      data-toggle="collapse" role="button" className="panel-title"
      href={`#${titleKey}`}>{title}</a>
  </div>;
}

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

const KeyValueBlock = ({ record }: { record: EntityInfoRecordData }) => {
  if (record.type !== 'div') {
    return <></>;
  }
  return <div className="field field--name-name field--type-string field--label-inline">
    <div className="field--label">{record.key}</div>
    <div className="field--item">{
      record.value.includes('\n')
        ? <pre>{record.value}</pre>
        : <>{record.value}</>
    }</div>
  </div>;
}

const TableBlock = ({ record }: { record: EntityInfoRecordData }) => {
  if (record.type !== 'table') {
    return <></>;
  }
  return <div className="field field--name-tags field--type-key-value field--label-above">
    <div className="field--label">{record.title}</div>
    <div className="field--items">
      <div className="field--item">
        <div className="table-responsive">
          <table data-striping="1" className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.entries(record.record).map((keyVal, index2) => {
                  return <tr className={index2 % 2 === 0 ? 'odd' : 'even'}>
                    <td>{keyVal[0]}</td>
                    <td>{
                      keyVal[1].includes('\n')
                        ? <pre>{keyVal[1]}</pre>
                        : <>{keyVal[1]}</>
                    }</td>
                  </tr>;
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>;
}

const EntityInfoPanel = ({ index, panelData }: {
  index: number, panelData: EntityInfoPanelData
}) => {
  const titleKey = index === 0
    ? "bootstrap-panel--content"
    : `bootstrap-panel--${index + 2}--content`;

  return <div className="js-form-wrapper form-wrapper form-item js-form-item panel panel-default" id="bootstrap-panel">
    <PanelHeadingTitle titleKey={titleKey} title={panelData.title} />
    <div id={titleKey} className="panel-body panel-collapse collapse fade in">
      {
        panelData.records.map((record) => {
          return <>
            <MetricsBlock record={record} />
            <KeyValueBlock record={record} />
            <TableBlock record={record} />
          </>;
        })
      }
    </div>
  </div>;
}

export default EntityInfoPanel;
