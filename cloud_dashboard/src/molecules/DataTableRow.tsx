import React from 'react';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';

/**
 * TD tag of DataTable.
 *
 * @param text Message.
 */
const DataTableData = ({text}: {
  text: string | number
}) => {
  if (typeof text === 'string' && text.includes('\n')) {
    const records = text.split('\n');
    return <>
      {records.map((r, index) => {
        if (index === 0) {
          return <span key={index}>{r}</span>;
        }
        return <span key={index}><br />{r}</span>;
      })}
    </>;
  } else {
    return <>{text}</>;
  }
}

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
        <DataTableData text={
          dataColumn.key in dataRecord.value
          ? dataRecord.value[dataColumn.key]
          : ''
        } />
      </td>;
    })}
  </tr>;

}

export default DataTableRow;
