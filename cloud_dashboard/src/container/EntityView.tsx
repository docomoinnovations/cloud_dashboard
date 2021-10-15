import DataTable from 'component/DataTable';
import { ITEMS_PER_PAGE } from 'constant';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import MenuTemplate from 'model/MenuTemplate';
import SortInfo from 'model/SortInfo';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { convertEntityData, getEntityData, getEntityTypeId, readDataCache } from 'service/utility';

const EntityView: React.VFC<{
  menuTemplate: MenuTemplate
}> = ({menuTemplate}) => {
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
      const entityColumnList = menuTemplate.entityColumn;
      let newDataColumnList: DataColumn[] = entityColumnList.map((entityColumn) => {
        return { key: entityColumn.name, label: entityColumn.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Cache the data you need.
      const dataCache = await readDataCache(entityColumnList);

      // Create function parameter.
      const filter: {[key: string]: string} = {};
      if (cloudContext.name !== 'ALL') {
        filter['cloud_context'] = cloudContext.name;
      }
      const parameter = {
        limit: ITEMS_PER_PAGE,
        offset: 0 * ITEMS_PER_PAGE,
        filter,
        sort: sortInfo
      };

      // Load entity data.
      const rawData = await getEntityData(getEntityTypeId(menuTemplate), parameter);
      setDataRecordList(convertEntityData(rawData, entityColumnList, cloudContext, dataCache));
    };
    init();
  }, [menuTemplate, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;
}

export default EntityView;
