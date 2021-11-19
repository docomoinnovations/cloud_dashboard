/**
 * Label name and data attribute's key of entity.
 */
type EntityColumn = {
  labelName: string;
  name: string;
  type: 'default' | 'datetime' | 'cpu' | 'memory' | 'key-value' | 'cost' | 'array' | 'key-value-crlf';
} | {
  labelName: string;
  name: string;
  type: 'boolean';
  value: [string, string];
} | {
  labelName: string;
  name: string;
  type: 'join';
  info: {
    entityTypeId: string;
    keyColumn: string;
    valueColumn: string;
  }
} | {
  labelName: '';
  name: '';
  type: 'metrics';
  column: {
    title: string,
    name: string,
    yLabel: string,
    type: 'default' | 'memory'
  }[]
};

export default EntityColumn;
