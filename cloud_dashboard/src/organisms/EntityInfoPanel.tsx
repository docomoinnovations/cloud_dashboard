import EntityInfoPanelData from 'model/EntityInfoPanelData';
import D3MetricsBlock from 'molecules/D3MetricsBlock';
import KeyValueBlock from 'molecules/KeyValueBlock';
import PanelHeadingTitle from 'molecules/PanelHeadingTitle';
import TableBlock from 'molecules/TableBlock';
import React from 'react';

/**
 * Panel of entity detail info.
 *
 * @param index Index for panel accordion logic. 
 * @param panelData Entity info. 
 */
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
