import type { NitroFetchRequest, $Fetch } from 'nitropack';
import type FetchResponse from '~/model/FetchResponse/FetchResponse.model';
import type { TvShowModel } from '~/model/tvShow/tvShow.model';
export const getAllTvShow = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(params?: {}): Promise<FetchResponse<TvShowModel>> {
    return fetch<FetchResponse<TvShowModel>>(
      '/trending/tv/day?language=en-US',
      params,
    );
  },
});
