import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'organisms/DataTable';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import SortInfo from 'model/SortInfo';
import EntityColumn from 'model/EntityColumn';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import { convertEntityData } from 'service/utility';
import { AppContext } from 'service/state';

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
const readDataList = async (sortInfo: SortInfo) => {
  // Create a GET parameter.
  const parameters: { key: string, value: string }[] = [];
  if (sortInfo.key !== '') {
    parameters.push(
      sortInfo.direction === 'ASC'
        ? { key: 'sort', value: sortInfo.key }
        : { key: 'sort', value: '-' + sortInfo.key }
    );
  }

  // Create the downloading URL.
  let url = `/jsonapi/cloud_store/k8s_namespace_resource_store`;
  if (parameters.length > 0) {
    url += '?' + parameters.map((r) => r.key + '=' + r.value).join('&');
  }
  const jsonApiServerUri = window.localStorage.getItem('jsonapiServerUri');
  if (jsonApiServerUri !== null) {
    url = jsonApiServerUri + url;
  }

  // Download Action.
  const httpService = HttpService.getInstance();
  const result = await httpService.getJson<{data: EntityData[]}>(url);
  return result.data;
};

/**
 * ListView of data.
 *
 * @returns JSX of LaunchTemplateView.
 */
const K8sNamespaceResourceTable = () => {

  const { cloudContextList } = useContext(AppContext);
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
      const rawData = await readDataList(sortInfo);
      setDataRecordList(convertEntityData(rawData, columnList, cloudContextList, {}));
    };
    init();
  }, [cloudContextList, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;

}

export default K8sNamespaceResourceTable;
