import React from 'react';
import EntityInfoRecordData from 'model/EntityInfoRecordData';

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
