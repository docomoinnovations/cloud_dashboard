import EntityColumn from 'model/EntityColumn';

type EntityInfoRecord = {
  panelName: string,
  tableRecordList: string[],
  keyValueRecords: EntityColumn[]
};

export default EntityInfoRecord;
