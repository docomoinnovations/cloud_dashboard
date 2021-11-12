import EntityColumn from "./EntityColumn";

type EntityInfoRecord = {
  panelName: string,
  panelType: 'div',
  keyValueRecords: EntityColumn[]
} | {
  panelName: string,
  panelType: 'table',
  keyValueRecordKey: string,
}

export default EntityInfoRecord;
