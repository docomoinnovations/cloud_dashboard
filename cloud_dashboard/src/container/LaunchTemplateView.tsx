import DataTable from 'component/DataTable';
import { AWS_LAUNCH_TEMPLATE_LIST, K8S_LAUNCH_TEMPLATE_LIST } from 'constant';
import CloudContext from 'model/CloudContext';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import EntityColumn from 'model/EntityColumn';
import EntityData from 'model/EntityData';
import SortInfo from 'model/SortInfo';
import React, { useEffect, useState } from 'react';
import HttpService from 'service/http';
import { convertDataForUI, getEntityDataAll } from 'service/utility';

/**
 * Get LaunchTemplateColumnList by cloud_context.
 * 
 * @param cloudContext cloud_context.
 * @returns LaunchTemplateColumnList.
 */
const getLaunchTemplateColumnList = (cloudContext: CloudContext): EntityColumn[] => {
  switch (cloudContext.cloudServiceProvider) {
    case 'aws_cloud':
      if (cloudContext.name !== 'ALL') {
        return AWS_LAUNCH_TEMPLATE_LIST;
      } else {
        return [
          { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
          ...AWS_LAUNCH_TEMPLATE_LIST
        ];
      }
    case 'k8s':
      if (cloudContext.name !== 'ALL') {
        return K8S_LAUNCH_TEMPLATE_LIST;
      } else {
        return [
          { labelName: 'Cloud Service Provider ID', name: 'cloud_context', type: 'default' },
          ...K8S_LAUNCH_TEMPLATE_LIST
        ];
      }
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

  // Download Action.
  const httpService = HttpService.getInstance();
  const result = await httpService.getJson<{data: EntityData[]}>(url);
  return result.data;
};

/**
 * Read entity's data for convert entity's data by JSON:API.
 * @param entityColumnList Information about the entities that will be loaded in advance.
 * @returns Data cache.
 */
const readDataCache = async (entityColumnList: EntityColumn[]) => {
  const dataCache: { [key: string]: EntityData[] } = {};
  for (const launchTemplateColumn of entityColumnList) {
    if (launchTemplateColumn.type !== 'join') {
      continue;
    }
    const entityTypeId = launchTemplateColumn.info.entityTypeId;
    if (entityTypeId in dataCache) {
      continue;
    }
    dataCache[entityTypeId] = await getEntityDataAll(entityTypeId);
  }
  return dataCache;
};

/**
 * Convert EntityData to DataRecord.
 * 
 * @param rawDataList List of EntityData.
 * @param entityColumnList List of EntiyColumn.
 * @param cloudContext cloud_context.
 * @param dataCache Data cache of EntityData.
 * @returns List of DataRecord.
 */
const convertEntityData = (
  rawDataList: EntityData[],
  entityColumnList: EntityColumn[],
  cloudContext: CloudContext,
  dataCache: { [key: string]: EntityData[] }) => {
  const newDataRecordList: DataRecord[] = [];
  for (const rawRecord of rawDataList) {
    const dataRecord: DataRecord = {
      id: rawRecord.id,
      value: {}
    };
    for (const launchTemplateColumn of entityColumnList) {
      const rawValue = rawRecord.attributes[launchTemplateColumn.name];
      if (launchTemplateColumn.name === 'cloud_context') {
        dataRecord.value[launchTemplateColumn.name] = cloudContext.labelName;
      } else {
        dataRecord.value[launchTemplateColumn.name] = convertDataForUI(rawValue, launchTemplateColumn, dataCache);
      }
    }
    newDataRecordList.push(dataRecord);
  }
  return newDataRecordList;
};

/**
 * ListView of LaunchTemplate.
 *
 * @param cloudContext cloud_context.
 * @returns JSX of LaunchTemplateView.
 */
const LaunchTemplateView: React.VFC<{
  cloudContext: CloudContext
}> = ({ cloudContext }) => {
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

export default LaunchTemplateView;
