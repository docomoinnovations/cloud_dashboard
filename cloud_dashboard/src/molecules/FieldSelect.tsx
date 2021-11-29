import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import FormSelect from 'atoms/FormSelect';
import CloudContext from 'model/CloudContext';
import useDrupalJsonApi, { GetEntityListAllType } from 'hooks/drupal_jsonapi';

/**
 * Get name list of field entity.
 *
 * @param cloudContext Cloud context.
 * @param columnKey Key of entity field.
 */
const getFieldEntityNameList = async (
  getEntityListAll: GetEntityListAllType,
  cloudContext: CloudContext,
  columnKey: string
): Promise<string[]> => {

  const filter: { [key: string]: string } = {};
  if (cloudContext.name !== 'ALL') {
    filter['cloud_context'] = cloudContext.name;
  }
  const entityTypeId = `${cloudContext.cloudServiceProvider}_${columnKey}`;
  const entityDataList = await getEntityListAll(entityTypeId, filter);
  return entityDataList.map((r) => r.attributes['name']);

};

/**
 * Selector of field column.
 * @param columnKey Field column key.
 * @param columnName Value of field column.
 * @param setColumnName Setter method of field column.
 * @param cloudServiceProvider Cloud Service Provider.
 */
const FieldSelect = ({ columnKey, columnName, setColumnName }: {
  columnKey: string,
  columnName: string,
  setColumnName: (s: string) => void
}) => {

  const { cloudContext } = useContext(AppContext);
  const { getEntityListAll } = useDrupalJsonApi();
  const [dataList, setDataList] = useState<string[]>([]);

  // Set columnData list.
  useEffect(() => {
    getFieldEntityNameList(getEntityListAll, cloudContext, columnKey).then((res) => {
      setDataList(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext]);

  return <FormSelect value={columnName} dataList={dataList} setvalue={(s) => {
    setColumnName(s);
  }} />;

}

export default FieldSelect;
