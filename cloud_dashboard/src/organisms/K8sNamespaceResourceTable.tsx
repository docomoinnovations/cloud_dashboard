import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'organisms/DataTable';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import SortInfo from 'model/SortInfo';
import EntityColumn from 'model/EntityColumn';
import EntityData from 'model/EntityData';
import { convertEntityData } from 'service/utility';
import { AppContext } from 'service/state';
import useDrupalJsonApi, { GetJsonDataType } from 'hooks/drupal_jsonapi';

/**
 * Get columnList by cloud_context.
 *
 * @returns columnList.
 */
const getColumnList = (): EntityColumn[] => {
  return [
      { labelName: 'Name', name: 'name', type: 'default' },
      { labelName: 'Created', name: 'created', type: 'datetime' },
      { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
      { labelName: 'Costs', name: 'field_costs', type: 'key-value-crlf' },
      { labelName: 'Resources', name: 'field_resources', type: 'key-value-crlf' },
    ];
};

/**
 * Read dataList by JSON:API.
 * 
 * @param sortInfo Information of soring parameter.
 * @returns dataList.
 */
const readDataList = async (getJsonData: GetJsonDataType, sortInfo: SortInfo) => {

  const url = `/jsonapi/cloud_store/k8s_namespace_resource_store`;
  const filter: { [key: string]: string } = {};
  if (sortInfo.key !== '') {
    filter['sort'] = sortInfo.direction === 'ASC' ? sortInfo.key : '-' + sortInfo.key;
  }
  const result = await getJsonData<{data: EntityData[]}>(url, filter);
  return result.data;

};

/**
 * ListView of data.
 *
 * @returns JSX of LaunchTemplateView.
 */
const K8sNamespaceResourceTable = () => {

  const { cloudContextList } = useContext(AppContext);
  const { getJsonData } = useDrupalJsonApi();
  const [dataColumnList, setDataColumnList] = useState<DataColumn[]>([]);
  const [dataRecordList, setDataRecordList] = useState<DataRecord[]>([]);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });

  /** Update dataColumnList and dataRecordList */
  useEffect(() => {
    const init = async () => {
      // Load launch template's column data.
      const columnList = getColumnList();
      let newDataColumnList: DataColumn[] = columnList.map((column) => {
        return { key: column.name, label: column.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Load launch template's data.
      const rawData = await readDataList(getJsonData, sortInfo);
      setDataRecordList(convertEntityData(rawData, columnList, cloudContextList, {}));
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContextList, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;

}

export default K8sNamespaceResourceTable;
