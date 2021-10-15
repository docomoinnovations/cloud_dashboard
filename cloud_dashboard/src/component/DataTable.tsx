import DataColumn from 'model/DataColumn';
import DataRecord from 'model/DataRecord';
import SortInfo from 'model/SortInfo';
import React from 'react';

/**
 * Icon glyph for showing sort direction.
 * @param direction Sort direction.
 */
const SortDirectionIcon: React.VFC<{direction: "ASC" | "DESC"}> = ({direction}) => {
  return direction === 'ASC'
  ? <span className="icon glyphicon glyphicon-chevron-up icon-after"
    aria-hidden="true" data-toggle="tooltip"
    data-placement="bottom" title=""
    data-original-title="Sort by descending order"></span>
  : <span className="icon glyphicon glyphicon-chevron-down icon-after"
    aria-hidden="true" data-toggle="tooltip"
    data-placement="bottom" title=""
    data-original-title="Sort by ascending order"></span>;
};

/**
 * TableHeader with sorting data function.
 * @param dataColumn DataColumn.
 * @param sortInfo Information of soring parameter.
 * @param setSortInfo Setter of sortInfo.
*/
const DataTableHeader: React.VFC<{
  dataColumn: DataColumn,
  sortInfo: SortInfo,
  setSortInfo: (s: SortInfo) => void,
}> = ({ dataColumn, sortInfo, setSortInfo }) => {
  /**
   * Change sort mode.
   * @param key Sort key.
   */
  const changeSortMode = (key: string) => {
    if (sortInfo.key !== key) {
      setSortInfo({ key, direction: 'ASC' });
      return;
    }
    if (sortInfo.direction === 'ASC') {
      setSortInfo({ key, direction: 'DESC' });
      return;
    }
    setSortInfo({ key: '', direction: 'ASC' });
  };

  // If the column is not the target of the sort, just display the label string.
  if (sortInfo.key !== dataColumn.key) {
    return <th key={dataColumn.key} onClick={() => changeSortMode(dataColumn.key)}>{dataColumn.label}</th>;
  }

  // If the column is the target of the sort,
  // display the sort direction in addition to the label string.
  return <th key={dataColumn.key} className="is-active" onClick={() => changeSortMode(dataColumn.key)}>
    {dataColumn.label}
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" onClick={(e) => e.preventDefault()}>
      <SortDirectionIcon direction={sortInfo.direction} />
    </a>
  </th>;
};

/**
 * Table for listing data.
 * @param dataColumnList List of DataColumn.
 * @param dataRecordList List of DataRecord.
 * @param sortInfo Information of soring parameter.
 * @param setSortInfo Setter of sortInfo.
*/
const DataTable: React.VFC<{
  dataColumnList: DataColumn[],
  dataRecordList: DataRecord[],
  sortInfo: SortInfo,
  setSortInfo: (s: SortInfo) => void,
}> = ({ dataColumnList, dataRecordList, sortInfo, setSortInfo }) => {
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
            return <tr key={dataRecord.id} className={index % 2 === 0 ? 'odd' : 'even'}>
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
          })
        }
      </tbody>
    </table>
  </div>;
};

export default DataTable;
