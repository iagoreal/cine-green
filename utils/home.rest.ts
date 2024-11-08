import type { NitroFetchRequest, $Fetch } from 'nitropack';
import type FetchResponse from '~/model/FetchResponse/FetchResponse.model';

export const getTrendingAll = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(): Promise<FetchResponse> {
    return fetch<FetchResponse>('/trending/all/day?language=en-US');
  },
});
