import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';
import { getEntityDataAll } from 'service/utility';

/**
 * Selector of field column.
 * @param columnKey Field column key.
 * @param columnName Value of field column.
 * @param setColumnName Setter method of field column.
 * @param cloudServiceProvider Cloud Service Provider.
 */
const FieldSelect: React.VFC<{
  columnKey: string,
  columnName: string,
  setColumnName: (s: string) => void
}> = ({ columnKey, columnName, setColumnName }) => {
  const { cloudContext } = useContext(AppContext);
  const [dataList, setDataList] = useState<string[]>([]);

  // Set columnData list.
  useEffect(() => {
    const filter: {[key: string]: string} = {};
    if (cloudContext.name !== 'ALL') {
      filter['cloudContext'] = cloudContext.name;
    }
    const entityTypeId = `${cloudContext.cloudServiceProvider}_${columnKey}`;
    getEntityDataAll(entityTypeId, filter).then((res) => {
      setDataList(res.map((r) => r.attributes['name']));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext]);

  return <select className="form-select form-control" value={columnName}
    onChange={(e) => {
      setColumnName(e.currentTarget.value);
    }}>
    <option value="">- すべて -</option>
    {dataList.map((data) => {
      return <option value={data} key={data}>{data}</option>
    })}
  </select>;
}

export default FieldSelect;
