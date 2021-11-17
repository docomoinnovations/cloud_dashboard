type EntityInfoRecordData = {
  type: 'div',
  key: string,
  value: string
} | {
  type: 'table',
  title: string,
  record: Record<string, string>
};

export default EntityInfoRecordData;
