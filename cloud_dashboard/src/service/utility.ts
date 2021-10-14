import CloudContext from "model/CloudContext";
import EntityColumn from "model/EntityColumn";
import EntityData from "model/EntityData";
import MenuTemplate from "model/MenuTemplate";
import SortInfo from "model/SortInfo";
import { useEffect, useRef } from "react";
import HttpService from "./http";

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
 * Getter of EntityListView's URL for MenuTemplate.
 * @param menu MenuTemplate
 * @returns URL
 */
export const getEntityListViewUrl = (menu: MenuTemplate) => {
  return `/${menu.cloudServiceProvider as string}/${menu.entityName}`;
};

/**
 * Getter of EntityTypeId for MenuTemplate.
 * @param menu MenuTemplate
 * @returns EntityTypeId
 */
export const getEntityTypeId = (menu: MenuTemplate) => {
  return `${menu.cloudServiceProvider as string}_${menu.entityName}`;
};

export const usePrevious =  <T> (value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/**
 * Download entity data by JSON:API.
 * @param entityTypeId Entity type ID.
 * @param option Options of downloading.
 */
export const getEntityData = async (entityTypeId: string, option: {
  // Maximum number of data to be retrieved.
  limit: number,
  // Offset at which to retrieve the data (0 origin)
  offset: number,
  // Filters when retrieving data.
  filter: {[key: string]: string},
  // Keys and directions to sort.
  sort: SortInfo,
}) => {
  // Create a GET parameter.
  const parameters: { key: string, value: string }[] = [];
  parameters.push({key: 'page[limit]', value: `${option.limit}`});
  parameters.push({key: 'page[offset]', value: `${option.offset}`});
  for (const key in option.filter) {
    parameters.push({ key: `filter[${key}]`, value: option.filter[key] });
  }
  if (option.sort.key !== '') {
    parameters.push(
      option.sort.direction === 'ASC'
        ? { key: 'sort', value: option.sort.key }
        : { key: 'sort', value: '-' + option.sort.key }
    );
  }

  // Create the downloading URL.
  let url = `/jsonapi/${entityTypeId}/${entityTypeId}`;
  if (parameters.length > 0) {
    url += '?' + parameters.map((r) => r.key + '=' + r.value).join('&');
  }

  // Download Action.
  const res = await HttpService.getInstance().getJson<{data: EntityData[]}>(url);
  return res.data;
};

/**
 * Download ALL entity data by JSON:API.
 * @param entityTypeId Entity type ID.
 */
export const getEntityDataAll = async (entityTypeId: string) => {
  let output: EntityData[] = [];
  const httpService = HttpService.getInstance();
  let url = `/jsonapi/${entityTypeId}/${entityTypeId}`;
  while (true) {
    const res = await httpService.getJson<{
      data: EntityData[],
      links: {
        next?: {
          href: string
        }
      }
    }>(url);
    output = [...output, ...res.data];
    if (res.links.next !== undefined) {
      url = res.links.next!.href;
    } else {
      break;
    }
  }
  return output;
};

/**
 * Getter of LaunchTemplateView's URL for CloudContext.
 * @param cloudContext CloudContext
 * @returns URL
 */
export const getLaunchTemplateViewUrl = (cloudContext: CloudContext) => {
  if (cloudContext.name === 'ALL') {
    return `/${cloudContext.cloudServiceProvider as string}/server_template`;
  } else {
    return `/server_template/${cloudContext.cloudServiceProvider as string}/${cloudContext.name}`;
  }
};
