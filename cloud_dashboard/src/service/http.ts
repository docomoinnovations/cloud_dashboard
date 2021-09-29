import { CACHE_EXPIRED_UNIXTIME } from "constant";

class HttpService {
  private cache: Record<string, {response: any, unixtime: number}> = {};
  private static instance: HttpService = new HttpService();

  static getInstance(): HttpService {
    return this.instance;
  }

  async getJson <T>(url: string, parameter?: RequestInit): Promise<T> {
    console.log(url);
    console.log(this.cache);
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
