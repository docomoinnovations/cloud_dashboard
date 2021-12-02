import EntityInfoRecordData from 'model/EntityInfoRecordData';
import React from 'react';

/**
 * Block of key-value info view.
 *
 * @param record Record data fo key-value info.
 */
const KeyValueBlock = ({ record }: { record: EntityInfoRecordData }) => {

  if (record.type !== 'div') {
    return <></>;
  }

  return <div className="field field--name-name field--type-string field--label-inline">
    <div className="field--label">{record.key}</div>
    <div className="field--item">{
      record.value.includes('\n')
        ? <pre>{record.value}</pre>
        : <>{record.value}</>
    }</div>
  </div>;

}

export default KeyValueBlock;
