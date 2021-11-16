import React, { useEffect, useState } from 'react';
import MenuBar from 'organisms/MenuBar';
import { useParams } from 'react-router-dom';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import KeyValuePanel from 'molecules/KeyValuePanel';
import { convertDataForUI, readDataCache } from 'service/utility';
import KeyValueTablePanel from 'molecules/KeyValueTablePanel';
import EntityInfoTemplate from 'model/EntityInfoTemplate';

const EntityInfoPage = ({ entityInfoTemplate }: {
  entityInfoTemplate: EntityInfoTemplate
}) => {
  const [entityData, setEntityData] = useState<EntityData>({
    id: '', attributes: {}
  });
  const [keyValData, setKeyValData] = useState<{
    title: string,
    panelType: 'div' | 'table',
    record: Record<string, string>
  }[]>([]);
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
      const newKeyValData: {
        title: string,
        panelType: 'div' | 'table',
        record: Record<string, string>
      }[] = [];
      for (const infoRecord of entityInfoTemplate.entityRecords) {
        switch (infoRecord.panelType) {
          case 'div': {
            const dataCache = await (readDataCache(infoRecord.keyValueRecords));
            const keyVal: Record<string, string> = {};
            for (const record of infoRecord.keyValueRecords) {
              const convertedText = convertDataForUI(
                entityData.attributes[record.name],
                record,
                dataCache
              );
              keyVal[record.labelName] = record.type === 'join' && convertedText !== entityData.attributes[record.name]
                ? `${convertedText} (${entityData.attributes[record.name]})`
                : convertedText;
            }
            newKeyValData.push( { title: infoRecord.panelName, panelType: 'div', record: keyVal } );
            break;
          }
          case 'table':
            const keyVal: Record<string, string> = {};
            for (const record of entityData.attributes[infoRecord['keyValueRecordKey']]) {
              keyVal[record['item_key']] = record['item_value'];
            }
            newKeyValData.push( { title: infoRecord.panelName, panelType: 'table', record: keyVal } );
            break;
        }
      }
      setKeyValData(newKeyValData);
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
          keyValData.map((keyValRecord, index) => {
            if (keyValRecord.panelType === 'div') {
              return <KeyValuePanel index={index} key={keyValRecord.title} title={keyValRecord.title} record={keyValRecord.record} />;
            } else {
              return <KeyValueTablePanel index={index} key={keyValRecord.title} title={keyValRecord.title} record={keyValRecord.record} />;
            }
          })
        }
      </div>
    </div>
  </div>;
}

export default EntityInfoPage;
