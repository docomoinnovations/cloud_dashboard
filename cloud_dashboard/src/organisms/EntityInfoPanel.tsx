import React from 'react';

import EntityInfoPanelData from 'model/EntityInfoPanelData';

import KeyValueBlock from 'molecules/KeyValueBlock';
import MetricsBlock from 'molecules/MetricsBlock';
import PanelHeadingTitle from 'molecules/PanelHeadingTitle';
import TableBlock from 'molecules/TableBlock';
import D3MetricsBlock from 'molecules/D3MetricsBlock';

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
            <D3MetricsBlock record={record} />
            <KeyValueBlock record={record} />
            <TableBlock record={record} />
          </>;
        })
      }
    </div>
  </div>;
}

export default EntityInfoPanel;
