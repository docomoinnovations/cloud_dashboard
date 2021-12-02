import { ITEMS_PER_PAGE } from 'constant';
import useDrupalJsonApi from 'hooks/drupal_jsonapi';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import EntityColumn from 'model/EntityColumn';
import SortInfo from 'model/SortInfo';
import DataTable from 'organisms/DataTable';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { convertEntityData, readDataCache } from 'service/utility';

/**
 * Table for entity data.
 *
 * @param entityTypeId Entity type ID.
 * @param entityColumnList List of EntiyColumn.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @param pageIndex Entity item's page index.
 * @param detailInfo Information required to create a link to more information.
*/
const EntityTable = ({entityTypeId, entityColumnList, namespace, namespaceName, pageIndex, detailInfo}: {
  entityTypeId: string,
  entityColumnList: EntityColumn[],
  namespace: string,
  namespaceName: string,
  pageIndex: number,
  detailInfo?: {
    column: string,
    path: string,
  },
}) => {

  const { cloudContext, cloudContextList } = useContext(AppContext);
  const { getEntityList, getEntityListAll } = useDrupalJsonApi();
  const [dataColumnList, setDataColumnList] = useState<DataColumn[]>([]);
  const [dataRecordList, setDataRecordList] = useState<DataRecord[]>([]);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });

  /** Update dataColumnList and dataRecordList */
  useEffect(() => {
    const init = async () => {
      // Load column data.
      let newDataColumnList: DataColumn[] = entityColumnList.map((entityColumn) => {
        return { key: entityColumn.name, label: entityColumn.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Cache the data you need.
      const dataCache = await readDataCache(getEntityListAll, entityColumnList);

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

      // Load entity data.
      const rawData = await getEntityList(entityTypeId, parameter);
      setDataRecordList(convertEntityData(rawData, entityColumnList, cloudContextList, dataCache));
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContextList, entityTypeId, entityColumnList, sortInfo, namespace, namespaceName, pageIndex]);

  return <DataTable
    dataColumnList={dataColumnList}
    dataRecordList={dataRecordList}
    sortInfo={sortInfo}
    setSortInfo={setSortInfo}
    detailInfo={detailInfo} />;

}

export default EntityTable;
