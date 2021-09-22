import React, { useEffect, useState } from 'react';

/**
 * Selector of field column.
 * @param cloudContext Value of cloud context.
 * @param columnKey Field column key.
 * @param columnName Value of field column.
 * @param setColumnName Setter method of field column.
 * @param cloudConfigType Type of cloud config.
 */
const FieldSelect: React.VFC<{
  cloudContext: string,
  columnKey: string,
  columnName: string,
  setColumnName: (s: string) => void,
  cloudConfigType: string
}> = ({ cloudContext, columnKey, columnName, setColumnName, cloudConfigType }) => {
  const [dataList, setDataList] = useState<string[]>([]);

  // Set columnData list.
  useEffect(() => {
    let url = `/jsonapi/${cloudConfigType}_${columnKey}/${cloudConfigType}_${columnKey}`;
    if (cloudContext !== '') {
      url += `?cloudContext=${cloudContext}`;
    }
    fetch(url).then((res) => {
      return res.json();
    }).then((res) => {
      setDataList(res.data.map((record: any) => {
        return record.attributes.name;
      }));
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
