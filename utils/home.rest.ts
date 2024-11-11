import type { NitroFetchRequest, $Fetch } from 'nitropack';
import FetchResponse from '~/model/FetchResponse/FetchResponse.model';
import type { TrendingAll } from '~/model/TrendingAll/TrendingAll.model';

export const getTrendingAll = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(params?: {}): Promise<FetchResponse<TrendingAll>> {
    return fetch<FetchResponse<TrendingAll>>(
      '/trending/all/day?language=en-US',
      params,
    );
  },
});
