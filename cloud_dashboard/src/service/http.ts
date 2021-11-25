import { CACHE_EXPIRED_UNIXTIME } from "constant";

/**
 * Service class for HTTP connection.
 */
class HttpService {
  // Data cache.
  private cache: Record<string, {response: any, unixtime: number}> = {};
  // This only instance.
  private static instance: HttpService = new HttpService();

  /**
   * Getter of this only instance.
   * @returns This only instance.
   */
  static getInstance(): HttpService {
    return this.instance;
  }

  /**
   * Get JSON data.
   *
   * @param url URL.
   * @param parameter Option of fetch().
   * @returns JSON data with type T.
   */
  async getJson <T>(url: string, parameter?: RequestInit): Promise<T> {
    // If the data exists in the cache and is not expired, return it.
    if (url in this.cache) {
      const cachedResponse = this.cache[url];
      const nowUnixtime = (new Date()).getTime();
      if (nowUnixtime >= cachedResponse.unixtime && nowUnixtime - cachedResponse.unixtime < CACHE_EXPIRED_UNIXTIME) {
        return cachedResponse.response as T;
      }
    }

    const response = await (await fetch(url, parameter)).json();
    const unixtime = (new Date()).getTime();
    this.cache[url] = {response, unixtime};
    return response as T;
  }
}

export default HttpService;
