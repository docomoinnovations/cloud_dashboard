import CloudContext from 'model/CloudContext';
import React, { useEffect, useState } from 'react';
import HttpService from 'service/http';

/**
 * Selector of field column.
 * @param cloudContext Value of cloud context.
 * @param columnKey Field column key.
 * @param columnName Value of field column.
 * @param setColumnName Setter method of field column.
 * @param cloudServiceProvider Cloud Service Provider.
 */
const FieldSelect: React.VFC<{
  cloudContext: CloudContext,
  columnKey: string,
  columnName: string,
  setColumnName: (s: string) => void
}> = ({ cloudContext, columnKey, columnName, setColumnName }) => {
  const [dataList, setDataList] = useState<string[]>([]);

  // Set columnData list.
  useEffect(() => {
    let url = `/jsonapi/${cloudContext.cloudServiceProvider}_${columnKey}/${cloudContext.cloudServiceProvider}_${columnKey}`;
    if (cloudContext.name !== 'ALL') {
      url += `?cloudContext=${cloudContext}`;
    }
    HttpService.getInstance().getJson<{data: any}>(url).then((res) => {
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
