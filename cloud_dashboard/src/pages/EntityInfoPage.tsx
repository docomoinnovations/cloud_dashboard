import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EntityData from 'model/EntityData';
import EntityInfoPanelData from 'model/EntityInfoPanelData';
import EntityInfoTemplate from 'model/EntityInfoTemplate';

import EntityInfoPanel from 'organisms/EntityInfoPanel';
import MenuBar from 'organisms/MenuBar';

import { convertDataForUI, readDataCache } from 'service/utility';
import useDrupalJsonApi from 'hooks/drupal_jsonapi';

/**
 * Page of entity info.
 *
 * @param entityInfoTemplate Template for viewing this entity data.
 */
const EntityInfoPage = ({ entityInfoTemplate }: {
  entityInfoTemplate: EntityInfoTemplate
}) => {

  const { getEntityListAll, getJsonData } = useDrupalJsonApi();
  const [entityData, setEntityData] = useState<EntityData>({
    id: '', attributes: {}
  });
  const [panelDataList, setPanelDataList] = useState<EntityInfoPanelData[]>([]);
  const { uuid } = useParams<{
    uuid?: string
  }>();

  useEffect(() => {
    if (typeof uuid !== 'undefined') {
      const entityTypeId = `${entityInfoTemplate.cloudServiceProvider}_${entityInfoTemplate.entityName}`;
      const url = `/jsonapi/${entityTypeId}/${entityTypeId}/${uuid}`;
      getJsonData<{ data: EntityData }>(url).then((response) => {
        setEntityData(response.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid]);

  useEffect(() => {
    const refresh = async () => {
      const newPanelDataList: EntityInfoPanelData[] = [];
      for (const infoRecord of entityInfoTemplate.entityRecords) {
        const newPanelData: EntityInfoPanelData = {
          title: infoRecord.panelName,
          records: []
        };

        const dataCache = await (readDataCache(getEntityListAll, infoRecord.keyValueRecords));
        for (const keyValueRecord of infoRecord.keyValueRecords) {
          if (keyValueRecord.type === 'metrics') {
            // type: 'metrics'
            const url = `/clouds/${entityInfoTemplate.cloudServiceProvider}/${entityData.attributes['cloud_context']}/${entityInfoTemplate.entityName}/${entityData.attributes['drupal_internal__id']}/metrics`;
            const metricsData = await getJsonData<Record<string, number>[]>(url);
            newPanelData.records.push({
              type: 'metrics',
              record: keyValueRecord.column.map((column) => {
                return {
                  title: column.title,
                  yLabel: column.yLabel,
                  record: metricsData.map((metrics) => {
                    return { x: metrics['timestamp'], y: metrics[column.name] };
                  })
                }
              })
            });
            continue;
          }

          if (infoRecord.tableRecordList.includes(keyValueRecord.name)) {
            // type: 'table'
            const keyVal: Record<string, string> = {};
            for (const record of entityData.attributes[keyValueRecord.name]) {
              keyVal[record['item_key']] = record['item_value'];
            }
            newPanelData.records.push({
              type: 'table',
              title: keyValueRecord.labelName,
              record: keyVal
            });
            continue;
          }

          // type: 'div'
          const convertedText = convertDataForUI(
            entityData.attributes[keyValueRecord.name],
            keyValueRecord,
            dataCache
          );
          const convertedText2 = keyValueRecord.type === 'join' && convertedText !== entityData.attributes[keyValueRecord.name]
            ? `${convertedText} (${entityData.attributes[keyValueRecord.name]})`
            : convertedText;
          newPanelData.records.push({
            type: 'div',
            key: keyValueRecord.labelName,
            value: convertedText2
          });
        }

        newPanelDataList.push(newPanelData);
      }
      setPanelDataList(newPanelDataList);
    };
    if (entityData.id !== '') {
      refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityData]);

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        {
          panelDataList.map((panelData, index) => {
            return <EntityInfoPanel index={index} key={index} panelData={panelData} />;
          })
        }
      </div>
    </div>
  </div>;

}

export default EntityInfoPage;
