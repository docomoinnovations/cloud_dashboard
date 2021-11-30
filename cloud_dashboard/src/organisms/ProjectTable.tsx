import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'organisms/DataTable';
import CloudContext from 'model/CloudContext';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import SortInfo from 'model/SortInfo';
import EntityColumn from 'model/EntityColumn';
import { K8S_PROJECT_LIST } from 'constant';
import { convertEntityData } from 'service/utility';
import { AppContext } from 'service/state';
import useDrupalJsonApi, { GetEntityListAllType } from 'hooks/drupal_jsonapi';

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
const readProjectList = async (
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
  return await getEntityListAll('cloud_project', filter, cloudContext.cloudServiceProvider);

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
      const columnList = getProjectColumnList(cloudContext);
      let newDataColumnList: DataColumn[] = columnList.map((column) => {
        return { key: column.name, label: column.labelName };
      });
      setDataColumnList(newDataColumnList);

      // Load launch template's data.
      const rawData = await readProjectList(getEntityListAll, cloudContext, sortInfo);
      setDataRecordList(convertEntityData(rawData, columnList, cloudContextList, {}));
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContextList, sortInfo]);

  return <DataTable dataColumnList={dataColumnList} dataRecordList={dataRecordList} sortInfo={sortInfo} setSortInfo={setSortInfo} />;

}

export default ProjectTable;
