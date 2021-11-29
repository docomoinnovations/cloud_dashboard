import L from "leaflet";
import CloudContenxtItem from "model/CloudContenxtItem";
import CloudContext from "model/CloudContext";
import DataRecord from "model/DataRecord";
import EntityColumn from "model/EntityColumn";
import EntityData from "model/EntityData";
import MenuTemplate from "model/MenuTemplate";
import RawCloudContextItem from "model/RawCloudContextItem";
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
export const convertDateString = (dateString: string) => {
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

  let textBuffer = `${value}`;
  if (digit !== 0) {
    textBuffer += '.';
    for (let i = 0; i < digit; i += 1) {
      textBuffer += '0';
    }
  }
  return textBuffer;
};

const convertKeyValueCrLfData = (data: string) => {
  const records = data.split('\n');
  const CONVERT_KEY_VALUE_CRLF_DICT: Record<string, string> = {
    'on_demand_hourly: ': 'On-demand Hourly ($): ',
    'on_demand_daily: ': 'On-demand Daily ($): ',
    'on_demand_monthly: ': 'On-demand Monthly ($): ',
    'on_demand_yearly: ': 'On-demand Yearly ($): ',
    'ri_one_year: ': 'RI 1 Year ($): ',
    'ri_three_year: ': 'RI 3 Year ($): ',
    'cpu: ': 'CPU (Usage): ',
    'memory: !!float ': 'Memory (Usage): ',
    'memory: ': 'Memory (Usage): ',
    'pod_allocation: ': 'Pods (Allocation): ',
    'cpu_capacity: !!float ': 'CPU (Capacity): ',
    'memory_capacity: !!float ': 'Memory (Capacity): ',
    'pod_capacity: ': 'Pods (Capacity): ',
  };
  const fixedRecords: string[] = [];
  for (const record of records) {
    if (record === '') {
      continue;
    }
    let fixedRecord = record;
    for (const key in CONVERT_KEY_VALUE_CRLF_DICT) {
      if (record.includes(key)) {
        const value = record.replace(key, '');
        const valueFloat = parseFloat(value);
        if (key.includes('!!float') || key.includes('memory: ')) {
          if (valueFloat >= 1024 * 1024 * 1024) {
            fixedRecord = `${CONVERT_KEY_VALUE_CRLF_DICT[key]}${roundNumber(valueFloat / (1024 * 1024 * 1024), 2)}Gi`;
          } else if (valueFloat >= 1024 * 1024) {
            fixedRecord = `${CONVERT_KEY_VALUE_CRLF_DICT[key]}${roundNumber(valueFloat / (1024 * 1024), 2)}Mi`;
          } else if (valueFloat >= 1024) {
            fixedRecord = `${CONVERT_KEY_VALUE_CRLF_DICT[key]}${roundNumber(valueFloat / (1024), 2)}Ki`;
          } else {
            fixedRecord = `${CONVERT_KEY_VALUE_CRLF_DICT[key]}${roundNumber(valueFloat, 2)}`;
          }
        } else {
          fixedRecord = CONVERT_KEY_VALUE_CRLF_DICT[key].includes('Pods ')
            ? CONVERT_KEY_VALUE_CRLF_DICT[key] + value
            : CONVERT_KEY_VALUE_CRLF_DICT[key] + roundNumber(valueFloat, 2);
        }
        break;
      }
    }
    fixedRecords.push(fixedRecord);
  }
  return fixedRecords.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  }).join('\n');
}

/**
 * Converter of entity's data for UI.
 * @param data Entity's data
 * @param ec Information of Entity Column
 * @param dataCache Data cache for 'join' type
 */
export const convertDataForUI = (data: any, ec: EntityColumn, dataCache: {[key: string]: EntityData[]}): string => {
  // Null check.
  if (data === null) {
    return '';
  }

  switch (ec.type) {
    case 'datetime':
      return convertDateString(data);
    case 'cpu':
      return roundNumber(data, 2);
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
      let records: string[] = [];
      for (const record of data) {
        records.push(`${record['item_key']}:${record['item_value']}`);
      }
      return records.join(', ');
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
      return `${data}`;
    case 'key-value-crlf':
      return convertKeyValueCrLfData(data);
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
  const jsonApiServerUri = window.localStorage.getItem('jsonapiServerUri');
  if (jsonApiServerUri !== null) {
    url = jsonApiServerUri + url;
  }

  // Download Action.
  const res = await HttpService.getInstance().getJson<{data: EntityData[]}>(url);
  return res.data;
};

/**
 * Download ALL entity data by JSON:API.
 * @param entityTypeId Entity type ID.
 * @param filter Filter for searching by keyword.
 */
export const getEntityDataAll = async (entityTypeId: string, filter: {[key: string]: string} = {}) => {
  // Create a GET parameter.
  const parameters: { key: string, value: string }[] = [];
  for (const key in filter) {
    parameters.push({ key: `filter[${key}]`, value: filter[key] });
  }

  // Create the downloading URL.
  let url = `/jsonapi/${entityTypeId}/${entityTypeId}`;
  if (parameters.length > 0) {
    url += '?' + parameters.map((r) => r.key + '=' + r.value).join('&');
  }
  const jsonApiServerUri = window.localStorage.getItem('jsonapiServerUri');
  if (jsonApiServerUri !== null) {
    url = jsonApiServerUri + url;
  }

  // Download Action.
  let output: EntityData[] = [];
  const httpService = HttpService.getInstance();
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
  return cloudContext.name === 'ALL'
    ? `/${cloudContext.cloudServiceProvider as string}/server_template`
    : `/server_template/${cloudContext.cloudServiceProvider as string}/${cloudContext.name}`;
};

/**
 * Read entity's data for convert entity's data by JSON:API.
 * @param entityColumnList Information about the entities that will be loaded in advance.
 * @returns Data cache.
 */
export const readDataCache = async (entityColumnList: EntityColumn[]) => {
  const dataCache: { [key: string]: EntityData[] } = {};
  for (const entityColumn of entityColumnList) {
    if (entityColumn.type !== 'join') {
      continue;
    }
    const entityTypeId = entityColumn.info.entityTypeId;
    if (entityTypeId in dataCache) {
      continue;
    }
    dataCache[entityTypeId] = await getEntityDataAll(entityTypeId);
  }
  return dataCache;
};

/**
 * Convert EntityData to DataRecord.
 * 
 * @param rawDataList List of EntityData.
 * @param entityColumnList List of EntiyColumn.
 * @param cloudContext cloud_context.
 * @param dataCache Data cache of EntityData.
 * @returns List of DataRecord.
 */
export const convertEntityData = (
  rawDataList: EntityData[],
  entityColumnList: EntityColumn[],
  cloudContextList: CloudContext[],
  dataCache: { [key: string]: EntityData[] }) => {
  const newDataRecordList: DataRecord[] = [];
  for (const rawRecord of rawDataList) {
    // convert (rawRecord: EntityData) => (dataRecord: DataRecord)
    const dataRecord: DataRecord = {
      id: rawRecord.id,
      value: {}
    };

    // Read data column by launchTemplateColumn, convert as appropriate, and write it out.
    for (const launchTemplateColumn of entityColumnList) {
      // Read data column by launchTemplateColumn.
      const rawValue = rawRecord.attributes[launchTemplateColumn.name];

      // Convert as appropriate.
      if (launchTemplateColumn.name !== 'cloud_context') {
        // If it is not 'cloud_context', convert it by convertDataForUI().
        dataRecord.value[launchTemplateColumn.name] = convertDataForUI(rawValue, launchTemplateColumn, dataCache);
        continue;
      }
      // Search for possible candidates.
      const candidate = cloudContextList.filter((r) => {
        return r.name !== 'ALL' && r.name === rawValue;
      });
      // Branching depending on the number of candidates.
      dataRecord.value[launchTemplateColumn.name] = candidate.length >= 1
        ? candidate[0].labelName
        : rawValue;
    }
    // Write it out.
    newDataRecordList.push(dataRecord);
  }
  return newDataRecordList;
};

/**
 * Get a list of CloudContext coordinates from the Drupal Cloud module.
 *
 * @returns List of RawCloudContextItem.
 */
export const loadRawCloudContextItemList = async () => {
  let url = '/clouds/cloud_config_location';
  const jsonApiServerUri = window.localStorage.getItem('jsonapiServerUri');
  if (jsonApiServerUri !== null) {
    url = jsonApiServerUri + url;
  }
  const http = HttpService.getInstance();
  return await http.getJson<RawCloudContextItem[]>(url);
};

/**
 * Convert a list of RawCloudContextItem to a format more suitable for display.
 *
 * @param rawCloudContenxtItemList List of RawCloudContextItem.
 * @returns List of CloudContextItem.
 */
export const convertCloudContenxtItemList = (
  rawCloudContenxtItemList: RawCloudContextItem[],
  defaultIconUri: string
): CloudContenxtItem[] => {
  const hash: Record<string, CloudContenxtItem> = {};
  for (const rawCloudContenxtItem of rawCloudContenxtItemList) {
    const hashKey = `${rawCloudContenxtItem.Latitude},${rawCloudContenxtItem.Longitude}`;
    if (hashKey in hash) {
      hash[hashKey].icon = new L.Icon({
        iconUrl: defaultIconUri
      });
    } else {
      hash[hashKey] = {
        icon: new L.Icon({
          iconUrl: rawCloudContenxtItem.Items[0].Image
        }),
        cloudServiceProvider: rawCloudContenxtItem.Type,
        position: [
          parseFloat(rawCloudContenxtItem.Latitude),
          parseFloat(rawCloudContenxtItem.Longitude),
        ],
        item: []
      };
    }

    const itemList = rawCloudContenxtItem.Items.map((rawItem) => {
      return {
        iconUrl: rawItem.Image,
        entityViewUrl: rawCloudContenxtItem.Type === 'aws_cloud'
          ? '/aws_cloud/instance'
          : '/k8s/node',
        name: rawItem.Name,
        positionLabel: `${rawCloudContenxtItem.City}, ${rawCloudContenxtItem.Country}`,
      };
    });
    hash[hashKey].item = [...hash[hashKey].item, ...itemList];
  }
  return Object.values(hash);
}

/**
 * Getter of ProjectView's URL for CloudContext.
 * @param cloudContext CloudContext
 * @returns URL
 */
export const getProjectViewUrl = (cloudContext: CloudContext) => {
  return cloudContext.name === 'ALL'
    ? `/${cloudContext.cloudServiceProvider as string}/project`
    : `/project/${cloudContext.name}`;
};
