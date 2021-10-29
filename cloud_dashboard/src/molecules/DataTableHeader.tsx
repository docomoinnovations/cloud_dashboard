import React from 'react';
import SortDirectionIcon from 'atoms/SortDirectionIcon';
import DataColumn from 'model/DataColumn';
import SortInfo from 'model/SortInfo';

/**
 * TableHeader with sorting data function.
 *
 * @param dataColumn DataColumn.
 * @param sortInfo Information of soring parameter.
 * @param setSortInfo Setter of sortInfo.
*/
const DataTableHeader = ({ dataColumn, sortInfo, setSortInfo }: {
  dataColumn: DataColumn,
  sortInfo: SortInfo,
  setSortInfo: (s: SortInfo) => void,
}) => {

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
    return <th key={dataColumn.key} onClick={() => {
      changeSortMode(dataColumn.key);
    }}>{dataColumn.label}</th>;
  }

  // If the column is the target of the sort,
  // display the sort direction in addition to the label string.
  return <th key={dataColumn.key} className="is-active" onClick={() => {
    changeSortMode(dataColumn.key);
  }}>
    {dataColumn.label}
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" onClick={(e) => {
      e.preventDefault();
    }}>
      <SortDirectionIcon direction={sortInfo.direction} />
    </a>
  </th>;

};

export default DataTableHeader;
