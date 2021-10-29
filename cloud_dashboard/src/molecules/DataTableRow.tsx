import React from 'react';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';

/**
 * Row data of DataTable.
 *
 * @param dataRecord Record of data.
 * @param dataColumn List of DataColumn.
 * @param className Parameter of className.
*/
const DataTableRow = ({ dataRecord, dataColumnList, className }: {
  dataRecord: DataRecord,
  dataColumnList: DataColumn[],
  className?: string,
}) => {

  return <tr key={dataRecord.id} className={className}>
    {dataColumnList.map((dataColumn) => {
      return <td key={dataColumn.key}>
        {
          dataColumn.key in dataRecord.value
            ? dataRecord.value[dataColumn.key]
            : ''
        }
      </td>;
    })}
  </tr>;

}

export default DataTableRow;
