import React from 'react';
import EntityInfoPanelData from 'model/EntityInfoPanelData';
import EntityInfoRecordData from 'model/EntityInfoRecordData';

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
            <KeyValueBlock record={record} />
            <TableBlock record={record} />
          </>;
        })
      }
    </div>
  </div>;
}

export default EntityInfoPanel;
