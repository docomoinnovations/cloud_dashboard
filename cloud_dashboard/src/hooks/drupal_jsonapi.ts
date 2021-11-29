import { CACHE_EXPIRED_UNIXTIME } from "constant";
import EntityData from "model/EntityData";
import SortInfo from "model/SortInfo";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "service/utility";

type CacheType = Record<string, {response: any, unixtime: number}>;
export type GetEntityListAllType = (entityTypeId: string, filter: {[key: string]: string}) => Promise<EntityData[]>;
export type GetJsonDataType = <T>(url: string, filter?: { [key: string]: string; }) => Promise<T>;

type GetEntityListOption = {
  // Maximum number of data to be retrieved.
  limit: number,
  // Offset at which to retrieve the data (0 origin)
  offset: number,
  // Filters when retrieving data.
  filter: {[key: string]: string},
  // Keys and directions to sort.
  sort: SortInfo,
};

/**
 * Download entity data by JSON:API.
 *
 * @param The getJson() function.
 * @param entityTypeId Entity type ID.
 * @param option Options of downloading.
 */
const getEntityListImpl = async (
  getJson: <T>(url: string, parameter?: RequestInit) => Promise<T>,
  entityTypeId: string,
  option: GetEntityListOption
) => {
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
  const res = await getJson<{data: EntityData[]}>(url);
  return res.data;
}

/**
 * Download ALL entity data by JSON:API.
 *
 * @param The getJson() function.
 * @param entityTypeId Entity type ID.
 * @param filter Filter for searching by keyword.
 */
const getEntityListAllImpl = async (
  getJson: <T>(url: string, parameter?: RequestInit) => Promise<T>,
  entityTypeId: string,
  filter: {[key: string]: string}
) => {
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

  // Download Action.
  let output: EntityData[] = [];
  while (true) {
    const res = await getJson<{
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
}

const useDrupalJsonApi = () => {
  const cache: CacheType = {};
  const [jsonApiServerUri, setJsonApiServerUri] = useState(
    getLocalStorageItem('jsonApiServerUri', '')
  );

  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch('/clouds/cloud_dashboard/config/jsonapi_server_uri');
        if (res.ok) {
          const temp = (await res.json()).uri;
          window.localStorage.setItem('jsonapiServerUri', temp);
          setJsonApiServerUri(temp);
        }
      } catch (e) {
        console.warn('Warn: Could not get the server URL for the JSON:API.');
        console.warn(e);
      }
    };
    init();
  }, []);

  /**
   * Get JSON data.
   *
   * @param url URL.
   * @param parameter Option of fetch().
   * @returns JSON data with type T.
   */
  const getJson = async <T>(url: string, parameter?: RequestInit): Promise<T> => {
    const fixedUrl = jsonApiServerUri + url;

    // If the data exists in the cache and is not expired, return it.
    if (fixedUrl in cache) {
      const cachedResponse = cache[fixedUrl];
      const nowUnixtime = (new Date()).getTime();
      if (nowUnixtime >= cachedResponse.unixtime && nowUnixtime - cachedResponse.unixtime < CACHE_EXPIRED_UNIXTIME) {
        return cachedResponse.response as T;
      }
    }

    const response = await (await fetch(fixedUrl, parameter)).json();
    const unixtime = (new Date()).getTime();
    cache[fixedUrl] = { response, unixtime };
    return response as T;
  }

  /**
   * Download entity data by JSON:API.
   *
   * @param entityTypeId Entity type ID.
   * @param option Options of downloading.
   */
  const getEntityList = async (entityTypeId: string, option: GetEntityListOption) => {
    return getEntityListImpl(getJson, entityTypeId, option);
  }

  /**
   * Download ALL entity data by JSON:API.
   *
   * @param entityTypeId Entity type ID.
   * @param filter Filter for searching by keyword.
   */
  const getEntityListAll = async (entityTypeId: string, filter: {[key: string]: string}) => {
    return getEntityListAllImpl(getJson, entityTypeId, filter);
  }

  /**
   * Remove JSON:API Server URI data for logout.
   */
  const removeJsonapiServerUri = () => {
    window.localStorage.removeItem('jsonapiServerUri');
  }

  /**
   * Get JSON data with filter.
   *
   * @param url URL.
   * @param filter Filter for searching by keyword.
   * @returns JSON data with type T.
   */
  const getJsonData = async <T>(url: string, filter: {[key: string]: string} = {}): Promise<T> => {
    // Create a GET parameter.
    const parameters: { key: string, value: string }[] = [];
    for (const key in filter) {
      parameters.push({ key, value: filter[key] });
    }

    // Create the downloading URL.
    let downloadUrl = url;
    if (parameters.length > 0) {
      downloadUrl += '?' + parameters.map((r) => r.key + '=' + r.value).join('&');
    }
    return await getJson<T>(downloadUrl);
  }

  return {
    getEntityList,
    getEntityListAll,
    removeJsonapiServerUri,
    getJsonData,
  };
}

export default useDrupalJsonApi;
