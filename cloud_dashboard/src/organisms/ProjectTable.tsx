import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'organisms/DataTable';
import CloudContext from 'model/CloudContext';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import SortInfo from 'model/SortInfo';
import EntityColumn from 'model/EntityColumn';
import { K8S_PROJECT_LIST } from 'constant';
import HttpService from 'service/http';
import EntityData from 'model/EntityData';
import { convertEntityData } from 'service/utility';
import { AppContext } from 'service/state';

/**
 * Get ProjectColumnList by cloud_context.
 * 
 * @param cloudContext cloud_context.
 * @returns ProjectColumnList.
 */
const getProjectColumnList = (cloudContext: CloudContext): EntityColumn[] => {
  switch (cloudContext.cloudServiceProvider) {
    case 'aws_cloud':
      return [];
    case 'k8s':
      return cloudContext.name !== 'ALL'
        ? K8S_PROJECT_LIST
        : [{ labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
          ...K8S_PROJECT_LIST];
  }
};

/**
 * Read ProjectList by JSON:API.
 * 
 * @param cloudContext cloud_context.
 * @param sortInfo Information of soring parameter.
 * @returns ProjectList.
 */
const readProjectList = async (cloudContext: CloudContext, sortInfo: SortInfo) => {
  // Create a GET parameter.
  const parameters: { key: string, value: string }[] = [];
  if (cloudContext.name !== 'ALL') {
    parameters.push({ key: 'filter[cloud_context]', value: cloudContext.name });
  }
  if (sortInfo.key !== '') {
    parameters.push(
      sortInfo.direction === 'ASC'
        ? { key: 'sort', value: sortInfo.key }
        : { key: 'sort', value: '-' + sortInfo.key }
    );
  }

  // Create the downloading URL.
  let url = `/jsonapi/cloud_project/${cloudContext.cloudServiceProvider}`;
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
 * ListView of Project.
 *
 * @param cloudContext cloud_context.
 * @returns JSX of LaunchTemplateView.
 */
const ProjectTable = ({ cloudContext }: {
  cloudContext: CloudContext
}) => {

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
      const columnList = getProjectColumnList(cloudContext);
      let newDataColumnList: DataColumn[] = columnList.map((column) => {
        return { key: column.name, label: column.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Load launch template's data.
      const rawData = await readProjectList(cloudContext, sortInfo);
      setDataRecordList(convertEntityData(rawData, columnList, cloudContextList, {}));
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContextList, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;

}

export default ProjectTable;
