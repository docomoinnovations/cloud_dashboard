import React from 'react';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import { Link } from 'react-router-dom';

/**
 * TD tag of DataTable.
 *
 * @param text Message.
 */
const DataTableData = ({text, link}: {
  text: string | number,
  link?: string
}) => {
  const records = typeof text === 'string' && text.includes('\n')
    ? text.split('\n')
    : [`${text}`];
  if (typeof link === 'string') {
    return <Link to={link}>
      {records.map((r, index) => {
        if (index === 0) {
          return <span key={index}>{r}</span>;
        }
        return <span key={index}><br />{r}</span>;
      })}
    </Link>;
  }
  return <>
    {records.map((r, index) => {
      if (index === 0) {
        return <span key={index}>{r}</span>;
      }
      return <span key={index}><br />{r}</span>;
    })}
  </>;
}

/**
 * Row data of DataTable.
 *
 * @param dataRecord Record of data.
 * @param dataColumn List of DataColumn.
 * @param className Parameter of className.
 * @param detailInfo Information required to create a link to more information.
*/
const DataTableRow = ({ dataRecord, dataColumnList, className, detailInfo }: {
  dataRecord: DataRecord,
  dataColumnList: DataColumn[],
  className?: string,
  detailInfo?: {
    column: string,
    path: string,
  },
}) => {

  return <tr key={dataRecord.id} className={className}>
    {dataColumnList.map((dataColumn) => {
      return <td key={dataColumn.key}>
        <DataTableData text={
          dataColumn.key in dataRecord.value
          ? dataRecord.value[dataColumn.key]
          : ''
        } link={dataColumn.key === detailInfo?.column
            ? `${detailInfo.path}/${dataRecord.id}`
            : undefined} />
      </td>;
    })}
  </tr>;

}

export default DataTableRow;
