type EntityInfoRecordData = {
  type: 'div',
  key: string,
  value: string
} | {
  type: 'table',
  title: string,
  record: Record<string, string>
} | {
  type: 'metrics',
  record: {
    title: string,
    yLabel: string,
    record: { x: number, y: number }[]
  }[]
};

export default EntityInfoRecordData;
