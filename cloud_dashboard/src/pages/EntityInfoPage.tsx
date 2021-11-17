import React, { useEffect, useState } from 'react';
import MenuBar from 'organisms/MenuBar';
import { useParams } from 'react-router-dom';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import EntityInfoPanel from 'molecules/EntityInfoPanel';
import { convertDataForUI, readDataCache } from 'service/utility';
import EntityInfoTemplate from 'model/EntityInfoTemplate';
import EntityInfoPanelData from 'model/EntityInfoPanelData';

const EntityInfoPage = ({ entityInfoTemplate }: {
  entityInfoTemplate: EntityInfoTemplate
}) => {
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
      HttpService.getInstance().getJson<{ data: EntityData }>(url).then((response) => {
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

        const dataCache = await (readDataCache(infoRecord.keyValueRecords));
        for (const keyValueRecord of infoRecord.keyValueRecords) {
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
          } else {
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
