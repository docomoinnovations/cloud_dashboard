import { AWS_LAUNCH_TEMPLATE_LIST, K8S_LAUNCH_TEMPLATE_LIST } from 'constant/constant';
import useDrupalJsonApi, { GetEntityListAllType } from 'hooks/drupal_jsonapi';
import CloudContext from 'model/CloudContext';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import EntityColumn from 'model/EntityColumn';
import SortInfo from 'model/SortInfo';
import DataTable from 'organisms/DataTable';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
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
const readLaunchTemplateList = async (
  getEntityListAll: GetEntityListAllType,
  cloudContext: CloudContext,
  sortInfo: SortInfo
) => {

  const filter: { [key: string]: string } = {};
  if (cloudContext.name !== 'ALL') {
    filter['filter[cloud_context]'] = cloudContext.name;
  }
  if (sortInfo.key !== '') {
    filter['sort'] = sortInfo.direction === 'ASC' ? sortInfo.key : '-' + sortInfo.key;
  }
  return await getEntityListAll('cloud_launch_template', filter, cloudContext.cloudServiceProvider);

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
      const launchTemplateColumnList = getLaunchTemplateColumnList(cloudContext);
      let newDataColumnList: DataColumn[] = launchTemplateColumnList.map((launchTemplateColumn) => {
        return { key: launchTemplateColumn.name, label: launchTemplateColumn.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Cache the data you need.
      const dataCache = await readDataCache(getEntityListAll, launchTemplateColumnList);

      // Load launch template's data.
      const rawData = await readLaunchTemplateList(getEntityListAll, cloudContext, sortInfo);
      setDataRecordList(convertEntityData(rawData, launchTemplateColumnList, cloudContextList, dataCache));
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContextList, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;

}

export default LaunchTemplateTable;
