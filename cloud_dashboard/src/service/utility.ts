import EntityColumn from "model/EntityColumn";
import EntityData from "model/EntityData";
import MenuTemplate from "model/MenuTemplate";

/**
 * Padding Zero String.
 * @param data data
 * @param length data length
 * @returns Padded value
 */
const paddingZero = (data: any, length: number) => {
  return `000000${data}`.slice(-length);
}

/**
 * Convert to datetime string for UI.
 * @param dateString datetime string
 * @returns datetime string for UI
 */
const convertDateString = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  let output = `${year}/${paddingZero(month, 2)}/${paddingZero(day, 2)}`;
  output += ` - ${paddingZero(hour, 2)}:${paddingZero(minute, 2)}`;
  return output;
}

/**
 * Round number method.
 * @param value number
 * @param digit digit
 * @returns fixed value string
 */
const roundNumber = (value: number, digit: number) => {
  // This code means "x = 10 ^ digit".
  let x = 1.0;
  for (let i = 0; i < digit; i += 1) {
    x *= 10;
  }

  // Use guard clause.
  if (Math.floor(value) !== value) {
    return `${Math.round(value * x) / x}`;
  }

  let temp = `${value}`;
  if (digit !== 0) {
    temp += '.';
    for (let i = 0; i < digit; i += 1) {
      temp += '0';
    }
  }
  return temp;
};

/**
 * Converter of entity's data for UI.
 * @param data Entity's data
 * @param ec Information of Entity Column
 * @param dataCache Data cache for 'join' type
 */
export const convertDataForUI = (data: any, ec: EntityColumn, dataCache: {[key: string]: EntityData[]}) => {
  // Null check.
  if (data === null) {
    return '';
  }

  switch (ec.type) {
    case 'datetime':
      return convertDateString(data);
    case 'memory': {
      if (data >= 1024 * 1024 * 1024) {
        return `${roundNumber(data / (1024 * 1024 * 1024), 2)}Gi`;
      }
      if (data >= 1024 * 1024) {
        return `${roundNumber(data / (1024 * 1024), 2)}Mi`;
      }
      if (data >= 1024) {
        return `${roundNumber(data / (1024), 2)}Ki`;
      }
      return roundNumber(data, 2);
    }
    case 'key-value': {
      let temp: string[] = [];
      for (const record of data) {
        temp.push(`${record['item_key']}:${record['item_value']}`);
      }
      return temp.join(', ');
    }
    case 'cost':
      return `$${data}`;
    case 'boolean':
      return data ? ec.value[0] : ec.value[1];
    case 'array':
      return data.map((r: any) => `${r}`).join(', ');
    case 'join':
      for (const record of dataCache[ec.info.entityTypeId]) {
        const recordData: EntityData = record;
        if (recordData.attributes[ec.info.keyColumn] === data) {
          return recordData.attributes[ec.info.valueColumn];
        }
      }
      return `(${data})`;
    default:
      return data;
  }
};

/**
 * Getter of URL for MenuTemplate.
 * @param menu MenuTemplate
 * @returns URL
 */
export const getUrl = (menu: MenuTemplate) => {
  return `/${menu.type as string}/${menu.entityName}`;
};
