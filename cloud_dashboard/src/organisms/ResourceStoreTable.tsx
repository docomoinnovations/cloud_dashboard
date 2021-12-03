import useDrupalJsonApi, { GetEntityListAllType } from 'hooks/drupal_jsonapi';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import EntityColumn from 'model/EntityColumn';
import ResourceStoreTemplate from 'model/ResourceStoreTemplate';
import SortInfo from 'model/SortInfo';
import DataTable from 'organisms/DataTable';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { convertEntityData } from 'service/utility';

/**
 * Read dataList by JSON:API.
 * 
 * @param sortInfo Information of soring parameter.
 * @param bundleId Bundle ID.
 * @returns dataList.
 */
const readDataList = async (getEntityListAll: GetEntityListAllType, sortInfo: SortInfo, bundleId: string) => {

  const filter: { [key: string]: string } = {};
  if (sortInfo.key !== '') {
    filter['sort'] = sortInfo.direction === 'ASC' ? sortInfo.key : '-' + sortInfo.key;
  }
  return await getEntityListAll('cloud_store', filter, bundleId);

};

/**
 * ListView of data.
 *
 * @returns JSX of ResourceTable.
 */
const ResourceStoreTable = ({ template }: { template: ResourceStoreTemplate }) => {

  const { cloudContextList } = useContext(AppContext);
  const { getEntityListAll } = useDrupalJsonApi();
  const [dataColumnList, setDataColumnList] = useState<DataColumn[]>([]);
  const [dataRecordList, setDataRecordList] = useState<DataRecord[]>([]);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });

  /** Update dataColumnList and dataRecordList */
  useEffect(() => {
    const init = async () => {
      // Load launch template's column data.
      const columnList = template.column;
      let newDataColumnList: DataColumn[] = columnList.map((column) => {
        return { key: column.name, label: column.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Load launch template's data.
      const rawData = await readDataList(getEntityListAll, sortInfo, template.bundleId);
      setDataRecordList(convertEntityData(rawData, columnList, cloudContextList, {}));
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContextList, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;
}

export default ResourceStoreTable;
