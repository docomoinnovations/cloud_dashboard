import { ITEMS_PER_PAGE } from 'constant';
import CloudContext from 'model/CloudContext';
import EntityColumn from 'model/EntityColumn';
import EntityData from 'model/EntityData';
import SortInfo from 'model/SortInfo';
import React, { useEffect, useState } from 'react';
import { convertDataForUI, getEntityData, getEntityDataAll } from 'service/utility';

/**
 * Label of entity item's count.
 * @param entityTypeId Entity type ID.
 * @param column Entity's name list.
 * @param cloudContext Value of cloud context.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @param sortInfo Information of soring parameter.
 * @param setSortInfo Setter of sortInfo.
 * @param pageIndex Entity item's page index.
*/
const EntityTable: React.VFC<{
  entityTypeId: string,
  column: EntityColumn[],
  cloudContext: CloudContext,
  namespace: string,
  namespaceName: string,
  sortInfo: SortInfo,
  setSortInfo: (s: SortInfo) => void
  pageIndex: number
}> = ({ entityTypeId, column, cloudContext, namespace, namespaceName,
  sortInfo, setSortInfo, pageIndex }) => {
  const [entityList, setEntityList] = useState<EntityData[]>([]);
  const [entityList2, setEntityList2] = useState<EntityData[]>([]);

  /**
   * Change sort mode.
   * @param key Sort key.
   */
  const changeSortMode = (key: string) => {
    if (sortInfo.key !== key) {
      setSortInfo({ key, direction: 'ASC' });
      return;
    }
    if (sortInfo.direction === 'ASC') {
      setSortInfo({ key, direction: 'DESC' });
      return;
    }
    setSortInfo({ key: '', direction: 'ASC' });
  };

  // Make URL for getting entities by JSON:API.
  useEffect(() => {
    // Create function parameter.
    const filter: {[key: string]: string} = {};
    if (namespace !== '') {
      filter['namespace'] = namespace;
    }
    if (namespaceName !== '') {
      filter['namespaceName'] = namespaceName;
    }
    if (cloudContext.name !== 'ALL') {
      filter['cloud_context'] = cloudContext.name;
    }
    const parameter = {
      limit: ITEMS_PER_PAGE,
      offset: pageIndex * ITEMS_PER_PAGE,
      filter,
      sort: sortInfo
    };

    // Download entity data.
    getEntityData(entityTypeId, parameter).then((res) => {
      setEntityList(res);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namespace, namespaceName, cloudContext, sortInfo, pageIndex]);

  useEffect(() => {
    const updateEntityList = async () => {
      // Cache the data you need.
      const dataCache: {[key: string]: EntityData[]} = {};
      for (const cRecord of column) {
        if (cRecord.type === 'join' && !(cRecord.info.entityTypeId in dataCache)) {
          dataCache[cRecord.info.entityTypeId] = await getEntityDataAll(cRecord.info.entityTypeId);
        }
      }

      // Convert the data in entityList and write it to entityList2.
      const entityListTemp: EntityData[] = [];
      for (const record of entityList) {
        const record2: EntityData = {
          id: record.id,
          attributes: {}
        };
        for (const cRecord of column) {
          record2.attributes[cRecord.name] = convertDataForUI(record.attributes[cRecord.name], cRecord, dataCache);
        }
        entityListTemp.push(record2);
      }
      setEntityList2(entityListTemp);
    };
    updateEntityList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityList]);

  return <table className="table table-hover table-striped sticky-enabled sticky-table">
    <thead>
      <th>
        <input type="checkbox" className="form-checkbox" title="Select all rows" />
      </th>
      {column.map((record) => {
        return <th key={record.name} onClick={() => changeSortMode(record.name)}>
          {record.labelName}
          {sortInfo.key === record.name && sortInfo.direction === 'ASC' ? '↑'
            : sortInfo.key === record.name && sortInfo.direction === 'DESC' ? '↓'
              : ''}
        </th>
      })}
    </thead>
    <tbody>
      {entityList2.map((record) => {
        return <tr key={record.id}>
          <td>
            <input className="form-checkbox" type="checkbox" />
          </td>
          {column.map((cRecord) => {
            return <td key={cRecord.name}>
              {record.attributes[cRecord.name]}
            </td>
          })}
        </tr>;
      })}
    </tbody>
  </table>
};

export default EntityTable;
