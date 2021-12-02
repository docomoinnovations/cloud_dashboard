import Panel from 'bootstrap3-components/Panel';
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

  return <Panel className="js-form-wrapper form-wrapper form-item js-form-item" id="bootstrap-panel">
    <PanelHeadingTitle titleKey={titleKey} title={panelData.title} />
    <Panel.Body id={titleKey} className="panel-collapse collapse fade in">
      {
        panelData.records.map((record) => {
          return <>
            <D3MetricsBlock record={record} />
            <KeyValueBlock record={record} />
            <TableBlock record={record} />
          </>;
        })
      }
    </Panel.Body>
  </Panel>

}

export default EntityInfoPanel;
