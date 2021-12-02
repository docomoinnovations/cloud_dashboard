import Table from 'bootstrap3-components/Table';
import EntityInfoRecordData from 'model/EntityInfoRecordData';
import React from 'react';

/**
 * Block of table view.
 *
 * @param record Record data fo table.
 */
const TableBlock = ({ record }: { record: EntityInfoRecordData }) => {

  if (record.type !== 'table') {
    return <></>;
  }

  return <div className="field field--name-tags field--type-key-value field--label-above">
    <div className="field--label">{record.title}</div>
    <div className="field--items">
      <div className="field--item">
        <Table hover={true} striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.entries(record.record).map((keyVal, index2) => {
                return <tr className={index2 % 2 === 0 ? 'odd' : 'even'}>
                  <td>{keyVal[0]}</td>
                  <td>{
                    keyVal[1].includes('\n')
                      ? <pre>{keyVal[1]}</pre>
                      : <>{keyVal[1]}</>
                  }</td>
                </tr>;
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  </div>;

}

export default TableBlock;
