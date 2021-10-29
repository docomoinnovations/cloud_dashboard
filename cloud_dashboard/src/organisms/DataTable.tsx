import React from 'react';
import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import SortInfo from 'model/SortInfo';
import DataTableHeader from 'molecules/DataTableHeader';
import DataTableRow from 'molecules/DataTableRow';

/**
 * Table for listing data.
 * @param dataColumnList List of DataColumn.
 * @param dataRecordList List of DataRecord.
 * @param sortInfo Information of soring parameter.
 * @param setSortInfo Setter of sortInfo.
*/
const DataTable = ({ dataColumnList, dataRecordList, sortInfo, setSortInfo }: {
  dataColumnList: DataColumn[],
  dataRecordList: DataRecord[],
  sortInfo: SortInfo,
  setSortInfo: (s: SortInfo) => void,
}) => {

  return <div className="table-responsive">
    <table className="responsive-enabled table table-hover table-striped">
      <thead>
        <tr>
          {dataColumnList.map((dataColumn) => {
            return <DataTableHeader dataColumn={dataColumn} sortInfo={sortInfo} setSortInfo={setSortInfo} />
          })}
        </tr>
      </thead>
      <tbody>
        {
          dataRecordList.map((dataRecord, index) => {
            return <DataTableRow
              dataRecord={dataRecord}
              dataColumnList={dataColumnList}
              className={index % 2 === 0 ? 'odd' : 'even'}
            />;
          })
        }
      </tbody>
    </table>
  </div>;

};

export default DataTable;
