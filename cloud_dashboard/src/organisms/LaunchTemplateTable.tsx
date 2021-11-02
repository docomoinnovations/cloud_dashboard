import React, { useEffect, useState } from 'react';
import DataTable from 'organisms/DataTable';
import { AWS_LAUNCH_TEMPLATE_LIST, K8S_LAUNCH_TEMPLATE_LIST } from 'constant';
import CloudContext from 'model/CloudContext';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import EntityColumn from 'model/EntityColumn';
import EntityData from 'model/EntityData';
import SortInfo from 'model/SortInfo';
import HttpService from 'service/http';
import { convertEntityData, readDataCache } from 'service/utility';

/**
 * Get LaunchTemplateColumnList by cloud_context.
 * 
 * @param cloudContext cloud_context.
 * @returns LaunchTemplateColumnList.
 */
const getLaunchTemplateColumnList = (cloudContext: CloudContext): EntityColumn[] => {
  switch (cloudContext.cloudServiceProvider) {
    case 'aws_cloud':
      return cloudContext.name !== 'ALL'
        ? AWS_LAUNCH_TEMPLATE_LIST
        : [
          { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
          ...AWS_LAUNCH_TEMPLATE_LIST
        ];
    case 'k8s':
      return cloudContext.name !== 'ALL'
        ? K8S_LAUNCH_TEMPLATE_LIST
        : [
          { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
          ...K8S_LAUNCH_TEMPLATE_LIST
        ];
  }
};

/**
 * Read LaunchTemplateList by JSON:API.
 * 
 * @param cloudContext cloud_context.
 * @param sortInfo Information of soring parameter.
 * @returns LaunchTemplateList.
 */
const readLaunchTemplateList = async (cloudContext: CloudContext, sortInfo: SortInfo) => {
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
  let url = `/jsonapi/cloud_launch_template/${cloudContext.cloudServiceProvider}`;
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
 * ListView of LaunchTemplate.
 *
 * @param cloudContext cloud_context.
 * @returns JSX of LaunchTemplateView.
 */
const LaunchTemplateTable = ({ cloudContext }: {
  cloudContext: CloudContext
}) => {
  const [dataColumnList, setDataColumnList] = useState<DataColumn[]>([]);
  const [dataRecordList, setDataRecordList] = useState<DataRecord[]>([]);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });

  /** Update dataColumnList and dataRecordList */
  useEffect(() => {
    const init = async () => {
      // Load launch template's column data.
      const launchTemplateColumnList = getLaunchTemplateColumnList(cloudContext);
      let newDataColumnList: DataColumn[] = launchTemplateColumnList.map((launchTemplateColumn) => {
        return { key: launchTemplateColumn.name, label: launchTemplateColumn.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Cache the data you need.
      const dataCache = await readDataCache(launchTemplateColumnList);

      // Load launch template's data.
      const rawData = await readLaunchTemplateList(cloudContext, sortInfo);
      setDataRecordList(convertEntityData(rawData, launchTemplateColumnList, cloudContext, dataCache));
    };
    init();
  }, [cloudContext, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;
}

export default LaunchTemplateTable;
