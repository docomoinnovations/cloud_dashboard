import DataTable from 'organisms/DataTable';
import { ITEMS_PER_PAGE } from 'constant';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import EntityColumn from 'model/EntityColumn';
import SortInfo from 'model/SortInfo';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { convertEntityData, getEntityData, readDataCache } from 'service/utility';

const EntityView: React.VFC<{
  entityTypeId: string,
  entityColumnList: EntityColumn[],
  namespace: string,
  namespaceName: string,
  pageIndex: number,
}> = ({entityTypeId, entityColumnList, namespace, namespaceName, pageIndex}) => {
  const { cloudContext } = useContext(AppContext);
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
      const dataCache = await readDataCache(entityColumnList);

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
      const rawData = await getEntityData(entityTypeId, parameter);
      setDataRecordList(convertEntityData(rawData, entityColumnList, cloudContext, dataCache));
    };
    init();
  }, [cloudContext, entityTypeId, entityColumnList, sortInfo, namespace, namespaceName, pageIndex]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;
}

export default EntityView;
