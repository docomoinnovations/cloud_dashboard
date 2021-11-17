import EntityColumn from "./EntityColumn";

type EntityInfoRecord = {
  panelName: string,
  tableRecordList: string[],
  keyValueRecords: EntityColumn[]
};

export default EntityInfoRecord;
